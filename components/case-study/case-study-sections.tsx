import {
  AlertCircle,
  ArrowUpRight,
  BellRing,
  Check,
  Cloud,
  CreditCard,
  Database,
  LayoutDashboard,
  Layers,
  type LucideIcon,
  Plug,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { BrowserFrame } from "@/components/case-study/browser-frame";
import { XWatermark } from "@/components/geometry/x-watermark";

const ARCH_ICONS: Record<string, LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  server: Server,
  "shield-check": ShieldCheck,
  database: Database,
  "credit-card": CreditCard,
  plug: Plug,
  workflow: Workflow,
  sparkles: Sparkles,
  "bell-ring": BellRing,
  zap: Zap,
  cloud: Cloud,
};
import type {
  BulletItem,
  CaseStudySection,
  CaseStudySectionContent,
} from "@/lib/case-studies/types";
import { cn } from "@/lib/utils";
import { DarkSection } from "./dark-section";
import { LightSection } from "./light-section";
import { SectionHead } from "./section-head";

function parseChips(chips?: string): string[] {
  if (!chips) return [];
  const [, values] = chips.split(":");
  const raw = values ?? chips;
  return raw
    .split("·")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeBullet(bullet: BulletItem | string): {
  title?: string;
  body: string;
} {
  if (typeof bullet === "string") {
    return { body: bullet };
  }
  return bullet;
}

function MetaGrid({
  meta,
}: {
  meta: NonNullable<CaseStudySectionContent["meta"]>;
}) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {meta.map((item) => (
        <div
          key={item.label}
          className="rounded-[var(--r-lg)] border border-border bg-white px-5 py-4"
        >
          <div className="font-mono text-[10.5px] text-fg3 uppercase tracking-[0.12em]">
            {item.label}
          </div>
          <div className="mt-1 font-sans font-semibold text-[15px] text-fg1">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChipPills({ chips }: { chips?: string }) {
  const items = parseChips(chips);
  if (items.length === 0) return null;

  return (
    <div className="mt-7 flex flex-wrap gap-2.5">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-[15px] py-2 font-medium font-sans text-[13.5px] text-slate-700"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-xo-indigo" />
          {item}
        </span>
      ))}
    </div>
  );
}

function OverviewSection({ content }: { content: CaseStudySectionContent }) {
  return (
    <LightSection bg="var(--indigo-50)">
      <div className="cs-overview-grid grid grid-cols-2 items-center gap-[clamp(36px,5vw,72px)]">
        <div>
          <SectionHead
            label={content.label}
            title={content.title ?? "The big picture"}
            titleSize="clamp(30px,4vw,48px)"
          />
          {content.paragraphs?.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-7 font-sans text-[16.5px] text-fg2 leading-[1.7] first:mt-7"
            >
              {paragraph}
            </p>
          ))}
          <ChipPills chips={content.chips} />
          {content.meta && <MetaGrid meta={content.meta} />}
        </div>
        {content.image && (
          <div className="cs-overview-art">
            <BrowserFrame
              src={content.image.src}
              alt={content.image.alt}
              url={content.image.url}
              glow
              tilt
            />
          </div>
        )}
      </div>
    </LightSection>
  );
}

function MarketContextSection({
  content,
}: {
  content: CaseStudySectionContent;
}) {
  return (
    <LightSection>
      <SectionHead
        label={content.label}
        title={content.title ?? "Market context"}
        className="mb-7"
      />
      {content.paragraphs?.map((paragraph) => (
        <p
          key={paragraph.slice(0, 40)}
          className="max-w-[820px] font-sans text-[16.5px] text-fg2 leading-[1.7]"
        >
          {paragraph}
        </p>
      ))}
      <ChipPills chips={content.chips} />
    </LightSection>
  );
}

