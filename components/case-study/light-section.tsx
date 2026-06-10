import { cn } from "@/lib/utils";

interface LightSectionProps {
  children: React.ReactNode;
  bg?: string;
  id?: string;
  className?: string;
}

export function LightSection({
  children,
  bg = "var(--surface)",
  id,
  className,
}: LightSectionProps) {
  return (
    <section
      id={id}
      className={cn("px-8 py-[clamp(72px,9vw,118px)]", className)}
      style={{ background: bg }}
    >
      <div className="mx-auto max-w-[1180px]">{children}</div>
    </section>
  );
}
