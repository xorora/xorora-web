// Xorora homepage — Playbook, Conversations, Contact, Insights
const { useState: useBotState } = React;

/* ---------------- PLAYBOOK DOWNLOAD ---------------- */
function Playbook() {
  const [email, setEmail] = useBotState('');
  const [sent, setSent] = useBotState(false);
  const [focus, setFocus] = useBotState(false);
  return (
    <section style={{ background: 'var(--bg)', padding: '104px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr' }} className="xo-playbook-grid">
          <div style={{ background: 'var(--navy-900)', padding: '64px 56px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 90% at 10% 100%, rgba(70,76,159,.4), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <Eyebrow onDark style={{ marginBottom: 18 }}>Free playbook</Eyebrow>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(26px,3.2vw,36px)', color: '#fff', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
                The AI Adoption Playbook for 2026.
              </h2>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.68)', margin: '0 0 30px', maxWidth: 460 }}>
                A practical framework for moving from pilot to production — what to build first, how to budget, and how to measure ROI. Free, no fluff.
              </p>
              {sent ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: 16 }}>
                  <span style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(46,158,107,.2)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide="check" style={{ width: 20 }}></i></span>
                  Check your inbox — the playbook is on its way.
                </div>
              ) : (
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', maxWidth: 480 }}>
                  <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com"
                    onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                    style={{
                      flex: 1, minWidth: 200, fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '14px 16px',
                      borderRadius: 'var(--r-md)', border: `1px solid ${focus ? 'var(--tangerine-500)' : 'rgba(255,255,255,.2)'}`,
                      background: 'rgba(255,255,255,.06)', color: '#fff', outline: 'none',
                      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
                    }} />
                  <Button variant="primary" size="lg" onClick={() => email && setSent(true)}>Get the playbook <Chevron size={16} /></Button>
                </div>
              )}
            </div>
          </div>
          <div style={{ background: 'var(--xo-indigo)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, minHeight: 280 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 60% at 70% 20%, rgba(255,255,255,.18), transparent 60%)' }} />
            <div style={{
              position: 'relative', width: 200, aspectRatio: '3 / 4', borderRadius: '4px 10px 10px 4px',
              background: 'linear-gradient(140deg, #1A1C3A, #02060F)', boxShadow: '0 24px 60px rgba(2,6,15,.5)',
              borderLeft: '4px solid var(--tangerine-500)', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <Wordmark height={16} dark />
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9.5, letterSpacing: '.14em', color: 'var(--tangerine-400)', marginBottom: 10 }}>PLAYBOOK · 2026</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 19, color: '#fff', lineHeight: 1.2 }}>AI Adoption for Business</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONVERSATIONS ---------------- */
function Conversations() {
  const eps = [
    { guest: 'AI in customer experience', who: 'Maya Rao · Northwind', co: 'NORTHWIND' },
    { guest: 'The AI-agent empowered workflow', who: 'Tom Becker · Axiom', co: 'AXIOM' },
    { guest: 'Adapting to evolving tech', who: 'Sara Lin · Heliogen', co: 'HELIOGEN' },
    { guest: 'Future-proofing the workforce', who: 'David Cho · Quantly', co: 'QUANTLY' },
  ];
  return (
    <section style={{ background: 'var(--surface)', padding: '104px 32px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 52, gap: 20, flexWrap: 'wrap' }}>
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>The Xorora Podcast</Eyebrow>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.8vw,42px)', color: 'var(--fg1)', margin: 0, letterSpacing: '-0.01em' }}>Conversations that go beyond the code.</h2>
          </div>
          <Button variant="secondary">All episodes <Chevron /></Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 22 }}>
          {eps.map((e, i) => (
            <Reveal key={e.guest} delay={i * 80}><EpisodeCard {...e} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EpisodeCard({ guest, who, co }) {
  const [hover, setHover] = useBotState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ cursor: 'pointer', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)', transform: hover ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <MediaPlaceholder ratio="4 / 3" label="EPISODE">
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,.16)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: hover ? 'scale(1.1)' : 'none', transition: 'transform .2s' }}>
            <i data-lucide="play" style={{ width: 20, color: '#fff', marginLeft: 2 }}></i>
          </div>
        </div>
        <span style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 9.5, letterSpacing: '.14em', color: '#fff', background: 'rgba(2,6,15,.4)', padding: '4px 9px', borderRadius: 'var(--r-pill)' }}>{co}</span>
      </MediaPlaceholder>
      <div style={{ background: 'var(--surface)', padding: '20px 22px' }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 17, color: 'var(--fg1)', margin: '0 0 8px', lineHeight: 1.3 }}>{guest}</h3>
        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'var(--fg3)' }}>{who}</div>
      </div>
    </div>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact({ onNav }) {
  return (
    <Atmosphere bloom="18% 10%">
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '100px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="xo-contact-grid">
        <div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(34px,4.6vw,56px)', color: '#fff', margin: '0 0 22px', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Power your next<br/>digital move.
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{ display: 'flex', gap: 3 }}>
              {[0, 1, 2, 3, 4].map(i => <i key={i} data-lucide="star" style={{ width: 18, color: 'var(--tangerine-400)', fill: 'var(--tangerine-400)' }}></i>)}
            </div>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 600, color: '#fff' }}>4.9 / 5.0</span>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, color: 'rgba(255,255,255,.55)' }}>reviews on Clutch</span>
          </div>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,.7)', margin: '0 0 28px', maxWidth: 440 }}>
            "Xorora became an extension of our team. They engineered with us — pragmatic, fast, and genuinely invested in the outcome. A rare development partner."
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="Priya Anand" size={44} />
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: '#fff' }}>Priya Anand</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,.55)' }}>VP Risk, Northwind</div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </Atmosphere>
  );
}

