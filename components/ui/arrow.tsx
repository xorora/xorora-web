import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowProps {
  size?: number;
  className?: string;
}

export function Arrow({ size = 16, className }: ArrowProps) {
  return (
    <ArrowRight
      className={cn("text-current", className)}
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}
