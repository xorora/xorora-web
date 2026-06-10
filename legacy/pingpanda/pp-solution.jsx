// PingPanda Case Study — Solution, 4-step pipeline, Event types
const { useState: usePpSol } = React;

function PpSolution() {
  const steps = [
    { no: '01', icon: 'webhook', name: 'Event Ingested', sub: 'via API endpoint' },
    { no: '02', icon: 'shield-check', name: 'Validated & Categorized', sub: 'Zod + category rules' },
    { no: '03', icon: 'gauge', name: 'Quota Checked', sub: 'Per-plan enforcement' },
    { no: '04', icon: 'bell-ring', name: 'Discord Alert Sent', sub: 'Instant notification' },
  ];
  const events = [
    { icon: 'trending-up', name: 'Sales Events', sub: 'New signups, upgrades', color: 'var(--success)' },
    { icon: 'triangle-alert', name: 'Incident Events', sub: 'Errors, failures, spikes', color: 'var(--tangerine-400)' },
    { icon: 'activity', name: 'Usage Events', sub: 'Quota hits, milestones', color: 'var(--indigo-300)' },
  ];
  return (
    <DarkSection bloom="50% 8%" id="solution">
      <SectionHead label="Solution" title="How Xorora solved it." sub="An API-first SaaS event notifier with a deliberately simple workflow — send an event, get an alert. No dashboards to configure, no monitoring infrastructure to manage." onDark style={{ marginBottom: 44 }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(28px,4vw,52px)', alignItems: 'center', marginBottom: 'clamp(44px,5vw,64px)' }} className="cs-overview-grid">
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.72, color: 'rgba(255,255,255,.72)', margin: 0 }}>
          Teams integrate via a single API endpoint, define their event categories, and every tracked event triggers an instant, richly formatted Discord notification with full contextual fields. The platform handles category-based event modeling with strict Zod validation, secure API-key ingestion, per-plan monthly quota enforcement, and a clean dashboard for delivery-status tracking and analytics.
        </p>
        <BrowserFrame src="assets/pingpanda/events.webp" alt="PingPanda first event API example" url="app.pingpanda.io/api-key" />
      </div>

      {/* Pipeline */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'rgba(3,9,24,.5)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3.5vw,44px)', marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--tangerine-400)' }} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>Send an event · get an alert · real-time</span>
        </div>
        <div className="reg-pipeline">
          {steps.map((s, i) => (
            <React.Fragment key={s.no}>
              <PpStep {...s} />
              {i < steps.length - 1 && (
                <div className="reg-pipe-arrow" aria-hidden="true"><i data-lucide="chevron-right" style={{ width: 22, color: 'rgba(120,150,240,.6)' }}></i></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Event types */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '36px 0 22px' }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.18em', color: 'rgba(255,255,255,.45)' }}>EVENT TYPES SUPPORTED</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="reg-arch-3col">
        {events.map(e => (
          <div key={e.name} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-lg)', padding: '20px 22px' }}>
            <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 'var(--r-md)', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: e.color }}>
              <i data-lucide={e.icon} style={{ width: 22 }}></i>
            </span>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff' }}>{e.name}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,.55)', marginTop: 3 }}>{e.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </DarkSection>
  );
}

function PpStep({ no, icon, name, sub }) {
  const [h, setH] = usePpSol(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', flex: 1, minWidth: 0, background: 'rgba(255,255,255,.035)', border: `1px solid ${h ? 'rgba(120,150,240,.5)' : 'rgba(255,255,255,.12)'}`, borderRadius: 'var(--r-lg)', padding: '22px 18px', textAlign: 'center', transition: 'border-color .2s, transform .2s', transform: h ? 'translateY(-3px)' : 'none' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--indigo-700))' }} />
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.1em', color: 'var(--tangerine-400)', marginBottom: 14 }}>{no}</div>
      <span style={{ width: 48, height: 48, margin: '0 auto 14px', borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.25)', border: '1px solid rgba(120,150,240,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)' }}>
        <i data-lucide={icon} style={{ width: 22 }}></i>
      </span>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15.5, color: '#fff', marginBottom: 5 }}>{name}</div>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,.55)' }}>{sub}</div>
    </div>
  );
}

window.PpSolution = PpSolution;
