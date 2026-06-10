"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { V2Eyebrow, V2Light } from "./v2-shared";

const STEPS = [
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

export function V2Deliver() {
  const [active, setActive] = useState(0);

  return (
    <V2Light bg="var(--slate-50)">
      <V2Eyebrow>Our process</V2Eyebrow>
      <h2 className="mb-12 text-balance font-extrabold font-sans text-[clamp(28px,4.2vw,52px)] text-fg1 leading-tight tracking-tight">
        How we deliver AI and data innovation
      </h2>
      <div className="v2-deliver-grid grid grid-cols-[0.92fr_1.08fr] items-stretch gap-[clamp(32px,5vw,72px)] border-border border-t">
        <div className="v2-deliver-visual relative flex flex-col justify-center pt-9">
          <div className="font-extrabold font-sans text-[clamp(56px,7vw,96px)] text-fg1 leading-[0.9] tracking-tight">
            {STEPS[active].n}
          </div>
          <div className="flex justify-center px-0 py-6 pb-2">
            <DiamondStack active={active} />
          </div>
        </div>
        <div className="border-border border-l">
          {STEPS.map((step, i) => {
            const on = active === i;
            return (
              <button
                key={step.n}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "w-full cursor-pointer border-border border-b px-[clamp(20px,2.4vw,32px)] py-[clamp(18px,2vw,24px)] text-left transition-colors duration-180",
                  on ? "bg-surface" : "bg-transparent",
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
                      "m-0 font-bold font-sans text-[clamp(20px,2.2vw,26px)] tracking-tight transition-colors duration-180",
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
    </V2Light>
  );
}

function DiamondStack({ active }: { active: number }) {
  const cx = 150;
  const rx = 104;
  const ry = 46;
  const cys = [66, 112, 158, 204];
  const path = (cy: number) =>
    `M${cx},${cy - ry} L${cx + rx},${cy} L${cx},${cy + ry} L${cx - rx},${cy} Z`;
  const order = [0, 1, 2, 3].filter((i) => i !== active).concat(active);

  return (
    <svg
      viewBox="0 0 300 270"
      width="100%"
      className="max-w-[340px] overflow-visible"
      aria-hidden
    >
      <title>Process step visualization</title>
      <defs>
        <linearGradient id="v2DiaActive" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3A63D8" />
          <stop offset="1" stopColor="#1E3FA8" />
        </linearGradient>
      </defs>
      {order.map((i) => {
        const on = i === active;
        return (
          <path
            key={i}
            d={path(cys[i])}
            fill={on ? "url(#v2DiaActive)" : "rgba(70,90,180,0.13)"}
            stroke={on ? "none" : "rgba(70,90,180,0.30)"}
            strokeWidth="1"
            style={{
              filter: on
                ? "drop-shadow(0 14px 22px rgba(40,70,180,0.35))"
                : "none",
              transition: "fill 0.25s, stroke 0.25s",
            }}
          />
        );
      })}
    </svg>
  );
}
