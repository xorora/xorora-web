// Xorora — shared mega-navigation (floating pill + mega panels)
const { useState: useNavS, useEffect: useNavE, useRef: useNavR } = React;

function MegaNav({ onLetsTalk, current }) {
  const D = window.XO_NAV;
  const [open, setOpen] = useNavS(null);      // 'Services' | 'Industries' | 'Company' | null
  const [scrolled, setScrolled] = useNavS(false);
  const [mobile, setMobile] = useNavS(false);  // mobile menu open
  const closeTimer = useNavR(null);

  useNavE(() => {
    const onS = () => setScrolled(window.scrollY > 40);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);
  // close dropdown on scroll
  useNavE(() => {
    if (!open) return;
    const close = () => setOpen(null);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [open]);

  useNavE(() => { if (window.lucide) lucide.createIcons(); });

  function enter(menu) { clearTimeout(closeTimer.current); setOpen(menu); }
  function leaveAll() { closeTimer.current = setTimeout(() => setOpen(null), 140); }

  const triggers = ['Services', 'Industries', 'Company'];
  const [talkOpen, setTalkOpen] = useNavS(false);
  const openTalk = () => setTalkOpen(true);

  function handleLetsTalk(e) {
    e.preventDefault();
    setTalkOpen(true);
  }

  return (
    <div onMouseLeave={leaveAll} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, pointerEvents: 'none' }}>
      {/* PILL */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '18px 20px 0' }}>
        <div style={{
          pointerEvents: 'auto', width: '100%', maxWidth: 1080, display: 'flex', alignItems: 'center', gap: 12,
          padding: '9px 9px 9px 22px', borderRadius: 'var(--r-pill)',
          background: 'rgba(8,12,30,0.72)', border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 18px 50px -24px rgba(0,0,0,0.7)',
        }}>
          {/* logo: wordmark → X on scroll */}
          <a href="Homepage V2.html" style={{ position: 'relative', display: 'flex', alignItems: 'center', height: 36, width: scrolled ? 40 : 150, transition: 'width .35s cubic-bezier(.4,0,.2,1)', flexShrink: 0 }}>
            <img src="assets/nav-logo-full.png" alt="Xorora" style={{ position: 'absolute', left: 0, height: 28, opacity: scrolled ? 0 : 1, transition: 'opacity .3s ease' }} />
            <img src="assets/nav-logo-x.png" alt="Xorora" style={{ position: 'absolute', left: 0, height: 28, opacity: scrolled ? 1 : 0, transition: 'opacity .3s ease' }} />
          </a>

          {/* desktop links */}
          <nav className="xo-mn-links" style={{ display: 'flex', alignItems: 'center', gap: 2, margin: '0 auto' }}>
            {triggers.map(t => (
              <button key={t} onMouseEnter={() => enter(t)} onClick={() => { if (t === 'Industries') { window.location.href = 'Industries.html'; return; } setOpen(open === t ? null : t); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 500, padding: '9px 15px', borderRadius: 'var(--r-md)',
                  color: open === t ? '#fff' : 'rgba(255,255,255,.74)', transition: 'color .15s',
                }}>
                {t}
                <i data-lucide="chevron-down" style={{ width: 15, transform: open === t ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}></i>
              </button>
            ))}
            <a href={D.caseStudiesHref} onMouseEnter={() => enter(null)}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 500, padding: '9px 15px', borderRadius: 'var(--r-md)', color: current === 'work' ? '#fff' : 'rgba(255,255,255,.74)', textDecoration: 'none', transition: 'color .15s' }}
              onMouseOver={e => e.currentTarget.style.color = '#fff'}
              onMouseOut={e => e.currentTarget.style.color = current === 'work' ? '#fff' : 'rgba(255,255,255,.74)'}>
              Our Work
            </a>
          </nav>

          {/* CTA */}
          <a href="#contact" onClick={handleLetsTalk} className="xo-mn-cta" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0,
            fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, textDecoration: 'none',
            padding: '11px 20px', borderRadius: 'var(--r-pill)', background: '#fff', color: 'var(--xo-ink)',
            transition: 'transform .15s, box-shadow .15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px -8px rgba(255,255,255,.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}>
            Let's Talk <i data-lucide="arrow-up-right" style={{ width: 16 }}></i>
          </a>

          {/* mobile toggle */}
          <button className="xo-mn-burger" onClick={() => setMobile(m => !m)} style={{ display: 'none', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 'var(--r-md)', width: 42, height: 42, cursor: 'pointer', color: '#fff', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i data-lucide={mobile ? 'x' : 'menu'} style={{ width: 20 }}></i>
          </button>
        </div>
      </div>

      {/* MEGA PANEL */}
      {open && (
        <div onMouseEnter={() => clearTimeout(closeTimer.current)} className="xo-mn-panelwrap"
          style={{ display: 'flex', justifyContent: 'center', padding: '10px 20px 0', pointerEvents: 'auto' }}>
          <div style={{
            width: '100%', maxWidth: 1080, background: 'rgba(8,12,30,0.96)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 'var(--r-xl)', boxShadow: '0 40px 90px -30px rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)', overflow: 'hidden', animation: 'xoMnIn .2s cubic-bezier(.16,1,.3,1)',
          }}>
            {open === 'Services' && <ServicesPanel D={D} onPick={() => setOpen(null)} onLetsTalk={openTalk} />}
            {open === 'Industries' && <IndustriesPanel D={D} />}
            {open === 'Company' && <CompanyPanel D={D} onLetsTalk={openTalk} />}
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {mobile && <MobileMenu D={D} onClose={() => setMobile(false)} onLetsTalk={openTalk} />}

      {/* LET'S TALK MODAL */}
      {window.LetsTalkModal && <LetsTalkModal open={talkOpen} onClose={() => setTalkOpen(false)} />}
    </div>
  );
}

/* ---------------- SERVICES PANEL ---------------- */
function ServicesPanel({ D, onPick, onLetsTalk }) {
  return (
    <div className="xo-mn-services" style={{ display: 'grid', gridTemplateColumns: '256px 1fr', minHeight: 360 }}>
      {/* promo */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(165deg, #161D3D 0%, #1F2A63 45%, #2E47AE 82%, #3A57C9 100%)', padding: '34px 30px', display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,.08)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 70% at 0% 100%, rgba(90,125,235,0.45), transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -120, left: -40, width: 320, height: 320, borderRadius: '50%', background: 'repeating-radial-gradient(circle at center, rgba(255,255,255,.34) 0px, rgba(255,255,255,.34) 2.5px, transparent 2.5px, transparent 24px)', opacity: .85 }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <SignalRule color="var(--tangerine-400)" />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.18em', color: 'var(--tangerine-400)' }}>WHAT WE BUILD</span>
          </div>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 24, color: '#fff', margin: '0 0 12px', lineHeight: 1.1, letterSpacing: '-0.01em' }}>Our services.</h3>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.6)', margin: '0 0 24px' }}>
            End-to-end engineering — from the first prototype to the system your business runs on.
          </p>
        </div>
        <a href="#contact" onClick={e => { if (onLetsTalk) { e.preventDefault(); onLetsTalk(); } }} style={{ position: 'relative', marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, color: 'var(--tangerine-400)', textDecoration: 'none' }}>
          Start a project <i data-lucide="arrow-right" style={{ width: 16 }}></i>
        </a>
      </div>
      {/* category grid */}
      <div className="xo-mn-svc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px 8px', padding: '26px 26px' }}>
        {D.services.map(cat => (
          <div key={cat.name} style={{ padding: '8px 10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 12 }}>
              <i data-lucide={cat.icon} style={{ width: 16, color: 'var(--indigo-300)' }}></i>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '.02em', color: '#fff' }}>{cat.name}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {cat.items.map(([label, ic, href]) => (
                <a key={label} href={href || '#contact'} onClick={e => { if (!href) { if (onLetsTalk) { e.preventDefault(); onLetsTalk(); } } onPick(); }}
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,.66)', textDecoration: 'none', padding: '6px 8px', borderRadius: 'var(--r-sm)', transition: 'background .14s, color .14s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,.66)'; }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- INDUSTRIES PANEL ---------------- */
function IndustriesPanel({ D }) {
  return (
    <div className="xo-mn-industries" style={{ display: 'grid', gridTemplateColumns: '1fr 380px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px 10px', padding: '26px 26px' }}>
        {D.industries.map(ind => (
          <a key={ind.name} href={ind.href || '#contact'} onClick={e => { if (!ind.href) e.preventDefault(); }}
            style={{ display: 'flex', gap: 13, padding: '12px 12px', borderRadius: 'var(--r-md)', textDecoration: 'none', transition: 'background .14s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.05)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.25)', border: '1px solid rgba(120,150,240,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)' }}>
              <i data-lucide={ind.icon} style={{ width: 19 }}></i>
            </span>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: '#fff', marginBottom: 3 }}>{ind.name}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, lineHeight: 1.45, color: 'rgba(255,255,255,.55)' }}>{ind.desc}</div>
            </div>
          </a>
        ))}
      </div>
      {/* featured */}
      <a href={D.featured.href} style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none', background: 'linear-gradient(135deg, #161D3D 0%, #1F2A63 42%, #2E47AE 78%, #3A57C9 100%)', borderLeft: '1px solid rgba(255,255,255,.08)', padding: '26px 26px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 80% at 100% 60%, rgba(90,125,235,0.45), transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.16em', color: 'var(--tangerine-400)', marginBottom: 14 }}>{D.featured.tag}</span>
          <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,.12)', marginBottom: 16 }}>
            <img src={D.featured.img} alt="" style={{ display: 'block', width: '100%', height: 116, objectFit: 'cover', objectPosition: 'top left' }} />
          </div>
          <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', margin: '0 0 8px', lineHeight: 1.25 }}>{D.featured.title}</h4>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,.6)', margin: '0 0 16px' }}>{D.featured.desc}</p>
          <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 600, color: 'var(--tangerine-400)' }}>
            Read case study <i data-lucide="arrow-up-right" style={{ width: 15 }}></i>
          </span>
        </div>
      </a>
    </div>
  );
}

