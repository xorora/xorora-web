// Xorora — Data & AI page · top sections (Header, Challenges, Services)
const { useState: useDaiState } = React;

/* ============ 1 · HEADER ============ */
function DaiHeader({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(150deg, #0A1230 0%, #15225C 38%, #2347A8 74%, #2C57C9 100%)', marginTop: -72, paddingTop: 72 }}>
      <SignalField style={{ opacity: 0.6 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 90% at 88% 30%, rgba(120,160,255,0.5) 0%, rgba(60,100,220,0.18) 34%, transparent 64%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(150,180,255,.5), transparent)' }} />
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1240, margin: '0 auto', padding: 'clamp(84px,10vw,128px) 32px clamp(64px,7vw,96px)', display: 'grid', gridTemplateColumns: '1.06fr 0.94fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }} className="dai-header-grid">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 16px', borderRadius: 'var(--r-pill)', border: '1px solid rgba(255,255,255,.22)', background: 'rgba(255,255,255,.07)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', marginBottom: 24, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: '#fff' }}>
            <i data-lucide="database" style={{ width: 14 }}></i> AI &amp; Data Innovation
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px,5vw,66px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 24px', textWrap: 'balance' }}>
            Your partner in AI and data innovation<span style={{ color: 'var(--tangerine-400)' }}>.</span>
          </h1>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18.5, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', maxWidth: 520, margin: '0 0 32px' }}>
            We accelerate data and AI adoption to create practical outcomes that strengthen teams and organizations.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="light" size="lg" onClick={onTalk}>Start a project <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            <Button variant="onDark" size="lg" onClick={onTalk}>Book a discovery call</Button>
          </div>
        </div>
        <DaiHeroForm />
      </div>
    </section>
  );
}

function DaiHeroForm() {
  const [sent, setSent] = useDaiState(false);
  const [nda, setNda] = useDaiState(false);
  const fld = (label, ph, ta) => <DaiHeroField label={label} placeholder={ph} textarea={ta} />;
  return (
    <div id="dai-hero-form" style={{ position: 'relative', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3vw,40px)', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.22)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', boxShadow: '0 30px 80px -30px rgba(0,0,0,0.6)' }} className="dai-glass">
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
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(24px,2.4vw,32px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 24px' }}>Start growing your business with us</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>{fld('Full Name', 'Jordan Reyes')}{fld('Email', 'you@company.com')}</div>
            <div style={{ marginTop: 18 }}>{fld('About project', 'A sentence about your data or AI goals', true)}</div>
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

function DaiHeroField({ label, placeholder, textarea }) {
  const [f, setF] = useDaiState(false);
  const common = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '11px 2px', width: '100%', boxSizing: 'border-box', background: 'transparent', color: '#fff', outline: 'none', border: 'none', borderBottom: '1px solid ' + (f ? 'var(--tangerine-400)' : 'rgba(255,255,255,.34)'), resize: 'none', transition: 'border-color .15s' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '.02em', color: 'rgba(255,255,255,.7)' }}>{label}</span>
      {textarea ? <textarea rows={2} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} /> : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

/* ============ 2 · THE REAL GLOBAL CHALLENGES ============ */
function DaiChallenges() {
  const stats = [
    { v: '30%', body: 'yearly growth in AI governance spend shows rising compliance and risk pressures.', src: 'Forrester', lift: 96, brand: <SrcForrester /> },
    { v: '72%', body: 'of companies use AI, but most still struggle to scale it.', src: 'McKinsey & Company', lift: 0, brand: <SrcMckinsey /> },
    { v: '60%', body: 'of AI projects fail when organizations lack AI-ready data.', src: 'Gartner', lift: 48, brand: <SrcGartner /> },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="The state of play" title="The real global challenges." sub="AI adoption is nearly universal — but value is not. The gap is data, governance, and the ability to scale." style={{ marginBottom: 56, maxWidth: 720 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'start' }} className="dai-challenge-grid">
        {stats.map((s, i) => (
          <div key={i} className="dai-challenge-card" style={{ marginTop: s.lift, display: 'flex', flexDirection: 'column', minHeight: 320, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
            <div style={{ height: 4, background: 'var(--xo-indigo)' }} />
            <div style={{ padding: 'clamp(26px,2.6vw,34px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(44px,5vw,62px)', lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--xo-indigo)', marginBottom: 18 }}>{s.v}</div>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.5, color: 'var(--fg1)', margin: 0, fontWeight: 500 }}>{s.body}</p>
              <a href="#dai-contact" onClick={e => e.preventDefault()} style={{ marginTop: 'auto', paddingTop: 28, display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
                {s.brand}
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: 'var(--fg2)' }}>{s.src}</span>
                <i data-lucide="arrow-up-right" style={{ width: 14, color: 'var(--slate-400)' }}></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

// Source wordmarks — styled type lockups (drop in official SVGs when available)
function SrcForrester() {
  return <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700, fontSize: 13, letterSpacing: '.04em', color: '#1A1A1A', textTransform: 'uppercase' }}>Forrester</span>;
}
function SrcMckinsey() {
  return <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400, fontSize: 13.5, letterSpacing: '-.01em', color: '#0A0A0A', lineHeight: 1 }}>McKinsey<span style={{ fontWeight: 400 }}>&amp;Co</span></span>;
}
function SrcGartner() {
  return <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '-.02em', color: '#002856' }}>Gartner<span style={{ color: '#0096D6' }}>.</span></span>;
}

/* ============ 3 · SERVICES ============ */
function DaiServices({ onTalk }) {
  const svc = [
    { icon: 'bar-chart-3', name: 'Data Analytics', body: 'Dashboards, reporting, and decision intelligence that turn raw data into answers your teams can act on.' },
    { icon: 'database-zap', name: 'Data Engineering', body: 'Reliable pipelines, warehouses, and lakehouses that make your data clean, governed, and analytics-ready.' },
    { icon: 'cloud', name: 'Cloud Engineering & Migration', body: 'Modernize and migrate to the cloud with scalable, secure, cost-aware architecture built for AI workloads.' },
    { icon: 'bot', name: 'AI Agent Development', body: 'Autonomous and assistive agents that automate workflows, reason over your data, and act within guardrails.' },
    { icon: 'sigma', name: 'ML & Data Science Services', body: 'Custom models — from forecasting to computer vision — validated against real business outcomes.' },
    { icon: 'workflow', name: 'Workflow Automation Services', body: 'Connect systems and automate processes end-to-end so your teams spend time on judgment, not busywork.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start', marginBottom: 52 }} className="dai-services-intro">
        <div>
          <Eyebrow style={{ marginBottom: 18 }}>What we engineer</Eyebrow>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(30px,4vw,48px)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--tangerine-500)', margin: 0, textWrap: 'balance' }}>We deliver end-to-end data and AI services</h2>
        </div>
        <div style={{ paddingTop: 6 }}>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17.5, lineHeight: 1.6, color: 'var(--fg1)', margin: '0 0 18px', fontWeight: 500 }}>We design, build, and operationalize solutions that turn insight into intelligent action.</p>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'var(--fg2)', margin: 0 }}>Our senior-led teams help organizations modernize data foundations, operationalize AI, and connect the full ecosystem — from pipelines and governance to analytics and automation — to accelerate growth and measurable outcomes.</p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="dai-grid3">
        {svc.map(s => <DaiServiceCard key={s.name} {...s} onTalk={onTalk} />)}
      </div>
      <div style={{ marginTop: 22 }}><DaiNotSure onTalk={onTalk} /></div>
    </LightSection>
  );
}

