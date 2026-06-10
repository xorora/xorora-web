// Xorora — Engineering page · Approach, Industries, Contact
const { useState: useEngBot } = React;

/* 5 — APPROACH */
function EngApproach() {
  const steps = [
    { n: '01', icon: 'compass', name: 'Discover', body: 'We learn your domain, goals, and constraints, then scope a costed, de-risked roadmap with clear milestones.' },
    { n: '02', icon: 'pen-tool', name: 'Design', body: 'Architecture, data models, and interfaces, validated with your users before a line of production code.' },
    { n: '03', icon: 'code-2', name: 'Build', body: 'Short, demoable sprints with AI woven through delivery. You see working software every week.' },
    { n: '04', icon: 'rocket', name: 'Launch & scale', body: 'We ship to production, instrument for insight, and harden the platform so it scales with your business.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="How we work" title="Our approach." sub="A proven delivery lifecycle that adapts to your stage, your stack, and your team." align="center" style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="eng-grid4">
        {steps.map(s => (
          <div key={s.n} style={{ position: 'relative', overflow: 'hidden', background: 'var(--slate-50)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.6vw,30px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{ width: 46, height: 46, borderRadius: 'var(--r-md)', background: 'var(--indigo-50)', color: 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={s.icon} style={{ width: 22 }}></i></span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.1em', color: 'var(--slate-400)' }}>{s.n}</span>
            </div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 18.5, color: 'var(--fg1)', margin: '0 0 10px' }}>{s.name}</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

/* 6 — INDUSTRIES */
function EngIndustries() {
  const inds = [
    { name: 'Healthcare', icon: 'heart-pulse', href: 'Health Tech.html' },
    { name: 'Real Estate', icon: 'building-2', href: 'Real Estate.html' },
    { name: 'Fintech', icon: 'landmark', href: 'Fintech.html' },
    { name: 'E-commerce', icon: 'shopping-cart', href: 'Ecommerce.html' },
    { name: 'Edtech', icon: 'graduation-cap', href: 'Edtech.html' },
    { name: 'Logistics', icon: 'truck', href: 'Logistics.html' },
    { name: 'SaaS', icon: 'layout-grid', href: 'SaaS.html' },
    { name: 'Startups', icon: 'rocket', href: 'Startups.html' },
    { name: 'Travel & Hospitality', icon: 'palmtree', href: 'Travel & Hospitality.html' },
  ];
  return (
    <DarkSection bloom="50% 4%">
      <SectionHead label="Where we build" title="Engineered for your industry." sub="Deep domain knowledge across nine sectors. Explore how we build for yours." onDark align="center" style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="eng-grid3">
        {inds.map(it => <EngIndCard key={it.name} {...it} />)}
      </div>
    </DarkSection>
  );
}

function EngIndCard({ name, icon, href }) {
  const [h, setH] = useEngBot(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', background: 'rgba(255,255,255,.04)', border: '1px solid ' + (h ? 'rgba(120,150,240,.5)' : 'rgba(255,255,255,.12)'), borderRadius: 'var(--r-lg)', padding: '18px 20px', transition: 'border-color .2s, transform .2s', transform: h ? 'translateY(-2px)' : 'none' }}>
      <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 'var(--r-md)', background: h ? 'var(--xo-indigo)' : 'rgba(70,76,159,.28)', border: '1px solid rgba(120,150,240,.32)', color: h ? '#fff' : 'var(--indigo-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}><i data-lucide={icon} style={{ width: 21 }}></i></span>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', flex: 1 }}>{name}</span>
      <i data-lucide="arrow-up-right" style={{ width: 18, color: h ? 'var(--tangerine-400)' : 'rgba(255,255,255,.4)', transition: 'color .2s' }}></i>
    </a>
  );
}

/* 7 — CONTACT */
function EngContact({ innerRef }) {
  const [sent, setSent] = useEngBot(false);
  const [svc, setSvc] = useEngBot('');
  const [budget, setBudget] = useEngBot(null);
  const services = ['AI Software Development', 'Custom App Development', 'Application Modernization', 'MVP / POC Development', 'CMS Development', 'UI/UX Services'];
  const budgets = ['up to $25k', '$25k – $50k', '$50k – $100k', '> $100k'];
  return (
    <section ref={innerRef} id="eng-contact" style={{ background: 'var(--navy-950)', padding: 'clamp(64px,8vw,104px) 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(32px,4.5vw,60px)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,.4), transparent 58%)', pointerEvents: 'none' }} />
        <XWatermark size={420} color="rgba(120,150,240,0.05)" style={{ bottom: -180, left: -120 }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(36px,5vw,64px)' }} className="eng-contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,46px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 22px' }}>Let's build your platform.</h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '0 0 28px', maxWidth: 420 }}>Tell us what you want to build. We respond within one business day with next steps and a preliminary estimate.</p>
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
                  <EngField label="Full name" placeholder="Jordan Reyes" />
                  <EngField label="Work email" placeholder="you@company.com" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
                  <EngField label="Company" placeholder="Company name" />
                  <EngSelect value={svc} onChange={setSvc} options={services} />
                </div>
                <EngChips label="Project budget" options={budgets} value={budget} onPick={setBudget} />
                <div style={{ marginTop: 14 }}><EngField label="About your project" placeholder="A sentence about what you want to build" textarea /></div>
                <div style={{ marginTop: 24 }}><Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSent(true)}>Submit request <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button></div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function EngField({ label, placeholder, textarea }) {
  const [f, setF] = useEngBot(false);
  const c = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 'var(--r-md)', border: '1px solid ' + (f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'), background: 'rgba(255,255,255,.04)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none', boxShadow: f ? 'var(--shadow-focus)' : 'none' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{label}</span>
      {textarea ? <textarea rows={3} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={c} /> : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={c} />}
    </label>
  );
}

function EngSelect({ value, onChange, options }) {
  const [f, setF] = useEngBot(false);
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

function EngChips({ label, options, value, onPick }) {
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginBottom: 10 }}>{label}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
        {options.map(o => { const on = value === o; return <button key={o} onClick={() => onPick(o)} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, cursor: 'pointer', padding: '8px 15px', borderRadius: 'var(--r-pill)', transition: 'all .15s', border: '1px solid ' + (on ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'), background: on ? 'rgba(242,107,33,.14)' : 'rgba(255,255,255,.03)', color: on ? 'var(--tangerine-400)' : 'rgba(255,255,255,.75)' }}>{o}</button>; })}
      </div>
    </div>
  );
}

function EngApp() {
  const ref = React.useRef(null);
  const toContact = () => { const el = document.getElementById('eng-contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 30, behavior: 'smooth' }); };
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toContact} />
      <EngHeader onTalk={toContact} />
      <EngServices onTalk={toContact} />
      <EngOutcomes />
      <EngResults />
      <EngApproach />
      <EngIndustries />
      <EngContact innerRef={ref} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<EngApp />);
