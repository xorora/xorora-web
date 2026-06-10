import { SignalField } from "@/components/geometry/signal-field";
import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";

export function BlogHeader() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-navy-950 pt-[72px]">
      <SignalField />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_-10%,rgba(91,141,239,0.28)_0%,rgba(39,85,195,0.10)_34%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[rgba(2,6,15,0.4)] via-transparent to-[rgba(2,6,15,0.55)]" />
      <XWatermark
        size={620}
        color="rgba(120,150,240,0.05)"
        className="top-[-150px] right-[-140px]"
      />
      <div className="relative mx-auto max-w-[900px] px-8 py-[clamp(96px,11vw,150px)] pb-[clamp(64px,7vw,92px)] text-center">
        <div className="mb-6 inline-flex items-center gap-3">
          <SignalRule color="var(--tangerine-400)" />
          <span className="font-mono text-[12.5px] text-tangerine-400 uppercase tracking-[0.22em]">
            The Xorora Blog
          </span>
          <SignalRule color="var(--tangerine-400)" className="scale-x-[-1]" />
        </div>
        <h1 className="mb-[22px] text-balance font-extrabold font-sans text-[clamp(38px,5.6vw,68px)] text-white leading-none tracking-[-0.03em]">
          Field notes on shipping{" "}
          <span className="bg-linear-to-r from-[#C3C6EC] via-[#8E94E0] to-tangerine-400 bg-clip-text text-transparent">
            production AI
          </span>
          <span className="text-tangerine-400">.</span>
        </h1>
        <p className="mx-auto max-w-[560px] font-sans text-[clamp(17px,2vw,20px)] text-white/74 leading-relaxed">
          Engineering practices, product thinking, and lessons from the systems
          we build. No hype, just what works.
        </p>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/40 to-transparent" />
    </section>
  );
}
