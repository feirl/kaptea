# Kaptea Website Build Briefing
**Prepared for Claude Code — Full Website Build**
**Date:** April 2026
**Prepared by:** Brendan Hughes, Fractional Edge

---

## 1. Context & Purpose

Kaptea is an enterprise communications platform built on top of Twilio (and Telnyx). The core product is called **Pronto** - a managed, governed, orchestration layer that makes Twilio enterprise-ready for regulated and high-scale organisations.

The website's job is to:
- Establish credibility with enterprise buyers in regulated industries (utilities, financial services, public sector, healthcare, retail/distributed operations)
- Demonstrate the depth and breadth of the platform
- Drive conversions to "Book a Demo"
- Support the Twilio partner channel (Twilio AEs and SEs refer clients to Kaptea)

The positioning is: **"The only omnichannel communications platform designed for regulated and high-scale organisations, built on carrier-grade infrastructure."**

The core promise: **99.5% average message delivery rate.** Outcome-based pricing. Pay for messages delivered, not infrastructure managed.

---

## 2. Brand

**Primary colour:** `#f43130` (Kaptea red)
**Dark background:** `#0f1522` (near-black navy)
**Hover/darker red:** `#d41f1e`
**Light red tint:** `#fff3f3`
**Body text:** `#374151`
**Muted text:** `#6b7280` / `#94a3b8` (on dark backgrounds)
**Borders:** `#e5e7eb`
**Alt background:** `#f9fafb`

