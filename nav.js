// nav.js — Global navigation for Kaptea
// Edit this file once to update the nav across all pages.
(function () {
  const html = `<nav role="navigation" aria-label="Main navigation">
  <a href="index.html" class="nav-logo"><img src="kaptea-logo.svg" alt="Kaptea" height="38" style="display:block;" /></a>

  <div class="nav-links">

    <!-- PLATFORM -->
    <div class="nav-item" id="nav-platform">
      <a href="#">Platform <span class="nav-chevron">▾</span></a>
      <div class="mega mega-platform">
        <div class="mega-inner"><div class="mega-cols">

          <!-- COL 1: Pronto logo + first 3 sub-categories -->
          <div class="mega-left">
            <div class="mega-panel-label"><a href="pronto.html" class="pronto-logo-link"><img src="pronto-logo.svg" alt="Pronto" class="pronto-logo-img"></a></div>

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

          </div>

          <!-- COL 2: Remaining 2 sub-categories + CTA -->
          <div class="mega-col2">

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

          <!-- COL 3: Channels + Carrier -->
          <div class="mega-right">
            <div class="mega-right-grid">

              <div>
                <div class="mega-col-title">Channels</div>
                <ul class="mega-links">
                  <li><a href="sms-rcs.html">SMS &amp; RCS</a></li>
                  <li><a href="whatsapp.html">WhatsApp</a></li>
                  <li><a href="voice-ivr.html">Voice &amp; IVR</a></li>
                  <li><a href="email.html">Email</a></li>
                  <li><a href="secure-video.html">Secure Video</a></li>
                  <li><a href="social-messaging.html">Social</a></li>
                </ul>
              </div>

              <div class="mega-carriers">
                <a href="twilio-partner.html" class="carrier-card" style="text-decoration:none;display:block;">
                  <img src="twilio-logo.png" alt="Twilio" class="carrier-logo">
                  <div class="carrier-desc">The world's leading cloud communications platform — messaging, voice, video, Flex and Verify — fully operationalised through Pronto.</div>
                </a>
                <div class="carrier-more">+ more carriers &amp; integrations →</div>
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
              <div class="use-case-title"><span class="use-case-num">01</span><a href="emergency-surge-communications.html">Emergency &amp; Surge Communications</a></div>
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
              <div class="use-case-title"><span class="use-case-num">02</span><a href="distributed-messaging-governance.html">Distributed Messaging Governance</a></div>
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
              <div class="use-case-title"><span class="use-case-num">03</span><a href="ivr-voice-orchestration.html">IVR &amp; Voice Orchestration</a></div>
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
              <div class="use-case-title"><span class="use-case-num">04</span><a href="enterprise-transactional-messaging.html">Enterprise Transactional Messaging</a></div>
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
                <div class="industry-title"><a href="financial-services.html">Financial Services</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Fraud &amp; transaction alerts</li>
                  <li class="mega-detail">Secure authentication messaging</li>
                  <li class="mega-detail">Regulatory &amp; compliance communications</li>
                  <li class="mega-detail">Multi-channel customer notifications</li>
                  <li class="mega-detail">Contact centre orchestration</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="utilities-energy.html">Utilities &amp; Energy</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Storm &amp; outage alerts</li>
                  <li class="mega-detail">Surge IVR orchestration</li>
                  <li class="mega-detail">Load shedding communications</li>
                  <li class="mega-detail">Cross-channel failover</li>
                  <li class="mega-detail">Public safety messaging at scale</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="healthcare.html">Healthcare</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Appointment &amp; patient messaging</li>
                  <li class="mega-detail">Secure two-way communications</li>
                  <li class="mega-detail">Emergency public health alerts</li>
                  <li class="mega-detail">Compliance-driven communication workflows</li>
                  <li class="mega-detail">Care pathway notifications</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="travel-transport.html">Travel &amp; Transport</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Real-time disruption &amp; delay alerts</li>
                  <li class="mega-detail">Passenger &amp; operational notifications</li>
                  <li class="mega-detail">High-volume delivery communications</li>
                  <li class="mega-detail">Cross-channel customer engagement</li>
                  <li class="mega-detail">Logistics &amp; dispatch messaging</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="public-sector.html">Public Sector</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Citizen notifications</li>
                  <li class="mega-detail">Emergency &amp; public safety alerts</li>
                  <li class="mega-detail">Regulated audit-ready messaging</li>
                  <li class="mega-detail">Multi-channel government communications</li>
                  <li class="mega-detail">Surge communications for critical events</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="retail-ecommerce.html">Retail &amp; Ecommerce</a></div>
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
