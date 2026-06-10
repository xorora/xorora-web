// Xorora Case Study — Architecture ("How it was built")
const { useState: useArchState } = React;

// horizontal bus + vertical stubs under each column (auto-aligns to grid)
function Fan({ cols, edge }) {
  return (
    <div className="cs-fan" style={{ position: 'relative', height: 46 }}>
      <div style={{ position: 'absolute', top: 22, left: `${edge}%`, right: `${edge}%`, height: 2, background: 'linear-gradient(90deg, rgba(110,120,210,.15), rgba(110,120,210,.55), rgba(110,120,210,.15))' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)` }}>
        {Array.from({ length: cols }).map((_, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 2, height: 22, background: 'rgba(110,120,210,.5)' }} />
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%)', width: 2, height: 24, background: 'rgba(110,120,210,.5)' }} />
    </div>
  );
}

function Stub() {
  return <div className="cs-fan" style={{ display: 'flex', justifyContent: 'center', height: 30 }}><div style={{ width: 2, height: '100%', background: 'rgba(110,120,210,.5)' }} /></div>;
}

function PortalNode({ icon, name, role, tech }) {
  const [h, setH] = useArchState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,.035)', border: `1px solid ${h ? 'rgba(120,150,240,.5)' : 'rgba(255,255,255,.12)'}`, borderRadius: 'var(--r-lg)', padding: '22px 20px', transition: 'border-color .2s, transform .2s', transform: h ? 'translateY(-3px)' : 'none' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--indigo-700))' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14 }}>
        <span style={{ width: 40, height: 40, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.25)', border: '1px solid rgba(120,150,240,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)' }}>
          <i data-lucide={icon} style={{ width: 20 }}></i>
        </span>
        <div>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', lineHeight: 1.1 }}>{name}</div>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: 'rgba(255,255,255,.5)', marginTop: 2 }}>{role}</div>
        </div>
      </div>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.04em', color: 'rgba(255,255,255,.4)' }}>{tech}</div>
    </div>
  );
}

function ServiceNode({ icon, name, items }) {
  return (
    <div style={{ background: 'rgba(255,255,255,.035)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: '20px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <i data-lucide={icon} style={{ width: 18, color: 'var(--tangerine-400)' }}></i>
        <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: '#fff' }}>{name}</span>
      </div>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, lineHeight: 1.7, color: 'rgba(255,255,255,.5)' }}>{items}</div>
    </div>
  );
}

function Architecture() {
  const portals = [
    { icon: 'layout-dashboard', name: 'Business', role: 'Operations & config', tech: 'React · TS · Vite SPA' },
    { icon: 'trending-up', name: 'Sales', role: 'CRM & revenue', tech: 'React · TS · Vite SPA' },
    { icon: 'terminal', name: 'Developer', role: 'API & system control', tech: 'React · TS · Vite SPA' },
    { icon: 'flask-conical', name: 'Testing', role: 'QA & pre-deploy', tech: 'React · TS · Vite SPA' },
  ];
  const services = [
    { icon: 'shield-check', name: 'Auth & Access', items: 'OTP flows · RBAC\nper-portal scopes' },
    { icon: 'database', name: 'State & Data', items: 'Redux Toolkit · RTK Query\nreact-hook-form · Zod' },
    { icon: 'credit-card', name: 'Billing', items: 'Stripe subscriptions\nunified across portals' },
  ];
  const integ = [
    { icon: 'phone-call', name: 'Twilio' }, { icon: 'audio-lines', name: 'Vapi' },
    { icon: 'map', name: 'Mapbox' }, { icon: 'globe', name: 'IP Geolocation' },
    { icon: 'file-text', name: 'Documso' }, { icon: 'image', name: 'ImgBB' },
  ];
  return (
    <DarkSection bloom="50% 12%" id="architecture">
      <SectionHead label="How it was built" title="One architecture. Four front doors." sub="Four independent React + TypeScript + Vite SPAs — one per role — each a standalone deployment sharing a single REST backend, billing layer, and support infrastructure." onDark style={{ marginBottom: 56 }} />

      <div style={{ position: 'relative', overflow: 'hidden', background: 'rgba(3,9,24,.5)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(24px,3.5vw,48px)' }}>
        <XWatermark size={420} color="rgba(120,150,240,0.05)" style={{ bottom: -160, right: -120 }} />
        <div style={{ position: 'relative' }}>
          <Tier label="Client — role-based single-page apps" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }} className="cs-arch-portals">
            {portals.map(p => <PortalNode key={p.name} {...p} />)}
          </div>

          <Fan cols={4} edge={12.5} />

          {/* gateway */}
          <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(100deg, var(--indigo-700), var(--indigo-500))', borderRadius: 'var(--r-lg)', padding: '22px 28px', display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center', boxShadow: 'var(--glow-indigo)' }}>
            <i data-lucide="server" style={{ width: 24, color: '#fff' }}></i>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', letterSpacing: '-0.01em' }}>Unified REST API · Shared Backend</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11.5, color: 'rgba(255,255,255,.75)', marginTop: 4 }}>environment-configured endpoints · one backbone for all portals</div>
            </div>
          </div>

          <Stub />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }} className="cs-arch-services">
            {services.map(s => <ServiceNode key={s.name} {...s} />)}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '34px 0 24px' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.18em', color: 'rgba(255,255,255,.45)' }}>EXTERNAL INTEGRATIONS</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {integ.map(it => (
              <span key={it.name} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, color: 'rgba(255,255,255,.8)', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-pill)', padding: '9px 16px' }}>
                <i data-lucide={it.icon} style={{ width: 15, color: 'var(--indigo-300)' }}></i>{it.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </DarkSection>
  );
}

function Tier({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--tangerine-400)' }} />
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>{label}</span>
    </div>
  );
}

Object.assign(window, { Architecture });
