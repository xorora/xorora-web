"use client";

import { ArrowUpRight, Check, Quote } from "lucide-react";
import { useId, useState } from "react";
import { XWatermark } from "@/components/geometry/x-watermark";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BUDGETS = [
  "up to $25k",
  "$25k – $50k",
  "$50k – $100k",
  "> $100k",
] as const;

const CONTACT_DETAILS = [
  { label: "Sales & general", value: "info@xorora.com" },
  { label: "Call us", value: "+92-332-0555328" },
] as const;

export function WorkContact() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState<string | null>(null);

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-surface px-8 pb-[clamp(64px,8vw,104px)]"
    >
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-(--r-xl) bg-navy-900 p-[clamp(36px,5vw,68px)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_12%_0%,rgba(70,76,159,0.4),transparent_56%)]" />
        <XWatermark
          size={460}
          color="rgba(120,150,240,0.05)"
          className="right-[-140px] bottom-[-200px]"
        />
        <div className="work-contact-grid relative grid grid-cols-2 gap-[clamp(36px,5vw,64px)]">
          <div className="flex flex-col">
            <h2 className="m-0 mb-[30px] text-balance font-extrabold font-sans text-[clamp(30px,3.8vw,48px)] text-white leading-[1.05] tracking-tight">
              Share your ambition with the team that ships
              <span className="text-tangerine-400">.</span>
            </h2>
            <div className="mb-10 flex flex-wrap gap-[clamp(28px,4vw,52px)]">
              {CONTACT_DETAILS.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 font-mono text-[11px] text-white/45 uppercase tracking-widest">
                    {item.label}
                  </div>
                  <div className="font-sans font-semibold text-base text-white">
                    <a
                      href={item.value.includes("@") ? `mailto:${item.value}` : `tel:${item.value.replace(/[^\d+]/g, "")}`}
                      className="no-underline transition-colors hover:text-tangerine-400"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <Quote
                className="mb-3.5 h-[26px] w-[26px] text-tangerine-400"
                aria-hidden
              />
              <p className="m-0 mb-5 max-w-[460px] font-sans text-base text-white/80 leading-[1.65]">
                &ldquo;Xorora became an extension of our team. They engineered
                with us — pragmatic, fast, and genuinely invested in the
                outcome. A rare development partner.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar name="Priya Anand" size={44} ring />
                <div>
                  <div className="font-sans font-semibold text-[15px] text-white">
                    Priya Anand
                  </div>
                  <div className="font-sans text-[13px] text-white/55">
                    VP Risk, Northwind
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-(--r-lg) bg-white p-[clamp(26px,3vw,38px)] shadow-xl">
            {sent ? (
              <div className="py-[60px] text-center">
                <span className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-success">
                  <Check className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="m-0 mb-2 font-bold font-sans text-[22px] text-fg1">
                  Message sent
                </h3>
                <p className="m-0 font-sans text-[15px] text-fg2">
                  We&apos;ll reach out within one business day.
                </p>
              </div>
            ) : (
              <>
                <WorkField
                  label="Full name"
                  required
                  placeholder="Enter your name"
                />
                <WorkField
                  label="Email"
                  required
                  placeholder="Enter your email"
                />
                <WorkField
                  label="Phone number"
                  placeholder="Enter your phone number"
                />
                <div className="mt-4">
                  <div className="mb-2 font-sans font-semibold text-[13px] text-fg2">
                    Select your budget
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((option) => {
                      const selected = budget === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setBudget(option)}
                          className={cn(
                            "cursor-pointer rounded-pill border px-3.5 py-2 font-medium font-sans text-[13.5px] transition-all duration-150",
                            selected
                              ? "border-xo-indigo bg-indigo-50 text-xo-indigo"
                              : "border-border-strong bg-white text-fg2",
                          )}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <WorkField
                  label="Message"
                  required
                  textarea
                  placeholder="Enter your message"
                />
                <div className="mt-[22px] flex flex-wrap items-center justify-between gap-4">
                  <label className="flex max-w-[240px] cursor-pointer items-center gap-2 font-sans text-[13px] text-fg2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-xo-indigo"
                    />
                    Subscribe for technology insights and updates
                  </label>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setSent(true)}
                  >
                    Send message
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface WorkFieldProps {
  label: string;
  placeholder: string;
  textarea?: boolean;
  required?: boolean;
}

function WorkField({ label, placeholder, textarea, required }: WorkFieldProps) {
  const [focused, setFocused] = useState(false);
  const fieldId = useId();

  const fieldClass = cn(
    "w-full rounded-[var(--r-md)] border px-3.5 py-3 font-sans text-[15px] text-fg1 outline-hidden transition-shadow",
    focused
      ? "border-tangerine-500 bg-white shadow-focus"
      : "border-border-strong bg-slate-50",
  );

  return (
    <label htmlFor={fieldId} className="mt-4 flex flex-col gap-[7px]">
      <span className="font-sans font-semibold text-[13px] text-fg2">
        {label}
        {required && <span className="text-tangerine-500"> *</span>}
      </span>
      {textarea ? (
        <textarea
          id={fieldId}
          rows={4}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(fieldClass, "resize-none")}
        />
      ) : (
        <input
          id={fieldId}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={fieldClass}
        />
      )}
    </label>
  );
}
