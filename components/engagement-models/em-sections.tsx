import {
  ArrowUpRight,
  Check,
  Repeat,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  SquareCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { SignalField } from "@/components/geometry/signal-field";
import { LetsTalkContactLink } from "@/components/modals";
import { ServiceCta, ServiceGlassForm } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";
import {
  type CaseStudyCardData,
  listPublishedCaseStudies,
  toCaseStudyCards,
} from "@/lib/case-studies";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const MODELS = [
  {
    n: "01",
    icon: SquareCheck,
    name: "Fixed Scope",
    tagline: "Defined deliverable, timeline, and price.",
    body: "When requirements are clear, we lock scope, milestones, and a fixed price up front. You get predictable cost and a committed delivery date, with change control if priorities shift.",
    points: [
      "Predictable, fixed budget",
      "Committed delivery date",
      "Clear milestones & change control",
    ],
    best: "Best for well-defined builds, MVPs, and fixed-budget projects.",
    featured: false,
  },
  {
    n: "02",
    icon: SlidersHorizontal,
    name: "Variable Scope",
    tagline: "Time-and-materials flexibility.",
    body: "When the path will flex as you learn, we work in agile sprints against a prioritized backlog. You steer scope sprint by sprint and pay only for what you build.",
    points: [
      "Adapt scope every sprint",
      "Pay for what you build",
      "Reprioritize as you learn",
    ],
    best: "Best for evolving products, R&D, and long-running roadmaps.",
    featured: true,
  },
  {
    n: "03",
    icon: Users,
    name: "Staff Augmentation",
    tagline: "Senior engineers embedded in your team.",
    body: "When you own the roadmap and need capacity or specialized skills, we embed vetted engineers into your team and process. They ramp fast, work in your stack, and report to you.",
    points: [
      "Vetted senior engineers",
      "Embed in your process",
      "Scale capacity up or down",
    ],
    best: "Best for in-house teams needing capacity or niche expertise.",
    featured: false,
  },
] as const;

const REASONS = [
  {
    icon: Route,
    title: "Matched to your roadmap",
    body: "We recommend a model based on how defined your scope is and how much control you want — not on what is easiest to sell.",
  },
  {
    icon: ShieldCheck,
    title: "One vetted talent pool",
    body: "Whichever model you pick, the same senior engineers and the same delivery standards back the work. No B-team.",
  },
  {
    icon: Repeat,
    title: "Switch models anytime",
    body: "Start fixed for an MVP, move to variable as you scale, or augment your team later. The engagement flexes with you.",
  },
] as const;

export function EmHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-linear-to-br from-navy-700 via-38% via-[#15225C] to-[#2C57C9] pt-[72px]">
      <SignalField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_88%_30%,rgba(120,160,255,0.5)_0%,rgba(60,100,220,0.18)_34%,transparent_64%)]" />
      <div className="svc-header-grid relative z-5 mx-auto grid max-w-[1240px] grid-cols-[1.06fr_0.94fr] items-center gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(84px,10vw,128px)] pb-[clamp(72px,8vw,104px)]">
        <div>
          <div className="mb-[26px] inline-flex items-center gap-2 rounded-pill border border-white/22 bg-white/[0.07] px-4 py-2 font-sans font-semibold text-[13px] text-white/92 backdrop-blur-sm">
            <span className="h-[7px] w-[7px] rounded-full bg-tangerine-400 shadow-[0_0_8px_var(--tangerine-400)]" />
            Engagement Models
          </div>
          <h1 className="mb-6 text-balance font-extrabold font-sans text-[clamp(38px,5.4vw,68px)] text-white leading-none tracking-[-0.03em]">
            Engagement models built around{" "}
            <span className="text-tangerine-400">how you build.</span>
          </h1>
          <p className="mb-8 max-w-[580px] font-sans text-[clamp(17px,1.9vw,20px)] text-white/84 leading-relaxed">
            Fixed scope, variable scope, or embedded experts — choose the model
            that matches your roadmap, your budget, and your team. Switch as
            your needs change.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <LetsTalkContactLink
              className={buttonClassName({ variant: "light", size: "lg" })}
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </LetsTalkContactLink>
            <a
              href="#em-models"
              className={buttonClassName({ variant: "onDark", size: "lg" })}
            >
              Compare models
            </a>
          </div>
        </div>
        <ServiceGlassForm title="Tell us about your project" />
      </div>
    </section>
  );
}

