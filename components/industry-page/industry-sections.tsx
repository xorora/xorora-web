import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DarkSection } from "@/components/case-study/dark-section";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";
import { LetsTalkContactLink } from "@/components/modals";
import { ServiceFaq } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";
import type {
  CapabilityItem,
  FeaturedCaseItem,
  IconCardItem,
  IndustrySection,
  ServiceItem,
  ServiceRowItem,
} from "@/lib/industries/types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { AiCard } from "./ai-card";
import { CertLogo } from "./cert-logos";
import { HoverCard } from "./hover-card";
import { IndustryIcon } from "./icon-map";
import { IndustryContact } from "./industry-contact";
import { ProcessTabs } from "./process-tabs";

interface IndustrySectionsProps {
  sections: IndustrySection[];
}

function bgVar(bg?: "surface" | "slate-50") {
  return bg === "slate-50" ? "var(--slate-50)" : "var(--surface)";
}

export function IndustrySections({ sections }: IndustrySectionsProps) {
  return (
    <>
      {sections.map((section, index) => (
        <SectionRenderer key={`${section.type}-${index}`} section={section} />
      ))}
    </>
  );
}

function SectionRenderer({ section }: { section: IndustrySection }) {
  switch (section.type) {
    case "pain":
      return (
        <LightSection bg={bgVar(section.bg)}>
          <SectionHead
            label={section.heading.label}
            title={section.heading.title}
            sub={section.heading.subtitle ?? section.heading.lead}
            className="mb-[52px]"
          />
          <div className="ind-page-4grid grid grid-cols-4 gap-7">
            {section.items.map((item) => (
              <IconCard key={item.title} item={item} />
            ))}
          </div>
        </LightSection>
      );

    case "why":
      return (
        <DarkSection bloom="50% 6%">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              label={section.heading.label}
              title={section.heading.title}
              sub={section.heading.subtitle ?? section.heading.lead}
              onDark
              className="max-w-[620px]"
            />
            {section.callout && (
              <div className="flex max-w-80 items-center gap-3 rounded-r-lg border border-white/12 bg-white/5 px-5 py-4">
                <IndustryIcon
                  name={section.callout.icon}
                  className="h-5 w-5 shrink-0 text-tangerine-400"
                />
                <span className="font-sans text-[13.5px] text-white/78 leading-snug">
                  {section.callout.text}
                </span>
              </div>
            )}
          </div>
          <div className="ind-page-3grid grid grid-cols-3 gap-[18px]">
            {section.items.map((item) => (
              <DarkHoverCard key={item.title} item={item} />
            ))}
          </div>
        </DarkSection>
      );

    case "services":
      return (
        <LightSection bg={bgVar(section.bg)}>
          <SectionHead
            label={section.heading.label}
            title={section.heading.title}
            sub={section.heading.subtitle ?? section.heading.lead}
            className="mb-12"
          />
          {section.layout === "rows" ? (
            <div>
              {(section.items as ServiceRowItem[]).map((item, index) => (
                <ServiceRow key={item.title} item={item} first={index === 0} />
              ))}
            </div>
          ) : (
            <div className="ind-page-2grid grid grid-cols-2 gap-[22px]">
              {(section.items as ServiceItem[]).map((item) => (
                <ServiceCard key={item.name} item={item} />
              ))}
            </div>
          )}
        </LightSection>
      );

    case "ai-cards":
      return (
        <DarkSection bloom="50% 6%">
          <SectionHead
            label={section.heading.label}
            title={section.heading.title}
            sub={section.heading.subtitle ?? section.heading.lead}
            onDark
            className="mb-12"
          />
          <div className="ind-page-ai-grid grid grid-cols-3 gap-[18px]">
            {section.items.map((item, index) => (
              <AiCard
                key={item.title}
                item={item}
                featured={item.featured}
                spanRows={index === 0}
              />
            ))}
          </div>
        </DarkSection>
      );

    case "ai-groups":
      return (
        <LightSection bg={bgVar(section.bg)}>
          <SectionHead
            label={section.heading.label}
            title={section.heading.title}
            sub={section.heading.subtitle ?? section.heading.lead}
            className="mb-[52px]"
          />
          <div className="ind-page-2grid grid grid-cols-2 gap-x-14 gap-y-10">
            {section.items.map((group) => (
              <div key={group.name}>
                <div className="mb-2.5 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-r-md bg-indigo-50 text-xo-indigo">
                    <IndustryIcon
                      name={group.icon}
                      className="h-[21px] w-[21px]"
                    />
                  </span>
                  <h3 className="m-0 font-sans font-semibold text-fg1 text-xl">
                    {group.name}
                  </h3>
                </div>
                <p className="mb-4 font-sans text-[14.5px] text-fg2 leading-snug">
                  {group.subtitle}
                </p>
                <div className="flex flex-col gap-2.5 border-border border-t pt-4">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-[15px] w-[15px] shrink-0 text-tangerine-500"
                        aria-hidden
                      />
                      <span className="font-sans text-fg2 text-sm leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </LightSection>
      );

    case "certifications":
      return (
        <section className="relative overflow-hidden bg-indigo-50 px-8 py-[clamp(72px,9vw,118px)]">
          <div className="pointer-events-none absolute inset-0 bg-[repeating-radial-gradient(circle_at_85%_15%,rgba(70,76,159,0.06)_0px,rgba(70,76,159,0.06)_1px,transparent_1px,transparent_40px)] opacity-60" />
          <div className="ind-page-2col relative mx-auto grid max-w-[1180px] grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(36px,5vw,72px)]">
            <div>
              <SectionHead
                label={section.heading.label}
                title={section.heading.title}
                sub={section.heading.subtitle ?? section.heading.lead}
                titleSize="clamp(26px,3vw,38px)"
              />
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 font-sans text-base text-fg2 leading-[1.7] first:mt-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="ind-page-cert-grid grid grid-cols-3 gap-4">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-start gap-3.5 rounded-r-lg border border-border bg-surface px-4 py-[26px] text-center shadow-xs"
                >
                  <div className="flex h-[92px] items-center justify-center">
                    <CertLogo id={item.id} />
                  </div>
                  <span className="font-medium font-mono text-[10.5px] text-slate-500 uppercase tracking-widest">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "process-chart":
      return (
        <DarkSection bloom="20% 0%">
          <div className="ind-page-2col mb-[clamp(40px,6vw,72px)] grid grid-cols-2 items-start gap-[clamp(28px,4vw,56px)]">
            <SectionHead
              label={section.heading.label}
              title={section.heading.title}
              sub={section.heading.subtitle ?? section.heading.lead}
              onDark
            />
            <p className="m-0 pt-2 font-sans text-[17px] text-white/66 leading-[1.65]">
              {section.lead}
            </p>
          </div>

          <div className="ind-page-chart relative h-[460px]">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="indLine" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stopColor="#6E74C8" />
                  <stop offset="1" stopColor="#9AB0F0" />
                </linearGradient>
              </defs>
              <polyline
                points={section.steps.map((s) => `${s.x},${s.y}`).join(" ")}
                fill="none"
                stroke="url(#indLine)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              {section.steps.map((step) => (
                <circle
                  key={step.label}
                  cx={step.x}
                  cy={step.y}
                  r={0.9}
                  fill="#fff"
                  stroke="#6E74C8"
                  strokeWidth={2}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
            {section.steps.map((step, index) => (
              <div
                key={step.label}
                className="-translate-x-1/2 -translate-y-full absolute w-[150px] text-center"
                style={{
                  left: `${step.x}%`,
                  top: `${step.y}%`,
                  marginTop: -14,
                }}
              >
                <div className="mb-1.5 font-mono text-[11px] text-tangerine-400">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="font-sans text-[13px] text-white/82 leading-snug">
                  {step.label}
                </div>
              </div>
            ))}
          </div>

          <div className="ind-page-chart-mobile hidden">
            {section.steps.map((step, index) => (
              <div key={step.label} className="grid grid-cols-[44px_1fr] gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-300/40 bg-indigo-500/30 font-mono text-[13px] text-indigo-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < section.steps.length - 1 && (
                    <span className="my-1.5 w-0.5 flex-1 bg-indigo-400/40" />
                  )}
                </div>
                <div
                  className={cn(
                    "pt-2",
                    index < section.steps.length - 1 && "pb-6",
                  )}
                >
                  <span className="font-sans text-[15.5px] text-white leading-snug">
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[clamp(36px,5vw,56px)] text-center">
            <a
              href="#industry-form"
              className={buttonClassName({ variant: "primary", size: "lg" })}
            >
              {section.ctaLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </DarkSection>
      );

    case "process-steps":
      return (
        <DarkSection bloom="50% 4%">
          <SectionHead
            label={section.heading.label}
            title={section.heading.title}
            sub={section.heading.subtitle ?? section.heading.lead}
            onDark
            align="center"
            className="mb-14"
          />
          <div className="mx-auto max-w-[880px]">
            {section.steps.map((step, index) => (
              <div
                key={step.number}
                className="grid grid-cols-[56px_1fr] gap-[clamp(18px,2.5vw,32px)]"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-indigo-300/40 bg-indigo-500/30 font-mono text-indigo-300 text-sm">
                    {step.number}
                  </span>
                  {index < section.steps.length - 1 && (
                    <span className="my-2 w-0.5 flex-1 bg-linear-to-b from-indigo-400/50 to-indigo-400/10" />
                  )}
                </div>
                <div
                  className={cn(index < section.steps.length - 1 && "pb-10")}
                >
                  <h3 className="mt-1.5 mb-3 font-sans font-semibold text-[clamp(20px,2vw,26px)] text-white tracking-[-0.01em]">
                    {step.name}
                  </h3>
                  <p className="m-0 max-w-[640px] font-sans text-base text-white/66 leading-[1.65]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {(section.footer || section.ctaLabel) && (
            <div className="mt-2 text-center">
              {section.footer && (
                <p className="mx-auto mb-7 max-w-[760px] font-sans text-[15.5px] text-white/60 leading-[1.65]">
                  {section.footer}
                </p>
              )}
              {section.ctaLabel && (
                <a
                  href="#industry-form"
                  className={buttonClassName({
                    variant: "primary",
                    size: "lg",
                  })}
                >
                  {section.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              )}
            </div>
          )}
        </DarkSection>
      );

    case "process-tabs":
      return (
        <ProcessTabs
          heading={section.heading}
          lead={section.lead}
          tabs={section.tabs}
          ctaLabel={section.ctaLabel}
        />
      );

    case "faq":
      return (
        <ServiceFaq
          title={section.heading.title}
          label={section.heading.label}
          items={section.items.map((item) => ({
            q: item.question,
            a: item.answer,
          }))}
          layout={section.layout === "centered" ? "center" : "split"}
          bg={bgVar(section.bg)}
        />
      );

    case "band-cta":
      if (section.bg === "navy-950") {
        return (
          <section className="relative overflow-hidden bg-navy-950">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_160%_at_50%_130%,rgba(70,76,159,.5),transparent_62%)]" />
            <XWatermark
              size={520}
              color="rgba(120,150,240,0.05)"
              className="right-[-100px] bottom-[-240px]"
            />
            <div className="relative mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-7 px-8 py-[clamp(44px,6vw,72px)]">
              <h2 className="m-0 max-w-[640px] text-balance font-bold font-sans text-[clamp(26px,3.4vw,42px)] text-white leading-[1.08] tracking-[-0.02em]">
                {section.title}
              </h2>
              {section.ctaPrimary && (
                <LetsTalkContactLink
                  className={buttonClassName({ variant: "light", size: "lg" })}
                >
                  {section.ctaPrimary}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </LetsTalkContactLink>
              )}
            </div>
          </section>
        );
      }

      return (
        <section
          className="px-8 pb-[clamp(64px,8vw,104px)]"
          style={{
            background:
              section.bg === "surface" ? "var(--surface)" : "var(--slate-50)",
          }}
        >
          <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-r-xl bg-navy-900 p-[clamp(44px,6vw,80px)]">
            {section.headerBg && (
              <div
                className="pointer-events-none absolute inset-0 bg-center bg-cover opacity-[0.22]"
                style={{ backgroundImage: `url('${section.headerBg}')` }}
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(1,12,40,0.96)_0%,rgba(1,12,40,0.78)_55%,rgba(3,12,38,0.62)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_90%_0%,rgba(70,76,159,.45),transparent_60%)]" />
            <div className="relative flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-[640px]">
                <SignalRule
                  color="var(--tangerine-400)"
                  className="mb-[22px]"
                />
                <h2 className="mb-[18px] text-balance font-extrabold font-sans text-[clamp(30px,4vw,52px)] text-white leading-[1.04] tracking-tight">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="m-0 font-sans text-[17.5px] text-white/70 leading-[1.6]">
                    {section.subtitle}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-3.5">
                {section.ctaPrimary && (
                  <LetsTalkContactLink
                    className={buttonClassName({
                      variant: "light",
                      size: "lg",
                    })}
                  >
                    {section.ctaPrimary}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </LetsTalkContactLink>
                )}
                {section.ctaSecondary && (
                  <LetsTalkContactLink
                    className={buttonClassName({
                      variant: "onDark",
                      size: "lg",
                    })}
                  >
                    {section.ctaSecondary}
                  </LetsTalkContactLink>
                )}
              </div>
            </div>
          </div>
        </section>
      );

    case "featured-case":
      return (
        <LightSection bg="var(--slate-50)">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <SectionHead
              label={section.heading.label}
              title={section.heading.title}
              sub={section.heading.subtitle ?? section.heading.lead}
            />
            <Link
              href={ROUTES.ourWork}
              className="inline-flex items-center gap-2 font-sans font-semibold text-[14.5px] text-accent no-underline"
            >
              View all work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <FeaturedCaseCard caseItem={section.case} />
        </LightSection>
      );

    case "featured-cases":
      return (
        <LightSection bg="var(--slate-50)">
          <SectionHead
            label={section.heading.label}
            title={section.heading.title}
            sub={section.heading.subtitle ?? section.heading.lead}
            className="mb-9"
          />
          <div className="flex flex-col gap-6">
            {section.cases.map((caseItem) => (
              <FeaturedCaseCard key={caseItem.slug} caseItem={caseItem} />
            ))}
          </div>
        </LightSection>
      );

    case "capabilities":
      return section.items[0]?.number ? (
        <DarkSection bloom="50% 4%">
          <SectionHead
            label={section.heading.label}
            title={section.heading.title}
            sub={section.heading.subtitle ?? section.heading.lead}
            onDark
            align="center"
            className="mb-[52px]"
          />
          <div className="ind-page-3grid grid grid-cols-3 gap-5">
            {section.items.map((item) => (
              <NumberedCapabilityCard key={item.title} item={item} />
            ))}
          </div>
        </DarkSection>
      ) : (
        <DarkSection bloom="50% 6%">
          <SectionHead
            label={section.heading.label}
            title={section.heading.title}
            sub={section.heading.subtitle ?? section.heading.lead}
            onDark
            className="mb-[52px]"
          />
          <div className="ind-page-2grid grid grid-cols-2 gap-[18px]">
            {section.items.map((item) => (
              <CapabilityIconCard key={item.title} item={item} />
            ))}
          </div>
        </DarkSection>
      );

    case "clients":
      return (
        <LightSection bg={bgVar(section.bg)}>
          <SectionHead
            label={section.heading.label}
            title={section.heading.title}
            sub={section.heading.subtitle ?? section.heading.lead}
            className="mb-12"
          />
          <div className="ind-page-3grid grid grid-cols-3 gap-[22px]">
            {section.items.map((item) => (
              <HoverCard
                key={item.name}
                className="hover:-translate-y-0.5 rounded-r-lg border border-border bg-surface p-[clamp(26px,2.6vw,32px)] shadow-xs transition-all duration-220 hover:border-border-strong hover:shadow-md"
              >
                <span className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-r-md bg-indigo-50 text-xo-indigo">
                  <IndustryIcon
                    name={item.icon}
                    className="h-[23px] w-[23px]"
                  />
                </span>
                <h3 className="mb-3 font-sans font-semibold text-[clamp(18px,1.6vw,21px)] text-xo-indigo leading-tight">
                  {item.name}
                </h3>
                <p className="m-0 font-sans text-[15px] text-fg2 leading-relaxed">
                  {item.body}
                </p>
              </HoverCard>
            ))}
          </div>
        </LightSection>
      );

    case "challenges":
      return (
        <LightSection bg="var(--surface)">
          <div className="ind-page-2col mb-12 grid grid-cols-2 items-start gap-[clamp(28px,4vw,56px)]">
            <SectionHead
              label={section.heading.label}
              title={section.heading.title}
              sub={section.heading.subtitle ?? section.heading.lead}
              titleSize="clamp(28px,3.4vw,42px)"
            />
            {section.lead && (
              <p className="m-0 pt-2 font-sans text-[17px] text-fg2 leading-[1.65]">
                {section.lead}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-5">
            {section.items.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[56px_1fr] gap-[clamp(18px,2.5vw,32px)] rounded-r-lg border border-border bg-slate-50 p-[clamp(24px,2.6vw,30px)]"
              >
                <span className="font-extrabold font-sans text-[30px] text-indigo-300 leading-none tracking-[-0.02em]">
                  {item.number}
                </span>
                <div>
                  <h3 className="mb-2 font-sans font-semibold text-[clamp(18px,1.6vw,22px)] text-fg1">
                    {item.title}
                  </h3>
                  <p className="mb-3 font-sans text-[15px] text-fg2 leading-relaxed">
                    {item.body}
                  </p>
                  <p className="m-0 font-sans text-[15px] text-fg1 leading-relaxed">
                    <span className="font-semibold text-xo-indigo">
                      Solution:{" "}
                    </span>
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </LightSection>
      );

    case "industries":
      return (
        <LightSection bg="var(--surface)">
          <SectionHead
            label={section.heading.label}
            title={section.heading.title}
            sub={section.heading.subtitle ?? section.heading.lead}
            className="mb-[52px]"
          />
          <div className="ind-page-2grid grid grid-cols-2 gap-[22px]">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="rounded-r-lg border border-border bg-slate-50 p-[clamp(26px,2.6vw,32px)]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-r-md bg-indigo-50 text-xo-indigo">
                    <IndustryIcon
                      name={item.icon}
                      className="h-[21px] w-[21px]"
                    />
                  </span>
                  <h3 className="m-0 font-sans font-semibold text-fg1 text-xl">
                    {item.name}
                  </h3>
                </div>
                <p className="mb-4 font-sans text-[15px] text-fg2 leading-relaxed">
                  {item.body}
                </p>
                <ul className="m-0 list-none space-y-2.5 border-border border-t p-0 pt-4">
                  {item.items.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-[15px] w-[15px] shrink-0 text-tangerine-500"
                        aria-hidden
                      />
                      <span className="font-sans text-fg2 text-sm leading-snug">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </LightSection>
      );

    case "what-you-get":
      return (
        <LightSection bg="var(--slate-50)">
          <SectionHead
            label={section.heading.label}
            title={section.heading.title}
            sub={section.heading.subtitle ?? section.heading.lead}
            className="mb-[52px]"
          />
          <div className="ind-page-2grid grid grid-cols-2 gap-x-14 gap-y-10">
            {section.items.map((item) => (
              <div key={item.title} className="flex gap-5">
                <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-r-md bg-indigo-50 text-xo-indigo">
                  <IndustryIcon name={item.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="mt-1 mb-3 font-sans font-semibold text-[clamp(18px,1.6vw,21px)] text-fg1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="m-0 font-sans text-[15px] text-fg2 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </LightSection>
      );

    case "contact":
      return <IndustryContact info={section.info} />;

    default:
      return null;
  }
}

function IconCard({ item }: { item: IconCardItem }) {
  return (
    <div>
      <span className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-r-md bg-indigo-50 text-xo-indigo">
        <IndustryIcon name={item.icon} className="h-6 w-6" />
      </span>
      <h3 className="mb-3 font-sans font-semibold text-[19px] text-fg1 leading-tight">
        {item.title}
      </h3>
      <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
        {item.body}
      </p>
    </div>
  );
}

function DarkHoverCard({ item }: { item: IconCardItem }) {
  return (
    <HoverCard className="hover:-translate-y-0.5 relative overflow-hidden rounded-r-lg border border-white/12 bg-white/4 p-[clamp(24px,2.4vw,30px)] transition-[border-color,transform] duration-200 hover:border-indigo-300/50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-indigo-400 to-indigo-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <span className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-r-md border border-indigo-300/32 bg-indigo-500/28 text-indigo-300">
        <IndustryIcon name={item.icon} className="h-[22px] w-[22px]" />
      </span>
      <h3 className="mb-2.5 font-sans font-semibold text-[18.5px] text-white leading-tight">
        {item.title}
      </h3>
      <p className="m-0 font-sans text-[14.5px] text-white/62 leading-snug">
        {item.body}
      </p>
    </HoverCard>
  );
}

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <HoverCard
      as="a"
      href="#industry-form"
      className="hover:-translate-y-0.5 block rounded-r-lg border-l-[3px] border-l-xo-indigo bg-slate-50 p-[clamp(26px,2.6vw,32px)] no-underline transition-all duration-220 hover:border-border-strong hover:bg-surface hover:shadow-md"
    >
      <h3 className="mb-3 font-sans font-semibold text-[clamp(18px,1.6vw,21px)] text-fg1 leading-tight">
        {item.name}
      </h3>
      <p className="mb-5 font-sans text-[15px] text-fg2 leading-relaxed">
        {item.body}
      </p>
      {item.cta && (
        <span className="inline-flex items-center gap-2 font-sans font-semibold text-accent text-sm transition-colors duration-150 group-hover:text-tangerine-600">
          {item.cta}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      )}
    </HoverCard>
  );
}

function ServiceRow({
  item,
  first,
}: {
  item: ServiceRowItem;
  first?: boolean;
}) {
  return (
    <HoverCard
      className={cn(
        "ind-page-svc-row grid grid-cols-[54px_1.1fr_1.4fr] items-start gap-[clamp(16px,2.5vw,40px)] rounded-r-md px-2 py-[clamp(24px,2.6vw,30px)] transition-colors duration-180 hover:bg-slate-50",
        !first && "border-border border-t",
      )}
    >
      <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-r-md bg-indigo-50 text-xo-indigo transition-all duration-180 group-hover:bg-xo-indigo group-hover:text-white">
        <IndustryIcon name={item.icon} className="h-6 w-6" />
      </span>
      <h3 className="m-0 font-sans font-semibold text-[clamp(18px,1.6vw,22px)] text-fg1 leading-tight">
        {item.title}
      </h3>
      <p className="m-0 font-sans text-[15px] text-fg2 leading-relaxed">
        {item.body}
      </p>
    </HoverCard>
  );
}

function NumberedCapabilityCard({ item }: { item: CapabilityItem }) {
  return (
    <HoverCard className="hover:-translate-y-0.5 relative overflow-hidden rounded-r-lg border border-white/12 bg-white/4 p-[clamp(26px,2.6vw,32px)] transition-[border-color,transform] duration-200 hover:border-indigo-300/50">
      <div className="mb-[18px] font-extrabold font-sans text-[30px] text-indigo-300 leading-none tracking-[-0.02em]">
        {item.number}
      </div>
      <h3 className="mb-3 font-sans font-semibold text-[18.5px] text-white leading-tight">
        {item.title}
      </h3>
      <p className="m-0 font-sans text-[14.5px] text-white/64 leading-relaxed">
        {item.body}
      </p>
    </HoverCard>
  );
}

function CapabilityIconCard({ item }: { item: CapabilityItem }) {
  return (
    <HoverCard className="hover:-translate-y-0.5 relative flex gap-4 overflow-hidden rounded-r-lg border border-white/12 bg-white/4 p-[clamp(22px,2.4vw,28px)] transition-[border-color,transform] duration-200 hover:border-indigo-300/50">
      <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-r-md border border-indigo-300/32 bg-indigo-500/28 text-indigo-300">
        <IndustryIcon
          name={item.icon ?? "sparkles"}
          className="h-[22px] w-[22px]"
        />
      </span>
      <div>
        <h3 className="mb-2 font-sans font-semibold text-[17.5px] text-white leading-tight">
          {item.title}
        </h3>
        <p className="m-0 font-sans text-[14.5px] text-white/62 leading-snug">
          {item.body}
        </p>
      </div>
    </HoverCard>
  );
}

function FeaturedCaseCard({ caseItem }: { caseItem: FeaturedCaseItem }) {
  return (
    <Link
      href={ROUTES.caseStudy(caseItem.slug)}
      className="group hover:-translate-y-1 relative block overflow-hidden rounded-r-xl border border-white/10 bg-[linear-gradient(155deg,#141A38_0%,#080C1E_70%)] no-underline shadow-[0_24px_60px_-34px_rgba(8,12,30,.5)] transition-[transform,box-shadow] duration-300 hover:shadow-[0_40px_90px_-34px_rgba(8,12,30,.7)]"
    >
      <div className="absolute inset-x-0 top-0 z-3 h-[3px] bg-linear-to-r from-indigo-400 to-tangerine-500" />
      <XWatermark
        size={420}
        color="rgba(120,150,240,0.06)"
        className="bottom-[-180px] left-[40%]"
      />
      <div className="ind-page-feat-grid relative grid grid-cols-[1.02fr_0.98fr] items-stretch">
        <div className="flex flex-col justify-center p-[clamp(32px,4vw,56px)]">
          <h3 className="mb-[18px] font-bold font-sans text-[clamp(26px,2.9vw,38px)] text-white leading-tight tracking-[-0.02em]">
            {caseItem.title}
          </h3>
          <p className="mb-7 max-w-[480px] font-sans text-base text-white/68 leading-[1.65]">
            {caseItem.description}
          </p>
          <div className="mb-7 flex flex-wrap gap-[clamp(20px,3vw,40px)]">
            {caseItem.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="font-extrabold font-sans text-[clamp(24px,2.4vw,32px)] text-tangerine-400 leading-none tracking-[-0.02em]">
                  {metric.value}
                </div>
                <div className="mt-1.5 font-sans text-[12.5px] text-white/55">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mb-7 flex flex-wrap gap-2">
            {caseItem.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-pill border border-white/12 bg-white/6 px-[13px] py-1.5 font-mono text-[11px] text-white/70 tracking-[0.06em]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex w-fit items-center gap-2.5 rounded-pill bg-white px-[26px] py-[13px] font-sans font-semibold text-[15px] text-xo-ink transition-transform duration-200 group-hover:translate-x-0.5">
            Read more
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
        <div className="ind-page-feat-media relative min-h-[380px] overflow-hidden">
          <Image
            src={caseItem.image}
            alt={caseItem.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 980px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,#080C1E_0%,rgba(8,12,30,0.5)_30%,rgba(8,12,30,0.12)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_80%_10%,rgba(91,141,239,0.3),transparent_60%)]" />
        </div>
      </div>
    </Link>
  );
}
