import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const BEST_AI_PARTNERS_AGENCIES_SLUG =
  "best-ai-development-partners-marketing-agencies-2026";

export const BEST_AI_PARTNERS_AGENCIES_FAQS = [
  {
    q: "What should a digital agency look for in custom AI software development?",
    a: "Score potential partners against three things: agency-specific delivery fit (real experience with multi-client or white-label systems, not just single-brand builds), decision intelligence depth (systems that recommend or act, not just report), and implementation maturity (production-grade delivery, not demos that stall after the pilot). A partner strong in only one of the three usually means a harder engagement than the sales conversation suggests.",
  },
  {
    q: "What's the difference between AI-powered analytics and a decision intelligence system?",
    a: "AI-powered analytics typically means dashboards and reporting enhanced with AI-generated summaries — useful, but still descriptive. A decision intelligence system goes further, using that same data to actively recommend or trigger a next action — reallocating budget, flagging underperforming creative, predicting account churn risk — closer to a digital analyst than a reporting tool.",
  },
  {
    q: "Should an agency build custom AI tools or resell existing SaaS products to clients?",
    a: "It depends on differentiation goals. Reselling existing tools is faster and cheaper to start but produces the same generic output every competitor using the same tool gets. Custom AI development, built around an agency's specific workflows and its clients' first-party data, is slower and more expensive upfront but produces something competitors can't simply subscribe to as well.",
  },
  {
    q: "How much does custom AI software development cost for an agency?",
    a: "Cost depends heavily on scope: a single internal decision-support tool costs meaningfully less than a full white-label, multi-client analytics platform. Get a written estimate against your specific use case rather than relying on a generic price range, since data integration work across client accounts often accounts for a large share of total cost.",
  },
  {
    q: "What are AI consulting services versus AI development services?",
    a: "Consulting services typically focus on strategy, opportunity assessment, and roadmap — helping an agency figure out where AI actually creates value. Development services build the actual system. Some firms offer both; agencies that already know what they want to build should weigh development-heavy partners more, while agencies still exploring the opportunity may want a consulting-first engagement.",
  },
  {
    q: "Is Xorora a good choice for AI development for marketing agencies?",
    a: "Xorora builds AI agents, analytics systems, and the surrounding application and data layer together, rather than treating the AI as a separate bolt-on. It's a strong fit for agencies and consultancies that want a genuine decision intelligence system built as production software, not a reporting dashboard with an AI feature added on. Projects start at $10,000, with pricing quoted directly against scope.",
  },
] as const;

export const BEST_AI_PARTNERS_AGENCIES_META: BlogArticleMeta = {
  slug: BEST_AI_PARTNERS_AGENCIES_SLUG,
  seoTitle: "Best AI Development Partners for Marketing Agencies (2026)",
  seoDescription:
    "Compare custom AI software development for agencies on agency-delivery fit, decision intelligence depth, and implementation maturity, with clear service differentiation.",
  keywords: [
    "custom AI software development for agencies",
    "AI development firms",
    "digital agency AI services",
    "AI-powered analytics",
    "marketing agency technology",
    "decision intelligence systems",
    "AI consulting services",
  ],
  aiSummary:
    "This 2026 shortlist compares eight AI development partners for marketing agencies on agency-specific delivery fit, decision intelligence depth, and implementation maturity. Xorora leads for full-stack decision systems; specialists cover enterprise personalization, e-commerce analytics, chatbots, Eastern European delivery, production-first builds, conversational AI, and AdTech/MarTech.",
  companies: [
    "Xorora",
    "LeewayHertz",
    "Markovate",
    "Appinventiv",
    "Yalantis",
    "Sarvika Technologies",
    "Master of Code Global",
    "Geomotiv",
  ],
  faqs: [...BEST_AI_PARTNERS_AGENCIES_FAQS],
  toc: [
    { id: "who-this-is-for", label: "Who this is for" },
    { id: "three-criteria", label: "Three decision criteria" },
    { id: "decision-scorecard", label: "Decision scorecard" },
    { id: "xorora", label: "1. Xorora" },
    { id: "leewayhertz", label: "2. LeewayHertz" },
    { id: "markovate", label: "3. Markovate" },
    { id: "appinventiv", label: "4. Appinventiv" },
    { id: "yalantis", label: "5. Yalantis" },
    { id: "sarvika-technologies", label: "6. Sarvika Technologies" },
    { id: "master-of-code-global", label: "7. Master of Code Global" },
    { id: "geomotiv", label: "8. Geomotiv" },
    { id: "questions-to-ask", label: "Questions before you sign" },
    { id: "faq", label: "FAQ" },
  ],
};

