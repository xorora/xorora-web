// Xorora — Marketing Services · top (helpers, Hero, How we deliver)
const { useState: useMktState } = React;

/* ---------- shared ---------- */
function MktEyebrow({ children, color, style }) {
  const c = color || 'var(--tangerine-500)';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, ...style }}>
      <span style={{ width: 26, height: 2, background: c, borderRadius: 1 }} />
      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase', color: c }}>{children}</span>
    </div>
  );
}
function MktRule() { return <div style={{ height: 1, background: 'var(--indigo-800)', width: '100%' }} />; }
function MktPara({ size = 120, color = 'rgba(70,76,159,0.08)', style }) {
  return <div aria-hidden="true" style={{ position: 'absolute', width: size, height: size, background: color, transform: 'skewX(-20deg)', pointerEvents: 'none', ...style }} />;
}
function MktBtn({ children, variant = 'primary', onClick, style }) {
  const [h, setH] = useMktState(false);
  const base = { fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 10, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 9, border: 'none', transition: 'all .15s cubic-bezier(.4,0,.2,1)', transform: h ? 'translateY(-1px)' : 'none', ...style };
  const v = {
    primary: { background: 'var(--indigo-500)', color: '#fff', boxShadow: '0 0 32px rgba(70,76,159,0.4)', filter: h ? 'brightness(1.1)' : 'none' },
    tangerine: { background: h ? 'var(--tangerine-600)' : 'var(--tangerine-500)', color: 'var(--xo-ink)', boxShadow: '0 4px 24px rgba(242,107,33,0.3)' },
  };
  return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ ...base, ...v[variant] }}>{children}</button>;
}

/* ============ 1 · HERO ============ */
function MktHero({ onTalk }) {
  const trust = ['AVG 3.1× ROAS IMPROVEMENT', '−47% COST PER LEAD', '+280% ORGANIC REACH'];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(150deg, #0A1230 0%, #15225C 38%, #2347A8 74%, #2C57C9 100%)', marginTop: -72, paddingTop: 72 }}>
      <SignalField style={{ opacity: 0.6 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 90% at 88% 30%, rgba(120,160,255,0.5) 0%, rgba(60,100,220,0.18) 34%, transparent 64%)', pointerEvents: 'none' }} />
      <div className="mkt-wrap" style={{ position: 'relative', zIndex: 5, paddingTop: 'clamp(88px,10vw,132px)', paddingBottom: 'clamp(88px,10vw,132px)' }}>
        <div className="mkt-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }}>
          <div>
            <MktEyebrow style={{ marginBottom: 26 }}>Marketing Services</MktEyebrow>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(40px,5.5vw,68px)', lineHeight: 1.04, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#fff', margin: '0 0 24px' }}>
              We <span style={{ color: 'var(--tangerine-400)' }}>engineer growth.</span> We don't guess at it.
            </h1>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,.82)', maxWidth: 540, margin: '0 0 40px' }}>
              Every channel is a system — instrumented, attributed, and tuned for pipeline, not vanity metrics. We build the conversion architecture that turns audience signal into qualified revenue.
            </p>
            <MktBtn variant="primary" onClick={onTalk}>Engineer my growth <i data-lucide="arrow-right" style={{ width: 17 }}></i></MktBtn>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginTop: 48 }}>
              {trust.map((t, i) => (
                <React.Fragment key={t}>
                  {i > 0 && <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,.28)' }} />}
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.06em', color: 'rgba(255,255,255,.72)' }}>{t}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <MktBenchmarkCard />
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(150,180,255,.5), transparent)' }} />
    </section>
  );
}

function MktBenchmarkCard() {
  const rows = [
    { num: '+312', unit: '%', label: 'Avg organic traffic lift' },
    { num: '4.8', unit: '×', label: 'ROAS on optimized ad spend' },
    { num: '−41', unit: '%', label: 'Cost per qualified lead' },
    { num: '+2.3', unit: '×', label: 'B2B pipeline velocity' },
  ];
  return (
    <div style={{ position: 'relative', borderRadius: 'var(--r-xl)', padding: 'clamp(26px,3vw,36px)', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.22)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', boxShadow: '0 30px 80px -30px rgba(0,0,0,0.6)' }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: 'var(--r-xl)', background: 'linear-gradient(150deg, rgba(255,255,255,0.14), rgba(255,255,255,0) 45%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--tangerine-400)', marginBottom: 5 }}>Benchmark Improvements</div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, color: 'var(--slate-500)', marginBottom: 22 }}>Based on optimized campaign performance</div>
        {rows.map((r, i) => (
          <div key={r.label} style={{ padding: '16px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 42, lineHeight: 1, letterSpacing: '-0.02em', color: '#fff' }}>{r.num}</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 24, color: 'var(--indigo-400)' }}>{r.unit}</span>
            </div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 11, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--slate-400)', marginTop: 8 }}>{r.label}</div>
          </div>
        ))}
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontStyle: 'italic', color: 'var(--slate-600)', marginTop: 18, lineHeight: 1.5 }}>Performance benchmarks from our engineering-led campaigns</div>
      </div>
    </div>
  );
}

