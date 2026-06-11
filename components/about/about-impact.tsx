import {
  Cpu,
  Crosshair,
  type LucideIcon,
  Quote,
  Target,
  TrendingUp,
} from "lucide-react";
import { DarkSection } from "@/components/case-study/dark-section";
import { SectionHead } from "@/components/case-study/section-head";
import { XWatermark } from "@/components/geometry/x-watermark";

const ITEMS: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Target,
    title: "Business impact first",
    body: 'We focus on business impact: removing bottlenecks, improving efficiency, increasing revenue potential, and delivering what actually changes performance, not "shipping features."',
  },
  {
    icon: Cpu,
    title: "Built for today\u2019s reality",
    body: "The era of writing high-quality code just for the sake of it is over. AI is reshaping how software is built and used, and we are built to adopt quickly and apply it where it creates real value.",
  },
  {
    icon: Crosshair,
    title: "Our sweet spot",
    body: "Our sweet spot is tough, high-stakes industries including Fintech, Healthcare, and Decision Intelligence, where we can fully leverage strong product thinking and act as a true strategic partner.",
  },
  {
    icon: TrendingUp,
    title: "What success looks like",
    body: "In these environments, complexity, risk, and operational pressure are real. That is where we perform best: clarifying root problems, designing practical AI-driven solutions, and delivering systems that create measurable impact.",
  },
];

export function AboutImpact() {
  return (
    <DarkSection bloom="60% 0%">
      <div className="ab-2col grid grid-cols-[0.85fr_1.15fr] items-start gap-[clamp(32px,5vw,64px)]">
        <div className="sticky top-[110px]">
          <SectionHead
            label="How we work"
            title="How Xorora creates business impact."
            onDark
          />
          <p className="mt-6 max-w-[380px] font-sans text-base text-white/66 leading-relaxed">
            We partner with companies across industries to solve complex
            business problems through custom software and strong engineering
            teams.
          </p>
        </div>
        <div>
          {ITEMS.map((item, _index) => (
            <div
              key={item.title}
              className="ab-impact-row grid grid-cols-[48px_0.9fr_1.1fr] items-start gap-[clamp(14px,2vw,26px)] border-white/10 border-t py-[26px] first:border-t-0"
            >
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-(--r-md) border border-indigo-300/32 bg-indigo-700/28 text-indigo-300">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="m-0 font-sans font-semibold text-[clamp(17px,1.6vw,20px)] text-white leading-snug">
                {item.title}
              </h3>
              <p className="m-0 font-sans text-[14.5px] text-white/62 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
          <div className="relative mt-8 overflow-hidden rounded-(--r-xl) bg-linear-to-br from-indigo-700 to-indigo-900 p-[clamp(28px,3.5vw,44px)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_90%_10%,rgba(120,150,240,0.35),transparent_60%)]" />
            <XWatermark
              size={260}
              color="rgba(255,255,255,0.06)"
              className="right-[-60px] bottom-[-100px]"
            />
            <div className="relative flex items-center gap-[18px]">
              <Quote
                className="h-[30px] w-[30px] shrink-0 text-tangerine-400"
                aria-hidden
              />
              <p className="m-0 font-sans font-semibold text-[clamp(18px,2vw,24px)] text-white leading-snug tracking-[-0.01em]">
                Trust and satisfaction are the real KPI. If the solution works
                in real conditions and your team feels confident relying on it,
                we have done our job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DarkSection>
  );
}
