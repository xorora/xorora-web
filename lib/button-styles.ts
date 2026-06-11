import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "onDark"
  | "light";
export type ButtonSize = "sm" | "md" | "lg";

export const buttonSizeClasses: Record<ButtonSize, string> = {
  sm: "px-[18px] py-[9px] text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-[30px] py-[15px] text-base",
};

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-xo-indigo text-white hover:bg-indigo-600 hover:shadow-glow-indigo border-transparent",
  secondary:
    "bg-surface text-fg1 border-border hover:border-border-strong hover:bg-surface-2",
  ghost: "bg-transparent text-accent border-transparent px-2",
  onDark:
    "bg-white/10 text-white border-white/25 backdrop-blur-sm hover:bg-white hover:text-xo-ink",
  light: "bg-white text-xo-ink shadow-sm hover:bg-slate-100 border-transparent",
};

const buttonBaseClasses =
  "inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-[var(--r-md)] border font-sans font-semibold transition-all duration-180 ease-in-out active:scale-[0.98]";

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    buttonBaseClasses,
    buttonSizeClasses[size],
    buttonVariantClasses[variant],
    variant === "ghost" && size === "md" && "px-2 py-3",
    className,
  );
}
