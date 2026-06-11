"use client";

import {
  ArrowRight,
  ArrowUpRight,
  LifeBuoy,
  Map as MapIcon,
  MonitorCheck,
  Network,
  Recycle,
  Search,
  ServerCog,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SignalField } from "@/components/geometry/signal-field";
import { XWatermark } from "@/components/geometry/x-watermark";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

function MgsEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-0.5 w-[26px] rounded-sm bg-tangerine-500" />
      <span className="font-sans font-semibold text-[13px] text-tangerine-500 uppercase tracking-[0.18em]">
        {children}
      </span>
    </div>
  );
}

function MgsRule() {
  return <div className="h-px w-full bg-indigo-800" />;
}

const TRUST = [
  "24/7 MONITORING",
  "ISO 27001 CERTIFIED",
  "120+ CLIENTS MANAGED",
] as const;

const PROCESS = [
  {
    n: "01",
    icon: Search,
    name: "Comprehensive Assessment",
    body: "We start with a thorough evaluation of your current IT environment to identify strengths, risks, and opportunities. No assumptions — just data.",
  },
  {
    n: "02",
    icon: MapIcon,
    name: "Customized Strategy",
    body: "We develop a tailored IT plan aligned with your business goals. Every recommendation ties directly to a measurable outcome.",
  },
  {
    n: "03",
    icon: LifeBuoy,
    name: "Implementation & Support",
    body: "We implement the agreed solutions with continuous monitoring and proactive support. One point of contact, not a ticket queue.",
  },
] as const;

const SERVICES = [
  {
    icon: MonitorCheck,
    name: "IT Support",
    body: "24/7 help desk and rapid incident response. We resolve issues fast so your people stay productive and your operations stay online.",
    featured: false,
  },
  {
    icon: Users,
    name: "Co-Managed IT",
    body: "Flexible support alongside your in-house team. We fill the gaps, handle overflow, and bring specialized expertise where you need it.",
    featured: true,
  },
  {
    icon: Network,
    name: "Network Administration",
    body: "Continuous oversight of your network. We proactively detect and resolve issues, maintain peak performance, and keep security strong.",
    featured: false,
  },
  {
    icon: ServerCog,
    name: "Server Management",
    body: "Proactive server monitoring, patching, and optimization. Critical infrastructure runs at peak performance and protected against threats.",
    featured: false,
  },
  {
    icon: ShieldCheck,
    name: "Cybersecurity & Compliance",
    body: "Baseline controls, threat monitoring, and compliance built in — aligned to SOC 2, HIPAA, and GDPR for your industry.",
    featured: false,
  },
  {
    icon: Recycle,
    name: "IT Asset Management & Disposal",
    body: "Full lifecycle tracking from procurement to certified disposal. Maintain compliance, reduce waste, and keep sensitive data controlled.",
    featured: false,
  },
] as const;

const WHY = [
  {
    title: "24/7 Proactive Monitoring",
    body: "We identify and resolve issues before they impact your business — no waiting for something to break.",
  },
  {
    title: "Single Point of Contact",
    body: "You outsource, we own the outcome. No finger-pointing between vendors, no runaround.",
  },
  {
    title: "Security Built In, Not Bolted On",
    body: "Every engagement includes baseline security controls and compliance-ready practices from day one.",
  },
  {
    title: "Strategic, Not Just Tactical",
    body: "Beyond fixing tickets, we help you plan for growth and align IT spending with business value.",
  },
] as const;

