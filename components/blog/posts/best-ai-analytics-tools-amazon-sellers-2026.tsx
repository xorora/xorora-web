import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetQuoteButton } from "@/components/blog/post";
import {
  AMAZON_ACCOUNT_MANAGEMENT_PATH,
  AMAZON_PPC_ADVERTISING_PATH,
} from "@/lib/amazon-a-to-z";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const BEST_AI_ANALYTICS_AMAZON_SLUG =
  "best-ai-analytics-tools-amazon-sellers-2026";

export const BEST_AI_ANALYTICS_AMAZON_FAQS = [
  {
    q: "What is an AI analytics and decision support system?",
    a: "It's software that goes beyond a static dashboard, using AI to analyze business data and actively recommend or trigger actions — adjusting an ad bid, flagging a reorder point, surfacing an anomaly — rather than just displaying historical numbers for someone to interpret manually. The strongest AI analytics and decision support systems combine deep, accurate data with genuinely prescriptive recommendations, not just AI-generated summaries of the same old dashboard.",
  },
  {
    q: "What's the difference between business intelligence and a decision support system?",
    a: "Business intelligence tells you what happened: revenue, margin, traffic, broken down and visualized. A decision support system goes a step further, using that data to recommend or automate a next action. Most Amazon seller tools sit somewhere on that spectrum; Jungle Scout and Perpetua/Quartile lean furthest toward genuine decision support among the tools compared here.",
  },
  {
    q: "What's the best SMB analytics solution for a small Amazon brand?",
    a: "For most small teams without a dedicated analyst, Jungle Scout's AI-generated reporting or Sellerboard's lightweight profit dashboard are the most accessible starting points. Helium 10 and SmartScout offer more depth but come with a steeper learning curve, better suited to teams with more bandwidth to dedicate to the platform.",
  },
  {
    q: "How much do AI analytics tools for Amazon sellers cost?",
    a: "Pricing varies widely by category. Broad analytics suites typically start around $99/month on an annual plan. Specialist advertising analytics platforms range from roughly $49 to several hundred dollars a month depending on ad spend and feature tier. Lighter, single-purpose profit trackers are generally more affordable than full research-and-listing suites.",
  },
  {
    q: "When does a custom decision support system make more sense than a subscription tool?",
    a: "When your data needs span multiple brands or marketplaces, need to combine Amazon data with internal systems a generic tool doesn't integrate with, or require forecasting and anomaly detection built specifically around your own SKUs and margins rather than a generic dashboard view.",
  },
  {
    q: "Can Xorora build a custom AI analytics and decision support system?",
    a: "Yes. Xorora builds custom analytics and decision-support systems that pull data from Amazon's Selling Partner API and other business systems into a single, purpose-built view designed to support data-driven decision making, not just reporting. Projects start at $10,000, with pricing quoted directly against your data sources and reporting requirements.",
  },
] as const;

