import type { CaseStudy } from "@/lib/case-studies/types";
import { BrowserFrame } from "./browser-frame";
import { CaseStudyCta } from "./case-study-cta";
import { CaseStudyMetaBar } from "./case-study-meta-bar";

interface CaseStudyHeroProps {
  study: CaseStudy;
}

function GradientTitle({ title }: { title: string }) {
  if (!title.endsWith(".")) {
    return (
      <h1 className="m-0 text-balance font-extrabold font-sans text-[clamp(34px,4.7vw,60px)] text-white leading-[1.02] tracking-tight">
        {title}
      </h1>
    );
  }

  const main = title.slice(0, -1);
  const lastSpace = main.lastIndexOf(" ");
  const prefix = main.slice(0, lastSpace + 1);
  const highlight = main.slice(lastSpace + 1);

  return (
    <h1 className="m-0 text-balance font-extrabold font-sans text-[clamp(34px,4.7vw,60px)] text-white leading-[1.02] tracking-tight">
      {prefix}
      <span
        className="bg-linear-to-r from-[#C3C6EC] via-[#6F74C9] to-tangerine-400 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(100deg, #C3C6EC, #6F74C9 52%, #FF8A3D)",
        }}
      >
        {highlight}
      </span>
      <span className="text-tangerine-400">.</span>
    </h1>
  );
}

function heroBadge(study: CaseStudy): string {
  if (study.slug === "unified-ai-voice-operations") {
    return "4 portals · live in production";
  }
  if (study.slug === "regula") {
    return "monitoring · multi-jurisdiction";
  }
  if (study.slug === "pingpanda") {
    return "real-time · API-first";
  }
  return study.tags.slice(0, 2).join(" · ");
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  const headerMetrics = study.metrics.slice(0, 3);
  const [primaryTag, ...restTags] = study.tags;

  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-cover opacity-[0.62]"
        style={{
          backgroundImage: `url(${study.headerBg})`,
          backgroundPosition: "center right",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(1,12,40,0.97)_0%,rgba(1,12,40,0.84)_38%,rgba(1,12,40,0.34)_66%,rgba(1,12,40,0.6)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(1,12,40,0.4)_0%,rgba(1,12,40,0)_24%,rgba(2,6,15,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(78%_70%_at_80%_2%,rgba(91,141,239,0.22),transparent_60%)]" />

      <div className="cs-header-grid relative mx-auto grid max-w-[1240px] grid-cols-[1.05fr_0.95fr] items-center gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(120px,12vw,150px)] pb-[clamp(68px,8vw,108px)]">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-pill border border-white/18 bg-white/6 py-2 pr-2 pl-4 backdrop-blur-[6px]">
            {primaryTag && (
              <span className="font-sans font-semibold text-[13px] text-white/90">
                {primaryTag}
              </span>
            )}
            {restTags[0] && (
              <span className="rounded-pill bg-xo-indigo px-2.5 py-1 font-mono text-[11px] text-xo-white tracking-[0.08em]">
                {restTags[0]}
              </span>
            )}
          </div>

          <GradientTitle title={study.title} />

          <p className="mt-6 mb-8 max-w-[540px] font-sans text-[18px] text-white/74 leading-[1.62]">
            {study.lead}
          </p>

          {headerMetrics.length > 0 && (
            <div className="mb-9 flex flex-wrap gap-9">
              {headerMetrics.map((metric) => (
                <div key={metric.id}>
                  <div className="font-extrabold font-sans text-[clamp(32px,4vw,42px)] text-white leading-none tracking-[-0.03em]">
                    {metric.value}
                  </div>
                  <div className="mt-2 max-w-[150px] font-sans text-[13.5px] text-white/55">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <CaseStudyCta />
        </div>

        <div className="cs-header-art relative">
          <BrowserFrame
            src={study.heroImage}
            alt={`${study.subtitle} dashboard`}
            url={study.heroUrl ?? "app.xorora.ai"}
            glow
          />
          <div className="absolute bottom-[-22px] left-[-22px] flex items-center gap-2.5 rounded-r-md border border-white/12 bg-navy-950 px-[18px] py-3 text-white shadow-lg">
            <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_8px_var(--success)]" />
            <span className="font-mono text-xs">{heroBadge(study)}</span>
          </div>
        </div>
      </div>

      <CaseStudyMetaBar study={study} />
    </section>
  );
}
