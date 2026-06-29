"use client";

import { ArrowUpRight, Check, ChevronDown, Mail, Phone, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { XWatermark } from "@/components/geometry/x-watermark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LetsTalkModalProps {
  open: boolean;
  onClose: () => void;
  industryNames: string[];
}

const BUDGETS = [
  "up to $25k",
  "$25k – $50k",
  "$50k – $100k",
  "> $100k",
] as const;

export function LetsTalkModal({
  open,
  onClose,
  industryNames,
}: LetsTalkModalProps) {
  const [sent, setSent] = useState(false);
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSent(false);
      setIndustry("");
      setBudget(null);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="lt-fade pointer-events-auto fixed inset-0 z-200 flex items-center justify-center bg-[rgba(2,6,15,0.6)] p-[clamp(16px,4vw,48px)] backdrop-blur-[6px]">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 cursor-default border-0 bg-transparent"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lets-talk-title"
        className="lt-pop relative z-10 max-h-[92vh] w-full max-w-[1180px] overflow-hidden rounded-(--r-xl) border border-white/10 bg-navy-900 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,0.4), transparent 58%)",
          }}
        />
        <XWatermark
          size={420}
          color="rgba(120,150,240,0.05)"
          className="bottom-[-180px] left-[-120px]"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[18px] right-[18px] z-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-(--r-md) border border-white/14 bg-white/6 text-white/80 transition-colors duration-150 hover:bg-white/12 hover:text-white"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        <div className="lt-grid relative grid max-h-[92vh] grid-cols-[0.92fr_1.08fr] gap-[clamp(32px,5vw,64px)] overflow-y-auto p-[clamp(32px,4.5vw,60px)]">
          <div className="flex flex-col">
            <h2
              id="lets-talk-title"
              className="m-0 mb-[22px] font-extrabold font-sans text-[clamp(30px,3.8vw,46px)] text-white leading-[1.04] tracking-tight"
            >
              Tell us about your project.
            </h2>
            <p className="m-0 mb-7 max-w-[420px] font-sans text-base text-white/66 leading-[1.7]">
              Share a few details and our team will get back within one business
              day with next steps and a preliminary estimate.
            </p>
            <div className="mt-auto flex flex-col gap-3.5">
              {[
                { icon: Mail, value: "info@xorora.com" },
                { icon: Phone, value: "+92-332-0555328" },
              ].map(({ icon: Icon, value }) => (
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
                <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(46,158,107,0.18)] text-success">
                  <Check className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="m-0 mb-2 font-bold font-sans text-[22px] text-white">
                  Request received
                </h3>
                <p className="m-0 mb-[22px] font-sans text-[15px] text-white/65">
                  We will reach out within one business day.
                </p>
                <Button variant="onDark" onClick={onClose}>
                  Close
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3.5">
                  <LtField label="Full name" placeholder="Jordan Reyes" />
                  <LtField label="Work email" placeholder="you@company.com" />
                </div>
                <div className="mt-3.5 grid grid-cols-2 gap-3.5">
                  <LtField label="Company" placeholder="Company name" />
                  <LtSelect
                    value={industry}
                    onChange={setIndustry}
                    options={industryNames}
                  />
                </div>
                <LtChipRow
                  label="Project budget"
                  options={[...BUDGETS]}
                  value={budget}
                  onPick={setBudget}
                />
                <div className="mt-3.5">
                  <LtField
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
    </div>
  );
}

function LtField({
  label,
  placeholder,
  textarea,
}: {
  label: string;
  placeholder: string;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = useId();

  const className = cn(
    "box-border w-full resize-none rounded-[var(--r-md)] border bg-white/4 px-3.5 py-3 font-sans text-[15px] text-white outline-hidden",
    focused ? "border-tangerine-500 shadow-focus" : "border-white/16",
  );

  return (
    <div className="flex flex-col gap-[7px]">
      <label
        htmlFor={fieldId}
        className="font-sans font-semibold text-[12.5px] text-white/70"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={fieldId}
          rows={3}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={className}
        />
      ) : (
        <input
          id={fieldId}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={className}
        />
      )}
    </div>
  );
}

function LtSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);
  const selectId = useId();

  return (
    <div className="flex flex-col gap-[7px]">
      <label
        htmlFor={selectId}
        className="font-sans font-semibold text-[12.5px] text-white/70"
      >
        Industry
      </label>
      <div className="relative">
        <select
          id={selectId}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "box-border w-full cursor-pointer appearance-none rounded-(--r-md) border bg-white/4 py-3 pr-[38px] pl-3.5 font-sans text-[15px] outline-hidden",
            focused ? "border-tangerine-500 shadow-focus" : "border-white/16",
            value ? "text-white" : "text-white/50",
          )}
        >
          <option value="" className="text-xo-ink">
            Select industry
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-xo-ink">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-[13px] h-4 w-4 text-white/50"
          aria-hidden
        />
      </div>
    </div>
  );
}

function LtChipRow({
  label,
  options,
  value,
  onPick,
}: {
  label: string;
  options: string[];
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
                  ? "border-tangerine-500 bg-[rgba(242,107,33,0.14)] text-tangerine-400"
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