**Typography:** System font stack - `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
**Font weights:** 500 (body), 700 (headings), 800 (hero/display)

**Em dash rule:** NEVER use em dashes (--). Use ` - ` (spaced hyphen) for sentence breaks, `:` for introducing lists.

**Tone:** Direct, confident, technical-but-accessible. Enterprise credibility without jargon overload. Outcome-focused. Never generic.

**Certifications to display throughout:** ISO 27001 Certified, Cyber Essentials Certified, Twilio Gold & AI Partner, GDPR Data Processor Agreement, EU & US Data Residency.

---

## 3. Navigation Architecture

The top-level navigation is:

```
Platform | Solutions | Pricing | Resources | Why Kaptea | [Book a Demo]
```

- **Platform** - mega-menu dropdown (two panels)
- **Solutions** - mega-menu dropdown (two panels)
- **Pricing** - single page (already built)
- **Resources** - dropdown (to be defined, see Section 7)
- **Why Kaptea** - single page (no dropdown)
- **Book a Demo** - CTA button, always visible, red (#f43130)

---

## 4. Platform Navigation - Full Architecture

### Left Panel: Pronto

**Omni-Channel Communications**
- SMS, WhatsApp, Voice, Email, RCS
- Two-way messaging
- Inbound & outbound orchestration

**Control & Governance**
- Role-based access
- Division segmentation
- Compliance enforcement
- Template controls
- Audit logs

**Delivery & Resilience**
- Cross-channel failover
- Delivery diagnostics
- Event streaming
- Error handling visibility
- Load-aware routing

**Integration & API Framework**
- Two-way CRM sync
- Event-driven architecture
- Open APIs
- Webhook support

**Deployment & Infrastructure**
- Dedicated instance in days
- Rapid instance deployment
- No heavy engineering team required
- Twilio token integration
- Cloud-managed infrastructure
- EU or US data residency

**CTA at bottom of left panel:** "See Pronto in Action ->"

### Right Panel: Capabilities

**Channels**
- SMS & RCS
- WhatsApp
- Voice & IVR
- Email
- Secure Video
- Twilio Flex

**Resilience & Orchestration**
- Cross-Channel Failover
- Surge & Load Management
- Queue Orchestration
- Delivery Diagnostics

**Governance & Compliance**
- Access & Identity
- Template Governance
- Compliance & Audit
- Division & Segmentation

**Integrations**
- CRM Integrations
- API & Webhooks
- Event-Driven Architecture
- Identity & SSO

**Deployment & Infrastructure**
- Dedicated Instance
- EU & US Data Residency
- AWS & Azure Cloud Hosting
- Rapid Instance Deployment

**Carrier Infrastructure** (full-width row at bottom of right panel)
- **Twilio:** The world's leading cloud communications platform - messaging, voice, video, Flex and Verify - fully operationalised through Pronto.
- **Telnyx:** Built on a private global network - elastic SIP trunking, messaging and voice with cost-optimised routing and built-in redundancy.
- "+ more carriers..." link

---

## 5. Solutions Navigation - Full Architecture

### Left Panel: Use Cases

**01 - Emergency & Surge Communications**
- Storm-grade IVR orchestration
- Surge-proof inbound routing
- High-volume outbound alert scaling
- Load shedding & queue prioritisation
- Cross-channel failover under load
- AWS & Azure resilience architecture

**02 - Distributed Messaging Governance**
- Role-based access & SSO
- Division-level guardrails & enforcement
- Brand-safe template management
- CRM-triggered transactional messaging
- Audit logging & compliance oversight
- Cost-aware routing

**03 - IVR & Voice Orchestration**
- API-first IVR architecture
- CRM-integrated intelligent routing
- Queue orchestration & callback management
- Complex rule & workflow logic
- Load shedding & surge handling
- Regulatory-safe migration from legacy IVR

**04 - Enterprise Transactional Messaging**
- Event-driven message orchestration
- Cross-channel failover & retry logic
- Delivery verification & diagnostics
- CRM-triggered automation
- Centralised governance & oversight
- Brand-safe template control

### Right Panel: Industries

**Financial Services**
- Fraud & transaction alerts
- Secure authentication messaging
- Regulatory & compliance communications
- Multi-channel customer notifications
- Contact centre orchestration

**Utilities & Energy**
- Storm & outage alerts
- Surge IVR orchestration
- Load shedding communications
- Cross-channel failover
- Public safety messaging at scale

**Healthcare**
- Appointment & patient messaging
- Secure two-way communications
- Emergency public health alerts
- Compliance-driven communication workflows
- Care pathway notifications

**Retail & Ecommerce**
- Order & delivery updates
- Peak event surge messaging
- Distributed store & depot communications
- CRM-triggered transactional messaging
- Post-purchase engagement

**Public Sector**
- Citizen notifications
- Emergency & public safety alerts
- Regulated audit-ready messaging
- Multi-channel government communications
- Surge communications for critical events

**Distributed & Field Operations**
- Franchise & depot messaging governance
- Division-level access control
- Brand-safe template enforcement
- Centralised oversight with local flexibility
- CRM-triggered field communications

---

## 6. Pages to Build

### Pages Already Built (in `/Kaptea/01 - Strategy/`)

| File | Status | Notes |
|------|--------|-------|
| `Kaptea Homepage Copy & Design.html` | Draft - needs mega-menu added | All 12 sections complete with copy and design annotations |
| `Kaptea Pricing Page Framework.html` | Complete | Interactive, deployed to GitHub Pages |

### Pages to Build

| Page | URL | Priority |
|------|-----|----------|
| Homepage | `/` | High - replace index.html |
| Pricing | `/pricing` | Done - refine and integrate |
| Platform overview | `/platform` | High |
| Pronto product page | `/platform/pronto` | High |
| Use Case: Emergency & Surge | `/solutions/emergency-surge` | High |
| Use Case: Distributed Governance | `/solutions/distributed-governance` | High |
| Use Case: IVR & Voice | `/solutions/ivr-voice` | High |
| Use Case: Enterprise Transactional | `/solutions/enterprise-transactional` | Medium |
| Industry: Utilities & Energy | `/industries/utilities-energy` | High |
| Industry: Public Sector | `/industries/public-sector` | High |
| Industry: Financial Services | `/industries/financial-services` | Medium |
| Industry: Retail & Ecommerce | `/industries/retail-ecommerce` | Medium |
| Industry: Healthcare | `/industries/healthcare` | Medium |
| Industry: Distributed & Field Operations | `/industries/distributed-field-ops` | Medium |
| Why Kaptea | `/why-kaptea` | Medium |
| Case Studies (index) | `/resources/case-studies` | Medium |
| Case Study: NIE Networks | `/resources/case-studies/nie-networks` | High |
| Resources index | `/resources` | Low |
| Book a Demo | `/book-demo` | High |

---

## 7. Homepage Structure (All 12 Sections)

The homepage copy and design is fully prepared in `Kaptea Homepage Copy & Design.html`. The sections in order are:

1. **Nav** - Sticky dark (#0f1522), mega-menus on Platform and Solutions
2. **Hero** - H1: "Design & orchestrate essential communications with confidence." / H2: "Rapidly deploy the only omnichannel communications platform designed for regulated and high-scale organisations, built on carrier-grade infrastructure." / CTAs: "Book a Demo" + "Learn more" / Trust badges: ISO 27001, Cyber Essentials, Twilio Gold & AI Partner
3. **Logo bar** - "Trusted for essential communications by global and regulated enterprise" - 6 client logo slots
4. **Problem section** - Three pain points (surge/outage buyer, distributed enterprise buyer, Twilio technical buyer) + bridge statement
5. **Platform overview** - Three-layer architecture diagram: Carrier (Twilio/Telnyx) - Kaptea/Pronto - Your Organisation
6. **Three core capabilities** - Cards for Emergency & Surge, Distributed Governance, IVR & Voice (each with proof-point stat)
7. **Why Kaptea** - Four differentiators on dark background (dedicated instance in days, full Twilio stack, 99.5% delivery, regulated industries)
8. **How it works** - Three steps: Connect, Configure, Go live
9. **Case study** - NIE Networks (750x surge, <90 days deployment, 24/7 monitoring)
10. **Integrations** - Logo grid: SAP, Salesforce, Microsoft Dynamics, HubSpot, Azure AD, Kafka, Twilio, Telnyx
11. **Security & compliance bar** - ISO 27001, Cyber Essentials, GDPR DPA, EU & US Data Residency, Dedicated Instance Architecture
12. **Pricing teaser** - "Transparent, outcome-based pricing. From $1,500/month."
13. **Closing CTA** - Mirror of hero, dark background, "Book a Demo" + "Explore the Platform"

---

## 8. Pricing Page

Already built and live at `https://feirl.github.io/kaptea/` (index.html).

