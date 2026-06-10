// Xorora — Industries index page · Contact form (multi-field) + app shell
const { useState: useIndBot, useEffect: useIndAppFx } = React;

function IndContact({ innerRef }) {
  const [sent, setSent] = useIndBot(false);
  const [industry, setIndustry] = useIndBot('');
  const [budget, setBudget] = useIndBot(null);
  const inds = (window.XO_NAV && window.XO_NAV.industries) ? window.XO_NAV.industries.map(i => i.name) : [];
  const budgets = ['up to $25k', '$25k – $50k', '$50k – $100k', '> $100k'];
  return (
    <section ref={innerRef} id="ind-contact" style={{ background: 'var(--surface)', padding: 'clamp(64px,8vw,104px) 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(32px,4.5vw,60px)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,.4), transparent 58%)', pointerEvents: 'none' }} />
        <XWatermark size={420} color="rgba(120,150,240,0.05)" style={{ bottom: -180, left: -120 }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(36px,5vw,64px)' }} className="ind-contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,46px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 22px' }}>
              Tell us about your project.
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '0 0 28px', maxWidth: 420 }}>
              Share a few details and our team will get back within one business day with next steps and a preliminary estimate.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 'auto' }}>
              {[['mail', 'partners@xorora.com'], ['phone', '+1 (415) 555-0148']].map(([ic, v]) => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.85)' }}>
                  <span style={{ width: 36, height: 36, borderRadius: 'var(--r-md)', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tangerine-400)' }}><i data-lucide={ic} style={{ width: 17 }}></i></span>
                  {v}
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
                  <IndField label="Full name" placeholder="Jordan Reyes" />
                  <IndField label="Work email" placeholder="you@company.com" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
                  <IndField label="Company" placeholder="Company name" />
                  <IndSelect label="Industry" value={industry} onChange={setIndustry} options={inds} />
                </div>
                <IndChipRow label="Project budget" options={budgets} value={budget} onPick={setBudget} />
                <div style={{ marginTop: 14 }}><IndField label="How can we help?" placeholder="A sentence about your project" textarea /></div>
                <div style={{ marginTop: 24 }}>
                  <Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSent(true)}>Submit request <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndField({ label, placeholder, textarea }) {
  const [f, setF] = useIndBot(false);
  const common = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 'var(--r-md)', border: `1px solid ${f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'}`, background: 'rgba(255,255,255,.04)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none', boxShadow: f ? 'var(--shadow-focus)' : 'none' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{label}</span>
      {textarea ? <textarea rows={3} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />
        : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

function IndSelect({ label, value, onChange, options }) {
  const [f, setF] = useIndBot(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>Industry</span>
      <div style={{ position: 'relative' }}>
        <select value={value} onChange={e => onChange(e.target.value)} onFocus={() => setF(true)} onBlur={() => setF(false)}
          style={{ appearance: 'none', WebkitAppearance: 'none', fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 38px 12px 14px', borderRadius: 'var(--r-md)', border: `1px solid ${f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'}`, background: 'rgba(255,255,255,.04)', color: value ? '#fff' : 'rgba(255,255,255,.5)', outline: 'none', width: '100%', boxSizing: 'border-box', cursor: 'pointer', boxShadow: f ? 'var(--shadow-focus)' : 'none' }}>
          <option value="" style={{ color: '#111' }}>Select industry</option>
          {options.map(o => <option key={o} value={o} style={{ color: '#111' }}>{o}</option>)}
        </select>
        <i data-lucide="chevron-down" style={{ position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)', width: 16, color: 'rgba(255,255,255,.5)', pointerEvents: 'none' }}></i>
      </div>
    </label>
  );
}

function IndChipRow({ label, options, value, onPick }) {
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginBottom: 10 }}>{label}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
        {options.map(o => {
          const on = value === o;
          return <button key={o} onClick={() => onPick(o)} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, cursor: 'pointer', padding: '8px 15px', borderRadius: 'var(--r-pill)', transition: 'all .15s', border: `1px solid ${on ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'}`, background: on ? 'rgba(242,107,33,.14)' : 'rgba(255,255,255,.03)', color: on ? 'var(--tangerine-400)' : 'rgba(255,255,255,.75)' }}>{o}</button>;
        })}
      </div>
    </div>
  );
}

function IndustriesApp() {
  const toContact = () => {
    const el = document.getElementById('ind-contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'smooth' });
  };
  useIndAppFx(() => {
    if (window.lucide) lucide.createIcons();
    const els = Array.prototype.slice.call(document.querySelectorAll('.ind-reveal'));
    if (!els.length) return;
    const reveal = el => el.classList.add('in');
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      // Defer observe by two frames so the base opacity:0 state paints first;
      // otherwise in-viewport (hero) elements get `in` in the same paint and never transition.
      requestAnimationFrame(() => requestAnimationFrame(() => { els.forEach(el => io.observe(el)); }));
    } else {
      requestAnimationFrame(() => requestAnimationFrame(() => els.forEach(reveal)));
    }
    // Safety: ensure nothing stays hidden even if the observer never fires.
    const t = setTimeout(() => els.forEach(reveal), 1400);
    return () => { if (io) io.disconnect(); clearTimeout(t); };
  }, []);
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toContact} />
      <IndHeader />
      <IndGrid />
      <IndCaseStudies />
      <IndProcess />
      <IndContact />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<IndustriesApp />);
