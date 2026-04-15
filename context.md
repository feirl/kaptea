# Kaptea — Context Prompt
**Use this file to brief a new Claude session on everything needed to continue Kaptea commercial work without starting from scratch.**

---

## What Kaptea Is

Kaptea is an enterprise communications orchestration platform. Its product is called **Pronto**. It sits between carrier infrastructure (Twilio, Telnyx) and the customer's organisation, adding governance, resilience, and enterprise control that the carriers do not provide natively.

Kaptea is built by **Alan McNab**. Commercial architecture work is being done by **Brendan Hughes / Fractional Edge**.

**One-line positioning:** The only omnichannel communications platform designed for regulated and high-scale organisations, built on carrier-grade infrastructure.

**Core differentiators:**
1. Operationalises the full Twilio stack (Messaging, Voice, Flex, Verify, Video) in a single governed UI
2. Surge-proof architecture for crisis/emergency communications (proven at 750x spike - NIE Networks)
3. Dedicated instance deployed in days, not months
4. 99.5% average message delivery rate (outcome-based pricing)
5. Procurement-ready for regulated industries: ISO 27001, Cyber Essentials, GDPR DPA, EU/US data residency

---

## The Three ICP Segments

**Segment A: Emergency Resilience**
- Utilities, energy, critical infrastructure, public sector
- Pain: communications fail during surge events (storms, outages, emergencies)
- Trigger: post-incident review or upcoming regulatory requirement
- Example: NIE Networks (750x storm call surge)
- Revenue: Enterprise tier, $10k-$25k/month + significant implementation

**Segment B: Transactional Orchestration**
- Retail, ecommerce, financial services, logistics
- Pain: high-volume transactional messaging with no delivery governance or failover
- Trigger: RFP for messaging platform or failed incumbent
- Example: Kingfisher (multi-brand, Kafka, competing vs Braze at $300k/year)
- Revenue: Premium tier, $4,500-$9,500/month

**Segment C: Distributed Governance**
- Retail chains, franchise networks, field services, distributed manufacturing
- Pain: fragmented messaging across hundreds of locations, no central control
- Trigger: compliance audit finding or brand incident
- Example: Howdens (900 depots, distributed governance RFP)
- Revenue: Premium tier, $5,800-$10,000/month at higher volumes

---

## Buyer Personas (End Customers)

**Technical Decision Maker** (Head of IT / CTO / Solutions Architect)
- Needs: integration proof, architecture docs, API access, surge evidence
- Top questions: CRM integration? Data residency? Peak load capacity? Deployment time? API?

**Operational Sponsor** (COO / Head of Operations / CX Director)
- Needs: operational continuity, 99.5% delivery rate, governance demo, fast go-live
- Top questions: What happens during outage? Who manages day-to-day? How do we control depots?

**Executive Sponsor** (CEO / CFO / CRO)
- Needs: risk quantification, build vs buy narrative, transparent pricing, reference customers, exit terms
- Top questions: Cost of failure? Why not build it? Annual cost? Who else uses this? Exit terms?

**Project Champion** (Business Analyst / Digital Transformation Manager)
- Needs: phased implementation plan, onboarding checklist, named contact, use-case-specific demo
- Top questions: What does implementation look like? What do we need to provide? Who supports us?

---

## Twilio Partner Personas (Pipeline Sources)

ALL current Kaptea pipeline has come through Twilio. Three Twilio roles drive pipeline:

**Twilio Account Executive**
- What they need: one-sentence positioning they can use ("Pronto makes Twilio enterprise-ready"), demo they can run in 30 mins, confirmation it grows not threatens Twilio revenue, named Kaptea WhatsApp contact
- Known AE: Lee Holland (introduced both Howdens and Kingfisher)

**Twilio Solutions Engineer**
- What they need: full technical architecture docs, sandbox with working CRM/SSO/Kafka integrations, reference SE at Kaptea, 2-page technical brief for client IT teams
- Key concern: can I trust this in a technical POC?

**Twilio Customer Success Manager** (highest near-term pipeline potential - 251 CSMs)
- What they need: framing as implementation accelerator (not a competitor), evidence Pronto deployments move faster than native Twilio builds, named Kaptea CSM counterpart, escalation path (Kaptea manages all Twilio tickets for joint customers)
- Pain they have: implementation stalling on enterprise accounts they're trying to retain

**Warm connection:** Megan Manis (Partner Alliance Manager at Twilio) has Alan McNab as a mutual connection. Priority outreach target.

---

## Current Clients & Proof Points

| Client | Use Case | ICP Segment | Key Stat |
|--------|----------|-------------|----------|
| NIE Networks | Storm IVR orchestration | A: Emergency Resilience | 750x call surge handled; <90 days to live |
| Howdens Joinery | SMS governance across 900 depots | C: Distributed Governance | 900 depots, 1 governance layer |
| Kingfisher (B&Q, Screwfix) | Multi-brand omnichannel messaging | B: Transactional Orchestration | Competing vs Braze at $300k/year |
| An Post | TV licence renewal SMS campaign | B / Public Sector | HyperCare Lite, 60-day pilot model |

NIE tech stack: Microsoft Dynamics CRM (replacing SAP ISU), Azure AD SSO, SnapLogic middleware, Power BI reporting.

---

## Pricing Model

**Three plans: Lite / Premium / Enterprise**

All plans include: dedicated server instance, EU or US data residency, ISO 27001, Cyber Essentials, GDPR DPA.

Carrier costs (Twilio/Telnyx) billed separately at customer's own rate. Kaptea does not profit from message volume.

| Volume | Lite/month | Premium/month |
|--------|-----------|---------------|
| Up to 1M | $1,500 | $2,500 |
| Up to 2M | $2,700 | $4,500 |
| Up to 3M | $3,750 | $6,200 |
| Up to 5M | $5,800 | $9,500 |
| Up to 10M | $10,000 | $16,500 |

