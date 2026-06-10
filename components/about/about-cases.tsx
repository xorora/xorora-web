import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { LetsTalkContactLink } from "@/components/modals";
import {
  type CaseStudyCardData,
  listPublishedCaseStudies,
  toCaseStudyCards,
} from "@/lib/case-studies";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export async function AboutCases() {
  const studies = await listPublishedCaseStudies();
  const cases = toCaseStudyCards(studies, 2);

  return (
    <LightSection bg="var(--surface)">
      <div className="mb-[18px] flex flex-wrap items-end justify-between gap-6">
        <h2 className="m-0 text-balance font-bold font-sans text-[clamp(28px,3.8vw,46px)] text-fg1 leading-tight tracking-[-0.02em]">
          We build products that
          <br />
          <span className="text-xo-indigo">
            move businesses forward<span className="text-tangerine-500">.</span>
          </span>
        </h2>
        <Link
          href={ROUTES.ourWork}
          className="inline-flex items-center gap-2 rounded-pill border border-border-strong px-5 py-[11px] font-sans font-semibold text-[14.5px] text-fg1 no-underline"
        >
          View all
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <p className="mb-10 max-w-[560px] font-sans text-[16.5px] text-fg2 leading-relaxed">
        Live products built for ambitious clients. Here are some of our most
        recent.
      </p>
      <div className="ab-cases-grid grid grid-cols-2 gap-6">
        {cases.map((c) => (
          <CaseCard key={c.href} {...c} />
        ))}
      </div>
      <div className="mt-9">
        <LetsTalkContactLink className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-r-md border border-transparent bg-xo-indigo px-[30px] py-[15px] font-sans font-semibold text-base text-white transition-all duration-180 ease-in-out hover:bg-indigo-600 hover:shadow-glow-indigo active:scale-[0.98]">
          Book a free strategy call
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </LightSection>
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
        "group relative block min-h-[420px] overflow-hidden rounded-r-xl no-underline",
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
        sizes="(max-width: 900px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,12,30,0.35)] via-[rgba(8,12,30,0.2)] to-[rgba(8,12,30,0.92)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_85%_5%,rgba(91,141,239,0.3),transparent_60%)]" />
      <span className="absolute top-[22px] right-[22px] rounded-pill bg-white px-3.5 py-[7px] font-sans font-semibold text-[12.5px] text-xo-ink">
        {tag}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-[clamp(24px,2.8vw,32px)]">
        <h3 className="mb-5 max-w-[420px] font-bold font-sans text-[clamp(21px,2vw,26px)] text-white leading-tight tracking-[-0.01em]">
          {title}
        </h3>
        <div className="mb-[18px] h-px bg-white/18" />
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="font-extrabold font-sans text-[22px] text-tangerine-400 leading-none tracking-[-0.02em]">
              {stat}
            </div>
            <div className="mt-[3px] font-sans text-[11.5px] text-white/70">
              {statLabel}
            </div>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-xo-indigo text-white transition-all duration-200 group-hover:bg-white group-hover:text-xo-ink">
            <ArrowUpRight className="h-5 w-5" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