function DarkField({ label, placeholder, textarea, half }) {
  const [focus, setFocus] = useBotState(false);
  const common = {
    fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '13px 15px', borderRadius: 'var(--r-md)',
    border: `1px solid ${focus ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'}`,
    background: 'rgba(255,255,255,.04)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box',
    resize: 'none', boxShadow: focus ? 'var(--shadow-focus)' : 'none',
  };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7, gridColumn: half ? 'span 1' : 'span 2' }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{label}</span>
      {textarea
        ? <textarea rows={3} placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={common} />
        : <input placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={common} />}
    </label>
  );
}

function ContactForm() {
  const [sent, setSent] = useBotState(false);
  return (
    <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 36, backdropFilter: 'blur(8px)' }}>
      {sent ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.18)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 8px' }}>Request received</h3>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.65)', margin: 0 }}>We'll reach out within one business day.</p>
        </div>
      ) : (
        <React.Fragment>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 22px', letterSpacing: '-0.01em' }}>Tell us about your project</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <DarkField label="First name" placeholder="Jordan" half />
            <DarkField label="Last name" placeholder="Reyes" half />
            <DarkField label="Work email" placeholder="you@company.com" />
            <DarkField label="How can we help?" placeholder="A short sentence about your ambition…" textarea />
          </div>
          <div style={{ marginTop: 22 }}>
            <Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSent(true)}>Book a build review <Chevron size={16} /></Button>
          </div>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: 'rgba(255,255,255,.4)', margin: '14px 0 0', textAlign: 'center' }}>We reply within one business day. No spam, ever.</p>
        </React.Fragment>
      )}
    </div>
  );
}

/* ---------------- INSIGHTS ---------------- */
function Insights() {
  const posts = [
    { cat: 'GUIDE', title: 'Cloud cost optimization for AI workloads', read: '8 min', feat: true },
    { cat: 'ARTICLE', title: 'How agentic AI is changing business workflows', read: '6 min' },
    { cat: 'ARTICLE', title: 'The ultimate guide to boosting application performance', read: '10 min' },
    { cat: 'REPORT', title: 'C-Suite guide to AI for business in 2026', read: '12 min' },
  ];
  return (
    <section style={{ background: 'var(--bg)', padding: '104px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 52, gap: 20, flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.8vw,42px)', color: 'var(--fg1)', margin: 0, letterSpacing: '-0.01em' }}>Latest insights &amp; resources.</h2>
          <Button variant="secondary">All insights <Chevron /></Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 22 }}>
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}><PostCard {...p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PostCard({ cat, title, read, feat }) {
  const [hover, setHover] = useBotState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ cursor: 'pointer', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--surface)', boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)', transform: hover ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <MediaPlaceholder ratio="16 / 10" label="ARTICLE" dark={feat}>
        {feat && (
          <div style={{ position: 'absolute', inset: 0, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <Wordmark height={15} dark style={{ position: 'absolute', top: 20, left: 20 }} />
            <PyramidBars color="rgba(255,255,255,.5)" size={40} style={{ alignItems: 'flex-start' }} />
          </div>
        )}
      </MediaPlaceholder>
      <div style={{ padding: '20px 22px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '.14em', color: 'var(--tangerine-600)' }}>{cat}</span>
          <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--slate-300)' }}></span>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'var(--fg3)' }}>{read} read</span>
        </div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 17, color: 'var(--fg1)', margin: 0, lineHeight: 1.35 }}>{title}</h3>
      </div>
    </div>
  );
}

Object.assign(window, { Playbook, Conversations, Contact, Insights });