/* ============ 2 · HOW WE DELIVER ============ */
function MktDiamondStack({ active }) {
  const cx = 150, rx = 104, ry = 46;
  const cys = [66, 112, 158, 204];
  const path = cy => `M${cx},${cy - ry} L${cx + rx},${cy} L${cx},${cy + ry} L${cx - rx},${cy} Z`;
  const order = [0, 1, 2, 3].filter(i => i !== active).concat(active);
  return (
    <svg viewBox="0 0 300 270" width="100%" style={{ maxWidth: 340, overflow: 'visible' }} aria-hidden="true">
      <defs><linearGradient id="mktDia" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3A63D8" /><stop offset="1" stopColor="#1E3FA8" /></linearGradient></defs>
      {order.map(i => {
        const on = i === active;
        return <path key={i} d={path(cys[i])} fill={on ? 'url(#mktDia)' : 'rgba(70,90,180,0.13)'} stroke={on ? 'none' : 'rgba(70,90,180,0.30)'} strokeWidth="1" style={{ filter: on ? 'drop-shadow(0 14px 22px rgba(40,70,180,0.35))' : 'none', transition: 'fill .25s, stroke .25s' }} />;
      })}
    </svg>
  );
}

function MktDeliver() {
  const [active, setActive] = useMktState(0);
  const steps = [
    { n: '01', name: 'Map', body: 'We instrument your funnel and map audience signal — where demand lives, what converts, and where revenue leaks today. Nothing is optimized before it is measured.' },
    { n: '02', name: 'Architect', body: 'We design the conversion architecture: channels, messaging, tracking, and the offer system that moves intent to pipeline — a blueprint, not a guess.' },
    { n: '03', name: 'Activate', body: 'We launch instrumented campaigns across search, social, and paid. Every asset is tagged, every dollar attributed, every experiment logged.' },
    { n: '04', name: 'Compound', body: 'We optimize on live data — reallocating spend to winners weekly and compounding search equity and pipeline velocity long after launch.' },
  ];
  return (
    <section style={{ background: 'var(--slate-950)', padding: 'clamp(96px,11vw,120px) 0' }}>
      <div className="mkt-wrap">
        <MktEyebrow style={{ marginBottom: 18 }}>How we work</MktEyebrow>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,4vw,46px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 44px', textWrap: 'balance' }}>How we engineer growth.</h2>
        <div className="mkt-deliver-grid" style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'stretch', borderTop: '1px solid var(--indigo-800)' }}>
          <div className="mkt-deliver-visual" style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 36 }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(56px,7vw,96px)', lineHeight: 0.9, letterSpacing: '-0.04em', color: '#fff' }}>{steps[active].n}</div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0 8px' }}><MktDiamondStack active={active} /></div>
          </div>
          <div style={{ borderLeft: '1px solid var(--indigo-800)' }}>
            {steps.map((s, i) => {
              const on = active === i;
              return (
                <div key={i} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}
                  style={{ borderBottom: '1px solid var(--indigo-800)', padding: 'clamp(18px,2vw,24px) clamp(20px,2.4vw,32px)', cursor: 'pointer', background: on ? 'rgba(70,76,159,0.08)' : 'transparent', transition: 'background .18s' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: on ? 'var(--tangerine-400)' : 'var(--slate-500)', transition: 'color .18s' }}>{s.n}</span>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(20px,2.2vw,26px)', letterSpacing: '-0.01em', color: on ? 'var(--indigo-300)' : '#fff', margin: 0, transition: 'color .18s' }}>{s.name}</h3>
                  </div>
                  <div style={{ display: 'grid', gridTemplateRows: on ? '1fr' : '0fr', transition: 'grid-template-rows .3s cubic-bezier(.4,0,.2,1)' }}>
                    <div style={{ overflow: 'hidden' }}>
                      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.65, color: 'var(--slate-400)', margin: 0, paddingTop: 14, paddingLeft: 29, maxWidth: 620 }}>{s.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { MktEyebrow, MktRule, MktPara, MktBtn, MktHero, MktDeliver });
