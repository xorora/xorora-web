// Regula Case Study — Market Context, Overview
const { useState: useRegCtx } = React;

function RegMarketContext() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-950)', padding: 'clamp(56px,7vw,88px) 32px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 120% at 12% 0%, rgba(70,76,159,.32), transparent 58%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.42fr 0.58fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }} className="cs-overview-grid">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <SignalRule color="var(--tangerine-400)" />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--tangerine-400)' }}>Market context</span>
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(26px,3.4vw,40px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: 0, textWrap: 'balance' }}>
            Legacy RegTech left emerging markets behind.
          </h2>
        </div>
        <div>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, lineHeight: 1.72, color: 'rgba(255,255,255,.72)', margin: 0 }}>
            Existing tools were built for US and EU enterprise compliance teams — expensive, over-engineered, and with zero coverage of local regulators in Southeast Asia, Africa, Latin America, and the Middle East. FinTech SMBs in these markets were left monitoring regulatory websites manually, parsing PDFs, and tracking circulars by hand — all while facing the same compliance risk as their enterprise counterparts.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 26 }}>
            {['Southeast Asia', 'Africa', 'Latin America', 'Middle East'].map(r => (
              <span key={r} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, color: 'rgba(255,255,255,.82)', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-pill)', padding: '8px 15px' }}>
                <i data-lucide="map-pin" style={{ width: 14, color: 'var(--indigo-300)' }}></i>{r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RegOverview() {
  return (
    <LightSection bg="var(--indigo-50)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }} className="cs-overview-grid">
        <div>
          <SectionHead label="Overview" title="The big picture." titleSize="clamp(30px,4vw,48px)" />
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '28px 0 18px' }}>
            A RegTech founder identified a clear gap — thousands of FinTech SMBs operating in emerging markets were flying blind on regulatory compliance. Fast-changing rules, fragmented sources, and zero affordable tooling meant compliance teams were buried in manual work with no reliable way to stay ahead of regulatory change.
          </p>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'var(--fg2)', margin: 0 }}>
            Xorora built a real-time regulatory intelligence platform from the ground up — an automation-first, AI-powered SaaS that continuously monitors regulator websites, extracts changes, scores their business impact, and delivers prioritized alerts to compliance teams in under an hour. What legacy tools charged enterprise prices for, this platform delivers to SMBs at a fraction of the cost.
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <BrowserFrame src={window.__resources.mockTargets} alt="Regula monitoring targets" url="app.regula.io/targets" tilt />
        </div>
      </div>
    </LightSection>
  );
}

Object.assign(window, { RegMarketContext, RegOverview });
