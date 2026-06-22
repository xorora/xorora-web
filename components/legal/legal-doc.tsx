interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalDocProps {
  title: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
}

export function LegalDoc({ title, updated, intro, sections }: LegalDocProps) {
  return (
    <div className="bg-surface">
      <section className="border-border border-b bg-navy-950 px-8 pt-[clamp(118px,14vw,176px)] pb-[clamp(44px,6vw,68px)]">
        <div className="mx-auto max-w-[820px]">
          <h1 className="font-extrabold font-sans text-[clamp(34px,5vw,54px)] text-white leading-tight tracking-[-0.02em]">
            {title}
          </h1>
          <p className="mt-4 font-mono text-[12.5px] text-white/45 uppercase tracking-[0.12em]">
            Last updated: {updated}
          </p>
        </div>
      </section>

      <section className="px-8 py-[clamp(52px,8vw,92px)]">
        <div className="mx-auto max-w-[820px]">
          {intro.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-5 font-sans text-[16px] text-fg2 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          {sections.map((section) => (
            <div key={section.heading} className="mt-10">
              <h2 className="mb-3 font-bold font-sans text-[22px] text-fg1 leading-snug tracking-[-0.01em]">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-4 font-sans text-[15.5px] text-fg2 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
