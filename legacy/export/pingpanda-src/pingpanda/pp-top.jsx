// PingPanda Case Study — nav, header, meta bar
const { useState: usePpTop, useEffect: usePpTopFx } = React;

function PpNav({ onCTA }) {
  const [scrolled, setScrolled] = usePpTop(false);
  usePpTopFx(() => {
    const onS = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onS); return () => window.removeEventListener('scroll', onS);
  }, []);
  const links = ['Services', 'Industries', 'Clients', 'Company', 'Resources'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.86)', backdropFilter: 'blur(14px)', borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`, boxShadow: scrolled ? '0 1px 0 rgba(8,8,13,.04), 0 8px 24px -16px rgba(8,8,13,.18)' : 'none', transition: 'all .25s ease' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '15px 32px', display: 'flex', alignItems: 'center', gap: 36 }}>
        <a href="Xorora Homepage.html" style={{ cursor: 'pointer', display: 'flex' }}><Wordmark height={24} /></a>
        <nav className="cs-navlinks" style={{ display: 'flex', gap: 2, marginLeft: 6 }}>
          {links.map(l => (
            <a key={l} style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 500, padding: '8px 13px', color: 'var(--slate-600)', cursor: 'pointer', borderRadius: 'var(--r-md)', transition: 'color .15s' }}
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

function PpHeader({ onCTA }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${window.__resources.headerBg})`, backgroundSize: 'cover', backgroundPosition: 'center right', opacity: 0.6, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(1,12,40,0.97) 0%, rgba(1,12,40,0.84) 38%, rgba(1,12,40,0.34) 66%, rgba(1,12,40,0.6) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(1,12,40,0.4) 0%, rgba(1,12,40,0) 24%, rgba(2,6,15,0.85) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: 'clamp(60px,7vw,96px) 32px clamp(68px,8vw,108px)', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }} className="cs-header-grid">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 8px 8px 16px', borderRadius: 'var(--r-pill)', border: '1px solid rgba(255,255,255,.18)', background: 'rgba(255,255,255,.06)', backdropFilter: 'blur(6px)', marginBottom: 28 }}>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.9)' }}>SaaS Monitoring · Real-Time Analytics</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.08em', color: 'var(--xo-white)', background: 'var(--xo-indigo)', padding: '4px 10px', borderRadius: 'var(--r-pill)' }}>API-First</span>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(34px,4.7vw,60px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 24px', textWrap: 'balance' }}>
            Real-time SaaS event monitoring. <span style={{ background: 'linear-gradient(100deg, #C3C6EC, #6F74C9 52%, #FF8A3D)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>From blind spots to instant visibility<span style={{ color: 'var(--tangerine-400)', WebkitTextFillColor: 'var(--tangerine-400)' }}>.</span></span>
          </h1>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, lineHeight: 1.62, color: 'rgba(255,255,255,.74)', maxWidth: 540, margin: '0 0 32px' }}>
            SaaS teams move fast — but without real-time visibility, they always react late. Xorora built a lightweight, API-first event notifier: ingest a typed event, get an instant Discord alert with full context. No dashboards to configure, no blind spots.
          </p>
          <div style={{ display: 'flex', gap: 36, marginBottom: 36, flexWrap: 'wrap' }}>
            {[['Real-time', 'Ingestion to alert'], ['0 → 1', 'Built from scratch'], ['13mo', 'Concept to production']].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 34, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,.55)', marginTop: 8, maxWidth: 150 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={onCTA}>Get the full case study <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            <Button variant="onDark" size="lg" onClick={onCTA}>Talk to us</Button>
          </div>
        </div>
        <div style={{ position: 'relative' }} className="cs-header-art">
          <BrowserFrame src={window.__resources.mockDashboard} alt="PingPanda event category dashboard" url="app.pingpanda.io/dashboard" glow />
          <div style={{ position: 'absolute', bottom: -22, left: -22, display: 'flex', alignItems: 'center', gap: 10, background: 'var(--navy-950)', color: '#fff', padding: '12px 18px', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,255,255,.12)', boxShadow: 'var(--shadow-lg)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 8px var(--success)' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>listening to incoming events…</span>
          </div>
        </div>
      </div>
      <PpMetaBar />
    </section>
  );
}

function PpMetaBar() {
  const meta = [
    ['activity', 'Domain', 'SaaS · Real-time analytics'],
    ['terminal', 'Product', 'API-first event notifier'],
    ['calendar', 'Engagement', '13-month build'],
    ['rocket', 'Delivery model', '0 → Production SaaS'],
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
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 600, color: 'rgba(255,255,255,.85)', whiteSpace: 'nowrap' }}>
          <i data-lucide="user" style={{ width: 15, color: 'var(--tangerine-400)' }}></i> Founder-led build
        </span>
      </div>
    </div>
  );
}

Object.assign(window, { PpNav, PpHeader, PpMetaBar });
