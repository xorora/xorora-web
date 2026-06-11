import type {
  CaseStudySectionContent,
  CaseStudySectionType,
} from "@/lib/case-studies/types";

export interface SeedMetric {
  value: string;
  label: string;
  note?: string;
}

export interface SeedSection {
  type: CaseStudySectionType;
  content: CaseStudySectionContent;
}

export interface SeedCaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  lead: string;
  heroImage: string;
  headerBg: string;
  heroUrl: string;
  featured: boolean;
  sortOrder: number;
  metaTitle: string;
  metaDescription: string;
  metrics: SeedMetric[];
  sections: SeedSection[];
}

export const seedCaseStudies: SeedCaseStudy[] = [
  {
    slug: "unified-ai-voice-operations",
    title: "From fragmented tools to unified AI voice operations.",
    subtitle: "AI Voice Automation · B2B SaaS",
    tags: ["AI Voice Automation", "B2B SaaS"],
    lead: "A B2B AI voice company had powerful voice-agent technology — but no platform to deploy, monitor, and scale it. Xorora engineered four purpose-built portals on one shared backend, turning scattered operations into a commercially-ready product.",
    heroImage: "/assets/mocks/portal-business.webp",
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "app.xorora.ai/dashboard",
    featured: true,
    sortOrder: 1,
    metaTitle: "Unified AI Voice Operations Case Study | Xorora",
    metaDescription:
      "How Xorora engineered four role-based portals on one shared backend — turning scattered AI voice operations into a commercially-ready product.",
    metrics: [
      {
        value: "4",
        label: "Role-specific portals built and deployed",
      },
      {
        value: "7+",
        label: "External service integrations delivered",
      },
      {
        value: "16mo",
        label: "Concept to fully operational platform",
      },
      {
        value: "0→1",
        label: "Full platform built from the ground up",
      },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "A B2B AI voice automation company had built powerful voice-agent technology — but lacked the operational platform to deploy, monitor, and scale it commercially. Four distinct user groups each needed purpose-built tools, without sacrificing a unified backbone.",
            "Xorora engineered a modular multi-panel SaaS ecosystem — four portals on a single shared backend — transforming scattered operations into a fully unified AI voice management platform, commercially ready from day one.",
          ],
          chips:
            "User groups served: Business operators · Sales teams · Developers · Testing operations",
          meta: [
            { label: "Engagement", value: "16-month build" },
            { label: "Team", value: "4 specialists" },
            { label: "Architecture", value: "Multi-portal SaaS" },
            { label: "Delivery model", value: "0 → 1, ground-up" },
          ],
          image: {
            src: "/assets/mocks/portal-business.webp",
            alt: "Business operations portal",
            url: "app.xorora.ai/business",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "Challenge & Solution",
          title: "Where it broke, and how we fixed it",
          subtitle:
            "The AI voice agents were ready. The infrastructure to manage them wasn't. Xorora rebuilt the operational layer from the ground up.",
          pairs: [
            {
              challenge:
                "No centralized way to deploy and monitor AI voice agents at scale — business, sales, and developer teams worked in silos with no shared workflows.",
              solution:
                "A role-first architecture: four purpose-built portals — Business, Sales, Developer, Testing — sharing one backend API, one design system, and standardized core flows.",
            },
            {
              challenge:
                "Subscription and billing management was scattered across separate systems, with no unified commercial backbone.",
              solution:
                "A single billing layer powered by Stripe, standardized across every portal — one operational backbone for all commercial activity.",
            },
            {
              challenge:
                "No standardized role-based authentication or access control across business, sales, and engineering teams.",
              solution:
                "OTP-based authentication and role-based access control deployed uniformly across all four portals.",
            },
            {
              challenge:
                "Bilingual UX and legal-compliance requirements were unmet, and external telephony, payment, and geolocation providers were unintegrated.",
              solution:
                "Bilingual UX and compliance built into the architecture; Twilio, Vapi, Mapbox, IP Geolocation and Documso integrated end-to-end.",
            },
          ],
        },
      },
      {
        type: "architecture",
        content: {
          label: "How it was built",
          title: "One architecture, four front doors",
          subtitle:
            "Four independent React + TypeScript + Vite SPAs — one per role — each a standalone deployment sharing a single REST backend, billing layer, and support infrastructure.",
          items: [
            {
              title: "Client (role-based SPAs)",
              icon: "layout-dashboard",
              body: "Business (operations & config), Sales (CRM & revenue), Developer (API & system control), Testing (QA & pre-deploy) — all React · TS · Vite.",
            },
            {
              title: "Unified REST API · shared backend",
              icon: "server",
              body: "Environment-configured endpoints, one backbone for all portals.",
            },
            {
              title: "Auth & Access",
              icon: "shield-check",
              body: "OTP flows, RBAC, per-portal scopes.",
            },
            {
              title: "State & Data",
              icon: "database",
              body: "Redux Toolkit, RTK Query, react-hook-form, Zod.",
            },
            {
              title: "Billing",
              icon: "credit-card",
              body: "Stripe subscriptions, unified across portals.",
            },
            {
              title: "External integrations",
              icon: "plug",
              body: "Twilio, Vapi, Mapbox, IP Geolocation, Documso, ImgBB.",
            },
          ],
        },
      },
      {
        type: "outcomes",
        content: {
          label: "Measurable Outcomes",
          title: "Measurable Outcomes",
          subtitle:
            "What started as a fragmented set of requirements became one of the most architecturally cohesive platforms Xorora has delivered — the operational backbone behind a live AI voice service.",
          bullets: [
            {
              title: "4 portals live",
              body: "Business, sales, developer, and testing portals fully operational and serving real users.",
            },
            {
              title: "Full platform delivery",
              body: "Concept to production in 16 months with a lean team of four.",
            },
            {
              title: "7+ integrations live",
              body: "Stripe, Twilio, Vapi, Mapbox, IP Geolocation, ImgBB and Documso, all in production.",
            },
            {
              title: "Unified billing",
              body: "Subscription and payment management standardized across every portal.",
            },
            {
              title: "Role-based auth deployed",
              body: "OTP flows and access controls live across all four portals.",
            },
            {
              title: "Compliance ready",
              body: "Bilingual UX and legal-compliance requirements built into the architecture.",
            },
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "Results obtained",
          title: "Results obtained",
          subtitle:
            "By treating each user role as a first-class product decision — not an afterthought — Xorora gave this AI voice company the operational backbone it needed to scale commercially.",
          bullets: [
            {
              title: "Four portals, one architecture",
              body: "All run fully operational on a single shared backend, serving real users in production.",
            },
            {
              title: "A commercial engine, live",
              body: "From agent deployment to billing, call analytics to developer access, every commercial activity runs from one unified system.",
            },
            {
              title: "Built to scale from day one",
              body: "Role-based access, unified billing, and bilingual compliance are baked into the architecture, ready for enterprise clients.",
            },
          ],
          quote: "Four portals. One architecture. Zero fragmentation.",
        },
      },
    ],
  },
  {
    slug: "regula",
    title: "Turning regulatory chaos into real-time compliance intelligence.",
    subtitle: 'RegTech · AI Automation · FinTech — "Regula"',
    tags: ["RegTech", "AI Automation", "FinTech"],
    lead: "Legacy RegTech left emerging markets behind. Xorora built an automation-first, AI-powered platform that monitors regulators continuously, scores business impact, and alerts compliance teams in under an hour.",
    heroImage: "/assets/regula/dashboard.webp",
    headerBg: "/assets/regula/header-bg.jpg",
    heroUrl: "app.regula.io/dashboard",
    featured: false,
    sortOrder: 2,
    metaTitle: "Regula Case Study — Regulatory Intelligence | Xorora",
    metaDescription:
      "How Xorora built an automation-first RegTech platform that monitors regulators continuously and alerts compliance teams in under an hour.",
    metrics: [
      {
        value: "70%",
        label: "Reduction in compliance workload (platform target)",
      },
      {
        value: "<1hr",
        label: "Regulatory change detection latency (platform target)",
      },
      {
        value: "48hr",
        label: "Time to first alert for new users (platform target)",
      },
      {
        value: "12mo",
        label: "Full SaaS platform built and launched (solo founder build)",
      },
    ],
    sections: [
      {
        type: "market_context",
        content: {
          label: "Market context",
          title: "Legacy RegTech left emerging markets behind",
          paragraphs: [
            "Existing tools were built for US and EU enterprise compliance teams — expensive, over-engineered, and with zero coverage of local regulators in Southeast Asia, Africa, Latin America, and the Middle East. FinTech SMBs in these markets were left monitoring regulatory websites manually, parsing PDFs, and tracking circulars by hand — all while facing the same compliance risk as their enterprise counterparts.",
          ],
          chips:
            "Markets: Southeast Asia · Africa · Latin America · Middle East",
        },
      },
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "A RegTech founder identified a clear gap — thousands of FinTech SMBs operating in emerging markets were flying blind on regulatory compliance. Fast-changing rules, fragmented sources, and zero affordable tooling meant compliance teams were buried in manual work with no reliable way to stay ahead of regulatory change.",
            "Xorora built a real-time regulatory intelligence platform from the ground up — an automation-first, AI-powered SaaS that continuously monitors regulator websites, extracts changes, scores their business impact, and delivers prioritized alerts to compliance teams in under an hour. What legacy tools charged enterprise prices for, this platform delivers to SMBs at a fraction of the cost.",
          ],
          meta: [
            { label: "Domain", value: "RegTech · AI Automation" },
            { label: "Market", value: "Emerging-market FinTech" },
            { label: "Engagement", value: "12-month build" },
            {
              label: "Delivery model",
              value: "0 → Production SaaS (founder-led, single-engineer build)",
            },
          ],
          image: {
            src: "/assets/regula/dashboard.webp",
            alt: "Regula compliance dashboard",
            url: "regula.app/dashboard",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "The challenge",
          lead: "Compliance teams in emerging markets were drowning — and the tools built to help them didn't exist.",
          paragraphs: [
            "Regulatory bodies publish updates across dozens of disconnected channels. For a small compliance team monitoring multiple jurisdictions, keeping up manually was a full-time job with a high margin for error. A missed circular could mean non-compliance. A delayed response could mean a fine.",
          ],
          bullets: [
            "Regulations published across fragmented sources — websites, PDFs, portals, circulars — with no unified feed.",
            "Manual monitoring created high compliance workload and significant non-compliance risk.",
            "Legacy RegTech tools priced for enterprise and built for US/EU markets — inaccessible to SMBs.",
            "No local coverage of emerging-market regulators in existing tools.",
            "No audit trail or change history for compliance documentation.",
            "Zero automated impact scoring — teams couldn't prioritize which changes mattered most.",
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "How Xorora solved it",
          paragraphs: [
            "An automation-first regulatory intelligence platform with one core promise — no compliance team should ever have to manually monitor a regulator website again.",
            "The platform runs a continuous end-to-end monitoring pipeline: compliance teams configure their regulatory targets, the system crawls those sources on a defined schedule, compares new content against version history, passes changes through AI analysis for summarization and impact scoring, and delivers prioritized alerts via email, Slack, Teams, or custom webhooks — all in under an hour from the moment a regulation changes.",
            "Beyond monitoring, the platform delivers a full compliance workspace — onboarding wizard for fast setup, audit-ready change history, billing and usage controls, and a pricing model built specifically for SMB budgets. Everything legacy RegTech tools charged enterprise rates for, at a fraction of the cost.",
          ],
          pipeline:
            "End-to-end monitoring pipeline (< 1 hour): 01 Target Setup (configure sources) → 02 Crawl (automated monitoring) → 03 Version Diff (change detection) → 04 AI Analysis (impact scoring) → 05 Alert (email / webhook).",
          image: {
            src: "/assets/regula/targets.webp",
            alt: "Regulatory targets monitoring",
            url: "regula.app/targets",
          },
        },
      },
      {
        type: "architecture",
        content: {
          label: "How it was built",
          title: "Architecture",
          subtitle:
            "A multi-tenant Next.js full-stack application built for reliability, scalability, and cost-efficient infrastructure — with durable, event-driven background workflows orchestrated by Inngest.",
          items: [
            {
              title: "Application (multi-tenant SaaS)",
              icon: "layout-dashboard",
              body: "Next.js 16 · React 19 full-stack app — NextAuth.js v5, Tailwind 4, shadcn/ui, deployed on Vercel. Compliance workspace, onboarding, billing.",
            },
            {
              title: "Orchestration",
              icon: "workflow",
              body: "Inngest workflow engine — crawl scheduling, version diffing, AI analysis, alert delivery, with no queue infrastructure to manage.",
            },
            {
              title: "Processing",
              icon: "sparkles",
              body: "Crawl4AI (extraction, anti-bot resilient) → Google Gemini (summarize, impact scoring).",
            },
            {
              title: "Data layer",
              icon: "database",
              body: "PostgreSQL (Drizzle ORM), Upstash Redis (caching), AWS S3 (document & content store).",
            },
            {
              title: "Multi-channel alert delivery",
              icon: "bell-ring",
              body: "Resend (email), Slack, MS Teams, and custom webhooks.",
            },
            {
              title: "Billing",
              icon: "credit-card",
              body: "Stripe — subscription billing & usage controls.",
            },
          ],
        },
      },
      {
        type: "outcomes",
        content: {
          label: "Measurable Outcomes",
          title: "Measurable Outcomes",
          subtitle:
            "An automation-first platform that doesn't just monitor regulations — it eliminates the manual compliance burden entirely, delivered end-to-end by a single founder-engineer in twelve months.",
          bullets: [
            {
              title: "Up to 70% less manual workload",
              body: "Teams monitor more regulators with less effort.",
            },
            {
              title: "Sub-1-hour detection",
              body: "Regulatory changes identified and alerted faster than any manual process.",
            },
            {
              title: "Under 48 hours to first alert",
              body: "The onboarding wizard gets new teams monitoring within the same day.",
            },
            {
              title: "Audit-ready change history",
              body: "Every change logged, versioned, and documented for compliance.",
            },
            {
              title: "SMB-accessible pricing",
              body: "Far lower cost than legacy enterprise RegTech, with equal or better coverage.",
            },
            {
              title: "Full SaaS in 12 months",
              body: "Concept to live multi-tenant platform by a founder-led single-engineer build.",
            },
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "The result",
          subtitle:
            "Legacy RegTech solved compliance for the companies that could afford it. This platform solves it for everyone else — bringing enterprise-grade regulatory intelligence to the emerging-market FinTechs that needed it most.",
          bullets: [
            {
              title: "Built for the underserved",
              body: "Continuous AI-powered crawling and intelligent impact scoring in an affordable SaaS — enterprise-grade intelligence at SMB pricing.",
            },
            {
              title: "Eliminates the manual burden",
              body: "The platform removes the manual compliance work entirely. Teams respond to change instead of hunting for it.",
            },
            {
              title: "Production from day one",
              body: "A live multi-tenant SaaS — onboarding, audit history, billing, and multi-channel alerting — delivered end-to-end in twelve months.",
            },
          ],
          quote: "Monitor continuously. Score impact. Respond, don't hunt.",
        },
      },
    ],
  },
  {
    slug: "pingpanda",
    title:
      "Real-time SaaS event monitoring. From blind spots to instant visibility.",
    subtitle: 'SaaS Monitoring · Real-Time Analytics · API-First — "PingPanda"',
    tags: ["SaaS Monitoring", "Real-Time Analytics", "API-First"],
    lead: "SaaS teams move fast — but without real-time visibility, they always react late. Xorora built a lightweight, API-first event notifier: ingest a typed event, get an instant Discord alert with full context. No dashboards to configure, no blind spots.",
    heroImage: "/assets/pingpanda/dashboard.webp",
    headerBg: "/assets/pingpanda/header-bg.jpg",
    heroUrl: "app.pingpanda.io/dashboard",
    featured: false,
    sortOrder: 3,
    metaTitle: "PingPanda Case Study — SaaS Event Monitoring | Xorora",
    metaDescription:
      "How Xorora built an API-first SaaS event notifier that delivers instant Discord alerts — from blind spots to real-time visibility.",
    metrics: [
      {
        value: "Real-time",
        label: "Event delivery from ingestion to notification (core promise)",
      },
      {
        value: "0 → 1",
        label: "Full API-first SaaS built from the ground up (greenfield)",
      },
      {
        value: "13mo",
        label: "Concept to production (founder-led)",
      },
      {
        value: "3",
        label: "Core integrations: Discord, Stripe, Clerk (wired end-to-end)",
      },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "SaaS teams move fast — but without real-time visibility into what is happening in their product, they are always reacting late. A new signup, a failed payment, a surge in usage. By the time these events surface in a dashboard, the moment to respond has already passed.",
            "Xorora built a lightweight, API-first SaaS monitoring tool that solves this with a single core workflow: ingest typed events via API, map them to categories, and receive instant Discord notifications with full contextual detail. No complex setup, no enterprise pricing, no monitoring blind spots — just immediate operational awareness delivered where the team already works.",
          ],
          meta: [
            { label: "Domain", value: "SaaS · Real-time analytics" },
            { label: "Product", value: "API-first event notifier" },
            { label: "Engagement", value: "13-month build" },
            {
              label: "Delivery model",
              value: "0 → Production SaaS (founder-led build)",
            },
          ],
          image: {
            src: "/assets/pingpanda/dashboard.webp",
            alt: "PingPanda dashboard",
            url: "app.pingpanda.io/dashboard",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "The challenge",
          lead: "SaaS teams were flying blind on the events that mattered most.",
          paragraphs: [
            "Critical product and revenue events — new signups, subscription upgrades, payment failures, incident spikes — were buried in logs, surfaced late through manual dashboard checks, or never tracked at all. The time between an event happening and a team member knowing about it was simply too long.",
          ],
          bullets: [
            "No real-time visibility into critical product and revenue events.",
            "Teams relying on manual dashboard checks that were slow, inconsistent and unreliable.",
            "No structured event modeling — every team tracked events differently.",
            "Existing monitoring tools were either too complex or too expensive for lean SaaS teams.",
            "No per-plan quota enforcement or usage controls for multi-tier SaaS operations.",
            "Delayed awareness meant delayed decisions — incidents and opportunities handled too late.",
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "How Xorora solved it",
          paragraphs: [
            "An API-first SaaS event notifier with a deliberately simple workflow — send an event, get an alert. No dashboards to configure, no monitoring infrastructure to manage.",
            "Teams integrate via a single API endpoint, define their event categories, and every tracked event triggers an instant, richly formatted Discord notification with full contextual fields. The platform handles category-based event modeling with strict Zod validation, secure API-key ingestion, per-plan monthly quota enforcement, and a clean dashboard for delivery-status tracking and analytics.",
          ],
          pipeline:
            "Pipeline (send an event · get an alert · real-time): 01 Event Ingested (via API endpoint) → 02 Validated & Categorized (Zod + category rules) → 03 Quota Checked (per-plan enforcement) → 04 Discord Alert Sent (instant notification).",
          chips:
            "Event types supported: Sales Events (new signups, upgrades) · Incident Events (errors, failures, spikes) · Usage Events (quota hits, milestones).",
          image: {
            src: "/assets/pingpanda/events.webp",
            alt: "PingPanda event API example",
            url: "app.pingpanda.io/api-key",
          },
        },
      },
      {
        type: "architecture",
        content: {
          label: "How it was built",
          title: "Architecture",
          subtitle:
            "A Next.js App Router frontend with a Hono API layer on the critical event path — lightweight, edge-compatible, and built for instant delivery on a serverless stack.",
          items: [
            {
              title: "Client",
              icon: "layout-dashboard",
              body: "Next.js 15 App Router · React 19 — TypeScript, Tailwind CSS, TanStack Query, deployed on Vercel. Dashboard, API keys, usage.",
            },
            {
              title: "API",
              icon: "zap",
              body: "Hono API layer — edge-compatible, API-key auth, Zod validation, per-plan quota enforcement.",
            },
            {
              title: "Data & identity",
              icon: "database",
              body: "Prisma + Neon (serverless PostgreSQL), Neon Adapter (connection pooling), Clerk (auth & user sync).",
            },
            {
              title: "Billing & delivery",
              icon: "credit-card",
              body: "Stripe (checkout, webhooks, plans) and Discord REST (rich formatted alerts).",
            },
            {
              title: "Deployment",
              icon: "cloud",
              body: "Vercel serverless edge runtime.",
            },
          ],
        },
      },
      {
        type: "outcomes",
        content: {
          label: "Measurable Outcomes",
          title: "Measurable Outcomes",
          subtitle:
            "A lean, API-first tool that gives SaaS teams the operational visibility they need — without the complexity and cost they don't — delivered end-to-end in thirteen months.",
          bullets: [
            {
              title: "Zero monitoring blind spots",
              body: "Every critical event surfaces instantly where the team already works.",
            },
            {
              title: "Real-time delivery",
              body: "From event ingestion to Discord notification with no meaningful delay.",
            },
            {
              title: "Faster incident response",
              body: "Teams aware of errors, failures, and spikes the moment they occur.",
            },
            {
              title: "Revenue moment visibility",
              body: "Signups, upgrades, and payment events tracked and alerted in real time.",
            },
            {
              title: "Full quota management",
              body: "Per-plan enforcement and usage controls built in from day one.",
            },
            {
              title: "Production in 13 months",
              body: "API-first SaaS with billing, auth, and delivery tracking all live and operational.",
            },
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "The result",
          subtitle:
            "The best monitoring tools are the ones teams actually use. By delivering event alerts directly into Discord — where SaaS teams already operate — this platform removed every barrier between a critical event happening and the right person knowing about it.",
          bullets: [
            {
              title: "No missed signups",
              body: "Revenue moments (signups, upgrades, payments) are tracked and alerted the instant they happen.",
            },
            {
              title: "No delayed incident response",
              body: "Errors, failures, and spikes reach the team in real time, where they already work.",
            },
            {
              title: "No setup overhead",
              body: "A single API endpoint and event categories. No dashboards to configure, no infrastructure to manage.",
            },
          ],
          quote: "Send an event. Get an alert. Never miss a moment.",
        },
      },
    ],
  },
];
