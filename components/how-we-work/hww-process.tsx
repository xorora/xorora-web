"use client";

import {
  Activity,
  ClipboardCheck,
  Compass,
  FileLock2,
  GitMerge,
  Handshake,
  Layers,
  type LucideIcon,
  MessageCircle,
  Plug,
  Repeat,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { HwwFlows } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { HwwStep } from "./hww-data";

const ICON_MAP: Record<string, LucideIcon> = {
  "file-lock-2": FileLock2,
  users: Users,
  plug: Plug,
  "git-merge": GitMerge,
  activity: Activity,
  "shield-check": ShieldCheck,
  "trending-up": TrendingUp,
  handshake: Handshake,
  compass: Compass,
  rocket: Rocket,
  "clipboard-check": ClipboardCheck,
  repeat: Repeat,
  layers: Layers,
  "message-circle": MessageCircle,
};

type FlowMode = "staff" | "dedicated";

interface HwwProcessProps {
  flows: HwwFlows;
}

export function HwwProcess({ flows }: HwwProcessProps) {
  const [mode, setMode] = useState<FlowMode>("dedicated");
  const steps = flows[mode];
  const accent = mode === "staff" ? "var(--tangerine-500)" : "var(--xo-indigo)";

  return (
    <section
      id="hw-process"
      className="bg-surface px-8 pt-[clamp(64px,8vw,104px)] pb-[clamp(40px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[1180px]">
        <p className="mb-7 text-center font-sans font-semibold text-[clamp(20px,2.4vw,28px)] text-fg1 tracking-[-0.01em]">
          Choose the one that interests you
        </p>
        <div className="mb-3 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-pill bg-navy-900 p-1.5">
            <ToggleBtn
              active={mode === "staff"}
              onClick={() => setMode("staff")}
            >
              Staff Augmentation
            </ToggleBtn>
            <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-white/25 font-sans font-semibold text-tangerine-400 text-xs">
              or
            </span>
            <ToggleBtn
              active={mode === "dedicated"}
              onClick={() => setMode("dedicated")}
            >
              Dedicated Development Teams
            </ToggleBtn>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1180px] flex-col gap-[clamp(40px,5vw,72px)] pt-[clamp(40px,5vw,64px)]">
        {steps.map((step, index) => (
          <ProcessStep
            key={`${mode}-${step.n}`}
            step={step}
            flip={index % 2 === 1}
            accent={accent}
          />
        ))}
      </div>
    </section>
  );
}

function ToggleBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-pill border-none px-[22px] py-[13px] font-bold font-sans text-[clamp(14px,1.5vw,16px)] transition-all duration-200",
        active ? "bg-white text-tangerine-600" : "bg-transparent text-white/80",
      )}
    >
      {children}
    </button>
  );
}

function ProcessStep({
  step,
  flip,
  accent,
}: {
  step: HwwStep;
  flip: boolean;
  accent: string;
}) {
  return (
    <div className="hw-step-grid grid grid-cols-2 items-center gap-[clamp(28px,4vw,56px)]">
      <div className={flip ? "order-2" : "order-1"}>
        <div className="relative mb-4">
          <span className="font-extrabold font-sans text-[clamp(64px,8vw,104px)] text-slate-100 leading-[0.8] tracking-[-0.04em]">
            {step.n}
          </span>
          <div className="absolute bottom-1.5 left-1">
            <div className="mb-1 font-mono text-[11px] text-slate-400 tracking-[0.18em]">
              OUR WORKFLOW
            </div>
            <h3 className="m-0 font-bold font-sans text-[clamp(22px,2.6vw,32px)] text-fg1 tracking-[-0.015em]">
              <span style={{ color: accent }}>{step.title}</span> {step.accent}
            </h3>
          </div>
        </div>
        <p className="mb-6 max-w-[480px] font-sans text-base text-fg2 leading-relaxed">
          {step.body}
        </p>
        <div className="flex flex-col gap-[18px]">
          {step.items.map(([iconKey, title, body]) => {
            const Icon = ICON_MAP[iconKey] ?? Compass;
            return (
              <div key={title} className="flex gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--r-md)] bg-indigo-50 text-xo-indigo">
                  <Icon className="h-[19px] w-[19px]" aria-hidden />
                </span>
                <div>
                  <div className="mb-1 font-sans font-semibold text-[15.5px] text-fg1">
                    {title}
                  </div>
                  <p className="m-0 max-w-[440px] font-sans text-fg2 text-sm leading-snug">
                    {body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={flip ? "order-1" : "order-2"}>
        <StepVisual
          n={step.n}
          img={step.img}
          title={`${step.title} ${step.accent}`}
        />
        <div className="gap-y-[18px] mt-4 grid grid-cols-2 gap-x-6 rounded-[var(--r-lg)] border border-border bg-slate-50 p-[clamp(20px,2.4vw,28px)]">
          {step.meta.map(([key, value]) => (
            <div key={key}>
              <div
                className="mb-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em]"
                style={{ color: accent }}
              >
                {key}
              </div>
              <div className="font-sans text-fg1 text-sm leading-snug">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepVisual({
  n,
  img,
  title,
}: {
  n: string;
  img: string;
  title: string;
}) {
  return (
    <div
      className={cn(
        "group relative h-[320px] overflow-hidden rounded-[var(--r-xl)] border border-white/10 bg-[#080C1E]",
        "shadow-[0_20px_52px_-34px_rgba(8,12,30,0.5)]",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:translate-y-[-3px] hover:shadow-[0_34px_78px_-34px_rgba(8,12,30,0.65)]",
      )}
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="50vw"
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[rgba(8,12,30,0.32)] via-[rgba(8,12,30,0.12)] to-[rgba(8,12,30,0.74)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_8%,rgba(91,141,239,0.28),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-indigo-400 to-tangerine-500" />
      <span className="absolute top-4 right-[22px] font-extrabold font-sans text-[76px] text-white/12 leading-none tracking-[-0.04em]">
        {n}
      </span>
    </div>
  );
}
