// Xorora — Real Estate Industry Page · Process (dark) + FAQ + CTA
const { useState: useReBot } = React;

function ReProcess() {
  const steps = [
    { n: '01', name: 'Project discovery', body: 'First, we analyze your business goals, market position, and property workflows to create clearly articulated goals, optimize processes, and isolate the best digital opportunities.' },
    { n: '02', name: 'Team composition', body: 'We assemble multidisciplinary teams with proptech, data, and compliance backgrounds, matched to your project scope, regulatory requirements, and growth plans.' },
    { n: '03', name: 'Project delivery', body: 'From MVP through enterprise scale implementation, we build listing portals, CRM platforms, tenant apps, and scalable architectures for sustained success.' },
  ];
  return (
    <DarkSection bloom="50% 4%">
      <SectionHead label="How we build" title="How we build scalable real estate solutions." onDark align="center" style={{ marginBottom: 56 }} />
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 'clamp(18px,2.5vw,32px)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: '50%', background: 'rgba(70,76,159,.3)', border: '1px solid rgba(120,150,240,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 14, color: 'var(--indigo-300)' }}>{s.n}</span>
              {i < steps.length - 1 && <span style={{ flex: 1, width: 2, background: 'linear-gradient(rgba(110,120,210,.5), rgba(110,120,210,.1))', margin: '8px 0' }} />}
            </div>
            <div style={{ paddingBottom: i < steps.length - 1 ? 40 : 0 }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(20px,2vw,26px)', color: '#fff', margin: '6px 0 12px', letterSpacing: '-0.01em' }}>{s.name}</h3>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.66)', margin: 0, maxWidth: 640 }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 8 }}>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.65, color: 'rgba(255,255,255,.6)', maxWidth: 760, margin: '0 auto 28px' }}>
          From concept to launch, Xorora builds real estate software that streamlines property operations, connects seamlessly with your existing systems, and scales with your business. Our approach draws on deep proptech experience, a proven technology stack, and a focus on measurable outcomes.
        </p>
        <Button variant="primary" size="lg" onClick={() => { const el = document.getElementById('re-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); }}>Request a consultation <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
      </div>
    </DarkSection>
  );
}

function ReFAQ() {
  const faqs = [
    { q: 'What types of real estate software can you build?', a: 'We build listing portals, property and tenant CRM, brokerage platforms, property management systems, investment and analytics dashboards, and tenant or buyer mobile apps, all tailored to your business model.' },
    { q: 'What are the typical project timelines for real estate app development?', a: 'A focused MVP usually ships in a few months, while a full platform with integrations runs longer. After discovery we give a clear, milestone based timeline so you always know what is being delivered and when.' },
    { q: 'Can you integrate with MLS, CRM, and listing portals?', a: 'Yes. We integrate with MLS feeds, popular CRMs, listing portals, payment providers, and e signature tools through robust APIs so your data stays in sync across every system.' },
    { q: 'Do you provide post launch maintenance and support?', a: 'Yes. We provide ongoing maintenance, monitoring, and DevOps so your platform stays secure, reliable, and ready to scale as your portfolio and user base grow.' },
    { q: 'How do you use AI in real estate platforms?', a: 'We apply machine learning for valuation, property matching, and demand forecasting, and use modern AI for listing automation, document review, and client copilots where they add measurable value.' },
    { q: 'How do you handle data security and compliance?', a: 'Security is built into the foundation with encryption, secure APIs, access controls, and rigorous testing, designed to meet standards such as SOC 2 and GDPR.' },
  ];
  const [open, setOpen] = useReBot(0);
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="re-2col">
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
                {isOpen && <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 24px', maxWidth: 680, animation: 'reFade .25s ease' }}>{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </LightSection>
  );
}

function ReCTA({ onCTA }) {
  return (
    <section style={{ background: 'var(--surface)', padding: '0 32px clamp(64px,8vw,104px)' }}>
      <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1240, margin: '0 auto', background: 'var(--navy-900)', borderRadius: 'var(--r-xl)', padding: 'clamp(44px,6vw,80px)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('assets/realestate/header-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(1,12,40,0.96) 0%, rgba(1,12,40,0.78) 55%, rgba(3,12,38,0.62) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 120% at 90% 0%, rgba(70,76,159,.45), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 640 }}>
            <SignalRule color="var(--tangerine-400)" style={{ marginBottom: 22 }} />
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 18px', textWrap: 'balance' }}>
              Scale your vision with next generation real estate solutions.
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,.7)', margin: 0 }}>
              We design and develop custom listing platforms, CRM systems, tenant portals, and property analytics dashboards built to align with your strategy and generate measurable ROI at every stage of growth.
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

Object.assign(window, { ReProcess, ReFAQ, ReCTA });
