// Regula Case Study — Result/Conclusion, Contact CTA
const { useState: useRegBot } = React;

function RegResult() {
  return (
    <LightSection bg="var(--surface)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,4vw,56px)', alignItems: 'end', marginBottom: 48 }} className="cs-results-head">
        <SectionHead label="Conclusion" title="The result." />
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, lineHeight: 1.65, color: 'var(--fg2)', margin: 0 }}>
          Legacy RegTech solved compliance for the companies that could afford it. This platform solves it for everyone else — bringing enterprise-grade regulatory intelligence to the emerging-market FinTechs that needed it most.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(20px,3vw,28px)', alignItems: 'center', marginBottom: 40 }} className="cs-overview-grid">
        <BrowserFrame src="assets/regula/members.webp" alt="Regula organization members" url="app.regula.io/members" />
        <BrowserFrame src="assets/regula/billing.webp" alt="Regula billing and usage" url="app.regula.io/billing" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, marginBottom: 36 }}>
        {[
          { t: 'Built for the underserved', b: 'Continuous AI-powered crawling and intelligent impact scoring in an affordable SaaS — enterprise-grade intelligence at SMB pricing.' },
          { t: 'Eliminates the manual burden', b: 'The platform doesn\u2019t just monitor regulations — it removes the manual compliance work entirely. Teams respond to change instead of hunting for it.' },
          { t: 'Production from day one', b: 'A live multi-tenant SaaS — onboarding, audit history, billing, and multi-channel alerting — delivered end-to-end in twelve months.' },
        ].map(c => (
          <div key={c.t} style={{ background: 'var(--slate-50)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 'clamp(26px,3vw,34px)' }}>
            <span style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--indigo-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--xo-indigo)', marginBottom: 22 }}>
              <i data-lucide="check" style={{ width: 24 }}></i>
            </span>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 19, color: 'var(--fg1)', margin: '0 0 12px', lineHeight: 1.25 }}>{c.t}</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{c.b}</p>
          </div>
        ))}
      </div>

      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', borderRadius: 'var(--r-xl)', padding: 'clamp(36px,5vw,56px)', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 120% at 50% 0%, rgba(70,76,159,.35), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: 'clamp(20px,4vw,52px)', flexWrap: 'wrap' }}>
          {['Monitor continuously.', 'Score impact.', 'Respond, don\u2019t hunt.'].map((t, i) => (
            <span key={t} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em', color: i === 2 ? 'var(--tangerine-400)' : '#fff' }}>{t}</span>
          ))}
        </div>
      </div>
    </LightSection>
  );
}

function RegContactCTA({ innerRef }) {
  const [sent, setSent] = useRegBot(false);
  const [budget, setBudget] = useRegBot(null);
  const [hear, setHear] = useRegBot(null);
  const budgets = ['up to $25k', '$25k – $50k', '$50k – $100k', '> $100k'];
  const hears = ['Clutch', 'Google', 'Referral', 'LinkedIn'];
  return (
    <section ref={innerRef} style={{ background: 'var(--navy-950)', padding: 'clamp(56px,7vw,96px) 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(32px,4.5vw,60px)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,.4), transparent 58%)', pointerEvents: 'none' }} />
        <XWatermark size={420} color="rgba(120,150,240,0.05)" style={{ bottom: -180, left: -120 }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(36px,5vw,64px)' }} className="cs-contact-grid">
          <div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,46px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 22px' }}>
              Have an idea like this? Let\u2019s build it.
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '0 0 28px', maxWidth: 420 }}>
              We\u2019ll sign an NDA if required, analyze your request, and prepare a preliminary estimate — then map the fastest path from prototype to production.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['mail', 'partners@xorora.ai'], ['phone', '+1 (415) 555-0148']].map(([ic, v]) => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.85)' }}>
                  <span style={{ width: 36, height: 36, borderRadius: 'var(--r-md)', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tangerine-400)' }}><i data-lucide={ic} style={{ width: 17 }}></i></span>
                  {v}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px,3vw,32px)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.18)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 8px' }}>Request received</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.65)', margin: 0 }}>We\u2019ll reach out within one business day.</p>
              </div>
            ) : (
              <React.Fragment>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <RegField label="Your name" placeholder="Jordan Reyes" />
                  <RegField label="Work email" placeholder="you@company.com" />
                </div>
                <div style={{ marginTop: 14 }}><RegField label="How can we help?" placeholder="A sentence about your ambition…" textarea /></div>
                <RegChipRow label="Project budget" options={budgets} value={budget} onPick={setBudget} />
                <RegChipRow label="How did you hear about us?" options={hears} value={hear} onPick={setHear} />
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

function RegField({ label, placeholder, textarea }) {
  const [f, setF] = useRegBot(false);
  const common = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 'var(--r-md)', border: `1px solid ${f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'}`, background: 'rgba(255,255,255,.04)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none', boxShadow: f ? 'var(--shadow-focus)' : 'none' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{label}</span>
      {textarea ? <textarea rows={3} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />
        : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

function RegChipRow({ label, options, value, onPick }) {
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginBottom: 10 }}>{label}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
        {options.map(o => {
          const on = value === o;
          return (
            <button key={o} onClick={() => onPick(o)} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, cursor: 'pointer', padding: '8px 15px', borderRadius: 'var(--r-pill)', transition: 'all .15s', border: `1px solid ${on ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'}`, background: on ? 'rgba(242,107,33,.14)' : 'rgba(255,255,255,.03)', color: on ? 'var(--tangerine-400)' : 'rgba(255,255,255,.75)' }}>{o}</button>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { RegResult, RegContactCTA });
