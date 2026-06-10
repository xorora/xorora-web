// Xorora Homepage V2 — liquid-glass editorial sections (Xorora palette + Poppins)
const { useState: useV2State, useRef: useV2Ref, useEffect: useV2Fx } = React;

// Scroll-reveal: transform-only rise (opacity stays 1 so content is never stuck hidden).
function Blur({ children, delay = 0, tag = 'div', style, className }) {
  const Tag = tag;
  const cls = 'v2-rise' + (className ? ' ' + className : '');
  return <Tag className={cls} style={{ animationDelay: delay + 'ms', ...style }}>{children}</Tag>;
}

function Badge({ children }) {
  return <span className="lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 'var(--r-pill)', padding: '7px 16px', fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 500, letterSpacing: '.02em', color: 'rgba(255,255,255,.85)' }}>{children}</span>;
}

function GlassCTA({ children, onClick, solid }) {
  const [h, setH] = useV2State(false);
  if (solid) {
    return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 'var(--r-pill)', border: 'none', cursor: 'pointer', padding: '14px 26px', background: '#fff', color: 'var(--xo-ink)', fontFamily: 'Poppins, sans-serif', fontSize: 15.5, fontWeight: 600, transform: h ? 'translateY(-1px)' : 'none', transition: 'transform .15s' }}>{children}</button>;
  }
  return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} className="lg-strong" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 'var(--r-pill)', cursor: 'pointer', padding: '14px 26px', color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: 15.5, fontWeight: 600, transform: h ? 'translateY(-1px)' : 'none', transition: 'transform .15s' }}>{children} <i data-lucide="arrow-up-right" style={{ width: 17 }}></i></button>;
}

/* ---------------- HERO ---------------- */
function V2Hero({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#020209', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HeroKnot />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 80% at 50% 42%, rgba(79,70,229,0.28) 0%, rgba(79,70,229,0.08) 38%, transparent 66%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 300, background: 'linear-gradient(to bottom, transparent, #020209)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: 1000, margin: '0 auto', padding: 'clamp(120px,15vh,200px) 32px 40px' }}>
        <Blur><span className="lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 'var(--r-pill)', padding: '6px 16px 6px 6px', marginBottom: 30 }}>
          <span style={{ background: '#fff', color: 'var(--xo-ink)', borderRadius: 'var(--r-pill)', padding: '4px 11px', fontFamily: 'Poppins, sans-serif', fontSize: 11.5, fontWeight: 700 }}>NEW</span>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,.82)' }}>Your AI Development Partner</span>
        </span></Blur>
        <Blur tag="h1" delay={80} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(48px,9vw,118px)', lineHeight: 0.92, letterSpacing: '-0.01em', margin: '0 0 24px', textWrap: 'balance', textTransform: 'uppercase' }}>
          <span style={{ display: 'block', color: '#fff' }}>Engineered</span>
          <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2.5px rgba(255,255,255,0.7)' }}>For Your</span>
          <span style={{ display: 'block', color: '#fff' }}>Ambition<span style={{ color: 'var(--tangerine-400)' }}>.</span></span>
        </Blur>
        <Blur tag="p" delay={180} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(16px,2vw,19px)', fontWeight: 300, lineHeight: 1.6, color: 'rgba(255,255,255,.78)', maxWidth: 540, margin: '0 0 36px' }}>
          Production AI and software, built by a partner who ships. From the first prototype to the system your business runs on, wildly reimagined.
        </Blur>
        <Blur delay={260} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <GlassCTA onClick={onTalk}>Book An Exploration Call</GlassCTA>
          <GlassCTA onClick={onTalk}>Get a Quote</GlassCTA>
        </Blur>
      </div>
    </section>
  );
}

