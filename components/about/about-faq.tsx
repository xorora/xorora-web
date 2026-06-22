"use client";

import { ArrowUpRight, Check, Mail, Minus, Phone, Plus } from "lucide-react";
import { useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { XWatermark } from "@/components/geometry/x-watermark";
import { LetsTalkContactLink } from "@/components/modals";
import type { FaqItem } from "@/lib/content";
import { cn } from "@/lib/utils";

const TRUST_ITEMS = [
  "NDA available",
  "No sales pressure",
  "Free consultation",
] as const;

const CONTACT_ITEMS = [
  { icon: Phone, value: "+92-332-0555328" },
  { icon: Mail, value: "info@xorora.com" },
] as const;

interface AboutFAQProps {
  faqs: FaqItem[];
}

export function AboutFAQ({ faqs }: AboutFAQProps) {
  const [open, setOpen] = useState(2);

  return (
    <LightSection bg="var(--slate-50)">
      <div className="ab-2col grid grid-cols-[1fr_0.9fr] items-start gap-[clamp(32px,5vw,64px)]">
        <div>
          <h2 className="mb-8 text-balance font-bold font-sans text-[clamp(28px,3.6vw,44px)] text-fg1 leading-tight tracking-[-0.02em]">
            Everything you may ask before&nbsp;
            <span className="text-xo-indigo">booking a call</span>
          </h2>
          <div>
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div key={faq.q} className="border-border border-t">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-[18px] border-none bg-transparent py-5 text-left"
                  >
                    <span className="font-sans font-semibold text-[clamp(15px,1.4vw,18px)] text-fg1 leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-(--r-md) border transition-all duration-180",
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
                  {isOpen && (
                    <p className="mb-[22px] max-w-[560px] font-sans text-[15px] text-fg2 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="sticky top-24 overflow-hidden rounded-(--r-xl) bg-navy-900 p-[clamp(30px,3.5vw,44px)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_90%_0%,rgba(70,76,159,0.45),transparent_58%)]" />
          <XWatermark
            size={320}
            color="rgba(120,150,240,0.06)"
            className="bottom-[-130px] left-[-90px]"
          />
          <div className="relative">
            <h3 className="mb-3.5 font-extrabold font-sans text-[clamp(24px,2.6vw,32px)] text-white leading-tight tracking-[-0.02em]">
              Let&apos;s talk about your project
            </h3>
            <p className="mb-7 font-sans text-[15px] text-white/66 leading-relaxed">
              We respond within one business day with a real person, not an
              automated acknowledgement.
            </p>
            <LetsTalkContactLink className="flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-(--r-md) border border-transparent bg-xo-indigo px-[30px] py-[15px] font-sans font-semibold text-base text-white transition-all duration-180 ease-in-out hover:bg-indigo-600 hover:shadow-glow-indigo active:scale-[0.98]">
              Start the conversation
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3.5">
              {TRUST_ITEMS.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-[7px] font-sans text-[13px] text-white/80"
                >
                  <Check
                    className="h-[15px] w-[15px] text-tangerine-400"
                    aria-hidden
                  />
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-[26px] flex flex-col gap-3 border-white/10 border-t pt-6">
              {CONTACT_ITEMS.map(({ icon: Icon, value }) => (
                <div
                  key={value}
                  className="flex items-center gap-[11px] font-sans text-[14.5px] text-white/85"
                >
                  <Icon className="h-4 w-4 text-tangerine-400" aria-hidden />
                  <a
                    href={value.includes("@") ? `mailto:${value}` : `tel:${value.replace(/[^\d+]/g, "")}`}
                    className="transition-colors hover:text-tangerine-400"
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LightSection>
  );
}
