import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  onDark?: boolean;
  arrow?: boolean;
  className?: string;
}

export function StatBlock({
  value,
  label,
  onDark = true,
  arrow = true,
  className,
}: StatBlockProps) {
  return (
    <div className={className}>
      <div
        className={cn(
          "mb-[18px] h-px",
          onDark ? "bg-white/16" : "bg-border-strong",
        )}
      />
      <div className="flex items-start justify-between gap-2">
        <span
          className={cn(
            "font-extrabold font-sans text-[clamp(40px,4.6vw,58px)] leading-[0.95] tracking-[-0.03em]",
            onDark ? "text-white" : "text-fg1",
          )}
        >
          {value}
        </span>
        {arrow && (
          <ArrowUpRight
            className="mt-1 h-[26px] w-[26px] shrink-0 text-tangerine-500"
            aria-hidden
          />
        )}
      </div>
      <div
        className={cn(
          "mt-4 max-w-[230px] font-sans text-[14.5px] leading-[1.45]",
          onDark ? "text-white/60" : "text-fg2",
        )}
      >
        {label}
      </div>
    </div>
  );
}
