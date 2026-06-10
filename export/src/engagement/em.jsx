// Xorora — Engagement Models page
const { useState: useEmState } = React;

/* ============ 1 · HERO ============ */
function EmHero({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(150deg, #0A1230 0%, #15225C 38%, #2347A8 74%, #2C57C9 100%)', marginTop: -72, paddingTop: 72 }}>
      <SignalField style={{ opacity: 0.6 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 90% at 88% 30%, rgba(120,160,255,0.5) 0%, rgba(60,100,220,0.18) 34%, transparent 64%)', pointerEvents: 'none' }} className="em-bloom" />
      <div style={{ position: 'relative', zIndex: 5, maxWidth: 1240, margin: '0 auto', padding: 'clamp(84px,10vw,128px) 32px clamp(72px,8vw,104px)', display: 'grid', gridTemplateColumns: '1.06fr 0.94fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }} className="em-header-grid">
        <div>
          <div className="em-rise em-rise-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '8px 16px', borderRadius: 'var(--r-pill)', border: '1px solid rgba(255,255,255,.22)', background: 'rgba(255,255,255,.07)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', marginBottom: 26, fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.92)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tangerine-400)', boxShadow: '0 0 8px var(--tangerine-400)' }} />Engagement Models
          </div>
          <h1 className="em-rise em-rise-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(38px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 24px', textWrap: 'balance' }}>
            Engagement models built around <span style={{ color: 'var(--tangerine-400)' }}>how you build.</span>
          </h1>
          <p className="em-rise em-rise-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(17px,1.9vw,20px)', lineHeight: 1.6, color: 'rgba(255,255,255,.84)', maxWidth: 580, margin: '0 0 32px' }}>
            Fixed scope, variable scope, or embedded experts — choose the model that matches your roadmap, your budget, and your team. Switch as your needs change.
          </p>
          <div className="em-rise em-rise-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="light" size="lg" onClick={onTalk}>Start a project <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            <a href="#em-models" onClick={e => { e.preventDefault(); const el = document.getElementById('em-models'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }} style={{ textDecoration: 'none' }}><Button variant="onDark" size="lg">Compare models</Button></a>
          </div>
        </div>
        <EmHeroForm />
      </div>
      <div className="em-hair" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(150,180,255,.5), transparent)', pointerEvents: 'none' }} />
    </section>
  );
}

/* ---------- hero glass form ---------- */
function EmHeroForm() {
  const [sent, setSent] = useEmState(false);
  const [nda, setNda] = useEmState(false);
  const fld = (label, ph, ta) => <EmHeroField label={label} placeholder={ph} textarea={ta} />;
  return (
    <div style={{ position: 'relative', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3vw,40px)', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.22)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', boxShadow: '0 30px 80px -30px rgba(0,0,0,0.6)' }} className="em-glass em-glass-in">
      <div style={{ position: 'absolute', inset: 0, borderRadius: 'var(--r-xl)', background: 'linear-gradient(150deg, rgba(255,255,255,0.14), rgba(255,255,255,0) 45%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.22)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 24, color: '#fff', margin: '0 0 8px' }}>Message sent</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.78)', margin: 0 }}>Our team will reply within one business day.</p>
          </div>
        ) : (
          <React.Fragment>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(24px,2.4vw,32px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 24px' }}>Tell us about your project</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>{fld('Full Name', 'Jordan Reyes')}{fld('Email', 'you@company.com')}</div>
            <div style={{ marginTop: 18 }}>{fld('What are you building?', 'A sentence about your goal', true)}</div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, cursor: 'pointer' }} onClick={() => setNda(!nda)}>
              <span style={{ width: 20, height: 20, borderRadius: 'var(--r-sm)', border: '1px solid ' + (nda ? 'var(--tangerine-400)' : 'rgba(255,255,255,.4)'), background: nda ? 'var(--tangerine-500)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}>{nda && <i data-lucide="check" style={{ width: 13, color: '#fff' }}></i>}</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, color: 'rgba(255,255,255,.85)' }}>Send me an NDA first</span>
            </label>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 26, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,.65)', maxWidth: 210, lineHeight: 1.45 }}>By sending this form you accept our Privacy Policy.</span>
              <Button variant="light" size="lg" onClick={() => setSent(true)}>Send Message <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function EmHeroField({ label, placeholder, textarea }) {
  const [f, setF] = useEmState(false);
  const common = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '11px 2px', width: '100%', boxSizing: 'border-box', background: 'transparent', color: '#fff', outline: 'none', border: 'none', borderBottom: '1px solid ' + (f ? 'var(--tangerine-400)' : 'rgba(255,255,255,.34)'), resize: 'none', transition: 'border-color .15s' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '.02em', color: 'rgba(255,255,255,.7)' }}>{label}</span>
      {textarea ? <textarea rows={2} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} /> : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

/* ============ 2 · ENGAGEMENT MODELS ============ */
function EmModels({ onTalk }) {
  const models = [
    {
      n: '01', icon: 'square-check', name: 'Fixed Scope', tagline: 'Defined deliverable, timeline, and price.',
      body: 'When requirements are clear, we lock scope, milestones, and a fixed price up front. You get predictable cost and a committed delivery date, with change control if priorities shift.',
      points: ['Predictable, fixed budget', 'Committed delivery date', 'Clear milestones & change control'],
      best: 'Best for well-defined builds, MVPs, and fixed-budget projects.',
    },
    {
      n: '02', icon: 'sliders-horizontal', name: 'Variable Scope', tagline: 'Time-and-materials flexibility.',
      body: 'When the path will flex as you learn, we work in agile sprints against a prioritized backlog. You steer scope sprint by sprint and pay only for what you build.',
      points: ['Adapt scope every sprint', 'Pay for what you build', 'Reprioritize as you learn'],
      best: 'Best for evolving products, R&D, and long-running roadmaps.',
      featured: true,
    },
    {
      n: '03', icon: 'users', name: 'Staff Augmentation', tagline: 'Senior engineers embedded in your team.',
      body: 'When you own the roadmap and need capacity or specialized skills, we embed vetted engineers into your team and process. They ramp fast, work in your stack, and report to you.',
      points: ['Vetted senior engineers', 'Embed in your process', 'Scale capacity up or down'],
      best: 'Best for in-house teams needing capacity or niche expertise.',
    },
  ];
  return (
    <LightSection bg="var(--surface)" id="em-models">
      <SectionHead label="Three ways to work with us" title="Pick the engagement that fits." sub="Every model draws from the same senior, vetted talent pool and the same battle-tested delivery process. Only the commercials and the control change." style={{ marginBottom: 52, maxWidth: 720 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="em-models-grid">
        {models.map(m => <EmModelCard key={m.name} {...m} onTalk={onTalk} />)}
      </div>
    </LightSection>
  );
}

function EmModelCard({ n, icon, name, tagline, body, points, best, featured, onTalk }) {
  const [h, setH] = useEmState(false);
  const dark = featured;
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: 'var(--r-lg)', padding: 'clamp(26px,2.8vw,34px)', background: dark ? 'var(--navy-900)' : 'var(--slate-50)', border: '1px solid ' + (dark ? 'rgba(120,150,240,.3)' : (h ? 'var(--border-strong)' : 'var(--border)')), boxShadow: h ? (dark ? 'var(--shadow-lg)' : 'var(--shadow-md)') : (dark ? 'var(--shadow-sm)' : 'none'), transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      {dark && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 80% at 100% 0%, rgba(70,76,159,.4), transparent 60%)', pointerEvents: 'none' }} />}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <span style={{ width: 50, height: 50, borderRadius: 'var(--r-md)', background: dark ? 'var(--tangerine-500)' : 'var(--indigo-50)', color: dark ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={icon} style={{ width: 24 }}></i></span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.14em', color: dark ? 'var(--tangerine-400)' : 'var(--slate-400)' }}>MODEL {n}</span>
        </div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 23, color: dark ? '#fff' : 'var(--fg1)', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{name}</h3>
        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14.5, color: dark ? 'var(--indigo-300)' : 'var(--xo-indigo)', marginBottom: 14 }}>{tagline}</div>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: dark ? 'rgba(255,255,255,.7)' : 'var(--fg2)', margin: '0 0 20px' }}>{body}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 22 }}>
          {points.map(p => (
            <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <i data-lucide="check" style={{ width: 17, flexShrink: 0, color: dark ? 'var(--tangerine-400)' : 'var(--xo-indigo)' }}></i>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: dark ? 'rgba(255,255,255,.85)' : 'var(--fg1)' }}>{p}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid ' + (dark ? 'rgba(255,255,255,.12)' : 'var(--border)') }}>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, lineHeight: 1.5, color: dark ? 'rgba(255,255,255,.6)' : 'var(--fg3)', margin: '0 0 16px' }}>{best}</p>
          <button onClick={onTalk} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: dark ? 'var(--tangerine-400)' : 'var(--accent)' }}>Discuss this model <i data-lucide="arrow-right" style={{ width: 15 }}></i></button>
        </div>
      </div>
    </div>
  );
}

