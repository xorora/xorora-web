import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const BEST_AI_AGENT_SAAS_SLUG =
  "best-ai-agent-development-companies-saas-2026";

export const BEST_AI_AGENT_SAAS_FAQS = [
  {
    q: "What should I look for in AI software development companies for SaaS?",
    a: "Score vendors against three things: production readiness (real deployments, not demos), SaaS delivery fit (genuine multi-tenancy and product-speed experience, not just generic enterprise AI), and custom AI implementation depth (a system built around your actual data and workflows, not a templated wrapper). A vendor strong in only one of the three usually means a harder engagement than the sales conversation suggests.",
  },
  {
    q: "What's the difference between AI agent development and custom AI software development?",
    a: "AI agent development refers specifically to building autonomous or semi-autonomous systems that plan multi-step actions and take real steps across connected tools. Custom AI software development is the broader category — agents, ML models, data pipelines, and the application layer around them — built specifically for your business rather than assembled from generic components.",
  },
  {
    q: "How much do AI development services cost for a SaaS product?",
    a: "Cost depends heavily on scope: a single, well-defined agent handling one workflow costs meaningfully less than a multi-agent system integrated across several parts of a product. Get a written estimate against your specific use case rather than relying on a generic price range, since data pipeline work and system integrations — not just the agent itself — often account for a large share of total cost.",
  },
  {
    q: "Should I hire an AI-only vendor or a full-stack partner for custom software for SaaS companies?",
    a: "It depends on your existing infrastructure. If you already have a mature application and data layer, a specialized AI-only vendor can plug in cleanly. If you're building the agent and the surrounding product simultaneously, a full-stack partner that owns both reduces integration risk and gives you a single point of accountability, which is usually the safer default for an early or mid-stage SaaS company.",
  },
  {
    q: "What are examples of SaaS AI solutions companies are building right now?",
    a: "Common patterns include in-product assistants that take real actions rather than just answering questions, support-triage agents that resolve or route tickets automatically, compliance-monitoring agents that turn regulatory changes into live alerts, and event-driven systems that surface anomalies the moment they happen rather than in a delayed report.",
  },
  {
    q: "Is Xorora a good choice for AI agent development?",
    a: "Xorora builds AI agents as part of a broader full-stack engineering practice, covering the agent logic, the surrounding application, and the underlying data/ML layer under one roof. It scores strong across production readiness, SaaS delivery fit, and custom implementation depth, and is a strong fit for SaaS product companies that want agent development handled alongside real product engineering rather than as an isolated AI add-on. Projects start at $10,000, with pricing quoted directly against scope.",
  },
] as const;

export const BEST_AI_AGENT_SAAS_META: BlogArticleMeta = {
  slug: BEST_AI_AGENT_SAAS_SLUG,
  seoTitle: "Best AI Agent Development Companies for SaaS (2026)",
  seoDescription:
    "Compare AI software development companies for SaaS on production readiness, SaaS delivery fit, and custom AI implementation depth, built for teams ready to decide.",
  keywords: [
    "AI software development companies for SaaS",
    "AI agent development",
    "custom AI software development",
    "SaaS AI solutions",
    "AI development services",
    "custom software for SaaS companies",
  ],
  aiSummary:
    "This decision-stage comparison scores eight AI software development companies for SaaS on production readiness, SaaS delivery fit, and custom AI implementation depth. Xorora rates strong across all three as a full-stack partner; other vendors specialize in CRM/legacy agents, RAG delivery, enterprise data strategy, startup prototyping, legacy embeds, compliance-aware design, or blockchain-adjacent builds.",
  companies: [
    "Xorora",
    "Master of Code Global",
    "eSparkBiz",
    "RTS Labs",
    "Markovate",
    "DevCom",
    "Kanerika",
    "SoluLab",
  ],
  faqs: [...BEST_AI_AGENT_SAAS_FAQS],
  toc: [
    { id: "who-this-is-for", label: "Who this is for" },
    { id: "three-criteria", label: "Three decision criteria" },
    { id: "decision-scorecard", label: "Decision scorecard" },
    { id: "xorora", label: "1. Xorora" },
    { id: "master-of-code-global", label: "2. Master of Code Global" },
    { id: "esparkbiz", label: "3. eSparkBiz" },
    { id: "rts-labs", label: "4. RTS Labs" },
    { id: "markovate", label: "5. Markovate" },
    { id: "devcom", label: "6. DevCom" },
    { id: "kanerika", label: "7. Kanerika" },
    { id: "solulab", label: "8. SoluLab" },
    { id: "questions-to-ask", label: "Questions before you sign" },
    { id: "faq", label: "FAQ" },
  ],
};

