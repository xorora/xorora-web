"use client";

import { ArrowRight, Plus } from "lucide-react";
import { useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { XWatermark } from "@/components/geometry/x-watermark";
import { LetsTalkContactLink } from "@/components/modals";
import { ServiceFaq, StepApproach } from "@/components/services";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

const CHALLENGES = [
  {
    v: "30%",
    body: "yearly growth in AI governance spend shows rising compliance and risk pressures.",
    src: "Forrester",
    lift: "mt-24",
  },
  {
    v: "72%",
    body: "of companies use AI, but most still struggle to scale it.",
    src: "McKinsey & Company",
    lift: "",
  },
  {
    v: "60%",
    body: "of AI projects fail when organizations lack AI-ready data.",
    src: "Gartner",
    lift: "mt-12",
  },
] as const;

const SERVICES = [
  {
    icon: "bar-chart-3",
    name: "Data Analytics",
    body: "Dashboards, reporting, and decision intelligence that turn raw data into answers your teams can act on.",
  },
  {
    icon: "database-zap",
    name: "Data Engineering",
    body: "Reliable pipelines, warehouses, and lakehouses that make your data clean, governed, and analytics-ready.",
  },
  {
    icon: "cloud",
    name: "Cloud Engineering & Migration",
    body: "Modernize and migrate to the cloud with scalable, secure, cost-aware architecture built for AI workloads.",
  },
  {
    icon: "bot",
    name: "AI Agent Development",
    body: "Autonomous and assistive agents that automate workflows, reason over your data, and act within guardrails.",
  },
  {
    icon: "sigma",
    name: "ML & Data Science Services",
    body: "Custom models — from forecasting to computer vision — validated against real business outcomes.",
  },
  {
    icon: "workflow",
    name: "Workflow Automation Services",
    body: "Connect systems and automate processes end-to-end so your teams spend time on judgment, not busywork.",
  },
] as const;

const EVOLVE = [
  {
    t: "End-to-end expertise in data & AI",
    b: "From strategy through to execution, we combine deep technical skill with business insight to deliver solutions that matter.",
  },
  {
    t: "Proven frameworks and modern platforms",
    b: "We leverage leading technologies and reusable accelerators to scale faster, reduce risk, and deliver value sooner.",
  },
  {
    t: "Teams that integrate with yours",
    b: "Our experts become an extension of your organization, working closely with your stakeholders to solve your unique challenges.",
  },
  {
    t: "Business-outcome driven",
    b: "We focus on tangible business impact — improved decision-making, cost reduction, new revenue streams, or increased operational agility.",
  },
] as const;

const DELIVER_STEPS = [
  {
    n: "01",
    name: "Discover",
    body: "We assess your data landscape, goals, and constraints — mapping use cases, data readiness, and the highest-value opportunities before a line of code is written.",
  },
  {
    n: "02",
    name: "Validate",
    body: "We prototype fast and test against real data and KPIs, proving value and de-risking the approach before full investment.",
  },
  {
    n: "03",
    name: "Build",
    body: "We engineer production-grade data pipelines, models, and applications — secure, observable, and built to integrate with your existing stack.",
  },
  {
    n: "04",
    name: "Scale",
    body: "Expand AI and data capabilities across teams with a unified operational model. We optimize performance, enhance governance, build evaluation suites, and enable organizational adoption through training, change management, and multi-use-case rollout.",
  },
] as const;

const TOOL_TABS = ["LLMs", "Agent frameworks", "Vector stores"] as const;

const TOOL_DATA = [
  {
    items: [
      { name: "OpenAI", abbr: "Oa", color: "#0A0A0A" },
      { name: "Anthropic", abbr: "An", color: "#D2540F" },
      { name: "Gemini", abbr: "Gm", color: "#2C57C9" },
      { name: "DeepSeek", abbr: "Ds", color: "#2C57C9" },
      { name: "Llama", abbr: "Lm", color: "#0A0A0A" },
      { name: "Mistral", abbr: "Mi", color: "#D2540F" },
    ],
    more: "Grok · Cohere · Qwen · Phi · Command R",
  },
  {
    items: [
      { name: "LangChain", abbr: "Lc", color: "#1C7E6E" },
      { name: "LlamaIndex", abbr: "Li", color: "#8B5CF6" },
      { name: "CrewAI", abbr: "Cr", color: "#D2540F" },
      { name: "AutoGen", abbr: "AG", color: "#2C57C9" },
      { name: "Haystack", abbr: "Hs", color: "#1B9E77" },
      { name: "DSPy", abbr: "Dy", color: "#D2540F" },
    ],
    more: "Semantic Kernel · Pydantic AI · n8n · Temporal",
  },
  {
    items: [
      { name: "Pinecone", abbr: "Pc", color: "#0B7285" },
      { name: "Weaviate", abbr: "We", color: "#1B9E77" },
      { name: "Qdrant", abbr: "Qd", color: "#D2453E" },
      { name: "Chroma", abbr: "Ch", color: "#D9A23B" },
      { name: "Milvus", abbr: "Mv", color: "#2C57C9" },
      { name: "pgvector", abbr: "pg", color: "#336791" },
    ],
    more: "Redis · Elasticsearch · MongoDB Atlas",
  },
] as const;

const FAQS = [
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

export function DaiChallenges() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="The state of play"
        title="The real global challenges."
        sub="AI adoption is nearly universal — but value is not. The gap is data, governance, and the ability to scale."
        className="mb-14 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 items-start gap-6">
        {CHALLENGES.map((s) => (
          <div
            key={s.v}
            className={cn(
              "flex min-h-[320px] flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface shadow-sm",
              s.lift,
            )}
          >
            <div className="h-1 bg-xo-indigo" />
            <div className="flex flex-1 flex-col p-[clamp(26px,2.6vw,34px)]">
              <div className="mb-[18px] font-extrabold font-sans text-[clamp(44px,5vw,62px)] text-xo-indigo leading-[0.95] tracking-[-0.03em]">
                {s.v}
              </div>
              <p className="m-0 font-medium font-sans text-[16.5px] text-fg1 leading-normal">
                {s.body}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-7 font-sans text-[14.5px] text-fg2">
                {s.src}
                <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

export function DaiServices() {
  return (
    <LightSection bg="var(--slate-50)">
      <div className="svc-services-intro mb-[52px] grid grid-cols-[1fr_1.05fr] items-start gap-[clamp(32px,5vw,64px)]">
        <div>
          <Eyebrow className="mb-[18px]">What we engineer</Eyebrow>
          <h2 className="m-0 text-balance font-bold font-sans text-[clamp(30px,4vw,48px)] text-tangerine-500 leading-tight tracking-[-0.02em]">
            We deliver end-to-end data and AI services
          </h2>
        </div>
        <div className="pt-1.5">
          <p className="mb-[18px] font-medium font-sans text-[17.5px] text-fg1 leading-normal">
            We design, build, and operationalize solutions that turn insight
            into intelligent action.
          </p>
          <p className="m-0 font-sans text-base text-fg2 leading-relaxed">
            Our senior-led teams help organizations modernize data foundations,
            operationalize AI, and connect the full ecosystem — from pipelines
            and governance to analytics and automation — to accelerate growth
            and measurable outcomes.
          </p>
        </div>
      </div>
      <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
        {SERVICES.map((s) => (
          <LetsTalkContactLink
            key={s.name}
            className="group relative block h-full cursor-pointer overflow-hidden rounded-(--r-lg) border border-border bg-white p-[clamp(24px,2.6vw,32px)] no-underline shadow-sm transition-all hover:translate-y-[-3px] hover:border-border-strong hover:bg-surface hover:shadow-md"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-indigo-400 to-tangerine-500 transition-transform group-hover:scale-x-100" />
            <h3 className="mb-2.5 font-sans font-semibold text-[19px] text-fg1 leading-snug">
              {s.name}
            </h3>
            <p className="mb-4 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {s.body}
            </p>
            <span className="inline-flex items-center gap-[7px] font-sans font-semibold text-[13.5px] text-accent group-hover:text-tangerine-600">
              Learn more
              <ArrowRight className="h-[15px] w-[15px]" />
            </span>
          </LetsTalkContactLink>
        ))}
      </div>
      <LetsTalkContactLink className="group relative mt-[22px] block cursor-pointer overflow-hidden rounded-(--r-lg) border border-white/10 bg-navy-900 p-[clamp(28px,3.2vw,40px)] no-underline shadow-sm transition-all hover:translate-y-[-3px] hover:shadow-lg">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_92%_0%,rgba(70,76,159,0.5),transparent_60%)]" />
        <XWatermark
          size={300}
          color="rgba(120,150,240,0.07)"
          className="-right-10 bottom-[-130px]"
        />
        <div className="relative flex flex-wrap items-center gap-[clamp(20px,3vw,40px)]">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-(--r-md) bg-tangerine-500 text-white">
            <Plus className="h-7 w-7" />
          </span>
          <div className="min-w-[240px] flex-1">
            <h3 className="mb-2 font-sans font-semibold text-[22px] text-white leading-snug">
              Not sure where to start?
            </h3>
            <p className="m-0 max-w-[620px] font-sans text-[15.5px] text-white/70 leading-relaxed">
              Every organization is different. Let&apos;s map your data
              maturity, your goals, and where AI can make the biggest impact for
              your team.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 whitespace-nowrap font-sans font-semibold text-[15px] text-tangerine-400">
            Let&apos;s talk
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </LetsTalkContactLink>
    </LightSection>
  );
}

export function DaiEvolve() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#15225C] via-[#1E3784] to-[#2A4FBD] px-8 py-[clamp(72px,9vw,118px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_82%_14%,rgba(140,175,255,0.55),transparent_56%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <h2 className="mx-auto mb-14 max-w-[820px] text-balance text-center font-bold font-sans text-[clamp(30px,4.2vw,52px)] text-white leading-tight tracking-[-0.02em]">
          Data and AI that evolve with your needs
        </h2>
        <div className="svc-grid4 grid grid-cols-4 gap-5">
          {EVOLVE.map((c) => (
            <div
              key={c.t}
              className="relative flex min-h-[300px] flex-col overflow-hidden rounded-(--r-lg) border border-white/20 bg-white/10 p-[clamp(24px,2.4vw,30px)] backdrop-blur-lg"
            >
              <h3 className="m-0 font-sans font-semibold text-white text-xl leading-snug tracking-[-0.01em]">
                {c.t}
              </h3>
              <p className="mt-auto mb-0 pt-8 font-sans text-[14.5px] text-white/74 leading-relaxed">
                {c.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DaiDeliver() {
  return (
    <StepApproach
      label=""
      title="How we deliver AI and data innovation"
      steps={[...DELIVER_STEPS]}
      gradientId="daiDeliverDia"
    />
  );
}

export function DaiTools() {
  const [tab, setTab] = useState(0);
  const cur = TOOL_DATA[tab] ?? TOOL_DATA[0];

  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="Tools & technologies"
        align="center"
        className="mb-[30px]"
      />
      <div className="mb-12 flex justify-center gap-1">
        {TOOL_TABS.map((t, i) => {
          const on = tab === i;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setTab(i)}
              className={cn(
                "relative cursor-pointer border-none bg-transparent px-[18px] py-2.5 font-sans font-semibold text-[15.5px] transition-colors",
                on ? "text-xo-indigo" : "text-fg2",
              )}
            >
              {t}
              <span
                className={cn(
                  "absolute inset-x-3.5 bottom-0 h-0.5 rounded-sm bg-xo-indigo transition-transform",
                  on ? "scale-x-100" : "scale-x-0",
                )}
              />
            </button>
          );
        })}
      </div>
      <div className="mx-auto max-w-[1000px] overflow-hidden rounded-(--r-lg) border border-border bg-surface shadow-sm">
        <div className="dai-tech-row grid grid-cols-6">
          {cur.items.map((it, i) => (
            <div
              key={it.name}
              className={cn(
                "flex flex-col items-center gap-[18px] border-border border-b px-3 py-[30px]",
                i % 6 !== 5 && "border-r",
              )}
            >
              <span className="text-center font-mono text-[10.5px] text-slate-500 uppercase tracking-[0.14em]">
                {it.name}
              </span>
              <span
                className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border font-bold font-sans text-[15px]"
                style={{
                  background: `${it.color}1A`,
                  borderColor: `${it.color}40`,
                  color: it.color,
                }}
              >
                {it.abbr}
              </span>
            </div>
          ))}
        </div>
        <div className="px-4 py-[18px] text-center font-sans text-[13.5px] text-fg3">
          <span className="text-slate-500">and more — </span>
          {cur.more}
        </div>
      </div>
    </LightSection>
  );
}

export function DaiFAQ() {
  return (
    <ServiceFaq
      title="Frequently asked questions"
      items={[...FAQS]}
      layout="center"
      bg="var(--surface)"
    />
  );
}

export function DaiContact() {
  return (
    <section className="bg-navy-950 px-8 py-[clamp(64px,8vw,104px)]">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-(--r-xl) border border-white/10 bg-navy-900 p-[clamp(32px,4.5vw,60px)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_90%_0%,rgba(70,76,159,0.45),transparent_58%)]" />
        <div className="svc-contact-grid relative grid grid-cols-[0.92fr_1.08fr] gap-[clamp(36px,5vw,64px)]">
          <div>
            <h2 className="mb-[22px] font-extrabold font-sans text-[clamp(30px,3.8vw,46px)] text-white leading-tight tracking-tight">
              Let&apos;s build with your data.
            </h2>
            <p className="mb-7 max-w-[420px] font-sans text-base text-white/66 leading-relaxed">
              Tell us about your data, your goals, and where you want AI to make
              an impact. We respond within one business day with next steps and
              a preliminary plan.
            </p>
          </div>
          <div className="flex items-center rounded-(--r-lg) border border-white/10 bg-white/3 p-[clamp(24px,3vw,32px)]">
            <LetsTalkContactLink className="font-sans font-semibold text-base text-tangerine-400 no-underline hover:text-tangerine-300">
              Submit a request →
            </LetsTalkContactLink>
          </div>
        </div>
      </div>
    </section>
  );
}
