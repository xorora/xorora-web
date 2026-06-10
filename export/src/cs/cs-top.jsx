// Xorora Case Study — nav, header, meta bar
const { useState: useTopCsState, useEffect: useTopCsEffect } = React;

/* ---------------- NAV (light surface → black logo) ---------------- */
function CSNav({ onCTA }) {
  const [scrolled, setScrolled] = useTopCsState(false);
  useTopCsEffect(() => {
    const onS = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onS); return () => window.removeEventListener('scroll', onS);
  }, []);
  const links = ['Services', 'Industries', 'Clients', 'Company', 'Resources'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.86)', backdropFilter: 'blur(14px)',
      borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      boxShadow: scrolled ? '0 1px 0 rgba(8,8,13,.04), 0 8px 24px -16px rgba(8,8,13,.18)' : 'none',
      transition: 'all .25s ease',
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '15px 32px', display: 'flex', alignItems: 'center', gap: 36 }}>
        <a href="Xorora Homepage.html" style={{ cursor: 'pointer', display: 'flex' }}><Wordmark height={24} /></a>
        <nav className="cs-navlinks" style={{ display: 'flex', gap: 2, marginLeft: 6 }}>
          {links.map(l => (
            <a key={l} style={{
              display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 500,
              padding: '8px 13px', color: 'var(--slate-600)', cursor: 'pointer', borderRadius: 'var(--r-md)', transition: 'color .15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--xo-ink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--slate-600)'}>
              {l}<i data-lucide="chevron-down" style={{ width: 14 }}></i>
            </a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
          <a className="cs-navlinks" style={{ color: 'var(--slate-500)', display: 'flex', cursor: 'pointer' }}><i data-lucide="search" style={{ width: 19 }}></i></a>
          <Button variant="primary" size="sm" onClick={onCTA}>Get in touch <i data-lucide="arrow-up-right" style={{ width: 15 }}></i></Button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HEADER ---------------- */
function Header({ onCTA }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface)' }}>
      <div style={{ position: 'absolute', top: -120, right: -80, width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgba(70,76,159,.10), transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: 'clamp(56px,7vw,92px) 32px clamp(64px,8vw,104px)', display: 'grid', gridTemplateColumns: '1.04fr 0.96fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }} className="cs-header-grid">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 8px 8px 16px', borderRadius: 'var(--r-pill)', border: '1px solid var(--border)', background: '#fff', boxShadow: 'var(--shadow-xs)', marginBottom: 30 }}>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--slate-700)' }}>AI Voice Automation</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.08em', color: 'var(--xo-white)', background: 'var(--xo-indigo)', padding: '4px 10px', borderRadius: 'var(--r-pill)' }}>B2B&nbsp;SaaS</span>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px,5vw,62px)', lineHeight: 1.0, letterSpacing: '-0.025em', color: 'var(--fg1)', margin: '0 0 24px', textWrap: 'balance' }}>
            From fragmented tools to unified <span style={{ color: 'var(--xo-indigo)' }}>AI voice operations<span style={{ color: 'var(--tangerine-500)' }}>.</span></span>
          </h1>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18.5, lineHeight: 1.62, color: 'var(--fg2)', maxWidth: 540, margin: '0 0 36px' }}>
            A B2B AI voice company had powerful voice-agent technology — but no platform to deploy, monitor, and scale it. Xorora engineered four purpose-built portals on one shared backend, turning scattered operations into a commercially-ready product.
          </p>
          <div style={{ display: 'flex', gap: 40, marginBottom: 38, flexWrap: 'wrap' }}>
            {[['4', 'Role-specific portals'], ['16mo', 'Concept to production']].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 42, letterSpacing: '-0.03em', color: 'var(--fg1)', lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, color: 'var(--fg3)', marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
          <Button variant="primary" size="lg" onClick={onCTA}>Get the full case study <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
        </div>
        <div style={{ position: 'relative' }} className="cs-header-art">
          <XWatermark size={300} color="rgba(70,76,159,0.07)" style={{ top: -40, left: -50 }} />
          <BrowserFrame src={window.__resources.portalBusiness} alt="Business portal dashboard" url="app.xorora.ai/dashboard" glow />
          <div style={{ position: 'absolute', bottom: -22, left: -22, display: 'flex', alignItems: 'center', gap: 10, background: 'var(--navy-900)', color: '#fff', padding: '12px 18px', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-lg)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 8px var(--success)' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>4 portals · live in production</span>
          </div>
        </div>
      </div>
      <MetaBar />
    </section>
  );
}

function MetaBar() {
  const meta = [
    ['briefcase', 'Engagement', '16-month build'],
    ['users', 'Team', '4 specialists'],
    ['layout-grid', 'Architecture', 'Multi-portal SaaS'],
    ['rocket', 'Delivery model', '0 → 1, ground-up'],
  ];
  return (
    <div style={{ position: 'relative', background: 'var(--navy-950)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '26px 32px', display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 'clamp(20px,4vw,56px)', flexWrap: 'wrap' }}>
          {meta.map(([ic, k, v]) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <i data-lucide={ic} style={{ width: 18, color: 'var(--tangerine-400)' }}></i>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>{k}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: '#fff', marginTop: 2 }}>{v}</div>
              </div>
            </div>
          ))}
        </div>
        <a style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, color: '#fff', cursor: 'pointer', whiteSpace: 'nowrap' }}>
          Download case study <i data-lucide="download" style={{ width: 16, color: 'var(--tangerine-400)' }}></i>
        </a>
      </div>
    </div>
  );
}

Object.assign(window, { CSNav, Header, MetaBar });
