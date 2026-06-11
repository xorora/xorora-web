"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceGlassFormProps {
  title: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  showNda?: boolean;
  submitLabel?: string;
  buttonVariant?: "light" | "primary";
}

export function ServiceGlassForm({
  title,
  messageLabel = "What do you want to solve?",
  messagePlaceholder = "A sentence about your goal",
  showNda = true,
  submitLabel = "Send Message",
  buttonVariant = "light",
}: ServiceGlassFormProps) {
  const [sent, setSent] = useState(false);
  const [nda, setNda] = useState(false);

  return (
    <div className="relative rounded-(--r-xl) border border-white/22 bg-white/9 p-[clamp(28px,3vw,40px)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-[18px]">
      <div className="pointer-events-none absolute inset-0 rounded-(--r-xl) bg-linear-to-br from-white/14 to-45% to-transparent" />
      <div className="relative">
        {sent ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-success/20 text-success">
              <Check className="h-7 w-7" aria-hidden />
            </div>
            <h3 className="mb-2 font-bold font-sans text-2xl text-white">
              Message sent
            </h3>
            <p className="m-0 font-sans text-[15px] text-white/70">
              Our team will reply within one business day.
            </p>
          </div>
        ) : (
          <>
            <h2 className="mb-6 font-extrabold font-sans text-[clamp(24px,2.4vw,32px)] text-white leading-tight tracking-[-0.02em]">
              {title}
            </h2>
            <div className="grid grid-cols-2 gap-[18px] max-[560px]:grid-cols-1">
              <HeroField label="Full Name" placeholder="Jordan Reyes" />
              <HeroField label="Email" placeholder="you@company.com" />
            </div>
            <div className="mt-[18px]">
              <HeroField
                label={messageLabel}
                placeholder={messagePlaceholder}
                textarea
              />
            </div>
            {showNda && (
              <button
                type="button"
                onClick={() => setNda((v) => !v)}
                className="mt-5 flex cursor-pointer items-center gap-2.5 border-none bg-transparent p-0"
              >
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-(--r-sm) border transition-all duration-150",
                    nda
                      ? "border-tangerine-400 bg-tangerine-500"
                      : "border-white/40 bg-transparent",
                  )}
                >
                  {nda && <Check className="h-[13px] w-[13px] text-white" />}
                </span>
                <span className="font-sans text-sm text-white/85">
                  Send me an NDA first
                </span>
              </button>
            )}
            <div className="mt-[26px] flex flex-wrap items-center justify-between gap-4">
              <span className="max-w-[200px] font-sans text-[12.5px] text-white/65 leading-snug">
                By sending this form you accept our Privacy Policy.
              </span>
              <Button
                type="button"
                variant={buttonVariant}
                size="lg"
                onClick={() => setSent(true)}
              >
                {submitLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function HeroField({
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
    "w-full resize-none border-0 border-b bg-transparent px-0 py-[11px] font-sans text-[15px] text-white outline-hidden transition-colors",
    focused ? "border-tangerine-400" : "border-white/34",
  );

  return (
    <label htmlFor={fieldId} className="flex flex-col gap-1.5">
      <span className="font-sans font-semibold text-white/60 text-xs tracking-[0.02em]">
        {label}
      </span>
      {textarea ? (
        <textarea
          id={fieldId}
          rows={2}
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
    </label>
  );
}
