/** Seed-only content snapshots for site_content table. */

export const ABOUT_FAQ = [
  {
    q: "Where is Xorora based?",
    a: "We are a distributed team with hubs in San Francisco, London, and Singapore, working with clients across North America, Europe, and Asia.",
  },
  {
    q: "How quickly can you start?",
    a: "For most engagements we can kick off within one to two weeks of a signed agreement. A focused discovery can often begin within days.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, always. An NDA is a standard step in our onboarding process before any project details, business context, or technical information is discussed. We take IP protection seriously.",
  },
  {
    q: "What does a project typically cost?",
    a: "It depends on scope, integrations, and team model. After a short discovery we provide a clear, itemized estimate so you know what each milestone costs before we start.",
  },
  {
    q: "How do I know the project will be on time?",
    a: "We work in short, demoable sprints with continuous visibility, so you see working software every week and there are no surprises at the deadline.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. We partner with funded startups building their first product and with enterprises modernizing complex systems, tailoring the engagement model to each.",
  },
  {
    q: "What happens after launch?",
    a: "We stay. We provide ongoing optimization, monitoring, and support because the first 90 days after launch matter the most.",
  },
] as const;

export const HOME_SERVICE_META = {
  order: [
    "Data & AI",
    "Engineering",
    "Managed Services",
    "Consulting",
    "Marketing Services",
  ],
  meta: {
    "Data & AI": {
      shape: "star",
      desc: "Applied ML, LLMs, RAG and agents — engineered for your data and your domain. We turn unstructured chaos into models your business can trust.",
    },
    Engineering: {
      shape: "ring",
      desc: "Full-stack delivery — custom software and AI, engineered to ship and built to scale.",
    },
    "Managed Services": {
      shape: "cluster",
      desc: "Keep production secure, observed, and always on — DevOps, security, and infrastructure.",
    },
    Consulting: {
      shape: "chevron",
      desc: "Turn ambition into a costed, de-risked roadmap with senior engineering advice.",
    },
    "Marketing Services": {
      shape: "comet",
      desc: "Demand and growth, measured and compounding across every channel.",
    },
  },
} as const;

export const SITE_CONTENT_SEED: Record<string, unknown> = {
  "about:faq": ABOUT_FAQ,
  "home:contact-faq": ABOUT_FAQ,
  "home:services": HOME_SERVICE_META,
};
