import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LetsTalkContactLink } from "@/components/modals";
import {
  type CaseStudyCardData,
  listPublishedCaseStudies,
  toCaseStudyCards,
} from "@/lib/case-studies";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { V2Eyebrow, V2Light } from "./v2-shared";

export async function V2Cases() {
  const studies = await listPublishedCaseStudies();
  const cases = toCaseStudyCards(studies, 3);

  return (
    <V2Light bg="var(--surface)">
      <div className="mb-[18px] flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[640px]">
          <V2Eyebrow>Our work</V2Eyebrow>
          <h2 className="m-0 text-balance font-extrabold font-sans text-[clamp(30px,4.6vw,58px)] text-fg1 leading-tight tracking-tight">
            Projects that <span className="text-xo-indigo">shipped</span> and
            the <span className="text-xo-indigo">results</span> that followed
          </h2>
        </div>
        <Link
          href={ROUTES.ourWork}
          className="inline-flex items-center gap-2 rounded-pill border border-border-strong px-5 py-[11px] font-sans font-semibold text-[14.5px] text-fg1 no-underline"
        >
          View all
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <p className="mb-11 max-w-[560px] font-sans text-[16.5px] text-fg2 leading-relaxed">
        Live products built for global clients. Here are our most recent.
      </p>
      <div className="v2-cases-grid grid grid-cols-3 gap-[22px]">
        {cases.map((c) => (
          <CaseCard key={c.href} {...c} />
        ))}
      </div>
      <div className="mt-10">
        <LetsTalkContactLink className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-r-md border border-transparent bg-xo-indigo px-[30px] py-[15px] font-sans font-semibold text-base text-white transition-all duration-180 ease-in-out hover:bg-indigo-600 hover:shadow-glow-indigo active:scale-[0.98]">
          Book a free strategy call
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </V2Light>
  );
}

function CaseCard({
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
        "group relative block min-h-[440px] overflow-hidden rounded-r-xl no-underline",
        "border border-white/10 bg-[#080C1E]",
        "shadow-[0_22px_56px_-34px_rgba(8,12,30,0.5)]",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:-translate-y-1 hover:shadow-[0_38px_84px_-34px_rgba(8,12,30,0.7)]",
      )}
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 760px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,12,30,0.35)] via-[rgba(8,12,30,0.2)] to-[rgba(8,12,30,0.94)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_85%_5%,rgba(91,141,239,0.3),transparent_60%)]" />
      <span className="absolute top-5 left-5 rounded-pill bg-white px-3.5 py-[7px] font-sans font-semibold text-[12.5px] text-xo-ink">
        {tag}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-[clamp(24px,2.4vw,30px)]">
        <h3 className="mb-5 font-bold font-sans text-[clamp(20px,1.7vw,24px)] text-white leading-tight tracking-tight">
          {title}
        </h3>
        <div className="mb-[18px] h-px bg-white/18" />
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="font-extrabold font-sans text-[26px] text-tangerine-400 leading-none tracking-tight">
              {stat}
            </div>
            <div className="mt-[5px] font-sans text-[12.5px] text-white/72">
              {statLabel}
            </div>
          </div>
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-200",
              "bg-xo-indigo text-white group-hover:bg-white group-hover:text-xo-ink",
            )}
          >
            <ArrowUpRight className="h-5 w-5" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