export const BEST_AI_ANALYTICS_AMAZON_META: BlogArticleMeta = {
  slug: BEST_AI_ANALYTICS_AMAZON_SLUG,
  seoTitle: "Best AI Analytics Tools for Amazon Sellers Compared (2026)",
  seoDescription:
    "Compare AI analytics and decision support systems for Amazon and e-commerce sellers on data depth, decision-support intelligence, and SMB fit.",
  keywords: [
    "AI analytics and decision support systems",
    "AI-powered analytics",
    "business intelligence",
    "decision support software",
    "SMB analytics solutions",
    "data-driven decision making",
  ],
  aiSummary:
    "This decision-stage comparison scores Helium 10, Jungle Scout, SmartScout, SellerApp, Perpetua/Quartile, and Sellerboard on data depth, decision-support intelligence, and SMB fit. Jungle Scout and Perpetua/Quartile lean furthest toward genuine decision support; Sellerboard wins lightweight profit clarity; and a custom Xorora build beats stacked subscriptions when multi-brand or internal-system data needs outgrow off-the-shelf tools.",
  companies: [
    "Helium 10",
    "Jungle Scout",
    "SmartScout",
    "SellerApp",
    "Perpetua",
    "Quartile",
    "Sellerboard",
  ],
  faqs: [...BEST_AI_ANALYTICS_AMAZON_FAQS],
  toc: [
    { id: "who-this-is-for", label: "Who this is for" },
    { id: "three-criteria", label: "Three decision criteria" },
    { id: "decision-scorecard", label: "Decision scorecard" },
    { id: "helium-10", label: "Helium 10" },
    { id: "jungle-scout", label: "Jungle Scout" },
    { id: "smartscout", label: "SmartScout" },
    { id: "sellerapp", label: "SellerApp" },
    { id: "perpetua-quartile", label: "Perpetua & Quartile" },
    { id: "sellerboard", label: "Sellerboard" },
    { id: "how-to-choose", label: "How to choose" },
    { id: "custom-dashboard", label: "When custom wins" },
    { id: "faq", label: "FAQ" },
  ],
};

interface ScorecardRow {
  id: string;
  name: string;
  dataDepth: string;
  decisionSupport: string;
  smbFit: string;
}

interface ToolProfile {
  id: string;
  name: string;
  dataDepth: string;
  decisionSupport: string;
  smbFit: string;
  snapshot?: string;
  snapshots?: Array<{ src: string; alt: string }>;
  paragraphs: ReactNode[];
  strengths: string;
  tradeoff: string;
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
    title: "1. Data depth",
    body: "How complete is the underlying data, and how current is it? A dashboard built on delayed or partial data produces confident-looking numbers that are quietly wrong, which is worse than no dashboard at all.",
  },
  {
    title: "2. Decision-support intelligence",
    body: "This is the difference between business intelligence (a dashboard that shows you what happened) and a genuine decision support system (a tool that tells you what to do about it — reorder now, cut this ad group, raise this price). Most \"AI-powered\" tools are still BI with a chatbot bolted on. A smaller number actually generate recommendations you can act on directly.",
  },
  {
    title: "3. SMB fit",
    body: "Can a small team run this without hiring a data analyst? Pricing, setup complexity, and the learning curve all matter more for a 5-person brand than a 500-person one. A tool built for enterprise complexity can be objectively powerful and still be the wrong choice for a small operation.",
  },
];

const SCORECARD: ScorecardRow[] = [
  {
    id: "helium-10",
    name: "Helium 10",
    dataDepth: "Strong — multi-module data across profit, keywords, and market",
    decisionSupport:
      "Moderate — strong reporting, lighter on prescriptive recommendations",
    smbFit: "Moderate — powerful but has a real learning curve",
  },
  {
    id: "jungle-scout",
    name: "Jungle Scout",
    dataDepth: "Strong — revenue, margin, ROI, COGS per marketplace",
    decisionSupport:
      "Strong — AI generates written summaries and suggested next steps",
    smbFit: "Strong — built to be readable without a data background",
  },
  {
    id: "smartscout",
    name: "SmartScout",
    dataDepth: "Strong — 43,000+ subcategories of market data",
    decisionSupport:
      "Moderate — excellent visibility, fewer prescriptive actions",
    smbFit: "Weak-to-moderate — built more for brand managers than solo sellers",
  },
  {
    id: "sellerapp",
    name: "SellerApp",
    dataDepth: "Moderate — solid but less deep than specialist tools",
    decisionSupport: "Moderate — dashboard-first, decision support is secondary",
    smbFit: "Strong — accessible mid-tier pricing and simpler setup",
  },
  {
    id: "perpetua-quartile",
    name: "Perpetua / Quartile",
    dataDepth: "Strong — deep, ad-spend-specific data",
    decisionSupport: "Strong — actively adjusts bids based on recommendations",
    smbFit: "Moderate — genuinely useful but scoped to advertising only",
  },
  {
    id: "sellerboard",
    name: "Sellerboard",
    dataDepth:
      "Strong for profit-specific data — weaker outside margin/expense tracking",
    decisionSupport: "Moderate — surfaces real numbers, limited forecasting",
    smbFit: "Strong — lightweight, affordable, fast to set up",
  },
];

