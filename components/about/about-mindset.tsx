import { Handshake, LifeBuoy, type LucideIcon, Users, Zap } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { cn } from "@/lib/utils";

const CARDS: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Handshake,
    title: "We think like co-founders",
    body: "We do not wait around for specs. We challenge assumptions, flag risks early, and make decisions like the product is ours. That is the difference between a vendor and a partner.",
  },
  {
    icon: Zap,
    title: "AI-accelerated engineering",
    body: "We use AI-assisted workflows internally to ship 40 to 60 percent faster. Your project benefits from modern tooling without you having to manage any of it.",
  },
  {
    icon: Users,
    title: "Senior engineers, not a bench",
    body: "The team that starts your project is the team that finishes it. No junior rotations. No bait and switch. Our average engineer has 8+ years of experience.",
  },
  {
    icon: LifeBuoy,
    title: "We stay after launch",
    body: "Most vendors disappear at deployment. We provide ongoing optimization, monitoring, and support because the first 90 days after launch matter the most.",
  },
];

export function AboutMindset() {
  return (
    <LightSection bg="var(--slate-50)">
      <div className="ab-2col mb-[52px] grid grid-cols-[1.1fr_0.9fr] items-end gap-[clamp(24px,4vw,56px)]">
        <h2 className="m-0 text-balance font-bold font-sans text-[clamp(28px,3.8vw,44px)] text-fg1 leading-tight tracking-[-0.02em]">
          Partner mindset. Senior talent. AI-powered speed.
        </h2>
        <p className="m-0 font-sans text-[16.5px] text-fg2 leading-relaxed">
          Here is what sets us apart from the hundreds of other engineering
          firms out there.
        </p>
      </div>
      <div className="ab-2grid grid grid-cols-2 gap-[22px]">
        {CARDS.map((card) => (
          <MindsetCard key={card.title} {...card} />
        ))}
      </div>
    </LightSection>
  );
}

function MindsetCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[var(--r-lg)] border border-border bg-surface p-[clamp(26px,2.8vw,36px)] shadow-xs",
        "transition-all duration-220 ease-in-out",
        "hover:translate-y-[-3px] hover:border-border-strong hover:shadow-md",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-indigo-400 to-tangerine-500 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-[var(--r-md)] bg-indigo-50 text-xo-indigo transition-colors duration-200 group-hover:bg-xo-indigo group-hover:text-white">
        <Icon className="h-[23px] w-[23px]" aria-hidden />
      </span>
      <h3 className="mb-3 font-sans font-semibold text-[clamp(19px,1.7vw,22px)] text-fg1 leading-snug">
        {title}
      </h3>
      <p className="m-0 font-sans text-[15px] text-fg2 leading-relaxed">
        {body}
      </p>
    </div>
  );
}