export function EmModels() {
  return (
    <LightSection bg="var(--surface)" id="em-models">
      <SectionHead
        label="Three ways to work with us"
        title="Pick the engagement that fits."
        sub="Every model draws from the same senior, vetted talent pool and the same battle-tested delivery process. Only the commercials and the control change."
        className="mb-[52px] max-w-[720px]"
      />
      <div className="em-models-grid grid grid-cols-3 gap-6">
        {MODELS.map((m) => (
          <div
            key={m.name}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-[var(--r-lg)] p-[clamp(26px,2.8vw,34px)] transition-all hover:translate-y-[-3px]",
              m.featured
                ? "border border-indigo-300/30 bg-navy-900 shadow-sm hover:shadow-lg"
                : "border border-border bg-slate-50 hover:border-border-strong hover:shadow-md",
            )}
          >
            {m.featured && (
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_100%_0%,rgba(70,76,159,0.4),transparent_60%)]" />
            )}
            <div className="relative flex h-full flex-col">
              <div className="mb-5 flex items-center justify-between">
                <span
                  className={cn(
                    "flex h-[50px] w-[50px] items-center justify-center rounded-[var(--r-md)]",
                    m.featured
                      ? "bg-tangerine-500 text-white"
                      : "bg-indigo-50 text-xo-indigo",
                  )}
                >
                  <m.icon className="h-6 w-6" />
                </span>
                <span
                  className={cn(
                    "font-mono text-xs tracking-[0.14em]",
                    m.featured ? "text-tangerine-400" : "text-slate-400",
                  )}
                >
                  MODEL {m.n}
                </span>
              </div>
              <h3
                className={cn(
                  "mb-1.5 font-bold font-sans text-[23px] tracking-[-0.01em]",
                  m.featured ? "text-white" : "text-fg1",
                )}
              >
                {m.name}
              </h3>
              <div
                className={cn(
                  "mb-3.5 font-sans font-semibold text-[14.5px]",
                  m.featured ? "text-indigo-300" : "text-xo-indigo",
                )}
              >
                {m.tagline}
              </div>
              <p
                className={cn(
                  "mb-5 font-sans text-[14.5px] leading-relaxed",
                  m.featured ? "text-white/70" : "text-fg2",
                )}
              >
                {m.body}
              </p>
              <div className="mb-[22px] flex flex-col gap-[11px]">
                {m.points.map((p) => (
                  <div key={p} className="flex items-center gap-[11px]">
                    <Check
                      className={cn(
                        "h-[17px] w-[17px] shrink-0",
                        m.featured ? "text-tangerine-400" : "text-xo-indigo",
                      )}
                    />
                    <span
                      className={cn(
                        "font-sans text-[14.5px]",
                        m.featured ? "text-white/85" : "text-fg1",
                      )}
                    >
                      {p}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className={cn(
                  "mt-auto border-t pt-5",
                  m.featured ? "border-white/12" : "border-border",
                )}
              >
                <p
                  className={cn(
                    "mb-4 font-sans text-[13px] leading-snug",
                    m.featured ? "text-white/60" : "text-fg3",
                  )}
                >
                  {m.best}
                </p>
                <LetsTalkContactLink
                  className={cn(
                    "inline-flex items-center gap-2 border-none bg-transparent p-0 font-sans font-semibold text-sm no-underline",
                    m.featured ? "text-tangerine-400" : "text-accent",
                  )}
                >
                  Discuss this model
                  <ArrowUpRight className="h-[15px] w-[15px]" />
                </LetsTalkContactLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

export function EmChoose() {
  return (
    <LightSection bg="var(--slate-50)">
      <h2 className="mx-auto mb-[clamp(40px,5vw,56px)] max-w-[720px] text-balance text-center font-bold font-sans text-[clamp(28px,4vw,44px)] text-fg1 leading-tight tracking-[-0.02em]">
        Not sure which model <span className="text-xo-indigo">fits</span>
        <span className="text-tangerine-500">?</span>
      </h2>
      <div className="em-reasons-grid mx-auto grid max-w-[1100px] grid-cols-3 gap-[clamp(22px,2.4vw,28px)]">
        {REASONS.map((r) => (
          <div
            key={r.title}
            className="group relative overflow-hidden rounded-[var(--r-lg)] border border-border bg-surface p-[clamp(24px,2.6vw,32px)] shadow-xs transition-all hover:translate-y-[-3px] hover:border-border-strong hover:shadow-md"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-indigo-400 to-tangerine-500 transition-transform group-hover:scale-x-100" />
            <span className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[var(--r-md)] bg-indigo-50 text-xo-indigo transition-all group-hover:bg-xo-indigo group-hover:text-white">
              <r.icon className="h-[22px] w-[22px]" />
            </span>
            <h3 className="mb-2.5 font-sans font-semibold text-[19px] text-fg1">
              {r.title}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {r.body}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

export async function EmCases() {
  const studies = await listPublishedCaseStudies();
  const cases = toCaseStudyCards(studies, 3);
  const engagementTags = [
    "Fixed Scope",
    "Variable Scope",
    "Staff Augmentation",
  ];

  return (
    <LightSection bg="var(--surface)">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <SectionHead
          label="Models in action"
          title="Every model has shipped."
          sub="Real products we delivered across each engagement type — same standards, different commercials."
        />
        <Link
          href={ROUTES.ourWork}
          className="inline-flex items-center gap-2 font-sans font-semibold text-[14.5px] text-accent no-underline"
        >
          View all work
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="em-cases-grid grid grid-cols-3 gap-6">
        {cases.map((c, index) => (
          <EmCaseCard
            key={c.href}
            {...c}
            tag={engagementTags[index] ?? c.tag}
          />
        ))}
      </div>
    </LightSection>
  );
}

function EmCaseCard({
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
      className="group hover:-translate-y-1 relative block min-h-[380px] overflow-hidden rounded-[var(--r-xl)] border border-white/10 bg-[#080C1E] no-underline shadow-[0_22px_56px_-34px_rgba(8,12,30,0.5)] transition-all hover:shadow-[0_36px_80px_-34px_rgba(8,12,30,0.7)]"
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,12,30,0.25)] via-[rgba(8,12,30,0.55)] to-[#080C1E]" />
      <span className="absolute top-5 left-5 rounded-pill bg-white px-[13px] py-1.5 font-mono text-[11px] text-xo-ink uppercase tracking-[0.08em]">
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

export function EmContact() {
  return (
    <ServiceCta
      title="Find the right model for your team."
      description="Tell us where you are and what you are building. We will recommend the engagement that gets you there fastest, and respond within one business day."
      primaryLabel="Start a project"
      secondaryLabel="Book a build review"
    />
  );
}
