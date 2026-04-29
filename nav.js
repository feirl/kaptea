// nav.js: Global navigation for Kaptea
// Edit this file once to update the nav across all pages.
(function () {
  const html = `<nav role="navigation" aria-label="Main navigation">
  <a href="/" class="nav-logo"><img src="img/brand/kaptea-logo.svg" alt="Kaptea" height="38" style="display:block;" /></a>

  <div class="nav-links">

    <!-- PLATFORM -->
    <div class="nav-item" id="nav-platform">
      <a href="#">Platform <span class="nav-chevron">▾</span></a>
      <div class="mega mega-platform">
        <div class="mega-inner"><div class="mega-cols">

          <!-- COL 1: Pronto logo + 4 pillars -->
          <div class="mega-left">
            <div class="mega-panel-label"><a href="pronto" class="pronto-logo-link"><img src="img/brand/pronto-logo.svg" alt="Pronto" class="pronto-logo-img"></a></div>

            <div class="mega-section">
              <div class="mega-section-title"><a href="omni-channel-communications">Omni-Channel Communications</a></div>
              <ul class="mega-links">
                <li class="mega-detail">SMS, WhatsApp, RCS, Voice, Email</li>
                <li class="mega-detail">Two-way conversations</li>
                <li class="mega-detail">Branded sender &amp; calling</li>
              </ul>
            </div>

            <div class="mega-section">
              <div class="mega-section-title"><a href="conversational-ai">Conversational AI</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Master prompts &amp; guardrails</li>
                <li class="mega-detail">Tools, knowledge &amp; data capture</li>
                <li class="mega-detail">Live agent escalation</li>
              </ul>
            </div>

            <div class="mega-section">
              <div class="mega-section-title"><a href="automations-workflow">Automations &amp; Workflow</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Visual workflow builder</li>
                <li class="mega-detail">Triggers, branching &amp; logic</li>
                <li class="mega-detail">End-to-end journey orchestration</li>
              </ul>
            </div>

            <div class="mega-section">
              <div class="mega-section-title"><a href="control-governance">Control &amp; Governance</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Role-based access &amp; SSO</li>
                <li class="mega-detail">Division &amp; template governance</li>
                <li class="mega-detail">Per-message audit trail</li>
              </ul>
            </div>

          </div>

          <!-- COL 2: 3 pillars + CTA -->
          <div class="mega-col2">

            <div class="mega-section">
              <div class="mega-section-title"><a href="delivery-resilience">Delivery &amp; Resilience</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Cross-channel failover</li>
                <li class="mega-detail">Real-time delivery diagnostics</li>
                <li class="mega-detail">Surge-proof routing</li>
              </ul>
            </div>

            <div class="mega-section">
              <div class="mega-section-title"><a href="integration-api-framework">Integration &amp; API Framework</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Two-way CRM sync</li>
                <li class="mega-detail">Event-driven triggers</li>
                <li class="mega-detail">Open APIs &amp; webhooks</li>
              </ul>
            </div>

            <div class="mega-section">
              <div class="mega-section-title"><a href="deployment-infrastructure">Deployment &amp; Infrastructure</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Dedicated instance in days</li>
                <li class="mega-detail">Cloud-managed infrastructure</li>
                <li class="mega-detail">EU, UK or US data residency</li>
              </ul>
            </div>

            <div class="mega-pronto-cta">
              <a href="pronto">See Pronto in Action →</a>
            </div>

          </div>

          <!-- COL 3: Channels + Carrier -->
          <div class="mega-right">
            <div class="mega-right-grid">

              <div>
                <div class="mega-col-title">Channels</div>
                <ul class="mega-links">
                  <li><a href="sms-rcs">SMS &amp; RCS</a></li>
                  <li><a href="whatsapp">WhatsApp</a></li>
                  <li><a href="voice-ivr">Voice &amp; IVR</a></li>
                  <li><a href="email">Email</a></li>
                  <li><a href="secure-video">Secure Video</a></li>
                  <li><a href="social-messaging">Social</a></li>
                </ul>
              </div>

              <div class="mega-carriers">
                <a href="twilio-partner" class="carrier-card" style="text-decoration:none;display:block;">
                  <img src="img/brand/twilio-logo.png" alt="Twilio" class="carrier-logo">
                  <div class="carrier-desc">The world's leading cloud communications platform: messaging, voice, video, Flex and Verify, fully operationalised through Pronto.</div>
                </a>
                <a href="integration-api-framework#carrier-integration" class="carrier-more" style="text-decoration:none;display:block;">+ more carriers &amp; integrations →</a>
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
              <div class="use-case-title"><span class="use-case-num">01</span><a href="customer-journey-orchestration">Customer Journey Orchestration</a></div>
              <ul class="mega-links">
                <li class="mega-detail">End-to-end workflow engine</li>
                <li class="mega-detail">Dual-payload API enrichment</li>
                <li class="mega-detail">Centralised template management</li>
                <li class="mega-detail">Conversation intelligence &amp; live escalation</li>
                <li class="mega-detail">Branded sender &amp; branded calling</li>
                <li class="mega-detail">Multi-channel: SMS, RCS, WhatsApp, Email, Voice</li>
              </ul>
            </div>

            <div class="mega-use-case">
              <div class="use-case-title"><span class="use-case-num">02</span><a href="emergency-surge-communications">Urgent Messaging &amp; Recall</a></div>
              <ul class="mega-links">
                <li class="mega-detail">CSV upload for mass dispatch</li>
                <li class="mega-detail">Email to SMS to branded call escalation</li>
                <li class="mega-detail">Branded calling, 30-50% pickup uplift</li>
                <li class="mega-detail">Per-message regulator-ready audit</li>
                <li class="mega-detail">Warranty recall &amp; drug recall workflows</li>
                <li class="mega-detail">FCA, MHRA, EMA, FDA-aware compliance</li>
              </ul>
            </div>

            <div class="mega-use-case">
              <div class="use-case-title"><span class="use-case-num">03</span><a href="enterprise-transactional-messaging">Transactional Communication</a></div>
              <ul class="mega-links">
                <li class="mega-detail">Layer over existing transactional stack</li>
                <li class="mega-detail">Drag-and-drop template management</li>
                <li class="mega-detail">Sub-account billing granularity</li>
                <li class="mega-detail">Centralised compliance, distributed execution</li>
                <li class="mega-detail">Ad-hoc multi-channel campaigns</li>
                <li class="mega-detail">Single audit trail across channels</li>
              </ul>
            </div>
          </div>

          <!-- RIGHT: Industries -->
          <div class="mega-right">
            <div class="mega-panel-label">Industries</div>
            <div class="mega-industry-grid">

              <div class="industry-block">
                <div class="industry-title"><a href="/industries/finance">Financial Services</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Fraud event journeys</li>
                  <li class="mega-detail">Urgent regulatory comms</li>
                  <li class="mega-detail">Transactional alerts</li>
                  <li class="mega-detail">FCA &amp; MiFID II audit</li>
                  <li class="mega-detail">Contact centre orchestration</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="/industries/utilities">Utilities &amp; Energy</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Outage journey orchestration</li>
                  <li class="mega-detail">Storm &amp; outage dispatch</li>
                  <li class="mega-detail">Meter &amp; billing notifications</li>
                  <li class="mega-detail">Surge IVR routing</li>
                  <li class="mega-detail">Public safety messaging</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="/industries/healthcare">Healthcare</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Patient pathway journeys</li>
                  <li class="mega-detail">Drug recall dispatch</li>
                  <li class="mega-detail">Appointment &amp; prescription comms</li>
                  <li class="mega-detail">MHRA &amp; FDA compliance</li>
                  <li class="mega-detail">Care pathway notifications</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="/industries/travel-transport">Travel &amp; Transport</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Disruption rebook journeys</li>
                  <li class="mega-detail">Mass disruption alerts</li>
                  <li class="mega-detail">Booking &amp; gate updates</li>
                  <li class="mega-detail">Real-time passenger updates</li>
                  <li class="mega-detail">Logistics messaging</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="/industries/public-sector">Public Sector</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Citizen service journeys</li>
                  <li class="mega-detail">Emergency public alerts</li>
                  <li class="mega-detail">Regulated notifications</li>
                  <li class="mega-detail">Divisional governance</li>
                  <li class="mega-detail">Audit-ready messaging</li>
                </ul>
              </div>

              <div class="industry-block">
                <div class="industry-title"><a href="/industries/retail-ecommerce">Retail, Ecommerce &amp; Automotive</a></div>
                <ul class="mega-links">
                  <li class="mega-detail">Browse-to-delivery journeys</li>
                  <li class="mega-detail">Warranty &amp; recall dispatch</li>
                  <li class="mega-detail">Order &amp; dispatch comms</li>
                  <li class="mega-detail">Peak event surge</li>
                  <li class="mega-detail">Store, depot &amp; dealer comms</li>
                </ul>
              </div>

            </div>
          </div>

        </div></div>
      </div>
    </div>

    <div class="nav-item"><a href="pricing">Pricing</a></div>
    <div class="nav-item" id="nav-resources">
      <a href="#">Resources <span class="nav-chevron">▾</span></a>
      <div class="mega mega-resources">

        <ul class="mega-links">
          <li><a href="case-studies">Customer Stories</a></li>
          <li><a href="blog">Blog &amp; Insights</a></li>
          <li><a href="certification">Certification</a></li>
          <li><a href="security-compliance">Security &amp; Compliance</a></li>
          <li><a href="https://developers.pronto-360.com/" target="_blank" rel="noopener">API Documentation</a></li>
          <li><a href="implementation">Implementation &amp; Support</a></li>
        </ul>

      </div>
    </div>
    <div class="nav-item"><a href="why-kaptea">Why Kaptea</a></div>

  </div>

  <div class="hamburger">
    <span></span><span></span><span></span>
  </div>

  <div class="nav-cta-wrap">
    <a href="demo" class="nav-cta">Book a Demo</a>
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
