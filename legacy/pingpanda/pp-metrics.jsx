// PingPanda Case Study — Key Metrics, Services, Overview, Challenge
const { useState: usePpMid } = React;

function PpKeyMetrics() {
  const stats = [
    { value: 'Real-time', label: 'Event delivery from ingestion to notification', note: 'Core promise', small: true },
    { value: '0 → 1', label: 'Full API-first SaaS built from the ground up', note: 'Greenfield' },
    { value: '13mo', label: 'Concept to production', note: 'Founder-led' },
    { value: '3', label: 'Core integrations: Discord, Stripe, Clerk', note: 'Wired end-to-end' },
  ];
  return (
    <DarkSection bloom="50% -10%">
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          <SignalRule color="var(--tangerine-400)" />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--tangerine-400)' }}>Key Metrics</span>
          <SignalRule color="var(--tangerine-400)" style={{ transform: 'scaleX(-1)' }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(20px,3vw,44px)' }} className="cs-metrics-grid">
        {stats.map(s => (
          <div key={s.label}>
            <div style={{ height: 1, background: 'rgba(255,255,255,.16)', marginBottom: 18 }} />
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: s.small ? 'clamp(30px,3.2vw,40px)' : 'clamp(40px,4.6vw,58px)', letterSpacing: '-0.03em', lineHeight: 0.98, color: '#fff' }}>{s.value}</span>
              <i data-lucide="arrow-up-right" style={{ width: 26, height: 26, color: 'var(--tangerine-500)', flexShrink: 0, marginTop: 4 }}></i>
            </div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.45, color: 'rgba(255,255,255,.6)', marginTop: 16, maxWidth: 230 }}>{s.label}</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginTop: 12 }}>{s.note}</div>
          </div>
        ))}
      </div>
    </DarkSection>
  );
}

function PpServices() {
  const svc = [
    { icon: 'app-window', name: 'Custom App Development' },
    { icon: 'chart-line', name: 'Data Analytics' },
    { icon: 'workflow', name: 'Workflow Automation' },
    { icon: 'cpu', name: 'AI Software Development' },
    { icon: 'pen-tool', name: 'UI/UX Services' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Engaged capabilities" title="Xorora services utilized." titleSize="clamp(28px,3.6vw,44px)" style={{ marginBottom: 44 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
        {svc.map(s => <PpServiceLink key={s.name} {...s} />)}
      </div>
    </LightSection>
  );
}

function PpServiceLink({ icon, name }) {
  const [h, setH] = usePpMid(false);
  return (
    <a onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer', background: h ? '#fff' : 'var(--slate-50)', border: `1px solid ${h ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 'var(--r-lg)', padding: '22px 22px', transition: 'all .2s', transform: h ? 'translateY(-2px)' : 'none', boxShadow: h ? 'var(--shadow-md)' : 'none' }}>
      <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 'var(--r-md)', background: h ? 'var(--xo-indigo)' : 'var(--indigo-50)', color: h ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}>
        <i data-lucide={icon} style={{ width: 22 }}></i>
      </span>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15.5, color: 'var(--fg1)', lineHeight: 1.25, flex: 1 }}>{name}</span>
      <i data-lucide="arrow-up-right" style={{ width: 18, color: h ? 'var(--tangerine-500)' : 'var(--slate-400)', transition: 'color .2s' }}></i>
    </a>
  );
}

function PpOverview() {
  return (
    <LightSection bg="var(--indigo-50)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }} className="cs-overview-grid">
        <div>
          <SectionHead label="Overview" title="The big picture." titleSize="clamp(30px,4vw,48px)" />
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '28px 0 18px' }}>
            SaaS teams move fast — but without real-time visibility into what is happening in their product, they are always reacting late. A new signup, a failed payment, a surge in usage. By the time these events surface in a dashboard, the moment to respond has already passed.
          </p>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'var(--fg2)', margin: 0 }}>
            Xorora built a lightweight, API-first SaaS monitoring tool that solves this with a single core workflow: ingest typed events via API, map them to categories, and receive instant Discord notifications with full contextual detail. No complex setup, no enterprise pricing, no monitoring blind spots — just immediate operational awareness delivered where the team already works.
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <BrowserFrame src="assets/pingpanda/membership.webp" alt="PingPanda plan usage and limits" url="app.pingpanda.io/upgrade" tilt />
        </div>
      </div>
    </LightSection>
  );
}

function PpChallenge() {
  const bullets = [
    ['eye-off', 'No real-time visibility into critical product and revenue events.'],
    ['mouse-pointer-click', 'Teams relying on manual dashboard checks that were slow, inconsistent and unreliable.'],
    ['shapes', 'No structured event modeling — every team tracked events differently.'],
    ['package-x', 'Existing monitoring tools were either too complex or too expensive for lean SaaS teams.'],
    ['gauge', 'No per-plan quota enforcement or usage controls for multi-tier SaaS operations.'],
    ['clock-alert', 'Delayed awareness meant delayed decisions — incidents and opportunities handled too late.'],
  ];
  return (
    <LightSection bg="var(--surface)">
      <div style={{ display: 'grid', gridTemplateColumns: '0.46fr 0.54fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'start' }} className="cs-overview-grid">
        <div>
          <SectionHead label="Problem statement" title="The challenge." />
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, lineHeight: 1.6, color: 'var(--fg1)', fontWeight: 500, margin: '26px 0 18px' }}>
            SaaS teams were flying blind on the events that mattered most.
          </p>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'var(--fg2)', margin: 0 }}>
            Critical product and revenue events — new signups, subscription upgrades, payment failures, incident spikes — were buried in logs, surfaced late through manual dashboard checks, or never tracked at all. The time between an event happening and a team member knowing about it was simply too long.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {bullets.map(([ic, t], i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: 'var(--slate-50)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '18px 20px' }}>
              <span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: 'var(--r-md)', background: '#fff', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-500)' }}>
                <i data-lucide={ic} style={{ width: 19 }}></i>
              </span>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.55, color: 'var(--fg2)', margin: 0 }}>{t}</p>
            </div>
          ))}
        </div>
      </div>
    </LightSection>
  );
}

Object.assign(window, { PpKeyMetrics, PpServices, PpOverview, PpChallenge });
