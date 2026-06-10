import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { NavIcon } from "@/components/ui/nav-icon";
import { listPublishedIndustryNavItems } from "@/lib/industries/queries";
import type { NavIconName } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export async function IndGrid() {
  const industries = await listPublishedIndustryNavItems();

  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Sectors"
        title="Built for your industry."
        sub="Nine sectors, one engineering partner. Explore how we build for yours."
        className="mb-12"
      />
      <div className="ind-grid grid grid-cols-3 gap-[22px]">
        {industries.map((industry) => (
          <IndCard key={industry.slug} {...industry} />
        ))}
      </div>
    </LightSection>
  );
}

function IndCard({
  name,
  icon,
  desc,
  href,
}: Awaited<ReturnType<typeof listPublishedIndustryNavItems>>[number]) {
  return (
    <Link
      href={href}
      className={cn(
        "ind-reveal group relative flex flex-col overflow-hidden rounded-r-lg border border-border bg-slate-50 p-[clamp(26px,2.6vw,32px)] no-underline",
        "transition-all duration-220 ease-in-out",
        "hover:translate-y-[-3px] hover:border-border-strong hover:bg-surface hover:shadow-md",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-indigo-400 to-tangerine-500 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      <div className="mb-[18px] flex items-center justify-between">
        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-r-md bg-indigo-50 text-xo-indigo transition-all duration-200 group-hover:bg-xo-indigo group-hover:text-white group-hover:shadow-glow-indigo">
          <NavIcon name={icon as NavIconName} className="h-6 w-6" />
        </span>
        <ArrowUpRight
          className="group-hover:-translate-y-0.5 h-5 w-5 text-slate-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-tangerine-500"
          aria-hidden
        />
      </div>
      <h3 className="mb-2.5 font-sans font-semibold text-fg1 text-xl leading-snug">
        {name}
      </h3>
      <p className="m-0 font-sans text-[14.5px] text-fg2 leading-snug">
        {desc}
      </p>
    </Link>
  );
}
