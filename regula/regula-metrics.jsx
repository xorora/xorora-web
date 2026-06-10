// Regula Case Study — Key Metrics, Services Utilized
const { useState: useRegMet } = React;

function RegKeyMetrics() {
  const stats = [
    { value: '70%', label: 'Reduction in compliance workload', note: 'Platform target' },
    { value: '<1hr', label: 'Regulatory change detection latency', note: 'Platform target' },
    { value: '48hr', label: 'Time to first alert for new users', note: 'Platform target' },
    { value: '12mo', label: 'Full SaaS platform built and launched', note: 'Solo founder build' },
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
            <StatBlock value={s.value} label={s.label} onDark />
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginTop: 12 }}>{s.note}</div>
          </div>
        ))}
      </div>
    </DarkSection>
  );
}

function RegServices() {
  const svc = [
    { icon: 'cpu', name: 'AI Software Development' },
    { icon: 'app-window', name: 'Custom App Development' },
    { icon: 'bot', name: 'AI Agent Development' },
    { icon: 'chart-line', name: 'Data Analytics' },
    { icon: 'database', name: 'Data Engineering' },
    { icon: 'workflow', name: 'Workflow Automation' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Engaged capabilities" title="Xorora services utilized." titleSize="clamp(28px,3.6vw,44px)" style={{ marginBottom: 44 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
        {svc.map(s => <RegServiceLink key={s.name} {...s} />)}
      </div>
    </LightSection>
  );
}

function RegServiceLink({ icon, name }) {
  const [h, setH] = useRegMet(false);
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

Object.assign(window, { RegKeyMetrics, RegServices });
