"use client";

import { useEffect, useRef } from "react";

export function AboutAurora() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const canvas = canvasEl;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    const t0 = performance.now();
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const blobs = [
      {
        c: "88,120,235",
        r: 0.62,
        ax: 0.2,
        ay: 0.16,
        sx: 0.045,
        sy: 0.061,
        px: 0,
        py: 1.1,
        a: 0.55,
      },
      {
        c: "70,76,159",
        r: 0.74,
        ax: 0.16,
        ay: 0.2,
        sx: 0.037,
        sy: 0.043,
        px: 2.0,
        py: 0.4,
        a: 0.62,
      },
      {
        c: "120,150,240",
        r: 0.46,
        ax: 0.22,
        ay: 0.14,
        sx: 0.058,
        sy: 0.071,
        px: 4.1,
        py: 2.3,
        a: 0.42,
      },
      {
        c: "242,107,33",
        r: 0.3,
        ax: 0.18,
        ay: 0.12,
        sx: 0.032,
        sy: 0.05,
        px: 1.2,
        py: 3.4,
        a: 0.26,
      },
    ];

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, w * dpr);
      canvas.height = Math.max(1, h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(now: number) {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#02060F";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "screen";
      for (const b of blobs) {
        const cx = w * (0.5 + b.ax * Math.sin(t * b.sx * 6.28 + b.px));
        const cy = h * (0.42 + b.ay * Math.cos(t * b.sy * 6.28 + b.py));
        const rad = Math.max(w, h) * b.r;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        g.addColorStop(0, `rgba(${b.c},${b.a})`);
        g.addColorStop(0.5, `rgba(${b.c},${b.a * 0.32})`);
        g.addColorStop(1, `rgba(${b.c},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.globalCompositeOperation = "source-over";

      const horizon = h * 0.52;
      const cols = 26;
      ctx.fillStyle = "rgba(150,175,245,1)";
      for (let row = 0; row < 16; row++) {
        const rt = row / 15;
        const depth = rt ** 2.2;
        const y = horizon + depth * (h - horizon) * 1.06;
        if (y > h + 4) continue;
        const fade = 0.06 + rt * 0.5;
        const dotR = 0.5 + rt * 1.6;
        const spread = 0.5 + depth * 1.7;
        for (let cI = 0; cI <= cols; cI++) {
          const fx = (cI / cols - 0.5) * spread + 0.5;
          if (fx < -0.02 || fx > 1.02) continue;
          const x = fx * w;
          const tw = 0.6 + 0.4 * Math.sin(t * 1.4 + cI * 0.6 + row * 0.5);
          ctx.globalAlpha = Math.min(0.6, fade * tw);
          ctx.beginPath();
          ctx.arc(x, y, dotR, 0, 6.2832);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      if (!reduce) raf = requestAnimationFrame(draw);
    }

    resize();
    draw(performance.now());
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
