// Xorora — Startups Industry Page · Pain points + Services we offer
const { useState: useStMid } = React;

function StPain() {
  const cards = [
    { icon: 'timer', title: 'Speed to market is everything', body: 'Miss the window, miss the round. We ship a focused MVP fast so you can validate, demo to investors, and start learning from real users in weeks, not quarters.' },
    { icon: 'wallet', title: 'Limited runway, every dollar counts', body: 'Build lean, spend smart. We scope ruthlessly to the features that prove value and avoid the over engineering that burns runway before traction.' },
    { icon: 'layers', title: 'Prototypes that cannot scale', body: 'No throwaway code. We build MVPs on a clean, modular foundation so the thing that wins your first customers can grow into your Series A platform.' },
    { icon: 'users', title: 'No in house engineering team yet', body: 'We become your team. From product strategy to a production launch, we cover the full stack so founders can focus on customers and fundraising.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Pain points & value proposition" title="Pain points we solve for startups." sub="Startups fail when speed, runway, and a scalable foundation are not working in sync. We help founders move fast without building something they will have to throw away." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="st-2grid">
        {cards.map(c => <StPainCard key={c.title} {...c} />)}
      </div>
    </LightSection>
  );
}

function StPainCard({ icon, title, body }) {
  const [h, setH] = useStMid(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: 'var(--surface)', border: `1px solid ${h ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(26px,2.6vw,32px)', boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-xs)', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <span style={{ width: 46, height: 46, borderRadius: 'var(--r-md)', background: 'var(--indigo-50)', color: 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
        <i data-lucide={icon} style={{ width: 23 }}></i>
      </span>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(18px,1.6vw,21px)', color: 'var(--xo-indigo)', margin: '0 0 12px', lineHeight: 1.25 }}>{title}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{body}</p>
    </div>
  );
}

function StServices() {
  const svc = [
    { name: 'MVP and prototype development', body: 'We turn your idea into a working product fast, focused on the core features that prove value and win your first users.' },
    { name: 'Product strategy and discovery', body: 'We help shape your product vision, scope, and roadmap so engineering effort maps directly to traction and funding milestones.' },
    { name: 'Full stack product engineering', body: 'From frontend to backend, infrastructure, and integrations, we build and harden the platform your startup runs on.' },
    { name: 'AI integration for startups', body: 'We embed AI features and copilots into your product to differentiate early and deliver outsized value with a small team.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead label="Capabilities" title="Startup software development services we offer." sub="Our specialists deliver end to end product development that considers your stage, runway, and growth goals." style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="st-2grid">
        {svc.map(s => <StServiceCard key={s.name} {...s} />)}
      </div>
    </LightSection>
  );
}

function StServiceCard({ name, body }) {
  const [h, setH] = useStMid(false);
  return (
    <a href="#st-form" onClick={e => { e.preventDefault(); const el = document.getElementById('st-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'block', textDecoration: 'none', background: 'var(--surface)', border: `1px solid ${h ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(26px,2.6vw,34px)', boxShadow: h ? 'var(--shadow-md)' : 'none', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 14 }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 20, color: 'var(--xo-indigo)', margin: 0, lineHeight: 1.25 }}>{name}</h3>
        <span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: '50%', background: h ? 'var(--xo-indigo)' : 'var(--indigo-50)', color: h ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}>
          <i data-lucide="arrow-right" style={{ width: 18 }}></i>
        </span>
      </div>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{body}</p>
    </a>
  );
}

Object.assign(window, { StPain, StServices });
