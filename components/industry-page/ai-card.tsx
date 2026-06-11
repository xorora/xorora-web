"use client";

import Image from "next/image";
import { useState } from "react";
import type { AiCardItem } from "@/lib/industries/types";
import { cn } from "@/lib/utils";
import { IndustryIcon } from "./icon-map";

interface AiCardProps {
  item: AiCardItem;
  featured?: boolean;
  spanRows?: boolean;
}

export function AiCard({ item, featured, spanRows }: AiCardProps) {
  const [imageOk, setImageOk] = useState(true);

  return (
    <div
      className={cn(
        "group ind-page-ai-feat relative flex min-h-64 flex-col overflow-hidden rounded-(--r-lg) border border-white/12 transition-[border-color,transform] duration-200 hover:translate-y-[-3px] hover:border-indigo-300/55",
        spanRows && "row-span-2 min-h-80",
        featured
          ? "bg-[linear-gradient(165deg,rgba(70,76,159,.5),rgba(10,14,40,.85))]"
          : "bg-[linear-gradient(165deg,rgba(40,46,96,.6),rgba(10,14,32,.9))]",
      )}
    >
      {item.image && imageOk && (
        <Image
          src={item.image}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          onError={() => setImageOk(false)}
          className={cn(
            "z-0 scale-[1.12] object-cover blur-lg brightness-50 saturate-[1.1] transition-[filter,transform] duration-500 group-hover:scale-[1.03] group-hover:blur-0 group-hover:brightness-[0.96] group-hover:saturate-[1.06]",
          )}
        />
      )}
      <div className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(160deg,rgba(70,76,159,.34),rgba(8,12,32,.42))] opacity-100 transition-opacity duration-400 group-hover:opacity-0" />
      <div className="pointer-events-none absolute inset-0 z-2 bg-[linear-gradient(to_top,rgba(4,7,18,.93)_0%,rgba(4,7,18,.62)_34%,rgba(4,7,18,.18)_64%,rgba(4,7,18,.06)_100%)]" />

      <div className="relative z-3 flex flex-1 flex-col p-[clamp(24px,2.4vw,30px)]">
        <span className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-(--r-md) border border-indigo-300/50 bg-indigo-500/45 text-white backdrop-blur-sm">
          <IndustryIcon name={item.icon} className="h-[23px] w-[23px]" />
        </span>
        <div className="mt-auto">
          <h3
            className={cn(
              "m-0 mb-3 font-sans font-semibold text-white leading-tight [text-shadow:0_1px_14px_rgba(0,0,0,.55)]",
              featured ? "text-[23px]" : "max-w-60 text-lg",
            )}
          >
            {item.title}
          </h3>
          <p className="m-0 font-sans text-[14.5px] text-white/82 leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,.6)]">
            {item.body}
          </p>
          {featured && (
            <div className="pt-6">
              <div className="h-[3px] w-16 rounded-sm bg-tangerine-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
