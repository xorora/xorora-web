import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

export function Reveal({ children, className }: RevealProps) {
  return <div className={cn(className)}>{children}</div>;
}
