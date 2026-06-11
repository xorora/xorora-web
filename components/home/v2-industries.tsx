import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavIcon } from "@/components/ui/nav-icon";
import { listPublishedIndustryNavItems } from "@/lib/industries/queries";
import type { NavIconName } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { DarkHead, DarkSurface, V2Rise } from "./v2-shared";

export async function V2Industries() {
  const industries = await listPublishedIndustryNavItems();

  return (
    <DarkSurface bloom="50% 0%" base="#060B1C">
      <div className="mb-[clamp(40px,5vw,58px)]">
        <DarkHead
          center
          eyebrow="Industries we serve"
          title="Built for your industry"
          sub="Domain depth where it counts — we ship production systems engineered around the realities of your sector."
        />
      </div>
      <div className="v2-ind-grid grid grid-cols-3 gap-[18px]">
        {industries.map((ind, i) => (
          <IndustryTile key={ind.slug} ind={ind} delay={(i % 3) * 60} />
        ))}
      </div>
    </DarkSurface>
  );
}

function IndustryTile({
  ind,
  delay,
}: {
  ind: Awaited<ReturnType<typeof listPublishedIndustryNavItems>>[number];
  delay: number;
}) {
  return (
    <V2Rise delay={delay}>
      <Link
        href={ind.href}
        className={cn(
          "group relative flex min-h-[264px] flex-col overflow-hidden rounded-[var(--r-lg)] no-underline transition-all duration-300",
          "hover:-translate-y-1 border border-white/14 hover:border-white/28 hover:shadow-[0_30px_60px_-34px_rgba(2,8,30,0.8)]",
        )}
      >
        <Image
          src={ind.headerBg}
          alt=""
          fill
          sizes="(max-width: 760px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <div
          className={cn(
            "absolute inset-0 transition-all duration-400",
            "bg-linear-to-b from-[rgba(13,20,46,0.74)] via-[rgba(11,17,40,0.82)] to-[rgba(8,12,30,0.9)] backdrop-blur-[14px]",
            "group-hover:from-[rgba(8,12,30,0.12)] group-hover:via-[rgba(8,12,30,0.34)] group-hover:to-[rgba(8,12,30,0.7)] group-hover:backdrop-blur-none",
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/16 to-transparent" />
        <div className="relative flex h-full flex-col p-[clamp(24px,2.2vw,30px)]">
          <span
            className={cn(
              "mb-5 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[var(--r-md)] border border-white/22 backdrop-blur-sm transition-colors duration-250",
              "bg-white/14 group-hover:bg-xo-indigo",
            )}
          >
            <NavIcon
              name={ind.icon as NavIconName}
              className="h-6 w-6 text-white"
            />
          </span>
          <h3 className="mb-2.5 font-bold font-sans text-[clamp(19px,1.6vw,22px)] text-white leading-tight tracking-tight [text-shadow:0_2px_16px_rgba(0,0,0,0.4)]">
            {ind.name}
          </h3>
          <p className="font-sans text-sm text-white/82 leading-relaxed [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]">
            {ind.desc}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-[22px] font-sans font-semibold text-sm text-white transition-colors duration-200 group-hover:text-tangerine-400">
            Read more
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </V2Rise>
  );
}
