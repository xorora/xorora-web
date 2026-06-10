"use client";

import {
  type ButtonSize,
  type ButtonVariant,
  buttonClassName,
  buttonSizeClasses,
  buttonVariantClasses,
} from "@/lib/button-styles";

export {
  buttonClassName,
  buttonSizeClasses,
  buttonVariantClasses,
  type ButtonSize,
  type ButtonVariant,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}
