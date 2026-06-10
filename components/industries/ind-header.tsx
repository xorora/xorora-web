import { SignalField } from "@/components/geometry/signal-field";
import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";

const STATS = [
  ["9", "Industries served"],
  ["40+", "Systems shipped"],
  ["100%", "Production focused"],
] as const;

export function IndHeader() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <SignalField />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_18%_0%,rgba(91,141,239,0.28)_0%,rgba(39,85,195,0.10)_32%,rgba(1,12,40,0)_64%)]" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[rgba(1,12,40,0.32)] via-transparent to-[rgba(2,6,15,0.9)]" />
      <XWatermark
        size={680}
        color="rgba(120,150,240,0.05)"
        className="top-[-170px] right-[-160px]"
      />
      <div className="relative mx-auto max-w-[1000px] px-8 py-[clamp(130px,13vw,170px)] pb-[clamp(64px,7vw,92px)] text-center">
        <div className="ind-reveal mb-6 inline-flex items-center gap-3">
          <SignalRule color="var(--tangerine-400)" />
          <span className="font-mono text-[12.5px] text-tangerine-400 uppercase tracking-[0.22em]">
            Industries
          </span>
          <SignalRule color="var(--tangerine-400)" className="scale-x-[-1]" />
        </div>
        <h1 className="ind-reveal mb-6 text-balance font-extrabold font-sans text-[clamp(38px,5.6vw,68px)] text-white leading-none tracking-[-0.03em] delay-60">
          Industries we serve
          <span className="text-tangerine-400">.</span>
        </h1>
        <p className="ind-reveal mx-auto max-w-[620px] font-sans text-[clamp(17px,2vw,20px)] text-white/74 leading-relaxed delay-120">
          We bring deep domain knowledge to every engagement, building custom
          software and AI that fits how your industry actually operates, from
          first prototype to production scale.
        </p>
        <div className="ind-reveal mt-11 flex flex-wrap items-center justify-center gap-x-[-clamp(20px,4vw,48px)] gap-y-5 delay-180">
          {STATS.map(([value, label]) => (
            <div key={label} className="flex items-center gap-3.5">
              <div className="font-extrabold font-sans text-[clamp(26px,3vw,38px)] text-white leading-none tracking-[-0.02em]">
                {value}
                <span className="text-tangerine-400">.</span>
              </div>
              <div className="max-w-[110px] text-left font-sans text-[13px] text-white/60 leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/40 to-transparent" />
    </section>
  );
}
