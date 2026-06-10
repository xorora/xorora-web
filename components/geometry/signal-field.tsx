"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SignalFieldProps {
  className?: string;
}

export function SignalField({ className }: SignalFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const canvas = canvasEl;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    const start = performance.now();

    type Node = { x: number; y: number; p: number };
    let nodes: Node[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      nodes = [];
      const gap = 64;
      for (let x = 0; x < width + gap; x += gap) {
        for (let y = 0; y < height + gap; y += gap) {
          nodes.push({ x, y, p: Math.random() * Math.PI * 2 });
        }
      }
    };

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      context.clearRect(0, 0, width, height);

      const focalX = width * 0.8;
      const focalY = height * 0.12;

      for (const node of nodes) {
        const dx = node.x - focalX;
        const dy = node.y - focalY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const near = Math.max(0, 1 - distance / (width * 0.85));
        const twinkle = 0.5 + 0.5 * Math.sin(t * 1.2 + node.p);
        const alpha = (0.05 + near * 0.5) * (0.5 + 0.5 * twinkle);
        context.fillStyle = `rgba(140,168,242,${alpha})`;
        context.fillRect(node.x, node.y, 2, 2);
      }

      const period = 5.5;
      const pulseCount = 4;
      for (let i = 0; i < pulseCount; i++) {
        const phase = (t / period + i / pulseCount) % 1;
        const radius = Math.max(0, phase * Math.max(width, height) * 0.95);
        const alpha = (1 - phase) * 0.22;
        context.beginPath();
        context.arc(focalX, focalY, radius, 0, Math.PI * 2);
        context.strokeStyle = `rgba(110,150,245,${alpha})`;
        context.lineWidth = 1.2;
        context.stroke();
      }

      for (let i = 1; i <= 3; i++) {
        context.beginPath();
        context.arc(focalX, focalY, Math.max(0, i * 150), 0, Math.PI * 2);
        context.strokeStyle = "rgba(120,150,235,0.05)";
        context.lineWidth = 1;
        context.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    seed();
    raf = requestAnimationFrame(draw);

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
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden
    />
  );
}
