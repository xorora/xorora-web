// Xorora — Engineering service page
const { useState: useEngState } = React;

function EngHeader({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#02060F', marginTop: -72, paddingTop: 72 }}>
      <SignalField />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 80% at 18% 0%, rgba(91,141,239,0.30) 0%, rgba(39,85,195,0.10) 34%, transparent 64%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,150,240,.4), transparent)' }} />
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1240, margin: '0 auto', padding: 'clamp(96px,11vw,140px) 32px clamp(64px,7vw,96px)', display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }} className="eng-header-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,.6)' }}>
            <a href="Homepage V2.html" style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}>Home</a>
            <Chevron size={13} color="rgba(255,255,255,.4)" /><span>Services</span>
            <Chevron size={13} color="rgba(255,255,255,.4)" /><span style={{ color: '#fff', fontWeight: 600 }}>Engineering</span>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px,4.8vw,62px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 24px', textWrap: 'balance' }}>
            Software engineering that <span style={{ background: 'linear-gradient(110deg,#C3C6EC,#8E94E0 46%,#FF8A3D)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>ships and scales<span style={{ color: 'var(--tangerine-400)', WebkitTextFillColor: 'var(--tangerine-400)' }}>.</span></span>
          </h1>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, lineHeight: 1.62, color: 'rgba(255,255,255,.74)', maxWidth: 520, margin: '0 0 32px' }}>
            From the first prototype to the platform your business runs on. We design, build, and harden production software, full stack, end to end.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
            <Button variant="light" size="lg" onClick={onTalk}>Schedule a Discovery Call <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
          </div>
        </div>
        <EngGlassForm />
      </div>
    </section>
  );
}

