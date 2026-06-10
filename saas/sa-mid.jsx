// Xorora — SaaS Industry Page · Pain points + Services we offer
const { useState: useSaMid } = React;

function SaPain() {
  const cards = [
    { icon: 'users', title: 'Multi tenant complexity slows you down', body: 'Ship to every customer safely. We build isolated, scalable multi tenancy so one account never affects another, and onboarding new tenants takes minutes.' },
    { icon: 'layers', title: 'Legacy monolith holding back releases', body: 'Modernize without a full rewrite. We add modular, API first services around your core so you can ship features faster and integrate partners easily.' },
    { icon: 'credit-card', title: 'Billing and subscription sprawl', body: 'One commercial backbone. We unify plans, usage metering, and billing so revenue operations run from a single, reliable system.' },
    { icon: 'gauge', title: 'Churn from poor onboarding and insight', body: 'Turn signups into retained customers. We build guided onboarding, in product analytics, and health signals that surface risk before it becomes churn.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Pain points & value proposition" title="Pain points we solve with our SaaS development services." sub="SaaS teams lose momentum when tenancy, billing, and the product experience are not working in sync. We bring them together into one scalable platform." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="sa-2grid">
        {cards.map(c => <SaPainCard key={c.title} {...c} />)}
      </div>
    </LightSection>
  );
}

function SaPainCard({ icon, title, body }) {
  const [h, setH] = useSaMid(false);
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

function SaServices() {
  const svc = [
    { name: 'SaaS product development', body: 'Development of custom multi tenant products from scratch with a focus on performance, cost efficiency, scalability, and resiliency.' },
    { name: 'MVP and product engineering', body: 'From first prototype to production, we build and harden the platform your business runs on, fast.' },
    { name: 'Billing and subscription systems', body: 'Plans, usage metering, and billing standardized across your product with Stripe and other providers.' },
    { name: 'SaaS AI integration', body: 'Integrating AI models into your platform for search, copilots, automation, and analytics that lift retention.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead label="Capabilities" title="SaaS software development services we offer." sub="Our specialists deliver end to end SaaS software that considers your current digital state and business goals." style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="sa-2grid">
        {svc.map(s => <SaServiceCard key={s.name} {...s} />)}
      </div>
    </LightSection>
  );
}

function SaServiceCard({ name, body }) {
  const [h, setH] = useSaMid(false);
  return (
    <a href="#sa-form" onClick={e => { e.preventDefault(); const el = document.getElementById('sa-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); }}
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

Object.assign(window, { SaPain, SaServices });
