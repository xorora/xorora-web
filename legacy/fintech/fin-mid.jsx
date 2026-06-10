// Xorora — Fintech Industry Page · Pain points + Services we offer
const { useState: useFinMid } = React;

function FinPain() {
  const cards = [
    { icon: 'user-check', title: 'Slow and costly customer onboarding (KYC)', body: 'Turn days into minutes. We automate identity verification and background checks, enabling a fully digital KYC process that is secure, fast, and compliant.' },
    { icon: 'layers', title: 'Legacy tech holding you back', body: 'Modernize without a full rebuild. We add a flexible, API ready layer over legacy systems so you can launch new financial products quickly and integrate with partners easily.' },
    { icon: 'sparkles', title: 'Poor customer experience and no personalization', body: 'Provide the right product at the right time. Our solutions read customer behavior and deliver individual financial products inside an easy, modern interface.' },
    { icon: 'shield-check', title: 'Advanced regulatory compliance (PSD2, PCI DSS, GDPR)', body: 'We embed compliance into your platform foundation so you can expand globally without sleepless nights spent on audits.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Pain points & value proposition" title="Pain points we solve with our fintech development services." sub="Most executives say poor decision making costs them revenue, often because systems, compliance, and customer experience are not working in sync. We fix that." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="fin-2grid">
        {cards.map(c => <PainCard key={c.title} {...c} />)}
      </div>
    </LightSection>
  );
}

function PainCard({ icon, title, body }) {
  const [h, setH] = useFinMid(false);
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

function FinServices() {
  const svc = [
    { name: 'FinTech software development', body: 'Development of custom fintech solutions from scratch with a focus on performance, cost efficiency, scalability, and resiliency.' },
    { name: 'Code audit for FinTech projects', body: 'Comprehensive review of your financial software codebase to detect vulnerabilities or compliance gaps and shape an improvement strategy.' },
    { name: 'Financial system modernization', body: 'Reengineering your existing fintech solutions to meet the latest industry standards in security, usability, and interoperability.' },
    { name: 'FinTech AI integration', body: 'Integrating AI models into your financial systems and building AI ready workflows to enhance productivity and reduce manual effort.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead label="Capabilities" title="Financial software development services we offer." sub="Our fintech specialists deliver end to end financial software development services that consider your current digital state and business goals." style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="fin-2grid">
        {svc.map(s => <ServiceCard key={s.name} {...s} />)}
      </div>
    </LightSection>
  );
}

function ServiceCard({ name, body }) {
  const [h, setH] = useFinMid(false);
  return (
    <a href="#fin-form" onClick={e => { e.preventDefault(); const el = document.getElementById('fin-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); }}
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

Object.assign(window, { FinPain, FinServices });
