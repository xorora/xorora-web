import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import {
  type CaseStudyTileData,
  listPublishedCaseStudies,
  toCaseStudyTiles,
} from "@/lib/case-studies";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export async function IndCaseStudies() {
  const studies = await listPublishedCaseStudies();
  const cases = toCaseStudyTiles(studies, 3);

  return (
    <LightSection bg="var(--slate-50)">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <SectionHead label="Selected work" title="Case studies." />
        <Link
          href={ROUTES.ourWork}
          className="inline-flex items-center gap-2 font-sans font-semibold text-[14.5px] text-accent no-underline"
        >
          View all work
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <div className="ind-cases-grid grid grid-cols-3 gap-6">
        {cases.map((c) => (
          <CaseTile key={c.href} {...c} />
        ))}
      </div>
    </LightSection>
  );
}

function CaseTile({ href, img, tags, title, desc, stats }: CaseStudyTileData) {
  return (
    <Link
      href={href}
      className={cn(
        "ind-reveal group relative flex flex-col overflow-hidden rounded-r-xl no-underline",
        "border border-white/10 bg-linear-to-br from-[#141A38] to-[#080C1E]",
        "shadow-[0_22px_56px_-34px_rgba(8,12,30,0.5)]",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:-translate-y-1 hover:shadow-[0_36px_80px_-34px_rgba(8,12,30,0.7)]",
      )}
    >
      <div className="absolute inset-x-0 top-0 z-3 h-[3px] bg-linear-to-r from-indigo-400 to-tangerine-500" />
      <div className="relative h-[190px] overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          sizes="33vw"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[rgba(8,12,30,0.1)] via-[rgba(8,12,30,0.55)] to-[#0B1026]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_85%_0%,rgba(91,141,239,0.3),transparent_60%)]" />
      </div>
      <div className="relative flex grow flex-col p-[clamp(24px,2.6vw,30px)]">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-pill border border-white/12 bg-white/6 px-[11px] py-[5px] font-mono text-[10.5px] text-white/70 tracking-[0.06em]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-3 font-bold font-sans text-white text-xl leading-tight tracking-[-0.01em]">
          {title}
        </h3>
        <p className="mb-[22px] font-sans text-[14.5px] text-white/66 leading-relaxed">
          {desc}
        </p>
        <div className="mt-auto mb-[22px] flex flex-wrap gap-x-[-clamp(18px,3vw,32px)] gap-y-3">
          {stats.map(([value, label]) => (
            <div key={label}>
              <div className="font-extrabold font-sans text-[clamp(19px,2vw,24px)] text-tangerine-400 leading-none tracking-[-0.02em]">
                {value}
              </div>
              <div className="mt-1.5 font-sans text-white/55 text-xs">
                {label}
              </div>
            </div>
          ))}
        </div>
        <span className="inline-flex w-fit items-center gap-[9px] rounded-pill bg-white px-5 py-[11px] font-sans font-semibold text-sm text-xo-ink transition-transform duration-200 group-hover:translate-x-[-3px]">
          Read more
          <ArrowUpRight className="h-[15px] w-[15px]" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
