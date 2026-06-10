"use client";

import { useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";
import { DiamondStack } from "./diamond-stack";

export interface ApproachStep {
  n: string;
  name: string;
  body: string;
}

interface StepApproachProps {
  label?: string;
  title: string;
  sub?: string;
  steps: ApproachStep[];
  gradientId?: string;
  className?: string;
}

export function StepApproach({
  label = "How we work",
  title,
  sub,
  steps,
  gradientId = "stepApproachDia",
  className,
}: StepApproachProps) {
  const [active, setActive] = useState(0);

  return (
    <LightSection bg="var(--surface)" className={className}>
      <SectionHead label={label} title={title} sub={sub} className="mb-11" />
      <div className="svc-deliver-grid grid grid-cols-[0.92fr_1.08fr] items-stretch gap-[clamp(32px,5vw,72px)] border-border border-t">
        <div className="svc-deliver-visual flex flex-col justify-center pt-9">
          <div className="font-extrabold font-sans text-[clamp(56px,7vw,96px)] text-fg1 leading-[0.9] tracking-[-0.04em]">
            {steps[active]?.n}
          </div>
          <div className="flex justify-center py-6 pb-2">
            <DiamondStack active={active} gradientId={gradientId} />
          </div>
        </div>
        <div className="border-border border-l">
          {steps.map((step, i) => {
            const on = active === i;
            return (
              <button
                key={step.n}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "block w-full cursor-pointer border-border border-b px-[clamp(20px,2.4vw,32px)] py-[clamp(18px,2vw,24px)] text-left transition-colors duration-180",
                  on ? "bg-slate-50" : "bg-transparent",
                )}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className={cn(
                      "font-mono text-[13px] transition-colors duration-180",
                      on ? "text-tangerine-600" : "text-slate-400",
                    )}
                  >
                    {step.n}
                  </span>
                  <h3
                    className={cn(
                      "m-0 font-bold font-sans text-[clamp(20px,2.2vw,26px)] tracking-[-0.01em] transition-colors duration-180",
                      on ? "text-xo-indigo" : "text-fg1",
                    )}
                  >
                    {step.name}
                  </h3>
                </div>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 max-w-[620px] pt-3.5 pl-[29px] font-sans text-[15px] text-fg2 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </LightSection>
  );
}
