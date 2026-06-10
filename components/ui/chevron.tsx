import { cn } from "@/lib/utils";

interface ChevronProps {
  size?: number;
  className?: string;
}

export function Chevron({ size = 14, className }: ChevronProps) {
  return (
    <span
      className={cn("font-extrabold text-current leading-none", className)}
      style={{ fontSize: size }}
      aria-hidden
    >
      ›
    </span>
  );
}
