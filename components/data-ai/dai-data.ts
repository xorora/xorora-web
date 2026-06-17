/** Shared data for the data-ai page (server + client safe). */

export const DAI_FAQS = [
  {
    q: "How do we know if our organization is ready for AI and data innovation?",
    a: "Readiness depends on your current data quality, infrastructure, workflows, and business priorities. Most organizations begin with an assessment to understand gaps in data, architecture, and processes. This helps determine where AI can create the most value and what needs to be improved first. A clear readiness evaluation reduces risk and accelerates adoption.",
  },
  {
    q: "How long does it take to implement an AI or data project?",
    a: "It depends on scope and data maturity. A focused proof of value typically runs a few weeks, while production rollouts span a few months. We work in short, outcome-based phases so you see value early and decide each next step with evidence rather than guesswork.",
  },
  {
    q: "Do we need fully clean or structured data before starting?",
    a: "No. Most organizations start with imperfect data. Part of our work is assessing, cleaning, and structuring data as we go. We design pipelines and governance that improve data quality continuously rather than waiting for perfection before any value is delivered.",
  },
  {
    q: "Will AI and data solutions integrate with our existing systems?",
    a: "Yes. We build on open standards and connect to your existing stack — cloud platforms, databases, applications, and APIs — so new capabilities extend what you already run instead of replacing it. Interoperability is a design requirement from day one.",
  },
  {
    q: "How do you ensure responsible, secure, and compliant AI deployment?",
    a: "We bake in security, access controls, and governance from day one, with evaluation suites, monitoring, and human oversight. We align with standards such as SOC 2, GDPR, and industry-specific regulations depending on your context, so deployments are trustworthy and auditable.",
  },
] as const;
