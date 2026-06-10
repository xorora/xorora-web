import { cn } from "@/lib/utils";

interface AtmosphereProps {
  children: React.ReactNode;
  bloom?: string;
  className?: string;
}

export function Atmosphere({
  children,
  bloom = "62% 8%",
  className,
}: AtmosphereProps) {
  return (
    <div className={cn("relative overflow-hidden bg-navy-900", className)}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at ${bloom}, rgba(91,141,239,0.35) 0%, rgba(39,85,195,0.12) 28%, rgba(1,12,40,0) 60%)`,
        }}
      />
      <div
        className="pointer-events-none absolute top-[-40%] left-1/2 h-[1400px] w-[1400px] translate-x-[-30%] rounded-full opacity-50"
        style={{
          background:
            "repeating-radial-gradient(circle at center, rgba(131,163,238,0.08) 0px, rgba(131,163,238,0.08) 1px, transparent 1px, transparent 46px)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
