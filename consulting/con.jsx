// Xorora — Consulting service page
const { useState: useConState } = React;

function ConHeader({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(150deg, #0A1230 0%, #15225C 38%, #2347A8 74%, #2C57C9 100%)', marginTop: -72, paddingTop: 72 }}>
      <SignalField style={{ opacity: 0.6 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 90% at 88% 30%, rgba(120,160,255,0.5) 0%, rgba(60,100,220,0.18) 34%, transparent 64%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(150,180,255,.5), transparent)' }} />
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1240, margin: '0 auto', padding: 'clamp(96px,11vw,140px) 32px clamp(64px,7vw,96px)', display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }} className="con-header-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,.6)' }}>
            <a href="Homepage V2.html" style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}>Home</a>
            <Chevron size={13} color="rgba(255,255,255,.4)" /><span>Services</span>
            <Chevron size={13} color="rgba(255,255,255,.4)" /><span style={{ color: '#fff', fontWeight: 600 }}>Consulting</span>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(34px,4.6vw,60px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 24px', textWrap: 'balance' }}>
            IT consulting services that turn ambition into a <span style={{ color: 'var(--tangerine-400)' }}>clear roadmap.</span>
          </h1>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, lineHeight: 1.62, color: 'rgba(255,255,255,.74)', maxWidth: 520, margin: '0 0 32px' }}>
            From IT strategy consulting to AI consulting services and AI digital transformation services, we help you find the right problem to solve, then map the fastest, lowest-risk path to a product in production.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
            <Button variant="light" size="lg" onClick={onTalk}>Schedule a Discovery Call <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
          </div>
        </div>
        <ConGlassForm />
      </div>
    </section>
  );
}

