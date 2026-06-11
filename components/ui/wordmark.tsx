import Image from "next/image";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  height?: number;
  dark?: boolean;
  className?: string;
}

export function Wordmark({
  height = 26,
  dark = false,
  className,
}: WordmarkProps) {
  return (
    <Image
      src={
        dark
          ? "/assets/logo-wordmark-dark-transparent.svg"
          : "/assets/logo-wordmark-light-transparent.svg"
      }
      alt="Xorora"
      width={0}
      height={0}
      sizes={`${Math.round(height * 4.2)}px`}
      className={cn("block h-auto w-auto", className)}
      style={{ height, width: "auto" }}
      priority
    />
  );
}
