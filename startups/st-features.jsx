// Xorora — Startups Industry Page · Why Choose Us (dark) + Automating with AI
const { useState: useStFeat } = React;

function StWhy() {
  const cards = [
    { icon: 'rocket', title: 'Speed without shortcuts', body: 'We ship fast on a clean foundation, so your MVP is quick to launch and ready to scale when traction hits.' },
    { icon: 'target', title: 'Founder aligned scoping', body: 'We scope ruthlessly to what proves value, protecting your runway and your roadmap.' },
    { icon: 'gem', title: 'Senior team, no training wheels', body: 'Experienced engineers who have shipped real products, not a learning exercise on your dime.' },
    { icon: 'pointer', title: 'Investor ready polish', body: 'Product quality and UX that demos well to users and to the people writing your next check.' },
    { icon: 'blocks', title: 'Built to scale from day one', body: 'Modular architecture so the MVP grows into your funded platform without a rebuild.' },
    { icon: 'handshake', title: 'A true development partner', body: 'We work like an extension of your team, invested in the outcome, not just the deliverable.' },
  ];
  return (
    <DarkSection bloom="50% 6%">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 48 }}>
        <SectionHead label="What sets us apart" title="Why choose us." sub="We pair startup speed with engineering rigor to deliver products that win first customers and scale into funded platforms." onDark style={{ maxWidth: 620 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: '16px 20px', maxWidth: 320 }}>
          <i data-lucide="zap" style={{ width: 20, color: 'var(--tangerine-400)', flexShrink: 0 }}></i>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,.78)' }}>Validate faster, raise with confidence, and scale with software and custom AI built for your startup reality.</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="st-3grid">
        {cards.map(c => <StWhyCard key={c.title} {...c} />)}
      </div>
    </DarkSection>
  );
}

function StWhyCard({ icon, title, body }) {
  const [h, setH] = useStFeat(false);
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

function StAI() {
  const groups = [
    { icon: 'sparkles', name: 'AI native product features', sub: 'Differentiate from day one with AI built into the core experience.', items: ['Copilots and assistants tailored to your domain', 'Smart search and recommendations', 'Personalization that improves with usage'] },
    { icon: 'workflow', name: 'Automation that saves runway', sub: 'Do more with a small team by automating the manual work.', items: ['Automated onboarding and support flows', 'Document and data processing pipelines', 'Internal tools that replace busywork'] },
    { icon: 'chart-line', name: 'Analytics and insight', sub: 'Make confident decisions with data from your first users.', items: ['Product analytics and funnel tracking', 'Cohort and retention insight', 'Investor ready metrics dashboards'] },
    { icon: 'bot', name: 'Generative AI prototyping', sub: 'Move from idea to working demo at startup speed.', items: ['Rapid prototyping of AI concepts', 'RAG pipelines over your own data', 'Model evaluation and guardrails'] },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="AI for startups" title="Build an AI advantage early." sub="We integrate core AI capabilities into startup products, helping small teams punch far above their weight and stand out to users and investors." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 56px' }} className="st-2grid">
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

Object.assign(window, { StWhy, StAI });
