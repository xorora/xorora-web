// Xorora — Logistics Industry Page · Challenges + Industries We Serve
const { useState: useLogMid } = React;

function LogChallenges() {
  const rows = [
    { n: '01', title: 'Lack of real time visibility and control', body: 'Without live tracking, logistics teams struggle to respond to disruptions.', sol: 'We build real time vehicle and shipment tracking that gives dispatchers complete visibility and lets customers follow every delivery as it moves.' },
    { n: '02', title: 'Inefficient planning and high operating cost', body: 'Manual route planning wastes time, fuel, and people.', sol: 'We engineer route optimization that cuts delivery times by double digits and removes the daily scheduling chaos.' },
    { n: '03', title: 'Complex, opaque paperwork', body: 'Paper based processes slow everything down and invite costly errors.', sol: 'We digitize and automate document workflows for compliance, speed, and error prevention.' },
    { n: '04', title: 'Fragmented IT systems', body: 'Disconnected TMS, WMS, ERP, and GPS tools lead to duplicated work and poor decisions.', sol: 'We create unified logistics platforms with smart integrations for one cohesive digital ecosystem.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'start' }} className="log-2col">
        <div style={{ position: 'sticky', top: 110 }}>
          <SectionHead label="Pain points & value proposition" title="Common challenges in logistics software we solve." titleSize="clamp(28px,3.4vw,42px)" />
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '24px 0 0', maxWidth: 420 }}>
            We solve the industry's most significant pain points with scalable, secure logistics software built to fit the way your operation actually runs.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {rows.map((r, i) => (
            <div key={r.n} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 'clamp(16px,2vw,28px)', padding: '28px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border)' }} className="log-challenge-row">
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(34px,3.4vw,46px)', letterSpacing: '-0.03em', color: 'var(--slate-300)', lineHeight: 1 }}>{r.n}</span>
              <div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(19px,1.7vw,23px)', color: 'var(--xo-indigo)', margin: '0 0 12px', lineHeight: 1.25 }}>{r.title}</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg2)', margin: '0 0 12px' }}>{r.body}</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg1)', margin: 0 }}>
                  <span style={{ fontWeight: 600, color: 'var(--tangerine-600)' }}>Solution. </span>{r.sol}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LightSection>
  );
}

function LogIndustries() {
  const cards = [
    { icon: 'boxes', name: '3PLs and freight forwarders', body: 'We build powerful multi client logistics platforms with automated workflows and partner integrations.', items: ['Centralized TMS with client, shipment, and billing management', 'Client portals for tracking, scheduling, and document access', 'ERP, WMS, and API integration with performance dashboards'] },
    { icon: 'shopping-cart', name: 'E commerce and retail', body: 'We create smart logistics software for fast, accurate, last mile fulfillment.', items: ['Real time delivery tracking and inventory aware routing', 'Buyer behavior forecasting and campaign simulation', 'Dynamic warehouse and picking optimization'] },
    { icon: 'factory', name: 'Manufacturing companies', body: 'We bring automation across inventory, warehouse, and transportation.', items: ['RFID and barcode enabled WMS', 'Fleet scheduling aligned with production', 'Analytics dashboards for inventory and distribution oversight'] },
    { icon: 'truck', name: 'Fleets and carriers', body: 'We unite fleet management and transportation software in one digital control center.', items: ['Predictive maintenance and load assignment', 'Driver certification and monitoring', 'Vehicle data integration for fuel efficiency and safety'] },
    { icon: 'bus', name: 'Passenger transportation', body: 'We craft passenger transit platforms built for scale.', items: ['Real time vehicle and passenger tracking', 'Load based route assignment and planning', 'Dispatcher dashboards and integrated trip scheduling'] },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead label="Who we build for" title="Industries we serve." sub="We do not do off the shelf. We build custom logistics software that fits your operational DNA." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 22 }}>
        {cards.map(c => <IndustryCard key={c.name} {...c} />)}
      </div>
    </LightSection>
  );
}

function IndustryCard({ icon, name, body, items }) {
  const [h, setH] = useLogMid(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: 'var(--surface)', border: `1px solid ${h ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.5vw,30px)', boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-xs)', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 19, color: 'var(--xo-indigo)', margin: 0, lineHeight: 1.25, maxWidth: 220 }}>{name}</h3>
        <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 'var(--r-md)', background: 'var(--indigo-50)', color: 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i data-lucide={icon} style={{ width: 22 }}></i>
        </span>
      </div>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.55, color: 'var(--fg2)', margin: '0 0 18px' }}>{body}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 18, borderTop: '1px solid var(--border)' }}>
        {items.map(it => (
          <div key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <i data-lucide="check" style={{ width: 15, color: 'var(--tangerine-500)', flexShrink: 0, marginTop: 3 }}></i>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, lineHeight: 1.5, color: 'var(--fg2)' }}>{it}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { LogChallenges, LogIndustries });
