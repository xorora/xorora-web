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
    q: "What is the best AI analytics tool for Amazon sellers?",
    a: "There's no single best tool for every seller. Helium 10 offers the broadest analytics feature set for most sellers, Jungle Scout leads on AI-generated performance summaries, SmartScout is strongest for category and market-share intelligence, and Sellerboard is the better choice for sellers who want a focused, lightweight profit dashboard without a full suite subscription.",
  },
  {
    q: "Do I need more than one analytics tool?",
    a: "Often, yes. Analytics, product research, and PPC optimization genuinely benefit from different, specialized tools rather than one suite trying to do all three well. Many experienced sellers run 3–4 specialized tools together rather than relying on a single all-in-one platform.",
  },
  {
    q: "How much do Amazon seller analytics tools cost?",
    a: "Pricing varies widely by category. Broad analytics suites typically start around $99/month on an annual plan. Specialist advertising analytics platforms range from roughly $49 to several hundred dollars a month depending on ad spend and feature tier. Lighter, single-purpose profit trackers are generally more affordable than full research-and-listing suites.",
  },
  {
    q: "When does a custom analytics dashboard make more sense than a subscription tool?",
    a: "When your data needs span multiple brands or marketplaces, need to combine Amazon data with internal systems a generic tool doesn't integrate with, or require forecasting and anomaly detection built specifically around your own SKUs and margins rather than a generic dashboard view.",
  },
  {
    q: "Can Xorora build a custom Amazon analytics dashboard?",
    a: "Yes. Xorora builds custom analytics and dashboard systems that pull data from Amazon's Selling Partner API and other business systems into a single, purpose-built view, rather than requiring sellers to reconcile data across multiple subscription tools manually. Projects start at $10,000, with pricing quoted directly against your data sources and reporting requirements.",
  },
] as const;

