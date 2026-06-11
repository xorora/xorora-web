"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/lib/content";
import { cn } from "@/lib/utils";
import { V2ContactForm } from "./v2-contact-form";
import { V2Eyebrow, V2Light } from "./v2-shared";

interface V2ContactClientProps {
  faqs: FaqItem[];
}

export function V2ContactClient({ faqs }: V2ContactClientProps) {
  const [open, setOpen] = useState(0);

  return (
    <V2Light bg="var(--slate-50)">
      <div className="v2-contact-grid grid grid-cols-[1fr_0.92fr] items-start gap-[clamp(32px,5vw,64px)]">
        <div>
          <V2Eyebrow>Get in touch</V2Eyebrow>
          <h2 className="mb-8 text-balance font-bold font-sans text-[clamp(28px,3.6vw,46px)] text-fg1 leading-tight tracking-tight">
            Everything you may ask before&nbsp;
            <span className="text-xo-indigo">booking a call</span>
          </h2>
          <div>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className="border-border border-t">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-[18px] border-none bg-transparent py-5 text-left"
                  >
                    <span className="font-sans font-semibold text-[clamp(15px,1.4vw,18px)] text-fg1 leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--r-md)] border transition-all duration-180",
                        isOpen
                          ? "border-transparent bg-xo-indigo text-white"
                          : "border-border-strong bg-surface text-fg2",
                      )}
                    >
                      {isOpen ? (
                        <Minus className="h-[17px] w-[17px]" aria-hidden />
                      ) : (
                        <Plus className="h-[17px] w-[17px]" aria-hidden />
                      )}
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="m-0 mb-[22px] max-w-[560px] font-sans text-[15px] text-fg2 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <V2ContactForm />
      </div>
    </V2Light>
  );
}
