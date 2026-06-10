// Xorora — Fintech Industry Page · Why Choose Us (dark) + Automating with AI
const { useState: useFinFeat } = React;

function FinWhy() {
  const cards = [
    { icon: 'gem', title: 'Deep fintech domain expertise', body: 'An established history of delivery in complex financial systems, from robo advisors to multi asset trading platforms.' },
    { icon: 'trending-up', title: 'ROI driven development', body: 'Each feature is built to maximize efficiency, profitability, and quantifiable business value.' },
    { icon: 'shield', title: 'Mission critical reliability', body: 'Systems designed for high uptime, handling sensitive financial information with unyielding accuracy.' },
    { icon: 'pointer', title: 'Professional grade UX', body: 'Intuitive interfaces that streamline complex workflows for maximum adoption and productivity.' },
    { icon: 'blocks', title: 'Custom and scalable architecture', body: 'Solutions scaled to your business and configured for global expansion from day one.' },
    { icon: 'lock', title: 'Security first philosophy', body: 'Compliance friendly design with encryption, secure APIs, and rigorous testing throughout.' },
  ];
  return (
    <DarkSection bloom="50% 6%">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 48 }}>
        <SectionHead label="What sets us apart" title="Why choose us." sub="We leverage profound fintech domain knowledge and precision engineering to deliver secure, scalable, and business focused solutions that differentiate in the marketplace." onDark style={{ maxWidth: 620 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: '16px 20px', maxWidth: 320 }}>
          <i data-lucide="zap" style={{ width: 20, color: 'var(--tangerine-400)', flexShrink: 0 }}></i>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,.78)' }}>Cut risk. Increase efficiency. Drive growth with fintech software and custom AI built for your business reality.</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="fin-3grid">
        {cards.map(c => <WhyCard key={c.title} {...c} />)}
      </div>
    </DarkSection>
  );
}

function WhyCard({ icon, title, body }) {
  const [h, setH] = useFinFeat(false);
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

function FinAI() {
  const groups = [
    { icon: 'scan-face', name: 'Computer vision', sub: 'Enhance security, compliance, and customer experience through visual intelligence.', items: ['Biometric KYC and facial recognition for digital onboarding', 'Document scanning and verification for IDs and contracts', 'Fraud detection via image and video analysis'] },
    { icon: 'sparkles', name: 'Recommendation systems', sub: 'Drive engagement and revenue with hyper personalized financial services.', items: ['Intelligent product recommendations based on usage patterns', 'Personalized investment suggestions aligned with risk profiles', 'Adaptive cross selling for banking, insurance, and trading apps'] },
    { icon: 'chart-line', name: 'Forecasting and predictive analytics', sub: 'Enable proactive decision making with accurate financial predictions based on historical data.', items: ['Market trend forecasting for investment and trading strategies', 'Credit risk prediction and default probability modeling', 'Demand forecasting for loans, insurance, and financial products'] },
    { icon: 'languages', name: 'Natural language processing', sub: 'Transform customer interactions and compliance processes with language intelligence.', items: ['Conversational chatbots and voice assistants for round the clock support', 'Automated compliance monitoring through documents', 'Sentiment analysis of customer feedback for decision support'] },
    { icon: 'radar', name: 'Anomaly detection and risk intelligence', sub: 'Strengthen compliance and resilience with systems that detect irregularities before they escalate.', items: ['Real time anomaly detection in transactions to flag fraud', 'Anti money laundering monitoring with adaptive ML models', 'Risk scoring engines for early detection of credit defaults'] },
    { icon: 'bot', name: 'Generative AI for financial insights', sub: 'Unlock new efficiencies by using generative models to streamline analysis and client interactions.', items: ['Automated report generation for investors and stakeholders', 'Natural language query systems for instant access to complex data', 'Personalized financial insights delivered directly to customers'] },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="AI in fintech" title="Automating fintech operations with AI." sub="We integrate core AI technologies into financial platforms, enabling institutions to innovate faster and strengthen compliance in a rapidly evolving market." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 56px' }} className="fin-2grid">
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

function FinFeaturedCase() {
  const [h, setH] = useFinFeat(false);
  const stats = [['70%', 'Less manual workload'], ['< 1 hr', 'Change detection'], ['12 mo', 'To production']];
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 36 }}>
        <SectionHead label="Selected work" title="Featured case study." />
        <a href="Our Work.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
          View all work <i data-lucide="arrow-right" style={{ width: 16 }}></i>
        </a>
      </div>

      <a href="Regula Case Study.html" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ display: 'block', position: 'relative', overflow: 'hidden', textDecoration: 'none', borderRadius: 'var(--r-xl)', background: 'linear-gradient(155deg, #141A38 0%, #080C1E 70%)', border: '1px solid rgba(255,255,255,.1)', boxShadow: h ? '0 40px 90px -34px rgba(8,12,30,.7)' : '0 24px 60px -34px rgba(8,12,30,.5)', transform: h ? 'translateY(-4px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--tangerine-500))', zIndex: 3 }} />
        <XWatermark size={420} color="rgba(120,150,240,0.06)" style={{ bottom: -180, left: '40%' }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.02fr 0.98fr', alignItems: 'stretch' }} className="fin-feat-grid">
          <div style={{ padding: 'clamp(32px,4vw,56px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(26px,2.9vw,38px)', lineHeight: 1.12, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 18px' }}>Regulatory Intelligence Platform</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.68)', margin: '0 0 28px', maxWidth: 480 }}>
              An automation first platform that monitors regulators continuously, scores the business impact of every change, and alerts compliance teams in under an hour. We engineered the real time crawling, AI analysis, and multi channel delivery end to end.
            </p>
            <div style={{ display: 'flex', gap: 'clamp(20px,3vw,40px)', marginBottom: 30, flexWrap: 'wrap' }}>
              {stats.map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(24px,2.4vw,32px)', letterSpacing: '-0.02em', color: 'var(--tangerine-400)', lineHeight: 1 }}>{v}</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,.55)', marginTop: 7 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
              {['RegTech', 'FinTech', 'AI Automation', 'Compliance'].map(t => (
                <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.06em', color: 'rgba(255,255,255,.7)', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-pill)', padding: '6px 13px' }}>{t}</span>
              ))}
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, alignSelf: 'flex-start', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, padding: '13px 26px', borderRadius: 'var(--r-pill)', background: '#fff', color: 'var(--xo-ink)', transition: 'transform .2s', transform: h ? 'translateX(3px)' : 'none' }}>
              Read more <i data-lucide="arrow-up-right" style={{ width: 16 }}></i>
            </span>
          </div>

          <div style={{ position: 'relative', overflow: 'hidden', minHeight: 380 }} className="fin-feat-media">
            <img src="assets/regula/featured.jpg" alt="Regulatory intelligence platform" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1.0)', transition: 'transform .5s cubic-bezier(.16,1,.3,1)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, #080C1E 0%, rgba(8,12,30,0.5) 30%, rgba(8,12,30,0.12) 100%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 70% at 80% 10%, rgba(91,141,239,0.3), transparent 60%)', pointerEvents: 'none' }} />
          </div>
        </div>
      </a>
    </LightSection>
  );
}

Object.assign(window, { FinWhy, FinAI, FinFeaturedCase });
