"use client";

import { useEffect, useRef } from "react";

const BARS = [
  { w: 230, c: "#2A2F66" },
  { w: 196, c: "#343A7D" },
  { w: 162, c: "#3E4593" },
  { w: 128, c: "#474EA0" },
  { w: 94, c: "#5860C0" },
  { w: 60, c: "#6E78D8" },
] as const;

const SHARDS: Array<[number, number, number, string]> = [
  [170, -120, 60, "rgba(120,150,240,.5)"],
  [-180, 90, 40, "rgba(242,107,33,.55)"],
  [150, 120, 30, "rgba(150,170,250,.45)"],
  [-130, -110, 22, "rgba(255,176,122,.5)"],
];

export function Brand3D() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapEl = wrapRef.current;
    const sceneEl = sceneRef.current;
    if (!wrapEl || !sceneEl) return;

    const wrap = wrapEl;
    const scene = sceneEl;

    let rx = -18;
    let ry = -28;
    let trx = -18;
    let try_ = -28;
    let raf = 0;
    let t = 0;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function onMove(e: PointerEvent) {
      const r = wrap.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      trx = -18 - py * 16;
      try_ = -28 + px * 26;
    }

    function onLeave() {
      trx = -18;
      try_ = -28;
    }

    function loop() {
      t += 0.012;
      rx += (trx - rx) * 0.06;
      ry += (try_ - ry) * 0.06;
      const floatY = Math.sin(t) * 10;
      const breathe = ry + (reduce ? 0 : Math.sin(t * 0.5) * 6);
      scene.style.transform = `translateY(${floatY}px) rotateX(${rx}deg) rotateY(${breathe}deg)`;
      if (!reduce) raf = requestAnimationFrame(loop);
      else scene.style.transform = "rotateX(-18deg) rotateY(-28deg)";
    }

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="perspective-origin-[55%_45%] perspective-[1100px] relative h-full min-h-[420px] w-full"
    >
      <div className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-[58%] left-1/2 h-[420px] w-[420px] bg-[radial-gradient(circle,rgba(91,141,239,0.35),transparent_62%)] blur-[20px]" />

      <div
        ref={sceneRef}
        className="transform-3d absolute inset-0 will-change-transform"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 transform-3d absolute top-1/2 left-1/2">
          {BARS.map((bar, i) => {
            const z = (BARS.length - 1 - i) * 26 - 65;
            const y = i * 34 - 95;
            return (
              <div
                key={bar.w}
                className="absolute top-1/2 left-1/2 h-5 rounded-[3px] border border-indigo-300/25 shadow-[0_14px_30px_-10px_rgba(2,6,15,0.7)]"
                style={{
                  width: bar.w,
                  marginLeft: -bar.w / 2,
                  marginTop: -10,
                  transform: `translateZ(${z}px) translateY(${y}px)`,
                  background: `linear-gradient(180deg, ${bar.c}, ${bar.c}cc)`,
                  boxShadow: `0 1px 0 rgba(255,255,255,.18) inset, 0 14px 30px -10px rgba(2,6,15,.7)`,
                }}
              />
            );
          })}
          <div
            className="absolute top-1/2 left-1/2 h-4 w-4 rounded-[3px] shadow-[0_0_24px_rgba(242,107,33,0.8)]"
            style={{
              marginLeft: -8,
              marginTop: -8,
              transform: "translateZ(91px) translateY(-130px) rotate(45deg)",
              background: "linear-gradient(135deg, #FFB07A, #F26B21)",
            }}
          />
        </div>

        <div
          className="transform-3d absolute top-1/2 left-1/2"
          style={{
            transform:
              "translate(-50%,-50%) translateZ(140px) translateX(-150px) rotateY(34deg)",
          }}
        >
          <div
            className="h-[220px] w-[86px] border border-indigo-300/30 shadow-[0_30px_60px_-18px_rgba(2,6,15,0.7)]"
            style={{
              background: "linear-gradient(150deg, #5860C0, #2A2F66)",
              clipPath:
                "polygon(0 0, 55% 0, 100% 50%, 55% 100%, 0 100%, 45% 50%)",
            }}
          />
        </div>

        {SHARDS.map(([x, y, z, color]) => (
          <div
            key={`${x}-${y}`}
            className="absolute top-1/2 left-1/2 h-4 w-4 rounded-[2px]"
            style={{
              marginLeft: -8,
              marginTop: -8,
              transform: `translate3d(${x}px, ${y}px, ${z}px) rotate(45deg)`,
              background: color,
              boxShadow: `0 0 16px ${color}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
