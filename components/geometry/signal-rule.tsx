import { cn } from "@/lib/utils";

const WIDTHS = [26, 18, 12, 7] as const;

interface SignalRuleProps {
  color?: string;
  className?: string;
}

export function SignalRule({
  color = "var(--tangerine-500)",
  className,
}: SignalRuleProps) {
  return (
    <div className={cn("flex items-center gap-[5px]", className)}>
      {WIDTHS.map((width, index) => (
        <div
          key={width}
          className="h-[3px] rounded-[1px]"
          style={{
            width,
            background: color,
            opacity: 1 - index * 0.18,
          }}
        />
      ))}
    </div>
  );
}
