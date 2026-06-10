// Xorora homepage — Hero, Services (bento), Stats
const { useState: useTopState, useEffect: useTopEffect } = React;

/* ---------------- HERO ---------------- */
function Hero({ onNav }) {
  const caps = ['AI strategy', 'ML engineering', 'Cloud & security', 'MLOps', 'Data foundations'];
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 80% 0%, rgba(91,141,239,0.32) 0%, rgba(39,85,195,0.10) 30%, rgba(1,12,40,0) 62%)', pointerEvents: 'none' }} />
      <SignalField />
      <XWatermark size={760} color="rgba(120,150,240,0.05)" style={{ top: -160, right: -200 }} />
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '96px 32px 104px', display: 'grid', gridTemplateColumns: '1.25fr 0.95fr', gap: 56, alignItems: 'center', minHeight: 'calc(100vh - 70px)' }} className="xo-hero-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
            <SignalRule />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.18em', color: 'var(--tangerine-400)', textTransform: 'uppercase' }}>Your AI development partner</span>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(42px,5.6vw,74px)', lineHeight: 0.98, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 24px', textWrap: 'balance' }}>
            Reimagine your business with{' '}
            <span style={{ position: 'relative', whiteSpace: 'nowrap', background: 'linear-gradient(120deg, #9398CF, #6B70B6 60%, #FF8A3D)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              AI<span style={{ color: 'var(--tangerine-400)', WebkitTextFillColor: 'var(--tangerine-400)' }}>.</span>
            </span>
          </h1>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 19, lineHeight: 1.6, color: 'rgba(255,255,255,.74)', maxWidth: 500, margin: '0 0 36px' }}>
            Xorora partners with ambitious teams to design, build, and ship production AI — from the first prototype to the system your business runs on.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
            <Button variant="primary" size="lg" onClick={() => onNav('contact')}>Start a project <Chevron size={16} /></Button>
            <Button variant="onDark" size="lg" onClick={() => onNav('top')}>See our work</Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            {caps.map((c, i) => (
              <React.Fragment key={c}>
                {i > 0 && <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,.25)' }} />}
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, color: 'rgba(255,255,255,.6)' }}>{c}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <BuildCard onNav={onNav} />
      </div>
    </div>
  );
}

// Live "build" panel — sells the development-partner identity with technical, mono detail.
function BuildCard({ onNav }) {
  const lines = [
    { t: '$ xorora deploy fraud-model@v2.4', c: 'rgba(255,255,255,.55)' },
    { t: '✓ 1,284 evals passed', c: 'var(--success)' },
    { t: '✓ guardrails active · pii redaction on', c: 'var(--success)' },
    { t: '✓ rollout 100% · 4 regions', c: 'var(--success)' },
    { t: '› p95 latency 38ms · uptime 99.9%', c: 'var(--tangerine-400)' },
  ];
  const [n, setN] = useTopState(0);
  useTopEffect(() => {
    const id = setInterval(() => setN(v => (v + 1) % (lines.length + 4)), 900);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{
      position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden',
      border: '1px solid rgba(255,255,255,.12)', background: 'rgba(10,18,48,0.55)',
      backdropFilter: 'blur(10px)', boxShadow: 'var(--shadow-xl)',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--tangerine-500))' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <span style={{ display: 'flex', gap: 6 }}>
          {['#3A3F86', '#464C9F', '#FF8A3D'].map(c => <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11.5, color: 'rgba(255,255,255,.5)', marginLeft: 6 }}>xorora · production.log</span>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, color: 'var(--success)' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 8px var(--success)' }} /> live
        </span>
      </div>
      <div style={{ padding: '20px 20px 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, lineHeight: 1.9, minHeight: 184 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ color: l.c, opacity: n >= i ? 1 : 0.12, transition: 'opacity .4s ease' }}>{l.t}</div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, padding: '0 20px 20px', height: 56 }}>
        {[40, 62, 48, 78, 56, 88, 70, 96, 64, 84, 58, 92].map((hh, i) => (
          <div key={i} style={{ flex: 1, height: `${hh}%`, borderRadius: 2, background: i % 4 === 3 ? 'var(--tangerine-500)' : 'rgba(110,116,200,0.55)' }} />
        ))}
      </div>
      <div onClick={() => onNav('top')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderTop: '1px solid rgba(255,255,255,.08)', cursor: 'pointer' }}>
        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 600, color: '#fff' }}>Read the 2026 AI report</span>
        <span style={{ color: 'var(--tangerine-400)', display: 'flex' }}><i data-lucide="arrow-up-right" style={{ width: 17 }}></i></span>
      </div>
    </div>
  );
}

/* ---------------- SERVICES (bento) ---------------- */
function ServiceMark({ kind, size = 88 }) {
  const id = 'sg-' + kind;
  return (
    <svg width={size} height={size} viewBox="0 0 92 92" fill="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={id} x1="14" y1="8" x2="78" y2="84" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6B70B6" /><stop offset="0.55" stopColor="#464C9F" /><stop offset="1" stopColor="#2F336B" />
        </linearGradient>
        <radialGradient id={id + '-h'} cx="0.35" cy="0.25" r="0.8">
          <stop stopColor="rgba(255,255,255,0.55)" /><stop offset="0.5" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      {kind === 'spark' && <path d="M46 4 C50 30 62 42 88 46 C62 50 50 62 46 88 C42 62 30 50 4 46 C30 42 42 30 46 4 Z" fill={`url(#${id})`} />}
      {kind === 'ring' && <path d="M46 8 a38 38 0 1 1 -26.9 11.1 l11.3 11.3 A22 22 0 1 0 46 24 Z" fill={`url(#${id})`} />}
      {kind === 'cluster' && <g fill={`url(#${id})`}><circle cx="34" cy="34" r="22" /><circle cx="62" cy="40" r="18" opacity="0.85" /><circle cx="46" cy="62" r="20" opacity="0.92" /></g>}
      {kind === 'blade' && <path d="M26 8 L60 8 L86 46 L60 84 L26 84 L52 46 Z" fill={`url(#${id})`} />}
      <ellipse cx="38" cy="30" rx="30" ry="22" fill={`url(#${id}-h)`} opacity="0.7" style={{ mixBlendMode: 'screen' }} />
    </svg>
  );
}

