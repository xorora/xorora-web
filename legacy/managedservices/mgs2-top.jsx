// Xorora — Managed Services (v2, dark geometry-rich) · top sections + shared helpers
const { useState: useM2State } = React;

/* ---------- shared bits ---------- */
function M2Eyebrow({ children, style }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, ...style }}>
      <span style={{ width: 26, height: 2, background: 'var(--tangerine-500)', borderRadius: 1 }} />
      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--tangerine-500)' }}>{children}</span>
    </div>
  );
}

// 45° brand parallelogram, decorative
function M2Para({ size = 120, color = 'rgba(70,76,159,0.08)', style }) {
  return <div aria-hidden="true" style={{ position: 'absolute', width: size, height: size, background: color, transform: 'skewX(-20deg)', pointerEvents: 'none', ...style }} />;
}

// thin full-width indigo rule used between sections
function M2Rule() {
  return <div style={{ height: 1, background: 'var(--indigo-800)', width: '100%' }} />;
}

function M2Btn({ children, variant = 'primary', onClick }) {
  const [h, setH] = useM2State(false);
  const base = { fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, padding: '14px 26px', borderRadius: 10, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 9, transition: 'all .15s cubic-bezier(.4,0,.2,1)', border: '1px solid transparent', transform: h ? 'translateY(-1px)' : 'none' };
  const variants = {
    primary: { background: 'var(--indigo-500)', color: '#fff', boxShadow: '0 0 32px rgba(70,76,159,0.35)', filter: h ? 'brightness(1.12)' : 'none' },
    secondary: { background: h ? 'rgba(70,76,159,0.16)' : 'transparent', color: '#fff', borderColor: 'var(--indigo-500)' },
  };
  return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ ...base, ...variants[variant] }}>{children}</button>;
}

/* ============ 1 · HERO ============ */
function M2Hero({ onTalk }) {
  const trust = ['24/7 MONITORING', 'ISO 27001 CERTIFIED', '120+ CLIENTS MANAGED'];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', marginTop: -72, paddingTop: 72 }}>
      <SignalField style={{ opacity: 0.9 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 70% at 50% 0%, rgba(70,76,159,0.20), transparent 60%)', pointerEvents: 'none' }} />
      {/* concentric rings off right edge */}
      <svg viewBox="0 0 600 600" width="760" height="760" aria-hidden="true" style={{ position: 'absolute', top: '50%', right: '-220px', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
        {[60, 120, 180, 240, 300, 360, 420].map(r => (
          <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        ))}
      </svg>
      <XWatermark size={760} color="rgba(255,255,255,0.03)" style={{ top: '50%', right: -300, transform: 'translateY(-50%)' }} />
      <div className="m2-wrap" style={{ position: 'relative', zIndex: 5, paddingTop: 'clamp(96px,11vw,150px)', paddingBottom: 'clamp(96px,11vw,150px)' }}>
        <M2Eyebrow style={{ marginBottom: 26 }}>Managed Services</M2Eyebrow>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(40px,6vw,72px)', lineHeight: 1.04, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#fff', margin: '0 0 26px', maxWidth: 940 }}>
          Your IT should work as hard as <span style={{ color: 'var(--indigo-400)' }}>your team does.</span>
        </h1>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 18, lineHeight: 1.65, color: 'var(--slate-400)', maxWidth: 560, margin: '0 0 40px' }}>
          Xorora is an extension of your IT team — proactive management, monitoring, and support, so your people can focus on what moves the business forward.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
          <M2Btn variant="primary" onClick={onTalk}>Start a project <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></M2Btn>
          <M2Btn variant="secondary" onClick={onTalk}>Book a strategy session</M2Btn>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
          {trust.map((t, i) => (
            <React.Fragment key={t}>
              {i > 0 && <span style={{ width: 1, height: 14, background: 'var(--slate-700)' }} />}
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.08em', color: 'var(--slate-400)' }}>{t}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,150,240,.4), transparent)' }} />
    </section>
  );
}