function ConGlassForm() {
  const [sent, setSent] = useConState(false);
  const [nda, setNda] = useConState(false);
  const fld = (label, ph, ta) => <ConHeroField label={label} placeholder={ph} textarea={ta} />;
  return (
    <div id="con-hero-form" style={{ position: 'relative', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3vw,40px)', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.22)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', boxShadow: '0 30px 80px -30px rgba(0,0,0,0.6)' }} className="con-glass">
      <div style={{ position: 'absolute', inset: 0, borderRadius: 'var(--r-xl)', background: 'linear-gradient(150deg, rgba(255,255,255,0.14), rgba(255,255,255,0) 45%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.2)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 24, color: '#fff', margin: '0 0 8px' }}>Message sent</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.7)', margin: 0 }}>Our team will reply within one business day.</p>
          </div>
        ) : (
          <React.Fragment>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(24px,2.4vw,32px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 24px' }}>Book a strategy session</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>{fld('Full Name', 'Jordan Reyes')}{fld('Email', 'you@company.com')}</div>
            <div style={{ marginTop: 18 }}>{fld('What do you want to solve?', 'A sentence about your goal', true)}</div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, cursor: 'pointer' }} onClick={() => setNda(!nda)}>
              <span style={{ width: 20, height: 20, borderRadius: 'var(--r-sm)', border: '1px solid ' + (nda ? 'var(--tangerine-400)' : 'rgba(255,255,255,.4)'), background: nda ? 'var(--tangerine-500)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}>{nda && <i data-lucide="check" style={{ width: 13, color: '#fff' }}></i>}</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, color: 'rgba(255,255,255,.85)' }}>Send me an NDA first</span>
            </label>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 26, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,.65)', maxWidth: 200, lineHeight: 1.45 }}>By sending this form you accept our Privacy Policy.</span>
              <Button variant="light" size="lg" onClick={() => setSent(true)}>Send Message <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function ConHeroField({ label, placeholder, textarea }) {
  const [f, setF] = useConState(false);
  const common = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '11px 2px', width: '100%', boxSizing: 'border-box', background: 'transparent', color: '#fff', outline: 'none', border: 'none', borderBottom: '1px solid ' + (f ? 'var(--tangerine-400)' : 'rgba(255,255,255,.34)'), resize: 'none', transition: 'border-color .15s' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '.02em', color: 'rgba(255,255,255,.6)' }}>{label}</span>
      {textarea ? <textarea rows={2} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} /> : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

/* SERVICES */
function ConServices({ onTalk }) {
  const svc = [
    { icon: 'compass', name: 'Discovery Workshop Services', body: 'A focused Discovery Workshop that turns a vague idea into a costed, de-risked roadmap with clear scope, architecture, and milestones.' },
    { icon: 'brain-circuit', name: 'AI Consulting Services', body: 'Where AI actually moves the needle for your business, and where it does not. Use cases, feasibility, and a build plan you can trust.' },
    { icon: 'refresh-cw', name: 'AI Digital Transformation Services', body: 'A pragmatic modernization strategy that maps legacy systems to a scalable, AI-ready architecture, without a risky big-bang rewrite.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="What we advise on" title="Our IT consulting services." sub="Senior, hands-on IT strategy consulting from a team that also ships. We pressure-test the idea and map the path to production." style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="con-grid3">
        {svc.map(s => <ConServiceCard key={s.name} {...s} onTalk={onTalk} />)}
      </div>
    </LightSection>
  );
}

function ConServiceCard({ icon, name, body, onTalk }) {
  const [h, setH] = useConState(false);
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

/* OUTCOMES */
function ConOutcomes() {
  const cards = [
    ['target', 'Clarity, fast', 'In weeks you walk away with a costed roadmap, a clear scope, and the confidence to commit, or the data to pivot.'],
    ['shield-check', 'De-risked decisions', 'We surface the technical and commercial risks early, so you invest in what works and avoid expensive dead ends.'],
    ['trending-up', 'ROI-first thinking', 'Every recommendation maps to business impact: cost, revenue, or speed. Strategy you can measure.'],
    ['handshake', 'A partner who ships', 'We do not just advise and leave. The team that scopes your roadmap can build it, end to end.'],
  ];
  return (
    <DarkSection bloom="50% 6%">
      <SectionHead label="Why it matters" title="Direction before momentum." sub="Speed in the wrong direction is the most expensive mistake in software. We make sure you are pointed right before you build." onDark align="center" style={{ marginBottom: 52, maxWidth: 700 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="con-grid4">
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

/* APPROACH — interactive (number + stacked-diamond visual + hover-to-expand list) */
function ConDiamondStack({ active }) {
  const cx = 150, rx = 104, ry = 46;
  const cys = [66, 112, 158, 204];
  const path = cy => `M${cx},${cy - ry} L${cx + rx},${cy} L${cx},${cy + ry} L${cx - rx},${cy} Z`;
  const order = [0, 1, 2, 3].filter(i => i !== active).concat(active);
  return (
    <svg viewBox="0 0 300 270" width="100%" style={{ maxWidth: 340, overflow: 'visible' }} aria-hidden="true">
      <defs>
        <linearGradient id="conDiaActive" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3A63D8" />
          <stop offset="1" stopColor="#1E3FA8" />
        </linearGradient>
      </defs>
      {order.map(i => {
        const on = i === active;
        return (
          <path key={i} d={path(cys[i])}
            fill={on ? 'url(#conDiaActive)' : 'rgba(70,90,180,0.13)'}
            stroke={on ? 'none' : 'rgba(70,90,180,0.30)'} strokeWidth="1"
            style={{ filter: on ? 'drop-shadow(0 14px 22px rgba(40,70,180,0.35))' : 'none', transition: 'fill .25s, stroke .25s' }} />
        );
      })}
    </svg>
  );
}

function ConApproach() {
  const [active, setActive] = useConState(0);
  const steps = [
    { n: '01', name: 'Align', body: 'A discovery call to understand your business goals, constraints, and what success looks like — so every recommendation that follows ties back to a real outcome.' },
    { n: '02', name: 'Assess', body: 'We dig into your product, market, data, and systems to find the real problem worth solving, separating the symptoms from the root cause before any plan is drawn.' },
    { n: '03', name: 'Map', body: 'We translate findings into a costed, prioritized roadmap with architecture and a clear scope — sequenced so you ship the highest-value work first and de-risk early.' },
    { n: '04', name: 'Activate', body: 'You leave ready to build, with us or your team. Because the same team that scopes the roadmap can deliver it end to end, nothing gets lost in translation.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="How we work" title="Our approach." sub="A proven engagement that gets you from uncertainty to a clear, costed plan." style={{ marginBottom: 44 }} />
      <div className="con-deliver-grid" style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'stretch', borderTop: '1px solid var(--border)' }}>
        <div className="con-deliver-visual" style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 36 }}>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(56px,7vw,96px)', lineHeight: 0.9, letterSpacing: '-0.04em', color: 'var(--fg1)' }}>{steps[active].n}</div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0 8px' }}>
            <ConDiamondStack active={active} />
          </div>
        </div>
        <div style={{ borderLeft: '1px solid var(--border)' }}>
          {steps.map((s, i) => {
            const on = active === i;
            return (
              <div key={i} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}
                style={{ borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,2.4vw,32px)', cursor: 'pointer', background: on ? 'var(--slate-50)' : 'transparent', transition: 'background .18s' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: on ? 'var(--tangerine-600)' : 'var(--slate-400)', transition: 'color .18s' }}>{s.n}</span>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(20px,2.2vw,26px)', letterSpacing: '-0.01em', color: on ? 'var(--xo-indigo)' : 'var(--fg1)', margin: 0, transition: 'color .18s' }}>{s.name}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateRows: on ? '1fr' : '0fr', transition: 'grid-template-rows .3s cubic-bezier(.4,0,.2,1)' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.65, color: 'var(--fg2)', margin: 0, paddingTop: 14, paddingLeft: 29, maxWidth: 620 }}>{s.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </LightSection>
  );
}

/* CONTACT */
function ConContact({ innerRef }) {
  const [sent, setSent] = useConState(false);
  const [svc, setSvc] = useConState('');
  const services = ['Discovery Workshop', 'AI Consulting', 'Digital Transformation', 'Not sure yet'];
  return (
    <section ref={innerRef} id="con-contact" style={{ background: 'var(--navy-950)', padding: 'clamp(64px,8vw,104px) 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(32px,4.5vw,60px)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,.4), transparent 58%)', pointerEvents: 'none' }} />
        <XWatermark size={420} color="rgba(120,150,240,0.05)" style={{ bottom: -180, left: -120 }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(36px,5vw,64px)' }} className="con-contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,46px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 22px' }}>Let's map your roadmap.</h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '0 0 28px', maxWidth: 420 }}>Tell us where you are headed. We respond within one business day with next steps and a preliminary plan.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 'auto' }}>
              {[['mail', 'partners@xorora.com'], ['phone', '+1 (415) 555-0148']].map(([ic, v]) => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.85)' }}>
                  <span style={{ width: 36, height: 36, borderRadius: 'var(--r-md)', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tangerine-400)' }}><i data-lucide={ic} style={{ width: 17 }}></i></span>{v}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px,3vw,32px)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '56px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.18)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 8px' }}>Request received</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.65)', margin: 0 }}>We will reach out within one business day.</p>
              </div>
            ) : (
              <React.Fragment>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <ConField label="Full name" placeholder="Jordan Reyes" />
                  <ConField label="Work email" placeholder="you@company.com" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
                  <ConField label="Company" placeholder="Company name" />
                  <ConSelect value={svc} onChange={setSvc} options={services} />
                </div>
                <div style={{ marginTop: 14 }}><ConField label="What do you want to solve?" placeholder="A sentence about your goal" textarea /></div>
                <div style={{ marginTop: 24 }}><Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSent(true)}>Submit request <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button></div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConField({ label, placeholder, textarea }) {
  const [f, setF] = useConState(false);
  const c = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 'var(--r-md)', border: '1px solid ' + (f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'), background: 'rgba(255,255,255,.04)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none', boxShadow: f ? 'var(--shadow-focus)' : 'none' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{label}</span>
      {textarea ? <textarea rows={3} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={c} /> : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={c} />}
    </label>
  );
}

function ConSelect({ value, onChange, options }) {
  const [f, setF] = useConState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>Service needed</span>
      <div style={{ position: 'relative' }}>
        <select value={value} onChange={e => onChange(e.target.value)} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ appearance: 'none', WebkitAppearance: 'none', fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 38px 12px 14px', borderRadius: 'var(--r-md)', border: '1px solid ' + (f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'), background: 'rgba(255,255,255,.04)', color: value ? '#fff' : 'rgba(255,255,255,.5)', outline: 'none', width: '100%', boxSizing: 'border-box', cursor: 'pointer' }}>
          <option value="" style={{ color: '#111' }}>Select a service</option>
          {options.map(o => <option key={o} value={o} style={{ color: '#111' }}>{o}</option>)}
        </select>
        <i data-lucide="chevron-down" style={{ position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)', width: 16, color: 'rgba(255,255,255,.5)', pointerEvents: 'none' }}></i>
      </div>
    </label>
  );
}

