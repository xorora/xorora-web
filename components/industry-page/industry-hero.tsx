import { ArrowUpRight } from "lucide-react";
import { ServiceGlassForm } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";
import type { Industry } from "@/lib/industries/types";
import { IndustryIcon } from "./icon-map";
import { IndustryBreadcrumb } from "./industry-breadcrumb";
import { IndustryHeroCta } from "./industry-hero-cta";

interface IndustryHeroProps {
  industry: Industry;
}

export function IndustryHero({ industry }: IndustryHeroProps) {
  const { hero, headerBg, name } = industry;
  const titleText = hero.title.endsWith(".")
    ? hero.title.slice(0, -1)
    : hero.title;

  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-cover opacity-50"
        style={{ backgroundImage: `url('${headerBg}')` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(95deg,rgba(1,12,40,0.97)_0%,rgba(1,12,40,0.9)_42%,rgba(3,12,38,0.64)_72%,rgba(3,12,38,0.5)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(1,12,40,0.5)_0%,rgba(1,12,40,0)_30%,rgba(2,6,15,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_12%_0%,rgba(91,141,239,0.22),transparent_60%)]" />

      <div className="ind-page-header-grid relative mx-auto grid max-w-[1240px] grid-cols-[1.08fr_0.92fr] items-center gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(120px,12vw,150px)] pb-[clamp(72px,8vw,104px)]">
        <div>
          <IndustryBreadcrumb name={name} />

          <h1 className="mb-6 text-balance font-extrabold font-sans text-[clamp(36px,4.8vw,60px)] text-white leading-[1.02] tracking-tight">
            {titleText}
            <span className="text-tangerine-400">.</span>
          </h1>

          {hero.subtitle && (
            <p className="mb-9 max-w-[520px] font-sans text-lg text-white/74 leading-[1.62]">
              {hero.subtitle}
            </p>
          )}

          {hero.bullets && hero.bullets.length > 0 && (
            <ul className="mb-9 max-w-[520px] list-none space-y-3 p-0">
              {hero.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 font-sans text-[17px] text-white/74 leading-[1.55]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tangerine-400" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {hero.ctaLabel && (
            <div className="mb-9 flex flex-wrap items-center gap-7">
              <IndustryHeroCta
                label={hero.ctaLabel}
                className={buttonClassName({ variant: "light", size: "lg" })}
              >
                {hero.ctaLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </IndustryHeroCta>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-[22px]">
            {hero.badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 font-mono text-[11.5px] text-white/55 tracking-[0.08em]"
              >
                <IndustryIcon
                  name={badge.icon}
                  className="h-[15px] w-[15px] text-tangerine-400"
                />
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        <div id="industry-form">
          <ServiceGlassForm
            title={hero.formTitle}
            messageLabel="About project"
            messagePlaceholder="Tell us what you want to build"
            buttonVariant="primary"
          />
        </div>
      </div>
    </section>
  );
}
