"use client";

import { ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { XWatermark } from "@/components/geometry/x-watermark";
import { Button } from "@/components/ui/button";
import type { ContactInfo } from "@/lib/industries/types";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full resize-none rounded-[var(--r-md)] border border-white/16 bg-white/4 px-3.5 py-3 font-sans text-[15px] text-white outline-hidden transition-shadow placeholder:text-white/50 focus:border-tangerine-500 focus:shadow-focus";

interface IndustryContactProps {
  info: ContactInfo;
}

export function IndustryContact({ info }: IndustryContactProps) {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState<string | null>(null);
  const [hearAbout, setHearAbout] = useState<string | null>(null);

  return (
    <section className="bg-navy-950 px-8 py-[clamp(56px,7vw,96px)]">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[var(--r-xl)] border border-white/10 bg-navy-900 p-[clamp(32px,4.5vw,60px)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_90%_0%,rgba(70,76,159,0.4),transparent_58%)]" />
        <XWatermark
          size={420}
          color="rgba(120,150,240,0.05)"
          className="bottom-[-180px] left-[-120px]"
        />
        <div className="ind-page-contact-grid relative grid grid-cols-[0.92fr_1.08fr] gap-[clamp(36px,5vw,64px)]">
          <div className="flex flex-col">
            <h2 className="mb-[22px] font-extrabold font-sans text-[clamp(30px,3.8vw,46px)] text-white leading-tight tracking-tight">
              {info.title}
            </h2>
            {info.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-3.5 max-w-[420px] font-sans text-[15.5px] text-white/66 leading-[1.7]"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-auto flex flex-col gap-3.5">
              <ContactLine icon={Mail} value={info.email} />
              <ContactLine icon={Phone} value={info.phone} />
            </div>
          </div>

          <div className="rounded-[var(--r-lg)] border border-white/10 bg-white/3 p-[clamp(24px,3vw,32px)]">
            {sent ? (
              <div className="py-12 text-center">
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
                <div className="grid grid-cols-2 gap-3.5 max-[560px]:grid-cols-1">
                  <ContactField label="Your name" placeholder="Jordan Reyes" />
                  <ContactField
                    label="Work email"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="mt-3.5">
                  <ContactField
                    label="How can we help you?"
                    placeholder="A sentence about your ambition"
                    textarea
                  />
                </div>
                <ChipRow
                  label="What is your budget for this project?"
                  options={info.budgetOptions}
                  value={budget}
                  onPick={setBudget}
                />
                <ChipRow
                  label="How did you hear about us?"
                  options={info.hearAboutOptions}
                  value={hearAbout}
                  onPick={setHearAbout}
                />
                <div className="mt-6">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    onClick={() => setSent(true)}
                  >
                    Submit
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

function ContactLine({
  icon: Icon,
  value,
}: {
  icon: typeof Mail;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 font-sans text-[15px] text-white/85">
      <span className="flex h-9 w-9 items-center justify-center rounded-[var(--r-md)] border border-white/12 bg-white/6 text-tangerine-400">
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
  );
}

function ContactField({
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
          className={fieldClass}
        />
      ) : (
        <input id={id} placeholder={placeholder} className={fieldClass} />
      )}
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
