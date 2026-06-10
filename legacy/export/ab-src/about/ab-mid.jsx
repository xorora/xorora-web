// Xorora — About Us · Business impact (dark) + Differentiators (dark)
const { useState: useAbMid } = React;

function AbImpact() {
  const items = [
    { icon: 'target', title: 'Business impact first', body: 'We focus on business impact: removing bottlenecks, improving efficiency, increasing revenue potential, and delivering what actually changes performance, not "shipping features."' },
    { icon: 'cpu', title: 'Built for today\u2019s reality', body: 'The era of writing high-quality code just for the sake of it is over. AI is reshaping how software is built and used, and we are built to adopt quickly and apply it where it creates real value.' },
    { icon: 'crosshair', title: 'Our sweet spot', body: 'Our sweet spot is tough, high-stakes industries including Fintech, Healthcare, and Decision Intelligence, where we can fully leverage strong product thinking and act as a true strategic partner.' },
    { icon: 'trending-up', title: 'What success looks like', body: 'In these environments, complexity, risk, and operational pressure are real. That is where we perform best: clarifying root problems, designing practical AI-driven solutions, and delivering systems that create measurable impact.' },
  ];
  return (
    <DarkSection bloom="60% 0%">
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="ab-2col">
        <div style={{ position: 'sticky', top: 110 }}>
          <SectionHead label="How we work" title="How Xorora creates business impact." onDark />
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '24px 0 0', maxWidth: 380 }}>
            We partner with companies across industries to solve complex business problems through custom software and strong engineering teams.
          </p>
        </div>
        <div>
          {items.map((it, i) => (
            <div key={it.title} style={{ display: 'grid', gridTemplateColumns: '48px 0.9fr 1.1fr', gap: 'clamp(14px,2vw,26px)', alignItems: 'start', padding: '26px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,.1)' }} className="ab-impact-row">
              <span style={{ width: 42, height: 42, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.28)', border: '1px solid rgba(120,150,240,.32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)' }}>
                <i data-lucide={it.icon} style={{ width: 20 }}></i>
              </span>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(17px,1.6vw,20px)', color: '#fff', margin: 0, lineHeight: 1.3 }}>{it.title}</h3>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.62)', margin: 0 }}>{it.body}</p>
            </div>
          ))}
          <div style={{ position: 'relative', overflow: 'hidden', marginTop: 32, background: 'linear-gradient(120deg, var(--indigo-700), var(--indigo-900))', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3.5vw,44px)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 90% at 90% 10%, rgba(120,150,240,0.35), transparent 60%)', pointerEvents: 'none' }} />
            <XWatermark size={260} color="rgba(255,255,255,0.06)" style={{ bottom: -100, right: -60 }} />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 18 }}>
              <i data-lucide="quote" style={{ width: 30, color: 'var(--tangerine-400)', flexShrink: 0 }}></i>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(18px,2vw,24px)', lineHeight: 1.4, letterSpacing: '-0.01em', color: '#fff', margin: 0 }}>
                Trust and satisfaction are the real KPI. If the solution works in real conditions and your team feels confident relying on it, we have done our job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DarkSection>
  );
}

function AbDifferent() {
  const cards = [
    { icon: 'target', title: 'Business focus', body: 'We focus on what changes business performance: removing bottlenecks, improving efficiency, increasing revenue potential, and building software that solves real operational problems.' },
    { icon: 'eye', title: 'Zero bureaucracy', body: 'We keep execution clear and direct. We simplify processes, reduce unnecessary layers, and help clients move faster without compromising delivery quality.' },
    { icon: 'sliders-horizontal', title: 'Flexibility', body: 'We adapt to different stages, team structures, and engagement models. Whether you need a strategic partner, a dedicated team, or fast support, we tailor the model to your reality.' },
    { icon: 'users', title: 'Strong team quality', body: 'We maintain a high bar for engineering, product thinking, and communication. Our clients do not just need developers, they need people they can rely on in high-stakes environments.' },
  ];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-950)', padding: 'clamp(72px,9vw,118px) 32px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 60% at 80% 10%, rgba(70,76,159,0.3), transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <SignalRule color="var(--tangerine-400)" />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--tangerine-400)' }}>Why teams pick us</span>
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(32px,4.4vw,52px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', margin: 0, display: 'flex', alignItems: 'center', gap: '0.3em', flexWrap: 'wrap' }}>
            <span>Our</span>
            <img src={window.__resources.navX} alt="X" style={{ height: '1em', width: 'auto', display: 'inline-block', verticalAlign: 'middle' }} />
            <span>Factor<span style={{ color: 'var(--tangerine-400)' }}>.</span></span>
          </h2>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,.66)', margin: '20px 0 0' }}>
            Many software companies look similar from the outside. The difference appears in how they think, how they operate, and what they optimize for. We are built to deliver business value in a way that is practical, flexible, and commercially aware.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="ab-4grid">
          {cards.map(c => <AbDiffCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

function AbDiffCard({ icon, title, body }) {
  const [h, setH] = useAbMid(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,.04)', border: `1px solid ${h ? 'rgba(120,150,240,.5)' : 'rgba(255,255,255,.12)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.4vw,30px)', transition: 'border-color .2s, transform .2s', transform: h ? 'translateY(-3px)' : 'none' }}>
      <span style={{ width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.28)', border: '1px solid rgba(120,150,240,.32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)', marginBottom: 18 }}>
        <i data-lucide={icon} style={{ width: 22 }}></i>
      </span>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 18, color: '#fff', margin: '0 0 10px', lineHeight: 1.25 }}>{title}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,.62)', margin: 0 }}>{body}</p>
    </div>
  );
}

Object.assign(window, { AbImpact, AbDifferent });
