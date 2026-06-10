// Xorora — Data & AI page · bottom sections (FAQ, Contact) + app mount
const { useState: useDaiBotState } = React;

/* ============ 7 · FAQ ============ */
const DAI_FAQS = [
  { q: 'How do we know if our organization is ready for AI and data innovation?', a: 'Readiness depends on your current data quality, infrastructure, workflows, and business priorities. Most organizations begin with an assessment to understand gaps in data, architecture, and processes. This helps determine where AI can create the most value and what needs to be improved first. A clear readiness evaluation reduces risk and accelerates adoption.' },
  { q: 'How long does it take to implement an AI or data project?', a: 'It depends on scope and data maturity. A focused proof of value typically runs a few weeks, while production rollouts span a few months. We work in short, outcome-based phases so you see value early and decide each next step with evidence rather than guesswork.' },
  { q: 'Do we need fully clean or structured data before starting?', a: 'No. Most organizations start with imperfect data. Part of our work is assessing, cleaning, and structuring data as we go. We design pipelines and governance that improve data quality continuously rather than waiting for perfection before any value is delivered.' },
  { q: 'Will AI and data solutions integrate with our existing systems?', a: 'Yes. We build on open standards and connect to your existing stack — cloud platforms, databases, applications, and APIs — so new capabilities extend what you already run instead of replacing it. Interoperability is a design requirement from day one.' },
  { q: 'How do you ensure responsible, secure, and compliant AI deployment?', a: 'We bake in security, access controls, and governance from day one, with evaluation suites, monitoring, and human oversight. We align with standards such as SOC 2, GDPR, and industry-specific regulations depending on your context, so deployments are trustworthy and auditable.' },
];

function DaiFAQ() {
  const [open, setOpen] = useDaiBotState(0);
  return (
    <LightSection bg="var(--surface)">
      <SectionHead title="Frequently asked questions" align="center" style={{ marginBottom: 44, maxWidth: 640 }} />
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {DAI_FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ background: 'var(--surface)', border: '1px solid ' + (isOpen ? 'var(--border-strong)' : 'var(--border)'), borderRadius: 'var(--r-lg)', overflow: 'hidden', transition: 'border-color .18s' }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 'clamp(18px,2vw,22px) clamp(20px,2.4vw,28px)' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--fg1)', lineHeight: 1.35 }}>{f.q}</span>
                <i data-lucide={isOpen ? 'minus' : 'plus'} style={{ width: 20, flexShrink: 0, color: isOpen ? 'var(--tangerine-500)' : 'var(--slate-400)' }}></i>
              </button>
              {isOpen && <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.7, color: 'var(--fg2)', margin: 0, padding: '0 clamp(20px,2.4vw,28px) clamp(20px,2.4vw,26px)', animation: 'daiFade .25s ease', maxWidth: 760 }}>{f.a}</p>}
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}

/* ============ 8 · CONTACT ============ */
function DaiContact() {
  const [sent, setSent] = useDaiBotState(false);
  const [svc, setSvc] = useDaiBotState('');
  const [budget, setBudget] = useDaiBotState('');
  const services = ['Data Analytics', 'Data Engineering', 'Cloud Engineering & Migration', 'AI Agent Development', 'ML & Data Science', 'Workflow Automation', 'Not sure yet'];
  const budgets = ['up to $25k', '$25k – $50k', '$50k – $100k', '> $100k'];
  return (
    <section id="dai-contact" style={{ background: 'var(--navy-950)', padding: 'clamp(64px,8vw,104px) 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(32px,4.5vw,60px)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,.45), transparent 58%)', pointerEvents: 'none' }} />
        <XWatermark size={420} color="rgba(120,150,240,0.05)" style={{ bottom: -180, left: -120 }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(36px,5vw,64px)' }} className="dai-contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,46px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 22px' }}>Let's build with your data.</h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '0 0 28px', maxWidth: 420 }}>Tell us about your data, your goals, and where you want AI to make an impact. We respond within one business day with next steps and a preliminary plan.</p>
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
                  <DaiField label="Full name" placeholder="Jordan Reyes" />
                  <DaiField label="Work email" placeholder="you@company.com" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
                  <DaiField label="Company" placeholder="Company name" />
                  <DaiField label="Team size" placeholder="e.g. 50 employees" />
                </div>
                <div style={{ marginTop: 14 }}><DaiSelect label="Service needed" value={svc} onChange={setSvc} options={services} ph="Select a service" /></div>
                <div style={{ marginTop: 16 }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginBottom: 10 }}>Project budget</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                    {budgets.map(b => {
                      const on = budget === b;
                      return <button key={b} onClick={() => setBudget(b)} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, cursor: 'pointer', padding: '8px 15px', borderRadius: 'var(--r-pill)', transition: 'all .15s', border: '1px solid ' + (on ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'), background: on ? 'rgba(242,107,33,.14)' : 'rgba(255,255,255,.03)', color: on ? 'var(--tangerine-400)' : 'rgba(255,255,255,.75)' }}>{b}</button>;
                    })}
                  </div>
                </div>
                <div style={{ marginTop: 14 }}><DaiField label="How can we help?" placeholder="A sentence about your data or AI goals" textarea /></div>
                <div style={{ marginTop: 24 }}><Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSent(true)}>Submit request <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button></div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function DaiField({ label, placeholder, textarea }) {
  const [f, setF] = useDaiBotState(false);
  const c = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 'var(--r-md)', border: '1px solid ' + (f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'), background: 'rgba(255,255,255,.04)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none', boxShadow: f ? 'var(--shadow-focus)' : 'none' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{label}</span>
      {textarea ? <textarea rows={3} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={c} /> : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={c} />}
    </label>
  );
}

function DaiSelect({ label, value, onChange, options, ph }) {
  const [f, setF] = useDaiBotState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{label}</span>
      <div style={{ position: 'relative' }}>
        <select value={value} onChange={e => onChange(e.target.value)} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ appearance: 'none', WebkitAppearance: 'none', fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 38px 12px 14px', borderRadius: 'var(--r-md)', border: '1px solid ' + (f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'), background: 'rgba(255,255,255,.04)', color: value ? '#fff' : 'rgba(255,255,255,.5)', outline: 'none', width: '100%', boxSizing: 'border-box', cursor: 'pointer' }}>
          <option value="" style={{ color: '#111' }}>{ph}</option>
          {options.map(o => <option key={o} value={o} style={{ color: '#111' }}>{o}</option>)}
        </select>
        <i data-lucide="chevron-down" style={{ position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)', width: 16, color: 'rgba(255,255,255,.5)', pointerEvents: 'none' }}></i>
      </div>
    </label>
  );
}

/* ============ APP ============ */
function DaiApp() {
  const toContact = () => { const el = document.getElementById('dai-contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 30, behavior: 'smooth' }); };
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toContact} />
      <DaiHeader onTalk={toContact} />
      <DaiChallenges />
      <DaiServices onTalk={toContact} />
      <DaiEvolve />
      <DaiDeliver />
      <DaiTools />
      <DaiFAQ />
      <DaiContact />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DaiApp />);
