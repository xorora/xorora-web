import {
  Award,
  type LucideIcon,
  MessagesSquare,
  UsersRound,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { cn } from "@/lib/utils";

const REASONS: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: UsersRound,
    title: "Low turnover",
    body: "Our engineers stay with us for long periods. That limits team changes on your project and the need to constantly onboard new people.",
  },
  {
    icon: MessagesSquare,
    title: "Communication",
    body: "We advocate battle-tested Scrum delivery, which gives our clients full control and complete visibility over the process.",
  },
  {
    icon: Award,
    title: "Experience",
    body: "We use our expertise to give you an exceptional experience, built on many years in the market and a long track of successful projects.",
  },
];

export function HwwReasons() {
  return (
    <LightSection bg="var(--slate-50)">
      <h2 className="mx-auto mb-[clamp(40px,5vw,56px)] max-w-[760px] text-balance text-center font-bold font-sans text-[clamp(30px,4vw,46px)] text-fg1 leading-tight tracking-[-0.02em]">
        Shall we <span className="text-xo-indigo">work</span> on a project{" "}
        <span className="text-xo-indigo">together</span>
        <span className="text-tangerine-500">?</span>
      </h2>
      <div className="hw-reasons-grid mx-auto grid max-w-[1100px] grid-cols-3 gap-[clamp(22px,2.4vw,28px)]">
        {REASONS.map((reason) => (
          <ReasonCard key={reason.title} {...reason} />
        ))}
      </div>
    </LightSection>
  );
}

function ReasonCard({
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
        "group relative overflow-hidden rounded-r-lg border border-border bg-surface p-[clamp(24px,2.6vw,32px)] shadow-xs",
        "transition-all duration-220 ease-in-out",
        "hover:translate-y-[-3px] hover:border-border-strong hover:shadow-md",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-indigo-400 to-tangerine-500 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      <span className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-r-md bg-indigo-50 text-xo-indigo transition-colors duration-200 group-hover:bg-xo-indigo group-hover:text-white">
        <Icon className="h-[22px] w-[22px]" aria-hidden />
      </span>
      <h3 className="mb-2.5 font-sans font-semibold text-[19px] text-fg1">
        {title}
      </h3>
      <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
        {body}
      </p>
    </div>
  );
}
