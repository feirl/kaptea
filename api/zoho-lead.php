<?php
/**
 * zoho-lead.php — Kaptea /get-started lead submission endpoint
 *
 * Accepts a JSON POST, refreshes a Zoho OAuth token, and creates a Lead.
 * Credentials must NOT be in this file or the repo.
 * Create api/zoho-config.php on the server (see zoho-config.php.example).
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// ── Method guard ─────────────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['ok' => false, 'error' => 'Method not allowed']));
}

// ── Origin allowlist ──────────────────────────────────────────────────────────
$allowed_origins = ['https://staging.kaptea.io', 'https://kaptea.io'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin) {
    if (!in_array($origin, $allowed_origins, true)) {
        http_response_code(403);
        exit(json_encode(['ok' => false, 'error' => 'Forbidden']));
    }
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

// ── Rate limit: 5 requests per 60 s per IP (file-based) ──────────────────────
$ip      = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rl_dir  = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'krl';
$rl_file = $rl_dir . DIRECTORY_SEPARATOR . md5($ip) . '.json';
if (!is_dir($rl_dir)) {
    @mkdir($rl_dir, 0700, true);
}
$now    = time();
$window = 60;
$limit  = 5;
$hits   = [];
if (is_file($rl_file)) {
    $hits = json_decode((string) file_get_contents($rl_file), true) ?? [];
}
$hits = array_values(array_filter($hits, fn($t) => $t > $now - $window));
if (count($hits) >= $limit) {
    http_response_code(429);
    exit(json_encode(['ok' => false, 'error' => 'Too many requests']));
}
$hits[] = $now;
@file_put_contents($rl_file, json_encode($hits), LOCK_EX);

// ── Load credentials ──────────────────────────────────────────────────────────
$cfg_file = __DIR__ . '/zoho-config.php';
if (is_file($cfg_file)) {
    require $cfg_file;
} else {
    define('ZOHO_CLIENT_ID',     (string) getenv('ZOHO_CLIENT_ID'));
    define('ZOHO_CLIENT_SECRET', (string) getenv('ZOHO_CLIENT_SECRET'));
    define('ZOHO_REFRESH_TOKEN', (string) getenv('ZOHO_REFRESH_TOKEN'));
}

if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
    error_log('[zoho-lead] Credentials not configured');
    http_response_code(500);
    exit(json_encode(['ok' => false, 'error' => 'Server configuration error']));
}

// ── Parse body ────────────────────────────────────────────────────────────────
$raw = (string) file_get_contents('php://input');
$d   = json_decode($raw, true);
if (!is_array($d)) {
    http_response_code(400);
    exit(json_encode(['ok' => false, 'error' => 'Invalid JSON']));
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function str_field(array $d, string $k, int $max = 200): string {
    return mb_substr(trim((string) ($d[$k] ?? '')), 0, $max);
}
function arr_field(array $d, string $k): array {
    $v = $d[$k] ?? [];
    return is_array($v) ? array_map('strval', $v) : [];
}
function fmt_arr(array $a): string {
    return $a ? implode(', ', $a) : 'Not specified';
}
function zoho_curl(string $url, array $opts): array {
    $ch = curl_init($url);
    curl_setopt_array($ch, $opts + [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 15,
        CURLOPT_SSL_VERIFYPEER => true,
    ]);
    $body = curl_exec($ch);
    $err  = curl_error($ch);
    curl_close($ch);
    if ($err || $body === false) {
        return ['_curl_error' => $err];
    }
    return json_decode((string) $body, true) ?? ['_raw' => $body];
}

// ── Honeypot: bots fill this, humans don't ───────────────────────────────────
if (!empty($d['website'])) {
    exit(json_encode(['ok' => true])); // silent success
}

// ── Extract fields ────────────────────────────────────────────────────────────
$firstname   = str_field($d, 'firstname');
$lastname    = str_field($d, 'lastname');
$email       = str_field($d, 'email', 320);
$phone       = str_field($d, 'phone');
$company     = str_field($d, 'company');
$channels    = arr_field($d, 'channels');
$usecases    = arr_field($d, 'usecases');
$aiagents    = arr_field($d, 'aiagents');
$regions     = arr_field($d, 'regions');
$cpaas       = str_field($d, 'cpaas');
$vol_typical = str_field($d, 'volume_typical_label');
$vol_surge   = str_field($d, 'volume_surge_label');

// ── Validate required fields ──────────────────────────────────────────────────
if (!$lastname || !$company) {
    http_response_code(400);
    exit(json_encode(['ok' => false, 'error' => 'Missing required fields: lastname, company']));
}
if ($email && !preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', $email)) {
    http_response_code(400);
    exit(json_encode(['ok' => false, 'error' => 'Invalid email format']));
}

// ── Refresh Zoho access token ─────────────────────────────────────────────────
$token_res = zoho_curl('https://accounts.zoho.com/oauth/v2/token', [
    CURLOPT_POST       => true,
    CURLOPT_POSTFIELDS => http_build_query([
        'grant_type'    => 'refresh_token',
        'client_id'     => ZOHO_CLIENT_ID,
        'client_secret' => ZOHO_CLIENT_SECRET,
        'refresh_token' => ZOHO_REFRESH_TOKEN,
    ]),
]);

$access_token = $token_res['access_token'] ?? '';
if (!$access_token) {
    error_log('[zoho-lead] Token refresh failed: ' . json_encode($token_res));
    http_response_code(502);
    exit(json_encode(['ok' => false, 'error' => 'Token refresh failed']));
}

// ── Build Description block ───────────────────────────────────────────────────
$description = implode("\n", [
    'Submitted via the Get Started flow on kaptea.io.',
    '',
    'Channels: '                   . fmt_arr($channels),
    'Use cases: '                  . fmt_arr($usecases),
    'AI agents: '                  . fmt_arr($aiagents),
    'Server regions: '             . fmt_arr($regions),
    'Current CPaaS provider: '     . ($cpaas       ?: 'Not specified'),
    'Typical monthly volume: '     . ($vol_typical  ?: 'Not specified'),
    'Surge capacity requirement: ' . ($vol_surge     ?: 'Not specified'),
]);

// ── Create Zoho Lead ──────────────────────────────────────────────────────────
$payload = json_encode([
    'data' => [[
        'First_Name'  => $firstname,
        'Last_Name'   => $lastname,
        'Email'       => $email,
        'Phone'       => $phone,
        'Company'     => $company,
        'Lead_Source' => 'Website - Get Started',
        'Description' => mb_substr($description, 0, 4000),
    ]],
    'trigger' => ['workflow'],
]);

$lead_res = zoho_curl('https://www.zohoapis.com/crm/v8/Leads', [
    CURLOPT_POST       => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Zoho-oauthtoken ' . $access_token,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => $payload,
]);

$result = $lead_res['data'][0] ?? [];
$code   = $result['code'] ?? '';

if ($code === 'SUCCESS') {
    $lead_id = $result['details']['id'] ?? 'unknown';
    error_log('[zoho-lead] Lead created id=' . $lead_id);
    exit(json_encode(['ok' => true, 'id' => $lead_id]));
}

if ($code === 'DUPLICATE_DATA') {
    error_log('[zoho-lead] Duplicate lead: ' . $email);
    // Not an error from the user's perspective
    exit(json_encode(['ok' => true, 'note' => 'duplicate']));
}

error_log('[zoho-lead] Unexpected Zoho response: ' . json_encode($lead_res));
exit(json_encode(['ok' => false, 'error' => $code ?: 'unknown']));
