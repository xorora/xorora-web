import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";
import { TechFieldDynamic } from "./tech-field-dynamic";
import { WorkHeaderActions } from "./work-header-actions";

export function WorkHeader() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <TechFieldDynamic />
      <div className="ow-beams pointer-events-none absolute inset-0">
        <span className="ow-beam ow-beam-1" />
        <span className="ow-beam ow-beam-2" />
        <span className="ow-beam ow-beam-3" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(91,141,239,0.26)_0%,rgba(39,85,195,0.10)_32%,rgba(1,12,40,0)_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_50%_at_50%_44%,rgba(2,6,15,0.5)_0%,rgba(2,6,15,0)_72%)]" />
      <XWatermark
        size={720}
        color="rgba(120,150,240,0.05)"
        className="top-[-180px] right-[-160px]"
      />
      <div className="relative mx-auto max-w-[1100px] px-8 py-[clamp(124px,13vw,168px)] pb-[clamp(80px,9vw,116px)] text-center">
        <div className="mb-[26px] inline-flex items-center gap-3">
          <SignalRule color="var(--tangerine-400)" />
          <span className="font-mono text-[13px] text-tangerine-400 uppercase tracking-[0.24em]">
            Case Studies
          </span>
          <SignalRule color="var(--tangerine-400)" className="scale-x-[-1]" />
        </div>
        <h1 className="m-0 mb-6 text-balance font-extrabold font-sans text-[clamp(44px,7vw,92px)] text-white leading-[0.98] tracking-[-0.03em]">
          Work that{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(100deg, #C3C6EC, #8E94E0 45%, #FF8A3D)",
            }}
          >
            ships and scales
            <span className="text-tangerine-400">.</span>
          </span>
        </h1>
        <p className="mx-auto mb-[38px] max-w-[600px] font-sans text-[clamp(17px,2vw,20px)] text-white/72 leading-relaxed">
          Production AI and software, engineered end-to-end. A look at what
          we&apos;ve built with ambitious teams, from the first prototype to the
          system their business runs on.
        </p>
        <WorkHeaderActions />
      </div>
    </section>
  );
}
