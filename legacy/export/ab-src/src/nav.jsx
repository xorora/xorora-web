// Xorora homepage — top navigation
const { useState: useNavState } = React;

function NavBar({ onNav, scrolled }) {
  const [open, setOpen] = useNavState(null);
  const light = scrolled;                 // scrolled => light bar + black logo
  const dark = open && !scrolled;         // dropdown open at top => dark bar for legibility
  const linkColor = light ? 'var(--slate-600)' : 'rgba(255,255,255,.72)';
  const linkActive = light ? 'var(--xo-ink)' : '#fff';
  const menus = {
    Services: ['AI & Data Innovation', 'AI Product Engineering', 'Cloud & Security', 'AI Strategy Consulting'],
    Customers: ['Featured work', 'Fintech', 'Healthcare', 'Enterprise'],
    Company: ['About Xorora', 'How we build', 'Careers', 'Contact'],
    Resources: ['Engineering blog', 'Playbooks & guides', 'Case studies', 'Security'],
  };
  return (
    <header
      onMouseLeave={() => setOpen(null)}
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: light ? 'rgba(255,255,255,0.85)' : (dark ? 'rgba(2,6,15,0.82)' : 'transparent'),
        backdropFilter: (light || dark) ? 'blur(14px)' : 'none',
        borderBottom: light ? '1px solid var(--border)' : (dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent'),
        transition: 'all .25s ease',
      }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', gap: 38 }}>
        <a onClick={() => onNav('top')} style={{ cursor: 'pointer' }}><Wordmark height={24} dark={!light} /></a>
        <nav className="xo-desktop-nav" style={{ display: 'flex', gap: 4, marginLeft: 4 }}>
          {Object.keys(menus).map(label => (
            <div key={label} onMouseEnter={() => setOpen(label)} style={{ position: 'relative' }}>
              <button style={{
                display: 'flex', alignItems: 'center', gap: 5, background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 500, padding: '8px 14px',
                color: open === label ? linkActive : linkColor, transition: 'color .15s',
              }}>
                {label}
                <i data-lucide="chevron-down" style={{ width: 15, transform: open === label ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}></i>
              </button>
              {open === label && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, marginTop: 8, minWidth: 248,
                  background: 'var(--navy-800)', border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-xl)', padding: 8,
                  animation: 'xoFade .18s ease',
                }}>
                  {menus[label].map(item => (
                    <a key={item} onClick={() => onNav('top')} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '11px 14px', borderRadius: 'var(--r-md)', cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: 'rgba(255,255,255,.8)',
                      transition: 'background .15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          <a className="xo-desktop-nav" style={{ color: linkColor, display: 'flex', cursor: 'pointer' }}><i data-lucide="search" style={{ width: 19 }}></i></a>
          <Button variant={light ? 'primary' : 'light'} size="sm" onClick={() => onNav('contact')}>Get started</Button>
        </div>
      </div>
    </header>
  );
}

window.NavBar = NavBar;
