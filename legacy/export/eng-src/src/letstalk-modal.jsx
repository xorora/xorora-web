// Xorora — shared "Let's Talk" modal (project intake popup)
const { useState: useLtState, useEffect: useLtEffect } = React;

function LetsTalkModal({ open, onClose }) {
  const [sent, setSent] = useLtState(false);
  const [industry, setIndustry] = useLtState('');
  const [budget, setBudget] = useLtState(null);
  const inds = (window.XO_NAV && window.XO_NAV.industries) ? window.XO_NAV.industries.map(i => i.name) : [];
  const budgets = ['up to $25k', '$25k – $50k', '$50k – $100k', '> $100k'];

  useLtEffect(() => {
    if (!open) return;
    if (window.lucide) lucide.createIcons();
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  });

  if (!open) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 'clamp(16px,4vw,48px)', background: 'rgba(2,6,15,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
      animation: 'ltFade .2s ease', pointerEvents: 'auto',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        position: 'relative', overflow: 'hidden', width: '100%', maxWidth: 1180, maxHeight: '92vh', overflowY: 'auto',
        background: 'var(--navy-900)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)',
        boxShadow: '0 40px 120px -40px rgba(0,0,0,.8)', animation: 'ltPop .28s cubic-bezier(.16,1,.3,1)',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,.4), transparent 58%)', pointerEvents: 'none' }} />
        {window.XWatermark && <XWatermark size={420} color="rgba(120,150,240,0.05)" style={{ bottom: -180, left: -120 }} />}

        {/* close */}
        <button onClick={onClose} aria-label="Close" style={{
          position: 'absolute', top: 18, right: 18, zIndex: 5, width: 40, height: 40, borderRadius: 'var(--r-md)',
          background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.14)', color: 'rgba(255,255,255,.8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .15s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.12)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = 'rgba(255,255,255,.8)'; }}>
          <i data-lucide="x" style={{ width: 20 }}></i>
        </button>

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(32px,5vw,64px)', padding: 'clamp(32px,4.5vw,60px)' }} className="lt-grid">
          {/* left */}
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

          {/* right — form */}
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px,3vw,32px)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '56px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.18)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 8px' }}>Request received</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.65)', margin: '0 0 22px' }}>We will reach out within one business day.</p>
                <Button variant="onDark" onClick={onClose}>Close</Button>
              </div>
            ) : (
              <React.Fragment>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <LtField label="Full name" placeholder="Jordan Reyes" />
                  <LtField label="Work email" placeholder="you@company.com" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
                  <LtField label="Company" placeholder="Company name" />
                  <LtSelect value={industry} onChange={setIndustry} options={inds} />
                </div>
                <LtChipRow label="Project budget" options={budgets} value={budget} onPick={setBudget} />
                <div style={{ marginTop: 14 }}><LtField label="How can we help?" placeholder="A sentence about your project" textarea /></div>
                <div style={{ marginTop: 24 }}>
                  <Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSent(true)}>Submit request <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LtField({ label, placeholder, textarea }) {
  const [f, setF] = useLtState(false);
  const common = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 'var(--r-md)', border: `1px solid ${f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'}`, background: 'rgba(255,255,255,.04)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none', boxShadow: f ? 'var(--shadow-focus)' : 'none' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{label}</span>
      {textarea ? <textarea rows={3} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />
        : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

function LtSelect({ value, onChange, options }) {
  const [f, setF] = useLtState(false);
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

function LtChipRow({ label, options, value, onPick }) {
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

window.LetsTalkModal = LetsTalkModal;