Three plans:
- **Lite** - $1,500/month - 1 channel, limited
- **Premium** - $2,500/month - all channels, enterprise governance
- **Enterprise** - Custom pricing

Volume dropdown: 1M, 2M, 3M, 5M, 10M messages
Billing toggle: Monthly / Annual (5% discount)
Overages on top at per-message rates
Twilio/carrier costs billed separately - not included in platform fee
All plans: dedicated server instance, data residency, ISO 27001

---

## 9. Content Sources

All source documents are in the folder: `/Kaptea/`

| Document | What it contains | Key use |
|----------|-----------------|---------|
| `01 - Strategy/Kaptea - Commercial Architecture 2026.pdf` | Core positioning, three ICP segments, platform overview | Primary source for all copy |
| `01 - Strategy/Kaptea Platform Strategy and Positioning_otter_ai.txt` | Strategy session transcript (Alan, Robert, Brendan) | Tone, positioning, Twilio dynamics |
| `06 - Marketing & Brand/Brand Message Guide Kaptea by Monica StoryBrand.pdf` | StoryBrand brand guide (older - use for tone only, not positioning) | Tone reference |
| `03 - Prospects & Accounts/Kaptea top target accounts.xlsx` | 20 EMEA + 15 US target accounts, tiered | ICP validation |
| `02 - Meetings & Notes/NIE Technical Discussion with Chris Margetts 20260128.docx` | NIE Networks technical notes - IVR, 75,000 calls/hour storm scenario | Case study content |
| `03 - Prospects & Accounts/Howdens RFP for SMS Messaging.pdf` | Howdens Joinery (900 depots) SMS RFP | Distributed governance use case |
| `03 - Prospects & Accounts/Kaptea - Kingfisher questions.pdf` | Kingfisher RFP - multi-brand, Kafka, template governance | Enterprise transactional use case |
| `04 - Partners & GTM/Pronto for Twilio Internal Sales 20260305.pdf` | Current Pronto pitch to Twilio sales team | Partner channel content |
| `03 - Prospects & Accounts/Kaptea_NIE_IVR_Storm_Resilience_Proposal_v2.pdf` | NIE proposal with implementation pricing | Case study numbers |
| `07 - Commercial & Pricing/` | Pricing documents | Pricing validation |

### Key Proof Points to Use Throughout

- **NIE Networks:** 750x call spike during storms (100 to 75,000/hour). Deployed in <90 days. CRM: Microsoft Dynamics. SSO: Azure AD. Cloud: AWS/Azure.
- **Howdens Joinery:** 900 depots. Distributed SMS governance. Twilio AE: Lee Holland.
- **Kingfisher (B&Q/Screwfix):** Multi-brand ecommerce. Kafka integration. Template governance. Competing vs Braze at $300k/year.
- **An Post:** 60-day pilot. Transactional messaging.

---

## 10. ICP & Buyer Personas

### Three ICP Segments

**Segment A - Critical & Emergency Communications Resilience**
Organisations where communications failure during high-stress events causes real harm. Utilities, emergency services, public sector. Key pain: legacy IVR collapses under surge. Key buyer: Head of IT / CTO + Operations Director.

**Segment B - Enterprise Transactional Comms Orchestration**
Large enterprises sending high volumes of transactional messages (order confirmations, alerts, authentication) needing reliability, CRM integration and delivery visibility. Retail, financial services, logistics.

**Segment C - Distributed Messaging Governance**
Organisations with many locations/divisions needing central governance over what gets sent, by whom, in what template. Franchise networks, distributed retail, multi-brand enterprises. Key pain: rogue messaging, no audit trail.

### Four Buyer Personas

**Technical Decision Maker** (Head of IT, Solutions Architect, CTO)
- Wants: technical credibility, integration specs, security/compliance detail, architecture clarity
- Questions: How does it integrate with our CRM? What's the deployment architecture? How is data residency enforced?

