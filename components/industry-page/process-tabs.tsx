"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { Button } from "@/components/ui/button";
import type { ProcessTabItem, SectionHeading } from "@/lib/industries/types";
import { cn } from "@/lib/utils";

interface ProcessTabsProps {
  heading: SectionHeading;
  lead?: string;
  tabs: ProcessTabItem[];
  ctaLabel?: string;
}

function scrollToForm() {
  const el = document.getElementById("industry-form");
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 100,
      behavior: "smooth",
    });
  }
}

export function ProcessTabs({
  heading,
  lead,
  tabs,
  ctaLabel = "Book a consultation",
}: ProcessTabsProps) {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <LightSection bg="var(--surface)">
      <div className="ind-page-2col mb-11 grid grid-cols-2 items-start gap-[clamp(28px,4vw,56px)]">
        <SectionHead
          label={heading.label}
          title={heading.title}
          sub={heading.subtitle ?? heading.lead}
          titleSize="clamp(28px,3.4vw,42px)"
        />
        {lead && (
          <p className="m-0 pt-2 font-sans text-[17px] text-fg2 leading-[1.65]">
            {lead}
          </p>
        )}
      </div>

      <div className="mb-7 flex flex-wrap gap-2.5">
        {tabs.map((tab, index) => (
          <button
            key={tab.tab}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "cursor-pointer rounded-pill border px-[22px] py-[13px] font-sans font-semibold text-[15px] transition-all duration-180",
              active === index
                ? "border-transparent bg-xo-indigo text-white"
                : "border-border-strong bg-transparent text-fg2",
            )}
          >
            {index + 1}. {tab.tab}
          </button>
        ))}
      </div>

      <div className="ind-page-2col grid grid-cols-2 gap-[clamp(28px,4vw,52px)] rounded-(--r-xl) border border-border bg-slate-50 p-[clamp(28px,3.5vw,44px)]">
        <div>
          <h3 className="mb-4 font-bold font-sans text-2xl text-fg1 tracking-[-0.01em]">
            {current.tab}
          </h3>
          <p className="mb-7 font-sans text-[15.5px] text-fg2 leading-[1.7]">
            {current.body}
          </p>
          <Button type="button" variant="primary" onClick={scrollToForm}>
            {ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        <div>
          <div className="mb-4 font-sans font-semibold text-fg1 text-sm">
            Key outcomes
          </div>
          <div className="grid grid-cols-2 gap-3">
            {current.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-center gap-2.5 rounded-(--r-md) border border-border bg-surface px-4 py-3.5"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-tangerine-500"
                  aria-hidden
                />
                <span className="font-sans text-[13.5px] text-fg1 leading-snug">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LightSection>
  );
}
