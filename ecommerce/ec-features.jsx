// Xorora — E-commerce Industry Page · Why Choose Us (dark) + Automating with AI
const { useState: useEcFeat } = React;

function EcWhy() {
  const cards = [
    { icon: 'gem', title: 'Deep commerce domain expertise', body: 'An established history of delivery in complex commerce systems, from high traffic storefronts to multi vendor marketplaces.' },
    { icon: 'trending-up', title: 'Conversion driven development', body: 'Each feature is built to maximize conversion, average order value, and quantifiable business value.' },
    { icon: 'shield', title: 'Mission critical reliability', body: 'Systems designed for peak season uptime, handling sensitive payment data with unyielding accuracy.' },
    { icon: 'pointer', title: 'Professional grade UX', body: 'Intuitive shopping experiences that streamline discovery and checkout for maximum conversion.' },
    { icon: 'blocks', title: 'Custom and scalable architecture', body: 'Solutions scaled to your catalog and configured for new markets and channels from day one.' },
    { icon: 'lock', title: 'Security first philosophy', body: 'Compliance friendly design with encryption, secure APIs, and rigorous testing throughout.' },
  ];
  return (
    <DarkSection bloom="50% 6%">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 48 }}>
        <SectionHead label="What sets us apart" title="Why choose us." sub="We leverage profound commerce domain knowledge and precision engineering to deliver fast, scalable, and business focused solutions that differentiate in the marketplace." onDark style={{ maxWidth: 620 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: '16px 20px', maxWidth: 320 }}>
          <i data-lucide="zap" style={{ width: 20, color: 'var(--tangerine-400)', flexShrink: 0 }}></i>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,.78)' }}>Lift conversion, increase order value, and drive growth with commerce software and custom AI built for your business reality.</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ec-3grid">
        {cards.map(c => <EcWhyCard key={c.title} {...c} />)}
      </div>
    </DarkSection>
  );
}

function EcWhyCard({ icon, title, body }) {
  const [h, setH] = useEcFeat(false);
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

function EcAI() {
  const groups = [
    { icon: 'search', name: 'AI search and discovery', sub: 'Help shoppers find the right product faster with intelligent search.', items: ['Semantic and visual product search', 'Typo tolerant, intent aware results', 'Personalized merchandising by segment'] },
    { icon: 'sparkles', name: 'Recommendation engines', sub: 'Drive engagement and order value with hyper personalized suggestions.', items: ['Product recommendations from browsing behavior', 'Personalized bundles and cross sell', 'Adaptive offers aligned with intent'] },
    { icon: 'chart-line', name: 'Pricing and demand analytics', sub: 'Enable proactive decisions with accurate predictions from sales data.', items: ['Dynamic pricing and promotion modeling', 'Demand forecasting for inventory planning', 'Churn and lifetime value prediction'] },
    { icon: 'languages', name: 'Conversational commerce', sub: 'Transform support and selling with language intelligence.', items: ['Round the clock shopping assistants and chatbots', 'Automated order tracking and returns help', 'Sentiment analysis of reviews and feedback'] },
    { icon: 'radar', name: 'Fraud and risk intelligence', sub: 'Protect revenue with systems that detect irregularities before they escalate.', items: ['Real time fraud detection on transactions', 'Chargeback and abuse prevention models', 'Account takeover and bot mitigation'] },
    { icon: 'bot', name: 'Generative AI for merchandising', sub: 'Unlock efficiency by using generative models to scale content.', items: ['Automated product descriptions and copy', 'Natural language query over catalog data', 'Personalized campaigns delivered to shoppers'] },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="AI in e-commerce" title="Automating e-commerce operations with AI." sub="We integrate core AI technologies into commerce platforms, enabling brands to move faster, convert more, and serve shoppers better in a competitive market." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 56px' }} className="ec-2grid">
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

Object.assign(window, { EcWhy, EcAI });
