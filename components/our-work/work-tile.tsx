import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudyListItem } from "@/lib/case-studies/types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface WorkTileProps {
  study: CaseStudyListItem;
}

function tileTitle(title: string): string {
  return title.endsWith(".") ? title.slice(0, -1) : title;
}

export function WorkTile({ study }: WorkTileProps) {
  const stats = study.metrics.slice(0, 2);

  return (
    <Link
      href={ROUTES.caseStudy(study.slug)}
      className={cn(
        "group flex flex-col overflow-hidden rounded-[var(--r-xl)] border border-border bg-surface no-underline",
        "shadow-xs transition-all duration-250 ease-in-out",
        "hover:-translate-y-1 hover:shadow-lg",
      )}
    >
      <div className="relative overflow-hidden bg-navy-900 px-[22px] pt-[22px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_80%_0%,rgba(91,141,239,0.28),transparent_60%)]" />
        <div className="relative overflow-hidden rounded-t-[10px] border border-white/10 border-b-0 shadow-[0_-10px_40px_rgba(2,6,15,0.4)]">
          <div className="flex items-center gap-1.5 bg-[#070D22] px-3 py-[9px]">
            {["#FF5F57", "#FEBC2E", "#28C840"].map((color) => (
              <span
                key={color}
                className="h-2 w-2 rounded-full opacity-90"
                style={{ background: color }}
              />
            ))}
          </div>
          <div className="relative h-[200px] overflow-hidden">
            <Image
              src={study.heroImage}
              alt={tileTitle(study.title)}
              fill
              sizes="(max-width: 760px) 100vw, 400px"
              className="object-cover object-top-left transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      <div className="flex grow flex-col p-[clamp(24px,2.5vw,30px)]">
        <div className="mb-[18px] flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[var(--r-sm)] bg-slate-100 px-[11px] py-[5px] font-mono text-[11px] text-slate-600 tracking-[0.06em]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="m-0 mb-3 font-bold font-sans text-[clamp(20px,1.6vw,23px)] text-fg1 leading-[1.22] tracking-[-0.01em]">
          {tileTitle(study.title)}
        </h3>
        <p className="m-0 mb-6 font-sans text-[15px] text-fg2 leading-relaxed">
          {study.lead}
        </p>

        {stats.length > 0 && (
          <div className="mt-auto mb-6 grid grid-cols-2 gap-3.5">
            {stats.map((stat) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="border-indigo-100 border-t-2 pt-3"
              >
                <div className="font-extrabold font-sans text-[clamp(22px,2vw,28px)] text-xo-indigo leading-none tracking-[-0.02em]">
                  {stat.value}
                </div>
                <div className="mt-1.5 font-sans text-[12.5px] text-fg3">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between border-border border-t pt-[18px]">
          <span className="font-sans font-semibold text-[14.5px] text-accent transition-colors duration-150 group-hover:text-tangerine-600">
            Read case study
          </span>
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200",
              "bg-indigo-50 text-xo-indigo group-hover:translate-x-0.5 group-hover:bg-xo-indigo group-hover:text-white",
            )}
          >
            <ArrowUpRight className="h-[18px] w-[18px]" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