/* ---------------- START / HOW IT WORKS ---------------- */
function V2Start({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', padding: 'clamp(80px,11vw,150px) 32px' }}>
      <SignalField />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 90% at 50% 50%, rgba(70,76,159,.32), transparent 62%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, #02060F, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <Blur><Badge>How it works</Badge></Blur>
        <Blur tag="h2" delay={80} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(34px,5vw,62px)', lineHeight: 0.95, letterSpacing: '-0.03em', color: '#fff', margin: '22px 0 18px', textWrap: 'balance' }}>You dream it. We engineer it.</Blur>
        <Blur tag="p" delay={160} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(16px,2vw,18px)', fontWeight: 300, lineHeight: 1.6, color: 'rgba(255,255,255,.62)', maxWidth: 540, margin: '0 auto 32px' }}>Share your vision. Our team handles the rest: discovery, design, build, launch. Engineered in weeks, not quarters.</Blur>
        <Blur delay={240}><GlassCTA onClick={onTalk}>Start a project</GlassCTA></Blur>
      </div>
    </section>
  );
}

/* ---------------- FEATURES CHESS ---------------- */
function V2Chess() {
  const rows = [
    { title: 'Designed to convert. Built to perform.', body: 'Every decision is intentional. We study what works across production systems, then engineer yours to outperform, from the model to the interface your users touch.', cta: 'Learn more', img: 'assets/mocks/portal-business.webp', flip: false },
    { title: 'It compounds. Automatically.', body: 'Your platform improves as it runs. We instrument every flow, monitor real usage, and optimize continuously, so the system gets better long after launch.', cta: 'See how it works', img: 'assets/regula/featured.jpg', flip: true },
  ];
  return (
    <section style={{ background: '#02060F', padding: 'clamp(72px,9vw,120px) 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Blur style={{ textAlign: 'center', marginBottom: 'clamp(48px,6vw,72px)' }}>
          <Badge>Capabilities</Badge>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4.4vw,52px)', lineHeight: 0.98, letterSpacing: '-0.03em', color: '#fff', margin: '20px 0 0', textWrap: 'balance' }}>Pro features. Zero complexity.</h2>
        </Blur>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,72px)' }}>
          {rows.map((r, i) => (
            <Blur key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'center' }} className="v2-chess">
              <div style={{ order: r.flip ? 2 : 1 }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(24px,2.8vw,36px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 16px' }}>{r.title}</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,.64)', margin: '0 0 26px', maxWidth: 460 }}>{r.body}</p>
                <GlassCTA>{r.cta}</GlassCTA>
              </div>
              <div className="lg" style={{ order: r.flip ? 1 : 2, borderRadius: 18, overflow: 'hidden', aspectRatio: '16 / 11' }}>
                <img src={r.img} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </Blur>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES GRID ---------------- */
function V2Grid() {
  const cards = [
    { icon: 'zap', t: 'Days, not quarters', b: 'Concept to launch at a pace that redefines fast. Because waiting is not a strategy.' },
    { icon: 'pen-tool', t: 'Obsessively engineered', b: 'Every detail considered, every element refined. Software so precise it feels inevitable.' },
    { icon: 'bar-chart-3', t: 'Built to ship', b: 'Decisions backed by data, delivery backed by senior engineers. Outcomes you can measure.' },
    { icon: 'shield', t: 'Secure by default', b: 'Enterprise-grade protection comes standard. Encryption, guardrails, compliance, all included.' },
  ];
  return (
    <section style={{ background: '#02060F', padding: 'clamp(40px,5vw,64px) 32px clamp(72px,9vw,120px)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Blur style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,60px)' }}>
          <Badge>Why us</Badge>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4.4vw,52px)', lineHeight: 0.98, letterSpacing: '-0.03em', color: '#fff', margin: '20px 0 0', textWrap: 'balance' }}>The difference is everything.</h2>
        </Blur>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="v2-grid4">
          {cards.map((c, i) => (
            <Blur key={c.t} delay={i * 70} className="lg" style={{ borderRadius: 18, padding: 'clamp(22px,2.4vw,28px)' }}>
              <span className="lg-strong" style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, color: 'var(--tangerine-400)' }}><i data-lucide={c.icon} style={{ width: 20 }}></i></span>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 19, color: '#fff', margin: '0 0 10px' }}>{c.t}</h3>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'rgba(255,255,255,.6)', margin: 0 }}>{c.b}</p>
            </Blur>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function V2Stats() {
  const stats = [['40+', 'Systems shipped'], ['99.9%', 'Uptime in production'], ['3.5×', 'Faster than in-house'], ['16mo', 'Avg. concept to scale']];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-950)', padding: 'clamp(72px,9vw,120px) 32px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 90% at 50% 0%, rgba(70,76,159,.3), transparent 60%)', pointerEvents: 'none' }} />
      <Blur className="lg" style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', borderRadius: 28, padding: 'clamp(36px,5vw,64px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(24px,3vw,40px)' }} className="v2-grid4">
          {stats.map(([v, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', letterSpacing: '-0.03em', color: '#fff', lineHeight: 1 }}>{v}<span style={{ color: 'var(--tangerine-400)' }}>.</span></div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,.6)', marginTop: 12 }}>{l}</div>
            </div>
          ))}
        </div>
      </Blur>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function V2Testimonials() {
  const items = [
    { q: 'A complete platform in months, not years. The result outperformed everything we had spent far longer building before.', n: 'Priya Anand', r: 'VP Risk, Northwind' },
    { q: 'Conversions and reliability both up. The system simply works differently when it is engineered on real data.', n: 'Marcus Hale', r: 'CMO, Axiom' },
    { q: 'They did not just build our software. They became our team. World-class does not begin to cover it.', n: 'Lena Ortiz', r: 'Head of Data, Heliogen' },
  ];
  return (
    <section style={{ background: '#02060F', padding: 'clamp(72px,9vw,120px) 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Blur style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,60px)' }}>
          <Badge>What they say</Badge>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4.4vw,52px)', lineHeight: 0.98, letterSpacing: '-0.03em', color: '#fff', margin: '20px 0 0', textWrap: 'balance' }}>Don't take our word for it.</h2>
        </Blur>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="v2-grid3">
          {items.map((it, i) => (
            <Blur key={i} delay={i * 80} className="lg" style={{ borderRadius: 18, padding: 'clamp(26px,3vw,34px)', display: 'flex', flexDirection: 'column' }}>
              <i data-lucide="quote" style={{ width: 24, color: 'var(--tangerine-400)', marginBottom: 16 }}></i>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: '0 0 22px', flexGrow: 1 }}>{it.q}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar name={it.n} size={42} ring />
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14.5, color: '#fff' }}>{it.n}</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,.5)' }}>{it.r}</div>
                </div>
              </div>
            </Blur>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function V2Cta({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', padding: 'clamp(80px,11vw,150px) 32px' }}>
      <SignalField />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 110% at 50% 100%, rgba(70,76,159,.5), transparent 62%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, #02060F, transparent)', pointerEvents: 'none' }} />
      <Blur style={{ position: 'relative', zIndex: 10, maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(38px,6vw,76px)', lineHeight: 0.9, letterSpacing: '-0.035em', color: '#fff', margin: '0 0 22px', textWrap: 'balance' }}>Your next system starts here.</h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(16px,2vw,19px)', fontWeight: 300, lineHeight: 1.6, color: 'rgba(255,255,255,.7)', maxWidth: 520, margin: '0 auto 36px' }}>Book a free build review. See what an AI development partner can do. No commitment, no pressure, just possibilities.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <GlassCTA onClick={onTalk}>Book a call</GlassCTA>
          <GlassCTA solid onClick={onTalk}>See our work</GlassCTA>
        </div>
      </Blur>
    </section>
  );
}

Object.assign(window, { V2Hero, V2Start, V2Chess, V2Grid, V2Stats, V2Testimonials, V2Cta });
