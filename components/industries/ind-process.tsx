import { Code2, Compass, type LucideIcon, PenTool, Rocket } from "lucide-react";
import { DarkSection } from "@/components/case-study/dark-section";
import { SectionHead } from "@/components/case-study/section-head";

const STEPS: Array<{
  n: string;
  icon: LucideIcon;
  name: string;
  body: string;
}> = [
  {
    n: "01",
    icon: Compass,
    name: "Discovery",
    body: "We learn your domain, goals, and constraints, then define a scoped roadmap with clear milestones and measurable outcomes.",
  },
  {
    n: "02",
    icon: PenTool,
    name: "Design",
    body: "We translate requirements into architecture, data models, and an interface validated with your users before we build.",
  },
  {
    n: "03",
    icon: Code2,
    name: "Build",
    body: "We engineer in short, demoable sprints, with AI woven through delivery so you see working software every week.",
  },
  {
    n: "04",
    icon: Rocket,
    name: "Launch & scale",
    body: "We ship to production, instrument for insight, and harden the platform so it scales with your business.",
  },
];

export function IndProcess() {
  return (
    <DarkSection bloom="50% 4%">
      <SectionHead
        label="How we work"
        title="One process, every industry."
        sub="A proven delivery lifecycle that adapts to your sector, your stage, and your stack."
        onDark
        align="center"
        className="mb-14"
      />
      <div className="ind-proc-grid grid grid-cols-4 gap-5">
        {STEPS.map((step) => (
          <div
            key={step.n}
            className="ind-reveal relative overflow-hidden rounded-[var(--r-lg)] border border-white/12 bg-white/4 p-[clamp(24px,2.4vw,30px)]"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-indigo-400 to-indigo-700" />
            <div className="mb-[18px] flex items-center justify-between">
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[var(--r-md)] border border-indigo-300/32 bg-indigo-700/28 text-indigo-300">
                <step.icon className="h-[22px] w-[22px]" aria-hidden />
              </span>
              <span className="font-mono text-tangerine-400 text-xs tracking-widest">
                {step.n}
              </span>
            </div>
            <h3 className="mb-2.5 font-sans font-semibold text-[18.5px] text-white">
              {step.name}
            </h3>
            <p className="m-0 font-sans text-sm text-white/62 leading-snug">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </DarkSection>
  );
}
