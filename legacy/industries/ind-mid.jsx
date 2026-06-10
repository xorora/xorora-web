// Xorora — Industries index page · Case Studies + Process
const { useState: useIndMid } = React;

function IndCaseStudies() {
  const cases = [
    { href: 'Regula Case Study.html', img: 'assets/regula/featured.jpg', tags: ['RegTech', 'FinTech'], title: 'Regulatory Intelligence Platform', desc: 'An automation first platform that monitors regulators continuously and alerts compliance teams in under an hour.', stats: [['70%', 'Less workload'], ['< 1 hr', 'Detection']] },
    { href: 'Unified AI Voice Operations Case Study.html', img: 'assets/saas/voice-ops.jpg', tags: ['AI Voice', 'B2B SaaS'], title: 'AI Voice Operations Platform', desc: 'Four purpose built portals on one shared backend turned voice agent technology into a commercially ready product.', stats: [['4', 'Portals'], ['16 mo', 'To production']] },
    { href: 'PingPanda Case Study.html', img: 'assets/saas/event-monitoring.jpg', tags: ['SaaS', 'Real-time'], title: 'SaaS Event Monitoring', desc: 'An API first event notifier: send a typed event, get an instant alert with full context. No blind spots.', stats: [['Real-time', 'Delivery'], ['13 mo', 'To production']] },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
        <SectionHead label="Selected work" title="Case studies." />
        <a href="Our Work.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
          View all work <i data-lucide="arrow-right" style={{ width: 16 }}></i>
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="ind-cases-grid">
        {cases.map(c => <IndCaseTile key={c.href} {...c} />)}
      </div>
    </LightSection>
  );
}

function IndCaseTile({ href, img, tags, title, desc, stats }) {
  const [h, setH] = useIndMid(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      className="ind-reveal"
      style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-xl)', background: 'linear-gradient(155deg, #141A38 0%, #080C1E 72%)', border: '1px solid rgba(255,255,255,.1)', boxShadow: h ? '0 36px 80px -34px rgba(8,12,30,.7)' : '0 22px 56px -34px rgba(8,12,30,.5)', transform: h ? 'translateY(-4px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--tangerine-500))', zIndex: 3 }} />
      <div style={{ position: 'relative', overflow: 'hidden', height: 190 }}>
        <img src={img} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1.0)', transition: 'transform .5s cubic-bezier(.16,1,.3,1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,12,30,0.1) 0%, rgba(8,12,30,0.55) 75%, #0B1026 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 80% at 85% 0%, rgba(91,141,239,0.3), transparent 60%)', pointerEvents: 'none' }} />
      </div>
      <div style={{ position: 'relative', padding: 'clamp(24px,2.6vw,30px)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          {tags.map(t => <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.06em', color: 'rgba(255,255,255,.7)', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-pill)', padding: '5px 11px' }}>{t}</span>)}
        </div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 20, lineHeight: 1.2, letterSpacing: '-0.01em', color: '#fff', margin: '0 0 12px' }}>{title}</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.66)', margin: '0 0 22px' }}>{desc}</p>
        <div style={{ display: 'flex', gap: 'clamp(18px,3vw,32px)', marginTop: 'auto', marginBottom: 22, flexWrap: 'wrap' }}>
          {stats.map(([v, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(19px,2vw,24px)', letterSpacing: '-0.02em', color: 'var(--tangerine-400)', lineHeight: 1 }}>{v}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: 'rgba(255,255,255,.55)', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, alignSelf: 'flex-start', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, padding: '11px 20px', borderRadius: 'var(--r-pill)', background: '#fff', color: 'var(--xo-ink)', transition: 'transform .2s', transform: h ? 'translateX(3px)' : 'none' }}>
          Read more <i data-lucide="arrow-up-right" style={{ width: 15 }}></i>
        </span>
      </div>
    </a>
  );
}

function IndProcess() {
  const steps = [
    { n: '01', icon: 'compass', name: 'Discovery', body: 'We learn your domain, goals, and constraints, then define a scoped roadmap with clear milestones and measurable outcomes.' },
    { n: '02', icon: 'pen-tool', name: 'Design', body: 'We translate requirements into architecture, data models, and an interface validated with your users before we build.' },
    { n: '03', icon: 'code-2', name: 'Build', body: 'We engineer in short, demoable sprints, with AI woven through delivery so you see working software every week.' },
    { n: '04', icon: 'rocket', name: 'Launch & scale', body: 'We ship to production, instrument for insight, and harden the platform so it scales with your business.' },
  ];
  return (
    <DarkSection bloom="50% 4%">
      <SectionHead label="How we work" title="One process, every industry." sub="A proven delivery lifecycle that adapts to your sector, your stage, and your stack." onDark align="center" style={{ marginBottom: 56 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="ind-proc-grid">
        {steps.map(s => (
          <div key={s.n} className="ind-reveal" style={{ position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.4vw,30px)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--indigo-700))' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{ width: 46, height: 46, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.28)', border: '1px solid rgba(120,150,240,.32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)' }}>
                <i data-lucide={s.icon} style={{ width: 22 }}></i>
              </span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.1em', color: 'var(--tangerine-400)' }}>{s.n}</span>
            </div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 18.5, color: '#fff', margin: '0 0 10px' }}>{s.name}</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,.62)', margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </DarkSection>
  );
}

Object.assign(window, { IndCaseStudies, IndProcess });
