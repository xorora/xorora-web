import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import {
  type CaseStudyCardData,
  listPublishedCaseStudies,
  toCaseStudyCards,
} from "@/lib/case-studies";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export async function HwwCases() {
  const studies = await listPublishedCaseStudies();
  const cases = toCaseStudyCards(studies, 3);

  return (
    <LightSection bg="var(--slate-50)">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <SectionHead
          label="Proof of work"
          title="Workflows that shipped."
          sub="The same process, applied. A look at products we engineered end to end."
        />
        <Link
          href={ROUTES.ourWork}
          className="inline-flex items-center gap-2 font-sans font-semibold text-[14.5px] text-accent no-underline"
        >
          View all work
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <div className="hw-cases-grid grid grid-cols-3 gap-6">
        {cases.map((c) => (
          <CaseTile key={c.href} {...c} />
        ))}
      </div>
    </LightSection>
  );
}

function CaseTile({
  href,
  img,
  tag,
  title,
  stat,
  statLabel,
}: CaseStudyCardData) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block min-h-[380px] overflow-hidden rounded-[var(--r-xl)] no-underline",
        "border border-white/10 bg-[#080C1E]",
        "shadow-[0_22px_56px_-34px_rgba(8,12,30,0.5)]",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:-translate-y-1 hover:shadow-[0_36px_80px_-34px_rgba(8,12,30,0.7)]",
      )}
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="33vw"
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,12,30,0.25)] via-[rgba(8,12,30,0.55)] to-[#080C1E]" />
      <span className="absolute top-5 left-5 rounded-pill bg-white px-[13px] py-1.5 font-sans font-semibold text-xo-ink text-xs">
        {tag}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-[clamp(22px,2.4vw,28px)]">
        <h3 className="mb-4 font-bold font-sans text-[clamp(18px,1.7vw,22px)] text-white leading-tight">
          {title}
        </h3>
        <div className="flex items-center justify-between border-white/18 border-t pt-3.5">
          <div>
            <div className="font-extrabold font-sans text-[22px] text-tangerine-400 leading-none tracking-[-0.02em]">
              {stat}
            </div>
            <div className="mt-1 font-sans text-white/65 text-xs">
              {statLabel}
            </div>
          </div>
          <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-xo-indigo text-white transition-all duration-200 group-hover:bg-white group-hover:text-xo-ink">
            <ArrowUpRight className="h-[19px] w-[19px]" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
