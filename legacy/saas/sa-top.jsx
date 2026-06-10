// Xorora — SaaS Industry Page · header with glass form
const { useState: useSaTop } = React;

function SaHeader({ onCTA }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('assets/saas/header-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.42, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(95deg, rgba(1,12,40,0.97) 0%, rgba(1,12,40,0.91) 42%, rgba(3,12,38,0.66) 72%, rgba(3,12,38,0.52) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(1,12,40,0.5) 0%, rgba(1,12,40,0) 30%, rgba(2,6,15,0.85) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 60% at 12% 0%, rgba(91,141,239,0.22), transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: 'clamp(120px,12vw,150px) 32px clamp(72px,8vw,104px)', display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }} className="sa-header-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 26, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,.6)' }}>
            <a href="Homepage V2.html" style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}>Home</a>
            <Chevron size={13} color="rgba(255,255,255,.4)" />
            <span>Industries</span>
            <Chevron size={13} color="rgba(255,255,255,.4)" />
            <span style={{ color: '#fff', fontWeight: 600 }}>SaaS</span>
          </div>

          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px,4.8vw,60px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 26px', textWrap: 'balance' }}>
            Custom SaaS software for scale driven companies<span style={{ color: 'var(--tangerine-400)' }}>.</span>
          </h1>

          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, lineHeight: 1.62, color: 'rgba(255,255,255,.74)', maxWidth: 520, margin: '0 0 36px' }}>
            Custom built multi tenant platforms, billing and subscription systems, admin dashboards, and analytics engineered to fit your product, streamline operations, and deliver measurable ROI as you scale from first customer to enterprise.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap', marginBottom: 36 }}>
            <Button variant="light" size="lg" onClick={onCTA}>Start a project <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
            {[['shield-check', 'SOC 2 ready'], ['lock', 'GDPR compliant'], ['award', 'ISO 27001']].map(([ic, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 11.5, letterSpacing: '.08em', color: 'rgba(255,255,255,.55)' }}>
                <i data-lucide={ic} style={{ width: 15, color: 'var(--tangerine-400)' }}></i>{l}
              </div>
            ))}
          </div>
        </div>

        <SaGlassForm />
      </div>
    </section>
  );
}

function SaGlassForm() {
  const [sent, setSent] = useSaTop(false);
  const [nda, setNda] = useSaTop(false);
  return (
    <div id="sa-form" style={{
      position: 'relative', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3vw,40px)',
      background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)',
      backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)',
      boxShadow: '0 30px 80px -30px rgba(0,0,0,0.7)',
    }} className="sa-glass">
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
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(26px,2.6vw,34px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 28px' }}>
              Start growing your business with us
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <SaField label="Full Name" placeholder="Jordan Reyes" />
              <SaField label="Email" placeholder="you@company.com" />
            </div>
            <div style={{ marginTop: 18 }}><SaField label="About project" placeholder="Tell us what you want to build" textarea /></div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, cursor: 'pointer' }} onClick={() => setNda(!nda)}>
              <span style={{ width: 20, height: 20, borderRadius: 'var(--r-sm)', border: `1px solid ${nda ? 'var(--tangerine-400)' : 'rgba(255,255,255,.3)'}`, background: nda ? 'var(--tangerine-500)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}>
                {nda && <i data-lucide="check" style={{ width: 13, color: '#fff' }}></i>}
              </span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, color: 'rgba(255,255,255,.78)' }}>Send me an NDA first</span>
            </label>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 26, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,.5)', maxWidth: 200, lineHeight: 1.45 }}>
                By sending this form you accept our Privacy Policy.
              </span>
              <Button variant="primary" size="lg" onClick={() => setSent(true)}>Send Message <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function SaField({ label, placeholder, textarea }) {
  const [f, setF] = useSaTop(false);
  const common = {
    fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '11px 2px', width: '100%', boxSizing: 'border-box',
    background: 'transparent', color: '#fff', outline: 'none', border: 'none',
    borderBottom: `1px solid ${f ? 'var(--tangerine-400)' : 'rgba(255,255,255,.28)'}`, resize: 'none', transition: 'border-color .15s',
  };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '.02em', color: 'rgba(255,255,255,.6)' }}>{label}</span>
      {textarea
        ? <textarea rows={2} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />
        : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

Object.assign(window, { SaHeader });