function EngGlassForm() {
  const [sent, setSent] = useEngState(false);
  const [nda, setNda] = useEngState(false);
  const fld = (label, ph, ta) => <EngHeroField label={label} placeholder={ph} textarea={ta} />;
  return (
    <div id="eng-hero-form" style={{ position: 'relative', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3vw,40px)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', boxShadow: '0 30px 80px -30px rgba(0,0,0,0.7)' }} className="eng-glass">
      <div style={{ position: 'absolute', inset: 0, borderRadius: 'var(--r-xl)', background: 'linear-gradient(150deg, rgba(255,255,255,0.10), rgba(255,255,255,0) 45%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.2)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 24, color: '#fff', margin: '0 0 8px' }}>Message sent</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.7)', margin: 0 }}>Our team will reply within one business day.</p>
          </div>
        ) : (
          <React.Fragment>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(24px,2.4vw,32px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 24px' }}>Start building with us</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>{fld('Full Name', 'Jordan Reyes')}{fld('Email', 'you@company.com')}</div>
            <div style={{ marginTop: 18 }}>{fld('About project', 'Tell us what you want to build', true)}</div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, cursor: 'pointer' }} onClick={() => setNda(!nda)}>
              <span style={{ width: 20, height: 20, borderRadius: 'var(--r-sm)', border: '1px solid ' + (nda ? 'var(--tangerine-400)' : 'rgba(255,255,255,.3)'), background: nda ? 'var(--tangerine-500)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}>{nda && <i data-lucide="check" style={{ width: 13, color: '#fff' }}></i>}</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, color: 'rgba(255,255,255,.78)' }}>Send me an NDA first</span>
            </label>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 26, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,.5)', maxWidth: 200, lineHeight: 1.45 }}>By sending this form you accept our Privacy Policy.</span>
              <Button variant="primary" size="lg" onClick={() => setSent(true)}>Send Message <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function EngHeroField({ label, placeholder, textarea }) {
  const [f, setF] = useEngState(false);
  const common = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '11px 2px', width: '100%', boxSizing: 'border-box', background: 'transparent', color: '#fff', outline: 'none', border: 'none', borderBottom: '1px solid ' + (f ? 'var(--tangerine-400)' : 'rgba(255,255,255,.28)'), resize: 'none', transition: 'border-color .15s' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '.02em', color: 'rgba(255,255,255,.6)' }}>{label}</span>
      {textarea ? <textarea rows={2} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} /> : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

/* 2 — SERVICES */
function EngServices({ onTalk }) {
  const svc = [
    { icon: 'cpu', name: 'AI Software Development', body: 'Applied ML, LLMs, RAG, and agents engineered for your data and domain.' },
    { icon: 'app-window', name: 'Custom App Development', body: 'Web and mobile products built full stack, from interface to infrastructure.' },
    { icon: 'layers', name: 'Application Modernization', body: 'A flexible, API-first layer over legacy systems so you ship faster without a full rewrite.' },
    { icon: 'rocket', name: 'MVP / POC Development', body: 'A focused prototype that proves value and gets you to traction fast.' },
    { icon: 'file-code-2', name: 'CMS Development Services', body: 'Headless and custom CMS builds that give your team control without engineering bottlenecks.' },
    { icon: 'pen-tool', name: 'UI/UX Services', body: 'Research-led product design that turns complex workflows into intuitive experiences.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="What we build" title="Our engineering services." sub="One team across the full delivery arc: strategy, design, frontend, backend, and the AI that powers it." style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="eng-grid3">
        {svc.map(s => <EngServiceCard key={s.name} {...s} onTalk={onTalk} />)}
      </div>
    </LightSection>
  );
}

function EngServiceCard({ icon, name, body, onTalk }) {
  const [h, setH] = useEngState(false);
  return (
    <div onClick={onTalk} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', background: h ? 'var(--surface)' : 'var(--slate-50)', border: '1px solid ' + (h ? 'var(--border-strong)' : 'var(--border)'), borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.6vw,32px)', boxShadow: h ? 'var(--shadow-md)' : 'none', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--tangerine-500))', transform: h ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <span style={{ width: 48, height: 48, borderRadius: 'var(--r-md)', background: h ? 'var(--xo-indigo)' : 'var(--indigo-50)', color: h ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}><i data-lucide={icon} style={{ width: 23 }}></i></span>
        <i data-lucide="arrow-up-right" style={{ width: 19, color: h ? 'var(--tangerine-500)' : 'var(--slate-400)', transition: 'color .2s' }}></i>
      </div>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 19, color: 'var(--fg1)', margin: '0 0 10px', lineHeight: 1.25 }}>{name}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{body}</p>
    </div>
  );
}

/* 3 — MEASURABLE OUTCOMES */
function EngOutcomes() {
  const cards = [
    ['gauge', 'Performance you can measure', 'We optimize for the numbers that move your business, not lines of code. Latency, conversion, uptime, cost.'],
    ['shield-check', 'Quality built in', 'Tests, reviews, observability, and guardrails come standard, never bolted on at the end.'],
    ['trending-up', 'Built to scale', 'Modular, documented architecture so the MVP grows into your platform without a rebuild.'],
    ['handshake', 'Senior, embedded delivery', 'Experienced engineers who own the outcome and work like an extension of your team.'],
  ];
  return (
    <DarkSection bloom="50% 6%">
      <SectionHead label="Why it matters" title="Measurable outcomes, not just code." sub="Anyone can write software. We engineer the result, instrumented, reliable, and tied to the metrics you care about." onDark align="center" style={{ marginBottom: 52, maxWidth: 700 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="eng-grid4">
        {cards.map(([ic, t, b]) => (
          <div key={t} style={{ position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: 'clamp(22px,2.4vw,28px)' }}>
            <span style={{ width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.28)', border: '1px solid rgba(120,150,240,.32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)', marginBottom: 18 }}><i data-lucide={ic} style={{ width: 22 }}></i></span>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 17.5, color: '#fff', margin: '0 0 10px', lineHeight: 1.25 }}>{t}</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,.62)', margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </DarkSection>
  );
}

/* 4 — RESULTS (case studies) */
function EngResults() {
  const cases = [
    { href: 'Regula Case Study.html', img: 'assets/regula/featured.jpg', tag: 'RegTech', title: 'Regulatory Intelligence Platform', stat: '70%', sl: 'Less workload' },
    { href: 'Unified AI Voice Operations Case Study.html', img: 'assets/saas/voice-ops.jpg', tag: 'AI Voice', title: 'AI Voice Operations Platform', stat: '4', sl: 'Portals shipped' },
    { href: 'PingPanda Case Study.html', img: 'assets/saas/event-monitoring.jpg', tag: 'SaaS', title: 'SaaS Event Monitoring', stat: '13mo', sl: 'To production' },
  ];
  return (
    <section id="eng-results" style={{ background: 'var(--slate-50)', padding: 'clamp(72px,9vw,118px) 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
          <SectionHead label="Proof of work" title="Real engineering results." />
          <a href="Our Work.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>View all work <i data-lucide="arrow-right" style={{ width: 16 }}></i></a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="eng-grid3">
          {cases.map(c => <EngCaseTile key={c.href} {...c} />)}
        </div>
      </div>
    </section>
  );
}

function EngCaseTile({ href, img, tag, title, stat, sl }) {
  const [h, setH] = useEngState(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', display: 'block', textDecoration: 'none', overflow: 'hidden', borderRadius: 'var(--r-xl)', minHeight: 360, background: '#080C1E', border: '1px solid rgba(255,255,255,.1)', boxShadow: h ? '0 36px 80px -34px rgba(8,12,30,.7)' : '0 22px 56px -34px rgba(8,12,30,.5)', transform: h ? 'translateY(-4px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s' }}>
      <img src={img} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1)', transition: 'transform .5s cubic-bezier(.16,1,.3,1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,12,30,0.25) 0%, rgba(8,12,30,0.55) 55%, #080C1E 100%)' }} />
      <span style={{ position: 'absolute', top: 18, left: 18, fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600, color: 'var(--xo-ink)', background: '#fff', borderRadius: 'var(--r-pill)', padding: '6px 13px' }}>{tag}</span>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(22px,2.4vw,28px)' }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(18px,1.7vw,22px)', lineHeight: 1.2, color: '#fff', margin: '0 0 16px' }}>{title}</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid rgba(255,255,255,.18)' }}>
          <div><div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--tangerine-400)', lineHeight: 1 }}>{stat}</div><div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: 'rgba(255,255,255,.65)', marginTop: 4 }}>{sl}</div></div>
          <span style={{ width: 42, height: 42, borderRadius: '50%', background: h ? '#fff' : 'var(--xo-indigo)', color: h ? 'var(--xo-ink)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}><i data-lucide="arrow-up-right" style={{ width: 19 }}></i></span>
        </div>
      </div>
    </a>
  );
}

Object.assign(window, { EngHeader, EngServices, EngOutcomes, EngResults });
