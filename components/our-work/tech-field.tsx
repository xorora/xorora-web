"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TechFieldProps {
  className?: string;
}

export function TechField({ className }: TechFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    const start = performance.now();
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      accent: boolean;
    };

    type Pulse = {
      a: Node;
      b: Node;
      t: number;
      speed: number;
      accent: boolean;
    };

    let nodes: Node[] = [];
    let pulses: Pulse[] = [];

    const ctx2d = ctx;
    const canvasEl = canvas;

    function resize() {
      const parent = canvasEl.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvasEl.width = Math.max(1, width * dpr);
      canvasEl.height = Math.max(1, height * dpr);
      canvasEl.style.width = `${width}px`;
      canvasEl.style.height = `${height}px`;
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      const density = Math.max(
        34,
        Math.min(80, Math.round((width * height) / 17000)),
      );
      nodes = [];

      for (let i = 0; i < density; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.6 + 0.8,
          accent: Math.random() < 0.08,
        });
      }

      pulses = [];
    }

    const linkDistance = 132;
    const focal = () => ({ x: width * 0.78, y: height * 0.16 });

    function spawnPulse() {
      if (nodes.length < 2) return;

      const a = nodes[(Math.random() * nodes.length) | 0];
      let best: Node | null = null;
      let bestDistance = linkDistance;

      for (const b of nodes) {
        if (b === a) continue;
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = b;
        }
      }

      if (best) {
        pulses.push({
          a,
          b: best,
          t: 0,
          speed: 0.012 + Math.random() * 0.02,
          accent: Math.random() < 0.25,
        });
      }
    }

    function frame(now: number) {
      const time = (now - start) / 1000;
      ctx2d.clearRect(0, 0, width, height);
      const focus = focal();

      ctx2d.save();
      ctx2d.globalAlpha = 1;
      const horizonY = height * 0.04;
      const vanishX = width * 0.78;
      ctx2d.strokeStyle = "rgba(110,140,230,0.05)";
      ctx2d.lineWidth = 1;

      for (let i = -8; i <= 12; i++) {
        const baseX = (i / 12) * width * 1.6 + width * 0.1;
        ctx2d.beginPath();
        ctx2d.moveTo(baseX, height);
        ctx2d.lineTo(vanishX, horizonY);
        ctx2d.stroke();
      }

      const drift = (time * 14) % 70;
      for (let gy = horizonY; gy < height + 70; gy += 70) {
        const yy = gy + drift;
        const depth = (yy - horizonY) / (height - horizonY);
        ctx2d.globalAlpha = Math.max(0, Math.min(1, depth)) * 0.06;
        ctx2d.beginPath();
        ctx2d.moveTo(0, yy);
        ctx2d.lineTo(width, yy);
        ctx2d.stroke();
      }
      ctx2d.restore();

      for (const node of nodes) {
        if (!reduce) {
          node.x += node.vx;
          node.y += node.vy;
        }
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance < linkDistance) {
            const midpointX = (a.x + b.x) / 2;
            const midpointY = (a.y + b.y) / 2;
            const near =
              1 -
              Math.min(
                1,
                Math.hypot(midpointX - focus.x, midpointY - focus.y) /
                  (width * 0.95),
              );
            const alpha = (1 - distance / linkDistance) * (0.1 + near * 0.4);
            ctx2d.strokeStyle = `rgba(120,150,240,${alpha})`;
            ctx2d.lineWidth = 1;
            ctx2d.beginPath();
            ctx2d.moveTo(a.x, a.y);
            ctx2d.lineTo(b.x, b.y);
            ctx2d.stroke();
          }
        }
      }

      for (const node of nodes) {
        const near =
          1 -
          Math.min(
            1,
            Math.hypot(node.x - focus.x, node.y - focus.y) / (width * 0.95),
          );

        if (node.accent) {
          ctx2d.fillStyle = `rgba(255,138,61,${0.45 + near * 0.4})`;
        } else {
          ctx2d.fillStyle = `rgba(150,176,245,${0.3 + near * 0.55})`;
        }

        ctx2d.beginPath();
        ctx2d.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx2d.fill();
      }

      if (!reduce) {
        if (pulses.length < 14 && Math.random() < 0.16) spawnPulse();

        for (let i = pulses.length - 1; i >= 0; i--) {
          const pulse = pulses[i];
          pulse.t += pulse.speed;

          if (pulse.t >= 1) {
            pulses.splice(i, 1);
            continue;
          }

          const x = pulse.a.x + (pulse.b.x - pulse.a.x) * pulse.t;
          const y = pulse.a.y + (pulse.b.y - pulse.a.y) * pulse.t;
          const fade = Math.sin(pulse.t * Math.PI);
          const color = pulse.accent ? "255,160,90" : "150,190,255";
          const gradient = ctx2d.createRadialGradient(x, y, 0, x, y, 6);
          gradient.addColorStop(0, `rgba(${color},${0.9 * fade})`);
          gradient.addColorStop(1, `rgba(${color},0)`);
          ctx2d.fillStyle = gradient;
          ctx2d.beginPath();
          ctx2d.arc(x, y, 6, 0, Math.PI * 2);
          ctx2d.fill();
        }
      }

      raf = requestAnimationFrame(frame);
    }

    resize();
    seed();
    frame(performance.now());

    const onResize = () => {
      resize();
      seed();
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