/* FAQ */
const CON_FAQS = [
  { q: 'What is IT consulting?', a: 'IT consulting is expert advisory work that helps a business use technology to reach its goals. At Xorora, our IT consulting services assess your product, data, and systems, identify the right problems to solve, and produce a costed, de-risked roadmap, so you invest in what actually moves the business forward.' },
  { q: 'How does IT consulting work?', a: 'Our IT consulting works in four clear steps: Align, Assess, Map, and Activate. We start with a discovery call to understand your goals, dig into your product and systems, translate the findings into a prioritized roadmap with architecture and scope, then leave you ready to build. Because we also ship software, the same team can deliver the roadmap end to end.' },
  { q: 'What does IT consulting services offer 24/7 support?', a: 'Our IT consulting engagements include responsive support throughout the project, and for clients on an ongoing partnership or managed-services plan we provide 24/7 monitoring and support. We agree the exact coverage and response times up front so your platform stays reliable around the clock.' },
  { q: 'How much do AI consulting services cost?', a: 'The cost of AI consulting services depends on scope, complexity, and engagement length. A focused Discovery Workshop is a fixed, predictable fee, while broader AI consulting and AI digital transformation services are scoped after an initial call. We always provide a clear, itemized estimate before any work begins, so there are no surprises.' },
];

