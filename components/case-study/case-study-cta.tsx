"use client";

import { ArrowUpRight } from "lucide-react";
import { useLetsTalkModal } from "@/components/modals";
import { Button } from "@/components/ui/button";

interface CaseStudyCtaProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  size?: "sm" | "md" | "lg";
  secondaryVariant?: "onDark" | "light";
}

export function CaseStudyCta({
  primaryLabel = "Get the full case study",
  secondaryLabel = "Talk to us",
  size = "lg",
  secondaryVariant = "onDark",
}: CaseStudyCtaProps) {
  const { open } = useLetsTalkModal();

  return (
    <div className="flex flex-wrap gap-3.5">
      <Button variant="primary" size={size} onClick={open}>
        {primaryLabel} <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Button>
      <Button variant={secondaryVariant} size={size} onClick={open}>
        {secondaryLabel}
      </Button>
    </div>
  );
}
