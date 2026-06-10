// Xorora — "Our Work" contact section + app shell
const { useState: useWorkBot, useRef: useWorkAppRef, useEffect: useWorkAppFx } = React;

function WorkContact({ innerRef }) {
  const [sent, setSent] = useWorkBot(false);
  const [budget, setBudget] = useWorkBot(null);
  const budgets = ['up to $25k', '$25k – $50k', '$50k – $100k', '> $100k'];
  return (
    <section ref={innerRef} style={{ background: 'var(--surface)', padding: '0 32px clamp(64px,8vw,104px)' }}>
      <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1240, margin: '0 auto', background: 'var(--navy-900)', borderRadius: 'var(--r-xl)', padding: 'clamp(36px,5vw,68px)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 12% 0%, rgba(70,76,159,.4), transparent 56%)', pointerEvents: 'none' }} />
        <XWatermark size={460} color="rgba(120,150,240,0.05)" style={{ bottom: -200, right: -140 }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,5vw,64px)' }} className="work-contact-grid">
          {/* left */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,48px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 30px', textWrap: 'balance' }}>
              Share your ambition with the team that ships<span style={{ color: 'var(--tangerine-400)' }}>.</span>
            </h2>
            <div style={{ display: 'flex', gap: 'clamp(28px,4vw,52px)', flexWrap: 'wrap', marginBottom: 40 }}>
              {[['Sales & general', 'partners@xorora.ai'], ['Call us', '+1 (415) 555-0148']].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 8 }}>{k}</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 600, color: '#fff' }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'auto' }}>
              <i data-lucide="quote" style={{ width: 26, color: 'var(--tangerine-400)', marginBottom: 14 }}></i>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.8)', margin: '0 0 20px', maxWidth: 460 }}>
                "Xorora became an extension of our team. They engineered with us — pragmatic, fast, and genuinely invested in the outcome. A rare development partner."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar name="Priya Anand" size={44} ring />
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: '#fff' }}>Priya Anand</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,.55)' }}>VP Risk, Northwind</div>
                </div>
              </div>
            </div>
          </div>

          {/* right — form */}
          <div style={{ background: '#fff', borderRadius: 'var(--r-lg)', padding: 'clamp(26px,3vw,38px)', boxShadow: 'var(--shadow-xl)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--fg1)', margin: '0 0 8px' }}>Message sent</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'var(--fg2)', margin: 0 }}>We'll reach out within one business day.</p>
              </div>
            ) : (
              <React.Fragment>
                <WorkField label="Full name" req placeholder="Enter your name" />
                <WorkField label="Email" req placeholder="Enter your email" />
                <WorkField label="Phone number" placeholder="Enter your phone number" />
                <div style={{ marginTop: 16 }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--fg2)', marginBottom: 8 }}>Select your budget</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {budgets.map(b => {
                      const on = budget === b;
                      return <button key={b} onClick={() => setBudget(b)} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, cursor: 'pointer', padding: '8px 14px', borderRadius: 'var(--r-pill)', transition: 'all .15s', border: `1px solid ${on ? 'var(--xo-indigo)' : 'var(--border-strong)'}`, background: on ? 'var(--indigo-50)' : '#fff', color: on ? 'var(--xo-indigo)' : 'var(--fg2)' }}>{b}</button>;
                    })}
                  </div>
                </div>
                <WorkField label="Message" req textarea placeholder="Enter your message" />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 22, flexWrap: 'wrap' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'var(--fg2)', maxWidth: 240 }}>
                    <input type="checkbox" style={{ width: 16, height: 16, accentColor: 'var(--xo-indigo)' }} /> Subscribe for technology insights and updates
                  </label>
                  <Button variant="primary" size="lg" onClick={() => setSent(true)}>Send message <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkField({ label, placeholder, textarea, req }) {
  const [f, setF] = useWorkBot(false);
  const common = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 'var(--r-md)', border: `1px solid ${f ? 'var(--tangerine-500)' : 'var(--border-strong)'}`, background: f ? '#fff' : 'var(--slate-50)', color: 'var(--fg1)', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none', boxShadow: f ? 'var(--shadow-focus)' : 'none' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 16 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--fg2)' }}>{label}{req && <span style={{ color: 'var(--tangerine-500)' }}> *</span>}</span>
      {textarea ? <textarea rows={4} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />
        : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

function WorkApp() {
  const contactRef = useWorkAppRef(null);
  const [talkOpen, setTalkOpen] = useWorkBot(false);
  const toContact = () => {
    const el = contactRef.current;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 30, behavior: 'smooth' });
  };
  const toTiles = () => {
    const el = document.querySelector('.work-tiles');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
  };
  useWorkAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav current="work" />
      <WorkHeader onStart={() => setTalkOpen(true)} onWork={toTiles} />
      <WorkTiles />
      <WorkContact innerRef={contactRef} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      {window.LetsTalkModal && <LetsTalkModal open={talkOpen} onClose={() => setTalkOpen(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<WorkApp />);
