"use client";

import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { XWatermark } from "@/components/geometry/x-watermark";
import { Button } from "@/components/ui/button";
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

const fieldClass =
  "w-full rounded-[var(--r-md)] border border-white/16 bg-white/[0.07] px-4 py-3.5 font-sans text-[14.5px] text-white outline-hidden transition-shadow placeholder:text-white/40 focus:border-tangerine-400 focus:shadow-[0_0_0_3px_rgba(255,138,61,0.25)]";

export function V2ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="sticky top-24 overflow-hidden rounded-[var(--r-xl)] bg-navy-900 p-[clamp(28px,3vw,40px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_90%_0%,rgba(70,76,159,0.5),transparent_58%)]" />
      <XWatermark
        size={300}
        color="rgba(120,150,240,0.06)"
        className="-left-20 bottom-[-120px]"
      />
      <div className="relative">
        <h3 className="mb-3 font-extrabold font-sans text-[clamp(24px,2.6vw,32px)] text-white leading-tight tracking-tight">
          Let&apos;s talk about your project
        </h3>
        <p className="mb-[26px] font-sans text-[14.5px] text-white/66 leading-relaxed">
          We respond within 2 hours during business hours with a real person,
          not an automated acknowledgement.
        </p>
        {sent ? (
          <div className="flex flex-col items-start gap-3.5 py-10">
            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-xo-indigo">
              <Check className="h-[26px] w-[26px] text-white" aria-hidden />
            </span>
            <h4 className="m-0 font-bold font-sans text-white text-xl">
              Thanks — we&apos;ll be in touch.
            </h4>
            <p className="m-0 font-sans text-[14.5px] text-white/66 leading-relaxed">
              A real person from our team will reply within 2 hours during
              business hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="mb-3 grid grid-cols-2 gap-3">
              <input
                required
                placeholder="First name*"
                className={fieldClass}
              />
              <input required placeholder="Last name*" className={fieldClass} />
            </div>
            <div className="mb-3 grid grid-cols-2 gap-3">
              <input
                required
                type="email"
                placeholder="Email*"
                className={fieldClass}
              />
              <input required placeholder="Phone*" className={fieldClass} />
            </div>
            <textarea
              required
              placeholder="How can we help you?*"
              rows={5}
              className={cn(fieldClass, "mb-4 resize-y")}
            />
            <p className="mb-[18px] font-sans text-white/50 text-xs leading-snug">
              By sending this form I confirm that I have read and accept the
              Xorora Privacy Policy.
            </p>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center"
            >
              Get a response in 2 hours
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </form>
        )}
        <div className="mt-6 flex flex-wrap gap-x-[22px] gap-y-3.5">
          {TRUST_ITEMS.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-[7px] font-sans text-[13px] text-white/80"
            >
              <Check
                className="h-[15px] w-[15px] text-tangerine-400"
                aria-hidden
              />
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-x-[26px] gap-y-3 border-white/10 border-t pt-[22px]">
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
  );
}