const FAQS = [
  {
    q: 'What does "managed IT" actually include?',
    a: "Xorora takes ownership of your IT environment: 24/7 monitoring, help desk support, patch management, infrastructure administration, server management, vendor coordination, and strategic planning. We become an extension of your team, not a break-fix shop you call when something fails.",
  },
  {
    q: "How is this different from co-managed IT?",
    a: "Fully managed means we own the entire IT function. Co-managed means we work alongside your existing in-house IT staff, filling gaps, handling overflow, and bringing specialized expertise where your team needs it. We tailor the model to your structure.",
  },
  {
    q: "How fast is your response time?",
    a: "Critical issues get an immediate response through our 24/7 monitoring, with most resolved before they ever impact your business. We agree exact response and resolution targets in your service-level agreement up front.",
  },
  {
    q: "Can you support our compliance requirements?",
    a: "Yes. Every managed IT engagement includes baseline security controls, and we align our practices with standards such as SOC 2, HIPAA, and GDPR depending on your industry. Compliance posture starts strong from day one.",
  },
  {
    q: "How does pricing work?",
    a: "Managed services are a predictable monthly fee scoped to your environment, team size, and coverage level. After a short assessment we provide a clear, itemized plan so there are no surprises.",
  },
  {
    q: "What happens during the transition from our current provider?",
    a: "We run a structured onboarding: a full assessment of your environment, documentation, and access handover, then a phased cutover with zero downtime as the goal. You get a single point of contact throughout.",
  },
] as const;

