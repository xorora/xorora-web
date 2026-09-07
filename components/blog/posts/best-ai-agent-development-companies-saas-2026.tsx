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
    q: "What does an AI agent development company actually build?",
    a: "An AI agent development company builds autonomous or semi-autonomous software systems that can plan multi-step actions, call tools and APIs, and adapt based on results — distinct from a single-prediction ML model or a scripted chatbot. For SaaS companies, this typically means in-product assistants that take real actions, or internal agents automating operations like support triage, compliance monitoring, or data reconciliation.",
  },
  {
    q: "How much does it cost to build an AI agent for a SaaS product?",
    a: "Cost depends heavily on scope: a single, well-defined agent handling one workflow costs meaningfully less than a multi-agent system integrated across several parts of a product. Get a written estimate against your specific use case rather than relying on a generic price range, since data pipeline work and system integrations — not just the agent itself — often account for a large share of total cost.",
  },
  {
    q: "What's the difference between an AI agent and a chatbot?",
    a: "A chatbot typically answers questions within a single conversational turn. An AI agent can plan multi-step tasks, use external tools and APIs, make decisions within defined boundaries, and take real action across connected systems — closer to a digital coworker than a Q&A interface.",
  },
  {
    q: "Why is SaaS a particularly strong fit for AI agents?",
    a: "SaaS companies face growing operational complexity (support volume, onboarding, data reconciliation) without wanting headcount to grow at the same rate. Agents that automate multi-step operational workflows let a SaaS company scale usage without scaling support and operations staff proportionally, which is a large part of why customer support and operations currently lead enterprise agent adoption.",
  },
  {
    q: "Should I hire an AI-only vendor or a full-stack development partner for agent work?",
    a: "It depends on your existing infrastructure. If you already have a mature application and data layer, a specialized AI-only vendor can plug in cleanly. If you're building the agent and the surrounding product simultaneously, a full-stack partner that owns both the agent and the application reduces integration risk and gives you a single point of accountability.",
  },
  {
    q: "Is Xorora a good choice for AI agent development?",
    a: "Xorora builds AI agents as part of a broader full-stack engineering practice, covering the agent logic, the surrounding application, and the underlying data/ML layer under one roof. It's a strong fit for SaaS companies that want agent development handled alongside real product engineering rather than as an isolated AI add-on. Projects start at $10,000, with pricing quoted directly against scope.",
  },
] as const;

export const BEST_AI_AGENT_SAAS_META: BlogArticleMeta = {
  slug: BEST_AI_AGENT_SAAS_SLUG,
  seoTitle: "Best AI Agent Development Companies for SaaS (2026)",
  seoDescription:
    "The best AI agent development companies for SaaS in 2026, compared on production track record, SaaS-specific integration experience, and delivery model.",
  keywords: [
    "best ai agent development companies for saas",
    "ai agent development company",
    "hire ai agent developers",
    "ai agent development for saas",
  ],
  aiSummary:
    "This 2026 shortlist compares eight AI agent development companies for SaaS buyers on production deployments, SaaS integration depth, and full-stack delivery — not demos. Xorora leads for full-stack agent systems built with the application layer; other specialists cover CRM/legacy agents, RAG in regulated industries, enterprise data strategy, startup prototyping, compliance-heavy embeds, cybersecurity-aware design, and blockchain-adjacent agents.",
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
    { id: "what-is-ai-agent-company", label: "What is an AI agent company?" },
    { id: "why-saas-now", label: "Why SaaS is investing now" },
    { id: "how-evaluated", label: "How we evaluated" },
    { id: "quick-comparison", label: "Quick comparison" },
    { id: "xorora", label: "1. Xorora" },
    { id: "master-of-code-global", label: "2. Master of Code Global" },
    { id: "esparkbiz", label: "3. eSparkBiz" },
    { id: "rts-labs", label: "4. RTS Labs" },
    { id: "markovate", label: "5. Markovate" },
    { id: "devcom", label: "6. DevCom" },
    { id: "kanerika", label: "7. Kanerika" },
    { id: "solulab", label: "8. SoluLab" },
    { id: "how-to-choose", label: "How to choose" },
    { id: "faq", label: "FAQ" },
  ],
};

