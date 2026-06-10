export interface BlogPost {
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  date: string;
  img: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    cat: "AI Engineering",
    title: "Shipping production RAG: what actually breaks at scale",
    excerpt:
      "Retrieval looks easy in a demo and hard in production. Here is the architecture we reach for, and the failure modes we design around.",
    read: "8 min",
    date: "Jun 2, 2026",
    img: "/assets/regula/featured.jpg",
    featured: true,
  },
  {
    cat: "Cloud & Security",
    title: "Guardrails first: securing AI workloads from day one",
    excerpt:
      "Encryption, access control, and observability are not afterthoughts. A practical checklist for AI systems handling sensitive data.",
    read: "6 min",
    date: "May 28, 2026",
    img: "/assets/saas/event-monitoring.jpg",
  },
  {
    cat: "Product",
    title: "From prototype to product: the first ninety days",
    excerpt:
      "The gap between a working demo and a product your business runs on is mostly process. Here is how we close it.",
    read: "7 min",
    date: "May 21, 2026",
    img: "/assets/saas/voice-ops.jpg",
  },
  {
    cat: "Industry",
    title: "Why emerging-market fintech needs different tooling",
    excerpt:
      "Legacy RegTech was built for US and EU enterprises. We unpack what changes when you build for everyone else.",
    read: "5 min",
    date: "May 14, 2026",
    img: "/assets/regula/header-bg.jpg",
  },
  {
    cat: "AI Engineering",
    title: "Evaluating LLM output without fooling yourself",
    excerpt:
      "Vibes are not a metric. A grounded approach to evals, regression suites, and guardrails for language-model features.",
    read: "9 min",
    date: "May 7, 2026",
    img: "/assets/saas/header-bg.jpg",
  },
  {
    cat: "Case Notes",
    title: "Four portals, one backend: an architecture story",
    excerpt:
      "How we modeled role-based access across business, sales, developer, and testing portals on a single shared API.",
    read: "6 min",
    date: "Apr 30, 2026",
    img: "/assets/mocks/portal-sales.webp",
  },
  {
    cat: "Company",
    title: "How we keep engineer turnover low",
    excerpt:
      "The people who learn your product should stay on it. A look at how we build teams that last.",
    read: "4 min",
    date: "Apr 23, 2026",
    img: "/assets/healthtech/header-bg.jpg",
  },
  {
    cat: "Product",
    title: "Designing dashboards people actually check",
    excerpt:
      "Most dashboards get opened once. We share the patterns that turn analytics into a daily habit for teams.",
    read: "5 min",
    date: "Apr 16, 2026",
    img: "/assets/travel/header-bg.jpg",
  },
  {
    cat: "Cloud & Security",
    title: "Serverless event pipelines that stay cheap at scale",
    excerpt:
      "Durable, event-driven workflows without a queue to babysit. The stack we use to keep real-time delivery affordable.",
    read: "7 min",
    date: "Apr 9, 2026",
    img: "/assets/startups/header-bg.jpg",
  },
];

export const BLOG_CATEGORIES = [
  "All posts",
  "AI Engineering",
  "Product",
  "Cloud & Security",
  "Industry",
  "Case Notes",
  "Company",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
