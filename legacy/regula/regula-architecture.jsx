// Regula Case Study — Architecture ("How it was built")
const { useState: useRegArch } = React;

function ArchCard({ icon, name, tech, accent }) {
  const [h, setH] = useRegArch(false);
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

function TierLabel({ children, n }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, color: 'var(--tangerine-400)', border: '1px solid rgba(255,138,61,.3)', borderRadius: 'var(--r-sm)', padding: '2px 7px' }}>{n}</span>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>{children}</span>
    </div>
  );
}

function FlowDown() {
  return (
    <div className="reg-flow-down" style={{ display: 'flex', justifyContent: 'center', height: 30 }}>
      <div style={{ width: 2, height: '100%', background: 'linear-gradient(rgba(110,120,210,.15), rgba(110,120,210,.6))' }} />
    </div>
  );
}

function RegArchitecture() {
  return (
    <DarkSection bloom="50% 10%" id="architecture">
      <SectionHead label="Architecture" title="How it was built." sub="A multi-tenant Next.js full-stack application built for reliability, scalability, and cost-efficient infrastructure — with durable, event-driven background workflows orchestrated by Inngest." onDark style={{ marginBottom: 52 }} />

      <div style={{ position: 'relative', overflow: 'hidden', background: 'rgba(3,9,24,.5)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(24px,3.5vw,48px)' }}>
        <XWatermark size={440} color="rgba(120,150,240,0.05)" style={{ bottom: -170, right: -130 }} />
        <div style={{ position: 'relative' }}>

          {/* Tier 1 — App */}
          <TierLabel n="01">Application · multi-tenant SaaS</TierLabel>
          <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(100deg, var(--indigo-700), var(--indigo-500))', borderRadius: 'var(--r-lg)', padding: '20px 26px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', boxShadow: 'var(--glow-indigo)' }}>
            <i data-lucide="layout-dashboard" style={{ width: 24, color: '#fff' }}></i>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 19, color: '#fff', letterSpacing: '-0.01em' }}>Next.js 16 · React 19 full-stack app</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,.78)', marginTop: 4 }}>multi-tenant · NextAuth.js v5 · Tailwind 4 · shadcn/ui · deployed on Vercel</div>
            </div>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: '#fff', background: 'rgba(255,255,255,.16)', borderRadius: 'var(--r-pill)', padding: '6px 14px' }}>Compliance workspace · onboarding · billing</span>
          </div>

          <FlowDown />

          {/* Tier 2 — Workflow engine */}
          <TierLabel n="02">Orchestration · durable, event-driven workflows</TierLabel>
          <div style={{ position: 'relative', overflow: 'hidden', background: 'rgba(242,107,33,.10)', border: '1px solid rgba(255,138,61,.32)', borderRadius: 'var(--r-lg)', padding: '20px 26px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ width: 42, height: 42, borderRadius: 'var(--r-md)', background: 'rgba(242,107,33,.2)', border: '1px solid rgba(255,138,61,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tangerine-400)', flexShrink: 0 }}>
              <i data-lucide="workflow" style={{ width: 22 }}></i>
            </span>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff' }}>Inngest workflow engine</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,.6)', marginTop: 4 }}>crawl scheduling · version diffing · AI analysis · alert delivery — no queue infra to manage</div>
            </div>
          </div>

          <FlowDown />

          {/* Tier 3 — Pipeline stages */}
          <TierLabel n="03">Processing · crawl → analyze</TierLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="reg-arch-2col">
            <ArchCard icon="radar" name="Crawl4AI" tech="extraction · anti-bot resilient" />
            <ArchCard icon="sparkles" name="Google Gemini" tech="summarize · impact scoring" accent="tangerine" />
          </div>

          <FlowDown />

          {/* Tier 4 — Data layer */}
          <TierLabel n="04">Data layer</TierLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="reg-arch-3col">
            <ArchCard icon="database" name="PostgreSQL" tech="Drizzle ORM" />
            <ArchCard icon="zap" name="Upstash Redis" tech="caching" />
            <ArchCard icon="hard-drive" name="AWS S3" tech="document & content store" />
          </div>

          <FlowDown />

          {/* Tier 5 — Delivery */}
          <TierLabel n="05">Multi-channel alert delivery</TierLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="reg-arch-4col">
            <ArchCard icon="mail" name="Resend" tech="email alerts" accent="tangerine" />
            <ArchCard icon="message-circle" name="Slack" tech="webhooks" accent="tangerine" />
            <ArchCard icon="message-square" name="MS Teams" tech="webhooks" accent="tangerine" />
            <ArchCard icon="webhook" name="Custom Webhooks" tech="real-time" accent="tangerine" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '34px 0 0' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.12em', color: 'rgba(255,255,255,.5)' }}>
              <i data-lucide="credit-card" style={{ width: 14, color: 'var(--indigo-300)' }}></i> STRIPE · subscription billing &amp; usage controls
            </span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
          </div>
        </div>
      </div>
    </DarkSection>
  );
}

window.RegArchitecture = RegArchitecture;
