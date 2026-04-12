// nav.js — Global navigation for Kaptea
// Edit this file once to update the nav across all pages.
(function () {
  const html = `<nav role="navigation" aria-label="Main navigation">
  <a href="index.html" class="nav-logo"><img src="kaptea-logo.svg" alt="Kaptea" height="32" style="display:block;" /></a>

  <div class="nav-links">

    <!-- PLATFORM -->
    <div class="nav-item" id="nav-platform">
      <a href="#">Platform <span class="nav-chevron">▾</span></a>
      <div class="mega mega-platform">
        <div class="mega-inner"><div class="mega-cols">

          <!-- LEFT: Pronto -->
          <div class="mega-left">
            <div class="mega-panel-label"><a href="pronto.html" class="pronto-logo-link"><img src="Pronto-360-Logo.svg" alt="Pronto" class="pronto-logo-img"></a></div>

            <div class="mega-section">
              <div class="mega-section-title"><a href="omni-channel-communications.html">Omni-Channel Communications</a></div>
              <ul class="mega-links">
                <li class="mega-detail">SMS, WhatsApp, Voice, Email, RCS</li>
                <li class="mega-detail">Two-way messaging</li>
                <li class="mega-detail">Inbound &amp; outbound orchestration</li>
              </ul>
            </div>

            <div class="mega-section">
              <div class="mega-section-title"><a href="control-governance.html">Control &amp; Governance</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Role-based access</li>
                <li class="mega-detail">Division segmentation</li>
                <li class="mega-detail">Compliance enforcement</li>
                <li class="mega-detail">Template controls</li>
                <li class="mega-detail">Audit logs</li>
              </ul>
            </div>

            <div class="mega-section">
              <div class="mega-section-title"><a href="delivery-resilience.html">Delivery &amp; Resilience</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Cross-channel failover</li>
                <li class="mega-detail">Delivery diagnostics</li>
                <li class="mega-detail">Event streaming</li>
                <li class="mega-detail">Error handling visibility</li>
                <li class="mega-detail">Load-aware routing</li>
              </ul>
            </div>

            <div class="mega-section">
              <div class="mega-section-title"><a href="integration-api-framework.html">Integration &amp; API Framework</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Two-way CRM sync</li>
                <li class="mega-detail">Event-driven architecture</li>
                <li class="mega-detail">Open APIs</li>
                <li class="mega-detail">Webhook support</li>
              </ul>
            </div>

            <div class="mega-section">
              <div class="mega-section-title"><a href="deployment-infrastructure.html">Deployment &amp; Infrastructure</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Dedicated instance in days</li>
                <li class="mega-detail">No heavy engineering team required</li>
                <li class="mega-detail">Twilio token integration</li>
                <li class="mega-detail">Cloud-managed infrastructure</li>
                <li class="mega-detail">EU or US data residency</li>
              </ul>
            </div>

            <div class="mega-pronto-cta">
              <a href="pronto.html">See Pronto in Action →</a>
            </div>

          </div>

          <!-- RIGHT: Capabilities grid -->
          <div class="mega-right">
            <div class="mega-right-grid">

              <div>
                <div class="mega-col-title">Channels</div>
                <ul class="mega-links">
                  <li><a href="#">SMS &amp; RCS</a></li>
                  <li><a href="#">WhatsApp</a></li>
                  <li><a href="#">Voice &amp; IVR</a></li>
                  <li><a href="#">Email</a></li>
                  <li><a href="#">Secure Video</a></li>
                  <li><a href="#">Social</a></li>
                </ul>
              </div>

              <div>
                <div class="mega-col-title">Resilience &amp; Orchestration</div>
                <ul class="mega-links">
                  <li><a href="#">Cross-Channel Failover</a></li>
                  <li><a href="#">Surge &amp; Load Management</a></li>
                  <li><a href="#">Queue Orchestration</a></li>
                  <li><a href="#">Delivery Diagnostics</a></li>
                </ul>
              </div>

              <div>
                <div class="mega-col-title">Governance &amp; Compliance</div>
                <ul class="mega-links">
                  <li><a href="#">Access &amp; Identity</a></li>
                  <li><a href="#">Template Governance</a></li>
                  <li><a href="#">Compliance &amp; Audit</a></li>
                  <li><a href="#">Division &amp; Segmentation</a></li>
                </ul>
              </div>

              <div>
                <div class="mega-col-title">Integrations</div>
                <ul class="mega-links">
                  <li><a href="#">CRM Integrations</a></li>
                  <li><a href="#">API &amp; Webhooks</a></li>
                  <li><a href="#">Event-Driven Architecture</a></li>
                  <li><a href="#">Identity &amp; SSO</a></li>
                </ul>
              </div>

              <div>
                <div class="mega-col-title">Deployment &amp; Infrastructure</div>
                <ul class="mega-links">
                  <li><a href="#">Dedicated Instance</a></li>
                  <li><a href="#">EU &amp; US Data Residency</a></li>
                  <li><a href="#">AWS &amp; Azure Cloud Hosting</a></li>
                  <li><a href="#">Rapid Instance Deployment</a></li>
                </ul>
              </div>

              <div class="mega-carriers">
                <div class="mega-col-title">Carrier Infrastructure</div>
                <div class="mega-carrier-row">
                  <div class="carrier-card">
                    <div class="carrier-name">Twilio</div>
                    <div class="carrier-desc">The world's leading cloud communications platform — messaging, voice, video, Flex and Verify — fully operationalised through Pronto.</div>
                  </div>
                  <div class="carrier-more">+ more carriers &amp; integrations →</div>
                </div>
              </div>

            </div>
          </div>

        </div></div>
      </div>
    </div>

    <!-- SOLUTIONS -->
    <div class="nav-item" id="nav-solutions">
      <a href="#">Solutions <span class="nav-chevron">▾</span></a>
      <div class="mega mega-solutions">
        <div class="mega-inner"><div class="mega-cols">

          <!-- LEFT: Use Cases -->
          <div class="mega-left">
            <div class="mega-panel-label">Use Cases</div>

            <div class="mega-use-case">
              <div class="use-case-title"><span class="use-case-num">01</span><a href="#">Emergency &amp; Surge Communications</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Storm-grade IVR orchestration</li>
                <li class="mega-detail">Surge-proof inbound routing</li>
                <li class="mega-detail">High-volume outbound alert scaling</li>
                <li class="mega-detail">Load shedding &amp; queue prioritisation</li>
                <li class="mega-detail">Cross-channel failover under load</li>
                <li class="mega-detail">AWS &amp; Azure resilience architecture</li>
              </ul>
            </div>

            <div class="mega-use-case">
              <div class="use-case-title"><span class="use-case-num">02</span><a href="#">Distributed Messaging Governance</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Role-based access &amp; SSO</li>
                <li class="mega-detail">Division-level guardrails &amp; enforcement</li>
                <li class="mega-detail">Brand-safe template management</li>
                <li class="mega-detail">CRM-triggered transactional messaging</li>
                <li class="mega-detail">Audit logging &amp; compliance oversight</li>
                <li class="mega-detail">Cost-aware routing</li>
              </ul>
            </div>

            <div class="mega-use-case">
              <div class="use-case-title"><span class="use-case-num">03</span><a href="#">IVR &amp; Voice Orchestration</a></div>
              <ul class="mega-links">
                <li class="mega-detail">API-first IVR architecture</li>
                <li class="mega-detail">CRM-integrated intelligent routing</li>
                <li class="mega-detail">Queue orchestration &amp; callback management</li>
                <li class="mega-detail">Complex rule &amp; workflow logic</li>
                <li class="mega-detail">Load shedding &amp; surge handling</li>
                <li class="mega-detail">Regulatory-safe migration from legacy IVR</li>
              </ul>
            </div>

            <div class="mega-use-case">
              <div class="use-case-title"><span class="use-case-num">04</span><a href="#">Enterprise Transactional Messaging</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Event-driven message orchestration</li>
                <li class="mega-detail">Cross-channel failover &amp; retry logic</li>
                <li class="mega-detail">Delivery verification &amp; diagnostics</li>
                <li class="mega-detail">CRM-triggered automation</li>
                <li class="mega-detail">Centralised governance &amp; oversight</li>
                <li class="mega-detail">Brand-safe template control</li>
              </ul>
            </div>
          </div>

          <!-- RIGHT: Industries -->
          <div class="mega-right">
            <div class="mega-panel-label">Industries</div>
            <div class="mega-industry-grid">

              <div class="industry-block">
                <div class="industry-title"><a href="template-solution.html">Financial Services</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Fraud &amp; transaction alerts</li>
                  <li class="mega-detail">Secure authentication messaging</li>
                  <li class="mega-detail">Regulatory &amp; compliance communications</li>
                  <li class="mega-detail">Multi-channel customer notifications</li>
                  <li class="mega-detail">Contact centre orchestration</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="#">Utilities &amp; Energy</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Storm &amp; outage alerts</li>
                  <li class="mega-detail">Surge IVR orchestration</li>
                  <li class="mega-detail">Load shedding communications</li>
                  <li class="mega-detail">Cross-channel failover</li>
                  <li class="mega-detail">Public safety messaging at scale</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="#">Healthcare</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Appointment &amp; patient messaging</li>
                  <li class="mega-detail">Secure two-way communications</li>
                  <li class="mega-detail">Emergency public health alerts</li>
                  <li class="mega-detail">Compliance-driven communication workflows</li>
                  <li class="mega-detail">Care pathway notifications</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="#">Travel &amp; Transport</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Real-time disruption &amp; delay alerts</li>
                  <li class="mega-detail">Passenger &amp; operational notifications</li>
                  <li class="mega-detail">High-volume delivery communications</li>
                  <li class="mega-detail">Cross-channel customer engagement</li>
                  <li class="mega-detail">Logistics &amp; dispatch messaging</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="#">Public Sector</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Citizen notifications</li>
                  <li class="mega-detail">Emergency &amp; public safety alerts</li>
                  <li class="mega-detail">Regulated audit-ready messaging</li>
                  <li class="mega-detail">Multi-channel government communications</li>
                  <li class="mega-detail">Surge communications for critical events</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="#">Retail &amp; Ecommerce</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Order &amp; delivery updates</li>
                  <li class="mega-detail">Peak event surge messaging</li>
                  <li class="mega-detail">Distributed store &amp; depot communications</li>
                  <li class="mega-detail">CRM-triggered transactional messaging</li>
                  <li class="mega-detail">Post-purchase engagement</li>
                </ul>
              </div>

            </div>
          </div>

        </div></div>
      </div>
    </div>

    <div class="nav-item"><a href="pricing.html">Pricing</a></div>
    <div class="nav-item" id="nav-resources">
      <a href="#">Resources <span class="nav-chevron">▾</span></a>
      <div class="mega mega-resources">

        <div class="mega-section">
          <div class="mega-section-title">Learn</div>
          <ul class="mega-links">
            <li><a href="#">Blog &amp; Insights</a></li>
            <li><a href="#">Guides &amp; Whitepapers</a></li>
            <li><a href="#">Webinars &amp; Events</a></li>
          </ul>
        </div>

        <div class="mega-section">
          <div class="mega-section-title">Proof</div>
          <ul class="mega-links">
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Customer Stories</a></li>
          </ul>
        </div>

        <div class="mega-section">
          <div class="mega-section-title">Developer</div>
          <ul class="mega-links">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">API Reference</a></li>
            <li><a href="#">Integration Guides</a></li>
          </ul>
        </div>

        <div class="mega-section" style="border-top:1px solid #e2e8f0; padding-top:12px; margin-top:8px;">
          <ul class="mega-links">
            <li><a href="implementation.html">Implementation &amp; Support</a></li>
          </ul>
        </div>

      </div>
    </div>
    <div class="nav-item"><a href="why-kaptea.html">Why Kaptea</a></div>

  </div>

  <div class="hamburger">
    <span></span><span></span><span></span>
  </div>

  <div class="nav-cta-wrap">
    <a href="demo.html" class="nav-cta">Book a Demo</a>
  </div>
</nav>`;

  // Inject mobile nav styles (appended to body for higher specificity over page styles)
  const mobileStyles = document.createElement('style');
  mobileStyles.id = 'nav-mobile-styles';
  mobileStyles.textContent = `
    @media (max-width: 768px) {
      /* Fix mobile nav container to fill screen */
      .nav-links {
        display: none !important;
        position: fixed !important;
        top: 64px !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        height: auto !important;
        background: #131521 !important;
        flex-direction: column !important;
        padding: 24px !important;
        gap: 0 !important;
        z-index: 300 !important;
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch;
      }
      .nav-links.open {
        display: flex !important;
      }
      .nav-links a, .nav-item > a {
        color: rgba(255,255,255,0.8) !important;
        height: auto !important;
        padding: 14px 0 !important;
        font-size: 16px !important;
        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
        white-space: normal !important;
      }
      .nav-links a:hover, .nav-item > a:hover {
        color: #ffffff !important;
      }
      .nav-item {
        position: relative !important;
        display: block !important;
        height: auto !important;
      }
      .hamburger {
        display: flex !important;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        padding: 8px;
        z-index: 301;
      }
      .hamburger span {
        display: block;
        width: 22px;
        height: 2px;
        background: #131521;
        transition: all 0.3s;
      }
      .nav-cta-wrap {
        padding-left: 8px !important;
      }
      .nav-cta {
        padding: 6px 14px !important;
        font-size: 13px !important;
      }

      /* Default: hide all mega-menus on mobile */
      .mega, .mega-resources, .mega-platform, .mega-solutions {
        display: none !important;
        position: static !important;
        transform: none !important;
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
        padding: 0 !important;
        min-width: 0 !important;
        width: 100% !important;
        animation: none !important;
      }

      /* Show when accordion is open */
      .nav-item.mobile-open > .mega,
      .nav-item.mobile-open > .mega-resources {
        display: block !important;
      }

      .nav-item.mobile-open .mega-inner {
        padding: 8px 0 0 12px !important;
        max-width: none !important;
      }
      .nav-item.mobile-open .mega-cols {
        display: flex !important;
        flex-direction: column !important;
        gap: 0 !important;
      }
      .nav-item.mobile-open .mega-left,
      .nav-item.mobile-open .mega-right {
        border: none !important;
        padding: 0 !important;
      }
      .nav-item.mobile-open .mega-right-grid {
        display: flex !important;
        flex-direction: column !important;
        gap: 0 !important;
      }
      .nav-item.mobile-open .mega-industry-grid {
        display: flex !important;
        flex-direction: column !important;
        gap: 0 !important;
      }

      /* Section titles as tappable links */
      .nav-item.mobile-open .mega-section-title,
      .nav-item.mobile-open .mega-section-title a,
      .nav-item.mobile-open .mega-col-title,
      .nav-item.mobile-open .use-case-title,
      .nav-item.mobile-open .use-case-title a,
      .nav-item.mobile-open .industry-title,
      .nav-item.mobile-open .industry-title a {
        color: rgba(255,255,255,0.9) !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        text-transform: none !important;
        text-decoration: none !important;
      }
      .nav-item.mobile-open .mega-panel-label {
        color: #f43130 !important;
        font-size: 11px !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.1em !important;
        margin: 12px 0 8px !important;
      }
      .nav-item.mobile-open .mega-section-title a:hover,
      .nav-item.mobile-open .use-case-title a:hover,
      .nav-item.mobile-open .industry-title a:hover {
        color: #f43130 !important;
      }
      .nav-item.mobile-open .mega-section,
      .nav-item.mobile-open .mega-use-case,
      .nav-item.mobile-open .industry-block,
      .nav-item.mobile-open .mega-right-grid > div {
        padding: 6px 0;
      }

      /* Hide detail text on mobile to keep it clean */
      .nav-item.mobile-open .mega-detail {
        display: none !important;
      }
      .nav-item.mobile-open .mega-links li a {
        color: rgba(255,255,255,0.55) !important;
        font-size: 13px !important;
        padding: 5px 0 !important;
        border: none !important;
        border-left: none !important;
      }
      .nav-item.mobile-open .mega-links li a:hover {
        color: #f43130 !important;
      }

      /* Hide elements not suited for mobile */
      .nav-item.mobile-open .mega-carriers,
      .nav-item.mobile-open .mega-pronto-cta,
      .nav-item.mobile-open .mega-carrier-row,
      .nav-item.mobile-open .carrier-more,
      .nav-item.mobile-open .use-case-num {
        display: none !important;
      }
      .nav-item.mobile-open .pronto-logo-img {
        height: 20px !important;
        filter: brightness(10) !important;
      }

      /* Resources dropdown */
      .nav-item.mobile-open .mega-resources {
        display: block !important;
        position: static !important;
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
        padding: 8px 0 0 12px !important;
        min-width: 0 !important;
      }

      /* Chevrons */
      .nav-item > a .nav-chevron {
        display: inline !important;
        opacity: 0.5;
        transition: transform 0.2s;
      }
      .nav-item.mobile-open > a .nav-chevron {
        transform: rotate(180deg);
        opacity: 1;
      }

      /* Hamburger X animation */
      .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      .hamburger.active span:nth-child(2) {
        opacity: 0;
      }
      .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  `;
  // Append after body loads to ensure it overrides page inline styles
  if (document.body) {
    document.body.appendChild(mobileStyles);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(mobileStyles);
    });
  }

  // Inject nav before this script tag
  const script = document.currentScript;
  script.insertAdjacentHTML('beforebegin', html);

  // Init mega-menu interactions after nav is in the DOM
  let mouseHasMoved = false;
  document.addEventListener('mousemove', function () { mouseHasMoved = true; }, { once: true });

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function initNav() {
    // Desktop: hover-based mega-menus
    document.querySelectorAll('.nav-item').forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        if (isMobile() || !mouseHasMoved) return;
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        if (item.querySelector('.mega')) item.classList.add('active');
      });
      item.addEventListener('mouseleave', function () {
        if (isMobile()) return;
        item.classList.remove('active');
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
      }
    });

    // Mobile: tap to expand dropdowns
    document.querySelectorAll('.nav-item > a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (!isMobile()) return;
        const item = link.closest('.nav-item');
        if (!item.querySelector('.mega')) return;
        e.preventDefault();
        const wasActive = item.classList.contains('mobile-open');
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('mobile-open'));
        if (!wasActive) item.classList.add('mobile-open');
      });
    });

    // Hamburger toggle
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        const nav = document.querySelector('nav');
        navLinks.classList.toggle('open');
        nav.classList.toggle('open');
        hamburger.classList.toggle('active');
        // Close any open mobile dropdowns when closing menu
        if (!navLinks.classList.contains('open')) {
          document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('mobile-open'));
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
