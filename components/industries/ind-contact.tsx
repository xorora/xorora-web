"use client";

import { ArrowUpRight, Check, ChevronDown, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { XWatermark } from "@/components/geometry/x-watermark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BUDGETS = [
  "up to $25k",
  "$25k – $50k",
  "$50k – $100k",
  "> $100k",
] as const;

const CONTACT_ITEMS = [
  { icon: Mail, value: "info@xorora.com" },
  { icon: Phone, value: "+92-332-0555328" },
] as const;

const fieldClass =
  "w-full rounded-[var(--r-md)] border border-white/16 bg-white/4 px-3.5 py-3 font-sans text-[15px] text-white outline-hidden transition-shadow placeholder:text-white/50 focus:border-tangerine-500 focus:shadow-focus";

export function IndContact({ industryNames }: { industryNames: string[] }) {
  const [sent, setSent] = useState(false);
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState<string | null>(null);

  return (
    <section
      id="ind-contact"
      className="bg-surface px-8 py-[clamp(64px,8vw,104px)]"
    >
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-(--r-xl) border border-white/10 bg-navy-900 p-[clamp(32px,4.5vw,60px)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_90%_0%,rgba(70,76,159,0.4),transparent_58%)]" />
        <XWatermark
          size={420}
          color="rgba(120,150,240,0.05)"
          className="bottom-[-180px] left-[-120px]"
        />
        <div className="ind-contact-grid relative grid grid-cols-[0.92fr_1.08fr] gap-[clamp(36px,5vw,64px)]">
          <div className="flex flex-col">
            <h2 className="mb-[22px] font-extrabold font-sans text-[clamp(30px,3.8vw,46px)] text-white leading-tight tracking-tight">
              Tell us about your project.
            </h2>
            <p className="mb-7 max-w-[420px] font-sans text-base text-white/66 leading-relaxed">
              Share a few details and our team will get back within one business
              day with next steps and a preliminary estimate.
            </p>
            <div className="mt-auto flex flex-col gap-3.5">
              {CONTACT_ITEMS.map(({ icon: Icon, value }) => (
                <div
                  key={value}
                  className="flex items-center gap-3 font-sans text-[15px] text-white/85"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-(--r-md) border border-white/12 bg-white/6 text-tangerine-400">
                    <Icon className="h-[17px] w-[17px]" aria-hidden />
                  </span>
                  <a
                    href={
                      value.includes("@")
                        ? `mailto:${value}`
                        : `tel:${value.replace(/[^\d+]/g, "")}`
                    }
                    className="transition-colors hover:text-tangerine-400"
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-(--r-lg) border border-white/10 bg-white/3 p-[clamp(24px,3vw,32px)]">
            {sent ? (
              <div className="py-14 text-center">
                <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-success/18 text-success">
                  <Check className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mb-2 font-bold font-sans text-[22px] text-white">
                  Request received
                </h3>
                <p className="m-0 font-sans text-[15px] text-white/65">
                  We will reach out within one business day.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3.5">
                  <IndField label="Full name" placeholder="Jordan Reyes" />
                  <IndField label="Work email" placeholder="you@company.com" />
                </div>
                <div className="mt-3.5 grid grid-cols-2 gap-3.5">
                  <IndField label="Company" placeholder="Company name" />
                  <IndSelect
                    value={industry}
                    onChange={setIndustry}
                    options={industryNames}
                  />
                </div>
                <ChipRow
                  label="Project budget"
                  options={BUDGETS}
                  value={budget}
                  onPick={setBudget}
                />
                <div className="mt-3.5">
                  <IndField
                    label="How can we help?"
                    placeholder="A sentence about your project"
                    textarea
                  />
                </div>
                <div className="mt-6">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    onClick={() => setSent(true)}
                  >
                    Submit request
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

function IndField({
  label,
  placeholder,
  textarea,
}: {
  label: string;
  placeholder: string;
  textarea?: boolean;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label htmlFor={id} className="flex flex-col gap-[7px]">
      <span className="font-sans font-semibold text-[12.5px] text-white/70">
        {label}
      </span>
      {textarea ? (
        <textarea
          id={id}
          rows={3}
          placeholder={placeholder}
          className={cn(fieldClass, "resize-none")}
        />
      ) : (
        <input id={id} placeholder={placeholder} className={fieldClass} />
      )}
    </label>
  );
}

function IndSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);

  return (
    <label className="flex flex-col gap-[7px]">
      <span className="font-sans font-semibold text-[12.5px] text-white/70">
        Industry
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "w-full cursor-pointer appearance-none rounded-(--r-md) border bg-white/4 py-3 pr-10 pl-3.5 font-sans text-[15px] outline-hidden transition-shadow",
            value ? "text-white" : "text-white/50",
            focused ? "border-tangerine-500 shadow-focus" : "border-white/16",
          )}
        >
          <option value="" className="text-fg1">
            Select industry
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-fg1">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-3 h-4 w-4 text-white/50"
          aria-hidden
        />
      </div>
    </label>
  );
}

function ChipRow({
  label,
  options,
  value,
  onPick,
}: {
  label: string;
  options: readonly string[];
  value: string | null;
  onPick: (value: string) => void;
}) {
  return (
    <div className="mt-[18px]">
      <div className="mb-2.5 font-sans font-semibold text-[12.5px] text-white/70">
        {label}
      </div>
      <div className="flex flex-wrap gap-[9px]">
        {options.map((option) => {
          const active = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onPick(option)}
              className={cn(
                "cursor-pointer rounded-pill border px-[15px] py-2 font-medium font-sans text-[13.5px] transition-all duration-150",
                active
                  ? "border-tangerine-500 bg-tangerine-500/14 text-tangerine-400"
                  : "border-white/16 bg-white/3 text-white/75",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
