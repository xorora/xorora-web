import { SignalRule } from "@/components/geometry/signal-rule";
import { cn } from "@/lib/utils";

interface SectionHeadProps {
  label?: string;
  title: string;
  sub?: string;
  onDark?: boolean;
  align?: "left" | "center";
  titleSize?: string;
  className?: string;
}

export function SectionHead({
  label,
  title,
  sub,
  onDark,
  align = "left",
  titleSize = "clamp(32px,4.4vw,52px)",
  className,
}: SectionHeadProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(isCenter && "mx-auto max-w-[760px] text-center", className)}
      style={{ textAlign: align }}
    >
      {label && (
        <div className="mb-5 inline-flex items-center gap-3">
          <SignalRule
            color={onDark ? "var(--tangerine-400)" : "var(--tangerine-500)"}
          />
          <span
            className={cn(
              "font-mono text-xs uppercase tracking-[0.2em]",
              onDark ? "text-tangerine-400" : "text-tangerine-600",
            )}
          >
            {label}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "m-0 text-balance font-bold font-sans leading-[1.05] tracking-[-0.02em]",
          onDark ? "text-white" : "text-fg1",
        )}
        style={{ fontSize: titleSize }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-5 max-w-[620px] font-sans text-[17px] leading-[1.65]",
            onDark ? "text-white/66" : "text-fg2",
            isCenter && "mx-auto",
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
