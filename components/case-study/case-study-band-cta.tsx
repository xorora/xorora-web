import { CaseStudyCta } from "./case-study-cta";

export function CaseStudyBandCta() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_160%_at_50%_130%,rgba(70,76,159,.55),transparent_62%)]" />
      <div className="relative mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-8 px-8 py-[clamp(48px,6vw,76px)]">
        <h2 className="m-0 max-w-[620px] text-balance font-bold font-sans text-[clamp(26px,3.4vw,42px)] text-white leading-[1.08] tracking-[-0.02em]">
          Evolve your business with a leading AI development partner.
        </h2>
        <CaseStudyCta
          primaryLabel="Start a project"
          secondaryLabel="Book a call"
          secondaryVariant="light"
        />
      </div>
    </section>
  );
}
