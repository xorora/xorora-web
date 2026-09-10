import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const BEST_AI_AGENT_COPILOTS_SLUG =
  "best-ai-agent-services-agency-copilots-2026";

export const BEST_AI_AGENT_COPILOTS_FAQS = [
  {
    q: "What are AI agent development services for agencies?",
    a: "AI agent development services help agencies build or launch client-facing AI copilots, automation systems, or chatbots delivered under the agency's own brand — either through a white-label platform subscription or a custom-built system tailored to the agency's specific workflows and clients.",
  },
  {
    q: "What's the difference between a white-label AI platform and custom AI development?",
    a: "A white-label platform is faster and cheaper to launch, letting an agency rebrand an existing product under its own name. Custom AI development takes longer and costs more upfront but produces a system built specifically around an agency's workflows and each client's data — something a shared platform, used by many competing agencies, can't fully replicate.",
  },
  {
    q: "Can client-facing AI agents actually handle business process automation, or just answer questions?",
    a: "It depends on the provider. Simpler chatbot-style tools mostly answer questions from a knowledge base. Genuine AI agents — the kind built by full-lifecycle development partners — can take multi-step actions across connected systems: updating a CRM record, triggering a workflow, escalating to a human when appropriate — which is a meaningfully different and more valuable category of business process automation.",
  },
  {
    q: "How much does it cost to launch an AI agent copilot for agency clients?",
    a: "White-label platforms typically run from roughly $29 to several hundred dollars a month per plan tier, scaling with usage and client volume. Custom development costs more upfront, generally starting in the five-figure range, but produces a differentiated system rather than a shared platform every competing agency can also license.",
  },
  {
    q: "Should my agency build a custom copilot or resell a white-label platform?",
    a: "It depends on how differentiated your offering needs to be and how many clients you're serving. A white-label platform gets you selling faster with lower upfront cost, but every agency using the same platform offers a functionally similar product. A custom build costs more and takes longer but produces something competitors using the same off-the-shelf tool can't match.",
  },
  {
    q: "Is Xorora a good choice for AI agent development services?",
    a: "Xorora builds AI agents, the client-facing interface, and the underlying workflow and data layer together as custom software, designed to run under an agency's own brand from the start rather than as a retrofitted white-label option. It's a strong fit for agencies that want a genuinely differentiated client-facing copilot rather than a shared platform. Projects start at $10,000, with pricing quoted directly against scope.",
  },
] as const;

export const BEST_AI_AGENT_COPILOTS_META: BlogArticleMeta = {
  slug: BEST_AI_AGENT_COPILOTS_SLUG,
  seoTitle: "Best AI Agent Services for Agency Copilots (2026)",
  seoDescription:
    "Compare AI agent development services for agency copilots on white-label readiness, client-facing reliability, and delivery/customization strength.",
  keywords: [
    "AI agent development services",
    "AI automation copilots",
    "client-facing AI agents",
    "agency automation solutions",
    "custom AI development",
    "business process automation",
  ],
  aiSummary:
    "This 2026 guide compares eight AI agent providers for agency copilots across white-label platforms (Stammer.ai, Voiceflow, Botpress, CustomGPT.ai) and custom-build partners (Xorora, LeewayHertz, Entrans, JPLoft), scored on white-label readiness, client-facing reliability, and delivery/customization strength.",
  companies: [
    "Xorora",
    "Stammer.ai",
    "Voiceflow",
    "Botpress",
    "CustomGPT.ai",
    "LeewayHertz",
    "Entrans",
    "JPLoft",
  ],
  faqs: [...BEST_AI_AGENT_COPILOTS_FAQS],
  toc: [
    { id: "who-this-is-for", label: "Who this is for" },
    { id: "three-criteria", label: "Three decision criteria" },
    { id: "decision-scorecard", label: "Decision scorecard" },
    { id: "xorora", label: "1. Xorora" },
    { id: "stammer-ai", label: "2. Stammer.ai" },
    { id: "voiceflow", label: "3. Voiceflow" },
    { id: "botpress", label: "4. Botpress" },
    { id: "customgpt-ai", label: "5. CustomGPT.ai" },
    { id: "leewayhertz", label: "6. LeewayHertz" },
    { id: "entrans", label: "7. Entrans" },
    { id: "jploft", label: "8. JPLoft" },
    { id: "questions-to-ask", label: "Questions before you sign" },
    { id: "faq", label: "FAQ" },
  ],
};