interface ScorecardRow {
  id: string;
  name: string;
  agencyFit: string;
  decisionDepth: string;
  maturity: string;
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
    title: "1. Agency-specific delivery fit",
    body: "Building software for a single brand is a different problem than building something an agency can deploy across dozens of client accounts — often white-labeled, often needing to work inside each client's own data and brand constraints. A vendor whose entire portfolio is single-tenant enterprise builds may not understand multi-client architecture at all.",
  },
  {
    title: "2. Decision intelligence depth",
    body: "This is the line between a dashboard and a genuine decision intelligence system. A tool that reports campaign performance is useful. A system that recommends budget reallocation, flags underperforming creative before a human notices, or predicts churn risk from engagement patterns is a fundamentally different, more valuable deliverable — and a much harder one to build well.",
  },
  {
    title: "3. Implementation maturity",
    body: "Can this partner ship something that survives contact with real client data and real production traffic, or does the engagement produce an impressive demo that quietly needs a full rebuild before it can actually run your agency's day-to-day operations?",
  },
];

const SCORECARD: ScorecardRow[] = [
  {
    id: "xorora",
    name: "Xorora",
    agencyFit:
      "Strong — full-stack builds designed around real operational workflows",
    decisionDepth:
      "Strong — agent and analytics systems built for real-time decisions, not static reports",
    maturity: "Strong — production case studies with published uptime",
  },
  {
    id: "leewayhertz",
    name: "LeewayHertz",
    agencyFit:
      "Moderate — enterprise-first heritage, agency use cases less central",
    decisionDepth:
      "Strong — deep predictive analytics and personalization engineering",
    maturity: "Strong — established San Francisco-based AI consultancy",
  },
  {
    id: "markovate",
    name: "Markovate",
    agencyFit: "Moderate — e-commerce/retail focus more than agency-specific",
    decisionDepth:
      "Strong — customer engagement and marketing analytics depth",
    maturity: "Strong — applied AI with real client delivery",
  },
  {
    id: "appinventiv",
    name: "Appinventiv",
    agencyFit: "Moderate — large-agency scale, less boutique/white-label focus",
    decisionDepth:
      "Moderate — strong on chatbots/recommendation engines, less on prescriptive systems",
    maturity: "Strong — large delivery team with broad portfolio",
  },
  {
    id: "yalantis",
    name: "Yalantis",
    agencyFit: "Moderate — broad industry coverage including marketing",
    decisionDepth:
      "Moderate — solid analytics work, not exclusively decision-systems focused",
    maturity: "Strong — established Eastern European delivery track record",
  },
  {
    id: "sarvika-technologies",
    name: "Sarvika Technologies",
    agencyFit: "Moderate — growth/mid-market focus overlaps with agency needs",
    decisionDepth: "Strong — explicit production-over-prototype philosophy",
    maturity: "Strong — outcomes-first engineering process",
  },
  {
    id: "master-of-code-global",
    name: "Master of Code Global",
    agencyFit:
      "Weak-to-moderate — conversational AI specialty, narrower than full analytics",
    decisionDepth:
      "Moderate — strong in chat/voice, less in broader decision systems",
    maturity: "Strong — 20+ years, 500+ projects delivered",
  },
  {
    id: "geomotiv",
    name: "Geomotiv",
    agencyFit: "Strong — explicit AdTech/MarTech specialization",
    decisionDepth: "Moderate — custom analytics work, breadth over specialization",
    maturity: "Strong — 13+ years across startups and enterprises",
  },
];

