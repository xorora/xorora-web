import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

export interface V2RiseProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
}

export function V2Rise({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: V2RiseProps) {
  return (
    <Tag
      className={cn("v2-rise", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function V2Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="lg inline-flex items-center gap-2 rounded-pill px-4 py-[7px] font-medium font-sans text-[12.5px] text-white/85 tracking-wide">
      {children}
    </span>
  );
}

interface DarkSurfaceProps {
  children: React.ReactNode;
  bloom?: string;
  base?: string;
  className?: string;
}

export function DarkSurface({
  children,
  bloom = "50% 0%",
  base = "#060B1C",
  className,
}: DarkSurfaceProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden px-8 py-[clamp(80px,10vw,124px)]",
        className,
      )}
      style={{ background: base }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(95% 70% at ${bloom}, rgba(72,96,200,0.30) 0%, rgba(39,71,192,0.10) 34%, rgba(6,11,28,0) 62%)`,
        }}
      />
      <div
        className="-translate-x-1/2 pointer-events-none absolute top-[-26%] left-1/2 h-[1200px] w-[1200px] rounded-full opacity-40"
        style={{
          background:
            "repeating-radial-gradient(circle at center, rgba(131,163,238,0.06) 0px, rgba(131,163,238,0.06) 1px, transparent 1px, transparent 48px)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px]">{children}</div>
    </section>
  );
}

interface DarkHeadProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}

export function DarkHead({ eyebrow, title, sub, center }: DarkHeadProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        center
          ? "mx-auto max-w-[720px] items-center text-center"
          : "items-start text-left",
      )}
    >
      <V2Rise>
        <Eyebrow onDark>{eyebrow}</Eyebrow>
      </V2Rise>
      <V2Rise
        as="h2"
        delay={80}
        className="m-0 text-balance font-extrabold font-sans text-[clamp(34px,5vw,60px)] text-white leading-none tracking-tight"
      >
        {title}
      </V2Rise>
      {sub && (
        <V2Rise
          as="p"
          delay={140}
          className="m-0 max-w-[620px] font-light font-sans text-[clamp(15px,1.6vw,18px)] text-white/70 leading-relaxed"
        >
          {sub}
        </V2Rise>
      )}
    </div>
  );
}

interface V2LightProps {
  children: React.ReactNode;
  bg?: string;
  id?: string;
}

export function V2Light({ children, bg = "var(--surface)", id }: V2LightProps) {
  return (
    <section
      id={id}
      className="px-8 py-[clamp(76px,9vw,120px)]"
      style={{ background: bg }}
    >
      <div className="mx-auto max-w-[1180px]">{children}</div>
    </section>
  );
}

export function V2Eyebrow({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-4 font-sans font-semibold text-[13px] text-tangerine-500 uppercase tracking-[0.18em]",
        center && "text-center",
      )}
    >
      {children}
    </div>
  );
}

type BlobShape = "star" | "ring" | "cluster" | "chevron" | "comet";

export function ServiceBlob({
  shape,
  size = 56,
}: {
  shape: BlobShape;
  size?: number;
}) {
  const id = `bg-${shape}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className="drop-shadow-[0_6px_14px_rgba(46,85,214,0.45)]"
    >
      <title>Decorative icon</title>
      <defs>
        <radialGradient id={id} cx="38%" cy="30%" r="75%">
          <stop offset="0" stopColor="#A9C2FF" />
          <stop offset="55%" stopColor="#4F6BE0" />
          <stop offset="100%" stopColor="#2A45B8" />
        </radialGradient>
      </defs>
      {shape === "star" && (
        <path
          d="M32 2 C36 22 42 28 62 32 C42 36 36 42 32 62 C28 42 22 36 2 32 C22 28 28 22 32 2 Z"
          fill={`url(#${id})`}
        />
      )}
      {shape === "ring" && (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 4a28 28 0 100 56 28 28 0 000-56Zm0 16a12 12 0 110 24 12 12 0 010-24Z"
          fill={`url(#${id})`}
        />
      )}
      {shape === "cluster" && (
        <g fill={`url(#${id})`}>
          <circle cx="22" cy="22" r="13" />
          <circle cx="44" cy="22" r="11" />
          <circle cx="22" cy="44" r="11" />
          <circle cx="45" cy="45" r="13" />
        </g>
      )}
      {shape === "chevron" && (
        <path
          d="M20 6 L34 6 L52 32 L34 58 L20 58 L38 32 Z"
          fill={`url(#${id})`}
        />
      )}
      {shape === "comet" && (
        <path
          d="M54 10 C58 30 46 54 24 56 C12 57 4 49 6 37 C32 36 40 26 40 10 C40 6 50 4 54 10 Z"
          fill={`url(#${id})`}
        />
      )}
    </svg>
  );
}
