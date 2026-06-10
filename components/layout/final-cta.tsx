import Link from "next/link";
import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";
import { Button } from "@/components/ui/button";
import { Chevron } from "@/components/ui/chevron";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";

interface FinalCTAProps {
  onContact?: () => void;
}

export function FinalCTA({ onContact }: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 120% at 50% 120%, rgba(70,76,159,0.45), transparent 60%)",
        }}
      />
      <XWatermark
        size={900}
        color="rgba(120,150,240,0.05)"
        className="-translate-x-1/2 bottom-[-380px] left-1/2"
      />
      <div className="relative mx-auto max-w-[1000px] px-8 py-32 text-center">
        <SignalRule
          color="var(--tangerine-400)"
          className="mb-7 justify-center"
        />
        <h2 className="m-0 mb-7 text-balance font-extrabold font-sans text-[clamp(40px,6.5vw,88px)] text-white leading-[0.98] tracking-[-0.03em]">
          Let&apos;s engineer
          <br />
          what&apos;s next.
        </h2>
        <p className="mx-auto mb-10 max-w-[540px] font-sans text-[19px] text-white/66 leading-relaxed">
          Book a build review. We&apos;ll pressure-test your idea and map the
          fastest path to production.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          {onContact ? (
            <Button variant="primary" size="lg" onClick={onContact}>
              Book a build review <Chevron size={16} />
            </Button>
          ) : (
            <a
              href="#contact"
              className={buttonClassName({ variant: "primary", size: "lg" })}
            >
              Book a build review <Chevron size={16} />
            </a>
          )}
          <Link
            href={ROUTES.ourWork}
            className={buttonClassName({ variant: "onDark", size: "lg" })}
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
