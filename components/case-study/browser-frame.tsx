import { Lock } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  tilt?: boolean;
  glow?: boolean;
  className?: string;
}

const TRAFFIC_LIGHTS = ["#FF5F57", "#FEBC2E", "#28C840"] as const;

export function BrowserFrame({
  src,
  alt,
  url = "app.xorora.ai",
  tilt = false,
  glow = false,
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] border border-white/10 bg-[#0C1430]",
        glow
          ? "shadow-[0_40px_100px_-30px_rgba(70,76,159,.6),0_20px_50px_rgba(2,6,15,.5)]"
          : "shadow-[0_30px_70px_-28px_rgba(2,6,15,.55)]",
        tilt && "transform-[perspective(1800px)_rotateY(-7deg)_rotateX(2deg)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-white/[0.07] border-b bg-[#070D22] px-4 py-[11px]">
        <span className="flex gap-[7px]">
          {TRAFFIC_LIGHTS.map((color) => (
            <span
              key={color}
              className="h-[11px] w-[11px] rounded-full opacity-90"
              style={{ background: color }}
            />
          ))}
        </span>
        <div className="ml-2.5 flex flex-1 justify-center">
          <div className="inline-flex max-w-[320px] items-center gap-[7px] rounded-pill bg-white/6 px-4 py-[5px]">
            <Lock className="h-[11px] w-[11px] text-white/45" aria-hidden />
            <span className="font-mono text-[11.5px] text-white/50">{url}</span>
          </div>
        </div>
        <span className="w-9" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="block h-auto w-full"
      />
    </div>
  );
}
