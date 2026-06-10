import { cn } from "@/lib/utils";

interface DarkSectionProps {
  children: React.ReactNode;
  bloom?: string;
  id?: string;
  pad?: string;
  className?: string;
}

export function DarkSection({
  children,
  bloom = "70% 0%",
  id,
  pad = "clamp(72px,9vw,118px) 32px",
  className,
}: DarkSectionProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden bg-navy-900", className)}
      style={{ padding: pad }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at ${bloom}, rgba(91,141,239,0.28) 0%, rgba(39,85,195,0.10) 30%, rgba(1,12,40,0) 62%)`,
        }}
      />
      <div className="relative mx-auto max-w-[1180px]">{children}</div>
    </section>
  );
}
