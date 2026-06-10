// Xorora — Health Tech Industry Page · AI-Powered Solutions (dark) + Certifications
const { useState: useHtFeat } = React;

function HtAISolutions() {
  const cards = [
    { icon: 'brain-circuit', title: 'Predictive analytics for patient care', body: 'Using data to forecast health outcomes and personalize patient care strategies. This optimizes treatment plans, prevents adverse events, and supports better resource allocation for improved health management.', featured: true, img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=70' },
    { icon: 'bot', title: 'AI agents for healthcare operations', body: 'Automate scheduling, intake, and coordination so care teams spend less time on operations and more with patients.', img: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=70' },
    { icon: 'flask-conical', title: 'AI integration in medical research', body: 'Accelerate discovery with models that surface patterns across clinical and research data.', img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=70' },
    { icon: 'messages-square', title: 'Conversational chat and voicebots', body: 'Round the clock chat and voice assistants that triage, answer, and guide patients.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=70' },
    { icon: 'workflow', title: 'AI powered automation of administrative tasks', body: 'Cut administrative load with automated coding, documentation, and claims workflows.', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=70' },
  ];
  return (
    <DarkSection bloom="50% 6%">
      <SectionHead label="AI powered solutions" title="AI for enhanced healthcare services." sub="We integrate core AI technologies into clinical platforms, enabling care teams to move faster and serve patients better while strengthening safety and compliance." onDark style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ht-ai-grid">
        {cards.map((c, i) => <HtAICard key={c.title} {...c} span={i === 0} />)}
      </div>
    </DarkSection>
  );
}

function HtAICard({ icon, title, body, featured, span, img }) {
  const [h, setH] = useHtFeat(false);
  const [ok, setOk] = useHtFeat(true);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      className={span ? 'ht-ai-feat' : ''}
      style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gridRow: span ? 'span 2' : 'auto', minHeight: span ? 320 : 256, background: featured ? 'linear-gradient(165deg, rgba(70,76,159,.5), rgba(10,14,40,.85))' : 'linear-gradient(165deg, rgba(40,46,96,.6), rgba(10,14,32,.9))', border: `1px solid ${h ? 'rgba(120,150,240,.55)' : 'rgba(255,255,255,.12)'}`, borderRadius: 'var(--r-lg)', transition: 'border-color .2s, transform .25s', transform: h ? 'translateY(-3px)' : 'none' }}>
      {img && ok && (
        <img src={img} alt="" aria-hidden="true" onError={() => setOk(false)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, filter: h ? 'blur(0px) brightness(.96) saturate(1.06)' : 'blur(8px) brightness(.5) saturate(1.1)', transform: h ? 'scale(1.03)' : 'scale(1.12)', transition: 'filter .4s ease, transform .55s cubic-bezier(.16,1,.3,1)' }} />
      )}
      {/* frosted glass film at rest, clears on hover */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(160deg, rgba(70,76,159,.34), rgba(8,12,32,.42))', opacity: h ? 0 : 1, transition: 'opacity .4s ease' }} />
      {/* always-on scrim, bottom-weighted for text legibility */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(to top, rgba(4,7,18,.93) 0%, rgba(4,7,18,.62) 34%, rgba(4,7,18,.18) 64%, rgba(4,7,18,.06) 100%)' }} />
      {/* content */}
      <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', flex: 1, padding: 'clamp(24px,2.4vw,30px)' }}>
        <span style={{ width: 46, height: 46, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.45)', border: '1px solid rgba(120,150,240,.5)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginBottom: featured ? 22 : 18 }}>
          <i data-lucide={icon} style={{ width: 23 }}></i>
        </span>
        <div style={{ marginTop: 'auto' }}>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: featured ? 23 : 18, color: '#fff', margin: '0 0 12px', lineHeight: 1.25, maxWidth: featured ? 'none' : 240, textShadow: '0 1px 14px rgba(0,0,0,.55)' }}>{title}</h3>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: 0, textShadow: '0 1px 12px rgba(0,0,0,.6)' }}>{body}</p>
          {featured && <div style={{ paddingTop: 24 }}><div style={{ height: 3, width: 64, background: 'var(--tangerine-500)', borderRadius: 2 }} /></div>}
        </div>
      </div>
    </div>
  );
}

function HtCertifications() {
  const certs = [
    { Logo: CertHIPAA, desc: 'Health data privacy' },
    { Logo: CertHITRUST, desc: 'CSF risk framework' },
    { Logo: CertSOC2, desc: 'Security controls audit' },
    { Logo: CertFDA, desc: 'Medical software' },
    { Logo: CertISO27001, desc: 'Information security' },
  ];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--indigo-50)', padding: 'clamp(72px,9vw,118px) 32px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-radial-gradient(circle at 85% 15%, rgba(70,76,159,0.06) 0px, rgba(70,76,159,0.06) 1px, transparent 1px, transparent 40px)', pointerEvents: 'none', opacity: 0.6 }} />
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }} className="ht-2col">
        <div>
          <SectionHead label="Trust & compliance" title="Healthcare software security standards and certifications." titleSize="clamp(26px,3vw,38px)" />
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'var(--fg2)', margin: '24px 0 14px' }}>
            Xorora recognizes the critical importance of compliance within the healthcare domain.
          </p>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'var(--fg2)', margin: 0 }}>
            We are dedicated to helping our clients navigate and adhere to stringent regulatory requirements, such as HIPAA, HITRUST, the HITECH Act, FDA, and the ONC Cures Act Final Rule.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="ht-cert-grid">
          {certs.map(({ Logo, desc }, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: 14, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '26px 16px 22px', textAlign: 'center', boxShadow: 'var(--shadow-xs)' }}>
              <div style={{ height: 92, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Logo /></div>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--slate-500)' }}>{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HtAISolutions, HtCertifications });
