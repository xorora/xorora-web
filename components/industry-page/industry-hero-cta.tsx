"use client";

import { LetsTalkContactLink } from "@/components/modals";

interface IndustryHeroCtaProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}

export function IndustryHeroCta({ className, children }: IndustryHeroCtaProps) {
  return (
    <LetsTalkContactLink className={className}>{children}</LetsTalkContactLink>
  );
}
