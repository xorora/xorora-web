import { ArrowUpRight } from "lucide-react";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { Brand3DDynamic } from "./brand-3d-dynamic";

export function HwwHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-navy-950 pt-[72px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_78%_40%,rgba(70,76,159,0.4)_0%,rgba(39,85,195,0.12)_36%,transparent_66%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:repeating-radial-gradient(circle_at_78%_42%,rgba(120,150,240,0.06)_0px,rgba(120,150,240,0.06)_1px,transparent_1px,transparent_52px)]" />
      <div className="hw-hero-grid relative mx-auto grid max-w-[1240px] grid-cols-[1.06fr_0.94fr] items-center gap-[clamp(32px,4vw,56px)] px-8 py-[clamp(70px,8vw,104px)] pb-[clamp(80px,9vw,116px)]">
        <div>
          <div className="mb-[26px] inline-flex items-center gap-[9px] rounded-pill border border-white/16 bg-white/6 px-4 py-2 font-sans font-semibold text-[13px] text-white/90 backdrop-blur-sm">
            <span className="h-[7px] w-[7px] rounded-full bg-tangerine-400 shadow-[0_0_8px_var(--tangerine-400)]" />
            How We Work
          </div>
          <h1 className="mb-6 text-balance font-extrabold font-sans text-[clamp(38px,5.4vw,68px)] text-white leading-none tracking-[-0.03em]">
            We serve business and{" "}
            <span className="bg-linear-to-r from-[#C3C6EC] via-[#8E94E0] to-tangerine-400 bg-clip-text text-transparent">
              tech leaders
            </span>{" "}
            building software
            <span className="text-tangerine-400">.</span>
          </h1>
          <p className="mb-[18px] max-w-[520px] font-sans text-[clamp(17px,1.9vw,20px)] text-white/74 leading-relaxed">
            Discover how we work behind the scenes. Engage a cross-functional
            team or dedicated experts, matched to how you build.
          </p>
          <div className="mt-6 flex flex-wrap gap-3.5">
            <LetsTalkContactLink
              className={buttonClassName({ variant: "light", size: "lg" })}
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
            <a
              href="#hw-process"
              className={buttonClassName({ variant: "onDark", size: "lg" })}
            >
              See our workflow
            </a>
          </div>
        </div>
        <div className="hw-hero-3d min-h-[440px]">
          <Brand3DDynamic />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/40 to-transparent" />
    </section>
  );
}
