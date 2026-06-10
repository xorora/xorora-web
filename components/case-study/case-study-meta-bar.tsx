import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Calendar,
  Download,
  Globe,
  Layers,
  LayoutGrid,
  Rocket,
  User,
  Users,
} from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies/types";

const META_ICONS: Record<string, LucideIcon> = {
  Engagement: Briefcase,
  Team: Users,
  Architecture: LayoutGrid,
  "Delivery model": Rocket,
  Domain: Layers,
  Market: Globe,
  Product: Briefcase,
};

function metaIcon(label: string): LucideIcon {
  return META_ICONS[label] ?? Calendar;
}

function getOverviewMeta(study: CaseStudy) {
  const overview = study.sections.find(
    (section) => section.type === "overview",
  );
  return overview?.content.meta ?? [];
}

export function CaseStudyMetaBar({ study }: { study: CaseStudy }) {
  const meta = getOverviewMeta(study);

  if (meta.length === 0) {
    return null;
  }

  return (
    <div className="relative bg-navy-950">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-7 px-8 py-[26px]">
        <div className="flex flex-wrap gap-[clamp(20px,4vw,56px)]">
          {meta.map((item) => {
            const Icon = metaIcon(item.label);
            return (
              <div key={item.label} className="flex items-center gap-3">
                <Icon
                  className="h-[18px] w-[18px] text-tangerine-400"
                  aria-hidden
                />
                <div>
                  <div className="font-mono text-[10.5px] text-white/45 uppercase tracking-[0.12em]">
                    {item.label}
                  </div>
                  <div className="mt-0.5 font-sans font-semibold text-[14.5px] text-white">
                    {item.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <span className="inline-flex items-center gap-2 whitespace-nowrap font-sans font-semibold text-[13.5px] text-white/85">
          <User className="h-[15px] w-[15px] text-tangerine-400" aria-hidden />
          Founder-led engineering
          <Download className="ml-1 h-4 w-4 text-tangerine-400" aria-hidden />
        </span>
      </div>
    </div>
  );
}
