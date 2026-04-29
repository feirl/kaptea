// footer.js: Global footer for Kaptea
// Edit this file once to update the footer across all pages.
(function () {

  // Inject footer styles
  const styles = document.createElement('style');
  styles.textContent = `
    footer {
      background: #0f1522;
      color: rgba(255,255,255,0.5);
      padding: 64px 40px 32px;
      font-size: 13px;
      line-height: 1.6;
    }
    .footer-inner {
      max-width: 1280px;
      margin: 0 auto;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr 1fr;
      gap: 40px;
      padding-bottom: 48px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .footer-brand p {
      margin: 12px 0 0;
      font-size: 13px;
      line-height: 1.7;
      color: rgba(255,255,255,0.45);
      max-width: 240px;
    }
    .footer-col h4 {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: rgba(255,255,255,0.9);
      margin: 0 0 14px;
    }
    .footer-col ul { list-style: none; padding: 0; margin: 0; }
    .footer-col li { margin-bottom: 8px; }
    .footer-col a {
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      font-size: 13px;
      transition: color 0.15s;
    }
    .footer-col a:hover { color: rgba(255,255,255,0.9); }
    .footer-certs {
      display: flex;
      flex-direction: column;
      gap: 7px;
      margin-top: 20px;
    }
    .footer-cert {
      display: flex;
      align-items: center;
      gap: 7px;
      font-size: 11px;
      color: rgba(255,255,255,0.4);
      font-weight: 500;
    }
    .footer-cert svg { flex-shrink: 0; color: rgba(255,255,255,0.25); }
    .footer-social {
      display: flex;
      gap: 12px;
      margin-top: 20px;
    }
    .footer-social a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: rgba(255,255,255,0.07);
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      transition: background 0.15s, color 0.15s;
    }
    .footer-social a:hover {
      background: rgba(255,255,255,0.14);
      color: rgba(255,255,255,0.9);
    }
    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 28px;
      font-size: 12px;
      color: rgba(255,255,255,0.3);
    }
    .footer-legal { display: flex; gap: 20px; flex-wrap: wrap; }
    .footer-legal a {
      color: rgba(255,255,255,0.3);
      text-decoration: none;
      transition: color 0.15s;
    }
    .footer-legal a:hover { color: rgba(255,255,255,0.6); }

    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 32px;
      }
      .footer-brand { grid-column: 1 / -1; }
      .footer-brand p { max-width: 100%; }
    }
    @media (max-width: 640px) {
      footer { padding: 48px 20px 28px; }
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 28px;
      }
      .footer-brand { grid-column: 1 / -1; }
      .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        text-align: left;
      }
      .footer-legal { gap: 12px; }
    }

    /* ── COOKIE CONSENT ── */
    #kaptea-cookie-banner {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      background: #131521;
      color: rgba(255,255,255,0.85);
      padding: 20px 28px;
      box-shadow: 0 -4px 24px rgba(0,0,0,0.18);
      border-top: 1px solid rgba(255,255,255,0.08);
      flex-wrap: wrap;
      gap: 24px;
      align-items: center;
      justify-content: space-between;
      font-family: 'Inter', sans-serif;
    }
    #kaptea-cookie-banner .kcb-text {
      flex: 1 1 480px;
      font-size: 13px;
      line-height: 1.6;
      color: rgba(255,255,255,0.78);
    }
    #kaptea-cookie-banner .kcb-text strong {
      display: block;
      font-family: 'Manrope', sans-serif;
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 4px;
    }
    #kaptea-cookie-banner .kcb-text a {
      color: #dc2727;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    #kaptea-cookie-banner .kcb-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .kcb-btn {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 600;
      padding: 10px 18px;
      border-radius: 6px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: opacity 0.15s, background 0.15s, border-color 0.15s;
      white-space: nowrap;
    }
    .kcb-btn-primary { background: #dc2727; color: #ffffff; }
    .kcb-btn-primary:hover { opacity: 0.92; }
    .kcb-btn-ghost {
      background: transparent;
      color: rgba(255,255,255,0.85);
      border-color: rgba(255,255,255,0.22);
    }
    .kcb-btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: #ffffff; }
    .kcb-btn-link {
      background: transparent;
      color: rgba(255,255,255,0.65);
      border: none;
      padding: 10px 8px;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .kcb-btn-link:hover { color: #ffffff; }

    #kaptea-cookie-modal {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 10000;
      background: rgba(15, 17, 28, 0.66);
      backdrop-filter: blur(2px);
      align-items: center;
      justify-content: center;
      padding: 24px;
      font-family: 'Inter', sans-serif;
    }
    .kcm-card {
      background: #ffffff;
      border-radius: 14px;
      max-width: 540px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 24px 60px rgba(0,0,0,0.28);
      position: relative;
    }
    .kcm-header {
      padding: 28px 28px 16px;
      border-bottom: 1px solid #eef0f4;
    }
    .kcm-header h2 {
      font-family: 'Manrope', sans-serif;
      font-size: 20px;
      font-weight: 700;
      color: #131521;
      margin: 0 0 8px;
      line-height: 1.3;
    }
    .kcm-header p {
      font-size: 13px;
      line-height: 1.6;
      color: #4b5563;
      margin: 0;
    }
    .kcm-header p a {
      color: #dc2727;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .kcm-close {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      color: #6b7280;
      font-size: 22px;
      line-height: 1;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.15s, color 0.15s;
    }
    .kcm-close:hover { background: #f3f4f6; color: #131521; }
    .kcm-body { padding: 12px 28px 8px; }
    .kcm-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      padding: 16px 0;
      border-bottom: 1px solid #eef0f4;
    }
    .kcm-row:last-child { border-bottom: none; }
    .kcm-row-text { flex: 1; }
    .kcm-row-text h3 {
      font-family: 'Manrope', sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: #131521;
      margin: 0 0 4px;
    }
    .kcm-row-text p {
      font-size: 12px;
      line-height: 1.55;
      color: #6b7280;
      margin: 0;
    }
    .kcm-pill {
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #15803d;
      background: #dcfce7;
      padding: 5px 10px;
      border-radius: 20px;
      align-self: flex-start;
    }
    .kcm-toggle {
      flex-shrink: 0;
      position: relative;
      width: 42px;
      height: 24px;
      align-self: flex-start;
    }
    .kcm-toggle input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
    .kcm-slider {
      position: absolute;
      cursor: pointer;
      inset: 0;
      background: #d1d5db;
      border-radius: 24px;
      transition: background 0.2s;
    }
    .kcm-slider::before {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      left: 3px;
      top: 3px;
      background: #ffffff;
      border-radius: 50%;
      transition: transform 0.2s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.18);
    }
    .kcm-toggle input:checked + .kcm-slider { background: #dc2727; }
    .kcm-toggle input:checked + .kcm-slider::before { transform: translateX(18px); }
    .kcm-toggle input:focus-visible + .kcm-slider { box-shadow: 0 0 0 3px rgba(220,39,39,0.25); }
    .kcm-footer {
      display: flex;
      gap: 10px;
      padding: 16px 28px 24px;
      border-top: 1px solid #eef0f4;
      flex-wrap: wrap;
    }
    .kcm-footer .kcb-btn { flex: 1 1 auto; min-width: 140px; }
    .kcm-btn-secondary {
      background: #131521;
      color: #ffffff;
    }
    .kcm-btn-secondary:hover { opacity: 0.92; }

    @media (max-width: 640px) {
      #kaptea-cookie-banner { padding: 18px 18px 20px; }
      #kaptea-cookie-banner .kcb-text { flex: 1 1 100%; }
      #kaptea-cookie-banner .kcb-actions { width: 100%; }
      .kcb-btn { flex: 1 1 auto; text-align: center; }
      .kcm-header { padding: 24px 20px 14px; }
      .kcm-body { padding: 10px 20px 6px; }
      .kcm-footer { padding: 14px 20px 20px; }
    }
  `;
  document.head.appendChild(styles);

  const html = `
<footer role="contentinfo">
  <div class="footer-inner">
    <div class="footer-grid">

      <!-- Brand -->
      <div class="footer-brand">
        <img src="/img/brand/kaptea-logo-white.svg" alt="Kaptea" height="28" style="opacity:0.8;" />
        <p>The only compliance-first communications platform built for enterprise, on carrier-grade infrastructure.</p>
        <div class="footer-certs">
          <div class="footer-cert"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> ISO 27001 Certified</div>
          <div class="footer-cert"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Cyber Essentials Plus</div>
          <div class="footer-cert"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> CREST Accredited</div>
          <div class="footer-cert"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg> Twilio Gold &amp; AI Partner</div>
        </div>
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/kaptea" target="_blank" rel="noopener" aria-label="Kaptea on LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>

      <!-- Platform -->
      <div class="footer-col">
        <h4>Platform</h4>
        <ul>
          <li><a href="/pronto">Pronto</a></li>
          <li><a href="/omni-channel-communications">Omni-Channel</a></li>
          <li><a href="/sms-rcs">SMS &amp; RCS</a></li>
          <li><a href="/whatsapp">WhatsApp</a></li>
          <li><a href="/voice-ivr">Voice &amp; IVR</a></li>
          <li><a href="/email">Email</a></li>
          <li><a href="/secure-video">Secure Video</a></li>
          <li><a href="/social-messaging">Social</a></li>
          <li><a href="/conversational-ai">Conversational AI</a></li>
          <li><a href="/automations-workflow">Automations &amp; Workflow</a></li>
          <li><a href="/control-governance">Control &amp; Governance</a></li>
          <li><a href="/delivery-resilience">Delivery &amp; Resilience</a></li>
          <li><a href="/integration-api-framework">Integration &amp; API</a></li>
          <li><a href="/deployment-infrastructure">Deployment</a></li>
        </ul>
      </div>

      <!-- Use Cases -->
      <div class="footer-col">
        <h4>Use Cases</h4>
        <ul>
          <li><a href="/customer-journey-orchestration">Customer Journey Orchestration</a></li>
          <li><a href="/emergency-surge-communications">Urgent Messaging &amp; Recall</a></li>
          <li><a href="/enterprise-transactional-messaging">Transactional Communication</a></li>
        </ul>
      </div>

      <!-- Industries -->
      <div class="footer-col">
        <h4>Industries</h4>
        <ul>
          <li><a href="/industries/finance">Financial Services</a></li>
          <li><a href="/industries/utilities">Utilities &amp; Energy</a></li>
          <li><a href="/industries/healthcare">Healthcare</a></li>
          <li><a href="/industries/travel-transport">Travel &amp; Transport</a></li>
          <li><a href="/industries/public-sector">Public Sector</a></li>
          <li><a href="/industries/retail-ecommerce">Retail, Ecommerce &amp; Automotive</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="/case-studies">Customer Stories</a></li>
          <li><a href="/blog">Blog &amp; Insights</a></li>
          <li><a href="/certification">Certification</a></li>
          <li><a href="/security-compliance">Security &amp; Compliance</a></li>
          <li><a href="https://developers.pronto-360.com/" target="_blank" rel="noopener">API Documentation</a></li>
          <li><a href="/implementation">Implementation &amp; Support</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/why-kaptea">Why Kaptea</a></li>
          <li><a href="/meet-the-team">Meet The Team</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/demo">Book a Demo</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <div>&copy; 2026 Kaptea. All rights reserved.</div>
      <div class="footer-legal">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/cookies">Cookie Policy</a>
        <a href="/privacy-policy#your-rights">GDPR</a>
        <a href="#" id="kaptea-cookie-settings">Cookie Settings</a>
      </div>
    </div>
  </div>
</footer>

<!-- Cookie consent banner -->
<div id="kaptea-cookie-banner" role="region" aria-label="Cookie consent">
  <div class="kcb-text">
    <strong>We use cookies</strong>
    Kaptea uses essential cookies to run this site, plus optional analytics and marketing cookies to help us understand how it's used. Read our <a href="/cookies">Cookie Policy</a> for details.
  </div>
  <div class="kcb-actions">
    <button type="button" class="kcb-btn kcb-btn-link" id="kaptea-reject-all">Reject non-essential</button>
    <button type="button" class="kcb-btn kcb-btn-ghost" id="kaptea-manage-prefs">Manage preferences</button>
    <button type="button" class="kcb-btn kcb-btn-primary" id="kaptea-accept-all">Accept all</button>
  </div>
</div>

<!-- Cookie preferences modal -->
<div id="kaptea-cookie-modal" role="dialog" aria-modal="true" aria-labelledby="kcm-title">
  <div class="kcm-card">
    <button type="button" class="kcm-close" id="kaptea-modal-close" aria-label="Close cookie preferences">&times;</button>
    <div class="kcm-header">
      <h2 id="kcm-title">Cookie preferences</h2>
      <p>Choose which categories of cookies Kaptea can use. You can change these settings at any time from the Cookie Settings link in the footer. Read our <a href="/cookies">Cookie Policy</a> for full details.</p>
    </div>
    <div class="kcm-body">
      <div class="kcm-row">
        <div class="kcm-row-text">
          <h3>Necessary</h3>
          <p>Required for core site functionality, including session management and remembering your cookie preferences. These cookies cannot be disabled.</p>
        </div>
        <span class="kcm-pill">Always on</span>
      </div>
      <div class="kcm-row">
        <div class="kcm-row-text">
          <h3>Analytics</h3>
          <p>Help us understand how visitors use the site so we can improve it. These cookies are off by default.</p>
        </div>
        <label class="kcm-toggle">
          <input type="checkbox" id="kaptea-toggle-analytics" aria-label="Enable analytics cookies">
          <span class="kcm-slider"></span>
        </label>
      </div>
      <div class="kcm-row">
        <div class="kcm-row-text">
          <h3>Marketing</h3>
          <p>Used to measure marketing campaign performance and to show relevant content on third-party platforms. Off by default.</p>
        </div>
        <label class="kcm-toggle">
          <input type="checkbox" id="kaptea-toggle-marketing" aria-label="Enable marketing cookies">
          <span class="kcm-slider"></span>
        </label>
      </div>
    </div>
    <div class="kcm-footer">
      <button type="button" class="kcb-btn kcm-btn-secondary" id="kaptea-modal-accept">Accept all</button>
      <button type="button" class="kcb-btn kcb-btn-primary" id="kaptea-modal-save">Save preferences</button>
    </div>
  </div>
</div>`;

  const script = document.currentScript;
  script.insertAdjacentHTML('beforebegin', html);

  // Wire footer "Cookie Settings" link to open the modal
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest && e.target.closest('#kaptea-cookie-settings');
    if (!trigger) return;
    e.preventDefault();
    if (typeof window.kapteaOpenCookieModal === 'function') {
      window.kapteaOpenCookieModal();
    }
  });

  // Load consent logic
  const consentScript = document.createElement('script');
  consentScript.src = '/cookie-consent.js';
  consentScript.defer = true;
  document.body.appendChild(consentScript);

})();
