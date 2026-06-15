import { ArrowUpRight } from "lucide-react";
import { SignalField } from "@/components/geometry/signal-field";
import { LetsTalkContactLink } from "@/components/modals";
import { ServiceBreadcrumb, ServiceGlassForm } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";

export function EngHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-navy-950 pt-[72px]">
      <SignalField />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_18%_0%,rgba(91,141,239,0.30)_0%,rgba(39,85,195,0.10)_34%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/40 to-transparent" />
      <div className="svc-header-grid relative z-10 mx-auto grid max-w-[1240px] grid-cols-[1.08fr_0.92fr] items-center gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(96px,11vw,140px)] pb-[clamp(64px,7vw,96px)]">
        <div>
          <ServiceBreadcrumb current="Engineering" />
          <h1 className="hero-reveal hero-reveal-1 mb-6 text-balance font-extrabold font-sans text-[clamp(36px,4.8vw,62px)] text-white leading-none tracking-[-0.03em]">
            Software product engineering that&nbsp;
            <span className="bg-linear-to-br from-[#C3C6EC] via-[#8E94E0] to-tangerine-400 bg-clip-text text-transparent">
              ships and scales
            </span>
            <span className="text-tangerine-400">.</span>
          </h1>
          <p className="hero-reveal hero-reveal-2 mb-8 max-w-[520px] font-sans text-lg text-white/74 leading-relaxed">
            Xorora is a software product engineering services company. From the
            first prototype to the platform your business runs on, we design,
            build, and harden production software, full stack, end to end.
          </p>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "light", size: "lg" })}
          >
            Schedule a Discovery Call
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
        <ServiceGlassForm
          title="Start building with us"
          messageLabel="About project"
          messagePlaceholder="Tell us what you want to build"
          buttonVariant="primary"
        />
      </div>
    </section>
  );
}