interface ScorecardRow {
  id: string;
  name: string;
  production: string;
  saasFit: string;
  customDepth: string;
}

interface CompanyProfile {
  id: string;
  rank: number;
  name: string;
  location: string;
  knownFor: string;
  suitedFor: string;
  scorecardRead: string;
  snapshot?: string;
  paragraphs: ReactNode[];
  consideration?: ReactNode;
  minProject?: string;
  href?: string;
  hrefLabel?: string;
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="font-semibold text-accent no-underline hover:text-tangerine-600"
    >
      {children}
    </Link>
  );
}

const CRITERIA = [
  {
    title: "1. Production readiness",
    body: "Has this company shipped AI agents that are currently running against real user data and real traffic, not a pilot that quietly stalled after the demo? Ask for uptime numbers, not just a portfolio.",
  },
  {
    title: "2. SaaS delivery fit",
    body: "Generic enterprise AI experience doesn't automatically translate to SaaS. Multi-tenancy, usage-based billing, product-led growth motion, and the expectation of shipping in weeks, not quarters, all shape how SaaS AI solutions actually need to be architected. A vendor whose entire portfolio is Fortune 500 modernization projects may not move at the speed your roadmap needs.",
  },
  {
    title: "3. Custom AI implementation depth",
    body: "Can the team build something genuinely tailored to your data model and workflows, or does the engagement quietly turn into a templated wrapper around someone else's API? True custom AI software development means the agent's logic, tool access, and guardrails are designed around your specific product, not a reusable shell with your logo on it.",
  },
];

const SCORECARD: ScorecardRow[] = [
  {
    id: "xorora",
    name: "Xorora",
    production: "Strong — live case studies with published uptime",
    saasFit: "Strong — built specifically for startup/mid-market SaaS speed",
    customDepth:
      "Strong — full-stack team builds agent, app, and data layer together",
  },
  {
    id: "master-of-code-global",
    name: "Master of Code Global",
    production: "Strong — 20+ years, 1,000+ delivered projects",
    saasFit: "Moderate — enterprise CRM focus more than SaaS-native",
    customDepth: "Strong — deep CRM/legacy integration work",
  },
  {
    id: "esparkbiz",
    name: "eSparkBiz",
    production: "Strong — CMMI Level 3, 1,000+ projects delivered",
    saasFit: "Moderate — broad industry focus, SaaS is one of several",
    customDepth: "Strong — genuine RAG/LLM engineering depth",
  },
  {
    id: "rts-labs",
    name: "RTS Labs",
    production: "Strong — enterprise-scale production deployments",
    saasFit: "Weak-to-moderate — built for large, complex organizations",
    customDepth: "Strong — data-strategy-first custom builds",
  },
  {
    id: "markovate",
    name: "Markovate",
    production: "Moderate — startup-focused, less enterprise-scale proof",
    saasFit: "Strong — explicitly built for startup/digital-native speed",
    customDepth: "Moderate — fast prototyping over deep customization",
  },
  {
    id: "devcom",
    name: "DevCom",
    production: "Strong — embedded in complex production systems",
    saasFit: "Weak-to-moderate — legacy enterprise systems focus",
    customDepth: "Strong — custom-built around each system's constraints",
  },
  {
    id: "kanerika",
    name: "Kanerika",
    production: "Moderate — compliance-heavy delivery track record",
    saasFit: "Weak-to-moderate — regulated-industry focus, not SaaS-native",
    customDepth: "Strong — compliance-aware custom design",
  },
  {
    id: "solulab",
    name: "SoluLab",
    production: "Strong — certified process maturity (ISO, CMMI, SOC 2)",
    saasFit: "Weak — niche focus, not general SaaS delivery",
    customDepth: "Strong — genuinely custom blockchain-integrated builds",
  },
];

