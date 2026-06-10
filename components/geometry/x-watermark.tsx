import { cn } from "@/lib/utils";

interface XWatermarkProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function XWatermark({
  size = 520,
  color = "rgba(255,255,255,0.04)",
  className,
  style,
}: XWatermarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={cn("pointer-events-none absolute", className)}
      style={style}
      aria-hidden
    >
      <title>Decorative watermark</title>
      <path
        d="M50 4 C56 32 68 44 96 50 C68 56 56 68 50 96 C44 68 32 56 4 50 C32 44 44 32 50 4 Z"
        fill={color}
      />
    </svg>
  );
}