export const BEST_AI_ANALYTICS_AMAZON_META: BlogArticleMeta = {
  slug: BEST_AI_ANALYTICS_AMAZON_SLUG,
  seoTitle: "Best AI Analytics Tools for Amazon Sellers Compared (2026)",
  seoDescription:
    "The best AI analytics tools for Amazon sellers in 2026, compared on data depth, pricing, and what each one actually does well, plus when a custom dashboard beats an off-the-shelf tool.",
  keywords: [
    "best ai analytics tools for amazon sellers",
    "amazon seller analytics tools",
    "ai tools for amazon sellers",
    "amazon analytics software",
  ],
  aiSummary:
    "This 2026 comparison covers Helium 10, Jungle Scout, SmartScout, SellerApp, Perpetua, Quartile, and Sellerboard on Amazon analytics strengths rather than all-in-one marketing claims. Helium 10 is the broadest suite, Jungle Scout leads AI-generated reports, SmartScout wins category intelligence, Perpetua/Quartile excel at PPC analytics, and Sellerboard is the focused profit tracker — plus when a custom Xorora dashboard beats stacking subscriptions.",
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
    { id: "all-in-one-problem", label: "The all-in-one problem" },
    { id: "quick-comparison", label: "Quick comparison" },
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

interface ToolProfile {
  id: string;
  name: string;
  strength: string;
  bestFor: string;
  price: string;
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

const TOOLS: ToolProfile[] = [
  {
    id: "helium-10",
    name: "Helium 10",
    strength: "Profits, Market Tracker, Keyword Tracker in one suite",
    bestFor: "Sellers wanting the broadest analytics feature set in one platform",
    price: "~$99/month (annual)",
    snapshot: "/assets/blog/tools/helium-10.png",
    paragraphs: [
      "Helium 10 is generally considered the most complete Amazon analytics suite available, bundling Profits, Market Tracker, and Keyword Tracker into one platform with a genuinely navigable dashboard. It pulls together sales volume, gross revenue, expenses, and net profit across marketplaces in one place, which is exactly the kind of consolidated view that otherwise requires stitching together spreadsheets manually.",
    ],
    strengths:
      "Broadest single-platform analytics coverage, strong keyword and market tracking layered in alongside profit data.",
    tradeoff:
      "Pricing runs higher than lighter-weight, analytics-only tools, and much of that cost pays for features (listing tools, PPC automation) outside analytics specifically.",
  },
  {
    id: "jungle-scout",
    name: "Jungle Scout",
    strength: "AI-generated business and profit reports",
    bestFor:
      "Sellers who want AI to summarize performance, not just display it",
    price: "Varies by plan",
    snapshot: "/assets/blog/tools/jungle-scout.png",
    paragraphs: [
      "Jungle Scout differentiates itself by using AI to actually generate business reports, not just display raw numbers. Its sales analytics cover revenue, profit margin, ROI, and COGS broken down per marketplace, and its AI layer produces a written summary of performance along with suggested next steps — closer to an analyst's report than a raw dashboard.",
    ],
    strengths:
      "AI-generated summaries save real time compared to manually interpreting a dashboard; strong for sellers who want insight, not just data.",
    tradeoff:
      "As with most suite tools, deeper category-level competitive intelligence isn't Jungle Scout's core strength.",
  },
  {
    id: "smartscout",
    name: "SmartScout",
    strength:
      "Category and market-share intelligence across 43,000+ subcategories",
    bestFor:
      "Larger brands needing category-level competitive visibility",
    price: "Varies by plan",
    snapshot: "/assets/blog/tools/smartscout.png",
    paragraphs: [
      "SmartScout's differentiator is scale of market intelligence: historical market-share data spanning more than 43,000 subcategories, giving brand managers visibility into category trends and competitor movement over time. For wholesale and arbitrage sellers, its UPC scanner and geographic seller map add a research layer most pure analytics tools don't attempt.",
    ],
    strengths:
      "Category and competitive intelligence depth that smaller, single-brand-focused tools can't match.",
    tradeoff:
      "Its strength is market-level visibility more than granular, day-to-day profit tracking for a single seller account.",
  },
  {
    id: "sellerapp",
    name: "SellerApp",
    strength: "Combined research, listing, and analytics dashboard",
    bestFor:
      "Sellers wanting a mid-tier all-rounder with solid analytics",
    price: "Varies by plan",
    snapshot: "/assets/blog/tools/sellerapp.png",
    paragraphs: [
      "SellerApp positions itself as a mid-tier all-rounder, combining product research, listing support, and analytics in one dashboard. For sellers who don't need Helium 10's full feature depth but want more than a single-purpose profit tracker, it's a reasonable middle ground.",
    ],
    strengths:
      "Balanced feature set without the premium pricing of the largest suites.",
    tradeoff:
      "Individual analytics features tend to be less deep than a specialist tool built around just one function.",
  },
  {
    id: "perpetua-quartile",
    name: "Perpetua and Quartile",
    strength: "AI-driven PPC performance analytics and bid optimization",
    bestFor: "Sellers whose main analytics need is advertising ROI",
    price: "$49–$695/month",
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
        specifically, Perpetua and Quartile are purpose-built AI platforms for
        PPC analytics and bid automation. Third-party advertising specialists in
        this category typically run $49 to several hundred dollars a month
        depending on ad spend and feature tier, reflecting how directly they tie
        into revenue-driving campaigns rather than general reporting. If you
        also need hands-on campaign management, Xorora&apos;s{" "}
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
    strength:
      "Real-time profit and expense tracking, including hidden fees",
    bestFor:
      "Sellers who want a dedicated, lightweight profit dashboard",
    price: "Lower-cost, seller-focused pricing",
    snapshot: "/assets/blog/tools/sellerboard.png",
    paragraphs: [
      "Sellerboard has built a following as a lightweight, dedicated profit and expense dashboard, tracking real-time profitability including the hidden fees (returns, storage, advertising costs) that inflate-looking revenue numbers often hide. It's a common choice for sellers who specifically want profit clarity without paying for a full research-and-listing suite they won't use.",
    ],
    strengths:
      "Focused, affordable, and genuinely good at the one thing it's built for: knowing your real margin per SKU.",
    tradeoff:
      "Doesn't attempt product research or PPC optimization — it's analytics-only by design.",
  },
];

const CHOOSE = [
  {
    title: "Start with what you're actually trying to answer",
    body: '"What\'s my real profit per SKU" points toward Sellerboard or Helium 10\'s Profits module. "How\'s my category performing against competitors" points toward SmartScout. "Is my ad spend working" points toward Perpetua or Quartile.',
  },
  {
    title: "Resist the all-in-one instinct",
    body: "Most experienced sellers running 3–4 specialized tools together get better results than one suite tool trying to do everything at once, because analytics, research, and advertising genuinely need different data models to do well.",
  },
  {
    title: "Weigh subscription cost against your order volume",
    body: "A $99–$695/month tool makes obvious sense once you're processing enough orders that the time saved outweighs the cost. For a smaller catalog, a lighter, cheaper tool (or a custom-built dashboard scoped to exactly what you need) can be the more rational choice.",
  },
  {
    title: "Check how the tool actually uses AI",
    body: "Some platforms use AI meaningfully (generating written performance summaries, predictive forecasting); others use the term loosely for what's really a static dashboard. Ask specifically what the AI layer does before assuming it saves you analysis time.",
  },
];

const CUSTOM_TRIGGERS = [
  "You're running multiple brands or marketplaces and need one unified view, not several tool logins",
  "Your data needs to combine Amazon data with internal systems (accounting, inventory, CRM) that off-the-shelf tools don't integrate with",
  "You've outgrown what a generic dashboard shows and need AI-driven forecasting or anomaly detection built specifically around your SKUs and margins",
  "You're paying for three overlapping subscriptions and still assembling the real picture manually in a spreadsheet",
];

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "scroll-mt-[110px] mt-14 mb-5 font-bold font-sans text-[clamp(24px,2.8vw,32px)] text-fg1 tracking-[-0.02em]";

export function BestAiAnalyticsAmazonArticle() {
  return (
    <div>
      <p className={cn(bodyClass, "mb-10")}>
        <strong className="font-semibold text-fg1">Quick answer:</strong> No
        single AI analytics tool covers everything an Amazon seller needs well.
        Helium 10 offers the broadest analytics suite for most sellers, Jungle
        Scout leads on AI-generated business reports, SmartScout is the
        strongest for category and market-share intelligence, and Perpetua or
        Quartile are the better choice specifically for AI-driven PPC analytics.
        This guide compares each, plus when a custom-built dashboard makes more
        sense than stacking three or four subscriptions.
      </p>

      <h2 id="all-in-one-problem" className={h2Class}>
        The real problem with &quot;all-in-one&quot; Amazon analytics tools
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Most Amazon sellers eventually run into the same issue: a suite tool
        that does product research, listing optimization, PPC, and analytics all
        does each of those things at a fraction of the depth a specialist tool
        would. Analytics and sales tracking work best as their own category,
        separate from your keyword research tool and your ad optimizer, because
        the data models, refresh rates, and reporting needs are genuinely
        different. A tool built primarily for PPC bid automation is rarely also
        the best tool for profit and margin analytics, even if its dashboard
        claims to cover both.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        That&apos;s the lens this comparison uses: which{" "}
        <strong className="font-semibold text-fg1">
          Amazon seller analytics tools
        </strong>{" "}
        are actually strong at Amazon analytics specifically, not just
        &quot;AI-powered&quot; somewhere in their feature list.
      </p>

      <h2 id="quick-comparison" className={h2Class}>
        Quick comparison
      </h2>
      <div className="mb-10 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              {["Tool", "Core analytics strength", "Best for", "Starting price"].map(
                (col) => (
                  <th
                    key={col}
                    className="px-4 py-3.5 font-sans font-semibold text-[12.5px] text-fg3"
                  >
                    {col}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {TOOLS.map((tool, index) => (
              <tr
                key={tool.id}
                className={cn(
                  "border-border border-t",
                  index % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <td className="px-4 py-3.5 font-sans font-semibold text-[14.5px] text-fg1">
                  <a
                    href={`#${tool.id}`}
                    className="text-fg1 no-underline hover:text-xo-indigo"
                  >
                    {tool.name}
                  </a>
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {tool.strength}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {tool.bestFor}
                </td>
                <td className="px-4 py-3.5 font-sans text-[13.5px] text-fg2">
                  {tool.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {TOOLS.map((tool) => (
        <ToolSection key={tool.id} tool={tool} />
      ))}

      <h2 id="how-to-choose" className={h2Class}>
        How to choose the right tool for your business
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
        When an off-the-shelf tool isn&apos;t enough
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        For most sellers, one or two of the tools above genuinely cover the
        need. But sellers running multiple brands, multiple marketplaces, or a
        business intelligence stack that has to sit alongside internal systems
        (ERP, custom reporting, a proprietary pricing model) often hit a ceiling
        with subscription tools: the dashboard shows what the vendor decided to
        build, not necessarily what your specific business actually needs to
        see.
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
        for businesses whose data needs don&apos;t fit a generic seller tool,
        pulling data directly from Amazon&apos;s Selling Partner API, your
        accounting system, and any other source into one unified, purpose-built
        dashboard rather than three logins and three exports you have to
        reconcile manually. Sellers who also need ongoing account operations can
        pair that with{" "}
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
        infrastructure that powers a live profit-and-inventory dashboard rather
        than a report you have to remember to check. Publicly cited results
        across Xorora&apos;s broader engineering work include a 3.5x median
        speed-up compared to building the same system in-house and 99.9% uptime
        across deployed systems. For forecasting and anomaly detection layered
        on top of seller data, see also{" "}
        <TextLink href={ROUTES.mlDataScience}>
          ML &amp; data science services
        </TextLink>
        .
      </p>
      <h3 className="mt-6 mb-3 font-sans font-semibold text-[17px] text-fg1">
        When a custom build makes more sense than another subscription
      </h3>
      <ul className="mb-6 list-disc space-y-2 pl-5 font-sans text-[15.5px] text-fg2 leading-relaxed">
        {CUSTOM_TRIGGERS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className={cn(bodyClass, "mb-5")}>
        A scoped analytics build starts at $10,000, with pricing quoted against
        your actual data sources and reporting needs. If you want to see whether
        a custom dashboard would actually save you money against your current
        tool stack,{" "}
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
        <MetaItem label="Core analytics strength" value={tool.strength} />
        <MetaItem label="Best for" value={tool.bestFor} />
        <MetaItem label="Starting price" value={tool.price} />
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
