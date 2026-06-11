"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

export interface FaqItem {
  q: string;
  a: string;
}

interface ServiceFaqProps {
  title: string;
  label?: string;
  items: FaqItem[];
  defaultOpen?: number;
  layout?: "split" | "center" | "stack";
  titleSize?: string;
  bg?: string;
}

export function ServiceFaq({
  title,
  label = "Good to know",
  items,
  defaultOpen = 0,
  layout = "split",
  titleSize = "clamp(28px,3.2vw,40px)",
  bg = "var(--slate-50)",
}: ServiceFaqProps) {
  const [open, setOpen] = useState(defaultOpen);

  if (layout === "center" || layout === "stack") {
    return (
      <LightSection bg={bg}>
        <SectionHead
          title={title}
          align={layout === "center" ? "center" : "left"}
          className="mx-auto mb-11 max-w-[640px]"
        />
        <div className="mx-auto flex max-w-[900px] flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(
                  "overflow-hidden rounded-(--r-lg) border bg-surface transition-colors duration-180",
                  isOpen ? "border-border-strong" : "border-border",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-[18px] border-none bg-transparent px-[clamp(20px,2.4vw,28px)] py-[clamp(18px,2vw,22px)] text-left"
                >
                  <span className="font-sans font-semibold text-[clamp(15px,1.5vw,18px)] text-fg1 leading-snug">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-tangerine-500" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-slate-400" />
                  )}
                </button>
                {isOpen && (
                  <p className="m-0 max-w-[760px] px-[clamp(20px,2.4vw,28px)] pb-[clamp(20px,2.4vw,26px)] font-sans text-[15px] text-fg2 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </LightSection>
    );
  }

  return (
    <LightSection bg={bg}>
      <div className="svc-faq-grid grid grid-cols-[0.7fr_1.3fr] items-start gap-[clamp(32px,5vw,64px)]">
        <div className="sticky top-[110px]">
          <SectionHead label={label} title={title} titleSize={titleSize} />
        </div>
        <div>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-border border-t">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-[18px] border-none bg-transparent py-[22px] text-left"
                >
                  <span className="font-sans font-semibold text-[clamp(16px,1.5vw,19px)] text-fg1 leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-(--r-md) border transition-all duration-180",
                      isOpen
                        ? "border-transparent bg-xo-indigo text-white"
                        : "border-border-strong bg-surface text-fg2",
                    )}
                  >
                    {isOpen ? (
                      <Minus className="h-[18px] w-[18px]" />
                    ) : (
                      <Plus className="h-[18px] w-[18px]" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="mb-6 max-w-[680px] font-sans text-[15.5px] text-fg2 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </LightSection>
  );
}