**Operational Sponsor** (COO, Head of Operations, Customer Experience Director)
- Wants: business outcomes, reliability proof, SLA clarity
- Questions: What happens if it fails during a storm? How quickly can we deploy? What's the SLA?

**Executive Sponsor** (CEO, CFO)
- Wants: ROI, risk reduction, strategic fit
- Questions: What does it cost? What's the risk if we don't do this? Who else uses it?

**Project Champion** (Business Analyst, Digital Transformation Manager)
- Wants: implementation path, use case specificity, ease of onboarding
- Questions: How long does implementation take? Do we need a big team? What does day one look like?

---

## 11. Twilio Partner Context

A significant portion of Kaptea's pipeline comes through Twilio. Key personas:

**Twilio Account Executive (AE)** - refers clients when they need a governed UI layer on top of Twilio. Lee Holland at Twilio has referred both Kingfisher and Howdens.

**Twilio Solutions Engineer (SE)** - validates technical architecture in pre-sales. Needs to understand how Kaptea uses Twilio tokens and APIs.

**Twilio Partner Alliance Manager** - Megan Manis at Twilio has Alan McNab as a mutual connection. Warm intro opportunity.

The Twilio partnership is a credibility signal and should appear prominently in the website - in nav (Carrier Infrastructure section), on the homepage (certification strip), and on a dedicated Partners page.

---

## 12. GitHub Repository

**Repo:** `https://github.com/feirl/kaptea`
**Live URL:** `https://feirl.github.io/kaptea/`
**Branch:** `main`
**Current files:**
- `index.html` - Pricing page (live)
- `homepage.html` - Homepage copy & design draft

When building the full site, the homepage should become `index.html` and the pricing page should move to `pricing.html` or `/pricing/index.html`.

---

## 13. How to Work With Brendan

### Communication style
- Be direct and concise. Brendan gives short instructions and expects you to use context to fill gaps.
- When you've built something, link it. Don't describe it at length.
- When you have a recommendation, lead with it rather than listing options.
- If something is ambiguous, make a reasonable call and flag it briefly - don't ask before acting.

### Build approach
- Build pages as standalone HTML files first. Clean, well-commented, brand-accurate.
- Use the homepage and pricing page as design references for consistency.
- Push to GitHub after each meaningful update so Brendan can review live.
- Design notes should be included as HTML comments (`<!-- DESIGN NOTE: ... -->`) not visible on the page.

### Copy approach
- Use content from source documents (see Section 9) where it exists.
- Where content doesn't exist yet, write in the established tone: direct, outcome-focused, enterprise-credible.
- Never use em dashes. Use ` - ` (spaced hyphen) or `:` instead.
- Proof points from real clients (NIE, Howdens, Kingfisher, An Post) should appear throughout. Don't invent stats.

### When Brendan says...
- "Build the [page name]" - build the full page HTML using content from source docs and the architecture defined here
- "Push it" - commit and push to GitHub
- "Update X to Y" - make that specific change and push
- "What should be on this page?" - give a structured recommendation drawing on everything in this brief before building
- "Does this make sense?" - give an honest critical assessment, not just validation

### What NOT to do
- Don't ask for information that's already in this document
- Don't build placeholder pages - every page should have real copy from day one
- Don't deviate from brand colours or typography without being asked
- Don't use generic SaaS copy ("streamline your workflow", "unlock the power of") - Kaptea is specific and technical

---

## 14. Current Status & Next Priorities

### Done
- [x] Full navigation architecture defined (Platform + Solutions)
- [x] Pricing page built and live
- [x] Homepage copy written (all 12 sections)
- [x] Homepage design guidance documented
- [x] ICP segments and buyer personas defined
- [x] Commercial architecture drafted

### Immediate next priorities
1. Build homepage as production-ready HTML with functioning mega-menu nav
2. Build Platform overview page (`/platform`)
3. Build Pronto product page (`/platform/pronto`)
4. Build Emergency & Surge use case page
5. Build NIE Networks case study page
6. Build Why Kaptea page

### To confirm before building
- Logo assets for client logo bar (NIE, Howdens, Kingfisher, An Post)
- Whether RCS and Secure Video are live features or roadmap items
- Whether Telnyx has live client deployments or is a supported-but-undeployed option
- Real quote from NIE Networks contact for case study
- AWS vs Azure - infrastructure section currently says "AWS & Azure" but confirm both are live

---

*This briefing was prepared by Claude (Cowork mode) based on a full review of the Kaptea commercial architecture documents, client proposals, strategy transcripts, and brand materials. For questions, contact brendan@fractionaledge.co.*
