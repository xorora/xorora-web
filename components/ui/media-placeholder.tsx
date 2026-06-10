import { cn } from "@/lib/utils";
import { PyramidBars } from "./pyramid-bars";

interface MediaPlaceholderProps {
  label?: string;
  ratio?: string;
  height?: number | string;
  dark?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function MediaPlaceholder({
  label = "PHOTO",
  ratio,
  height,
  dark = true,
  className,
  children,
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-[inherit]", className)}
      style={{
        background: dark
          ? "linear-gradient(135deg, #0A1230 0%, #242750 55%, #3A3F86 100%)"
          : "linear-gradient(135deg, var(--slate-100), var(--slate-200))",
        aspectRatio: ratio,
        height,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 80% at 70% 10%, rgba(120,150,240,0.30), transparent 60%)",
        }}
      />
      {children ?? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <PyramidBars
            color={dark ? "rgba(255,255,255,.4)" : "var(--slate-400)"}
            size={44}
          />
          <span
            className={cn(
              "font-mono text-[10.5px] tracking-[0.2em]",
              dark ? "text-white/45" : "text-slate-400",
            )}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
