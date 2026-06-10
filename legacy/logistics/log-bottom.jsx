// Xorora — Logistics Industry Page · FAQ + final CTA
const { useState: useLogBot } = React;

function LogFAQ() {
  const faqs = [
    { q: 'Can you integrate logistics software with existing ERP or CRM systems?', a: 'Yes. Custom logistics software integrates readily with your existing ERP, CRM, WMS, or accounting systems. We specialize in nimble platforms that exchange data smoothly and prevent workflow silos through robust API and EDI integrations.' },
    { q: 'How much does it cost to develop a transportation management system?', a: 'Cost depends on scope, integrations, and team model. After a short discovery we provide a clear, itemized estimate so you know exactly what each module and milestone costs before we start building.' },
    { q: 'Which AI tools are used in transportation and logistics?', a: 'We apply machine learning for demand forecasting, route optimization, predictive maintenance, and anomaly detection, plus modern LLMs for document processing and operational copilots where they add real value.' },
    { q: 'Do you offer ongoing logistics software support and maintenance?', a: 'Yes. We offer ongoing support, monitoring, and iterative improvement so your platform stays reliable and keeps pace with your operation as it grows.' },
    { q: 'What platforms can a transportation application support?', a: 'We deliver responsive web apps, native and cross platform mobile apps for drivers and dispatchers, and back office portals, all sharing one secure backend.' },
    { q: 'What are the benefits of custom logistics software over off the shelf solutions?', a: 'Custom software fits your exact workflows, integrates with the tools you already run, and scales on your terms. You own the roadmap instead of waiting on a vendor and paying per seat for features you never use.' },
  ];
  const [open, setOpen] = useLogBot(0);
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="log-2col">
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
                {isOpen && (
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 24px', maxWidth: 680, animation: 'logFade .25s ease' }}>{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </LightSection>
  );
}

function LogFinalCTA({ onCTA }) {
  return (
    <section id="log-contact" style={{ background: 'var(--surface)', padding: '0 32px clamp(64px,8vw,104px)' }}>
      <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1240, margin: '0 auto', background: 'var(--navy-900)', borderRadius: 'var(--r-xl)', padding: 'clamp(44px,6vw,80px)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('assets/logistics/header-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.28, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(1,12,40,0.96) 0%, rgba(1,12,40,0.78) 55%, rgba(3,12,38,0.62) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 120% at 90% 0%, rgba(70,76,159,.45), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 620 }}>
            <SignalRule color="var(--tangerine-400)" style={{ marginBottom: 22 }} />
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 18px', textWrap: 'balance' }}>
              Design logistics systems that grow with your business.
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,.7)', margin: 0 }}>
              Custom TMS, WMS, route optimization, and real time tracking, engineered to match your operation, streamline workflows, and deliver clear ROI at scale.
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

Object.assign(window, { LogFAQ, LogFinalCTA });
