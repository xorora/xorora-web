import {
  ArrowRight,
  Check,
  SlidersHorizontal,
  SquareCheck,
  Users,
} from "lucide-react";
import { LetsTalkContactLink } from "@/components/modals";
import { cn } from "@/lib/utils";
import { V2Eyebrow, V2Light } from "./v2-shared";

const MODELS = [
  {
    n: "01",
    icon: SquareCheck,
    name: "Fixed Scope",
    tagline: "Defined deliverable, timeline, and price.",
    body: "When requirements are clear, we lock scope, milestones, and a fixed price up front — predictable cost and a committed delivery date, with change control if priorities shift.",
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

export function V2Engagement() {
  return (
    <V2Light bg="var(--surface)">
      <div className="mb-[clamp(40px,5vw,56px)] max-w-[720px]">
        <V2Eyebrow>Engagement models</V2Eyebrow>
        <h2 className="mb-4 text-balance font-extrabold font-sans text-[clamp(28px,4.2vw,52px)] text-fg1 leading-tight tracking-tight">
          Pick the engagement that fits
          <span className="text-tangerine-500">.</span>
        </h2>
        <p className="m-0 font-sans text-[clamp(15px,1.6vw,18px)] text-fg2 leading-relaxed">
          Every model draws from the same senior, vetted talent pool and the
          same battle-tested delivery process. Only the commercials and the
          control change.
        </p>
      </div>
      <div className="v2-models-grid grid grid-cols-3 gap-[22px]">
        {MODELS.map((m) => (
          <ModelCard key={m.name} {...m} />
        ))}
      </div>
    </V2Light>
  );
}

function ModelCard({
  n,
  icon: Icon,
  name,
  tagline,
  body,
  points,
  best,
  featured,
}: (typeof MODELS)[number]) {
  const dark = featured;

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[var(--r-lg)] p-[clamp(26px,2.8vw,34px)] transition-all duration-220 ease-in-out",
        dark
          ? "hover:-translate-y-1 border border-[rgba(120,150,240,0.3)] bg-navy-900 shadow-sm hover:shadow-lg"
          : "hover:-translate-y-1 border border-border bg-slate-50 hover:border-border-strong hover:shadow-md",
      )}
    >
      {dark && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_100%_0%,rgba(70,76,159,0.4),transparent_60%)]" />
      )}
      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between">
          <span
            className={cn(
              "flex h-[50px] w-[50px] items-center justify-center rounded-[var(--r-md)]",
              dark
                ? "bg-tangerine-500 text-white"
                : "bg-indigo-50 text-xo-indigo",
            )}
          >
            <Icon className="h-6 w-6" aria-hidden />
          </span>
          <span
            className={cn(
              "font-mono text-xs tracking-[0.14em]",
              dark ? "text-tangerine-400" : "text-slate-400",
            )}
          >
            MODEL {n}
          </span>
        </div>
        <h3
          className={cn(
            "mb-1.5 font-bold font-sans text-[23px] tracking-tight",
            dark ? "text-white" : "text-fg1",
          )}
        >
          {name}
        </h3>
        <div
          className={cn(
            "mb-3.5 font-sans font-semibold text-[14.5px]",
            dark ? "text-indigo-300" : "text-xo-indigo",
          )}
        >
          {tagline}
        </div>
        <p
          className={cn(
            "mb-5 font-sans text-[14.5px] leading-relaxed",
            dark ? "text-white/70" : "text-fg2",
          )}
        >
          {body}
        </p>
        <div className="mb-[22px] flex flex-col gap-[11px]">
          {points.map((p) => (
            <div key={p} className="flex items-center gap-[11px]">
              <Check
                className={cn(
                  "h-[17px] w-[17px] shrink-0",
                  dark ? "text-tangerine-400" : "text-xo-indigo",
                )}
                aria-hidden
              />
              <span
                className={cn(
                  "font-sans text-[14.5px]",
                  dark ? "text-white/85" : "text-fg1",
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
            dark ? "border-white/12" : "border-border",
          )}
        >
          <p
            className={cn(
              "mb-4 font-sans text-[13px] leading-snug",
              dark ? "text-white/60" : "text-fg3",
            )}
          >
            {best}
          </p>
          <LetsTalkContactLink
            className={cn(
              "inline-flex cursor-pointer items-center gap-2 border-none bg-transparent p-0 font-sans font-semibold text-sm",
              dark ? "text-tangerine-400" : "text-accent",
            )}
          >
            Discuss this model
            <ArrowRight className="h-[15px] w-[15px]" aria-hidden />
          </LetsTalkContactLink>
        </div>
      </div>
    </div>
  );
}