export function MgsHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-navy-900 pt-[72px]">
      <SignalField className="opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(70,76,159,0.20),transparent_60%)]" />
      <XWatermark
        size={760}
        color="rgba(255,255,255,0.03)"
        className="-translate-y-1/2 top-1/2 right-[-300px]"
      />
      <div className="svc-wrap relative z-5 px-8 py-[clamp(96px,11vw,150px)]">
        <MgsEyebrow>Managed Services</MgsEyebrow>
        <h1 className="mt-[26px] mb-[26px] max-w-[940px] font-extrabold font-sans text-[clamp(40px,6vw,72px)] text-white uppercase leading-tight tracking-[-0.02em]">
          Your IT should work as hard as{" "}
          <span className="text-indigo-400">your team does.</span>
        </h1>
        <p className="mb-10 max-w-[560px] font-sans text-lg text-slate-400 leading-relaxed">
          Xorora is an extension of your IT team — proactive management,
          monitoring, and support, so your people can focus on what moves the
          business forward.
        </p>
        <div className="mb-11 flex flex-wrap items-center gap-3.5">
          <LetsTalkContactLink
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </LetsTalkContactLink>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "onDark", size: "lg" })}
          >
            Book a strategy session
          </LetsTalkContactLink>
        </div>
        <div className="flex flex-wrap items-center gap-[18px]">
          {TRUST.map((t, i) => (
            <span key={t} className="flex items-center gap-[18px]">
              {i > 0 && <span className="h-3.5 w-px bg-slate-700" />}
              <span className="font-mono text-slate-400 text-xs tracking-[0.08em]">
                {t}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/40 to-transparent" />
    </section>
  );
}

export function MgsProcess() {
  return (
    <section className="bg-slate-950 px-8 py-[clamp(96px,11vw,120px)]">
      <div className="svc-wrap mx-auto max-w-[1180px]">
        <div className="mb-[72px] text-center">
          <MgsEyebrow>How we work</MgsEyebrow>
          <h2 className="mt-[18px] text-balance font-bold font-sans text-[clamp(30px,4vw,46px)] text-white leading-tight tracking-[-0.02em]">
            From assessment to optimization.
          </h2>
        </div>
        <div className="m2-process-grid relative grid grid-cols-3 gap-7">
          <div className="m2-connector pointer-events-none absolute top-[22px] right-[16%] left-[16%] h-px bg-indigo-900/30 max-[960px]:hidden" />
          {PROCESS.map((s) => (
            <div key={s.n} className="flex flex-col items-center">
              <div className="relative z-2 mb-7 flex h-11 w-11 items-center justify-center rounded-full border border-indigo-400 bg-indigo-800 font-bold font-sans text-indigo-300 text-lg">
                {s.n}
              </div>
              <div className="relative w-full overflow-hidden rounded-2xl border border-indigo-900/20 bg-slate-900 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <span className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-[10px] border border-[rgba(70,76,159,0.3)] bg-[rgba(70,76,159,0.12)] text-indigo-400">
                  <s.icon className="h-[21px] w-[21px]" />
                </span>
                <div className="mb-2 font-mono text-[11px] text-tangerine-400 tracking-[0.14em]">
                  STEP {s.n}
                </div>
                <h3 className="mb-2.5 font-sans font-semibold text-[19px] text-white leading-snug">
                  {s.name}
                </h3>
                <p className="m-0 font-sans text-[14.5px] text-slate-400 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MgsServices() {
  return (
    <section className="relative bg-navy-900 px-8 py-[clamp(96px,11vw,120px)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(rgba(70,76,159,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="svc-wrap relative mx-auto max-w-[1180px]">
        <MgsEyebrow>Our managed services</MgsEyebrow>
        <h2 className="mt-[18px] mb-14 max-w-[720px] text-balance font-extrabold font-sans text-[clamp(32px,5vw,56px)] text-white uppercase leading-tight tracking-[-0.02em]">
          Technology support that keeps you moving
        </h2>
        <div className="m2-services-grid grid grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <LetsTalkContactLink
              key={s.name}
              className={cn(
                "group relative flex min-h-[250px] cursor-pointer flex-col overflow-hidden rounded-2xl p-7 no-underline transition-all hover:translate-y-[-3px]",
                s.featured
                  ? "border border-indigo-500 bg-indigo-800 shadow-[inset_0_1px_0_rgba(107,112,182,0.4)]"
                  : "border border-indigo-900/20 bg-white/2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-indigo-900/45 hover:shadow-lg",
              )}
            >
              {s.featured && (
                <span className="absolute top-4 right-[18px] font-mono text-[10.5px] text-tangerine-400 tracking-[0.14em]">
                  FEATURED
                </span>
              )}
              <span className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[rgba(70,76,159,0.3)] bg-[rgba(70,76,159,0.12)] text-indigo-400">
                <s.icon className="h-[21px] w-[21px]" />
              </span>
              <h3 className="mt-4 mb-2.5 font-sans font-semibold text-lg text-white leading-snug">
                {s.name}
              </h3>
              <p
                className={cn(
                  "m-0 font-sans text-sm leading-relaxed",
                  s.featured ? "text-white/72" : "text-slate-400",
                )}
              >
                {s.body}
              </p>
              <span className="mt-auto inline-flex items-center gap-[7px] pt-[22px] font-medium font-sans text-[13px] text-tangerine-500 transition-all group-hover:translate-x-[3px] group-hover:text-tangerine-400">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </LetsTalkContactLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MgsWhy() {
  return (
    <section className="relative overflow-hidden bg-white px-8 py-[clamp(96px,11vw,120px)]">
      <div className="svc-wrap mx-auto max-w-[1180px]">
        <div className="m2-why-grid grid grid-cols-[0.66fr_1fr] items-start gap-[clamp(40px,6vw,80px)]">
          <div className="relative">
            <MgsEyebrow>Why Xorora</MgsEyebrow>
            <h2 className="mt-[18px] mb-[22px] font-extrabold font-sans text-[clamp(30px,4.4vw,52px)] text-xo-ink uppercase leading-tight tracking-[-0.02em]">
              A partner, not a vendor.
            </h2>
            <p className="m-0 max-w-[380px] font-sans text-[16.5px] text-slate-600 leading-relaxed">
              We don&apos;t sell technology and walk away. Xorora works
              alongside your organization to keep systems secure, your team
              productive, and your infrastructure aligned with where the
              business is headed.
            </p>
          </div>
          <div>
            {WHY.map((row, i) => (
              <div
                key={row.title}
                className={cn(
                  "flex gap-[18px] px-[22px] py-6 transition-colors hover:bg-slate-50",
                  i < WHY.length - 1 && "border-slate-200 border-b",
                )}
              >
                <span className="shrink-0 font-extrabold text-[22px] text-indigo-500 leading-snug">
                  ›
                </span>
                <div>
                  <h3 className="mb-1.5 font-sans font-semibold text-[16.5px] text-xo-ink">
                    {row.title}
                  </h3>
                  <p className="m-0 font-sans text-[14.5px] text-slate-600 leading-relaxed">
                    {row.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MgsIndustries({
  industries,
}: {
  industries: Array<{ name: string; href: string }>;
}) {
  return (
    <section className="bg-slate-950 px-8 py-[clamp(96px,11vw,120px)]">
      <div className="svc-wrap mx-auto max-w-[1180px] text-center">
        <MgsEyebrow>Industries we serve</MgsEyebrow>
        <h2 className="mt-[18px] mb-[18px] text-balance font-bold font-sans text-[clamp(28px,4vw,44px)] text-white leading-tight tracking-[-0.02em]">
          Managed IT tailored to your reality.
        </h2>
        <p className="mx-auto mb-11 max-w-[620px] font-sans text-base text-slate-500 leading-relaxed">
          We partner with organizations across regulated industries, each with
          distinct operational and compliance requirements.
        </p>
        <div className="mx-auto flex max-w-[880px] flex-wrap justify-center gap-3">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              href={ind.href}
              className="rounded-md border border-indigo-900/25 bg-indigo-900/8 px-4 py-2 font-medium font-mono text-[13px] text-indigo-300 tracking-[0.04em] no-underline transition-all hover:border-indigo-400/60 hover:bg-indigo-900/20 hover:text-white"
            >
              {ind.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MgsFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-navy-900 px-8 py-[clamp(96px,11vw,120px)]">
      <div className="svc-wrap mx-auto max-w-[860px]">
        <div className="mb-12 text-center">
          <MgsEyebrow>Frequently asked</MgsEyebrow>
          <h2 className="mx-auto mt-[18px] max-w-[560px] text-balance font-bold font-sans text-[clamp(28px,4vw,44px)] text-white leading-tight tracking-[-0.02em]">
            What organizations want to know.
          </h2>
        </div>
        <div>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={cn(
                  "border-slate-800 border-b transition-colors",
                  isOpen &&
                    "rounded-r-2xl rounded-l-none border-l-[3px] border-l-indigo-500 bg-indigo-900/6",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-[18px] border-none bg-transparent px-[clamp(18px,2.2vw,26px)] py-[clamp(18px,2vw,22px)] text-left"
                >
                  <span className="font-sans font-semibold text-base text-white leading-snug">
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 font-bold text-[22px] text-indigo-400 leading-none transition-transform",
                      isOpen && "rotate-90",
                    )}
                  >
                    ›
                  </span>
                </button>
                {isOpen && (
                  <p className="m-0 max-w-[740px] px-[clamp(18px,2.2vw,26px)] pb-[clamp(20px,2.4vw,26px)] font-sans text-[15px] text-slate-400 leading-relaxed">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MgsContact() {
  return (
    <section
      id="mgs-contact"
      className="relative overflow-hidden bg-linear-to-br from-indigo-900 to-navy-950 px-8 py-[clamp(96px,11vw,120px)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_30%,rgba(70,76,159,0.4),transparent_62%)]" />
      <div className="svc-wrap relative mx-auto max-w-[1180px]">
        <div className="m2-contact-grid grid grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(36px,5vw,72px)]">
          <div>
            <MgsEyebrow>Start the conversation</MgsEyebrow>
            <h2 className="mt-[22px] mb-[22px] font-extrabold font-sans text-[clamp(34px,4.6vw,56px)] text-white uppercase leading-tight tracking-[-0.02em]">
              Let&apos;s take IT off your plate.
            </h2>
            <p className="mb-7 max-w-[420px] font-sans text-[16.5px] text-slate-400 leading-relaxed">
              Tell us about your environment and goals. We respond within one
              business day with next steps and a preliminary plan.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/3 p-[clamp(26px,3vw,38px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <LetsTalkContactLink
              className={buttonClassName({
                variant: "primary",
                size: "lg",
                className: "w-full justify-center",
              })}
            >
              Submit request
              <ArrowUpRight className="h-4 w-4" />
            </LetsTalkContactLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export { MgsRule };
