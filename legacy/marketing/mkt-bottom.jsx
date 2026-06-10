// Xorora — Marketing Services · bottom (Difference, Final CTA, app)
const { useState: useMktBotState } = React;

/* ============ 5 · THE XORORA DIFFERENCE ============ */
function MktDifference() {
  const cards = [
    ['activity', 'Instrumented from day one', 'Every channel is wired to analytics and attribution before launch. If it can\u2019t be measured, we don\u2019t ship it.'],
    ['layers', 'One team, full funnel', 'Search, social, paid, and lifecycle under one engineering-led roof. No agency hand-offs, no dropped context.'],
    ['git-compare-arrows', 'Spend follows signal', 'We reallocate budget to what converts, weekly. No set-and-forget media plans, no vanity spend.'],
    ['trending-up', 'Built to compound', 'Search equity and pipeline velocity that keep growing after a campaign ends. We build assets, not ads.'],
  ];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-950)', padding: 'clamp(96px,11vw,120px) 0' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 70% at 15% 25%, rgba(70,76,159,0.28), transparent 60%)', pointerEvents: 'none' }} />
      <XWatermark size={520} color="rgba(120,150,240,0.04)" style={{ bottom: -240, right: -160 }} />
      <div className="mkt-wrap" style={{ position: 'relative' }}>
        <div style={{ marginBottom: 48, maxWidth: 640 }}>
          <MktEyebrow style={{ marginBottom: 18 }}>The Xorora difference</MktEyebrow>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,4vw,46px)', lineHeight: 1.06, letterSpacing: '-0.02em', color: '#fff', margin: 0, textWrap: 'balance' }}>Marketing that reports to revenue.</h2>
        </div>
        <div className="mkt-diff-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {cards.map(([ic, t, b]) => (
            <div key={t} style={{ position: 'relative', overflow: 'hidden', display: 'flex', gap: 18, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)', borderRadius: 16, padding: 'clamp(24px,2.6vw,30px)' }}>
              <MktPara size={120} style={{ top: -46, right: -38 }} />
              <span style={{ position: 'relative', width: 46, height: 46, flexShrink: 0, borderRadius: 10, background: 'rgba(70,76,159,0.28)', border: '1px solid rgba(120,150,240,0.32)', color: 'var(--indigo-300)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={ic} style={{ width: 22 }}></i></span>
              <div style={{ position: 'relative' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 18, color: '#fff', margin: '0 0 8px', lineHeight: 1.25 }}>{t}</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'var(--slate-400)', margin: 0 }}>{b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 6 · FINAL CTA ============ */
function MktCTA() {
  const [sent, setSent] = useMktBotState(false);
  const [eng, setEng] = useMktBotState('');
  const [budget, setBudget] = useMktBotState('');
  const engineer = ['SEO', 'Local SEO', 'Google Ads', 'Meta Ads', 'Social Media', 'B2B Marketing', 'Full Funnel'];
  const budgets = ['up to $5k / mo', '$5k – $15k / mo', '$15k – $40k / mo', '$40k+ / mo'];
  return (
    <section id="mkt-contact" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg, var(--indigo-900) 0%, var(--navy-950) 70%)', padding: 'clamp(96px,11vw,120px) 0' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 70% at 50% 35%, rgba(70,76,159,0.4), transparent 62%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', whiteSpace: 'nowrap', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(60px,11vw,150px)', letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.03)', pointerEvents: 'none', lineHeight: 1 }}>Engineered for your ambition</div>
      <div className="mkt-wrap" style={{ position: 'relative' }}>
        <div className="mkt-cta-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }}>
          <div>
            <MktEyebrow style={{ marginBottom: 22 }}>Start the conversation</MktEyebrow>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(34px,4.6vw,52px)', lineHeight: 1.02, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#fff', margin: '0 0 22px' }}>Let's engineer your growth.</h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'var(--slate-400)', margin: 0, maxWidth: 420 }}>Tell us where you want growth and we'll map the channels, the architecture, and the numbers that get you there.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)', padding: 'clamp(26px,3vw,38px)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.18)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 8px' }}>Request received</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'var(--slate-400)', margin: 0 }}>We'll respond within one business day.</p>
              </div>
            ) : (
              <React.Fragment>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <MktField label="Name" placeholder="Jordan Reyes" />
                  <MktField label="Email" placeholder="you@company.com" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
                  <MktSelect label="What are you looking to engineer?" value={eng} onChange={setEng} options={engineer} ph="Select a channel" />
                  <MktSelect label="Budget range" value={budget} onChange={setBudget} options={budgets} ph="Select a range" />
                </div>
                <div style={{ marginTop: 24 }}>
                  <MktBtn variant="tangerine" onClick={() => setSent(true)} style={{ width: '100%', justifyContent: 'center' }}>Engineer my growth <i data-lucide="arrow-right" style={{ width: 17 }}></i></MktBtn>
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--slate-500)', marginTop: 16, textAlign: 'center' }}>No commitment. We'll respond within 1 business day.</div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function MktFieldLabel({ children }) {
  return <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--slate-500)' }}>{children}</span>;
}
function MktField({ label, placeholder }) {
  const [f, setF] = useMktBotState(false);
  const c = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 10, border: '1px solid ' + (f ? 'var(--indigo-400)' : 'rgba(255,255,255,.1)'), background: 'rgba(255,255,255,.05)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box', boxShadow: f ? '0 0 0 3px rgba(70,76,159,0.2)' : 'none', transition: 'border-color .15s, box-shadow .15s' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <MktFieldLabel>{label}</MktFieldLabel>
      <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={c} />
    </label>
  );
}
function MktSelect({ label, value, onChange, options, ph }) {
  const [f, setF] = useMktBotState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <MktFieldLabel>{label}</MktFieldLabel>
      <div style={{ position: 'relative' }}>
        <select value={value} onChange={e => onChange(e.target.value)} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ appearance: 'none', WebkitAppearance: 'none', fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 38px 12px 14px', borderRadius: 10, border: '1px solid ' + (f ? 'var(--indigo-400)' : 'rgba(255,255,255,.1)'), background: 'rgba(255,255,255,.05)', color: value ? '#fff' : 'var(--slate-500)', outline: 'none', width: '100%', boxSizing: 'border-box', cursor: 'pointer', boxShadow: f ? '0 0 0 3px rgba(70,76,159,0.2)' : 'none' }}>
          <option value="" style={{ color: '#111' }}>{ph}</option>
          {options.map(o => <option key={o} value={o} style={{ color: '#111' }}>{o}</option>)}
        </select>
        <i data-lucide="chevron-down" style={{ position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)', width: 16, color: 'var(--slate-500)', pointerEvents: 'none' }}></i>
      </div>
    </label>
  );
}

/* ============ APP ============ */
function MktApp() {
  const toContact = () => { const el = document.getElementById('mkt-contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 30, behavior: 'smooth' }); };
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--navy-900)' }}>
      <MegaNav onLetsTalk={toContact} />
      <MktHero onTalk={toContact} />
      <MktRule />
      <MktDeliver />
      <MktRule />
      <MktServices onTalk={toContact} />
      <MktResults />
      <MktRule />
      <MktDifference />
      <MktCTA />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MktApp />);
