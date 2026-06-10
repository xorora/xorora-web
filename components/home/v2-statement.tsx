"use client";

import { useEffect, useRef, useState } from "react";
import { V2Rise } from "./v2-shared";

export function V2Statement() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh;
      setProgress(Math.min(1, Math.max(0, (vh - r.top) / total)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scale = 0.3 + progress * 1.5;
  const rise = (1 - progress) * 16;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-navy-950 px-8 py-[clamp(120px,17vh,210px)] pb-[clamp(140px,20vh,230px)]"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 aspect-square w-[min(1300px,145vw)] transition-transform duration-120 ease-linear"
        style={{
          transform: `translate(-50%, ${rise}%) scale(${scale})`,
          transformOrigin: "50% 100%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(70,104,224,0.85) 0%, rgba(46,80,200,0.45) 34%, rgba(39,71,192,0) 66%)",
        }}
      />
      <div
        className="-translate-x-1/2 pointer-events-none absolute bottom-[-22%] left-1/2 h-[1200px] w-[1200px] rounded-full opacity-40"
        style={{
          background:
            "repeating-radial-gradient(circle at center, rgba(131,163,238,0.06) 0px, rgba(131,163,238,0.06) 1px, transparent 1px, transparent 48px)",
        }}
      />
      <div className="relative mx-auto max-w-[960px] text-center">
        <V2Rise
          as="h2"
          className="mb-[30px] text-balance font-extrabold font-sans text-[clamp(40px,7vw,84px)] text-white leading-none tracking-tight"
        >
          Engineering first.
          <br />
          AI&#8209;enhanced<span className="text-tangerine-400">.</span>
        </V2Rise>
        <V2Rise
          as="p"
          delay={120}
          className="mx-auto max-w-[660px] font-light font-sans text-[clamp(16px,2vw,20px)] text-white/82 leading-relaxed"
        >
          The AI era doesn&apos;t replace engineering fundamentals — it raises
          the bar for them. The hard part is not the demo, but scaling,
          securing, integrating, and sustaining AI inside real products. We
          bring deep experience in complex systems, production delivery, and
          reliability-critical environments.
        </V2Rise>
      </div>
    </section>
  );
}