/* ---------------- COMPANY PANEL ---------------- */
function CompanyPanel({ D, onLetsTalk }) {
  return (
    <div className="xo-mn-company" style={{ display: 'grid', gridTemplateColumns: '1fr 340px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px 10px', padding: '26px 26px' }}>
        {D.company.map(c => (
          <a key={c.name} href={c.href || '#'} onClick={e => { if (!c.href) e.preventDefault(); }}
            style={{ display: 'flex', gap: 13, padding: '14px 12px', borderRadius: 'var(--r-md)', textDecoration: 'none', transition: 'background .14s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.05)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.25)', border: '1px solid rgba(120,150,240,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)' }}>
              <i data-lucide={c.icon} style={{ width: 19 }}></i>
            </span>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: '#fff', marginBottom: 3 }}>{c.name}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, lineHeight: 1.45, color: 'rgba(255,255,255,.55)' }}>{c.desc}</div>
            </div>
          </a>
        ))}
      </div>
      {/* book a meeting CTA */}
      <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, #161D3D 0%, #1F2A63 42%, #2E47AE 78%, #3A57C9 100%)', borderLeft: '1px solid rgba(255,255,255,.08)', padding: '30px 28px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 80% at 100% 60%, rgba(90,125,235,0.45), transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <i data-lucide="calendar-check" style={{ width: 26, color: '#fff', marginBottom: 16 }}></i>
          <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 21, color: '#fff', margin: '0 0 10px', lineHeight: 1.15, letterSpacing: '-0.01em' }}>Book a meeting with our team.</h4>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,.78)', margin: '0 0 22px' }}>
            A 30-minute build review — we'll pressure-test your idea and map the path to production.
          </p>
          <a href="#contact" onClick={e => { if (onLetsTalk) { e.preventDefault(); onLetsTalk(); } }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, textDecoration: 'none', padding: '11px 20px', borderRadius: 'var(--r-pill)', background: '#fff', color: 'var(--xo-ink)' }}>
            Book a call <i data-lucide="arrow-up-right" style={{ width: 15 }}></i>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- MOBILE MENU ---------------- */
