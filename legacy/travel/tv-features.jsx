// Xorora — Travel & Hospitality Industry Page · Why Choose Us (dark) + AI
const { useState: useTvFeat } = React;

function TvWhy() {
  const cards = [
    { icon: 'gem', title: 'Deep travel domain expertise', body: 'An established history of delivery in complex booking and hospitality systems, from PMS to multi channel reservation platforms.' },
    { icon: 'trending-up', title: 'Revenue driven development', body: 'Each feature is built to maximize bookings, occupancy, and quantifiable business value.' },
    { icon: 'shield', title: 'Mission critical reliability', body: 'Systems designed for peak season uptime, handling payments and guest data with unyielding accuracy.' },
    { icon: 'pointer', title: 'Professional grade guest UX', body: 'Intuitive experiences that streamline discovery, booking, and stay for maximum satisfaction.' },
    { icon: 'blocks', title: 'Custom and scalable architecture', body: 'Solutions scaled to your portfolio and configured for new properties and regions from day one.' },
    { icon: 'lock', title: 'Security first philosophy', body: 'Compliance friendly design with encryption, secure APIs, and rigorous testing throughout.' },
  ];
  return (
    <DarkSection bloom="50% 6%">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 48 }}>
        <SectionHead label="What sets us apart" title="Why choose us." sub="We leverage profound travel and hospitality domain knowledge and precision engineering to deliver seamless, scalable, and guest focused solutions that differentiate in the marketplace." onDark style={{ maxWidth: 620 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: '16px 20px', maxWidth: 320 }}>
          <i data-lucide="zap" style={{ width: 20, color: 'var(--tangerine-400)', flexShrink: 0 }}></i>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,.78)' }}>Increase direct bookings, raise occupancy, and grow loyalty with software and custom AI built for your business reality.</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="tv-3grid">
        {cards.map(c => <TvWhyCard key={c.title} {...c} />)}
      </div>
    </DarkSection>
  );
}

function TvWhyCard({ icon, title, body }) {
  const [h, setH] = useTvFeat(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,.04)', border: `1px solid ${h ? 'rgba(120,150,240,.5)' : 'rgba(255,255,255,.12)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.4vw,30px)', transition: 'border-color .2s, transform .2s', transform: h ? 'translateY(-3px)' : 'none' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--indigo-700))', opacity: h ? 1 : 0, transition: 'opacity .2s' }} />
      <span style={{ width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.28)', border: '1px solid rgba(120,150,240,.32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)', marginBottom: 18 }}>
        <i data-lucide={icon} style={{ width: 22 }}></i>
      </span>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 18.5, color: '#fff', margin: '0 0 10px', lineHeight: 1.25 }}>{title}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,.62)', margin: 0 }}>{body}</p>
    </div>
  );
}

function TvAI() {
  const groups = [
    { icon: 'sparkles', name: 'Personalized recommendations', sub: 'Turn browsers into bookings with tailored travel suggestions.', items: ['Destination and package recommendations', 'Personalized upsells for rooms and add ons', 'Adaptive itineraries based on preferences'] },
    { icon: 'chart-line', name: 'Dynamic pricing and forecasting', sub: 'Maximize revenue with data driven rates and planning.', items: ['Demand based dynamic pricing', 'Occupancy and demand forecasting', 'Channel and rate optimization'] },
    { icon: 'languages', name: 'Conversational guest support', sub: 'Serve travelers round the clock in any language.', items: ['Multilingual chat and voice assistants', 'Automated booking changes and FAQs', 'Sentiment analysis of guest reviews'] },
    { icon: 'radar', name: 'Fraud and risk intelligence', sub: 'Protect revenue and guests from fraud and abuse.', items: ['Real time payment fraud detection', 'Chargeback and cancellation risk scoring', 'Identity verification for high value bookings'] },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead label="AI in travel" title="Automating travel operations with AI." sub="We integrate core AI technologies into travel and hospitality platforms, enabling operators to move faster, convert more, and serve guests better." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 56px' }} className="tv-2grid">
        {groups.map(g => (
          <div key={g.name}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <span style={{ width: 40, height: 40, borderRadius: 'var(--r-md)', background: 'var(--indigo-50)', color: 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i data-lucide={g.icon} style={{ width: 21 }}></i>
              </span>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 20, color: 'var(--fg1)', margin: 0 }}>{g.name}</h3>
            </div>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.55, color: 'var(--fg2)', margin: '0 0 16px' }}>{g.sub}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
              {g.items.map(it => (
                <div key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <i data-lucide="check" style={{ width: 15, color: 'var(--tangerine-500)', flexShrink: 0, marginTop: 3 }}></i>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.5, color: 'var(--fg2)' }}>{it}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

Object.assign(window, { TvWhy, TvAI });