function DaiServiceCard({ icon, name, body, onTalk }) {
  const [h, setH] = useDaiState(false);
  return (
    <div onClick={onTalk} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', background: h ? 'var(--surface)' : '#fff', border: '1px solid ' + (h ? 'var(--border-strong)' : 'var(--border)'), borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.6vw,32px)', boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-sm)', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)', height: '100%' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--tangerine-500))', transform: h ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <span style={{ width: 48, height: 48, borderRadius: 'var(--r-md)', background: h ? 'var(--xo-indigo)' : 'var(--indigo-50)', color: h ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}><i data-lucide={icon} style={{ width: 23 }}></i></span>
        <i data-lucide="arrow-up-right" style={{ width: 18, color: h ? 'var(--tangerine-500)' : 'var(--slate-400)', transition: 'color .2s' }}></i>
      </div>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 19, color: 'var(--fg1)', margin: '0 0 11px', lineHeight: 1.25 }}>{name}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg2)', margin: '0 0 16px' }}>{body}</p>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 600, color: h ? 'var(--tangerine-600)' : 'var(--accent)', transition: 'color .15s' }}>Learn more <i data-lucide="arrow-right" style={{ width: 15 }}></i></span>
    </div>
  );
}

function DaiNotSure({ onTalk }) {
  const [h, setH] = useDaiState(false);
  return (
    <div onClick={onTalk} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', background: 'var(--navy-900)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-lg)', padding: 'clamp(28px,3.2vw,40px)', boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-sm)', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 120% at 92% 0%, rgba(70,76,159,.5), transparent 60%)', pointerEvents: 'none' }} />
      <XWatermark size={300} color="rgba(120,150,240,0.07)" style={{ bottom: -130, right: -40 }} />
      <div style={{ position: 'relative', display: 'flex', gap: 'clamp(20px,3vw,40px)', alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ width: 56, height: 56, flexShrink: 0, borderRadius: 'var(--r-md)', background: 'var(--tangerine-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide="plus" style={{ width: 28 }}></i></span>
        <div style={{ flex: 1, minWidth: 240 }}>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 22, color: '#fff', margin: '0 0 8px', lineHeight: 1.25 }}>Not sure where to start?</h3>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,.7)', margin: 0, maxWidth: 620 }}>Every organization is different. Let's map your data maturity, your goals, and where AI can make the biggest impact for your team.</p>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 600, color: 'var(--tangerine-400)', whiteSpace: 'nowrap' }}>Let's talk <i data-lucide="arrow-right" style={{ width: 16 }}></i></span>
      </div>
    </div>
  );
}

Object.assign(window, { DaiHeader, DaiChallenges, DaiServices });
