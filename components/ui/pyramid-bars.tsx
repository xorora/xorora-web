import { cn } from "@/lib/utils";

const ROWS = [0.18, 0.34, 0.5, 0.66, 0.82, 1] as const;

interface PyramidBarsProps {
  color?: string;
  size?: number;
  className?: string;
}

export function PyramidBars({
  color = "var(--xo-indigo)",
  size = 48,
  className,
}: PyramidBarsProps) {
  return (
    <div
      className={cn("flex flex-col items-center", className)}
      style={{ gap: size * 0.07 }}
    >
      {ROWS.map((widthFactor) => (
        <div
          key={widthFactor}
          className="rounded-[1px]"
          style={{
            width: size * widthFactor,
            height: Math.max(2, size * 0.055),
            background: color,
          }}
        />
      ))}
    </div>
  );
}
