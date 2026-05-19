// api/zoho-lead.js
// Creates a Zoho CRM lead from a completed /get-started submission.
// Zoho credentials are Vercel environment variables and never reach the browser.

var ZOHO_ACCOUNTS = 'https://accounts.zoho.com';
var ZOHO_API = 'https://www.zohoapis.com';

var ALLOWED_ORIGINS = [
  'https://kaptea.io',
  'https://www.kaptea.io',
  'https://staging.kaptea.io',
  'https://kaptea.vercel.app',
];

async function getAccessToken() {
  var params = new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: process.env.ZOHO_CLIENT_ID,
    client_secret: process.env.ZOHO_CLIENT_SECRET,
    refresh_token: process.env.ZOHO_REFRESH_TOKEN,
  });
  var resp = await fetch(ZOHO_ACCOUNTS + '/oauth/v2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });
  var data = await resp.json();
  if (!data.access_token) {
    throw new Error('Zoho token refresh failed: ' + JSON.stringify(data));
  }
  return data.access_token;
}

function asList(v) {
  return Array.isArray(v) ? v.join(', ') : (v || 'Not specified');
}

function buildDescription(d) {
  return [
    'Submitted via the Get Started flow on kaptea.io.',
    '',
    'Channels: ' + asList(d.channels),
    'Use cases: ' + asList(d.usecases),
    'AI agents: ' + asList(d.aiagents),
    'Server regions: ' + asList(d.regions),
    'Current CPaaS provider: ' + (d.cpaas || 'Not specified'),
    'Typical monthly volume: ' + (d.volume_typical_label || 'Not specified'),
    'Surge capacity requirement: ' + (d.volume_surge_label || 'Not specified'),
  ].join('\n');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  // Light abuse guard: a browser POST always carries an Origin header.
  // Reject browser submissions from origins that are not ours.
  var origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.indexOf(origin) === -1) {
    res.status(403).json({ ok: false, error: 'Forbidden origin' });
    return;
  }

  var d = req.body || {};
  var lastName = (d.lastname || '').trim();
  var company = (d.company || '').trim();
  if (!lastName || !company) {
    res.status(400).json({ ok: false, error: 'Missing required fields' });
    return;
  }

  try {
    var token = await getAccessToken();

    var lead = {
      Last_Name: lastName,
      First_Name: (d.firstname || '').trim(),
      Email: (d.email || '').trim(),
      Phone: (d.phone || '').trim(),
      Company: company,
      Lead_Source: 'Website - Get Started',
      Description: buildDescription(d),
    };

    var resp = await fetch(ZOHO_API + '/crm/v8/Leads', {
      method: 'POST',
      headers: {
        'Authorization': 'Zoho-oauthtoken ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: [lead], trigger: ['workflow'] }),
    });
    var result = await resp.json();
    var row = result && result.data && result.data[0];

    if (!row || row.code !== 'SUCCESS') {
      console.error('Zoho lead creation failed:', JSON.stringify(result));
      res.status(502).json({ ok: false, error: 'Zoho rejected the lead' });
      return;
    }

    res.status(200).json({ ok: true, id: row.details && row.details.id });
  } catch (err) {
    console.error('zoho-lead error:', err && err.message);
    res.status(500).json({ ok: false, error: 'Internal error' });
  }
};