const QUESTIONS = [
  {
    q: '"Have you built something for multi-client or white-label deployment before?"',
    a: "A single-tenant enterprise build and a system meant to run across dozens of client accounts are architecturally different problems. Make sure the partner has actually done the latter.",
  },
  {
    q: '"Walk me through a system you built that recommends or triggers an action, not just reports one."',
    a: "This question separates genuine decision intelligence systems work from dashboard-building with an AI label attached.",
  },
  {
    q: '"What happens to this system after the initial build — who maintains and iterates on it?"',
    a: "Agencies need a system that evolves as client needs change, not a one-time delivery that goes stale.",
  },
  {
    q: '"How do you handle client data isolation if this needs to work across multiple accounts?"',
    a: "A critical, often under-asked question for any agency-facing AI system.",
  },
  {
    q: '"What\'s the actual engagement model?"',
    a: "Some firms only do fixed-scope project delivery; others offer staff augmentation for agencies that want to build in-house AI capability alongside external expertise.",
  },
];

const COMPANIES: CompanyProfile[] = [
  {
    id: "xorora",
    rank: 1,
    name: "Xorora",
    location: "United States",
    knownFor:
      "Full-stack decision systems for agency operational workflows",
    suitedFor:
      "Digital agencies and consultancies that want AI-powered analytics and decision systems built as real production software, with a partner that can also own the surrounding application and data layer",
    scorecardRead:
      "Strong across agency-specific delivery fit, decision intelligence depth, and implementation maturity.",
    snapshot: "/assets/blog/companies/xorora-marketing-agencies.png",
    minProject: "$10,000+",
    href: ROUTES.aiAgentDevelopment,
    hrefLabel: "AI agent development services",
    paragraphs: [
      <>
        Xorora is a US-based AI development partner offering{" "}
        <strong className="font-semibold text-fg1">
          custom AI software development for agencies
        </strong>{" "}
        that want to build real decision systems, not just another client-facing
        dashboard. Its team builds the{" "}
        <TextLink href={ROUTES.aiAgentDevelopment}>AI agent</TextLink> or
        analytics layer, the surrounding application, and the underlying{" "}
        <TextLink href={ROUTES.mlDataScience}>data pipeline</TextLink> together,
        which is the structural reason it scores strong on decision intelligence
        depth rather than shipping a reporting layer with an AI label on it.
      </>,
      <>
        On agency-specific delivery fit: Xorora&apos;s{" "}
        <TextLink href={ROUTES.customAppDevelopment}>
          custom application development
        </TextLink>{" "}
        work is built around real operational workflows, not templated products,
        which matters for agencies that need a system reflecting how their
        specific account teams actually work, not a generic best-practice
        template.
      </>,
      <>
        On decision intelligence depth: relevant work includes a{" "}
        <TextLink href={ROUTES.caseStudy("real-time-compliance-intelligence")}>
          real-time compliance intelligence platform
        </TextLink>{" "}
        that turns regulatory changes into live, actionable alerts, and{" "}
        <TextLink href={ROUTES.caseStudy("real-time-saas-event-monitoring")}>
          real-time event monitoring infrastructure
        </TextLink>{" "}
        built for instant, full-context alerting rather than a delayed report —
        the same underlying pattern that makes a genuine decision intelligence
        system useful for flagging campaign issues or account risk before a
        human notices.
      </>,
      <>
        On implementation maturity: publicly cited results across Xorora&apos;s{" "}
        <TextLink href={ROUTES.engineering}>engineering</TextLink> work include
        a 3.5x median speed-up compared to building the same system in-house and
        99.9% uptime across deployed systems.
      </>,
    ],
    consideration: (
      <>
        Xorora is newer than several other names on this list and doesn&apos;t
        have a portfolio specifically built around marketing agency clients the
        way a firm like Geomotiv does. What it offers instead is a genuinely
        full-stack team that builds the decision system and the application it
        lives in together, rather than treating the AI layer as a separate
        bolt-on. Teams that already have engineers in place can also look at{" "}
        <TextLink href={ROUTES.staffAugmentation}>staff augmentation</TextLink>{" "}
        or{" "}
        <TextLink href={ROUTES.aiConsultation}>AI consulting</TextLink> to
        shape the roadmap before a full build.
      </>
    ),
  },
  {
    id: "leewayhertz",
    rank: 2,
    name: "LeewayHertz",
    location: "San Francisco, USA",
    knownFor: "Enterprise predictive analytics and personalization engines",
    suitedFor:
      "Agencies with enterprise-scale clients who need deep predictive personalization work, not a lighter-weight multi-client tool",
    scorecardRead:
      "Strong on decision intelligence depth and implementation maturity; agency-specific delivery fit is moderate, since the core practice leans enterprise-first rather than agency-native.",
    snapshot: "/assets/blog/companies/leewayhertz.png",
    paragraphs: [
      "LeewayHertz operates as an enterprise AI consultancy out of San Francisco, with particular strength in predictive analytics and personalization engines built for larger, established brands.",
    ],
  },
  {
    id: "markovate",
    rank: 3,
    name: "Markovate",
    location: "California, USA",
    knownFor: "AI-powered customer engagement and marketing analytics",
    suitedFor:
      "Agencies serving e-commerce and retail clients who want a partner with direct sector experience",
    scorecardRead:
      "Strong on decision intelligence depth for customer engagement use cases; agency-specific delivery fit is moderate, since its core client base is direct-to-brand rather than agency-native.",
    snapshot: "/assets/blog/companies/markovate-agencies.png",
    paragraphs: [
      "Markovate focuses on AI-powered customer engagement and marketing analytics, with particular depth serving e-commerce and retail brands directly.",
    ],
  },
  {
    id: "appinventiv",
    rank: 4,
    name: "Appinventiv",
    location: "Global / large delivery team",
    knownFor: "AI chatbots, recommendation engines, and marketing personalization",
    suitedFor:
      "Agencies wanting a large, established delivery team for chatbot and recommendation-engine work at scale",
    scorecardRead:
      "Strong implementation maturity given team scale; decision intelligence depth is moderate — stronger in conversational/recommendation AI than in prescriptive decision systems specifically.",
    snapshot: "/assets/blog/companies/appinventiv.png",
    paragraphs: [
      "Appinventiv is a large-scale agency delivering AI chatbots, recommendation engines, and marketing personalization for digital brands, with a broad team and portfolio to match.",
    ],
  },
  {
    id: "yalantis",
    rank: 5,
    name: "Yalantis",
    location: "Eastern Europe",
    knownFor: "Broad AI delivery across marketing and fintech",
    suitedFor:
      "Agencies wanting competitive delivery rates from an established, broadly capable AI development firm",
    scorecardRead:
      "Solid across all three criteria without a specific marketing-agency specialization; a generalist AI development firm rather than an agency-native specialist.",
    snapshot: "/assets/blog/companies/yalantis.png",
    paragraphs: [
      "Yalantis is an Eastern Europe-based development firm with broad AI delivery experience spanning marketing and fintech, backed by a substantial public review history.",
    ],
  },
  {
    id: "sarvika-technologies",
    rank: 6,
    name: "Sarvika Technologies",
    location: "Growth / mid-market focus",
    knownFor: "Production-grade delivery over polished prototypes",
    suitedFor:
      "Growth-stage agencies or consultancies that specifically want a partner known for shipping production systems over polished prototypes",
    scorecardRead:
      "Strong on decision intelligence depth and implementation maturity given the outcomes-first philosophy; agency-specific fit is moderate, since their stated focus is growth and mid-market companies broadly, not agencies exclusively.",
    snapshot: "/assets/blog/companies/sarvika-technologies.png",
    paragraphs: [
      "Sarvika Technologies has built its reputation specifically around production-grade delivery, explicitly positioning against vendors who deliver impressive demos that don't survive real-world data. Their process starts with business outcomes, not just technical scope, and they work across machine learning, generative AI, and data analytics.",
    ],
  },
  {
    id: "master-of-code-global",
    rank: 7,
    name: "Master of Code Global",
    location: "Global (20+ years)",
    knownFor: "Conversational AI, chatbots, and voice assistants",
    suitedFor:
      "Agencies specifically building AI-powered customer experience or conversational products for clients",
    scorecardRead:
      "Strong implementation maturity given the long track record; decision intelligence depth and agency-specific fit are narrower, since the core specialty is conversational AI rather than broader analytics or decision systems.",
    snapshot: "/assets/blog/companies/master-of-code-global-agencies.png",
    paragraphs: [
      "Master of Code Global has built custom AI solutions since 2004, with 500+ delivered projects and deep specialization in conversational AI — chatbots and voice assistants built to interact naturally with real users.",
    ],
  },
  {
    id: "geomotiv",
    rank: 8,
    name: "Geomotiv",
    location: "Global (13+ years)",
    knownFor: "Custom AI across AdTech, MarTech, healthcare, and media",
    suitedFor:
      "Agencies specifically wanting a partner with direct AdTech and MarTech domain experience",
    scorecardRead:
      "Strong on agency-specific delivery fit given explicit AdTech/MarTech specialization; decision intelligence depth is moderate, reflecting broad industry coverage over narrow specialization in prescriptive systems.",
    snapshot: "/assets/blog/companies/geomotiv.png",
    paragraphs: [
      "Geomotiv delivers custom AI solutions across AdTech, MarTech, healthcare, and media, with more than 13 years of experience building tailor-made systems for a range of customer needs.",
    ],
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function BestAiPartnersAgenciesArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-10")}>
        <strong className="font-semibold text-fg1">Quick answer:</strong> The
        right{" "}
        <strong className="font-semibold text-fg1">
          custom AI software development for agencies
        </strong>{" "}
        isn&apos;t the vendor with the flashiest demo — it&apos;s the one that
        scores well on three things: agency-specific delivery fit (do they
        understand multi-client, white-label workflows or just single-brand
        builds), decision intelligence depth (can they build systems that
        actually recommend and act, not just report), and implementation
        maturity (do they ship production-grade systems or prototypes that stall
        after the pilot). LeewayHertz, Markovate, Appinventiv, Yalantis, Sarvika
        Technologies, Master of Code Global, Geomotiv, and Xorora are compared
        against all three below.
      </p>

      <h2 id="who-this-is-for" className={h2Class}>
        Who this comparison is for
      </h2>
      <p className={cn(bodyClass, "mb-10")}>
        This is written for digital agencies and consultancies evaluating{" "}
        <strong className="font-semibold text-fg1">AI development firms</strong>{" "}
        to build proprietary tooling — either{" "}
        <strong className="font-semibold text-fg1">
          AI-powered analytics
        </strong>{" "}
        and reporting they can offer clients under their own brand, or internal
        decision systems that make account management and campaign optimization
        faster than a human team alone. If you&apos;re an agency principal or
        head of strategy trying to differentiate on{" "}
        <strong className="font-semibold text-fg1">
          marketing agency technology
        </strong>{" "}
        rather than compete purely on headcount and hourly rates, this
        comparison is built around the decision you&apos;re actually facing:
        which partner can actually build it, not just talk about AI in a pitch
        deck.
      </p>

      <h2 id="three-criteria" className={h2Class}>
        The three criteria that actually matter
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Agencies evaluating{" "}
        <strong className="font-semibold text-fg1">
          AI consulting services
        </strong>{" "}
        and broader{" "}
        <strong className="font-semibold text-fg1">
          digital agency AI services
        </strong>{" "}
        tend to get sold on breadth of experience or client logos. Three
        criteria predict whether the engagement actually works out:
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
                "Partner",
                "Agency-specific delivery fit",
                "Decision intelligence depth",
                "Implementation maturity",
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
                  {row.agencyFit}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.decisionDepth}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.maturity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={cn(bodyClass, "mb-10")}>
        Use this table as a starting filter, not a final verdict. A partner
        strong on implementation maturity but weaker on agency-specific fit can
        still work well if you&apos;re building a single internal system rather
        than a white-label, multi-client product.
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
        {BEST_AI_PARTNERS_AGENCIES_FAQS.map((faq, index) => (
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