const CHOOSE = [
  {
    title: "Start with what decision you're actually trying to make better",
    body: '"What\'s my real profit per SKU" points toward Sellerboard or Helium 10\'s Profits module. "How\'s my category performing against competitors" points toward SmartScout. "Is my ad spend working, and should it change automatically" points toward Perpetua or Quartile.',
  },
  {
    title: "Weigh BI against genuine decision support",
    body: "If you want a platform that tells you what happened, most of these tools qualify. If you want one that tells you what to do next and can act on it, Jungle Scout's AI reporting and Perpetua/Quartile's automated bid adjustment are the closer fit.",
  },
  {
    title: "Be honest about your team's capacity",
    body: "A powerful, feature-dense platform that nobody has time to fully learn produces less value than a simpler tool your team actually opens every day. Data-driven decision making only works if the data gets looked at.",
  },
  {
    title: "Weigh subscription cost against your order volume",
    body: "A $99–$695/month tool makes obvious sense once you're processing enough orders that the time saved outweighs the cost. For a smaller catalog, a lighter, cheaper tool — or a custom-built system scoped to exactly what you need — can be the more rational choice.",
  },
];

const CUSTOM_TRIGGERS = [
  "You're running multiple brands or marketplaces and need one unified view, not several tool logins",
  "Your data needs to combine Amazon data with internal systems (accounting, inventory, CRM) that off-the-shelf tools don't integrate with",
  "You've outgrown what a generic dashboard shows and need AI-driven forecasting or anomaly detection built specifically around your SKUs and margins — real decision support, not just reporting",
  "You're paying for three overlapping subscriptions and still assembling the real picture manually in a spreadsheet",
];