/* ============ 3 · HOW TO CHOOSE ============ */
function EmChoose() {
  const reasons = [
    { icon: 'route', title: 'Matched to your roadmap', body: 'We recommend a model based on how defined your scope is and how much control you want — not on what is easiest to sell.' },
    { icon: 'shield-check', title: 'One vetted talent pool', body: 'Whichever model you pick, the same senior engineers and the same delivery standards back the work. No B-team.' },
    { icon: 'repeat', title: 'Switch models anytime', body: 'Start fixed for an MVP, move to variable as you scale, or augment your team later. The engagement flexes with you.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--fg1)', margin: '0 0 clamp(40px,5vw,56px)', textWrap: 'balance', textAlign: 'center', maxWidth: 720, marginInline: 'auto' }}>
        Not sure which model <span style={{ color: 'var(--xo-indigo)' }}>fits</span><span style={{ color: 'var(--tangerine-500)' }}>?</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(22px,2.4vw,28px)', maxWidth: 1100, margin: '0 auto' }} className="em-reasons-grid">
        {reasons.map(r => <EmReasonCard key={r.title} {...r} />)}
      </div>
    </LightSection>
  );
}

function EmReasonCard({ icon, title, body }) {
  const [h, setH] = useEmState(false);
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

/* ============ 4 · CASE STUDIES ============ */
function EmCases() {
  const cases = [
    { href: 'Regula Case Study.html', img: window.__resources.caseRegula, tag: 'Fixed Scope', title: 'Regulatory Intelligence Platform', stat: '70%', statLabel: 'Less workload' },
    { href: 'Unified AI Voice Operations Case Study.html', img: window.__resources.caseVoiceOps, tag: 'Variable Scope', title: 'AI Voice Operations Platform', stat: '4', statLabel: 'Portals shipped' },
    { href: 'PingPanda Case Study.html', img: window.__resources.caseEventMon, tag: 'Staff Augmentation', title: 'SaaS Event Monitoring', stat: '13mo', statLabel: 'To production' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
        <SectionHead label="Models in action" title="Every model has shipped." sub="Real products we delivered across each engagement type — same standards, different commercials." />
        <a href="Our Work.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>View all work <i data-lucide="arrow-right" style={{ width: 16 }}></i></a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="em-cases-grid">
        {cases.map(c => <EmCaseTile key={c.href} {...c} />)}
      </div>
    </LightSection>
  );
}

function EmCaseTile({ href, img, tag, title, stat, statLabel }) {
  const [h, setH] = useEmState(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', display: 'block', textDecoration: 'none', overflow: 'hidden', borderRadius: 'var(--r-xl)', minHeight: 380, background: '#080C1E', border: '1px solid rgba(255,255,255,.1)', boxShadow: h ? '0 36px 80px -34px rgba(8,12,30,.7)' : '0 22px 56px -34px rgba(8,12,30,.5)', transform: h ? 'translateY(-4px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s' }}>
      <img src={img} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1)', transition: 'transform .5s cubic-bezier(.16,1,.3,1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,12,30,0.25) 0%, rgba(8,12,30,0.55) 55%, #080C1E 100%)' }} />
      <span style={{ position: 'absolute', top: 20, left: 20, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--xo-ink)', background: '#fff', borderRadius: 'var(--r-pill)', padding: '6px 13px' }}>{tag}</span>
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

/* ============ 5 · CTA ============ */
function EmContact({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-950)', padding: 'clamp(72px,9vw,120px) 32px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 50% 0%, rgba(70,76,159,.42), transparent 60%)', pointerEvents: 'none' }} />
      <XWatermark size={560} color="rgba(120,150,240,0.05)" style={{ bottom: -240, left: '50%', transform: 'translateX(-50%)' }} />
      <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <SignalRule color="var(--tangerine-400)" style={{ justifyContent: 'center', marginBottom: 26 }} />
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(32px,5vw,60px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 22px', textWrap: 'balance' }}>
          Find the right model for your team<span style={{ color: 'var(--tangerine-400)' }}>.</span>
        </h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.6, color: 'rgba(255,255,255,.7)', maxWidth: 540, margin: '0 auto 36px' }}>
          Tell us where you are and what you are building. We will recommend the engagement that gets you there fastest, and respond within one business day.
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

/* ============ APP ============ */
function EmApp() {
  const [talkOpen, setTalkOpen] = useEmState(false);
  const onTalk = () => setTalkOpen(true);
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={onTalk} />
      <EmHero onTalk={onTalk} />
      <EmModels onTalk={onTalk} />
      <EmChoose />
      <EmCases />
      <EmContact onTalk={onTalk} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      {window.LetsTalkModal && <LetsTalkModal open={talkOpen} onClose={() => setTalkOpen(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<EmApp />);
