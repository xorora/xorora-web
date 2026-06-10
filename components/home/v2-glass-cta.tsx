"use client";

import { ArrowUpRight } from "lucide-react";
import { LetsTalkContactLink } from "@/components/modals";
import { cn } from "@/lib/utils";

interface V2GlassCTAProps {
  children: React.ReactNode;
  solid?: boolean;
  className?: string;
}

export function V2GlassCTA({ children, solid, className }: V2GlassCTAProps) {
  if (solid) {
    return (
      <LetsTalkContactLink
        className={cn(
          "hover:-translate-y-px inline-flex cursor-pointer items-center gap-2.5 rounded-pill border-none bg-white px-[26px] py-3.5 font-sans font-semibold text-[15.5px] text-xo-ink transition-transform duration-150",
          className,
        )}
      >
        {children}
      </LetsTalkContactLink>
    );
  }

  return (
    <LetsTalkContactLink
      className={cn(
        "lg-strong hover:-translate-y-px inline-flex cursor-pointer items-center gap-2.5 rounded-pill px-[26px] py-3.5 font-sans font-semibold text-[15.5px] text-white transition-transform duration-150",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="h-[17px] w-[17px]" aria-hidden />
    </LetsTalkContactLink>
  );
}