- Annual billing: 5% discount, messages pool across year
- Monthly billing: messages expire monthly, 60-day termination notice
- Overages billed per message above plan limit
- Enterprise: custom pricing, bespoke architecture
- HyperCare managed service: Lite £2,500/month | Premium £3,500/month | Enterprise £5,500/month
- Implementation day rates: 1-day £1,750 | 5-day £7,500 | 10-day £12,500
- 60-day pilot available on Premium on request

---

## Platform Architecture (Pronto)

**Five core areas within Pronto:**

1. **Omni-Channel Communications** - SMS, WhatsApp, Voice, Email, RCS | Two-way messaging | Inbound & outbound orchestration
2. **Control & Governance** - Role-based access | Division segmentation | Compliance enforcement | Template controls | Audit logs
3. **Delivery & Resilience** - Cross-channel failover | Delivery diagnostics | Event streaming | Error handling visibility | Load-aware routing
4. **Integration & API Framework** - Two-way CRM sync | Event-driven architecture | Open APIs | Webhook support
5. **Deployment & Infrastructure** - Dedicated instance in days | Rapid instance deployment | No heavy engineering team | Twilio token integration | Cloud-managed infrastructure | EU or US data residency

**Five broader capability pillars:**

1. **Channels** - SMS & RCS | WhatsApp | Voice & IVR | Email | Secure Video | Twilio Flex
2. **Resilience & Orchestration** - Cross-Channel Failover | Surge & Load Management | Queue Orchestration | Delivery Diagnostics
3. **Governance & Compliance** - Access & Identity | Template Governance | Compliance & Audit | Division & Segmentation
4. **Integrations** - CRM (SAP, Salesforce, Dynamics, HubSpot) | API & Webhooks | Event-Driven Architecture | Identity & SSO
5. **Carrier Infrastructure** - Twilio (Messaging, Voice, Flex, Verify, Video - operationalised through Pronto) | Telnyx (private global network, elastic SIP, cost-optimised routing)

**Items to verify before publishing:**
- RCS: confirm live vs roadmap
- Secure Video: confirm live vs roadmap
- AWS vs Azure: infrastructure section says AWS but NIE runs on Azure - use "AWS & Azure" or "Cloud Deployment"

---

## Solutions Architecture

**Four use cases:**

1. **Emergency & Surge Communications** - Storm-grade IVR | Surge-proof routing | High-volume alert scaling | Load shedding & queue prioritisation | Cross-channel failover | AWS & Azure resilience
2. **Distributed Messaging Governance** - RBAC & SSO | Division-level guardrails | Brand-safe templates | CRM-triggered messaging | Audit logging | Cost-aware routing
3. **IVR & Voice Orchestration** - API-first IVR | CRM-integrated routing | Queue orchestration & callback | Complex rule logic | Load shedding | Regulatory-safe legacy migration
4. **Enterprise Transactional Messaging** - Event-driven orchestration | Cross-channel failover & retry | Delivery verification | CRM-triggered automation | Centralised governance | Brand-safe template control

**Six industries:**

1. Financial Services - fraud alerts, authentication messaging, regulatory comms, multi-channel notifications, contact centre
2. Utilities & Energy - storm/outage alerts, surge IVR, load shedding, failover, public safety at scale
3. Healthcare - appointment messaging, secure two-way comms, emergency health alerts, compliance workflows, care pathways
4. Retail & Ecommerce - order/delivery updates, peak surge messaging, depot comms, CRM-triggered messaging, post-purchase
5. Public Sector - citizen notifications, emergency alerts, audit-ready messaging, government multi-channel, surge events
6. Distributed & Field Operations - franchise/depot governance, division access control, brand-safe templates, centralised oversight, CRM-triggered field comms

---

## Brand

- Primary red: `#f43130`
- Dark navy: `#0f1522`
- Product name: Pronto (within Kaptea / built on Twilio)
- No em dashes in any copy - use spaced hyphens or colons instead
- Outcome-based positioning: lead with "messages delivered" not "infrastructure managed"
- Key copy: "Design & orchestrate essential communications with confidence."

---

## Key Decisions Already Made

- Pricing is public and transparent (not hidden behind "contact us")
- Carrier costs (Twilio/Telnyx) billed separately - Kaptea does not bundle carrier margin
- Three tiers: Lite / Premium / Enterprise (not more, not fewer)
- Annual plan pools messages across the year (not expire monthly)
- "Why Kaptea" is a single page, not a dropdown
- Navigation top level: Platform | Solutions | Pricing | Resources | Why Kaptea | Book a Demo
- Resources dropdown has three clusters: Learn (Blog, Guides, Webinars) | Proof (Case Studies, Customer Stories) | Developer (Docs, API, Integration Guides)

---

## What Still Needs to Be Done

- [ ] VOC programme - minimum 6 customer interviews. This is the highest-leverage activity not yet done.
- [ ] Formal case studies for NIE, Howdens (in draft)
- [ ] Megan Manis outreach via Alan (warm Twilio partner connection)
- [ ] SE demo environment - Twilio SEs need a sandbox they can use without prep
- [ ] Technical brief (2-page) for Twilio SE audience
- [ ] Confirm RCS and Secure Video live vs roadmap status
- [ ] LinkedIn presence - positioning content aligned to the three ICP pain points
- [ ] Intent data platform assessment (Bombora / 6sense) for enterprise account targeting
- [ ] Target account outbound sequences (personas: AE, Operational Sponsor, Technical Decision Maker)

---

*Document owner: Brendan Hughes / Fractional Edge*
*Last updated: April 2026*
*Next review: July 2026*
