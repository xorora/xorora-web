// Xorora Case Study — Related Services, Tech Stack
const { useState: useSvcState } = React;

/* ---------------- RELATED SERVICES ---------------- */
function RelatedServices() {
  const svc = [
    { icon: 'cpu', name: 'AI Software Development' },
    { icon: 'app-window', name: 'Custom App Development' },
    { icon: 'pen-tool', name: 'UI/UX Services' },
    { icon: 'bot', name: 'AI Agent Development' },
    { icon: 'workflow', name: 'Workflow Automation' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Engaged capabilities" title="Xorora services utilized." titleSize="clamp(28px,3.6vw,44px)" style={{ marginBottom: 44 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
        {svc.map(s => <ServiceLink key={s.name} {...s} />)}
      </div>
    </LightSection>
  );
}

function ServiceLink({ icon, name }) {
  const [h, setH] = useSvcState(false);
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

/* ---------------- TECH STACK (marquee) ---------------- */
function TechStack() {
  const tech = [
    { i: 'atom', n: 'React 19' }, { i: 'braces', n: 'TypeScript' }, { i: 'zap', n: 'Vite' },
    { i: 'layers', n: 'Redux Toolkit' }, { i: 'refresh-cw', n: 'RTK Query' }, { i: 'route', n: 'React Router' },
    { i: 'wind', n: 'Tailwind CSS' }, { i: 'box', n: 'Radix UI' }, { i: 'clipboard-list', n: 'React Hook Form' },
    { i: 'shield-check', n: 'Zod' }, { i: 'chart-line', n: 'Recharts' }, { i: 'credit-card', n: 'Stripe' },
    { i: 'phone-call', n: 'Twilio' }, { i: 'audio-lines', n: 'Vapi' }, { i: 'map', n: 'Mapbox' },
    { i: 'file-text', n: 'Documso' }, { i: 'save', n: 'redux-persist' }, { i: 'sparkles', n: 'Biome' },
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
        <div className="cs-tmq cs-tmq-a">{rowA.map((t, i) => <TechCard key={i} {...t} />)}</div>
      </div>
      <div className="cs-tmq-wrap" style={{ marginTop: 16 }}>
        <div className="cs-tmq cs-tmq-b">{rowB.map((t, i) => <TechCard key={i} {...t} />)}</div>
      </div>
    </section>
  );
}

function TechCard({ i, n }) {
  return (
    <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '15px 24px', boxShadow: 'var(--shadow-xs)' }}>
      <i data-lucide={i} style={{ width: 19, color: 'var(--xo-indigo)' }}></i>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--fg1)', whiteSpace: 'nowrap' }}>{n}</span>
    </div>
  );
}

Object.assign(window, { RelatedServices, TechStack });
