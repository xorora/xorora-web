// Xorora — Travel & Hospitality Industry Page · Pain points + Services + Clients we work with
const { useState: useTvMid } = React;

function TvPain() {
  const cards = [
    { icon: 'calendar-x', title: 'Fragmented bookings and channels', body: 'Sell everywhere with one source of truth. We unify reservations, availability, and rates across web, mobile, and OTAs in real time so you never oversell.' },
    { icon: 'layers', title: 'Legacy systems that frustrate guests', body: 'Modernize without a full rebuild. We add a flexible, API first layer over legacy PMS and booking systems so you can launch new services quickly.' },
    { icon: 'sparkles', title: 'Generic, impersonal guest experience', body: 'Delight every traveler. Our solutions read guest behavior and deliver tailored offers, itineraries, and service inside an easy, modern interface.' },
    { icon: 'shield-check', title: 'Payment security and compliance', body: 'We embed PCI DSS and GDPR compliance into your platform foundation so you can scale across regions without sleepless nights spent on audits.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Pain points & value proposition" title="Pain points we solve in travel and hospitality." sub="Operators lose revenue and loyalty when bookings, operations, and the guest experience are not working in sync. We bring them together into one seamless platform." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="tv-2grid">
        {cards.map(c => <TvPainCard key={c.title} {...c} />)}
      </div>
    </LightSection>
  );
}

function TvPainCard({ icon, title, body }) {
  const [h, setH] = useTvMid(false);
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

/* ---------------- CLIENTS WE WORK WITH (extra section) ---------------- */
function TvClients() {
  const clients = [
    { icon: 'building', name: 'Hotels & Resorts', body: 'We partner with hotels and resorts to develop integrated management systems that streamline bookings, guest services, and room management, improving operational efficiency and guest experiences.' },
    { icon: 'plane', name: 'Travel Agencies', body: 'As a travel app development company, we develop custom travel portals and booking systems that offer multi destination itineraries, seamless booking processes, and personalized travel recommendations for clients.' },
    { icon: 'map', name: 'Tour Operators', body: 'We help tour operators build platforms that allow customers to easily browse, customize, and book tours, while back end systems manage scheduling, resources, and payments.' },
    { icon: 'plane-takeoff', name: 'Airlines & Transportation Services', body: 'Our solutions help airlines and transportation providers manage bookings, ticketing, and passenger services with systems that ensure a smooth experience for travelers.' },
    { icon: 'house', name: 'Vacation Rentals', body: 'We work with vacation rental companies to create custom property management systems that streamline bookings, manage property listings, and offer real time updates on availability and pricing.' },
    { icon: 'utensils', name: 'Restaurant & Hospitality Providers', body: 'As a restaurant app development company, we design reservation systems, mobile apps, and loyalty programs that enhance customer experiences, streamline operations, and improve service efficiency.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead label="Clients we work with" title="Who we build for." sub="We partner with travel agencies, hotels, resorts, and hospitality startups to build custom platforms that enhance guest experiences, streamline bookings, and improve operational workflows." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="tv-3grid">
        {clients.map(c => <TvClientCard key={c.name} {...c} />)}
      </div>
    </LightSection>
  );
}

function TvClientCard({ icon, name, body }) {
  const [h, setH] = useTvMid(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: 'var(--surface)', border: `1px solid ${h ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.4vw,30px)', boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-xs)', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <span style={{ width: 46, height: 46, borderRadius: 'var(--r-md)', background: h ? 'var(--xo-indigo)' : 'var(--indigo-50)', color: h ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, transition: 'all .2s' }}>
        <i data-lucide={icon} style={{ width: 23 }}></i>
      </span>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 18.5, color: 'var(--fg1)', margin: '0 0 12px', lineHeight: 1.25 }}>{name}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{body}</p>
    </div>
  );
}

function TvServices() {
  const svc = [
    { name: 'Travel and hospitality software development', body: 'Travel and hospitality software development services built from scratch with a focus on performance, cost efficiency, scalability, and resiliency.' },
    { name: 'Booking and reservation systems', body: 'Real time booking engines, channel management, and reservation systems that keep availability and rates in sync everywhere, including a business travel management app for corporate programs.' },
    { name: 'Property and guest management', body: 'PMS, guest apps, and loyalty programs that streamline operations and elevate every stage of the guest journey.' },
    { name: 'Travel AI integration', body: 'Integrating AI models into your stack for recommendations, dynamic pricing, support, and demand forecasting.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Capabilities" title="Travel and hospitality software services we offer." sub="Our specialists deliver end to end software that considers your current digital state and business goals." style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="tv-2grid">
        {svc.map(s => <TvServiceCard key={s.name} {...s} />)}
      </div>
    </LightSection>
  );
}

function TvServiceCard({ name, body }) {
  const [h, setH] = useTvMid(false);
  return (
    <a href="#tv-form" onClick={e => { e.preventDefault(); const el = document.getElementById('tv-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); }}
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

Object.assign(window, { TvPain, TvClients, TvServices });
