// Xorora Case Study — Challenge & Solution
const { useState: useChState } = React;

function ChallengeSolution() {
  const rows = [
    {
      c: 'No centralized way to deploy and monitor AI voice agents at scale — business, sales, and developer teams worked in silos with no shared workflows.',
      s: 'A role-first architecture: four purpose-built portals — Business, Sales, Developer, Testing — sharing one backend API, one design system, and standardized core flows.',
    },
    {
      c: 'Subscription and billing management was scattered across separate systems, with no unified commercial backbone.',
      s: 'A single billing layer powered by Stripe, standardized across every portal — one operational backbone for all commercial activity.',
    },
    {
      c: 'No standardized role-based authentication or access control across business, sales, and engineering teams.',
      s: 'OTP-based authentication and role-based access control deployed uniformly across all four portals.',
    },
    {
      c: 'Bilingual UX and legal-compliance requirements were unmet, and external telephony, payment, and geolocation providers were unintegrated.',
      s: 'Bilingual UX and compliance built into the architecture; Twilio, Vapi, Mapbox, IP Geolocation and Documso integrated end-to-end.',
    },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Challenge & Solution" title="Where it broke — and how we fixed it." sub="The AI voice agents were ready. The infrastructure to manage them wasn't. Xorora rebuilt the operational layer from the ground up." style={{ marginBottom: 56 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, alignItems: 'stretch' }} className="cs-cs-row">
            {/* Challenge */}
            <div style={{ position: 'relative', background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px,3vw,34px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ width: 38, height: 38, borderRadius: 'var(--r-md)', background: 'var(--slate-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-500)' }}>
                  <i data-lucide="circle-alert" style={{ width: 20 }}></i>
                </span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11.5, letterSpacing: '.14em', color: 'var(--slate-400)' }}>CHALLENGE&nbsp;0{i + 1}</span>
              </div>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{r.c}</p>
            </div>
            {/* Solution */}
            <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px,3vw,34px)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 80% at 100% 0%, rgba(70,76,159,.35), transparent 60%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ width: 38, height: 38, borderRadius: 'var(--r-md)', background: 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <i data-lucide="check" style={{ width: 20 }}></i>
                  </span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11.5, letterSpacing: '.14em', color: 'var(--tangerine-400)' }}>SOLUTION&nbsp;0{i + 1}</span>
                </div>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: 0 }}>{r.s}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

window.ChallengeSolution = ChallengeSolution;
