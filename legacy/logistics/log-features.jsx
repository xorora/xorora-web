// Xorora — Logistics Industry Page · Core Features (dark) + Process tabs
const { useState: useLogFeat } = React;

function LogFeatures() {
  const feats = [
    { icon: 'route', name: 'Transportation Management System', body: 'End to end transport management, route planning, order handling, carrier management, and freight calculation.' },
    { icon: 'warehouse', name: 'Warehouse Management System', body: 'Fleet and warehouse management, vehicle details, maintenance schedules, fuel monitoring, and driver management.' },
    { icon: 'package-check', name: 'Last mile delivery module', body: 'Door to door delivery management, dynamic route optimization for couriers, a driver app, and electronic proof of delivery.' },
    { icon: 'satellite-dish', name: 'Real time fleet tracking', body: 'Feature rich GPS based vehicle tracking software for easy operational control and full visibility.' },
    { icon: 'layout-dashboard', name: 'Customizable dashboards', body: 'A handy dashboard creator with widgets, KPIs, graphs, charts, and maps for monitoring your key metrics.' },
    { icon: 'calculator', name: 'Accounting systems integration', body: 'APIs for easy data exchange of orders and statuses with your most valuable partners and counterparties.' },
    { icon: 'share-2', name: 'Client and partner integration', body: 'Smart integrations that keep clients, carriers, and partners in sync across the whole network.' },
    { icon: 'receipt', name: 'Billing and invoicing module', body: 'Computation of service charges from tariffs and actuals, with automatic invoicing built in.' },
    { icon: 'sparkles', name: 'AI based forecasting', body: 'Demand forecasting, inventory optimization, and peak load forecasting powered by applied machine learning.' },
    { icon: 'files', name: 'Document management system', body: 'A central repository for transport and warehouse documents with electronic approval and signature workflows.' },
  ];
  return (
    <DarkSection bloom="50% 6%">
      <SectionHead label="What sets us apart" title="Core features and architecture of our logistics software." sub="Our logistics and transportation software stack is modular, scalable, and designed for long term adaptability." onDark style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }} className="log-feat-grid">
        {feats.map(f => <FeatCard key={f.name} {...f} />)}
      </div>
    </DarkSection>
  );
}

function FeatCard({ icon, name, body }) {
  const [h, setH] = useLogFeat(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', display: 'flex', gap: 16, background: 'rgba(255,255,255,.04)', border: `1px solid ${h ? 'rgba(120,150,240,.5)' : 'rgba(255,255,255,.12)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(22px,2.4vw,28px)', transition: 'border-color .2s, transform .2s', transform: h ? 'translateY(-3px)' : 'none' }}>
      <span style={{ width: 46, height: 46, flexShrink: 0, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.28)', border: '1px solid rgba(120,150,240,.32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)' }}>
        <i data-lucide={icon} style={{ width: 22 }}></i>
      </span>
      <div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 17.5, color: '#fff', margin: '0 0 8px', lineHeight: 1.25 }}>{name}</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,.62)', margin: 0 }}>{body}</p>
      </div>
    </div>
  );
}

function LogProcess() {
  const steps = [
    { tab: 'Define needs', body: 'We analyze your logistics process, operating model, and target users to define requirements, goals, and KPIs. Our team identifies efficiency and cost drivers so your product delivers measurable results aligned with your business vision.', out: ['Product vision document', 'Deep workflow analysis', 'Preliminary estimate', 'Product creation roadmap'] },
    { tab: 'Solution design', body: 'We translate requirements into architecture, data models, and a clean interface. Every screen and integration is mapped before a line of production code is written, so delivery stays predictable.', out: ['System architecture', 'UX and UI design', 'Integration plan', 'Tech stack decision'] },
    { tab: 'Delivery setup', body: 'We stand up environments, pipelines, and the team model that fits you, whether dedicated team or staff augmentation. Security and observability are wired in from the first commit.', out: ['CI and CD pipelines', 'Cloud environment', 'Security guardrails', 'Team onboarding'] },
    { tab: 'Development', body: 'We build in short, reviewable increments with continuous demos. You see working software every sprint, and the platform ships to production ready to scale across your transport and supply chain.', out: ['Working software each sprint', 'Continuous testing', 'Production release', 'Ongoing support'] },
  ];
  const [active, setActive] = useLogFeat(0);
  const s = steps[active];
  return (
    <LightSection bg="var(--surface)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start', marginBottom: 44 }} className="log-2col">
        <SectionHead label="How we deliver" title="Our logistics software development process." titleSize="clamp(28px,3.4vw,42px)" />
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, lineHeight: 1.65, color: 'var(--fg2)', margin: 0, paddingTop: 8 }}>
          We use a proven development lifecycle to build custom solutions that streamline logistics, optimize workflows, and give visibility across transport and supply chains.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }} className="log-tabs">
        {steps.map((st, i) => (
          <button key={st.tab} onClick={() => setActive(i)} style={{
            fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 600, cursor: 'pointer',
            padding: '13px 22px', borderRadius: 'var(--r-pill)', transition: 'all .18s',
            border: `1px solid ${active === i ? 'transparent' : 'var(--border-strong)'}`,
            background: active === i ? 'var(--xo-indigo)' : 'transparent',
            color: active === i ? '#fff' : 'var(--fg2)',
          }}>{i + 1}. {st.tab}</button>
        ))}
      </div>

      <div style={{ background: 'var(--slate-50)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3.5vw,44px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,52px)' }} className="log-2col">
        <div>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 24, color: 'var(--fg1)', margin: '0 0 16px', letterSpacing: '-0.01em' }}>{s.tab}</h3>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 28px' }}>{s.body}</p>
          <Button variant="primary" onClick={() => { const el = document.getElementById('log-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); }}>Book a consultation <i data-lucide="arrow-right" style={{ width: 16 }}></i></Button>
        </div>
        <div>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--fg1)', marginBottom: 16 }}>Key outcomes</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {s.out.map(o => (
              <div key={o} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '14px 16px' }}>
                <i data-lucide="check" style={{ width: 16, color: 'var(--tangerine-500)', flexShrink: 0 }}></i>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, color: 'var(--fg1)', lineHeight: 1.35 }}>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LightSection>
  );
}

Object.assign(window, { LogFeatures, LogProcess });
