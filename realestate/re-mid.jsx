// Xorora — Real Estate Industry Page · Pain points + Services we offer
const { useState: useReMid } = React;

function RePain() {
  const cards = [
    { icon: 'clock', title: 'Slow listings and manual data entry', body: 'Turn hours into minutes. We automate listing creation, syndication, and updates so your inventory stays accurate across every channel without manual work.' },
    { icon: 'layers', title: 'Legacy systems holding you back', body: 'Modernize without a full rebuild. We add a flexible, API ready layer over legacy CRM and ERP systems so you can launch new services quickly and integrate partners easily.' },
    { icon: 'users', title: 'Disconnected buyer and tenant experience', body: 'Provide the right property at the right time. Our solutions read buyer and tenant behavior and deliver tailored listings inside an easy, modern interface.' },
    { icon: 'file-check', title: 'Complex contracts and compliance', body: 'We embed digital agreements, e signatures, and compliance into your platform foundation so deals close faster and audits stop being a headache.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Pain points & value proposition" title="Pain points we solve with our real estate development services." sub="Most teams lose revenue because listings, CRM, and the client experience are not working in sync. We bring them together into one connected platform." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="re-2grid">
        {cards.map(c => <RePainCard key={c.title} {...c} />)}
      </div>
    </LightSection>
  );
}

function RePainCard({ icon, title, body }) {
  const [h, setH] = useReMid(false);
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

function ReServices() {
  const svc = [
    { name: 'Real estate software development', body: 'Development of custom property solutions from scratch with a focus on performance, cost efficiency, scalability, and resiliency.' },
    { name: 'Property CRM and listing platforms', body: 'CRM, listing management, and syndication systems that keep your inventory, leads, and deals connected in one place.' },
    { name: 'Legacy system modernization', body: 'Reengineering your existing real estate solutions to meet the latest standards in security, usability, and interoperability.' },
    { name: 'Real estate AI integration', body: 'Integrating AI models into your property systems and building AI ready workflows for valuation, matching, and forecasting.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead label="Capabilities" title="Real estate software development services we offer." sub="Our specialists deliver end to end real estate software that considers your current digital state and business goals." style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="re-2grid">
        {svc.map(s => <ReServiceCard key={s.name} {...s} />)}
      </div>
    </LightSection>
  );
}

function ReServiceCard({ name, body }) {
  const [h, setH] = useReMid(false);
  return (
    <a href="#re-form" onClick={e => { e.preventDefault(); const el = document.getElementById('re-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); }}
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

Object.assign(window, { RePain, ReServices });
