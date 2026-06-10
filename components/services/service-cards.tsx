import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Cloud,
  Compass,
  Cpu,
  DatabaseZap,
  FileCode2,
  Gauge,
  Handshake,
  Layers,
  PenTool,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sigma,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  compass: Compass,
  "brain-circuit": BrainCircuit,
  "refresh-cw": RefreshCw,
  cpu: Cpu,
  "app-window": AppWindow,
  layers: Layers,
  rocket: Rocket,
  "file-code-2": FileCode2,
  "pen-tool": PenTool,
  "bar-chart-3": BarChart3,
  "database-zap": DatabaseZap,
  cloud: Cloud,
  bot: Bot,
  sigma: Sigma,
  workflow: Workflow,
};

export interface ServiceCardItem {
  icon: string;
  name: string;
  body: string;
  cta?: string;
}

interface ServiceCardGridProps {
  label: string;
  title: string;
  sub?: string;
  items: ServiceCardItem[];
  columns?: 3 | 2;
  bg?: string;
  showLearnMore?: boolean;
}

export function ServiceCardGrid({
  label,
  title,
  sub,
  items,
  columns = 3,
  bg = "var(--surface)",
  showLearnMore = false,
}: ServiceCardGridProps) {
  return (
    <LightSection bg={bg}>
      <SectionHead label={label} title={title} sub={sub} className="mb-12" />
      <div
        className={cn(
          "svc-grid3 grid gap-[22px]",
          columns === 3 ? "grid-cols-3" : "grid-cols-2",
        )}
      >
        {items.map((item) => (
          <ServiceCard
            key={item.name}
            {...item}
            showLearnMore={showLearnMore}
          />
        ))}
      </div>
    </LightSection>
  );
}

function ServiceCard({
  icon,
  name,
  body,
  showLearnMore,
}: ServiceCardItem & { showLearnMore?: boolean }) {
  const Icon = ICON_MAP[icon] ?? Compass;

  return (
    <LetsTalkContactLink
      className={cn(
        "group relative block cursor-pointer overflow-hidden rounded-r-lg border border-border bg-slate-50 p-[clamp(24px,2.6vw,32px)] no-underline",
        "transition-all duration-220 ease-in-out",
        "hover:translate-y-[-3px] hover:border-border-strong hover:bg-surface hover:shadow-md",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-indigo-400 to-tangerine-500 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      <div className="mb-[18px] flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-r-md bg-indigo-50 text-xo-indigo transition-all duration-200 group-hover:bg-xo-indigo group-hover:text-white">
          <Icon className="h-[23px] w-[23px]" aria-hidden />
        </span>
        <ArrowUpRight className="h-[19px] w-[19px] text-slate-400 transition-colors duration-200 group-hover:text-tangerine-500" />
      </div>
      <h3 className="mb-2.5 font-sans font-semibold text-[19px] text-fg1 leading-snug">
        {name}
      </h3>
      <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
        {body}
      </p>
      {showLearnMore && (
        <span className="mt-4 inline-flex items-center gap-[7px] font-sans font-semibold text-[13.5px] text-accent transition-colors group-hover:text-tangerine-600">
          Learn more
          <ArrowRight className="h-[15px] w-[15px]" />
        </span>
      )}
    </LetsTalkContactLink>
  );
}

export interface OutcomeCard {
  icon: string;
  title: string;
  body: string;
}

const OUTCOME_ICONS: Record<string, LucideIcon> = {
  target: Target,
  "shield-check": ShieldCheck,
  "trending-up": TrendingUp,
  handshake: Handshake,
  gauge: Gauge,
};

interface OutcomeGridProps {
  label?: string;
  title: string;
  sub?: string;
  items: OutcomeCard[];
}

export function OutcomeGrid({ label, title, sub, items }: OutcomeGridProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(72px,9vw,118px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_6%,rgba(91,141,239,0.28)_0%,rgba(39,85,195,0.10)_30%,rgba(1,12,40,0)_62%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label={label ?? "Why it matters"}
          title={title}
          sub={sub}
          onDark
          align="center"
          className="mx-auto mb-[52px] max-w-[700px]"
        />
        <div className="svc-grid4 grid grid-cols-4 gap-[18px]">
          {items.map((item) => {
            const Icon = OUTCOME_ICONS[item.icon] ?? Compass;
            return (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-r-lg border border-white/12 bg-white/4 p-[clamp(22px,2.4vw,28px)]"
              >
                <span className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-r-md border border-indigo-300/32 bg-indigo-900/28 text-indigo-300">
                  <Icon className="h-[22px] w-[22px]" aria-hidden />
                </span>
                <h3 className="mb-2.5 font-sans font-semibold text-[17.5px] text-white leading-snug">
                  {item.title}
                </h3>
                <p className="m-0 font-sans text-[13.5px] text-white/62 leading-snug">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
