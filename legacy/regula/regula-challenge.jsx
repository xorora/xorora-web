// Regula Case Study — Challenge, Solution, Monitoring Pipeline
const { useState: useRegCh } = React;

function RegChallenge() {
  const bullets = [
    ['layers', 'Regulations published across fragmented sources — websites, PDFs, portals, circulars — with no unified feed.'],
    ['hand', 'Manual monitoring created high compliance workload and significant non-compliance risk.'],
    ['banknote', 'Legacy RegTech tools priced for enterprise and built for US/EU markets — inaccessible to SMBs.'],
    ['map-pinned', 'No local coverage of emerging-market regulators in existing tools.'],
    ['file-clock', 'No audit trail or change history for compliance documentation.'],
    ['list-filter', 'Zero automated impact scoring — teams couldn\u2019t prioritize which changes mattered most.'],
  ];
  return (
    <LightSection bg="var(--surface)">
      <div style={{ display: 'grid', gridTemplateColumns: '0.46fr 0.54fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'start' }} className="cs-overview-grid">
        <div>
          <SectionHead label="Problem statement" title="The challenge." />
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, lineHeight: 1.6, color: 'var(--fg1)', fontWeight: 500, margin: '26px 0 18px' }}>
            Compliance teams in emerging markets were drowning — and the tools built to help them didn\u2019t exist.
          </p>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'var(--fg2)', margin: 0 }}>
            Regulatory bodies publish updates across dozens of disconnected channels. For a small compliance team monitoring multiple jurisdictions, keeping up manually was a full-time job with a high margin for error. A missed circular could mean non-compliance. A delayed response could mean a fine.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {bullets.map(([ic, t], i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'var(--slate-50)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '18px 20px' }}>
              <span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: 'var(--r-md)', background: '#fff', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-500)' }}>
                <i data-lucide={ic} style={{ width: 19 }}></i>
              </span>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.55, color: 'var(--fg2)', margin: 0, alignSelf: 'center' }}>{t}</p>
            </div>
          ))}
        </div>
      </div>
    </LightSection>
  );
}

function RegSolution() {
  const steps = [
    { no: '01', icon: 'crosshair', name: 'Target Setup', sub: 'Configure sources' },
    { no: '02', icon: 'radar', name: 'Crawl', sub: 'Automated monitoring' },
    { no: '03', icon: 'git-compare', name: 'Version Diff', sub: 'Change detection' },
    { no: '04', icon: 'sparkles', name: 'AI Analysis', sub: 'Impact scoring' },
    { no: '05', icon: 'bell-ring', name: 'Alert', sub: 'Email / webhook' },
  ];
  return (
    <DarkSection bloom="50% 8%" id="solution">
      <SectionHead label="Solution" title="How Xorora solved it." sub="An automation-first regulatory intelligence platform with one core promise — no compliance team should ever have to manually monitor a regulator website again." onDark style={{ marginBottom: 44 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,3vw,40px)', marginBottom: 'clamp(44px,5vw,64px)' }} className="cs-overview-grid">
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.72, color: 'rgba(255,255,255,.7)', margin: 0 }}>
          The platform runs a continuous end-to-end monitoring pipeline: compliance teams configure their regulatory targets, the system crawls those sources on a defined schedule, compares new content against version history, passes changes through AI analysis for summarization and impact scoring, and delivers prioritized alerts via email, Slack, Teams, or custom webhooks — all in under an hour from the moment a regulation changes.
        </p>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.72, color: 'rgba(255,255,255,.7)', margin: 0 }}>
          Beyond monitoring, the platform delivers a full compliance workspace — onboarding wizard for fast setup, audit-ready change history, billing and usage controls, and a pricing model built specifically for SMB budgets. Everything legacy RegTech tools charged enterprise rates for, at a fraction of the cost.
        </p>
      </div>

      {/* Pipeline */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'rgba(3,9,24,.5)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3.5vw,44px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--tangerine-400)' }} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>End-to-end monitoring pipeline · &lt; 1 hour</span>
        </div>
        <div className="reg-pipeline">
          {steps.map((s, i) => (
            <React.Fragment key={s.no}>
              <PipelineStep {...s} />
              {i < steps.length - 1 && (
                <div className="reg-pipe-arrow" aria-hidden="true">
                  <i data-lucide="chevron-right" style={{ width: 22, color: 'rgba(120,150,240,.6)' }}></i>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </DarkSection>
  );
}

function PipelineStep({ no, icon, name, sub }) {
  const [h, setH] = useRegCh(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', flex: 1, minWidth: 0, background: 'rgba(255,255,255,.035)', border: `1px solid ${h ? 'rgba(120,150,240,.5)' : 'rgba(255,255,255,.12)'}`, borderRadius: 'var(--r-lg)', padding: '22px 18px', textAlign: 'center', transition: 'border-color .2s, transform .2s', transform: h ? 'translateY(-3px)' : 'none' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--indigo-700))' }} />
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.1em', color: 'var(--tangerine-400)', marginBottom: 14 }}>{no}</div>
      <span style={{ width: 48, height: 48, margin: '0 auto 14px', borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.25)', border: '1px solid rgba(120,150,240,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)' }}>
        <i data-lucide={icon} style={{ width: 22 }}></i>
      </span>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginBottom: 5 }}>{name}</div>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,.55)' }}>{sub}</div>
    </div>
  );
}

Object.assign(window, { RegChallenge, RegSolution });
