import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { XWatermark } from "@/components/geometry/x-watermark";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";
import { AboutAurora } from "./about-aurora";

export function AboutHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-navy-950 pt-[72px]">
      <AboutAurora />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_42%,rgba(2,6,15,0.55)_0%,rgba(2,6,15,0)_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[rgba(2,6,15,0.5)] via-transparent to-transparent" />
      <XWatermark
        size={620}
        color="rgba(150,175,245,0.05)"
        className="-translate-x-1/2 top-[-150px] left-1/2"
      />

      <div className="relative mx-auto max-w-[900px] px-8 py-[clamp(120px,13vw,176px)] pb-[clamp(96px,11vw,140px)] text-center">
        <div className="mb-7 inline-flex items-center gap-[9px] rounded-pill border border-white/16 bg-white/6 px-4 py-2 font-sans font-semibold text-[13px] text-white/90 backdrop-blur-sm">
          <span className="h-[7px] w-[7px] rounded-full bg-tangerine-400 shadow-[0_0_8px_var(--tangerine-400)]" />
          Your AI Development Partner
        </div>
        <h1 className="mb-[22px] text-balance font-extrabold font-sans text-[clamp(40px,6vw,72px)] text-white leading-none tracking-[-0.03em]">
          Your technology partner.
          <br />
          <span className="bg-linear-to-r from-[#C3C6EC] via-[#8E94E0] to-tangerine-400 bg-clip-text text-transparent">
            Not just another vendor
            <span className="text-tangerine-400">.</span>
          </span>
        </h1>
        <p className="mx-auto mb-[38px] max-w-[560px] font-sans text-[clamp(17px,2vw,20px)] text-white/74 leading-relaxed">
          We build software the way a co-founder would. With ownership, urgency,
          and long-term thinking.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <LetsTalkContactLink
            className={buttonClassName({ variant: "light", size: "lg" })}
          >
            Talk to a strategy expert
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
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
