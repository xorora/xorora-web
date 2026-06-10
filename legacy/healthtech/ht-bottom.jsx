// Xorora — Health Tech Industry Page · Development Process (line chart) + FAQ + CTA
const { useState: useHtBot } = React;

function HtProcess() {
  const steps = [
    { x: 8, y: 80, label: 'Gathering requirements, shaping product vision' },
    { x: 22, y: 70, label: 'Tech research, shaping product architecture' },
    { x: 37, y: 60, label: 'Branding and design' },
    { x: 52, y: 49, label: 'Feature development, sprints and demos' },
    { x: 66, y: 39, label: 'Testing, verification and validation' },
    { x: 80, y: 27, label: 'Release' },
    { x: 93, y: 14, label: 'Ongoing support' },
  ];
  const pts = steps.map(s => `${s.x},${s.y}`).join(' ');
  return (
    <DarkSection bloom="20% 0%">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start', marginBottom: 'clamp(40px,6vw,72px)' }} className="ht-2col">
        <SectionHead label="How we deliver" title="Health tech development process at Xorora." onDark />
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,.66)', margin: 0, paddingTop: 8 }}>
          Xorora is a HealthTech focused design and development partner. We use a proven lifecycle to build secure, compliant apps that ship and scale with confidence.
        </p>
      </div>

      {/* ascending chart — desktop */}
      <div className="ht-chart" style={{ position: 'relative', height: 460 }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="htLine" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#6E74C8" /><stop offset="1" stopColor="#9AB0F0" />
            </linearGradient>
          </defs>
          <polyline points={pts} fill="none" stroke="url(#htLine)" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 2 }} />
          {steps.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r="0.9" fill="#fff" stroke="#6E74C8" style={{ strokeWidth: 2 }} vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        {steps.map((s, i) => (
          <div key={i} style={{ position: 'absolute', left: `${s.x}%`, top: `${s.y}%`, transform: 'translate(-50%, -100%)', marginTop: -14, width: 150, textAlign: 'center' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--tangerine-400)', marginBottom: 6 }}>{String(i + 1).padStart(2, '0')}</div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, lineHeight: 1.4, color: 'rgba(255,255,255,.82)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* vertical list — mobile */}
      <div className="ht-chart-mobile" style={{ display: 'none' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: '50%', background: 'rgba(70,76,159,.3)', border: '1px solid rgba(120,150,240,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--indigo-300)' }}>{String(i + 1).padStart(2, '0')}</span>
              {i < steps.length - 1 && <span style={{ flex: 1, width: 2, background: 'rgba(110,120,210,.4)', margin: '6px 0' }} />}
            </div>
            <div style={{ paddingBottom: i < steps.length - 1 ? 24 : 0, paddingTop: 8 }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, color: '#fff', lineHeight: 1.4 }}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 'clamp(36px,5vw,56px)' }}>
        <Button variant="primary" size="lg" onClick={() => { const el = document.getElementById('ht-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); }}>Book a consultation <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
      </div>
    </DarkSection>
  );
}

function HtFAQ() {
  const faqs = [
    { q: 'What types of health tech software can you build?', a: 'We build telehealth platforms, EHR and patient portals, remote monitoring tools, clinical analytics dashboards, practice management systems, and patient mobile apps, all tailored to your care model.' },
    { q: 'How do you handle HIPAA and patient data security?', a: 'Security and compliance are built into the foundation with encryption, access controls, audit logging, and rigorous testing, designed to meet standards such as HIPAA, SOC 2, and GDPR.' },
    { q: 'Can you integrate with existing EHR and hospital systems?', a: 'Yes. We integrate with major EHR systems, lab and imaging providers, and devices through standards such as HL7 and FHIR so data stays in sync across every system.' },
    { q: 'What are the typical project timelines for health tech development?', a: 'A focused MVP usually ships in a few months, while a full platform with integrations and compliance work runs longer. After discovery we give a clear, milestone based timeline.' },
    { q: 'How do you use AI in healthcare platforms?', a: 'We apply machine learning for imaging support, risk prediction, and monitoring, and use modern AI for clinical documentation, coding, and patient copilots where they add measurable value and remain safe.' },
    { q: 'Do you provide post launch maintenance and support?', a: 'Yes. We provide ongoing maintenance, monitoring, and DevOps so your platform stays secure, reliable, and ready to scale as your patient base grows.' },
  ];
  const [open, setOpen] = useHtBot(0);
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="ht-2col">
        <div style={{ position: 'sticky', top: 110 }}>
          <SectionHead label="Good to know" title="Questions, answered." titleSize="clamp(28px,3.2vw,40px)" />
        </div>
        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderTop: '1px solid var(--border)' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '22px 0' }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(16px,1.5vw,19px)', color: 'var(--fg1)', lineHeight: 1.35 }}>{f.q}</span>
                  <span style={{ width: 34, height: 34, flexShrink: 0, borderRadius: 'var(--r-md)', background: isOpen ? 'var(--xo-indigo)' : 'var(--surface)', border: `1px solid ${isOpen ? 'transparent' : 'var(--border-strong)'}`, color: isOpen ? '#fff' : 'var(--fg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .18s' }}>
                    <i data-lucide={isOpen ? 'minus' : 'plus'} style={{ width: 18 }}></i>
                  </span>
                </button>
                {isOpen && <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 24px', maxWidth: 680, animation: 'htFade .25s ease' }}>{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </LightSection>
  );
}

function HtCTA({ onCTA }) {
  return (
    <section style={{ background: 'var(--slate-50)', padding: '0 32px clamp(64px,8vw,104px)' }}>
      <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1240, margin: '0 auto', background: 'var(--navy-900)', borderRadius: 'var(--r-xl)', padding: 'clamp(44px,6vw,80px)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('assets/healthtech/header-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(1,12,40,0.96) 0%, rgba(1,12,40,0.78) 55%, rgba(3,12,38,0.62) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 120% at 90% 0%, rgba(70,76,159,.45), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 640 }}>
            <SignalRule color="var(--tangerine-400)" style={{ marginBottom: 22 }} />
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 18px', textWrap: 'balance' }}>
              Scale your vision with next generation health tech solutions.
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,.7)', margin: 0 }}>
              We design and develop custom telehealth platforms, patient portals, remote monitoring tools, and clinical analytics dashboards built to align with your care model and improve outcomes at every stage of growth.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Button variant="light" size="lg" onClick={onCTA}>Contact us <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            <Button variant="onDark" size="lg" onClick={onCTA}>Request a consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HtProcess, HtFAQ, HtCTA });
