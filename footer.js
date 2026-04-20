// footer.js — Global footer for Kaptea
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
  `;
  document.head.appendChild(styles);

  const html = `
<footer role="contentinfo">
  <div class="footer-inner">
    <div class="footer-grid">

      <!-- Brand -->
      <div class="footer-brand">
        <img src="kaptea-logo-white.svg" alt="Kaptea" height="28" style="opacity:0.8;" />
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
          <a href="https://twitter.com/kaptea" target="_blank" rel="noopener" aria-label="Kaptea on X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>

      <!-- Platform -->
      <div class="footer-col">
        <h4>Platform</h4>
        <ul>
          <li><a href="pronto.html">Pronto</a></li>
          <li><a href="omni-channel-communications.html">Omni-Channel</a></li>
          <li><a href="sms-rcs.html">SMS &amp; RCS</a></li>
          <li><a href="whatsapp.html">WhatsApp</a></li>
          <li><a href="voice-ivr.html">Voice &amp; IVR</a></li>
          <li><a href="email.html">Email</a></li>
          <li><a href="secure-video.html">Secure Video</a></li>
          <li><a href="social-messaging.html">Social</a></li>
          <li><a href="control-governance.html">Control &amp; Governance</a></li>
          <li><a href="delivery-resilience.html">Delivery &amp; Resilience</a></li>
          <li><a href="integration-api-framework.html">Integration &amp; API</a></li>
          <li><a href="deployment-infrastructure.html">Deployment</a></li>
        </ul>
      </div>

      <!-- Use Cases -->
      <div class="footer-col">
        <h4>Use Cases</h4>
        <ul>
          <li><a href="emergency-surge-communications.html">Emergency &amp; Surge</a></li>
          <li><a href="distributed-messaging-governance.html">Distributed Governance</a></li>
          <li><a href="ivr-voice-orchestration.html">IVR &amp; Voice</a></li>
          <li><a href="enterprise-transactional-messaging.html">Enterprise Transactional</a></li>
        </ul>
      </div>

      <!-- Industries -->
      <div class="footer-col">
        <h4>Industries</h4>
        <ul>
          <li><a href="financial-services.html">Financial Services</a></li>
          <li><a href="utilities-energy.html">Utilities &amp; Energy</a></li>
          <li><a href="healthcare.html">Healthcare</a></li>
          <li><a href="travel-transport.html">Travel &amp; Transport</a></li>
          <li><a href="public-sector.html">Public Sector</a></li>
          <li><a href="retail-ecommerce.html">Retail &amp; Ecommerce</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="case-studies.html">Customer Stories</a></li>
          <li><a href="#">Blog &amp; Insights</a></li>
          <li><a href="#">Certification</a></li>
          <li><a href="#">Security &amp; Compliance</a></li>
          <li><a href="#">API Documentation</a></li>
          <li><a href="implementation.html">Implementation &amp; Support</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="why-kaptea.html">Why Kaptea</a></li>
          <li><a href="#">Meet The Team</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="demo.html">Book a Demo</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <div>&copy; 2026 Kaptea. All rights reserved.</div>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
        <a href="#">GDPR</a>
      </div>
    </div>
  </div>
</footer>`;

  const script = document.currentScript;
  script.insertAdjacentHTML('beforebegin', html);

})();
