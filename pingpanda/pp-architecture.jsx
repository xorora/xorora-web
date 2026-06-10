// PingPanda Case Study — Architecture ("How it was built")
const { useState: usePpArch } = React;

function PpArchCard({ icon, name, tech, accent }) {
  const [h, setH] = usePpArch(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,.035)', border: `1px solid ${h ? 'rgba(120,150,240,.5)' : 'rgba(255,255,255,.12)'}`, borderRadius: 'var(--r-lg)', padding: '18px 18px', transition: 'border-color .2s, transform .2s', transform: h ? 'translateY(-3px)' : 'none', height: '100%' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: accent === 'tangerine' ? 'linear-gradient(90deg, var(--tangerine-500), var(--tangerine-700))' : 'linear-gradient(90deg, var(--indigo-400), var(--indigo-700))' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
        <span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: 'var(--r-md)', background: accent === 'tangerine' ? 'rgba(242,107,33,.18)' : 'rgba(70,76,159,.25)', border: `1px solid ${accent === 'tangerine' ? 'rgba(255,138,61,.3)' : 'rgba(120,150,240,.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent === 'tangerine' ? 'var(--tangerine-400)' : 'var(--indigo-300)' }}>
          <i data-lucide={icon} style={{ width: 19 }}></i>
        </span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14.5, color: '#fff', lineHeight: 1.15 }}>{name}</div>
          {tech && <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,.45)', marginTop: 3 }}>{tech}</div>}
        </div>
      </div>
    </div>
  );
}

function PpTierLabel({ children, n }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, color: 'var(--tangerine-400)', border: '1px solid rgba(255,138,61,.3)', borderRadius: 'var(--r-sm)', padding: '2px 7px' }}>{n}</span>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>{children}</span>
    </div>
  );
}

function PpFlowDown() {
  return (
    <div className="reg-flow-down" style={{ display: 'flex', justifyContent: 'center', height: 30 }}>
      <div style={{ width: 2, height: '100%', background: 'linear-gradient(rgba(110,120,210,.15), rgba(110,120,210,.6))' }} />
    </div>
  );
}

function PpArchitecture() {
  return (
    <DarkSection bloom="50% 10%" id="architecture">
      <SectionHead label="Architecture" title="How it was built." sub="A Next.js App Router frontend with a Hono API layer on the critical event path — lightweight, edge-compatible, and built for instant delivery on a serverless stack." onDark style={{ marginBottom: 52 }} />

      <div style={{ position: 'relative', overflow: 'hidden', background: 'rgba(3,9,24,.5)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(24px,3.5vw,48px)' }}>
        <XWatermark size={440} color="rgba(120,150,240,0.05)" style={{ bottom: -170, right: -130 }} />
        <div style={{ position: 'relative' }}>

          {/* Tier 1 — Client */}
          <PpTierLabel n="01">Client · App Router frontend</PpTierLabel>
          <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(100deg, var(--indigo-700), var(--indigo-500))', borderRadius: 'var(--r-lg)', padding: '20px 26px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', boxShadow: 'var(--glow-indigo)' }}>
            <i data-lucide="layout-dashboard" style={{ width: 24, color: '#fff' }}></i>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 19, color: '#fff', letterSpacing: '-0.01em' }}>Next.js 15 App Router · React 19</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,.78)', marginTop: 4 }}>TypeScript · Tailwind CSS · TanStack Query · deployed on Vercel</div>
            </div>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: '#fff', background: 'rgba(255,255,255,.16)', borderRadius: 'var(--r-pill)', padding: '6px 14px' }}>dashboard · API keys · usage</span>
          </div>

          <PpFlowDown />

          {/* Tier 2 — API layer */}
          <PpTierLabel n="02">API · server-side event ingestion</PpTierLabel>
          <div style={{ position: 'relative', overflow: 'hidden', background: 'rgba(242,107,33,.10)', border: '1px solid rgba(255,138,61,.32)', borderRadius: 'var(--r-lg)', padding: '20px 26px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ width: 42, height: 42, borderRadius: 'var(--r-md)', background: 'rgba(242,107,33,.2)', border: '1px solid rgba(255,138,61,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tangerine-400)', flexShrink: 0 }}>
              <i data-lucide="zap" style={{ width: 22 }}></i>
            </span>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff' }}>Hono API layer</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,.6)', marginTop: 4 }}>edge-compatible · API-key auth · Zod validation · per-plan quota enforcement</div>
            </div>
          </div>

          <PpFlowDown />

          {/* Tier 3 — Data + Auth */}
          <PpTierLabel n="03">Data &amp; identity</PpTierLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="reg-arch-3col">
            <PpArchCard icon="database" name="Prisma + Neon" tech="serverless PostgreSQL" />
            <PpArchCard icon="git-branch" name="Neon Adapter" tech="connection pooling" />
            <PpArchCard icon="user-check" name="Clerk" tech="auth · user sync" />
          </div>

          <PpFlowDown />

          {/* Tier 4 — Billing + Delivery */}
          <PpTierLabel n="04">Billing &amp; notification delivery</PpTierLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="reg-arch-2col">
            <PpArchCard icon="credit-card" name="Stripe" tech="checkout · webhooks · plans" accent="tangerine" />
            <PpArchCard icon="bell-ring" name="Discord REST" tech="rich formatted alerts" accent="tangerine" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '34px 0 0' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.12em', color: 'rgba(255,255,255,.5)' }}>
              <i data-lucide="triangle" style={{ width: 14, color: 'var(--indigo-300)' }}></i> DEPLOYED ON VERCEL · serverless edge runtime
            </span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
          </div>
        </div>
      </div>
    </DarkSection>
  );
}

window.PpArchitecture = PpArchitecture;
