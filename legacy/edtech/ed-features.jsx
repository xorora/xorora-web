// Xorora — EdTech Industry Page · CTA band + What You Get
const { useState: useEdFeat } = React;

function EdBandCTA({ onCTA }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-950)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 160% at 50% 130%, rgba(70,76,159,.5), transparent 62%)', pointerEvents: 'none' }} />
      <XWatermark size={520} color="rgba(120,150,240,0.05)" style={{ bottom: -240, right: -100 }} />
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: 'clamp(44px,6vw,72px) 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(26px,3.4vw,42px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#fff', margin: 0, maxWidth: 640, textWrap: 'balance' }}>
          See how Xorora builds EdTech platforms that perform.
        </h2>
        <Button variant="light" size="lg" onClick={onCTA}>Book a discovery call <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
      </div>
    </section>
  );
}

function EdWhatYouGet() {
  const items = [
    { icon: 'mouse-pointer-2', title: 'Built around your operations', body: 'Every system is designed around how your platform actually runs, your content model, your user roles, and your integration requirements, without forcing a full infrastructure replacement.' },
    { icon: 'sparkle', title: 'Seamless user experience', body: 'Clean, tested interfaces for both learners and administrators. Usability is validated through the build, not assumed.' },
    { icon: 'maximize-2', title: 'Scalable architecture', body: 'Systems that grow with your platform. Adding user cohorts, new content types, or third party integrations does not require re architecture.' },
    { icon: 'shield-check', title: 'Compliance ready systems', body: 'Data handling and access controls built from the start to meet GDPR, FERPA, and other applicable requirements.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead label="The outcome" title="What you get." style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 56px' }} className="ed-2grid">
        {items.map(it => (
          <div key={it.title} style={{ display: 'flex', gap: 20 }}>
            <span style={{ width: 52, height: 52, flexShrink: 0, borderRadius: 'var(--r-md)', background: 'var(--indigo-50)', color: 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i data-lucide={it.icon} style={{ width: 24 }}></i>
            </span>
            <div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(18px,1.6vw,21px)', color: 'var(--fg1)', margin: '4px 0 12px', lineHeight: 1.25 }}>{it.title}</h3>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}

Object.assign(window, { EdBandCTA, EdWhatYouGet });