interface ScorecardRow {
  id: string;
  name: string;
  whiteLabel: string;
  reliability: string;
  customization: string;
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
    title: "1. White-label readiness",
    body: 'Can the client-facing experience genuinely run under your agency\'s own brand, domain, and dashboard, with no trace of the underlying vendor — or does "white-label" really mean a logo swap on someone else\'s product?',
  },
  {
    title: "2. Client-facing reliability",
    body: "Is this a genuine AI agent that can retrieve real knowledge, take multi-step actions, and hold up under real customer interactions, or a simpler scripted chatbot wearing agentic marketing language?",
  },
  {
    title: "3. Delivery and customization strength",
    body: "How much can actually be tailored to a specific client's workflow, data, and brand voice, versus configured within a fixed template? This is where the platform-versus-custom-build decision matters most.",
  },
];

const SCORECARD: ScorecardRow[] = [
  {
    id: "xorora",
    name: "Xorora",
    whiteLabel: "Strong — built agency-first, no vendor trace by design",
    reliability:
      "Strong — production agent/automation systems with published uptime",
    customization:
      "Strong — fully custom, built around each client's actual workflow",
  },
  {
    id: "stammer-ai",
    name: "Stammer.ai",
    whiteLabel:
      "Strong — market leader for agency resale, fully brandable dashboard",
    reliability: "Moderate — chat and voice agents, solid but templated",
    customization: "Moderate — fast to launch, less deep customization",
  },
  {
    id: "voiceflow",
    name: "Voiceflow",
    whiteLabel: "Moderate — strong branding options, less agency-packaged",
    reliability: "Strong — visual builder supports complex conversation flows",
    customization:
      "Strong — deep API integration for teams with technical capacity",
  },
  {
    id: "botpress",
    name: "Botpress",
    whiteLabel: "Moderate — open-source flexibility, more setup required",
    reliability: "Strong — built-in NLU and multi-channel deployment",
    customization: "Strong — open-source depth for teams willing to build",
  },
  {
    id: "customgpt-ai",
    name: "CustomGPT.ai",
    whiteLabel: "Strong — isolated per-client agents, custom domains",
    reliability: "Moderate — strong for knowledge-base/RAG use cases specifically",
    customization: "Moderate — strong at what it does, narrower in scope",
  },
  {
    id: "leewayhertz",
    name: "LeewayHertz",
    whiteLabel: "Weak-to-moderate — enterprise consultancy, not agency-packaged",
    reliability: "Strong — deep RAG and enterprise-grade copilot engineering",
    customization: "Strong — genuinely custom, built via their ZBrain platform",
  },
  {
    id: "entrans",
    name: "Entrans",
    whiteLabel: "Weak-to-moderate — enterprise-first delivery model",
    reliability: "Strong — full agentic lifecycle, enterprise integration depth",
    customization:
      "Strong — custom copilot development across the full lifecycle",
  },
  {
    id: "jploft",
    name: "JPLoft",
    whiteLabel: "Weak-to-moderate — project-based delivery, not resale-packaged",
    reliability:
      "Strong — copilots tailored across industries with real integrations",
    customization:
      "Strong — custom builds integrated into CRM/ERP/HRMS systems",
  },
];

