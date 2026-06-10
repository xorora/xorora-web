import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Box,
  Braces,
  BrainCircuit,
  Cloud,
  Code2,
  Compass,
  CreditCard,
  Database,
  Flame,
  LayoutTemplate,
  Leaf,
  PenTool,
  Rocket,
  Server,
  Ship,
  Sparkles,
  Triangle,
  Wind,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DarkSection } from "@/components/case-study/dark-section";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { OutcomeGrid, ServiceCardGrid } from "@/components/services";
import { NavIcon } from "@/components/ui/nav-icon";
import {
  type CaseStudyCardData,
  listPublishedCaseStudies,
  toCaseStudyCards,
} from "@/lib/case-studies";
import { ROUTES } from "@/lib/navigation";
import { listIndustryNavItems } from "@/lib/navigation/server";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    icon: "cpu",
    name: "AI Software Development",
    body: "Applied ML, LLMs, RAG, and agents engineered for your data and domain.",
  },
  {
    icon: "app-window",
    name: "Custom App Development",
    body: "Web and mobile products built full stack, from interface to infrastructure.",
  },
  {
    icon: "layers",
    name: "Application Modernization",
    body: "A flexible, API-first layer over legacy systems so you ship faster without a full rewrite.",
  },
  {
    icon: "rocket",
    name: "MVP / POC Development",
    body: "A focused prototype that proves value and gets you to traction fast.",
  },
  {
    icon: "file-code-2",
    name: "CMS Development Services",
    body: "Headless and custom CMS builds that give your team control without engineering bottlenecks.",
  },
  {
    icon: "pen-tool",
    name: "UI/UX Services",
    body: "Research-led product design that turns complex workflows into intuitive experiences.",
  },
] as const;

const OUTCOMES = [
  {
    icon: "gauge",
    title: "Performance you can measure",
    body: "We optimize for the numbers that move your business, not lines of code. Latency, conversion, uptime, cost.",
  },
  {
    icon: "shield-check",
    title: "Quality built in",
    body: "Tests, reviews, observability, and guardrails come standard, never bolted on at the end.",
  },
  {
    icon: "trending-up",
    title: "Built to scale",
    body: "Modular, documented architecture so the MVP grows into your platform without a rebuild.",
  },
  {
    icon: "handshake",
    title: "Senior, embedded delivery",
    body: "Experienced engineers who own the outcome and work like an extension of your team.",
  },
] as const;

const APPROACH = [
  {
    n: "01",
    icon: Compass,
    name: "Discover",
    body: "We learn your domain, goals, and constraints, then scope a costed, de-risked roadmap with clear milestones.",
  },
  {
    n: "02",
    icon: PenTool,
    name: "Design",
    body: "Architecture, data models, and interfaces, validated with your users before a line of production code.",
  },
  {
    n: "03",
    icon: Code2,
    name: "Build",
    body: "Short, demoable sprints with AI woven through delivery. You see working software every week.",
  },
  {
    n: "04",
    icon: Rocket,
    name: "Launch & scale",
    body: "We ship to production, instrument for insight, and harden the platform so it scales with your business.",
  },
] as const;

const TECH: Array<[LucideIcon, string]> = [
  [Atom, "React"],
  [Atom, "Next.js"],
  [Braces, "TypeScript"],
  [Wind, "Tailwind CSS"],
  [Triangle, "Vue"],
  [Flame, "Angular"],
  [Server, "Node.js"],
  [Code2, "Python"],
  [Database, "PostgreSQL"],
  [Leaf, "MongoDB"],
  [Zap, "Redis"],
  [Box, "Docker"],
  [Ship, "Kubernetes"],
  [Cloud, "AWS"],
  [Cloud, "GCP"],
  [Triangle, "Vercel"],
  [Sparkles, "OpenAI"],
  [BrainCircuit, "LangChain"],
  [CreditCard, "Stripe"],
  [LayoutTemplate, "WordPress"],
];

