import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}

export function Eyebrow({ children, onDark, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "font-sans font-semibold text-eyebrow uppercase tracking-eyebrow",
        onDark ? "text-tangerine-400" : "text-tangerine-500",
        className,
      )}
    >
      {children}
    </div>
  );
}