const QUESTIONS = [
  {
    q: '"Will my clients ever see your brand anywhere in this experience?"',
    a: "Get a direct answer, including error messages, email footers, and API responses — not just the primary dashboard.",
  },
  {
    q: '"Can I see a client-facing agent handling a real, messy conversation, not the happy-path demo?"',
    a: "Reliability under edge cases is what actually determines whether a copilot helps or embarrasses your agency in front of a client.",
  },
  {
    q: '"How much can actually be customized per client, and what does that cost?"',
    a: 'Get specifics on data sources, brand voice, and workflow logic, not just "yes, it\'s customizable."',
  },
  {
    q: '"What\'s the real path from platform subscription to fully custom build, if I outgrow this?"',
    a: "Agencies scaling past a handful of clients often need to know whether a platform can grow with them or whether a custom rebuild is inevitable.",
  },
  {
    q: '"What\'s the engagement and pricing model?"',
    a: "Platforms typically price per seat or per agent; custom development partners typically price by scope, and some offer staff augmentation for agencies building in-house capability alongside external delivery.",
  },
];

const COMPANIES: CompanyProfile[] = [
  {
    id: "xorora",
    rank: 1,
    name: "Xorora",
    location: "United States",
    knownFor: "Agency-first custom AI agents under your brand",
    suitedFor:
      "Agencies that want client-facing AI agents built as real custom software under their own brand, not a shared platform every competitor can also license",
    scorecardRead:
      "Strong across white-label readiness, client-facing reliability, and delivery/customization strength.",
    snapshot: "/assets/blog/companies/xorora-agency-copilots.png",
    minProject: "$10,000+",
    href: ROUTES.aiAgentDevelopment,
    hrefLabel: "AI agent development services",
    paragraphs: [
      <>
        Xorora is a US-based AI development partner offering{" "}
        <strong className="font-semibold text-fg1">
          AI agent development services
        </strong>{" "}
        built specifically to run under an agency&apos;s own brand from day one,
        not a platform retrofitted with white-label options. Its{" "}
        <TextLink href={ROUTES.aiAgentDevelopment}>
          AI agent development
        </TextLink>{" "}
        work is built agency-first: the agent, the client-facing interface, and
        the underlying data and workflow layer are architected together around
        your specific delivery model, not configured inside someone else&apos;s
        fixed product.
      </>,
      <>
        On client-facing reliability: relevant work includes{" "}
        <TextLink href={ROUTES.caseStudy("real-time-saas-event-monitoring")}>
          real-time event monitoring infrastructure
        </TextLink>{" "}
        built for instant, full-context alerting, and a{" "}
        <TextLink href={ROUTES.caseStudy("unified-ai-voice-operations")}>
          unified AI voice operations system
        </TextLink>{" "}
        serving four role-specific portals from one shared architecture — the
        same underlying discipline that makes a client-facing copilot
        trustworthy under real usage rather than just in a demo.
      </>,
      <>
        On delivery and customization strength: because{" "}
        <TextLink href={ROUTES.workflowAutomation}>
          workflow automation
        </TextLink>{" "}
        and{" "}
        <TextLink href={ROUTES.customAppDevelopment}>
          custom application development
        </TextLink>{" "}
        sit under the same roof as the agent itself, an agency gets a copilot
        genuinely built around each client&apos;s actual processes and brand
        voice, not a shared template with swapped colors. Publicly cited results
        across Xorora&apos;s{" "}
        <TextLink href={ROUTES.engineering}>engineering</TextLink> work include
        a 3.5x median speed-up compared to building the same system in-house and
        99.9% uptime across deployed systems.
      </>,
    ],
    consideration: (
      <>
        Xorora doesn&apos;t offer a self-serve platform the way Stammer.ai or
        Voiceflow do, so launch takes longer than signing up for a subscription.
        What an agency gets in exchange is a genuinely differentiated, fully
        custom system competitors can&apos;t simply subscribe to as well. Teams
        building internal capacity alongside delivery can also look at{" "}
        <TextLink href={ROUTES.staffAugmentation}>staff augmentation</TextLink>.
      </>
    ),
  },
  {
    id: "stammer-ai",
    rank: 2,
    name: "Stammer.ai",
    location: "White-label platform",
    knownFor: "Agency-resale market leader for branded AI agents",
    suitedFor:
      "Agencies wanting the fastest path to reselling AI agents under their own brand without custom development",
    scorecardRead:
      "Strong white-label readiness by design; reliability and customization are solid but lean templated — faster to launch than to differentiate.",
    snapshot: "/assets/blog/companies/stammer-ai.png",
    paragraphs: [
      "Stammer.ai is widely regarded as the agency-resale market leader, built around one explicit use case: agencies selling AI agents where clients never see the underlying platform, only the agency's own brand. It bundles chat and voice agents with a brandable dashboard and a marketplace of pre-built agent templates.",
    ],
  },
  {
    id: "voiceflow",
    rank: 3,
    name: "Voiceflow",
    location: "Platform / visual builder",
    knownFor: "Professional-grade visual conversation flow builder",
    suitedFor:
      "Agencies with in-house technical capacity serving mid-to-enterprise clients who need complex conversational logic",
    scorecardRead:
      "Strong on reliability and customization for technically capable teams; white-label packaging is less agency-specific than Stammer.ai's explicit resale focus.",
    snapshot: "/assets/blog/companies/voiceflow.png",
    paragraphs: [
      "Voiceflow positions itself as the professional-grade builder in this category, with a visual drag-and-drop canvas for complex conversation flows and deep API integration options for teams with real technical capacity.",
    ],
  },
  {
    id: "botpress",
    rank: 4,
    name: "Botpress",
    location: "Open-source + enterprise",
    knownFor: "Open-source agent platform with multi-channel deployment",
    suitedFor:
      "Agencies with development resources who want open-source control over the underlying agent architecture",
    scorecardRead:
      "Strong on reliability and customization depth for teams willing to build; white-label packaging requires more setup than a turnkey resale platform.",
    snapshot: "/assets/blog/companies/botpress.png",
    paragraphs: [
      "Botpress brings open-source flexibility with enterprise features layered on top, including built-in natural language understanding and multi-channel deployment, backed by a strong developer community.",
    ],
  },
  {
    id: "customgpt-ai",
    rank: 5,
    name: "CustomGPT.ai",
    location: "RAG / knowledge platform",
    knownFor: "Isolated per-client knowledge-base RAG assistants",
    suitedFor:
      "Agencies whose primary copilot use case is knowledge search or document-grounded client support",
    scorecardRead:
      "Strong white-label readiness with genuinely isolated per-client agents; scope is narrower — built specifically around knowledge-base and document-grounded use cases rather than broader business process automation.",
    snapshot: "/assets/blog/companies/customgpt-ai.png",
    paragraphs: [
      "CustomGPT.ai focuses on knowledge-based RAG assistants, letting agencies deploy isolated, separately branded agents per client — each with its own custom domain and data boundary — handling ingestion, retrieval, and citations behind the scenes.",
    ],
  },
  {
    id: "leewayhertz",
    rank: 6,
    name: "LeewayHertz",
    location: "San Francisco, USA",
    knownFor: "Enterprise RAG copilots via the ZBrain platform",
    suitedFor:
      "Agencies serving large enterprise clients that need deep, secure RAG-based copilot engineering",
    scorecardRead:
      "Strong on reliability and customization for enterprise-grade copilot work; white-label packaging is secondary to its consulting-led, enterprise-first delivery model.",
    snapshot: "/assets/blog/companies/leewayhertz-copilots.png",
    paragraphs: [
      "LeewayHertz is a full-stack enterprise AI partner known for its ZBrain generative AI platform, building custom, enterprise-grade copilots with deep RAG capability so agents can securely access and reason over a company's private data.",
    ],
  },
  {
    id: "entrans",
    rank: 7,
    name: "Entrans",
    location: "Enterprise agentic delivery",
    knownFor: "Full-lifecycle agentic copilots via Thunai",
    suitedFor:
      "Agencies or consultancies building deep, agentic copilots for enterprise clients rather than a repeatable resold product",
    scorecardRead:
      "Strong on reliability given full-lifecycle agentic engineering; white-label readiness is weaker, reflecting an enterprise-delivery orientation rather than an agency-resale product.",
    snapshot: "/assets/blog/companies/entrans.png",
    paragraphs: [
      "Entrans combines agentic AI, enterprise system integration, and full-lifecycle copilot development through its Thunai platform, covering everything from data engineering to deployed, action-taking agents.",
    ],
  },
  {
    id: "jploft",
    rank: 8,
    name: "JPLoft",
    location: "Project-based custom builds",
    knownFor: "Industry copilots integrated into ERP/CRM/HRMS",
    suitedFor:
      "Agencies whose clients need a copilot deeply integrated into existing enterprise systems, not a standalone chat widget",
    scorecardRead:
      "Strong on reliability and customization given deep system-integration work; white-label packaging is project-based rather than a resale-ready product.",
    snapshot: "/assets/blog/companies/jploft.png",
    paragraphs: [
      "JPLoft builds secure AI copilots tailored across healthcare, fintech, logistics, retail, manufacturing, education, and SaaS, with integration into ERP, CRM, and HRMS systems as a core part of delivery.",
    ],
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function BestAiAgentCopilotsArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-10")}>
        <strong className="font-semibold text-fg1">Quick answer:</strong>{" "}
        Agencies choosing{" "}
        <strong className="font-semibold text-fg1">
          AI agent development services
        </strong>{" "}
        for a client-facing copilot are really choosing between two different
        paths: a white-label platform (fast to launch, limited customization) or
        a custom development partner (slower to launch, built around your exact
        workflow and clients). Stammer.ai, Voiceflow, Botpress, and CustomGPT.ai
        lead the platform route; LeewayHertz, Entrans, JPLoft, and Xorora lead
        the custom-build route. Which is right depends on how differentiated
        your agency&apos;s offering needs to be — and this guide scores all
        eight on white-label readiness, client-facing reliability, and
        delivery/customization strength.
      </p>

      <h2 id="who-this-is-for" className={h2Class}>
        Who this comparison is for
      </h2>
      <p className={cn(bodyClass, "mb-10")}>
        This is written for digital agencies and consultancies evaluating
        whether to build, license, or resell{" "}
        <strong className="font-semibold text-fg1">
          AI automation copilots
        </strong>{" "}
        and other{" "}
        <strong className="font-semibold text-fg1">
          agency automation solutions
        </strong>{" "}
        for clients. The category has moved fast: industry estimates put the
        global AI agent market on track to grow from roughly $7.8 billion in
        2025 to over $50 billion by 2030, and a large majority of B2B companies
        are already using or actively planning AI chatbot deployment rather than
        building the capability entirely in-house. Agencies are the natural
        delivery layer for a lot of that demand, and white-label margins in the
        70–85% range are a big part of why so many are moving into this now. The
        question this guide answers isn&apos;t whether to offer this — it&apos;s
        which provider to build it with.
      </p>

      <h2 id="three-criteria" className={h2Class}>
        The three criteria that actually matter
      </h2>
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
                "Provider",
                "White-label readiness",
                "Client-facing reliability",
                "Delivery & customization strength",
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
                  {row.whiteLabel}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.reliability}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.customization}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={cn(bodyClass, "mb-10")}>
        Use this as a starting filter, not a final verdict. Platforms score
        higher on white-label readiness and speed; custom development partners
        score higher on delivery depth. The right choice depends on how many
        clients you&apos;re serving and how differentiated each engagement needs
        to be.
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
        {BEST_AI_AGENT_COPILOTS_FAQS.map((faq, index) => (
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
            quality={90}
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