function Services() {
  const items = [
    { mark: 'spark', no: '01', title: 'AI & Data Innovation', body: 'Applied ML, LLMs, RAG and agents — engineered for your data and your domain. We turn unstructured chaos into a model your business can trust.', big: true },
    { mark: 'ring', no: '02', title: 'Engineering', body: 'Full-stack delivery: model, API, and the interface your users touch.' },
    { mark: 'cluster', no: '03', title: 'Cloud & Security', body: 'Scalable, observable infrastructure with guardrails baked in.' },
    { mark: 'blade', no: '04', title: 'AI Strategy Consulting', body: 'Two-week build reviews that turn ambition into a costed, de-risked roadmap.', wide: true },
  ];
  return (
    <section style={{ background: 'var(--surface)', padding: '110px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, gap: 20, flexWrap: 'wrap' }}>
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>What we engineer</Eyebrow>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(30px,4.2vw,46px)', color: 'var(--fg1)', margin: 0, letterSpacing: '-0.015em' }}>Our services.</h2>
          </div>
          <Button variant="secondary" onClick={() => {}}>View all services <Chevron /></Button>
        </div>
        <div className="xo-bento">
          {items.map(it => <ServiceCard key={it.title} {...it} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ mark, no, title, body, big, wide }) {
  const [hover, setHover] = useTopState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className={big ? 'xo-bento-big' : (wide ? 'xo-bento-wide' : 'xo-bento-cell')}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        background: big ? 'var(--navy-900)' : 'var(--slate-50)',
        border: `1px solid ${big ? 'transparent' : 'var(--border)'}`,
        borderRadius: 'var(--r-lg)', padding: big ? 40 : 28,
        boxShadow: hover ? 'var(--shadow-md)' : 'none',
        transform: hover ? 'translateY(-3px)' : 'none', transition: 'all .25s cubic-bezier(.4,0,.2,1)',
        display: 'flex', flexDirection: 'column',
      }}>
      {big && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 90% at 90% 10%, rgba(91,141,239,0.25), transparent 60%)', pointerEvents: 'none' }} />}
      {big && <XWatermark size={300} color="rgba(120,150,240,0.06)" style={{ bottom: -70, right: -60 }} />}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ transform: hover ? 'translateY(-4px) rotate(-4deg)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }}>
          <ServiceMark kind={mark} size={big ? 104 : 70} />
        </div>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.12em', color: big ? 'rgba(255,255,255,.4)' : 'var(--slate-400)' }}>{no}</span>
      </div>
      <div style={{ position: 'relative', marginTop: 'auto', paddingTop: big ? 36 : 24 }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: big ? 26 : 19, color: big ? '#fff' : 'var(--fg1)', margin: '0 0 10px' }}>{title}</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: big ? 16 : 14.5, lineHeight: 1.55, color: big ? 'rgba(255,255,255,.66)' : 'var(--fg2)', margin: '0 0 16px', maxWidth: big ? 420 : 'none' }}>{body}</p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, color: big ? 'var(--tangerine-400)' : (hover ? 'var(--tangerine-600)' : 'var(--accent)'), transition: 'color .15s' }}>
          Learn more <Chevron />
        </span>
      </div>
    </div>
  );
}

/* ---------------- STATS ---------------- */
function Stats({ onNav }) {
  const stats = [
    { n: '40+', l: 'AI systems shipped to production' },
    { n: '800+', l: 'engineering hours saved monthly' },
    { n: '3.5×', l: 'median speed-up vs. in-house build' },
    { n: '99.9%', l: 'uptime across deployed models' },
  ];
  const clients = ['NORTHWIND', 'AXIOM', 'HELIOGEN', 'QUANTLY', 'VERTEX', 'LUMEN'];
  return (
    <Atmosphere bloom="18% 0%">
      <XWatermark size={620} color="rgba(120,150,240,0.04)" style={{ top: -120, left: -180 }} />
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '100px 32px 84px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'end', marginBottom: 72 }} className="xo-stats-head">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.8vw,42px)', color: '#fff', margin: 0, lineHeight: 1.12, letterSpacing: '-0.015em' }}>
            We're committed to lead your<br/>digital journey to success.
          </h2>
          <div>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.66)', margin: '0 0 20px' }}>
              From the first prototype to production scale, we engineer software that compounds — measurable outcomes, not slideware.
            </p>
            <Button variant="onDark" onClick={() => onNav('contact')}>Work with us <Chevron /></Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 0, paddingBottom: 64, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
          {stats.map((s, i) => (
            <div key={s.l} style={{ padding: '0 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,.1)' }} className="xo-stat-cell">
              <SignalRule color="var(--tangerine-400)" style={{ marginBottom: 18 }} />
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(44px,5.4vw,64px)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: 'rgba(255,255,255,.6)', marginTop: 14, maxWidth: 200 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap', justifyContent: 'center', paddingTop: 48 }}>
          {clients.map(c => <span key={c} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16, letterSpacing: '.05em', color: 'rgba(255,255,255,.4)' }}>{c}</span>)}
        </div>
      </div>
    </Atmosphere>
  );
}

Object.assign(window, { Hero, Services, Stats });
