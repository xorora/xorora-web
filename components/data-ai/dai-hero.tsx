import { ArrowUpRight, Database } from "lucide-react";
import { SignalField } from "@/components/geometry/signal-field";
import { LetsTalkContactLink } from "@/components/modals";
import { ServiceGlassForm } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";

export function DaiHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-linear-to-br from-navy-700 via-38% via-[#15225C] to-[#2C57C9] pt-[72px]">
      <SignalField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_88%_30%,rgba(120,160,255,0.5)_0%,rgba(60,100,220,0.18)_34%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/50 to-transparent" />
      <div className="svc-header-grid relative z-10 mx-auto grid max-w-[1240px] grid-cols-[1.06fr_0.94fr] items-center gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(84px,10vw,128px)] pb-[clamp(64px,7vw,96px)]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-pill border border-white/22 bg-white/[0.07] px-4 py-[7px] font-mono text-white text-xs uppercase tracking-[0.18em] backdrop-blur-sm">
            <Database className="h-3.5 w-3.5" aria-hidden />
            AI &amp; Data Innovation
          </div>
          <h1 className="mb-6 text-balance font-extrabold font-sans text-[clamp(36px,5vw,66px)] text-white leading-none tracking-[-0.03em]">
            Your partner in AI and data innovation
            <span className="text-tangerine-400">.</span>
          </h1>
          <p className="mb-8 max-w-[520px] font-sans text-[18.5px] text-white/82 leading-relaxed">
            We accelerate data and AI adoption to create practical outcomes that
            strengthen teams and organizations.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <LetsTalkContactLink
              className={buttonClassName({ variant: "light", size: "lg" })}
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
            <LetsTalkContactLink
              className={buttonClassName({ variant: "onDark", size: "lg" })}
            >
              Book a discovery call
            </LetsTalkContactLink>
          </div>
        </div>
        <ServiceGlassForm
          title="Start growing your business with us"
          messageLabel="About project"
          messagePlaceholder="A sentence about your data or AI goals"
        />
      </div>
    </section>
  );
}
