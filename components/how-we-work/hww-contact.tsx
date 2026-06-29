import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

const CONTACT_ITEMS = [
  { icon: Mail, value: "info@xorora.com" },
  { icon: Phone, value: "+92-332-0555328" },
] as const;

export function HwwContact() {
  return (
    <section className="relative overflow-hidden bg-navy-950 px-8 py-[clamp(72px,9vw,120px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(70,76,159,0.42),transparent_60%)]" />
      <XWatermark
        size={560}
        color="rgba(120,150,240,0.05)"
        className="-translate-x-1/2 bottom-[-240px] left-1/2"
      />
      <div className="relative mx-auto max-w-[760px] text-center">
        <SignalRule
          color="var(--tangerine-400)"
          className="mb-[26px] justify-center"
        />
        <h2 className="mb-[22px] text-balance font-extrabold font-sans text-[clamp(32px,5vw,60px)] text-white leading-tight tracking-tight">
          Start growing your business with us
          <span className="text-tangerine-400">.</span>
        </h2>
        <p className="mx-auto mb-9 max-w-[540px] font-sans text-[clamp(16px,1.9vw,19px)] text-white/70 leading-relaxed">
          Tell us about your project. We respond within one business day with a
          real person and a clear next step.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <LetsTalkContactLink
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "onDark", size: "lg" })}
          >
            Book a build review
          </LetsTalkContactLink>
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-x-[clamp(20px,4vw,40px)] gap-y-5">
          {CONTACT_ITEMS.map(({ icon: Icon, value }) => (
            <div
              key={value}
              className="flex items-center gap-2.5 font-sans text-[15px] text-white/82"
            >
              <Icon
                className="h-[17px] w-[17px] text-tangerine-400"
                aria-hidden
              />
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
    </section>
  );
}
