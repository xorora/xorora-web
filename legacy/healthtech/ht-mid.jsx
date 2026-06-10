// Xorora — Health Tech Industry Page · Complexities + HealthTech Expertise
const { useState: useHtMid } = React;

function HtComplexities() {
  const items = [
    { icon: 'shield-check', title: 'Compliance requirements', body: 'HIPAA, HITECH, FDA, and the Cures Act. We build with compliance from day one.' },
    { icon: 'heart-handshake', title: 'Healthcare user experience', body: 'Crafting impactful experiences for patients, providers, and payers.' },
    { icon: 'file-lock-2', title: 'PHI data security', body: 'Healthcare grade encryption in transit and at rest, audit trails, and enterprise level cloud security.' },
    { icon: 'maximize-2', title: 'Scalable architecture', body: 'Built for scale, with low tech debt and cost efficient cloud usage.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead label="Why it is different" title="Navigating the complexities of HealthTech." sub="Building healthcare software is not like building any other SaaS product. We work with our clients keeping these in mind." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }} className="ht-4grid">
        {items.map(it => (
          <div key={it.title}>
            <span style={{ width: 52, height: 52, borderRadius: 'var(--r-md)', background: 'var(--indigo-50)', color: 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <i data-lucide={it.icon} style={{ width: 24 }}></i>
            </span>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 19, color: 'var(--fg1)', margin: '0 0 12px', lineHeight: 1.25 }}>{it.title}</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{it.body}</p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

function HtExpertise() {
  const cards = [
    { title: 'Custom healthcare app development', body: 'We develop custom web and mobile apps focused on exceptional security, performance, and usability.', cta: 'Get consultation' },
    { title: 'Medical big data and analytics', body: 'Data plays a key role in HealthTech. We ensure its proper storage and management, so you can derive valuable insights.', cta: 'Order an estimate' },
    { title: 'Integrations with third party services', body: 'We integrate your existing software with services and tools for optimized patient management, medical records, and more.', cta: 'Share your idea' },
    { title: 'EHR and EMR systems development', body: 'Improve your patient experience with custom built EHR and EMR systems for medical records and patient management.', cta: 'Leave a request' },
    { title: 'Telehealth app development', body: 'Modern medicine is remote. If you have a telehealth application idea in mind, we help you implement it with robust and secure technologies.', cta: 'Get a quote' },
    { title: 'Digital transformation of medical business', body: 'We help established medical businesses digitalize their workflows and gain a competitive edge.', cta: 'Contact us' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="What we build" title="Our HealthTech expertise." sub="Check our services for a wide range of the HealthTech industry." style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="ht-2grid">
        {cards.map(c => <HtExpertiseCard key={c.title} {...c} />)}
      </div>
    </LightSection>
  );
}

function HtExpertiseCard({ title, body, cta }) {
  const [h, setH] = useHtMid(false);
  return (
    <a href="#ht-form" onClick={e => { e.preventDefault(); const el = document.getElementById('ht-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', background: h ? 'var(--surface)' : 'var(--slate-50)', borderRadius: 'var(--r-lg)', borderLeft: '3px solid var(--xo-indigo)', padding: 'clamp(26px,2.6vw,32px)', boxShadow: h ? 'var(--shadow-md)' : 'none', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(18px,1.6vw,21px)', color: 'var(--fg1)', margin: '0 0 12px', lineHeight: 1.25 }}>{title}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--fg2)', margin: '0 0 20px' }}>{body}</p>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, color: h ? 'var(--tangerine-600)' : 'var(--accent)', transition: 'color .15s' }}>
        {cta} <i data-lucide="arrow-right" style={{ width: 16 }}></i>
      </span>
    </a>
  );
}

Object.assign(window, { HtComplexities, HtExpertise });