interface CompanyProfile {
  id: string;
  rank: number;
  name: string;
  location: string;
  knownFor: string;
  suitedFor: string;
  snapshot?: string;
  paragraphs: ReactNode[];
  standouts?: string[];
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

const EVALUATION = [
  {
    title: "Production track record",
    body: "Live agent deployments with measurable outcomes, not demo environments or pilot-only case studies.",
  },
  {
    title: "SaaS-specific integration experience",
    body: "Real work connecting agents to CRMs, multi-tenant architectures, billing systems, and existing product infrastructure.",
  },
  {
    title: "Full-stack capability",
    body: "Whether the company can build the surrounding application and data layer, or only the AI/agent component in isolation.",
  },
  {
    title: "Governance and reliability",
    body: "Evidence of evaluation gates, monitoring, and production-grade safety practices, not just a working prototype.",
  },
  {
    title: "Delivery model fit",
    body: "Whether the engagement structure (fixed-scope, staff augmentation, embedded team) matches how your organization actually wants to work.",
  },
];

const CHOOSE_CRITERIA = [
  {
    title: "Does the team own the full stack, or only the agent layer?",
    body: "An agent is only as reliable as the data pipeline and application logic around it. Ask directly whether the team builds that surrounding infrastructure or expects you to have it already in place.",
  },
  {
    title: "Can they show a production deployment, not a demo?",
    body: "A working prototype and an agent handling real user data at scale are different problems. Ask about uptime, error handling, and what happens when the agent encounters something it wasn't designed for.",
  },
  {
    title: "What's their governance and evaluation process?",
    body: "With most companies still lacking mature governance for autonomous agents, ask specifically how the team monitors agent decisions, sets permission boundaries, and handles failure gracefully.",
  },
  {
    title: "Do they understand SaaS-specific architecture?",
    body: "Multi-tenancy, usage-based billing, and product-led growth patterns all shape how an agent should be built. Generic enterprise AI experience doesn't always translate directly.",
  },
  {
    title: "What's the actual engagement model?",
    body: "Some companies only do fixed-scope project delivery; others offer staff augmentation for teams that want to build in-house capability alongside external expertise. Match the model to how your team actually wants to work.",
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
      "SaaS companies wanting agent development inside a broader product engineering partner",
    snapshot: "/assets/blog/companies/xorora-ai-agent.png",
    minProject: "$10,000+",
    href: ROUTES.aiAgentDevelopment,
    hrefLabel: "AI agent development services",
    paragraphs: [
      <>
        Xorora is a US-based AI development partner building{" "}
        <TextLink href={ROUTES.aiAgentDevelopment}>
          AI agent systems
        </TextLink>{" "}
        as part of a broader full-stack engineering practice, not as an isolated
        AI layer bolted onto someone else&apos;s product. That distinction
        matters for SaaS specifically: an agent is only as good as the data
        pipeline, API layer, and application logic feeding it, and a team that
        owns all three tends to ship agents that actually hold up in production
        rather than impressive demos that stall at the integration stage.
      </>,
      <>
        Xorora&apos;s relevant work includes a{" "}
        <TextLink href={ROUTES.caseStudy("real-time-compliance-intelligence")}>
          real-time compliance intelligence platform
        </TextLink>{" "}
        that turns regulatory changes into live, actionable alerts, a{" "}
        <TextLink href={ROUTES.caseStudy("unified-ai-voice-operations")}>
          unified AI voice operations system
        </TextLink>{" "}
        serving four role-specific SaaS portals from one shared architecture,
        and{" "}
        <TextLink href={ROUTES.caseStudy("real-time-saas-event-monitoring")}>
          real-time event monitoring infrastructure
        </TextLink>{" "}
        built for instant, full-context alerting — exactly the kind of
        multi-step, tool-using, system-integrated work that separates a real
        agent from a scripted chatbot. Publicly cited results across this work
        include a 3.5x median speed-up compared to building the same system
        in-house and 99.9% uptime across deployed systems.
      </>,
    ],
    standouts: [
      "Builds the agent, the surrounding application, and the data/ML layer under one roof, removing the coordination overhead of a separate AI vendor and product team",
      "Workflow automation experience directly applicable to internal SaaS operations (support triage, compliance monitoring, event-driven alerting)",
      "A $10,000 minimum project size makes it realistic to start with a single, well-scoped agent rather than only a full platform engagement",
      "Teams that already have engineers in place can add agent-specific capacity through staff augmentation instead of a full handoff",
    ],
    consideration: (
      <>
        Xorora is newer than several other names on this list and doesn&apos;t
        yet have the multi-decade portfolio some larger firms can point to. What
        it offers instead is a genuinely full-stack team where the agent
        isn&apos;t the entire deliverable — it&apos;s one part of a product
        that&apos;s built to actually run in production. Teams that already have
        engineers in place can also look at{" "}
        <TextLink href={ROUTES.staffAugmentation}>staff augmentation</TextLink>{" "}
        or{" "}
        <TextLink href={ROUTES.mlDataScience}>ML &amp; data science</TextLink>{" "}
        support alongside agent work, including{" "}
        <TextLink href={ROUTES.workflowAutomation}>
          workflow automation
        </TextLink>
        .
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
      "Enterprises needing deep CRM and legacy-system integration",
    snapshot: "/assets/blog/companies/master-of-code-global.png",
    paragraphs: [
      "Master of Code Global brings more than two decades of experience and over a thousand delivered AI projects to agent development focused on customer engagement and sales enablement. Its work centers on connecting agents into existing CRM and legacy infrastructure so they can act on real customer data rather than operate as a standalone bolt-on.",
    ],
    consideration:
      "Strong public track record and CRM depth make this a natural shortlist pick for enterprise buyers; lighter SaaS product teams may find the engagement model heavier than they need for a first agent.",
  },
  {
    id: "esparkbiz",
    rank: 3,
    name: "eSparkBiz",
    location: "India",
    knownFor: "GenAI, RAG, and LLM-based agents across regulated industries",
    suitedFor:
      "Companies needing CMMI Level 3-certified delivery discipline",
    snapshot: "/assets/blog/companies/esparkbiz.png",
    paragraphs: [
      "eSparkBiz brings 15+ years of software delivery experience and CMMI Level 3 process certification to custom AI agent work built around generative AI, retrieval-augmented generation, and large language models. The firm has delivered over a thousand projects spanning healthcare, finance, retail, logistics, manufacturing, and SaaS.",
    ],
    consideration:
      "Certified process discipline plus RAG/LLM depth is a useful combination for regulated industries; confirm SaaS multi-tenant and product-integration experience against your specific architecture.",
  },
  {
    id: "rts-labs",
    rank: 4,
    name: "RTS Labs",
    location: "USA",
    knownFor: "Enterprise data strategy plus production-scale agent deployment",
    suitedFor:
      "Larger organizations with complex existing data infrastructure",
    snapshot: "/assets/blog/companies/rts-labs.png",
    paragraphs: [
      "RTS Labs concentrates on enterprise-grade agent work, pairing data strategy consulting with LLM integration and production-scale deployment. That data-strategy-first approach suits organizations where the agent's usefulness depends heavily on the quality of underlying data infrastructure.",
    ],
    consideration:
      "Best when the data layer is the bottleneck. If you already have clean pipelines and just need agent logic shipped fast, a leaner product-engineering partner may be a tighter fit.",
  },
  {
    id: "markovate",
    rank: 5,
    name: "Markovate",
    location: "California, USA",
    knownFor: "Startup-friendly, fast agent prototyping and deployment",
    suitedFor:
      "Early-stage SaaS validating an agent use case quickly",
    snapshot: "/assets/blog/companies/markovate.png",
    paragraphs: [
      "Markovate, based in California, focuses squarely on applied AI for startups and fast-growing digital companies, building agents meant to automate operational workflows and improve customer-facing systems without the overhead of a large enterprise engagement.",
    ],
    consideration:
      "A strong option for early validation. For agents that must sit inside a complex multi-tenant product long-term, confirm who owns the surrounding application and data work after the prototype.",
  },
  {
    id: "devcom",
    rank: 6,
    name: "DevCom",
    location: "USA / Global",
    knownFor:
      "Agents embedded into complex, compliance-heavy enterprise systems",
    suitedFor:
      "Mid-market enterprises with legacy system constraints",
    snapshot: "/assets/blog/companies/devcom.png",
    paragraphs: [
      "DevCom specializes in embedding custom agents directly into complex, often older enterprise systems, with a focus on reliable legacy integration and regulatory compliance — a useful profile for SaaS companies whose product sits on top of older internal infrastructure.",
    ],
    consideration:
      "Legacy and compliance depth matter most when the agent has to work around real constraints. Clean-slate SaaS products may not need that specialization.",
  },
  {
    id: "kanerika",
    rank: 7,
    name: "Kanerika",
    location: "Texas, USA",
    knownFor: "AI and analytics with a cybersecurity and compliance focus",
    suitedFor:
      "Regulated SaaS needing strict compliance-aware agent design",
    snapshot: "/assets/blog/companies/kanerika.png",
    paragraphs: [
      "Kanerika, based in Texas, focuses on AI, analytics, and automation with a particular strength in building agents for tasks that must follow strict cybersecurity and compliance requirements.",
    ],
    consideration:
      "Prioritize when compliance-aware design is non-negotiable from day one. Ask for concrete examples of permission boundaries and auditability in production agents.",
  },
  {
    id: "solulab",
    rank: 8,
    name: "SoluLab",
    location: "USA / Global",
    knownFor: "AI agents with blockchain and on-chain data reasoning",
    suitedFor: "FinTech or Web3-adjacent SaaS products",
    snapshot: "/assets/blog/companies/solulab.png",
    paragraphs: [
      "SoluLab pairs AI agent development with blockchain and on-chain data reasoning, and holds partner status with several major cloud and AI platforms alongside ISO and CMMI process certifications — a genuinely rare combination for teams working with tokenized assets or decentralized infrastructure.",
    ],
    consideration:
      "Most valuable when your agent use case overlaps with blockchain or on-chain data. Pure SaaS ops/support agents may be better served by a generalist full-stack partner.",
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function BestAiAgentSaasArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-10")}>
        <strong className="font-semibold text-fg1">Quick answer:</strong> The
        best AI agent development companies for SaaS in 2026 combine three
        things most vendors only have one or two of: real production deployments
        (not demos), deep integration experience with SaaS-native systems like
        CRMs and multi-tenant architectures, and in-house capability across the
        full stack, not just the AI layer. Xorora, Master of Code Global,
        eSparkBiz, RTS Labs, Markovate, DevCom, Kanerika, and SoluLab are covered
        below, each with a different specialty worth matching to your specific
        use case.
      </p>

      <h2 id="what-is-ai-agent-company" className={h2Class}>
        What is an AI agent development company?
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        An{" "}
        <strong className="font-semibold text-fg1">
          AI agent development company
        </strong>{" "}
        designs, builds, and deploys autonomous or semi-autonomous software
        agents that execute multi-step business workflows, make decisions within
        defined boundaries, and take action across connected systems — without
        requiring continuous human input for every step. Unlike a traditional
        chatbot or a single-prediction ML model, an AI agent can plan, use
        tools, call APIs, and adapt its next action based on what happened in
        the previous step.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        For a SaaS company specifically, that usually means agents that sit
        inside the product itself (an in-app assistant that takes real actions,
        not just answers questions), or agents that automate internal operations
        (support triage, lead qualification, compliance monitoring, data
        reconciliation) that would otherwise require a growing headcount to keep
        up with a growing user base.
      </p>

      <h2 id="why-saas-now" className={h2Class}>
        Why SaaS companies are investing in AI agents right now
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        The shift isn&apos;t hype. As of early 2026, roughly 72% of enterprises
        report already using or piloting AI agents in production, with customer
        support and internal operations the two leading use cases. Separately,
        close to 40% of enterprise applications are projected to ship with
        embedded AI agents this year, and about 79% of companies report some
        form of agent adoption already underway somewhere in the organization.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        The business case holds up under scrutiny, too. Tracking of live AI
        automation projects puts roughly 78% at delivering moderate to high
        measurable value, with outright failure rare, and separate modernization
        research points to build-cycle acceleration in the 40–50% range once
        agentic workflows are implemented properly. For SaaS companies
        specifically, operational cost reduction is consistently the most-cited
        driver behind AI investment, ahead of customer experience gains and
        competitive pressure.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        The catch: execution quality varies enormously between vendors. Recent
        industry research puts the share of companies with a genuinely mature
        governance model for autonomous AI agents at around one in five, which
        is exactly why the choice of development partner matters more here than
        in most software categories — a poorly governed agent making real
        decisions inside your product is a materially different risk than a
        poorly built web page.
      </p>

      <h2 id="how-evaluated" className={h2Class}>
        How we evaluated these companies
      </h2>
      <div className="mb-10 flex flex-col gap-4">
        {EVALUATION.map((item) => (
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

      <h2 id="quick-comparison" className={h2Class}>
        Quick comparison
      </h2>
      <div className="mb-10 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              {[
                "Rank",
                "Company",
                "Headquarters",
                "Best known for",
                "Best suited for",
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
            {COMPANIES.map((company, index) => (
              <tr
                key={company.id}
                className={cn(
                  "border-border border-t",
                  index % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <td className="px-4 py-3.5 font-mono text-[13px] text-fg3">
                  {company.rank}
                </td>
                <td className="px-4 py-3.5 font-sans font-semibold text-[14.5px] text-fg1">
                  <a
                    href={`#${company.id}`}
                    className="text-fg1 no-underline hover:text-xo-indigo"
                  >
                    {company.name}
                  </a>
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {company.location}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {company.knownFor}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {company.suitedFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {COMPANIES.map((company) => (
        <CompanySection key={company.id} company={company} />
      ))}

      <h2 id="how-to-choose" className={h2Class}>
        How to choose the right AI agent development partner for your SaaS
      </h2>
      <div className="mb-10 flex flex-col gap-4">
        {CHOOSE_CRITERIA.map((item) => (
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
      <p className={cn(bodyClass, "mb-10")}>
        If you&apos;re scoping{" "}
        <strong className="font-semibold text-fg1">
          AI agent development for SaaS
        </strong>{" "}
        and want a straight answer on fit, Xorora&apos;s{" "}
        <TextLink href={ROUTES.aiAgentDevelopment}>
          AI agent development team
        </TextLink>{" "}
        can walk through your requirements and provide a written estimate —
        especially useful when you need to{" "}
        <strong className="font-semibold text-fg1">
          hire AI agent developers
        </strong>{" "}
        who also own the product and data layer around the agent.
      </p>

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

      {company.standouts?.length ? (
        <>
          <h3 className="mt-6 mb-3 font-sans font-semibold text-[17px] text-fg1">
            Why it stands out for SaaS
          </h3>
          <ul className="mb-6 list-disc space-y-2 pl-5 font-sans text-[15.5px] text-fg2 leading-relaxed">
            {company.standouts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}

      {company.consideration ? (
        <div className="rounded-(--r-lg) border border-indigo-100 bg-indigo-50 px-5 py-4">
          <p className="mb-1.5 font-sans font-semibold text-[13px] text-xo-indigo">
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
