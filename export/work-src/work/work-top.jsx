// Xorora — "Our Work" case studies index page
const { useState: useWorkState, useEffect: useWorkFx, useRef: useWorkRef } = React;

/* ---------------- NAV ---------------- */
function WorkNav({ onCTA }) {
  const [scrolled, setScrolled] = useWorkState(false);
  useWorkFx(() => {
    const onS = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onS); return () => window.removeEventListener('scroll', onS);
  }, []);
  const links = ['Services', 'Industries', 'Clients', 'Company', 'Resources'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: scrolled ? 'rgba(2,6,15,0.82)' : 'transparent', backdropFilter: scrolled ? 'blur(14px)' : 'none', borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,.08)' : 'transparent'}`, transition: 'all .25s ease' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', gap: 38 }}>
        <a href="Xorora Homepage.html" style={{ cursor: 'pointer', display: 'flex' }}><Wordmark height={24} dark /></a>
        <nav className="cs-navlinks" style={{ display: 'flex', gap: 2, marginLeft: 4 }}>
          {links.map(l => (
            <a key={l} style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 500, padding: '8px 13px', color: 'rgba(255,255,255,.7)', cursor: 'pointer', transition: 'color .15s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.7)'}>
              {l}<i data-lucide="chevron-down" style={{ width: 14 }}></i>
            </a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          <a className="cs-navlinks" style={{ color: 'rgba(255,255,255,.7)', display: 'flex', cursor: 'pointer' }}><i data-lucide="search" style={{ width: 19 }}></i></a>
          <Button variant="light" size="sm" onClick={onCTA}>Get in touch <i data-lucide="arrow-up-right" style={{ width: 15 }}></i></Button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HEADER ---------------- */
function WorkHeader() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', marginTop: -72, paddingTop: 72 }}>
      <TechField />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 80% at 50% -10%, rgba(91,141,239,0.28) 0%, rgba(39,85,195,0.10) 32%, rgba(1,12,40,0) 62%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(1,12,40,0.35) 0%, rgba(1,12,40,0) 30%, rgba(1,12,40,0.55) 100%)', pointerEvents: 'none' }} />
      <XWatermark size={720} color="rgba(120,150,240,0.05)" style={{ top: -180, right: -160 }} />
      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: 'clamp(80px,10vw,140px) 32px clamp(72px,8vw,104px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
          <SignalRule color="var(--tangerine-400)" />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--tangerine-400)' }}>Case Studies</span>
          <SignalRule color="var(--tangerine-400)" style={{ transform: 'scaleX(-1)' }} />
        </div>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(44px,7vw,92px)', lineHeight: 0.98, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 24px', textWrap: 'balance' }}>
          Our work<span style={{ color: 'var(--tangerine-400)' }}>.</span>
        </h1>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.6, color: 'rgba(255,255,255,.72)', maxWidth: 600, margin: '0 auto' }}>
          Production AI and software, engineered end-to-end. A look at what we've built with ambitious teams — from the first prototype to the system their business runs on.
        </p>
      </div>
    </div>
  );
}

/* ---------------- TILES ---------------- */
function WorkTiles() {
  const studies = [
    {
      href: 'Unified AI Voice Operations Case Study.html',
      img: window.__resources.tileVoice,
      tags: ['AI Voice', 'B2B SaaS'],
      title: 'From fragmented tools to unified AI voice operations',
      desc: 'Four purpose-built portals on one shared backend turned a powerful voice-agent technology into a commercially-ready product.',
      stats: [['4', 'role-based portals'], ['16mo', 'to production']],
    },
    {
      href: 'Regula Case Study.html',
      img: window.__resources.tileRegula,
      tags: ['RegTech', 'FinTech'],
      title: 'Real-time compliance intelligence for emerging markets',
      desc: 'An automation-first platform that monitors regulators continuously, scores business impact, and alerts compliance teams in under an hour.',
      stats: [['70%', 'less workload'], ['<1hr', 'change detection']],
    },
    {
      href: 'PingPanda Case Study.html',
      img: window.__resources.tilePingpanda,
      tags: ['SaaS', 'Real-time'],
      title: 'Real-time SaaS event monitoring, from blind spots to instant visibility',
      desc: 'An API-first event notifier — send a typed event, get an instant Discord alert with full context. No dashboards, no blind spots.',
      stats: [['Real-time', 'event delivery'], ['13mo', 'to production']],
    },
  ];
  return (
    <section style={{ background: 'var(--surface)', padding: 'clamp(64px,8vw,104px) 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 28 }} className="work-tiles">
          {studies.map(s => <WorkTile key={s.href} {...s} />)}
        </div>
      </div>
    </section>
  );
}

function WorkTile({ href, img, tags, title, desc, stats }) {
  const [hover, setHover] = useWorkState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', textDecoration: 'none', cursor: 'pointer',
        background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-xs)', transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'all .25s cubic-bezier(.4,0,.2,1)',
      }}>
      {/* preview */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', padding: '22px 22px 0' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 80% at 80% 0%, rgba(91,141,239,0.28), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', borderRadius: '10px 10px 0 0', overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)', borderBottom: 'none', boxShadow: '0 -10px 40px rgba(2,6,15,.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 12px', background: '#070D22' }}>
            {['#FF5F57', '#FEBC2E', '#28C840'].map(c => <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: .9 }} />)}
          </div>
          <img src={img} alt={title} style={{ display: 'block', width: '100%', height: 200, objectFit: 'cover', objectPosition: 'top left', transform: hover ? 'scale(1.03)' : 'none', transition: 'transform .4s cubic-bezier(.16,1,.3,1)' }} />
        </div>
      </div>
      {/* body */}
      <div style={{ padding: 'clamp(24px,2.5vw,30px)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
          {tags.map(t => (
            <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.06em', color: 'var(--slate-600)', background: 'var(--slate-100)', borderRadius: 'var(--r-sm)', padding: '5px 11px' }}>{t}</span>
          ))}
        </div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(20px,1.6vw,23px)', lineHeight: 1.22, letterSpacing: '-0.01em', color: 'var(--fg1)', margin: '0 0 12px' }}>{title}</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--fg2)', margin: '0 0 24px' }}>{desc}</p>

        {/* stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 'auto', marginBottom: 24 }}>
          {stats.map(([v, l]) => (
            <div key={l} style={{ borderTop: '2px solid var(--indigo-100)', paddingTop: 12 }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(22px,2vw,28px)', letterSpacing: '-0.02em', color: 'var(--xo-indigo)', lineHeight: 1 }}>{v}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'var(--fg3)', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 18, borderTop: '1px solid var(--border)' }}>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: hover ? 'var(--tangerine-600)' : 'var(--accent)', transition: 'color .15s' }}>Read case study</span>
          <span style={{ width: 36, height: 36, borderRadius: '50%', background: hover ? 'var(--xo-indigo)' : 'var(--indigo-50)', color: hover ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s', transform: hover ? 'translateX(2px)' : 'none' }}>
            <i data-lucide="arrow-up-right" style={{ width: 18 }}></i>
          </span>
        </div>
      </div>
    </a>
  );
}

Object.assign(window, { WorkNav, WorkHeader, WorkTiles });
