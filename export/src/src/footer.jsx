// Xorora homepage — footer
const { useState: useFootState } = React;

/* ---------------- PRE-FOOTER BRAND CTA ---------------- */
function FinalCTA({ onNav }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-950)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 120% at 50% 120%, rgba(70,76,159,0.45), transparent 60%)', pointerEvents: 'none' }} />
      <XWatermark size={900} color="rgba(120,150,240,0.05)" style={{ bottom: -380, left: '50%', transform: 'translateX(-50%)' }} />
      <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto', padding: '128px 32px 120px', textAlign: 'center' }}>
        <SignalRule color="var(--tangerine-400)" style={{ justifyContent: 'center', marginBottom: 28 }} />
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(40px,6.5vw,88px)', lineHeight: 0.98, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 28px', textWrap: 'balance' }}>
          Let's engineer<br/>what's next.
        </h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 19, lineHeight: 1.6, color: 'rgba(255,255,255,.66)', maxWidth: 540, margin: '0 auto 40px' }}>
          Book a build review. We'll pressure-test your idea and map the fastest path to production.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" onClick={() => onNav('contact')}>Book a build review <Chevron size={16} /></Button>
          <Button variant="onDark" size="lg" onClick={() => onNav('top')}>See our work</Button>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  // Service columns mirror the header mega-nav; arranged so each grid row is height-balanced.
  const cols = [
    { h: 'Engineering', href: 'Engineering.html', items: [{ label: 'AI Software Development', href: 'Engineering.html' }, { label: 'Custom App Development', href: 'Engineering.html' }, { label: 'Application Modernization', href: 'Engineering.html' }, { label: 'MVP / POC Development', href: 'Engineering.html' }, { label: 'CMS Development Services', href: 'Engineering.html' }, { label: 'UI/UX Services', href: 'Engineering.html' }] },
    { h: 'Data & AI', href: 'Data & AI.html', items: [{ label: 'Data Analytics', href: 'Data & AI.html' }, { label: 'Data Engineering', href: 'Data & AI.html' }, { label: 'Cloud Engineering & Migration', href: 'Data & AI.html' }, { label: 'AI Agent Development', href: 'Data & AI.html' }, { label: 'ML & Data Science Services', href: 'Data & AI.html' }, { label: 'Workflow Automation Services', href: 'Data & AI.html' }] },
    { h: 'Marketing Services', href: 'Marketing Services.html', items: [{ label: 'SEO', href: 'Marketing Services.html' }, { label: 'Local SEO', href: 'Marketing Services.html' }, { label: 'Google Ads', href: 'Marketing Services.html' }, { label: 'Meta Ads', href: 'Marketing Services.html' }, { label: 'Social Media Management', href: 'Marketing Services.html' }, { label: 'B2B Marketing', href: 'Marketing Services.html' }] },
    { h: 'Industries', items: [{ label: 'Healthcare', href: 'Health Tech.html' }, { label: 'Real Estate', href: 'Real Estate.html' }, { label: 'Fintech', href: 'Fintech.html' }, { label: 'E-commerce', href: 'Ecommerce.html' }, { label: 'Edtech', href: 'Edtech.html' }, { label: 'Logistics', href: 'Logistics.html' }, { label: 'SaaS', href: 'SaaS.html' }, { label: 'Startups', href: 'Startups.html' }, { label: 'Travel & Hospitality', href: 'Travel & Hospitality.html' }] },
    { h: 'Consulting', href: 'Consulting.html', items: [{ label: 'Discovery Workshop', href: 'Consulting.html' }, { label: 'AI Consulting', href: 'Consulting.html' }, { label: 'Digital Transformation', href: 'Consulting.html' }] },
    { h: 'Managed Services', href: 'Managed Services.html', items: [{ label: 'DevOps', href: 'Managed Services.html' }, { label: 'Cybersecurity', href: 'Managed Services.html' }, { label: 'IT Infrastructure', href: 'Managed Services.html' }] },
    { h: 'Engagement Model', href: 'Engagement Models.html', items: [{ label: 'Fixed Scope', href: 'Engagement Models.html' }, { label: 'Variable Scope', href: 'Engagement Models.html' }, { label: 'Staff Augmentation', href: 'Engagement Models.html' }] },
    { h: 'Company', items: ['About Us', 'Blogs', 'How we Work', { label: 'Our Work', href: 'Our Work.html' }, { label: 'Contact us', action: 'contact' }] },
  ];
  const offices = [
    { city: 'San Francisco', addr: '548 Market St, Suite 200, CA 94104' },
    { city: 'London', addr: '1 Finsbury Avenue, EC2M 2PF' },
    { city: 'Singapore', addr: '9 Battery Road, 049910' },
  ];
  const linkStyle = { fontFamily: 'Poppins, sans-serif', fontSize: 14, color: 'rgba(255,255,255,.6)', textDecoration: 'none', cursor: 'pointer', transition: 'color .15s', width: 'fit-content' };
  const onIn = e => e.currentTarget.style.color = 'var(--tangerine-400)';
  const onOut = e => e.currentTarget.style.color = 'rgba(255,255,255,.6)';
  return (
    <footer style={{ background: 'var(--navy-950)', borderTop: '1px solid rgba(255,255,255,.07)' }}>
      <style>{`
        @media (max-width: 900px){ .xo-footer-grid{ grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 520px){ .xo-footer-grid{ grid-template-columns: 1fr !important; } }
      `}</style>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '72px 32px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '44px 40px' }} className="xo-footer-grid">
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '.04em', color: '#fff', marginBottom: 18 }}>{c.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.items.map(it => {
                  const label = typeof it === 'string' ? it : it.label;
                  if (it.href) {
                    return <a key={label} href={it.href} style={linkStyle} onMouseEnter={onIn} onMouseLeave={onOut}>{label}</a>;
                  }
                  return <a key={label} onClick={() => onNav(it.action || 'top')} style={linkStyle} onMouseEnter={onIn} onMouseLeave={onOut}>{label}</a>;
                })}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'center', margin: '56px 0', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,.08)', borderBottom: '1px solid rgba(255,255,255,.08)' }} className="xo-foot-news">
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 8px', letterSpacing: '-0.01em' }}>Engineered insights, monthly.</div>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: 'rgba(255,255,255,.6)', margin: 0 }}>Field notes on shipping production AI. No hype.</p>
          </div>
          <Newsletter />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginBottom: 48 }} className="xo-foot-offices">
          {offices.map(o => (
            <div key={o.city}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <i data-lucide="map-pin" style={{ width: 15, color: 'var(--tangerine-400)' }}></i>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#fff' }}>{o.city}</span>
              </div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.5 }}>{o.addr}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, paddingTop: 36, borderTop: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
            <Wordmark height={22} dark />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,.4)' }}>© 2026 Xorora · All rights reserved</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
            <a style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,.5)', textDecoration: 'none', cursor: 'pointer' }}>Privacy</a>
            <a style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,.5)', textDecoration: 'none', cursor: 'pointer' }}>Terms</a>
            <div style={{ display: 'flex', gap: 14 }}>
              {['globe', 'mail', 'rss'].map(s => (
                <a key={s} style={{ color: 'rgba(255,255,255,.55)', cursor: 'pointer', display: 'flex', transition: 'color .15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.55)'}>
                  <i data-lucide={s} style={{ width: 18 }}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Newsletter() {
  const [val, setVal] = useFootState('');
  const [sent, setSent] = useFootState(false);
  const [focus, setFocus] = useFootState(false);
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {sent ? (
        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'var(--tangerine-400)', display: 'flex', alignItems: 'center', gap: 8 }}><i data-lucide="check" style={{ width: 18 }}></i> Subscribed — thank you.</span>
      ) : (
        <React.Fragment>
          <input value={val} onChange={e => setVal(e.target.value)} placeholder="Your work email"
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            style={{ flex: 1, minWidth: 180, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, padding: '12px 15px', borderRadius: 'var(--r-md)', border: `1px solid ${focus ? 'var(--tangerine-500)' : 'rgba(255,255,255,.18)'}`, background: 'rgba(255,255,255,.05)', color: '#fff', outline: 'none', boxShadow: focus ? 'var(--shadow-focus)' : 'none' }} />
          <Button variant="primary" onClick={() => val && setSent(true)}>Subscribe</Button>
        </React.Fragment>
      )}
    </div>
  );
}

Object.assign(window, { Footer, Newsletter, FinalCTA });
