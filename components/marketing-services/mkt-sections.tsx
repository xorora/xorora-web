"use client";

import {
  Activity,
  ArrowRight,
  BadgeDollarSign,
  Briefcase,
  GitCompareArrows,
  Layers,
  MapPin,
  SearchCheck,
  Share2,
  ThumbsUp,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { SignalField } from "@/components/geometry/signal-field";
import { XWatermark } from "@/components/geometry/x-watermark";
import { LetsTalkContactLink } from "@/components/modals";
import { DiamondStack } from "@/components/services/diamond-stack";
import { buttonClassName } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

function MktEyebrow({
  children,
  color = "text-tangerine-500",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className={cn("h-0.5 w-[26px] rounded-sm bg-current", color)} />
      <span
        className={cn(
          "font-sans font-semibold text-[13px] uppercase tracking-[0.18em]",
          color,
        )}
      >
        {children}
      </span>
    </div>
  );
}

const TRUST = [
  "AVG 3.1× ROAS IMPROVEMENT",
  "−47% COST PER LEAD",
  "+280% ORGANIC REACH",
] as const;

const BENCHMARK = [
  { num: "+312", unit: "%", label: "Avg organic traffic lift" },
  { num: "4.8", unit: "×", label: "ROAS on optimized ad spend" },
  { num: "−41", unit: "%", label: "Cost per qualified lead" },
  { num: "+2.3", unit: "×", label: "B2B pipeline velocity" },
] as const;

const DELIVER_STEPS = [
  {
    n: "01",
    name: "Map",
    body: "We instrument your funnel and map audience signal — where demand lives, what converts, and where revenue leaks today. Nothing is optimized before it is measured.",
  },
  {
    n: "02",
    name: "Architect",
    body: "We design the conversion architecture: channels, messaging, tracking, and the offer system that moves intent to pipeline — a blueprint, not a guess.",
  },
  {
    n: "03",
    name: "Activate",
    body: "We launch instrumented campaigns across search, social, and paid. Every asset is tagged, every dollar attributed, every experiment logged.",
  },
  {
    n: "04",
    name: "Compound",
    body: "We optimize on live data — reallocating spend to winners weekly and compounding search equity and pipeline velocity long after launch.",
  },
] as const;

const SERVICES = [
  {
    icon: SearchCheck,
    plain: "SEO",
    name: "Search Equity Engineering",
    body: "Technical SEO, content systems, and authority building that compound organic visibility into a durable acquisition channel.",
    tags: ["TECHNICAL SEO", "CONTENT", "LINK EQUITY"],
    featured: false,
  },
  {
    icon: MapPin,
    plain: "Local SEO",
    name: "Local Signal Optimization",
    body: "Google Business Profile, citations, and review velocity tuned so you own the map pack across every service area.",
    tags: ["GBP", "CITATIONS", "REVIEWS"],
    featured: false,
  },
  {
    icon: BadgeDollarSign,
    plain: "Google Ads",
    name: "Paid Search Architecture",
    body: "Search, Shopping, and Performance Max structured for intent — bid systems and feeds engineered for profitable ROAS.",
    tags: ["SEM", "SHOPPING", "PMAX"],
    featured: false,
  },
  {
    icon: ThumbsUp,
    plain: "Meta Ads",
    name: "Social Demand Generation",
    body: "Prospecting and retargeting funnels with creative testing loops that turn cold audiences into measurable pipeline.",
    tags: ["PROSPECTING", "RETARGETING", "CREATIVE"],
    featured: false,
  },
  {
    icon: Share2,
    plain: "Social Media",
    name: "Audience Signal Management",
    body: "Organic presence run as a signal system — content, community, and analytics that feed the rest of the funnel.",
    tags: ["ORGANIC", "COMMUNITY", "ANALYTICS"],
    featured: false,
  },
  {
    icon: Briefcase,
    plain: "B2B Marketing",
    name: "B2B Pipeline Engineering",
    body: "Account-based programs and full-funnel demand gen wired to your CRM — attribution from first touch to closed revenue.",
    tags: ["ABM", "DEMAND GEN", "ATTRIBUTION"],
    featured: true,
  },
] as const;

const STATS = [
  { num: "312", unit: "%", label: "Avg organic growth" },
  { num: "4.8", unit: "×", label: "Paid media ROAS" },
  { num: "−52", unit: "%", label: "Cost per acquisition" },
  { num: "89", unit: "%", label: "More qualified leads" },
] as const;

const PROJECTS = [
  {
    tag: "E-COMMERCE · PAID SEARCH",
    name: "Confidential client",
    result: "4.2× ROAS in 90 days",
    desc: "Rebuilt the Shopping feed and migrated to Performance Max with profit-tiered bids. Scaled spend 3× while holding target ROAS.",
    meta: "Q1 2025 · 90-day sprint",
    tags: ["PMAX", "SHOPPING", "CRO"],
  },
  {
    tag: "LOCAL SERVICES · SEO",
    name: "Confidential client",
    result: "Top-3 maps across 14 areas",
    desc: "Engineered a local signal system — GBP optimization, geo-content, and review velocity — lifting booked-call volume 2.6×.",
    meta: "Q3 2024 · 6-month engagement",
    tags: ["GBP", "LOCAL CONTENT", "REVIEWS"],
  },
  {
    tag: "B2B SAAS · FULL FUNNEL",
    name: "Confidential client",
    result: "$4.1M pipeline · −38% CAC",
    desc: "Stood up an ABM motion wired to the CRM with closed-loop attribution, compounding MQL-to-SQL conversion quarter over quarter.",
    meta: "Q4 2024 · Ongoing",
    tags: ["ABM", "DEMAND GEN", "ATTRIBUTION"],
  },
] as const;

const DIFFERENCE = [
  {
    icon: Activity,
    title: "Instrumented from day one",
    body: "Every channel is wired to analytics and attribution before launch. If it can't be measured, we don't ship it.",
  },
  {
    icon: Layers,
    title: "One team, full funnel",
    body: "Search, social, paid, and lifecycle under one engineering-led roof. No agency hand-offs, no dropped context.",
  },
  {
    icon: GitCompareArrows,
    title: "Spend follows signal",
    body: "We reallocate budget to what converts, weekly. No set-and-forget media plans, no vanity spend.",
  },
  {
    icon: TrendingUp,
    title: "Built to compound",
    body: "Search equity and pipeline velocity that keep growing after a campaign ends. We build assets, not ads.",
  },
] as const;

export function MktHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-linear-to-br from-navy-700 via-38% via-[#15225C] to-[#2C57C9] pt-[72px]">
      <SignalField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_88%_30%,rgba(120,160,255,0.5)_0%,rgba(60,100,220,0.18)_34%,transparent_64%)]" />
      <div className="svc-wrap relative z-5 px-8 py-[clamp(88px,10vw,132px)]">
        <div className="mkt-hero-grid grid grid-cols-[1.05fr_0.95fr] items-center gap-[clamp(40px,5vw,72px)]">
          <div>
            <MktEyebrow>Marketing Services</MktEyebrow>
            <h1 className="hero-reveal hero-reveal-1 mt-[26px] mb-6 font-extrabold font-sans text-[clamp(40px,5.5vw,68px)] text-white uppercase leading-tight tracking-[-0.02em]">
              We <span className="text-tangerine-400">engineer growth.</span> We
              don&apos;t guess at it.
            </h1>
            <p className="hero-reveal hero-reveal-2 mb-10 max-w-[540px] font-sans text-lg text-white/82 leading-relaxed">
              Every channel is a system — instrumented, attributed, and tuned
              for pipeline, not vanity metrics. We build the conversion
              architecture that turns audience signal into qualified revenue.
            </p>
            <LetsTalkContactLink
              className={buttonClassName({ variant: "primary", size: "lg" })}
            >
              Engineer my growth
              <ArrowRight className="h-[17px] w-[17px]" />
            </LetsTalkContactLink>
            <div className="mt-12 flex flex-wrap items-center gap-[18px]">
              {TRUST.map((t, i) => (
                <span key={t} className="flex items-center gap-[18px]">
                  {i > 0 && <span className="h-3.5 w-px bg-white/28" />}
                  <span className="font-mono text-white/72 text-xs tracking-[0.06em]">
                    {t}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div className="relative rounded-[var(--r-xl)] border border-white/22 bg-white/9 p-[clamp(26px,3vw,36px)] backdrop-blur-[18px]">
            <div className="mb-[5px] font-mono text-[11px] text-tangerine-400 uppercase tracking-[0.12em]">
              Benchmark Improvements
            </div>
            <div className="mb-[22px] font-mono text-[10.5px] text-slate-500">
              Based on optimized campaign performance
            </div>
            {BENCHMARK.map((r, i) => (
              <div
                key={r.label}
                className={cn("py-4", i > 0 && "border-white/6 border-t")}
              >
                <div className="flex items-baseline gap-[3px]">
                  <span className="font-bold font-sans text-[42px] text-white leading-none tracking-[-0.02em]">
                    {r.num}
                  </span>
                  <span className="font-sans font-semibold text-2xl text-indigo-400">
                    {r.unit}
                  </span>
                </div>
                <div className="mt-2 font-medium font-mono text-[11px] text-slate-400 uppercase tracking-[0.04em]">
                  {r.label}
                </div>
              </div>
            ))}
            <div className="mt-[18px] font-mono text-[10px] text-slate-600 italic leading-snug">
              Performance benchmarks from our engineering-led campaigns
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MktDeliver() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-950 px-8 py-[clamp(96px,11vw,120px)]">
      <div className="svc-wrap mx-auto max-w-[1180px]">
        <MktEyebrow color="text-tangerine-400">How we work</MktEyebrow>
        <h2 className="mt-[18px] mb-11 text-balance font-bold font-sans text-[clamp(28px,4vw,46px)] text-white leading-tight tracking-[-0.02em]">
          How we engineer growth.
        </h2>
        <div className="svc-deliver-grid grid grid-cols-[0.92fr_1.08fr] items-stretch gap-[clamp(32px,5vw,72px)] border-indigo-800 border-t">
          <div className="flex flex-col justify-center pt-9">
            <div className="font-extrabold font-sans text-[clamp(56px,7vw,96px)] text-white leading-[0.9] tracking-[-0.04em]">
              {DELIVER_STEPS[active]?.n}
            </div>
            <div className="flex justify-center py-6 pb-2">
              <DiamondStack active={active} gradientId="mktDeliverDia" />
            </div>
          </div>
          <div className="border-indigo-800 border-l">
            {DELIVER_STEPS.map((step, i) => {
              const on = active === i;
              return (
                <button
                  key={step.n}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "block w-full cursor-pointer border-indigo-800 border-b px-[clamp(20px,2.4vw,32px)] py-[clamp(18px,2vw,24px)] text-left transition-colors",
                    on ? "bg-indigo-900/8" : "bg-transparent",
                  )}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={cn(
                        "font-mono text-[13px]",
                        on ? "text-tangerine-400" : "text-slate-500",
                      )}
                    >
                      {step.n}
                    </span>
                    <h3
                      className={cn(
                        "m-0 font-bold font-sans text-[clamp(20px,2.2vw,26px)]",
                        on ? "text-indigo-300" : "text-white",
                      )}
                    >
                      {step.name}
                    </h3>
                  </div>
                  <div
                    className="grid transition-[grid-template-rows] duration-300"
                    style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="m-0 max-w-[620px] pt-3.5 pl-[29px] font-sans text-[15px] text-slate-400 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MktServices() {
  return (
    <section className="relative bg-navy-900 px-8 py-[clamp(96px,11vw,120px)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(rgba(70,76,159,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="svc-wrap relative mx-auto max-w-[1180px]">
        <MktEyebrow>Our marketing services</MktEyebrow>
        <h2 className="mt-[18px] mb-14 max-w-[720px] text-balance font-extrabold font-sans text-[clamp(32px,5vw,56px)] text-white uppercase leading-tight tracking-[-0.02em]">
          Channels, built as systems
        </h2>
        <div className="mkt-services-grid grid grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <LetsTalkContactLink
              key={s.name}
              className={cn(
                "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl p-7 no-underline transition-all hover:translate-y-[-3px]",
                s.featured
                  ? "border border-indigo-500 bg-indigo-800 shadow-[inset_0_1px_0_rgba(107,112,182,0.4)]"
                  : "border border-indigo-900/20 bg-white/2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-indigo-900/45 hover:shadow-lg",
              )}
            >
              {s.featured && (
                <span className="absolute top-4 right-[18px] font-mono text-[10.5px] text-tangerine-400 tracking-[0.14em]">
                  FEATURED
                </span>
              )}
              <div className="mb-[18px] flex items-center gap-[13px]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-[rgba(70,76,159,0.35)] bg-[rgba(70,76,159,0.16)] text-indigo-400">
                  <s.icon className="h-[21px] w-[21px]" />
                </span>
                <span className="font-mono text-[10.5px] text-slate-500 uppercase tracking-[0.12em]">
                  {s.plain}
                </span>
              </div>
              <h3 className="mb-2.5 font-sans font-semibold text-[19px] text-white leading-snug">
                {s.name}
              </h3>
              <p
                className={cn(
                  "mb-[18px] font-sans text-sm leading-relaxed",
                  s.featured ? "text-white/72" : "text-slate-400",
                )}
              >
                {s.body}
              </p>
              <div className="mt-auto flex flex-wrap gap-[7px]">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-indigo-900/25 bg-indigo-900/12 px-[9px] py-[5px] font-mono text-[10px] text-indigo-300 tracking-[0.06em]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </LetsTalkContactLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MktResults() {
  return (
    <section className="bg-white px-8 py-[clamp(96px,11vw,120px)]">
      <div className="svc-wrap mx-auto max-w-[1180px]">
        <MktEyebrow color="text-tangerine-600">Engineered outcomes</MktEyebrow>
        <h2 className="mt-[18px] mb-[52px] max-w-[720px] font-extrabold font-sans text-[clamp(32px,4.6vw,52px)] text-xo-ink uppercase leading-tight tracking-[-0.02em]">
          Outcomes you can measure
        </h2>
        <div className="mkt-results-stats mb-[72px] grid grid-cols-4 gap-7">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="border-indigo-200 border-l-[3px] pl-6"
            >
              <div className="flex items-baseline gap-[3px]">
                <span className="font-extrabold font-sans text-[clamp(46px,5vw,64px)] text-xo-ink leading-[0.95] tracking-[-0.03em]">
                  {s.num}
                </span>
                <span className="font-bold font-sans text-4xl text-indigo-500">
                  {s.unit}
                </span>
              </div>
              <div className="mt-3.5 mb-1.5 font-medium font-mono text-slate-500 text-xs uppercase tracking-widest">
                {s.label}
              </div>
              <div className="font-sans text-[11px] text-slate-400">
                campaign benchmark
              </div>
            </div>
          ))}
        </div>
        <p className="mb-4 font-mono text-[10px] text-slate-400 leading-relaxed">
          * Featured projects are representative engagements. Client names
          withheld by NDA.
        </p>
        <div className="mkt-projects grid grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.tag}
              className="group flex flex-col rounded-2xl border border-slate-200 border-t-[3px] border-t-indigo-500 bg-slate-50 p-7 transition-all hover:translate-y-[-3px] hover:border-t-tangerine-500 hover:shadow-md"
            >
              <div className="mb-4 font-mono text-[10.5px] text-xo-indigo tracking-widest">
                {p.tag}
              </div>
              <div className="mb-1.5 font-sans font-semibold text-slate-500 text-sm">
                {p.name}
              </div>
              <h3 className="mb-3 font-bold font-sans text-xl text-xo-ink leading-snug">
                {p.result}
              </h3>
              <p className="mb-[18px] font-sans text-slate-600 text-sm leading-relaxed">
                {p.desc}
              </p>
              <div className="mb-4 flex flex-wrap gap-[7px]">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-[5px] border border-indigo-100 bg-indigo-50 px-2 py-1 font-mono text-[10px] text-indigo-700 tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto font-sans text-[13px] text-slate-400">
                {p.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MktDifference() {
  return (
    <section className="relative overflow-hidden bg-navy-950 px-8 py-[clamp(96px,11vw,120px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_15%_25%,rgba(70,76,159,0.28),transparent_60%)]" />
      <XWatermark
        size={520}
        color="rgba(120,150,240,0.04)"
        className="-right-40 bottom-[-240px]"
      />
      <div className="svc-wrap relative mx-auto max-w-[1180px]">
        <MktEyebrow color="text-tangerine-400">
          The Xorora difference
        </MktEyebrow>
        <h2 className="mt-[18px] mb-12 max-w-[640px] text-balance font-bold font-sans text-[clamp(28px,4vw,46px)] text-white leading-tight tracking-[-0.02em]">
          Marketing that reports to revenue.
        </h2>
        <div className="mkt-diff-grid grid grid-cols-2 gap-5">
          {DIFFERENCE.map((c) => (
            <div
              key={c.title}
              className="relative flex gap-[18px] overflow-hidden rounded-2xl border border-white/12 bg-white/4 p-[clamp(24px,2.6vw,30px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <span className="relative flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] border border-[rgba(120,150,240,0.32)] bg-[rgba(70,76,159,0.28)] text-indigo-300">
                <c.icon className="h-[22px] w-[22px]" />
              </span>
              <div>
                <h3 className="mb-2 font-sans font-semibold text-lg text-white leading-snug">
                  {c.title}
                </h3>
                <p className="m-0 font-sans text-[14.5px] text-slate-400 leading-relaxed">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MktCta() {
  return (
    <section
      id="mkt-contact"
      className="relative overflow-hidden bg-linear-to-br from-indigo-900 to-navy-950 px-8 py-[clamp(96px,11vw,120px)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_35%,rgba(70,76,159,0.4),transparent_62%)]" />
      <div className="svc-wrap relative mx-auto max-w-[1180px]">
        <div className="mkt-cta-grid grid grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(36px,5vw,72px)]">
          <div>
            <MktEyebrow color="text-tangerine-400">
              Start the conversation
            </MktEyebrow>
            <h2 className="mt-[22px] mb-[22px] font-extrabold font-sans text-[clamp(34px,4.6vw,52px)] text-white uppercase leading-tight tracking-[-0.02em]">
              Let&apos;s engineer your growth.
            </h2>
            <p className="m-0 max-w-[420px] font-sans text-[16.5px] text-slate-400 leading-relaxed">
              Tell us where you want growth and we&apos;ll map the channels, the
              architecture, and the numbers that get you there.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/3 p-[clamp(26px,3vw,38px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <LetsTalkContactLink
              className={buttonClassName({
                variant: "primary",
                size: "lg",
                className:
                  "w-full justify-center bg-tangerine-500 text-xo-ink hover:bg-tangerine-600",
              })}
            >
              Engineer my growth
              <ArrowRight className="h-[17px] w-[17px]" />
            </LetsTalkContactLink>
            <p className="mt-4 text-center font-mono text-[11px] text-slate-500">
              No commitment. We&apos;ll respond within 1 business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MktRule() {
  return <div className="h-px w-full bg-indigo-800" />;
}
