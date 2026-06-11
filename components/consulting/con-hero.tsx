import { ArrowUpRight } from "lucide-react";
import { SignalField } from "@/components/geometry/signal-field";
import { LetsTalkContactLink } from "@/components/modals";
import { ServiceBreadcrumb, ServiceGlassForm } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";

export function ConHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-linear-to-br from-navy-700 via-38% via-[#15225C] to-[#2C57C9] pt-[72px]">
      <SignalField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_88%_30%,rgba(120,160,255,0.5)_0%,rgba(60,100,220,0.18)_34%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/50 to-transparent" />
      <div className="svc-header-grid relative z-10 mx-auto grid max-w-[1240px] grid-cols-[1.08fr_0.92fr] items-center gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(96px,11vw,140px)] pb-[clamp(64px,7vw,96px)]">
        <div>
          <ServiceBreadcrumb current="Consulting" />
          <h1 className="hero-reveal hero-reveal-1 mb-6 text-balance font-extrabold font-sans text-[clamp(34px,4.6vw,60px)] text-white leading-[1.02] tracking-[-0.03em]">
            IT consulting services that turn ambition into a{" "}
            <span className="text-tangerine-400">clear roadmap.</span>
          </h1>
          <p className="hero-reveal hero-reveal-2 mb-8 max-w-[520px] font-sans text-lg text-white/74 leading-relaxed">
            From IT strategy consulting to AI consulting services and AI digital
            transformation services, we help you find the right problem to
            solve, then map the fastest, lowest-risk path to a product in
            production.
          </p>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "light", size: "lg" })}
          >
            Schedule a Discovery Call
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
        <ServiceGlassForm title="Book a strategy session" />
      </div>
    </section>
  );
}
