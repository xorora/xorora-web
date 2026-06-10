// PingPanda Case Study — Tech Stack, Measurable Outcomes
function PpTechStack() {
  const tech = [
    { i: 'atom', n: 'Next.js 15 App Router' }, { i: 'atom', n: 'React 19' }, { i: 'braces', n: 'TypeScript' },
    { i: 'wind', n: 'Tailwind CSS' }, { i: 'zap', n: 'Hono' }, { i: 'database', n: 'Prisma ORM' },
    { i: 'database', n: 'Neon PostgreSQL' }, { i: 'shield-check', n: 'Zod' }, { i: 'refresh-cw', n: 'TanStack Query' },
    { i: 'user-check', n: 'Clerk Auth' }, { i: 'credit-card', n: 'Stripe' }, { i: 'bell-ring', n: 'Discord Bot API' },
    { i: 'triangle', n: 'Vercel' },
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
        <div className="cs-tmq cs-tmq-a">{rowA.map((t, i) => <PpTechCard key={i} {...t} />)}</div>
      </div>
      <div className="cs-tmq-wrap" style={{ marginTop: 16 }}>
        <div className="cs-tmq cs-tmq-b">{rowB.map((t, i) => <PpTechCard key={i} {...t} />)}</div>
      </div>
    </section>
  );
}

function PpTechCard({ i, n }) {
  return (
    <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '15px 24px', boxShadow: 'var(--shadow-xs)' }}>
      <i data-lucide={i} style={{ width: 19, color: 'var(--xo-indigo)' }}></i>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--fg1)', whiteSpace: 'nowrap' }}>{n}</span>
    </div>
  );
}

function PpOutcomes() {
  const outcomes = [
    ['eye', 'Zero monitoring blind spots', 'Every critical event surfaces instantly where the team already works.'],
    ['timer', 'Real-time delivery', 'From event ingestion to Discord notification with no meaningful delay.'],
    ['siren', 'Faster incident response', 'Teams aware of errors, failures, and spikes the moment they occur.'],
    ['trending-up', 'Revenue moment visibility', 'Signups, upgrades, and payment events tracked and alerted in real time.'],
    ['gauge', 'Full quota management', 'Per-plan enforcement and usage controls built in from day one.'],
    ['rocket', 'Production in 13 months', 'API-first SaaS — billing, auth, and delivery tracking all live and operational.'],
  ];
  return (
    <DarkSection bloom="20% 0%">
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }} className="cs-outcomes-grid">
        <div>
          <SectionHead label="Outcomes" title="Measurable outcomes." onDark />
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '26px 0 0' }}>
            A lean, API-first tool that gives SaaS teams the operational visibility they need — without the complexity and cost they don\u2019t — delivered end-to-end in thirteen months.
          </p>
          <div style={{ display: 'flex', gap: 36, marginTop: 36, flexWrap: 'wrap' }}>
            {[['Real-time', 'delivery'], ['0→1', 'greenfield'], ['13mo', 'to production']].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 34, letterSpacing: '-0.03em', color: 'var(--tangerine-400)', lineHeight: 1 }}>{v}</div>
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

Object.assign(window, { PpTechStack, PpOutcomes });
