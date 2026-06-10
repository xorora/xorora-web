// Xorora — How We Work · Hero + "Shall we work together" reasons
const { useState: useHwTopState } = React;

function HwHero({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#02060F', marginTop: -72, paddingTop: 72 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 70% at 78% 40%, rgba(70,76,159,0.4) 0%, rgba(39,85,195,0.12) 36%, transparent 66%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-radial-gradient(circle at 78% 42%, rgba(120,150,240,0.06) 0px, rgba(120,150,240,0.06) 1px, transparent 1px, transparent 52px)', opacity: 0.7, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: 'clamp(70px,8vw,104px) 32px clamp(80px,9vw,116px)', display: 'grid', gridTemplateColumns: '1.06fr 0.94fr', gap: 'clamp(32px,4vw,56px)', alignItems: 'center' }} className="hw-hero-grid">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '8px 16px', borderRadius: 'var(--r-pill)', border: '1px solid rgba(255,255,255,.16)', background: 'rgba(255,255,255,.06)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', marginBottom: 26, fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.9)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tangerine-400)', boxShadow: '0 0 8px var(--tangerine-400)' }} />How We Work
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(38px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 24px', textWrap: 'balance' }}>
            We serve business and <span style={{ background: 'linear-gradient(100deg, #C3C6EC, #8E94E0 45%, #FF8A3D)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>tech leaders</span> building software<span style={{ color: 'var(--tangerine-400)' }}>.</span>
          </h1>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(17px,1.9vw,20px)', lineHeight: 1.6, color: 'rgba(255,255,255,.74)', maxWidth: 520, margin: '0 0 18px' }}>
            Discover how we work behind the scenes. Engage a cross-functional team or dedicated experts, matched to how you build.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 24 }}>
            <Button variant="light" size="lg" onClick={onTalk}>Start a project <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            <a href="#hw-process" onClick={e => { e.preventDefault(); const el = document.getElementById('hw-process'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }} style={{ textDecoration: 'none' }}><Button variant="onDark" size="lg">See our workflow</Button></a>
          </div>
        </div>
        <div style={{ minHeight: 440 }} className="hw-hero-3d">
          {window.Brand3D && <Brand3D />}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,150,240,.4), transparent)', pointerEvents: 'none' }} />
    </section>
  );
}

function HwReasons() {
  const reasons = [
    { icon: 'users-round', title: 'Low turnover', body: 'Our engineers stay with us for long periods. That limits team changes on your project and the need to constantly onboard new people.' },
    { icon: 'messages-square', title: 'Communication', body: 'We advocate battle-tested Scrum delivery, which gives our clients full control and complete visibility over the process.' },
    { icon: 'award', title: 'Experience', body: 'We use our expertise to give you an exceptional experience, built on many years in the market and a long track of successful projects.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(30px,4vw,46px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--fg1)', margin: '0 0 clamp(40px,5vw,56px)', textWrap: 'balance', textAlign: 'center', maxWidth: 760, marginInline: 'auto' }}>
        Shall we <span style={{ color: 'var(--xo-indigo)' }}>work</span> on a project <span style={{ color: 'var(--xo-indigo)' }}>together</span><span style={{ color: 'var(--tangerine-500)' }}>?</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(22px,2.4vw,28px)', maxWidth: 1100, margin: '0 auto' }} className="hw-reasons-grid">
        {reasons.map(r => <HwReasonCard key={r.title} {...r} />)}
      </div>
    </LightSection>
  );
}

function HwReasonCard({ icon, title, body }) {
  const [h, setH] = useHwTopState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface)', border: `1px solid ${h ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.6vw,32px)', boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-xs)', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--tangerine-500))', transform: h ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }} />
      <span style={{ width: 46, height: 46, borderRadius: 'var(--r-md)', background: h ? 'var(--xo-indigo)' : 'var(--indigo-50)', color: h ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, transition: 'all .2s' }}>
        <i data-lucide={icon} style={{ width: 22 }}></i>
      </span>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 19, color: 'var(--fg1)', margin: '0 0 10px' }}>{title}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{body}</p>
    </div>
  );
}

Object.assign(window, { HwHero, HwReasons });
