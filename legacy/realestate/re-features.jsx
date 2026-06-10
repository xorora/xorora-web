// Xorora — Real Estate Industry Page · Why Choose Us (dark) + Automating with AI
const { useState: useReFeat } = React;

function ReWhy() {
  const cards = [
    { icon: 'gem', title: 'Deep proptech domain expertise', body: 'An established history of delivery in complex property systems, from listing portals to multi market investment platforms.' },
    { icon: 'trending-up', title: 'ROI driven development', body: 'Each feature is built to maximize efficiency, profitability, and quantifiable business value.' },
    { icon: 'shield', title: 'Mission critical reliability', body: 'Systems designed for high uptime, handling sensitive transaction and tenant data with unyielding accuracy.' },
    { icon: 'pointer', title: 'Professional grade UX', body: 'Intuitive interfaces that streamline complex property workflows for maximum adoption and productivity.' },
    { icon: 'blocks', title: 'Custom and scalable architecture', body: 'Solutions scaled to your portfolio and configured for new markets and expansion from day one.' },
    { icon: 'lock', title: 'Security first philosophy', body: 'Compliance friendly design with encryption, secure APIs, and rigorous testing throughout.' },
  ];
  return (
    <DarkSection bloom="50% 6%">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 48 }}>
        <SectionHead label="What sets us apart" title="Why choose us." sub="We leverage profound real estate domain knowledge and precision engineering to deliver secure, scalable, and business focused solutions that differentiate in the marketplace." onDark style={{ maxWidth: 620 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: '16px 20px', maxWidth: 320 }}>
          <i data-lucide="zap" style={{ width: 20, color: 'var(--tangerine-400)', flexShrink: 0 }}></i>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,.78)' }}>Close deals faster, increase occupancy, and drive growth with property software and custom AI built for your business reality.</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="re-3grid">
        {cards.map(c => <ReWhyCard key={c.title} {...c} />)}
      </div>
    </DarkSection>
  );
}

function ReWhyCard({ icon, title, body }) {
  const [h, setH] = useReFeat(false);
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

function ReAI() {
  const groups = [
    { icon: 'scan-search', name: 'Computer vision', sub: 'Enhance listings, inspections, and tours through visual intelligence.', items: ['Automated photo tagging and quality scoring for listings', 'Virtual staging and room recognition from uploaded images', 'Damage and condition assessment from inspection photos'] },
    { icon: 'sparkles', name: 'Recommendation systems', sub: 'Drive engagement and conversions with hyper personalized property matching.', items: ['Intelligent property recommendations based on buyer behavior', 'Personalized listing feeds aligned with budget and preferences', 'Adaptive cross selling for mortgage, insurance, and services'] },
    { icon: 'chart-line', name: 'Valuation and predictive analytics', sub: 'Enable proactive decisions with accurate property predictions based on market data.', items: ['Automated valuation models for pricing and appraisal', 'Rental yield and price trend forecasting by location', 'Demand forecasting for development and acquisition'] },
    { icon: 'languages', name: 'Natural language processing', sub: 'Transform client interactions and document handling with language intelligence.', items: ['Conversational chatbots and voice assistants for round the clock support', 'Automated lease and contract review and summarization', 'Sentiment analysis of client feedback for decision support'] },
    { icon: 'radar', name: 'Risk and fraud intelligence', sub: 'Strengthen trust and resilience with systems that detect irregularities before they escalate.', items: ['Real time fraud detection in applications and payments', 'Identity verification and tenant screening with adaptive models', 'Risk scoring engines for lending and investment decisions'] },
    { icon: 'bot', name: 'Generative AI for property insights', sub: 'Unlock new efficiencies by using generative models to streamline marketing and analysis.', items: ['Automated listing descriptions and marketing copy', 'Natural language query systems for portfolio data', 'Personalized investment insights delivered directly to clients'] },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="AI in real estate" title="Automating real estate operations with AI." sub="We integrate core AI technologies into property platforms, enabling teams to move faster and serve clients better in a competitive market." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 56px' }} className="re-2grid">
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

Object.assign(window, { ReWhy, ReAI });
