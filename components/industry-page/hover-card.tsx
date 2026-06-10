"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type HoverCardProps<T extends React.ElementType = "div"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function HoverCard<T extends React.ElementType = "div">({
  as,
  className,
  children,
  ...props
}: HoverCardProps<T>) {
  const [hovered, setHovered] = useState(false);
  const Component = as ?? "div";

  return (
    <Component
      {...props}
      onMouseEnter={(event: React.MouseEvent) => {
        setHovered(true);
        props.onMouseEnter?.(event);
      }}
      onMouseLeave={(event: React.MouseEvent) => {
        setHovered(false);
        props.onMouseLeave?.(event);
      }}
      className={cn("group", hovered && "is-hovered", className)}
    >
      {children}
    </Component>
  );
}
