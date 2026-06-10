// Xorora — E-commerce Industry Page · Pain points + Services we offer
const { useState: useEcMid } = React;

function EcPain() {
  const cards = [
    { icon: 'shopping-cart', title: 'High cart abandonment and low conversion', body: 'Turn browsers into buyers. We streamline checkout, speed up page loads, and personalize the journey so more visitors complete their purchase.' },
    { icon: 'layers', title: 'Legacy platforms that cannot keep up', body: 'Modernize without a full rebuild. We add a flexible, headless layer over legacy commerce systems so you can launch new channels quickly and integrate partners easily.' },
    { icon: 'boxes', title: 'Fragmented inventory and channels', body: 'Sell everywhere with one source of truth. We unify inventory, orders, and pricing across web, mobile, and marketplaces in real time.' },
    { icon: 'shield-check', title: 'Payment security and compliance', body: 'We embed PCI DSS and GDPR compliance into your platform foundation so you can scale globally without sleepless nights spent on audits.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Pain points & value proposition" title="Pain points we solve with our e-commerce development services." sub="Brands lose revenue when the storefront, inventory, and customer experience are not working in sync. We bring them together into one fast, connected platform." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="ec-2grid">
        {cards.map(c => <EcPainCard key={c.title} {...c} />)}
      </div>
    </LightSection>
  );
}

function EcPainCard({ icon, title, body }) {
  const [h, setH] = useEcMid(false);
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

function EcServices() {
  const svc = [
    { name: 'E-commerce software development', body: 'Development of custom commerce solutions from scratch with a focus on performance, cost efficiency, scalability, and resiliency.' },
    { name: 'Headless and storefront platforms', body: 'Headless commerce, custom storefronts, and progressive web apps that load fast and convert across every device.' },
    { name: 'Marketplace and multi vendor systems', body: 'Multi vendor marketplaces with vendor onboarding, split payments, and unified catalog and order management.' },
    { name: 'E-commerce AI integration', body: 'Integrating AI models into your commerce stack for search, recommendations, pricing, and demand forecasting.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead label="Capabilities" title="E-commerce software development services we offer." sub="Our specialists deliver end to end commerce software that considers your current digital state and business goals." style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="ec-2grid">
        {svc.map(s => <EcServiceCard key={s.name} {...s} />)}
      </div>
    </LightSection>
  );
}

function EcServiceCard({ name, body }) {
  const [h, setH] = useEcMid(false);
  return (
    <a href="#ec-form" onClick={e => { e.preventDefault(); const el = document.getElementById('ec-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); }}
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

Object.assign(window, { EcPain, EcServices });
