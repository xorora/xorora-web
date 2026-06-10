// Xorora — Startups Industry Page · Process (dark) + FAQ + CTA
const { useState: useStBot } = React;

function StProcess() {
  const steps = [
    { n: '01', name: 'Discovery and scoping', body: 'We pressure test your idea, define the core MVP, and map the fastest path to a product that proves value to users and investors.' },
    { n: '02', name: 'Design and build', body: 'We design and engineer in short, demoable sprints so you see working software every week and can adjust as you learn.' },
    { n: '03', name: 'Launch and scale', body: 'We ship to production, instrument for insight, and harden the foundation so the MVP grows into your funded platform.' },
  ];
  return (
    <DarkSection bloom="50% 4%">
      <SectionHead label="How we build" title="How we build startup products." onDark align="center" style={{ marginBottom: 56 }} />
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
          From idea to launch, Xorora builds startup products that ship fast, prove traction, and scale with your business. Our approach draws on deep product experience, a proven technology stack, and a focus on the outcomes that move your startup forward.
        </p>
        <Button variant="primary" size="lg" onClick={() => { const el = document.getElementById('st-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); }}>Request a consultation <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
      </div>
    </DarkSection>
  );
}

function StFAQ() {
  const faqs = [
    { q: 'How fast can you build an MVP?', a: 'A focused MVP typically ships in a few weeks to a couple of months depending on scope. After a short discovery we give you a clear, milestone based timeline so you know exactly what launches and when.' },
    { q: 'I am a non technical founder. Can you still help?', a: 'Absolutely. We act as your product and engineering team, translating your vision into a working product and guiding the technical decisions so you can focus on customers and fundraising.' },
    { q: 'Will the MVP scale, or will we have to rebuild later?', a: 'We build MVPs on a clean, modular foundation specifically so the product that wins your first users can grow into your funded platform without a costly rewrite.' },
    { q: 'How do you keep costs manageable on a tight runway?', a: 'We scope ruthlessly to the features that prove value, avoid over engineering, and work in small increments so spend always maps to progress you can see.' },
    { q: 'Can you help make our product investor ready?', a: 'Yes. We focus on the product quality, UX polish, and metrics that demo well to users and investors, and we can help prepare the technical story for due diligence.' },
    { q: 'Do you provide support after launch?', a: 'Yes. We offer ongoing development, maintenance, and DevOps so your product stays reliable and keeps improving as you grow.' },
  ];
  const [open, setOpen] = useStBot(0);
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="st-2col">
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
                {isOpen && <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 24px', maxWidth: 680, animation: 'stFade .25s ease' }}>{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </LightSection>
  );
}

function StCTA({ onCTA }) {
  return (
    <section style={{ background: 'var(--slate-50)', padding: '0 32px clamp(64px,8vw,104px)' }}>
      <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1240, margin: '0 auto', background: 'var(--navy-900)', borderRadius: 'var(--r-xl)', padding: 'clamp(44px,6vw,80px)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('assets/startups/header-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(1,12,40,0.96) 0%, rgba(1,12,40,0.8) 55%, rgba(3,12,38,0.64) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 120% at 90% 0%, rgba(70,76,159,.45), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 640 }}>
            <SignalRule color="var(--tangerine-400)" style={{ marginBottom: 22 }} />
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 18px', textWrap: 'balance' }}>
              Turn your idea into a product investors believe in.
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,.7)', margin: 0 }}>
              We design and build MVPs, investor ready products, and the technical foundation your startup runs on, engineered to ship fast and scale when traction hits.
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

Object.assign(window, { StProcess, StFAQ, StCTA });
