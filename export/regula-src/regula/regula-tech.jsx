// Regula Case Study — Tech Stack, Measurable Outcomes
function RegTechStack() {
  const tech = [
    { i: 'atom', n: 'Next.js 16' }, { i: 'atom', n: 'React 19' }, { i: 'braces', n: 'TypeScript' },
    { i: 'wind', n: 'Tailwind CSS 4' }, { i: 'box', n: 'shadcn/ui' }, { i: 'database', n: 'Drizzle ORM' },
    { i: 'database', n: 'PostgreSQL' }, { i: 'shield-check', n: 'NextAuth.js v5' }, { i: 'workflow', n: 'Inngest' },
    { i: 'radar', n: 'Crawl4AI' }, { i: 'sparkles', n: 'Google Gemini' }, { i: 'hard-drive', n: 'AWS S3' },
    { i: 'zap', n: 'Upstash Redis' }, { i: 'credit-card', n: 'Stripe' }, { i: 'mail', n: 'Resend' },
    { i: 'message-circle', n: 'Slack Webhooks' }, { i: 'message-square', n: 'MS Teams Webhooks' }, { i: 'triangle', n: 'Vercel' },
  ];
  const half = Math.ceil(tech.length / 2);
  const rowA = [...tech.slice(0, half), ...tech.slice(0, half)];
  const rowB = [...tech.slice(half), ...tech.slice(half)];
  return (
    <section style={{ background: 'var(--slate-50)', padding: 'clamp(72px,9vw,118px) 0', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto 48px', padding: '0 32px' }}>
        <SectionHead label="Engineering" title="The technology stack." titleSize="clamp(28px,3.6vw,44px)" align="center" />
      </div>
      <div className="cs-tmq-wrap">
        <div className="cs-tmq cs-tmq-a">{rowA.map((t, i) => <RegTechCard key={i} {...t} />)}</div>
      </div>
      <div className="cs-tmq-wrap" style={{ marginTop: 16 }}>
        <div className="cs-tmq cs-tmq-b">{rowB.map((t, i) => <RegTechCard key={i} {...t} />)}</div>
      </div>
    </section>
  );
}

function RegTechCard({ i, n }) {
  return (
    <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '15px 24px', boxShadow: 'var(--shadow-xs)' }}>
      <i data-lucide={i} style={{ width: 19, color: 'var(--xo-indigo)' }}></i>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--fg1)', whiteSpace: 'nowrap' }}>{n}</span>
    </div>
  );
}

function RegOutcomes() {
  const outcomes = [
    ['gauge', 'Up to 70% less manual workload', 'Teams monitor more regulators with less effort.'],
    ['timer', 'Sub-1-hour detection', 'Regulatory changes identified and alerted faster than any manual process.'],
    ['rocket', 'Under 48 hours to first alert', 'The onboarding wizard gets new teams monitoring within the same day.'],
    ['file-clock', 'Audit-ready change history', 'Every change logged, versioned, and documented for compliance.'],
    ['banknote', 'SMB-accessible pricing', 'Far lower cost than legacy enterprise RegTech, with equal or better coverage.'],
    ['rocket', 'Full SaaS in 12 months', 'Concept to live multi-tenant platform by a founder-led single-engineer build.'],
  ];
  return (
    <DarkSection bloom="20% 0%">
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }} className="cs-outcomes-grid">
        <div>
          <SectionHead label="Outcomes" title="Measurable outcomes." onDark />
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '26px 0 0' }}>
            An automation-first platform that doesn\u2019t just monitor regulations — it eliminates the manual compliance burden entirely, delivered end-to-end by a single founder-engineer in twelve months.
          </p>
          <div style={{ display: 'flex', gap: 36, marginTop: 36, flexWrap: 'wrap' }}>
            {[['70%', 'less workload'], ['<1hr', 'detection'], ['12mo', 'to production']].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 40, letterSpacing: '-0.03em', color: 'var(--tangerine-400)', lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,.55)', marginTop: 7 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="cs-outcome-cards">
          {outcomes.map(([ic, t, b]) => (
            <div key={t} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-lg)', padding: '20px 20px' }}>
              <span style={{ width: 38, height: 38, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.25)', border: '1px solid rgba(120,150,240,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)', marginBottom: 14 }}>
                <i data-lucide={ic} style={{ width: 19 }}></i>
              </span>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15.5, color: '#fff', marginBottom: 7 }}>{t}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,.58)' }}>{b}</div>
            </div>
          ))}
        </div>
      </div>
    </DarkSection>
  );
}

Object.assign(window, { RegTechStack, RegOutcomes });