export function EngServices() {
  return (
    <ServiceCardGrid
      label="What we build"
      title="Our engineering services."
      sub="One team across the full delivery arc: strategy, design, frontend, backend, and the AI that powers it."
      items={[...SERVICES]}
    />
  );
}

export function EngOutcomes() {
  return (
    <OutcomeGrid
      title="Measurable outcomes, not just code."
      sub="Anyone can write software. We engineer the result, instrumented, reliable, and tied to the metrics you care about."
      items={[...OUTCOMES]}
    />
  );
}

export async function EngResults() {
  const studies = await listPublishedCaseStudies();
  const cases = toCaseStudyCards(studies, 3);

  return (
    <LightSection bg="var(--slate-50)">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <SectionHead label="Proof of work" title="Real engineering results." />
        <Link
          href={ROUTES.ourWork}
          className="inline-flex items-center gap-2 font-sans font-semibold text-[14.5px] text-accent no-underline"
        >
          View all work
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <div className="svc-grid3 grid grid-cols-3 gap-6">
        {cases.map((c) => (
          <EngCaseCard key={c.href} {...c} />
        ))}
      </div>
    </LightSection>
  );
}

function EngCaseCard({
  href,
  img,
  tag,
  title,
  stat,
  statLabel,
}: CaseStudyCardData) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block min-h-[360px] overflow-hidden rounded-r-xl border border-white/10 bg-[#080C1E] no-underline",
        "shadow-[0_22px_56px_-34px_rgba(8,12,30,0.5)] transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_36px_80px_-34px_rgba(8,12,30,0.7)]",
      )}
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,12,30,0.25)] via-[rgba(8,12,30,0.55)] to-[#080C1E]" />
      <span className="absolute top-[18px] left-[18px] rounded-pill bg-white px-[13px] py-1.5 font-sans font-semibold text-xo-ink text-xs">
        {tag}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-[clamp(22px,2.4vw,28px)]">
        <h3 className="mb-4 font-bold font-sans text-[clamp(18px,1.7vw,22px)] text-white leading-tight">
          {title}
        </h3>
        <div className="flex items-center justify-between border-white/18 border-t pt-3.5">
          <div>
            <div className="font-extrabold font-sans text-[22px] text-tangerine-400 leading-none tracking-[-0.02em]">
              {stat}
            </div>
            <div className="mt-1 font-sans text-white/65 text-xs">
              {statLabel}
            </div>
          </div>
          <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-xo-indigo text-white transition-all group-hover:bg-white group-hover:text-xo-ink">
            <ArrowUpRight className="h-[19px] w-[19px]" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function EngTechStack() {
  const half = Math.ceil(TECH.length / 2);
  const rowA = [...TECH.slice(0, half), ...TECH.slice(0, half)];
  const rowB = [...TECH.slice(half), ...TECH.slice(half)];

  return (
    <section className="overflow-hidden border-border border-t bg-surface py-[clamp(72px,9vw,118px)]">
      <div className="mx-auto mb-12 max-w-[1180px] px-8">
        <SectionHead
          label="Engineering"
          title="Product engineering technology stacks."
          sub="We leverage modern frameworks, cloud platforms, and data technologies to build scalable engineering solutions."
        />
      </div>
      <TechRow items={rowA} className="eng-tmq-a" />
      <TechRow items={rowB} className="eng-tmq-b mt-4" />
    </section>
  );
}

function TechRow({
  items,
  className,
}: {
  items: Array<[LucideIcon, string]>;
  className?: string;
}) {
  return (
    <div className="eng-tmq-wrap">
      <div className={cn("eng-tmq flex gap-4", className)}>
        {items.map(([Icon, name]) => (
          <div
            key={name}
            className="flex shrink-0 items-center gap-3 rounded-r-md border border-border bg-slate-50 px-6 py-[15px] shadow-xs"
          >
            <Icon className="h-[19px] w-[19px] text-xo-indigo" aria-hidden />
            <span className="whitespace-nowrap font-sans font-semibold text-[15px] text-fg1">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EngApproach() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="How we work"
        title="Our approach."
        sub="A proven delivery lifecycle that adapts to your stage, your stack, and your team."
        align="center"
        className="mb-[52px]"
      />
      <div className="svc-grid4 grid grid-cols-4 gap-5">
        {APPROACH.map((s) => (
          <div
            key={s.n}
            className="relative overflow-hidden rounded-r-lg border border-border bg-slate-50 p-[clamp(24px,2.6vw,30px)]"
          >
            <div className="mb-[18px] flex items-center justify-between">
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-r-md bg-indigo-50 text-xo-indigo">
                <s.icon className="h-[22px] w-[22px]" aria-hidden />
              </span>
              <span className="font-mono text-slate-400 text-xs tracking-widest">
                {s.n}
              </span>
            </div>
            <h3 className="mb-2.5 font-sans font-semibold text-[18.5px] text-fg1">
              {s.name}
            </h3>
            <p className="m-0 font-sans text-fg2 text-sm leading-relaxed">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

export async function EngIndustries() {
  const industries = await listIndustryNavItems();

  return (
    <DarkSection bloom="50% 4%">
      <SectionHead
        label="Where we build"
        title="Engineered for your industry."
        sub="Deep domain knowledge across nine sectors. Explore how we build for yours."
        onDark
        align="center"
        className="mb-12"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-4">
        {industries.map((ind) => (
          <Link
            key={ind.name}
            href={ind.href}
            className={cn(
              "group flex items-center gap-3.5 rounded-r-lg border border-white/12 bg-white/4 px-5 py-[18px] no-underline transition-all duration-200",
              "hover:-translate-y-0.5 hover:border-indigo-300/50",
            )}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-r-md border border-indigo-300/32 bg-indigo-900/28 text-indigo-300 transition-all group-hover:bg-xo-indigo group-hover:text-white">
              <NavIcon name={ind.icon} className="h-[21px] w-[21px]" />
            </span>
            <span className="flex-1 font-sans font-semibold text-base text-white">
              {ind.name}
            </span>
            <ArrowUpRight className="h-[18px] w-[18px] text-white/40 transition-colors group-hover:text-tangerine-400" />
          </Link>
        ))}
      </div>
    </DarkSection>
  );
}

export function EngContact() {
  return (
    <section className="bg-navy-950 px-8 py-[clamp(64px,8vw,104px)]">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-r-xl border border-white/10 bg-navy-900 p-[clamp(32px,4.5vw,60px)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_90%_0%,rgba(70,76,159,0.4),transparent_58%)]" />
        <div className="svc-contact-grid relative grid grid-cols-[0.92fr_1.08fr] gap-[clamp(36px,5vw,64px)]">
          <div className="flex flex-col">
            <h2 className="mb-[22px] font-extrabold font-sans text-[clamp(30px,3.8vw,46px)] text-white leading-tight tracking-tight">
              Let&apos;s build your platform.
            </h2>
            <p className="mb-7 max-w-[420px] font-sans text-base text-white/66 leading-relaxed">
              Tell us what you want to build. We respond within one business day
              with next steps and a preliminary estimate.
            </p>
            <LetsTalkContactLink
              className={cn(
                "mt-auto inline-flex w-fit items-center gap-2 rounded-r-md bg-xo-indigo px-[30px] py-[15px]",
                "font-sans font-semibold text-base text-white no-underline transition-all hover:bg-indigo-600",
              )}
            >
              Submit request
              <ArrowUpRight className="h-4 w-4" />
            </LetsTalkContactLink>
          </div>
          <div className="rounded-r-lg border border-white/10 bg-white/3 p-[clamp(24px,3vw,32px)]">
            <p className="m-0 font-sans text-[15px] text-white/70 leading-relaxed">
              Share your project scope, timeline, and budget range. Our team
              will reply with a real person and a clear next step within one
              business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