function ChallengePairsSection({
  content,
}: {
  content: CaseStudySectionContent;
}) {
  return (
    <LightSection>
      <SectionHead
        label={content.label}
        title={content.title ?? "Where it broke, and how we fixed it"}
        sub={content.subtitle}
        className="mb-14"
      />
      <div className="flex flex-col gap-[22px]">
        {content.pairs?.map((pair, index) => (
          <div
            key={pair.challenge.slice(0, 40)}
            className="cs-cs-row grid grid-cols-2 items-stretch gap-[22px]"
          >
            <div className="rounded-[var(--r-lg)] border border-border bg-white p-[clamp(24px,3vw,34px)]">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[var(--r-md)] bg-slate-100 text-slate-500">
                  <AlertCircle className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-mono text-[11.5px] text-slate-400 tracking-[0.14em]">
                  CHALLENGE&nbsp;0{index + 1}
                </span>
              </div>
              <p className="m-0 font-sans text-base text-fg2 leading-[1.6]">
                {pair.challenge}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[var(--r-lg)] bg-navy-900 p-[clamp(24px,3vw,34px)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_100%_0%,rgba(70,76,159,.35),transparent_60%)]" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[var(--r-md)] bg-xo-indigo text-white">
                    <Check className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-mono text-[11.5px] text-tangerine-400 tracking-[0.14em]">
                    SOLUTION&nbsp;0{index + 1}
                  </span>
                </div>
                <p className="m-0 font-sans text-base text-white/82 leading-[1.6]">
                  {pair.solution}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

function ChallengeBulletsSection({
  content,
}: {
  content: CaseStudySectionContent;
}) {
  return (
    <LightSection>
      <div className="cs-overview-grid grid grid-cols-[0.46fr_0.54fr] items-start gap-[clamp(36px,5vw,72px)]">
        <div>
          <SectionHead
            label={content.label}
            title={content.title ?? "The challenge"}
          />
          {content.lead && (
            <p className="mt-[26px] mb-[18px] font-medium font-sans text-[18px] text-fg1 leading-[1.6]">
              {content.lead}
            </p>
          )}
          {content.paragraphs?.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="font-sans text-base text-fg2 leading-[1.7]"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {content.bullets?.map((bullet) => {
            const item = normalizeBullet(bullet);
            return (
              <div
                key={item.body.slice(0, 40)}
                className="flex items-start gap-4 rounded-[var(--r-lg)] border border-border bg-slate-50 px-5 py-[18px]"
              >
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[var(--r-md)] border border-border bg-white text-slate-500">
                  <AlertCircle className="h-[19px] w-[19px]" aria-hidden />
                </span>
                <p className="m-0 self-center font-sans text-[15px] text-fg2 leading-[1.55]">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </LightSection>
  );
}

function PipelineBanner({ pipeline }: { pipeline: string }) {
  return (
    <div className="mt-10 rounded-[var(--r-lg)] border border-white/12 bg-white/4 px-6 py-5">
      <p className="m-0 font-mono text-[12px] text-white/70 leading-[1.8]">
        {pipeline}
      </p>
    </div>
  );
}

function SolutionSection({ content }: { content: CaseStudySectionContent }) {
  const bodyParagraphs = content.subtitle
    ? content.paragraphs
    : content.paragraphs?.slice(1);

  return (
    <DarkSection bloom="50% 8%" id="solution">
      <SectionHead
        label={content.label}
        title={content.title ?? "How Xorora solved it"}
        sub={content.subtitle ?? content.paragraphs?.[0]}
        onDark
        className="mb-11"
      />
      {content.image ? (
        <div className="cs-overview-grid mb-[clamp(44px,5vw,64px)] grid grid-cols-2 items-center gap-[clamp(28px,4vw,52px)]">
          <div className="flex flex-col gap-5">
            {bodyParagraphs?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="m-0 font-sans text-base text-white/72 leading-[1.72]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <BrowserFrame
            src={content.image.src}
            alt={content.image.alt}
            url={content.image.url}
            glow
          />
        </div>
      ) : (
        bodyParagraphs &&
        bodyParagraphs.length > 0 && (
          <div className="cs-overview-grid mb-[clamp(44px,5vw,64px)] grid grid-cols-2 gap-[clamp(24px,3vw,40px)]">
            {bodyParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="m-0 font-sans text-base text-white/70 leading-[1.72]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )
      )}
      {content.pipeline && <PipelineBanner pipeline={content.pipeline} />}
      <ChipPills chips={content.chips} />
    </DarkSection>
  );
}

function ArchitectureSection({
  content,
}: {
  content: CaseStudySectionContent;
}) {
  return (
    <DarkSection bloom="50% 12%" id="architecture">
      <SectionHead
        label={content.label}
        title={content.title ?? "Architecture"}
        sub={content.subtitle}
        onDark
        className="mb-14"
      />
      <div className="relative overflow-hidden rounded-[var(--r-xl)] border border-white/10 bg-[rgba(3,9,24,.5)] p-[clamp(24px,3.5vw,48px)]">
        <XWatermark
          size={420}
          color="rgba(120,150,240,0.05)"
          className="right-[-120px] bottom-[-160px]"
        />
        <div className="relative">
          {content.items?.map((item, index) => {
            const Icon = (item.icon && ARCH_ICONS[item.icon]) || Layers;
            return (
              <div key={item.title}>
                {index > 0 && (
                  <div className="flex justify-center" aria-hidden>
                    <div className="h-7 w-px bg-linear-to-b from-indigo-400/10 to-indigo-400/60" />
                  </div>
                )}
                <div className="relative overflow-hidden rounded-[var(--r-lg)] border border-white/12 bg-white/[0.035] p-5">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-indigo-400 to-indigo-700" />
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--r-md)] border border-indigo-300/30 bg-indigo-500/20 text-indigo-300">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-[11px] text-tangerine-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-sans font-semibold text-base text-white leading-[1.1]">
                          {item.title}
                        </span>
                      </div>
                      <p className="m-0 mt-2 font-mono text-[11.5px] text-white/55 leading-[1.7]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DarkSection>
  );
}

function ServicesSection({ content }: { content: CaseStudySectionContent }) {
  return (
    <LightSection>
      <SectionHead
        label={content.label}
        title={content.title ?? "Xorora services utilized"}
        titleSize="clamp(28px,3.6vw,44px)"
        className="mb-11"
      />
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {content.services?.map((service) => (
          <div
            key={service.name}
            className="group hover:-translate-y-0.5 flex items-center gap-4 rounded-[var(--r-lg)] border border-border bg-slate-50 px-[22px] py-[22px] transition-all duration-200 hover:border-border-strong hover:bg-white hover:shadow-md"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--r-md)] bg-indigo-50 text-xo-indigo transition-colors group-hover:bg-xo-indigo group-hover:text-white">
              <ArrowUpRight className="h-[22px] w-[22px]" aria-hidden />
            </span>
            <span className="flex-1 font-sans font-semibold text-[15.5px] text-fg1 leading-[1.25]">
              {service.name}
            </span>
            <ArrowUpRight className="h-[18px] w-[18px] text-slate-400 transition-colors group-hover:text-tangerine-500" />
          </div>
        ))}
      </div>
    </LightSection>
  );
}

function TechSection({ content }: { content: CaseStudySectionContent }) {
  const items: Array<{ title?: string; body: string }> =
    content.bullets?.map(normalizeBullet) ??
    parseChips(content.chips).map((body) => ({ body }));

  return (
    <section className="overflow-hidden border-border border-t bg-slate-50 py-[clamp(72px,9vw,118px)]">
      <div className="mx-auto mb-12 max-w-[1180px] px-8">
        <SectionHead
          label={content.label ?? "Engineering"}
          title={content.title ?? "The technology stack"}
          titleSize="clamp(28px,3.6vw,44px)"
          align="center"
        />
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-center gap-4 px-8">
        {items.map((item) => (
          <div
            key={item.body}
            className="flex shrink-0 items-center gap-3 rounded-[var(--r-md)] border border-border bg-white px-6 py-[15px] shadow-xs"
          >
            <span className="whitespace-nowrap font-sans font-semibold text-[15px] text-fg1">
              {item.title ?? item.body}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const OUTCOME_ICONS: LucideIcon[] = [ArrowUpRight, Check, AlertCircle];

function OutcomesSection({ content }: { content: CaseStudySectionContent }) {
  const bullets = content.bullets?.map(normalizeBullet) ?? [];

  return (
    <DarkSection bloom="20% 0%">
      <div className="cs-outcomes-grid grid grid-cols-[0.92fr_1.08fr] items-center gap-[clamp(36px,5vw,72px)]">
        <div>
          <SectionHead
            label={content.label}
            title={content.title ?? "Measurable outcomes"}
            onDark
          />
          {content.subtitle && (
            <p className="mt-[26px] font-sans text-[16.5px] text-white/66 leading-[1.7]">
              {content.subtitle}
            </p>
          )}
        </div>
        <div className="cs-outcome-cards grid grid-cols-2 gap-3.5">
          {bullets.map((item, index) => {
            const Icon = OUTCOME_ICONS[index % OUTCOME_ICONS.length];
            return (
              <div
                key={item.title ?? item.body.slice(0, 40)}
                className="rounded-[var(--r-lg)] border border-white/10 bg-white/4 p-5"
              >
                <span className="mb-3.5 flex h-[38px] w-[38px] items-center justify-center rounded-[var(--r-md)] border border-[rgba(120,150,240,.3)] bg-[rgba(70,76,159,.25)] text-indigo-300">
                  <Icon className="h-[19px] w-[19px]" aria-hidden />
                </span>
                {item.title && (
                  <div className="mb-1.5 font-sans font-semibold text-[15.5px] text-white">
                    {item.title}
                  </div>
                )}
                <div className="font-sans text-[13px] text-white/58 leading-[1.5]">
                  {item.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DarkSection>
  );
}

function QuoteBanner({ quote }: { quote: string }) {
  const parts = quote
    .split(".")
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <div className="relative overflow-hidden rounded-[var(--r-xl)] bg-navy-900 p-[clamp(36px,5vw,56px)] text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_0%,rgba(70,76,159,.35),transparent_60%)]" />
      <div className="relative flex flex-wrap justify-center gap-[clamp(20px,4vw,52px)]">
        {parts.map((part, index) => (
          <span
            key={part}
            className={cn(
              "font-bold font-sans text-[clamp(22px,3vw,34px)] tracking-[-0.02em]",
              index === parts.length - 1 ? "text-tangerine-400" : "text-white",
            )}
          >
            {part}.
          </span>
        ))}
      </div>
    </div>
  );
}

function ResultsSection({ content }: { content: CaseStudySectionContent }) {
  const bullets = content.bullets?.map(normalizeBullet) ?? [];

  return (
    <LightSection>
      <div className="cs-results-head mb-12 grid grid-cols-2 items-end gap-[clamp(24px,4vw,56px)]">
        <SectionHead
          label={content.label}
          title={content.title ?? "Results obtained"}
        />
        {content.subtitle && (
          <p className="m-0 font-sans text-[17px] text-fg2 leading-[1.6]">
            {content.subtitle}
          </p>
        )}
      </div>
      <div className="mb-9 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {bullets.map((item) => (
          <div
            key={item.title ?? item.body.slice(0, 40)}
            className="rounded-[var(--r-lg)] border border-border bg-slate-50 p-[clamp(26px,3vw,34px)]"
          >
            <span className="mb-[22px] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-indigo-50 text-xo-indigo">
              <Check className="h-6 w-6" aria-hidden />
            </span>
            {item.title && (
              <h3 className="m-0 mb-3 font-sans font-semibold text-[19px] text-fg1 leading-[1.25]">
                {item.title}
              </h3>
            )}
            <p className="m-0 font-sans text-[15px] text-fg2 leading-[1.6]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      {content.quote && <QuoteBanner quote={content.quote} />}
    </LightSection>
  );
}

function CaseStudySectionBlock({ section }: { section: CaseStudySection }) {
  const { type, content } = section;

  switch (type) {
    case "overview":
      return <OverviewSection content={content} />;
    case "market_context":
      return <MarketContextSection content={content} />;
    case "challenge":
      if (content.pairs && content.pairs.length > 0) {
        return <ChallengePairsSection content={content} />;
      }
      return <ChallengeBulletsSection content={content} />;
    case "solution":
      return <SolutionSection content={content} />;
    case "architecture":
      return <ArchitectureSection content={content} />;
    case "services":
      return <ServicesSection content={content} />;
    case "tech":
      return <TechSection content={content} />;
    case "outcomes":
      return <OutcomesSection content={content} />;
    case "results":
      return <ResultsSection content={content} />;
    default:
      return null;
  }
}

export function CaseStudySections({
  sections,
}: {
  sections: CaseStudySection[];
}) {
  return (
    <>
      {sections.map((section) => (
        <CaseStudySectionBlock key={section.id} section={section} />
      ))}
    </>
  );
}
