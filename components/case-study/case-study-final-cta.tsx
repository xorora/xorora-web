"use client";

import { FinalCTA } from "@/components/layout/final-cta";
import { useLetsTalkModal } from "@/components/modals";

export function CaseStudyFinalCta() {
  const { open } = useLetsTalkModal();
  return <FinalCTA onContact={open} />;
}
