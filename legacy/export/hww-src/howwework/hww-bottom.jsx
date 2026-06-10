// Xorora — How We Work · Case studies (our work) + Contact CTA
const { useState: useHwBotState } = React;

function HwCases() {
  const cases = [
    { href: 'Regula Case Study.html', img: window.__resources.caseRegula, tag: 'RegTech', title: 'Regulatory Intelligence Platform', stat: '70%', statLabel: 'Less workload' },
    { href: 'Unified AI Voice Operations Case Study.html', img: window.__resources.caseVoice, tag: 'AI Voice', title: 'AI Voice Operations Platform', stat: '4', statLabel: 'Portals shipped' },
    { href: 'PingPanda Case Study.html', img: window.__resources.caseEvent, tag: 'SaaS', title: 'SaaS Event Monitoring', stat: '13mo', statLabel: 'To production' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
        <SectionHead label="Proof of work" title="Workflows that shipped." sub="The same process, applied. A look at products we engineered end to end." />
        <a href="Our Work.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>View all work <i data-lucide="arrow-right" style={{ width: 16 }}></i></a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="hw-cases-grid">
        {cases.map(c => <HwCaseTile key={c.href} {...c} />)}
      </div>
    </LightSection>
  );
}

function HwCaseTile({ href, img, tag, title, stat, statLabel }) {
  const [h, setH] = useHwBotState(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', display: 'block', textDecoration: 'none', overflow: 'hidden', borderRadius: 'var(--r-xl)', minHeight: 380, background: '#080C1E', border: '1px solid rgba(255,255,255,.1)', boxShadow: h ? '0 36px 80px -34px rgba(8,12,30,.7)' : '0 22px 56px -34px rgba(8,12,30,.5)', transform: h ? 'translateY(-4px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s' }}>
      <img src={img} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1)', transition: 'transform .5s cubic-bezier(.16,1,.3,1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,12,30,0.25) 0%, rgba(8,12,30,0.55) 55%, #080C1E 100%)' }} />
      <span style={{ position: 'absolute', top: 20, left: 20, fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600, color: 'var(--xo-ink)', background: '#fff', borderRadius: 'var(--r-pill)', padding: '6px 13px' }}>{tag}</span>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(22px,2.4vw,28px)' }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(18px,1.7vw,22px)', lineHeight: 1.2, color: '#fff', margin: '0 0 16px' }}>{title}</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid rgba(255,255,255,.18)' }}>
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--tangerine-400)', lineHeight: 1 }}>{stat}</div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: 'rgba(255,255,255,.65)', marginTop: 4 }}>{statLabel}</div>
          </div>
          <span style={{ width: 42, height: 42, borderRadius: '50%', background: h ? '#fff' : 'var(--xo-indigo)', color: h ? 'var(--xo-ink)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}>
            <i data-lucide="arrow-up-right" style={{ width: 19 }}></i>
          </span>
        </div>
      </div>
    </a>
  );
}

function HwContact({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-950)', padding: 'clamp(72px,9vw,120px) 32px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 50% 0%, rgba(70,76,159,.42), transparent 60%)', pointerEvents: 'none' }} />
      <XWatermark size={560} color="rgba(120,150,240,0.05)" style={{ bottom: -240, left: '50%', transform: 'translateX(-50%)' }} />
      <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <SignalRule color="var(--tangerine-400)" style={{ justifyContent: 'center', marginBottom: 26 }} />
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(32px,5vw,60px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 22px', textWrap: 'balance' }}>
          Start growing your business with us<span style={{ color: 'var(--tangerine-400)' }}>.</span>
        </h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.6, color: 'rgba(255,255,255,.7)', maxWidth: 540, margin: '0 auto 36px' }}>
          Tell us about your project. We respond within one business day with a real person and a clear next step.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" onClick={onTalk}>Start a project <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
          <Button variant="onDark" size="lg" onClick={onTalk}>Book a build review</Button>
        </div>
        <div style={{ display: 'flex', gap: 'clamp(20px,4vw,40px)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 36 }}>
          {[['mail', 'partners@xorora.com'], ['phone', '+1 (415) 555-0148']].map(([ic, v]) => (
            <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.82)' }}>
              <i data-lucide={ic} style={{ width: 17, color: 'var(--tangerine-400)' }}></i>{v}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HwCases, HwContact });