const QUESTIONS = [
  {
    q: '"Show me a production deployment, not a demo."',
    a: "A working prototype and an agent handling real user data at scale are different problems. Ask about uptime, error handling, and what happens when the agent hits something it wasn't designed for.",
  },
  {
    q: '"How does your team think about multi-tenancy and usage-based architecture?"',
    a: "This single question filters out vendors whose SaaS experience is more theoretical than real.",
  },
  {
    q: '"Walk me through how the agent\'s logic would actually be built around our data model."',
    a: "A vague answer here usually means a templated integration, not genuine custom AI software development.",
  },
  {
    q: '"What\'s the actual engagement model?"',
    a: "Some companies only do fixed-scope project delivery; others offer staff augmentation for teams that want in-house capability alongside external expertise. Match the model to how your team actually wants to work.",
  },
  {
    q: '"What\'s your governance and evaluation process?"',
    a: "With most companies still lacking mature governance for autonomous agents, ask specifically how the team monitors agent decisions, sets permission boundaries, and handles failure gracefully.",
  },
];

const COMPANIES: CompanyProfile[] = [
  {
    id: "xorora",
    rank: 1,
    name: "Xorora",
    location: "United States",
    knownFor:
      "Full-stack AI agent systems built alongside the application layer",
    suitedFor:
      "SaaS product companies that want AI development services covering the agent and the application it lives inside, from one accountable team",
    scorecardRead:
      "Strong across production readiness, SaaS delivery fit, and custom AI implementation depth.",
    snapshot: "/assets/blog/companies/xorora-ai-agent.png",
    minProject: "$10,000+",
    href: ROUTES.aiAgentDevelopment,
    hrefLabel: "AI agent development services",
    paragraphs: [
      <>
        Xorora is a US-based AI development partner offering{" "}
        <strong className="font-semibold text-fg1">
          custom software for SaaS companies
        </strong>{" "}
        that need an agent built inside a real product, not bolted onto one. Its
        team builds the agent, the surrounding application, and the{" "}
        <TextLink href={ROUTES.mlDataScience}>data/ML layer</TextLink> together,
        which is the structural reason it scores strong across all three
        decision criteria rather than trading depth in one area for speed in
        another.
      </>,
      <>
        On production readiness: Xorora&apos;s relevant work includes a{" "}
        <TextLink href={ROUTES.caseStudy("real-time-compliance-intelligence")}>
          real-time compliance intelligence platform
        </TextLink>{" "}
        turning regulatory changes into live alerts, a{" "}
        <TextLink href={ROUTES.caseStudy("unified-ai-voice-operations")}>
          unified AI voice operations system
        </TextLink>{" "}
        serving four role-specific SaaS portals from one shared architecture,
        and{" "}
        <TextLink href={ROUTES.caseStudy("real-time-saas-event-monitoring")}>
          real-time event monitoring infrastructure
        </TextLink>{" "}
        built for instant, full-context alerting. Publicly cited results across
        this work include a 3.5x median speed-up compared to building the same
        system in-house and 99.9% uptime across deployed systems.
      </>,
      <>
        On SaaS delivery fit: a $10,000 minimum project size and{" "}
        <TextLink href={ROUTES.staffAugmentation}>
          staff augmentation
        </TextLink>{" "}
        options mean the engagement model scales down to a single scoped agent,
        not only a full platform commitment, which matters for a startup buyer
        who can&apos;t wait a full quarter for a first deployment.
      </>,
      <>
        On custom AI implementation depth: because{" "}
        <TextLink href={ROUTES.aiAgentDevelopment}>
          AI agent development
        </TextLink>{" "}
        sits inside a full-stack{" "}
        <TextLink href={ROUTES.engineering}>engineering practice</TextLink>{" "}
        rather than a standalone AI layer, the agent&apos;s design reflects your
        actual application and data model from day one, not a generic wrapper
        adapted after the fact.
      </>,
    ],
    consideration: (
      <>
        Xorora is newer than several other names on this list and doesn&apos;t
        yet have the multi-decade portfolio some larger firms can point to. What
        it offers instead is a genuinely full-stack team where the agent is
        built as part of the product, not a separate deliverable handed off
        afterward.
      </>
    ),
  },
  {
    id: "master-of-code-global",
    rank: 2,
    name: "Master of Code Global",
    location: "Global (20+ years)",
    knownFor: "Custom agents for customer engagement and sales enablement",
    suitedFor:
      "Enterprises needing an agent partner with deep CRM and legacy-system integration experience and a long public track record",
    scorecardRead:
      "Strong on production readiness and custom implementation depth; moderate on SaaS delivery fit, since its core strength leans enterprise CRM integration more than SaaS-native product speed.",
    snapshot: "/assets/blog/companies/master-of-code-global.png",
    paragraphs: [
      "Master of Code Global brings more than two decades of experience and over a thousand delivered AI projects to agent development focused on customer engagement and sales enablement. Its work centers on connecting agents into existing CRM and legacy infrastructure so they can act on real customer data rather than operate as a standalone bolt-on.",
    ],
  },
  {
    id: "esparkbiz",
    rank: 3,
    name: "eSparkBiz",
    location: "India",
    knownFor: "GenAI, RAG, and LLM-based agents across regulated industries",
    suitedFor:
      "Companies wanting certified process discipline alongside genuine RAG and LLM engineering depth",
    scorecardRead:
      "Strong on production readiness and implementation depth; SaaS is one vertical among several rather than the primary focus — worth confirming SaaS-specific references directly.",
    snapshot: "/assets/blog/companies/esparkbiz.png",
    paragraphs: [
      "eSparkBiz brings 15+ years of software delivery experience and CMMI Level 3 process certification to custom AI agent work built around generative AI, retrieval-augmented generation, and large language models. The firm has delivered over a thousand projects spanning healthcare, finance, retail, logistics, manufacturing, and SaaS.",
    ],
  },
  {
    id: "rts-labs",
    rank: 4,
    name: "RTS Labs",
    location: "USA",
    knownFor: "Enterprise data strategy plus production-scale agent deployment",
    suitedFor:
      "Larger organizations that need data architecture work alongside the agent itself, not just the agent in isolation",
    scorecardRead:
      "Strong on production readiness and custom depth; built primarily for large, complex organizations, so SaaS delivery fit needs direct confirmation for startup-speed engagements.",
    snapshot: "/assets/blog/companies/rts-labs.png",
    paragraphs: [
      "RTS Labs concentrates on enterprise-grade agent work, pairing data strategy consulting with LLM integration and production-scale deployment. That data-strategy-first approach suits organizations where the agent's usefulness depends heavily on the quality of underlying data infrastructure.",
    ],
  },
  {
    id: "markovate",
    rank: 5,
    name: "Markovate",
    location: "California, USA",
    knownFor: "Startup-friendly, fast agent prototyping and deployment",
    suitedFor:
      "Early-stage or fast-moving SaaS companies that want to validate an agent use case quickly without heavy enterprise process overhead",
    scorecardRead:
      "Strong SaaS delivery fit by design; production readiness and implementation depth lean toward fast prototyping rather than deep, multi-decade proof — worth weighing if your need is validation speed versus long-term system depth.",
    snapshot: "/assets/blog/companies/markovate.png",
    paragraphs: [
      "Markovate, based in California, focuses squarely on applied AI for startups and fast-growing digital companies, building agents meant to automate operational workflows and improve customer-facing systems without the overhead of a large enterprise engagement.",
    ],
  },
  {
    id: "devcom",
    rank: 6,
    name: "DevCom",
    location: "USA / Global",
    knownFor:
      "Agents embedded into complex, compliance-heavy enterprise systems",
    suitedFor:
      "Mid-market SaaS companies whose agent use case has to work around real legacy system constraints, not a clean-slate build",
    scorecardRead:
      "Strong on production readiness and custom depth; SaaS delivery fit is moderate at best, since the core practice is built around legacy enterprise constraints rather than SaaS product speed.",
    snapshot: "/assets/blog/companies/devcom.png",
    paragraphs: [
      "DevCom specializes in embedding custom agents directly into complex, often older enterprise systems, with a focus on reliable legacy integration and regulatory compliance — a useful profile for SaaS companies whose product sits on top of older internal infrastructure.",
    ],
  },
  {
    id: "kanerika",
    rank: 7,
    name: "Kanerika",
    location: "Texas, USA",
    knownFor: "AI and analytics with a cybersecurity and compliance focus",
    suitedFor:
      "Regulated-industry SaaS products where compliance-aware agent design is non-negotiable from day one",
    scorecardRead:
      "Strong on custom implementation depth for compliance-heavy use cases; SaaS delivery fit is weaker unless your product is itself in a regulated space.",
    snapshot: "/assets/blog/companies/kanerika.png",
    paragraphs: [
      "Kanerika, based in Texas, focuses on AI, analytics, and automation with a particular strength in building agents for tasks that must follow strict cybersecurity and compliance requirements.",
    ],
  },
  {
    id: "solulab",
    rank: 8,
    name: "SoluLab",
    location: "USA / Global",
    knownFor: "AI agents with blockchain and on-chain data reasoning",
    suitedFor:
      "FinTech or Web3-adjacent SaaS products whose agent use case overlaps with blockchain or on-chain data",
    scorecardRead:
      "Strong on production readiness and implementation depth for its niche; SaaS delivery fit is narrow — relevant mainly if your product overlaps with blockchain or on-chain data.",
    snapshot: "/assets/blog/companies/solulab.png",
    paragraphs: [
      "SoluLab pairs AI agent development with blockchain and on-chain data reasoning, and holds partner status with several major cloud and AI platforms alongside ISO and CMMI process certifications — a genuinely rare combination for teams working with tokenized assets or decentralized infrastructure.",
    ],
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function BestAiAgentSaasArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-10")}>
        <strong className="font-semibold text-fg1">Quick answer:</strong> If
        you&apos;re past the research phase and comparing actual vendors, the{" "}
        <strong className="font-semibold text-fg1">
          AI software development companies for SaaS
        </strong>{" "}
        worth shortlisting score well on three things, not one: production
        readiness (has this vendor actually shipped agents that survive real
        traffic, not demos), SaaS delivery fit (do they understand
        multi-tenancy, usage-based billing, and product-led growth, or just
        generic enterprise AI), and custom AI implementation depth (can they
        build a system tailored to your data and workflows, or are you getting a
        templated integration). Xorora, Master of Code Global, eSparkBiz, RTS
        Labs, Markovate, DevCom, Kanerika, and SoluLab are scored against all
        three below.
      </p>

      <h2 id="who-this-is-for" className={h2Class}>
        Who this comparison is for
      </h2>
      <p className={cn(bodyClass, "mb-10")}>
        This isn&apos;t an introduction to what AI agents are. It&apos;s built
        for SaaS product companies that have already decided they need an{" "}
        <strong className="font-semibold text-fg1">
          AI agent development
        </strong>{" "}
        partner, or a broader{" "}
        <strong className="font-semibold text-fg1">
          custom AI software development
        </strong>{" "}
        engagement, and are now comparing specific vendors before a contract
        gets signed. If you&apos;re a founder, head of product, or engineering
        lead evaluating{" "}
        <strong className="font-semibold text-fg1">
          AI development services
        </strong>{" "}
        for your roadmap, the three criteria below are the ones that actually
        separate a good hire from an expensive rebuild six months in.
      </p>

      <h2 id="three-criteria" className={h2Class}>
        The three criteria that actually matter at decision stage
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Most vendor comparisons list five or six soft criteria that all blur
        together. At the point you&apos;re actually choosing, three things
        predict outcome far more than anything else:
      </p>
      <div className="mb-10 flex flex-col gap-4">
        {CRITERIA.map((item) => (
          <div
            key={item.title}
            className="rounded-(--r-lg) border border-border bg-white px-5 py-5"
          >
            <h3 className="m-0 mb-2 font-sans font-semibold text-[17px] text-fg1">
              {item.title}
            </h3>
            <p className={cn(bodyClass, "text-[15.5px]")}>{item.body}</p>
          </div>
        ))}
      </div>

      <h2 id="decision-scorecard" className={h2Class}>
        Decision scorecard
      </h2>
      <div className="mb-5 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              {[
                "Company",
                "Production readiness",
                "SaaS delivery fit",
                "Custom AI implementation depth",
              ].map((col) => (
                <th
                  key={col}
                  className="px-4 py-3.5 font-sans font-semibold text-[12.5px] text-fg3"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SCORECARD.map((row, index) => (
              <tr
                key={row.id}
                className={cn(
                  "border-border border-t",
                  index % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <td className="px-4 py-3.5 font-sans font-semibold text-[14.5px] text-fg1">
                  <a
                    href={`#${row.id}`}
                    className="text-fg1 no-underline hover:text-xo-indigo"
                  >
                    {row.name}
                  </a>
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.production}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.saasFit}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.customDepth}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={cn(bodyClass, "mb-10")}>
        Use this table as a starting filter, not a final verdict. A
        &quot;moderate&quot; on SaaS delivery fit isn&apos;t disqualifying if
        your product has enterprise-style requirements; it just means ask harder
        questions before signing.
      </p>

      {COMPANIES.map((company) => (
        <CompanySection key={company.id} company={company} />
      ))}

      <h2 id="questions-to-ask" className={h2Class}>
        Questions to ask before you sign
      </h2>
      <div className="mb-10 flex flex-col gap-4">
        {QUESTIONS.map((item) => (
          <div
            key={item.q}
            className="rounded-(--r-lg) border border-border bg-white px-5 py-5"
          >
            <h3 className="m-0 mb-2 font-sans font-semibold text-[17px] text-fg1">
              {item.q}
            </h3>
            <p className={cn(bodyClass, "text-[15.5px]")}>{item.a}</p>
          </div>
        ))}
      </div>

      <h2 id="faq" className={h2Class}>
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4">
        {BEST_AI_AGENT_SAAS_FAQS.map((faq, index) => (
          <div
            key={faq.q}
            className="rounded-(--r-lg) border border-border bg-white px-5 py-5"
          >
            <h3 className="m-0 mb-2 font-sans font-semibold text-[17px] text-fg1">
              Q{index + 1}: {faq.q}
            </h3>
            <p className={cn(bodyClass, "text-[15.5px]")}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompanySection({ company }: { company: CompanyProfile }) {
  return (
    <section
      id={company.id}
      className="mt-12 scroll-mt-[110px] rounded-(--r-xl) border border-border bg-white p-[clamp(22px,3vw,36px)]"
    >
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.16em]">
            {String(company.rank).padStart(2, "0")}
          </p>
          <h2 className="m-0 font-bold font-sans text-[clamp(26px,3vw,34px)] text-fg1 tracking-[-0.02em]">
            {company.name}
          </h2>
        </div>
      </div>

      {company.snapshot ? (
        <figure className="relative z-0 mb-6 overflow-hidden rounded-(--r-lg) border border-border bg-slate-100">
          <Image
            src={company.snapshot}
            alt={`${company.name} homepage`}
            title={`${company.name} website homepage snapshot`}
            width={1200}
            height={675}
            sizes="(max-width: 1180px) 100vw, 760px"
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="sr-only">
            Homepage snapshot of {company.name}
          </figcaption>
        </figure>
      ) : null}

      <dl className="mb-6 grid gap-3 sm:grid-cols-2">
        <MetaItem label="Location" value={company.location} />
        <MetaItem label="Best known for" value={company.knownFor} />
        {company.minProject ? (
          <MetaItem label="Minimum project size" value={company.minProject} />
        ) : null}
        <MetaItem label="Best suited for" value={company.suitedFor} />
      </dl>

      {company.paragraphs.map((paragraph, index) => (
        <p key={index} className={cn(bodyClass, "mb-4")}>
          {paragraph}
        </p>
      ))}

      {company.href ? (
        <p className="mb-5">
          <Link
            href={company.href}
            className="inline-flex items-center gap-1.5 font-sans font-semibold text-[14.5px] text-accent no-underline hover:text-tangerine-600"
          >
            {company.hrefLabel ?? "Learn more"}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </p>
      ) : null}

      <div className="rounded-(--r-lg) border border-indigo-100 bg-indigo-50 px-5 py-4">
        <p className="mb-1.5 font-sans font-semibold text-[13px] text-xo-indigo">
          Scorecard read
        </p>
        <p className={cn(bodyClass, "text-[15px]")}>{company.scorecardRead}</p>
      </div>

      {company.consideration ? (
        <div className="mt-4 rounded-(--r-lg) border border-border bg-slate-50 px-5 py-4">
          <p className="mb-1.5 font-sans font-semibold text-[13px] text-fg3">
            Practical consideration
          </p>
          <p className={cn(bodyClass, "text-[15px]")}>{company.consideration}</p>
        </div>
      ) : null}

      <p className="mt-5 mb-5 font-sans text-[14px] text-fg3 leading-relaxed">
        {company.minProject ? `Minimum project: ${company.minProject}. ` : ""}
        Best suited for: {company.suitedFor}
      </p>
      <GetQuoteButton company={company.name} />
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-(--r-md) border border-border bg-slate-50 px-4 py-3">
      <dt className="mb-1 font-mono text-[10.5px] text-fg3 uppercase tracking-[0.12em]">
        {label}
      </dt>
      <dd className="m-0 font-sans font-semibold text-[14.5px] text-fg1">
        {value}
      </dd>
    </div>
  );
}
