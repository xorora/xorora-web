// Xorora — Blog · newsletter lead magnet + contact form
const { useState: useBlogBot } = React;

function BlogNewsletter() {
  const [email, setEmail] = useBlogBot('');
  const [sent, setSent] = useBlogBot(false);
  const [focus, setFocus] = useBlogBot(false);
  const perks = ['One email a month', 'Engineering deep-dives', 'Unsubscribe anytime'];
  return (
    <section id="blog-news" style={{ background: 'var(--surface)', padding: '0 32px clamp(56px,7vw,96px)' }}>
      <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1180, margin: '0 auto', background: 'var(--navy-900)', borderRadius: 'var(--r-xl)', padding: 'clamp(40px,5vw,72px)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 110% at 88% 0%, rgba(70,76,159,.5), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-radial-gradient(circle at 90% 10%, rgba(120,150,240,0.05) 0px, rgba(120,150,240,0.05) 1px, transparent 1px, transparent 44px)', opacity: 0.7, pointerEvents: 'none' }} />
        <XWatermark size={400} color="rgba(120,150,240,0.06)" style={{ bottom: -170, left: -110 }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="blog-news-grid">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 14px', borderRadius: 'var(--r-pill)', border: '1px solid rgba(255,255,255,.16)', background: 'rgba(255,255,255,.06)', marginBottom: 22, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.14em', color: 'var(--tangerine-400)' }}>
              <i data-lucide="mail" style={{ width: 14 }}></i> THE DISPATCH
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.06, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 16px', textWrap: 'balance' }}>
              Get the engineering notes we wish we had earlier.
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.6, color: 'rgba(255,255,255,.7)', margin: '0 0 24px', maxWidth: 440 }}>
              Join engineering and product leaders getting one practical breakdown a month on building production AI. Plus our free playbook when you subscribe.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 22px' }}>
              {perks.map(t => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,.82)' }}>
                  <i data-lucide="check" style={{ width: 15, color: 'var(--tangerine-400)' }}></i>{t}
                </span>
              ))}
            </div>
          </div>
          <div>
            {sent ? (
              <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: '40px 32px', textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(46,158,107,.18)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><i data-lucide="check" style={{ width: 26 }}></i></div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', margin: '0 0 8px' }}>You are in.</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: 'rgba(255,255,255,.65)', margin: 0 }}>Check your inbox for the playbook.</p>
              </div>
            ) : (
              <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px,3vw,32px)' }}>
                <label style={{ display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginBottom: 8 }}>Work email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder="you@company.com"
                  style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '13px 15px', borderRadius: 'var(--r-md)', border: '1px solid ' + (focus ? 'var(--tangerine-500)' : 'rgba(255,255,255,.18)'), background: 'rgba(255,255,255,.05)', color: '#fff', outline: 'none', boxShadow: focus ? 'var(--shadow-focus)' : 'none', marginBottom: 14 }} />
                <Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} onClick={() => email && setSent(true)}>Get the playbook <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: 'rgba(255,255,255,.45)', margin: '14px 0 0', textAlign: 'center' }}>No spam. Unsubscribe in one click.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogContact() {
  const [sent, setSent] = useBlogBot(false);
  const [topic, setTopic] = useBlogBot('');
  const topics = ['Start a project', 'Partnership', 'Press or media', 'Careers', 'Something else'];
  return (
    <section id="blog-contact" style={{ background: 'var(--slate-50)', padding: 'clamp(64px,8vw,104px) 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(36px,5vw,64px)', alignItems: 'start' }} className="blog-contact-grid">
        <div style={{ position: 'sticky', top: 100 }}>
          <SectionHead label="Get in touch" title="Have a topic or a project in mind?" sub="Pitch a guest post, ask a question about something we wrote, or start a conversation about working together." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
            {[['mail', 'partners@xorora.com'], ['phone', '+1 (415) 555-0148']].map(([ic, v]) => (
              <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'var(--fg1)' }}>
                <span style={{ width: 38, height: 38, borderRadius: 'var(--r-md)', background: 'var(--indigo-50)', color: 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={ic} style={{ width: 18 }}></i></span>{v}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3.5vw,44px)', boxShadow: 'var(--shadow-sm)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '56px 0' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--fg1)', margin: '0 0 8px' }}>Message sent</h3>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'var(--fg2)', margin: 0 }}>We will reply within one business day.</p>
            </div>
          ) : (
            <React.Fragment>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <BlogField label="Full name" placeholder="Jordan Reyes" />
                <BlogField label="Work email" placeholder="you@company.com" />
              </div>
              <div style={{ marginTop: 16 }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--fg2)', marginBottom: 9 }}>What is this about?</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                  {topics.map(t => {
                    const on = topic === t;
                    return <button key={t} onClick={() => setTopic(t)} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, cursor: 'pointer', padding: '8px 15px', borderRadius: 'var(--r-pill)', transition: 'all .15s', border: '1px solid ' + (on ? 'var(--xo-indigo)' : 'var(--border-strong)'), background: on ? 'var(--indigo-50)' : 'var(--surface)', color: on ? 'var(--xo-indigo)' : 'var(--fg2)' }}>{t}</button>;
                  })}
                </div>
              </div>
              <div style={{ marginTop: 16 }}><BlogField label="Message" placeholder="Tell us what is on your mind" textarea /></div>
              <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'var(--fg2)' }}>
                  <input type="checkbox" style={{ width: 16, height: 16, accentColor: 'var(--xo-indigo)' }} /> Subscribe me to the monthly dispatch
                </label>
                <Button variant="primary" size="lg" onClick={() => setSent(true)}>Send message <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  );
}

function BlogField({ label, placeholder, textarea }) {
  const [f, setF] = useBlogBot(false);
  const common = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 'var(--r-md)', border: '1px solid ' + (f ? 'var(--tangerine-500)' : 'var(--border-strong)'), background: f ? 'var(--surface)' : 'var(--slate-50)', color: 'var(--fg1)', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none', boxShadow: f ? 'var(--shadow-focus)' : 'none' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--fg2)' }}>{label}</span>
      {textarea ? <textarea rows={4} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />
        : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

Object.assign(window, { BlogNewsletter, BlogContact });
