// Xorora — Industries index page
const { useState: useIndState, useEffect: useIndFx } = React;

function IndHeader() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)' }}>
      <SignalField />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 70% at 18% 0%, rgba(91,141,239,0.28) 0%, rgba(39,85,195,0.10) 32%, rgba(1,12,40,0) 64%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(1,12,40,0.32) 0%, rgba(1,12,40,0) 32%, rgba(2,6,15,0.9) 100%)', pointerEvents: 'none' }} />
      <XWatermark size={680} color="rgba(120,150,240,0.05)" style={{ top: -170, right: -160 }} />
      <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto', padding: 'clamp(130px,13vw,170px) 32px clamp(64px,7vw,92px)', textAlign: 'center' }}>
        <div className="ind-reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <SignalRule color="var(--tangerine-400)" />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--tangerine-400)' }}>Industries</span>
          <SignalRule color="var(--tangerine-400)" style={{ transform: 'scaleX(-1)' }} />
        </div>
        <h1 className="ind-reveal" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(38px,5.6vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 24px', textWrap: 'balance', transitionDelay: '.06s' }}>
          Industries we serve<span style={{ color: 'var(--tangerine-400)' }}>.</span>
        </h1>
        <p className="ind-reveal" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.62, color: 'rgba(255,255,255,.74)', maxWidth: 620, margin: '0 auto', transitionDelay: '.12s' }}>
          We bring deep domain knowledge to every engagement, building custom software and AI that fits how your industry actually operates, from first prototype to production scale.
        </p>
        <div className="ind-reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(20px,4vw,48px)', flexWrap: 'wrap', marginTop: 44, transitionDelay: '.18s' }}>
          {[['9', 'Industries served'], ['40+', 'Systems shipped'], ['100%', 'Production focused']].map(([v, l]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-0.02em', color: '#fff', lineHeight: 1 }}>{v}<span style={{ color: 'var(--tangerine-400)' }}>.</span></div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,.6)', maxWidth: 110, textAlign: 'left', lineHeight: 1.3 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,150,240,.4), transparent)', pointerEvents: 'none' }} />
    </section>
  );
}

function IndGrid() {
  const items = (window.XO_NAV && window.XO_NAV.industries) || [];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Sectors" title="Built for your industry." sub="Nine sectors, one engineering partner. Explore how we build for yours." style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="ind-grid">
        {items.map(it => <IndCard key={it.name} {...it} />)}
      </div>
    </LightSection>
  );
}

function IndCard({ name, icon, desc, href }) {
  const [h, setH] = useIndState(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      className="ind-reveal"
      style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none', background: h ? 'var(--surface)' : 'var(--slate-50)', border: `1px solid ${h ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(26px,2.6vw,32px)', boxShadow: h ? 'var(--shadow-md)' : 'none', transform: h ? 'translateY(-3px)' : 'none', transition: 'background .22s, border-color .22s, box-shadow .22s, transform .22s cubic-bezier(.4,0,.2,1)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--indigo-400), var(--tangerine-500))', transform: h ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <span style={{ width: 50, height: 50, borderRadius: 'var(--r-md)', background: h ? 'var(--xo-indigo)' : 'var(--indigo-50)', color: h ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s', boxShadow: h ? 'var(--glow-indigo)' : 'none' }}>
          <i data-lucide={icon} style={{ width: 24 }}></i>
        </span>
        <i data-lucide="arrow-up-right" style={{ width: 20, color: h ? 'var(--tangerine-500)' : 'var(--slate-400)', transition: 'color .2s, transform .2s', transform: h ? 'translate(2px,-2px)' : 'none' }}></i>
      </div>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 20, color: 'var(--fg1)', margin: '0 0 10px', lineHeight: 1.25 }}>{name}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.55, color: 'var(--fg2)', margin: 0 }}>{desc}</p>
    </a>
  );
}

Object.assign(window, { IndHeader, IndGrid });
