// Xorora — EdTech Industry Page · FAQ + Contact section
const { useState: useEdBot } = React;

function EdFAQ() {
  const faqs = [
    { q: 'What is educational software development?', a: 'Educational software development is the design and engineering of digital products for learning, including LMS platforms, e learning portals, mobile learning apps, and corporate training systems, built around your learners and content model.' },
    { q: 'Do you offer EdTech legacy software modernization?', a: 'Yes. We migrate outdated education platforms to modern, cloud native architectures, handling data integrity, user continuity, and integration with your current toolstack through the transition.' },
    { q: 'What does it cost to build an EdTech solution?', a: 'Cost depends on scope, integrations, and team model. After a short discovery we provide a clear, itemized estimate so you know what each module and milestone costs before we start building.' },
    { q: 'Do EdTech software development companies assist in digital transformation?', a: 'Yes. We help established education businesses digitalize their workflows, modernize platforms, and adopt AI so they can serve more learners and gain a competitive edge.' },
    { q: 'Can AI improve the learning experience in my product?', a: 'Absolutely. We build adaptive learning paths, automated assessments, RAG based support chatbots, and recommendation engines that personalize each learner journey and improve outcomes.' },
    { q: 'Is mobile app development important for EdTech?', a: 'Yes. Mobile learning gives learners consistent access regardless of device or connectivity, which improves engagement, completion rates, and reach.' },
    { q: 'Does gamification increase learner engagement?', a: 'When designed well, gamification increases motivation and retention. We build points, streaks, badges, and progress mechanics that reinforce real learning rather than distract from it.' },
  ];
  const [open, setOpen] = useEdBot(0);
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Good to know" title="EdTech software development FAQ." titleSize="clamp(28px,3.2vw,40px)" align="center" style={{ marginBottom: 44 }} />
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderTop: '1px solid var(--border)' }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '22px 0' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(16px,1.5vw,18px)', color: 'var(--fg1)', lineHeight: 1.35 }}>{f.q}</span>
                <span style={{ width: 34, height: 34, flexShrink: 0, borderRadius: 'var(--r-md)', background: isOpen ? 'var(--xo-indigo)' : 'var(--slate-50)', border: `1px solid ${isOpen ? 'transparent' : 'var(--border-strong)'}`, color: isOpen ? '#fff' : 'var(--fg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .18s' }}>
                  <i data-lucide={isOpen ? 'minus' : 'plus'} style={{ width: 18 }}></i>
                </span>
              </button>
              {isOpen && <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 24px', maxWidth: 720, animation: 'edFade .25s ease' }}>{f.a}</p>}
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}

function EdContact({ innerRef }) {
  const [sent, setSent] = useEdBot(false);
  const [budget, setBudget] = useEdBot(null);
  const [hear, setHear] = useEdBot(null);
  const budgets = ['up to $10k', '$10k – $20k', '$20k – $50k', '$50k – $100k', '> $100k'];
  const hears = ['Clutch', 'Google', 'Referral', 'LinkedIn'];
  return (
    <section ref={innerRef} id="ed-contact" style={{ background: 'var(--navy-950)', padding: 'clamp(56px,7vw,96px) 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(32px,4.5vw,60px)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,.4), transparent 58%)', pointerEvents: 'none' }} />
        <XWatermark size={420} color="rgba(120,150,240,0.05)" style={{ bottom: -180, left: -120 }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(36px,5vw,64px)' }} className="ed-contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,46px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 22px' }}>
              Ready to bring your idea into reality?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '0 0 14px', maxWidth: 420 }}>
              We will sign an NDA if required, carefully analyze your request, and prepare a preliminary estimate.
            </p>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15.5, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '0 0 28px', maxWidth: 420 }}>
              Then we meet to discuss your needs, answer questions, and align on next steps.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 'auto' }}>
              {[['mail', 'partners@xorora.ai'], ['phone', '+1 (415) 555-0148']].map(([ic, v]) => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.85)' }}>
                  <span style={{ width: 36, height: 36, borderRadius: 'var(--r-md)', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tangerine-400)' }}><i data-lucide={ic} style={{ width: 17 }}></i></span>
                  {v}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px,3vw,32px)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.18)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 8px' }}>Request received</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.65)', margin: 0 }}>We will reach out within one business day.</p>
              </div>
            ) : (
              <React.Fragment>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <EdCField label="Your name" placeholder="Jordan Reyes" />
                  <EdCField label="Work email" placeholder="you@company.com" />
                </div>
                <div style={{ marginTop: 14 }}><EdCField label="How can we help you?" placeholder="A sentence about your ambition" textarea /></div>
                <EdChipRow label="What is your budget for this project?" options={budgets} value={budget} onPick={setBudget} />
                <EdChipRow label="How did you hear about us?" options={hears} value={hear} onPick={setHear} />
                <div style={{ marginTop: 24 }}>
                  <Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSent(true)}>Submit <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function EdCField({ label, placeholder, textarea }) {
  const [f, setF] = useEdBot(false);
  const common = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 'var(--r-md)', border: `1px solid ${f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'}`, background: 'rgba(255,255,255,.04)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none', boxShadow: f ? 'var(--shadow-focus)' : 'none' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{label}</span>
      {textarea ? <textarea rows={3} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />
        : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

function EdChipRow({ label, options, value, onPick }) {
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginBottom: 10 }}>{label}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
        {options.map(o => {
          const on = value === o;
          return <button key={o} onClick={() => onPick(o)} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, cursor: 'pointer', padding: '8px 15px', borderRadius: 'var(--r-pill)', transition: 'all .15s', border: `1px solid ${on ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'}`, background: on ? 'rgba(242,107,33,.14)' : 'rgba(255,255,255,.03)', color: on ? 'var(--tangerine-400)' : 'rgba(255,255,255,.75)' }}>{o}</button>;
        })}
      </div>
    </div>
  );
}

Object.assign(window, { EdFAQ, EdContact });