function MobileMenu({ D, onClose, onLetsTalk }) {
  const [sec, setSec] = useNavS(null);
  useNavE(() => { if (window.lucide) lucide.createIcons(); });
  const Section = ({ id, children }) => (
    <button onClick={() => setSec(sec === id ? null : id)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,.08)', cursor: 'pointer', padding: '16px 4px', fontFamily: 'Poppins, sans-serif', fontSize: 17, fontWeight: 600, color: '#fff' }}>
      {children}<i data-lucide="chevron-down" style={{ width: 18, transform: sec === id ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}></i>
    </button>
  );
  const sub = (label) => (
    <a key={label} href="#contact" onClick={e => { if (onLetsTalk) { e.preventDefault(); onLetsTalk(); } onClose(); }} style={{ display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: 'rgba(255,255,255,.66)', textDecoration: 'none', padding: '9px 8px' }}>{label}</a>
  );
  return (
    <div className="xo-mn-mobile" style={{ pointerEvents: 'auto', margin: '10px 20px 0', maxHeight: 'calc(100vh - 120px)', overflowY: 'auto', background: 'rgba(8,12,30,0.98)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-xl)', padding: '12px 20px 24px', boxShadow: '0 40px 90px -30px rgba(0,0,0,0.8)' }}>
      <Section id="Services">Services</Section>
      {sec === 'Services' && <div style={{ padding: '8px 0 14px' }}>{D.services.map(c => (
        <div key={c.name} style={{ marginBottom: 10 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.1em', color: 'var(--tangerine-400)', padding: '6px 8px' }}>{c.name.toUpperCase()}</div>
          {c.items.map(([l, ic, href]) => href
            ? <a key={l} href={href} onClick={onClose} style={{ display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: 14, color: 'rgba(255,255,255,.6)', textDecoration: 'none', padding: '8px 8px' }}>{l}</a>
            : sub(l))}
        </div>
      ))}</div>}
      <Section id="Industries">Industries</Section>
      {sec === 'Industries' && <div style={{ padding: '8px 0 14px' }}><a href="Industries.html" onClick={onClose} style={{ display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: 'var(--tangerine-400)', textDecoration: 'none', padding: '9px 8px' }}>All industries</a>{D.industries.map(i => i.href
        ? <a key={i.name} href={i.href} onClick={onClose} style={{ display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: 'rgba(255,255,255,.66)', textDecoration: 'none', padding: '9px 8px' }}>{i.name}</a>
        : sub(i.name))}</div>}
      <Section id="Company">Company</Section>
      {sec === 'Company' && <div style={{ padding: '8px 0 14px' }}>{D.company.map(c => c.href
        ? <a key={c.name} href={c.href} onClick={onClose} style={{ display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: 'rgba(255,255,255,.66)', textDecoration: 'none', padding: '9px 8px' }}>{c.name}</a>
        : sub(c.name))}</div>}
      <a href={D.caseStudiesHref} style={{ display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: 17, fontWeight: 600, color: '#fff', textDecoration: 'none', padding: '16px 4px', borderBottom: '1px solid rgba(255,255,255,.08)' }}>Our Work</a>
      <a href="#contact" onClick={e => { if (onLetsTalk) { e.preventDefault(); onLetsTalk(); } onClose(); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 18, fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 600, textDecoration: 'none', padding: '14px 20px', borderRadius: 'var(--r-pill)', background: '#fff', color: 'var(--xo-ink)' }}>
        Let's Talk <i data-lucide="arrow-up-right" style={{ width: 16 }}></i>
      </a>
    </div>
  );
}

window.MegaNav = MegaNav;
