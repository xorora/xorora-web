"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/components/ui/button";

export function WorkHeaderActions() {
  return (
    <div className="flex flex-wrap justify-center gap-3.5">
      <LetsTalkContactLink
        className={buttonClassName({ variant: "light", size: "lg" })}
      >
        Start a project
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </LetsTalkContactLink>
      <Link
        href="#work-tiles"
        className={buttonClassName({ variant: "onDark", size: "lg" })}
      >
        Explore case studies
      </Link>
    </div>
  );
}