function ConFAQ() {
  const [open, setOpen] = useConState(0);
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="con-faq-grid">
        <div style={{ position: 'sticky', top: 110 }}>
          <SectionHead label="Good to know" title="IT consulting services, answered." titleSize="clamp(28px,3.2vw,40px)" />
        </div>
        <div>
          {CON_FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderTop: '1px solid var(--border)' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '22px 0' }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(16px,1.5vw,19px)', color: 'var(--fg1)', lineHeight: 1.35 }}>{f.q}</span>
                  <span style={{ width: 34, height: 34, flexShrink: 0, borderRadius: 'var(--r-md)', background: isOpen ? 'var(--xo-indigo)' : 'var(--surface)', border: '1px solid ' + (isOpen ? 'transparent' : 'var(--border-strong)'), color: isOpen ? '#fff' : 'var(--fg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .18s' }}>
                    <i data-lucide={isOpen ? 'minus' : 'plus'} style={{ width: 18 }}></i>
                  </span>
                </button>
                {isOpen && <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 24px', maxWidth: 680, animation: 'conFade .25s ease' }}>{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </LightSection>
  );
}

function ConApp() {
  const ref = React.useRef(null);
  const toContact = () => { const el = document.getElementById('con-contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 30, behavior: 'smooth' }); };
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toContact} />
      <ConHeader onTalk={toContact} />
      <ConServices onTalk={toContact} />
      <ConOutcomes />
      <ConApproach />
      <ConFAQ />
      <ConContact innerRef={ref} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ConApp />);