const TOOLS: ToolProfile[] = [
  {
    id: "helium-10",
    name: "Helium 10",
    dataDepth: "Strong — multi-module data across profit, keywords, and market",
    decisionSupport:
      "Moderate — strong reporting, lighter on prescriptive recommendations",
    smbFit: "Moderate — powerful but has a real learning curve",
    snapshot: "/assets/blog/tools/helium-10.png",
    paragraphs: [
      "Helium 10 is generally considered the most complete Amazon analytics suite available, bundling Profits, Market Tracker, and Keyword Tracker into one platform. It pulls together sales volume, gross revenue, expenses, and net profit across marketplaces in one place, which is exactly the kind of consolidated view that otherwise requires stitching together spreadsheets manually.",
    ],
    strengths:
      "Broadest single-platform data coverage, strong keyword and market tracking layered in alongside profit data.",
    tradeoff:
      "More reporting than active decision support, and the depth of features means a real onboarding curve for a small team.",
  },
  {
    id: "jungle-scout",
    name: "Jungle Scout",
    dataDepth: "Strong — revenue, margin, ROI, COGS per marketplace",
    decisionSupport:
      "Strong — AI generates written summaries and suggested next steps",
    smbFit: "Strong — built to be readable without a data background",
    snapshot: "/assets/blog/tools/jungle-scout.png",
    paragraphs: [
      "Jungle Scout differentiates itself by using AI to actually generate business reports, not just display raw numbers — closer to genuine decision support software than a static dashboard. Its analytics cover revenue, profit margin, ROI, and COGS broken down per marketplace, with a written performance summary and suggested next steps layered on top.",
    ],
    strengths:
      "AI-generated summaries save real analysis time and translate well for teams without a dedicated analyst.",
    tradeoff:
      "Deeper category-level competitive intelligence isn't Jungle Scout's core strength.",
  },
  {
    id: "smartscout",
    name: "SmartScout",
    dataDepth: "Strong — 43,000+ subcategories of market data",
    decisionSupport:
      "Moderate — excellent visibility, fewer prescriptive actions",
    smbFit: "Weak-to-moderate — built more for brand managers than solo sellers",
    snapshot: "/assets/blog/tools/smartscout.png",
    paragraphs: [
      "SmartScout's differentiator is scale of market intelligence: historical market-share data spanning more than 43,000 subcategories, giving brand managers visibility into category trends and competitor movement over time.",
    ],
    strengths:
      "Category and competitive intelligence depth that smaller, single-brand-focused tools can't match.",
    tradeoff:
      "Built more for brand-level strategic visibility than day-to-day, prescriptive decision-making for a small team.",
  },
  {
    id: "sellerapp",
    name: "SellerApp",
    dataDepth: "Moderate — solid but less deep than specialist tools",
    decisionSupport: "Moderate — dashboard-first, decision support is secondary",
    smbFit: "Strong — accessible mid-tier pricing and simpler setup",
    snapshot: "/assets/blog/tools/sellerapp.png",
    paragraphs: [
      "SellerApp positions itself as a mid-tier all-rounder, combining product research, listing support, and analytics in one dashboard — a reasonable pick among SMB analytics solutions for sellers who don't need Helium 10's full depth but want more than a single-purpose tracker.",
    ],
    strengths:
      "Balanced feature set without the premium pricing of the largest suites.",
    tradeoff:
      "Individual analytics features tend to be less deep than a specialist tool built around just one function.",
  },
  {
    id: "perpetua-quartile",
    name: "Perpetua and Quartile",
    dataDepth: "Strong — deep, ad-spend-specific data",
    decisionSupport: "Strong — actively adjusts bids based on recommendations",
    smbFit: "Moderate — genuinely useful but scoped to advertising only",
    snapshots: [
      {
        src: "/assets/blog/tools/perpetua.png",
        alt: "Perpetua retail media optimization homepage",
      },
      {
        src: "/assets/blog/tools/quartile.png",
        alt: "Quartile Amazon advertising analytics dashboard",
      },
    ],
    paragraphs: [
      <>
        For sellers whose main analytics gap is advertising performance
        specifically, Perpetua and Quartile are purpose-built AI platforms that
        don&apos;t just report ad performance — they actively adjust bids based
        on it, arguably the clearest example of real decision-support
        intelligence on this list. If you also need hands-on campaign
        management, Xorora&apos;s{" "}
        <TextLink href={AMAZON_PPC_ADVERTISING_PATH}>
          Amazon PPC advertising services
        </TextLink>{" "}
        cover that layer alongside tooling.
      </>,
    ],
    strengths:
      "Far deeper advertising-specific analytics and automation than a general suite tool's built-in PPC module.",
    tradeoff:
      "Narrow scope — useful specifically for ad performance, not a general analytics replacement.",
  },
  {
    id: "sellerboard",
    name: "Sellerboard",
    dataDepth:
      "Strong for profit-specific data — weaker outside margin/expense tracking",
    decisionSupport: "Moderate — surfaces real numbers, limited forecasting",
    smbFit: "Strong — lightweight, affordable, fast to set up",
    snapshot: "/assets/blog/tools/sellerboard.png",
    paragraphs: [
      "Sellerboard has built a following as a lightweight, dedicated profit and expense dashboard, tracking real-time profitability including the hidden fees (returns, storage, advertising costs) that inflate-looking revenue numbers often hide.",
    ],
    strengths:
      "Focused, affordable, and genuinely good at the one thing it's built for: knowing your real margin per SKU, with minimal setup effort.",
    tradeoff:
      "Doesn't attempt product research, PPC optimization, or forward-looking forecasting — it's retrospective analytics by design.",
  },
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function BestAiAnalyticsAmazonArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-10")}>
        <strong className="font-semibold text-fg1">Quick answer:</strong> The
        strongest{" "}
        <strong className="font-semibold text-fg1">
          AI analytics and decision support systems
        </strong>{" "}
        for Amazon and e-commerce sellers score well on three things: data depth
        (how complete and accurate the underlying numbers actually are),
        decision-support intelligence (whether the tool tells you what to do
        next, or just shows you a dashboard), and SMB fit (whether a small team
        without a dedicated data analyst can actually run it day to day). Helium
        10, Jungle Scout, SmartScout, SellerApp, Perpetua/Quartile, and
        Sellerboard are scored against all three below, alongside when a
        custom-built system outperforms all of them.
      </p>

      <h2 id="who-this-is-for" className={h2Class}>
        Who this comparison is for
      </h2>
      <p className={cn(bodyClass, "mb-10")}>
        This is written for e-commerce and digital retail brands — mostly Amazon
        sellers — evaluating{" "}
        <strong className="font-semibold text-fg1">
          AI-powered analytics
        </strong>{" "}
        platforms to replace spreadsheets, guesswork, or a patchwork of
        half-used tools. If you&apos;re a founder or ops lead trying to make
        faster, better-informed calls on pricing, inventory, and ad spend, this
        comparison is built around the decision you&apos;re actually making:
        which platform, if any, is worth paying for.
      </p>

      <h2 id="three-criteria" className={h2Class}>
        The three criteria that actually matter
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Most &quot;best tools&quot; roundups list features. Features don&apos;t
        tell you whether a platform will actually change how your business makes
        decisions. Three criteria do:
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
                "Tool",
                "Data depth",
                "Decision-support intelligence",
                "SMB fit",
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
                  {row.dataDepth}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.decisionSupport}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {row.smbFit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={cn(bodyClass, "mb-10")}>
        Use this as a starting filter, not a final verdict. A tool that&apos;s
        &quot;weak&quot; on SMB fit isn&apos;t a bad tool — it&apos;s built for
        a different size of operation than yours might be.
      </p>

      {TOOLS.map((tool) => (
        <ToolSection key={tool.id} tool={tool} />
      ))}

      <h2 id="how-to-choose" className={h2Class}>
        How to choose the right system for your business
      </h2>
      <div className="mb-10 flex flex-col gap-4">
        {CHOOSE.map((item) => (
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

      <h2 id="custom-dashboard" className={h2Class}>
        When off-the-shelf isn&apos;t enough: custom decision support systems
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        For most sellers, one or two of the tools above genuinely cover the
        need. But brands running multiple marketplaces, multiple product lines,
        or a business intelligence stack that has to sit alongside internal
        systems (ERP, custom reporting, a proprietary pricing model) often hit a
        ceiling with subscription tools: the dashboard shows what the vendor
        decided to build, not necessarily the decision support your specific
        business actually needs.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        That&apos;s where a{" "}
        <strong className="font-semibold text-fg1">
          custom AI analytics build
        </strong>{" "}
        becomes the more sensible option instead of paying for three overlapping
        subscriptions and still not getting the exact view you need. Xorora
        builds{" "}
        <TextLink href={ROUTES.customAppDevelopment}>
          custom application and dashboard development
        </TextLink>{" "}
        for e-commerce and digital retail brands whose data needs don&apos;t fit
        a generic seller tool, pulling data directly from Amazon&apos;s Selling
        Partner API, your accounting system, and any other source into one
        unified, purpose-built system rather than three logins and three exports
        you have to reconcile manually. Sellers who also need ongoing account
        operations can pair that with{" "}
        <TextLink href={AMAZON_ACCOUNT_MANAGEMENT_PATH}>
          Amazon account management
        </TextLink>
        .
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        Xorora&apos;s relevant work includes a{" "}
        <TextLink href={ROUTES.caseStudy("real-time-saas-event-monitoring")}>
          real-time SaaS event monitoring system
        </TextLink>{" "}
        built for instant, full-context alerting — exactly the kind of
        infrastructure that powers a live profit-and-inventory system rather
        than a report you have to remember to check. Publicly cited results
        across Xorora&apos;s broader{" "}
        <TextLink href={ROUTES.engineering}>engineering</TextLink> work include
        a 3.5x median speed-up compared to building the same system in-house and
        99.9% uptime across deployed systems. For forecasting and anomaly
        detection layered on top of seller data, see also{" "}
        <TextLink href={ROUTES.mlDataScience}>
          ML &amp; data science services
        </TextLink>
        .
      </p>
      <h3 className="mt-6 mb-3 font-sans font-semibold text-[17px] text-fg1">
        When a custom decision support system makes more sense than another
        subscription
      </h3>
      <ul className="mb-6 list-disc space-y-2 pl-5 font-sans text-[15.5px] text-fg2 leading-relaxed">
        {CUSTOM_TRIGGERS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className={cn(bodyClass, "mb-5")}>
        A scoped build starts at $10,000, with pricing quoted against your
        actual data sources and reporting needs. Teams that already have
        engineers or analysts in place can also bring in extra capacity through{" "}
        <TextLink href={ROUTES.staffAugmentation}>staff augmentation</TextLink>{" "}
        rather than a full build handoff. If you want to see whether a custom
        system would actually beat your current tool stack,{" "}
        <TextLink href={ROUTES.contact}>get in touch</TextLink> for a scoping
        conversation.
      </p>
      <div className="mb-10">
        <GetQuoteButton company="custom Amazon analytics dashboard" />
      </div>

      <h2 id="faq" className={h2Class}>
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4">
        {BEST_AI_ANALYTICS_AMAZON_FAQS.map((faq, index) => (
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

function ToolSection({ tool }: { tool: ToolProfile }) {
  const images =
    tool.snapshots ??
    (tool.snapshot
      ? [{ src: tool.snapshot, alt: `${tool.name} homepage` }]
      : []);

  return (
    <section
      id={tool.id}
      className="mt-12 scroll-mt-[110px] rounded-(--r-xl) border border-border bg-white p-[clamp(22px,3vw,36px)]"
    >
      <h2 className="m-0 mb-5 font-bold font-sans text-[clamp(26px,3vw,34px)] text-fg1 tracking-[-0.02em]">
        {tool.name}
      </h2>

      {images.map((image) => (
        <figure
          key={image.src}
          className="relative z-0 mb-6 overflow-hidden rounded-(--r-lg) border border-border bg-slate-100"
        >
          <Image
            src={image.src}
            alt={image.alt}
            title={image.alt}
            width={1200}
            height={675}
            sizes="(max-width: 1180px) 100vw, 760px"
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="sr-only">{image.alt}</figcaption>
        </figure>
      ))}

      <dl className="mb-6 grid gap-3 sm:grid-cols-2">
        <MetaItem label="Data depth" value={tool.dataDepth} />
        <MetaItem
          label="Decision-support intelligence"
          value={tool.decisionSupport}
        />
        <MetaItem label="SMB fit" value={tool.smbFit} />
      </dl>

      {tool.paragraphs.map((paragraph, index) => (
        <p key={index} className={cn(bodyClass, "mb-4")}>
          {paragraph}
        </p>
      ))}

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-(--r-lg) border border-indigo-100 bg-indigo-50 px-5 py-4">
          <p className="mb-1.5 font-sans font-semibold text-[13px] text-xo-indigo">
            Strengths
          </p>
          <p className={cn(bodyClass, "text-[15px]")}>{tool.strengths}</p>
        </div>
        <div className="rounded-(--r-lg) border border-border bg-slate-50 px-5 py-4">
          <p className="mb-1.5 font-sans font-semibold text-[13px] text-fg3">
            Trade-off
          </p>
          <p className={cn(bodyClass, "text-[15px]")}>{tool.tradeoff}</p>
        </div>
      </div>
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
