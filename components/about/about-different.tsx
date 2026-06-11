import {
  Eye,
  type LucideIcon,
  SlidersHorizontal,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import { SignalRule } from "@/components/geometry/signal-rule";
import { cn } from "@/lib/utils";

const CARDS: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Target,
    title: "Business focus",
    body: "We focus on what changes business performance: removing bottlenecks, improving efficiency, increasing revenue potential, and building software that solves real operational problems.",
  },
  {
    icon: Eye,
    title: "Zero bureaucracy",
    body: "We keep execution clear and direct. We simplify processes, reduce unnecessary layers, and help clients move faster without compromising delivery quality.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexibility",
    body: "We adapt to different stages, team structures, and engagement models. Whether you need a strategic partner, a dedicated team, or fast support, we tailor the model to your reality.",
  },
  {
    icon: Users,
    title: "Strong team quality",
    body: "We maintain a high bar for engineering, product thinking, and communication. Our clients do not just need developers, they need people they can rely on in high-stakes environments.",
  },
];

export function AboutDifferent() {
  return (
    <section className="relative overflow-hidden bg-navy-950 px-8 py-[clamp(72px,9vw,118px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_10%,rgba(70,76,159,0.3),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-14 max-w-[720px]">
          <div className="mb-5 inline-flex items-center gap-3">
            <SignalRule color="var(--tangerine-400)" />
            <span className="font-mono text-tangerine-400 text-xs uppercase tracking-[0.2em]">
              Why teams pick us
            </span>
          </div>
          <h2 className="m-0 flex flex-wrap items-center gap-[0.3em] font-bold font-sans text-[clamp(32px,4.4vw,52px)] text-white leading-tight tracking-[-0.02em]">
            <span>Our</span>
            <Image
              src="/assets/nav-logo-x.png"
              alt="X"
              width={0}
              height={0}
              sizes="52px"
              style={{ height: "1em", width: "auto" }}
              className="inline-block h-auto w-auto"
            />
            <span>
              Factor<span className="text-tangerine-400">.</span>
            </span>
          </h2>
          <p className="mt-5 font-sans text-[17px] text-white/66 leading-relaxed">
            Many software companies look similar from the outside. The
            difference appears in how they think, how they operate, and what
            they optimize for. We are built to deliver business value in a way
            that is practical, flexible, and commercially aware.
          </p>
        </div>
        <div className="ab-4grid grid grid-cols-4 gap-[18px]">
          {CARDS.map((card) => (
            <DiffCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiffCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-(--r-lg) border border-white/12 bg-white/4 p-[clamp(24px,2.4vw,30px)]",
        "transition-all duration-200 hover:translate-y-[-3px] hover:border-indigo-300/50",
      )}
    >
      <span className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-(--r-md) border border-indigo-300/32 bg-indigo-700/28 text-indigo-300">
        <Icon className="h-[22px] w-[22px]" aria-hidden />
      </span>
      <h3 className="mb-2.5 font-sans font-semibold text-lg text-white leading-snug">
        {title}
      </h3>
      <p className="m-0 font-sans text-[13.5px] text-white/62 leading-snug">
        {body}
      </p>
    </div>
  );
}
