import { V2GlassCTA } from "./v2-glass-cta";
import { V2HeroCanvasDynamic } from "./v2-hero-canvas-dynamic";
import { V2Rise } from "./v2-shared";

export function V2Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#020209]">
      <V2HeroCanvasDynamic />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 42%, rgba(79,70,229,0.28) 0%, rgba(79,70,229,0.08) 38%, transparent 66%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] bg-linear-to-b from-transparent to-[#020209]" />
      <div className="relative z-10 mx-auto flex max-w-[1000px] flex-1 flex-col items-center justify-center px-8 py-[clamp(120px,15vh,200px)] pb-10 text-center">
        <V2Rise>
          <span className="lg mb-[30px] inline-flex items-center gap-2.5 rounded-pill py-1.5 pr-4 pl-1.5">
            <span className="rounded-pill bg-white px-[11px] py-1 font-bold font-sans text-[11.5px] text-xo-ink">
              NEW
            </span>
            <h1 className="m-0 font-normal font-sans text-[13.5px] text-white/82 leading-normal tracking-normal">
              Your AI Development Partner
            </h1>
          </span>
        </V2Rise>
        <V2Rise
          as="p"
          delay={80}
          className="mb-6 text-balance font-extrabold font-sans text-[clamp(48px,9vw,118px)] uppercase leading-[0.92] tracking-tight"
        >
          <span className="block text-white">Engineered</span>
          <span
            className="block text-transparent"
            style={{ WebkitTextStroke: "2.5px rgba(255,255,255,0.7)" }}
          >
            For Your
          </span>
          <span className="block text-white">
            Ambition<span className="text-tangerine-400">.</span>
          </span>
        </V2Rise>
        <V2Rise
          as="p"
          delay={180}
          className="mb-9 max-w-[540px] font-light font-sans text-[clamp(16px,2vw,19px)] text-white/78 leading-relaxed"
        >
          Production AI and software, built by a partner who ships. From the
          first prototype to the system your business runs on, wildly
          reimagined.
        </V2Rise>
        <V2Rise
          delay={260}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <V2GlassCTA>Book An Exploration Call</V2GlassCTA>
          <V2GlassCTA>Get a Quote</V2GlassCTA>
        </V2Rise>
      </div>
    </section>
  );
}