/* ============ 2 · PROCESS ============ */
function M2Process() {
  const steps = [
    { n: '01', icon: 'search', name: 'Comprehensive Assessment', body: 'We start with a thorough evaluation of your current IT environment to identify strengths, risks, and opportunities. No assumptions — just data.' },
    { n: '02', icon: 'map', name: 'Customized Strategy', body: 'We develop a tailored IT plan aligned with your business goals. Every recommendation ties directly to a measurable outcome.' },
    { n: '03', icon: 'life-buoy', name: 'Implementation & Support', body: 'We implement the agreed solutions with continuous monitoring and proactive support. One point of contact, not a ticket queue.' },
  ];
  return (
    <section style={{ background: 'var(--slate-950)', padding: 'clamp(96px,11vw,120px) 0' }}>
      <div className="m2-wrap">
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <M2Eyebrow style={{ marginBottom: 18 }}>How we work</M2Eyebrow>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(30px,4vw,46px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#fff', margin: 0, textWrap: 'balance' }}>From assessment to optimization.</h2>
        </div>
        <div style={{ position: 'relative' }}>
          {/* connector line through circles */}
          <div className="m2-connector" style={{ position: 'absolute', top: 22, left: '16%', right: '16%', height: 1, background: 'rgba(70,76,159,0.3)' }} />
          <div className="m2-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {steps.map(s => (
              <div key={s.n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'relative', zIndex: 2, width: 44, height: 44, borderRadius: '50%', background: 'var(--indigo-800)', border: '1px solid var(--indigo-400)', color: 'var(--indigo-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 28 }}>{s.n}</div>
                <div style={{ position: 'relative', overflow: 'hidden', width: '100%', background: 'var(--slate-900)', border: '1px solid rgba(70,76,159,0.2)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)', borderRadius: 16, padding: 32 }}>
                  <M2Para size={130} style={{ top: -50, right: -40 }} />
                  <div style={{ position: 'relative' }}>
                    <span style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(70,76,159,0.12)', border: '1px solid rgba(70,76,159,0.3)', color: 'var(--indigo-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><i data-lucide={s.icon} style={{ width: 21 }}></i></span>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.14em', color: 'var(--tangerine-400)', marginBottom: 8 }}>STEP {s.n}</div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 19, color: '#fff', margin: '0 0 10px', lineHeight: 1.25 }}>{s.name}</h3>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'var(--slate-400)', margin: 0 }}>{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 3 · SERVICES GRID ============ */
function M2Services({ onTalk }) {
  const svc = [
    { icon: 'monitor-check', name: 'IT Support', body: '24/7 help desk and rapid incident response. We resolve issues fast so your people stay productive and your operations stay online.' },
    { icon: 'users', name: 'Co-Managed IT', body: 'Flexible support alongside your in-house team. We fill the gaps, handle overflow, and bring specialized expertise where you need it.', featured: true },
    { icon: 'network', name: 'Network Administration', body: 'Continuous oversight of your network. We proactively detect and resolve issues, maintain peak performance, and keep security strong.' },
    { icon: 'server-cog', name: 'Server Management', body: 'Proactive server monitoring, patching, and optimization. Critical infrastructure runs at peak performance and protected against threats.' },
    { icon: 'shield-check', name: 'Cybersecurity & Compliance', body: 'Baseline controls, threat monitoring, and compliance built in — aligned to SOC 2, HIPAA, and GDPR for your industry.' },
    { icon: 'recycle', name: 'IT Asset Management & Disposal', body: 'Full lifecycle tracking from procurement to certified disposal. Maintain compliance, reduce waste, and keep sensitive data controlled.' },
  ];
  return (
    <section style={{ position: 'relative', background: 'var(--navy-900)', padding: 'clamp(96px,11vw,120px) 0' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(70,76,159,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none', opacity: 0.7 }} />
      <div className="m2-wrap" style={{ position: 'relative' }}>
        <div style={{ marginBottom: 56 }}>
          <M2Eyebrow style={{ marginBottom: 18 }}>Our managed services</M2Eyebrow>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(32px,5vw,56px)', lineHeight: 1.02, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#fff', margin: 0, maxWidth: 720, textWrap: 'balance' }}>Technology support that keeps you moving</h2>
        </div>
        <div className="m2-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {svc.map(s => <M2ServiceCard key={s.name} {...s} onTalk={onTalk} />)}
        </div>
      </div>
    </section>
  );
}

function M2ServiceCard({ icon, name, body, featured, onTalk }) {
  const [h, setH] = useM2State(false);
  const cardBg = featured ? 'var(--indigo-800)' : 'rgba(255,255,255,0.02)';
  const cardBorder = featured ? 'var(--indigo-500)' : (h ? 'rgba(70,76,159,0.45)' : 'rgba(70,76,159,0.2)');
  const topHi = featured ? 'inset 0 1px 0 rgba(107,112,182,0.4)' : 'inset 0 1px 0 rgba(255,255,255,0.06)';
  return (
    <div onClick={onTalk} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', background: cardBg, border: '1px solid ' + cardBorder, boxShadow: topHi + (h ? ', var(--shadow-lg)' : ''), borderRadius: 16, padding: '32px 28px', transform: h ? 'translateY(-3px)' : 'none', transition: 'transform .2s ease, border-color .2s ease, box-shadow .2s ease', minHeight: 250 }}>
      {featured && <span style={{ position: 'absolute', top: 16, right: 18, fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.14em', color: 'var(--tangerine-400)' }}>FEATURED</span>}
      <span style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(70,76,159,0.12)', border: '1px solid rgba(70,76,159,0.3)', color: 'var(--indigo-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={icon} style={{ width: 21 }}></i></span>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 18, color: '#fff', margin: '16px 0 10px', lineHeight: 1.3 }}>{name}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.6, color: featured ? 'rgba(255,255,255,.72)' : 'var(--slate-400)', margin: 0 }}>{body}</p>
      <span style={{ marginTop: 'auto', paddingTop: 22, display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 13, color: h ? 'var(--tangerine-400)' : 'var(--tangerine-500)', transform: h ? 'translateX(3px)' : 'none', transition: 'all .18s' }}>Learn more <i data-lucide="arrow-right" style={{ width: 14 }}></i></span>
    </div>
  );
}

Object.assign(window, { M2Eyebrow, M2Para, M2Rule, M2Btn, M2Hero, M2Process, M2Services });
