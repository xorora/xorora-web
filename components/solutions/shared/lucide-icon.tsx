import type { LucideIcon, LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

function toPascalCase(name: string): string {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

const iconCache = new Map<string, LucideIcon>();

function resolveIcon(name: string): LucideIcon | null {
  const cached = iconCache.get(name);
  if (cached) return cached;

  const key = toPascalCase(name);
  const Icon = (
    LucideIcons as unknown as Record<string, LucideIcon | undefined>
  )[key];
  if (Icon) iconCache.set(name, Icon);
  return Icon ?? null;
}

export interface DynamicLucideIconProps extends LucideProps {
  name: string;
}

export function DynamicLucideIcon({ name, ...props }: DynamicLucideIconProps) {
  const Icon = resolveIcon(name);
  if (!Icon) return null;
  return <Icon aria-hidden {...props} />;
}
