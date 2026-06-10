// Xorora Case Study — Key Metrics, Client Overview
const { useState: useMetState } = React;

/* ---------------- KEY METRICS (dark) ---------------- */
function KeyMetrics() {
  const stats = [
    { value: '4', label: 'Role-specific portals built and deployed' },
    { value: '7+', label: 'External service integrations delivered' },
    { value: '16mo', label: 'Concept to fully operational platform' },
    { value: '0→1', label: 'Full platform built from the ground up' },
  ];
  return (
    <DarkSection bloom="50% -10%">
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          <SignalRule color="var(--tangerine-400)" />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--tangerine-400)' }}>Key Metrics</span>
          <SignalRule color="var(--tangerine-400)" style={{ transform: 'scaleX(-1)' }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(20px,3vw,44px)' }} className="cs-metrics-grid">
        {stats.map(s => <StatBlock key={s.label} value={s.value} label={s.label} onDark />)}
      </div>
    </DarkSection>
  );
}

/* ---------------- CLIENT OVERVIEW (light, indigo tint) ---------------- */
function ClientOverview() {
  const groups = ['Business operators', 'Sales teams', 'Developers', 'Testing operations'];
  return (
    <LightSection bg="var(--indigo-50)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }} className="cs-overview-grid">
        <div>
          <SectionHead label="Overview" title="The big picture." titleSize="clamp(30px,4vw,48px)" />
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '28px 0 18px' }}>
            A B2B AI voice automation company had built powerful voice-agent technology — but lacked the operational platform to deploy, monitor, and scale it commercially. Four distinct user groups each needed purpose-built tools, without sacrificing a unified backbone.
          </p>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 28px' }}>
            Xorora engineered a modular multi-panel SaaS ecosystem — four portals on a single shared backend — transforming scattered operations into a fully unified AI voice management platform, commercially ready from day one.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {groups.map(g => (
              <span key={g} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, color: 'var(--slate-700)', background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-pill)', padding: '8px 15px' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--xo-indigo)' }} />{g}
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <BrowserFrame src={window.__resources.mockSales} alt="Sales portal analytics" url="sales.xorora.ai/dashboard" tilt />
        </div>
      </div>
    </LightSection>
  );
}

Object.assign(window, { KeyMetrics, ClientOverview });
