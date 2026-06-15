import {
  OutcomeGrid,
  ServiceCardGrid,
  ServiceFaq,
  StepApproach,
} from "@/components/services";

export const SERVICES = [
  {
    icon: "compass",
    name: "Discovery Workshop Services",
    body: "A focused Discovery Workshop that turns a vague idea into a costed, de-risked roadmap with clear scope, architecture, and milestones.",
  },
  {
    icon: "brain-circuit",
    name: "AI Consulting Services",
    body: "Where AI actually moves the needle for your business, and where it does not. Use cases, feasibility, and a build plan you can trust.",
  },
  {
    icon: "refresh-cw",
    name: "AI Digital Transformation Services",
    body: "A pragmatic modernization strategy that maps legacy systems to a scalable, AI-ready architecture, without a risky big-bang rewrite.",
  },
] as const;

const OUTCOMES = [
  {
    icon: "target",
    title: "Clarity, fast",
    body: "In weeks you walk away with a costed roadmap, a clear scope, and the confidence to commit, or the data to pivot.",
  },
  {
    icon: "shield-check",
    title: "De-risked decisions",
    body: "We surface the technical and commercial risks early, so you invest in what works and avoid expensive dead ends.",
  },
  {
    icon: "trending-up",
    title: "ROI-first thinking",
    body: "Every recommendation maps to business impact: cost, revenue, or speed. Strategy you can measure.",
  },
  {
    icon: "handshake",
    title: "A partner who ships",
    body: "We do not just advise and leave. The team that scopes your roadmap can build it, end to end.",
  },
] as const;

const APPROACH_STEPS = [
  {
    n: "01",
    name: "Align",
    body: "A discovery call to understand your business goals, constraints, and what success looks like — so every recommendation that follows ties back to a real outcome.",
  },
  {
    n: "02",
    name: "Assess",
    body: "We dig into your product, market, data, and systems to find the real problem worth solving, separating the symptoms from the root cause before any plan is drawn.",
  },
  {
    n: "03",
    name: "Map",
    body: "We translate findings into a costed, prioritized roadmap with architecture and a clear scope — sequenced so you ship the highest-value work first and de-risk early.",
  },
  {
    n: "04",
    name: "Activate",
    body: "You leave ready to build, with us or your team. Because the same team that scopes the roadmap can deliver it end to end, nothing gets lost in translation.",
  },
] as const;

export const FAQS = [
  {
    q: "What is IT consulting?",
    a: "IT consulting is expert advisory work that helps a business use technology to reach its goals. At Xorora, our IT consulting services assess your product, data, and systems, identify the right problems to solve, and produce a costed, de-risked roadmap, so you invest in what actually moves the business forward.",
  },
  {
    q: "How does IT consulting work?",
    a: "Our IT consulting works in four clear steps: Align, Assess, Map, and Activate. We start with a discovery call to understand your goals, dig into your product and systems, translate the findings into a prioritized roadmap with architecture and scope, then leave you ready to build. Because we also ship software, the same team can deliver the roadmap end to end.",
  },
  {
    q: "What does IT consulting services offer 24/7 support?",
    a: "Our IT consulting engagements include responsive support throughout the project, and for clients on an ongoing partnership or managed-services plan we provide 24/7 monitoring and support. We agree the exact coverage and response times up front so your platform stays reliable around the clock.",
  },
  {
    q: "How much do AI consulting services cost?",
    a: "The cost of AI consulting services depends on scope, complexity, and engagement length. A focused Discovery Workshop is a fixed, predictable fee, while broader AI consulting and AI digital transformation services are scoped after an initial call. We always provide a clear, itemized estimate before any work begins, so there are no surprises.",
  },
] as const;

export function ConServices() {
  return (
    <ServiceCardGrid
      label="What we advise on"
      title="Our IT consulting services."
      sub="Senior, hands-on IT strategy consulting from a team that also ships. We pressure-test the idea and map the path to production."
      items={[...SERVICES]}
    />
  );
}

export function ConOutcomes() {
  return (
    <OutcomeGrid
      title="Direction before momentum."
      sub="Speed in the wrong direction is the most expensive mistake in software. We make sure you are pointed right before you build."
      items={[...OUTCOMES]}
    />
  );
}

export function ConApproach() {
  return (
    <StepApproach
      title="Our approach."
      sub="A proven engagement that gets you from uncertainty to a clear, costed plan."
      steps={[...APPROACH_STEPS]}
      gradientId="conApproachDia"
    />
  );
}

export function ConFAQ() {
  return (
    <ServiceFaq
      label="Good to know"
      title="IT consulting services, answered."
      items={[...FAQS]}
    />
  );
}
