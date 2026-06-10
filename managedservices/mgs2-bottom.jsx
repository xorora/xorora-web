// Xorora — Managed Services (v2) · bottom sections (Why, Industries, FAQ, Contact) + app
const { useState: useM2bState } = React;

/* ============ 4 · WHY XORORA (light) ============ */
function M2Why() {
  const rows = [
    ['clock', '24/7 Proactive Monitoring', 'We identify and resolve issues before they impact your business — no waiting for something to break.'],
    ['user-check', 'Single Point of Contact', 'You outsource, we own the outcome. No finger-pointing between vendors, no runaround.'],
    ['shield-check', 'Security Built In, Not Bolted On', 'Every engagement includes baseline security controls and compliance-ready practices from day one.'],
    ['trending-up', 'Strategic, Not Just Tactical', 'Beyond fixing tickets, we help you plan for growth and align IT spending with business value.'],
  ];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#fff', padding: 'clamp(96px,11vw,120px) 0' }}>
      <div className="m2-wrap">
        <div className="m2-why-grid" style={{ display: 'grid', gridTemplateColumns: '0.66fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
          <div style={{ position: 'relative' }}>
            <div className="m2-why-deco" aria-hidden="true" style={{ position: 'absolute', top: -10, left: -18, width: 150, height: 150, background: 'var(--indigo-100)', transform: 'skewX(-20deg)', opacity: 0.7, zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <M2Eyebrow style={{ marginBottom: 18 }}>Why Xorora</M2Eyebrow>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4.4vw,52px)', lineHeight: 1.02, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--xo-ink)', margin: '0 0 22px' }}>A partner, not a vendor.</h2>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'var(--slate-600)', margin: 0, maxWidth: 380 }}>We don't sell technology and walk away. Xorora works alongside your organization to keep systems secure, your team productive, and your infrastructure aligned with where the business is headed.</p>
            </div>
          </div>
          <div>
            {rows.map(([ic, t, b], i) => <M2WhyRow key={t} icon={ic} title={t} body={b} last={i === rows.length - 1} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function M2WhyRow({ icon, title, body, last }) {
  const [h, setH] = useM2bState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', gap: 18, padding: '24px 22px', borderBottom: last ? 'none' : '1px solid var(--slate-200)', background: h ? 'var(--slate-50)' : 'transparent', borderLeft: '3px solid ' + (h ? 'var(--indigo-500)' : 'transparent'), borderRadius: h ? '0 10px 10px 0' : 0, transition: 'all .18s ease' }}>
      <span style={{ flexShrink: 0, color: 'var(--indigo-500)', fontSize: 22, fontWeight: 800, lineHeight: 1.2 }}>›</span>
      <div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16.5, color: 'var(--xo-ink)', margin: '0 0 6px' }}>{title}</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'var(--slate-600)', margin: 0 }}>{body}</p>
      </div>
    </div>
  );
}

/* ============ 5 · INDUSTRIES ============ */
function M2Industries() {
  const inds = (window.XO_NAV && window.XO_NAV.industries) || [];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--slate-950)', padding: 'clamp(96px,11vw,120px) 0' }}>
      <div className="m2-wrap" style={{ textAlign: 'center' }}>
        <M2Eyebrow style={{ marginBottom: 18 }}>Industries we serve</M2Eyebrow>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 18px', textWrap: 'balance' }}>Managed IT tailored to your reality.</h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.6, color: 'var(--slate-500)', maxWidth: 620, margin: '0 auto 44px' }}>We partner with organizations across regulated industries, each with distinct operational and compliance requirements.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 880, margin: '0 auto' }}>
          {inds.map(i => <M2Tag key={i.name} {...i} />)}
        </div>
      </div>
    </section>
  );
}

function M2Tag({ name, href }) {
  const [h, setH] = useM2bState(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 13, letterSpacing: '.04em', textDecoration: 'none', color: h ? '#fff' : 'var(--indigo-300)', background: h ? 'rgba(70,76,159,0.2)' : 'rgba(70,76,159,0.08)', border: '1px solid ' + (h ? 'rgba(107,112,182,0.6)' : 'rgba(70,76,159,0.25)'), padding: '8px 16px', borderRadius: 6, transition: 'all .15s' }}>{name}</a>
  );
}

/* ============ 6 · FAQ ============ */
const M2_FAQS = [
  { q: 'What does "managed IT" actually include?', a: 'Xorora takes ownership of your IT environment: 24/7 monitoring, help desk support, patch management, infrastructure administration, server management, vendor coordination, and strategic planning. We become an extension of your team, not a break-fix shop you call when something fails.' },
  { q: 'How is this different from co-managed IT?', a: 'Fully managed means we own the entire IT function. Co-managed means we work alongside your existing in-house IT staff, filling gaps, handling overflow, and bringing specialized expertise where your team needs it. We tailor the model to your structure.' },
  { q: 'How fast is your response time?', a: 'Critical issues get an immediate response through our 24/7 monitoring, with most resolved before they ever impact your business. We agree exact response and resolution targets in your service-level agreement up front.' },
  { q: 'Can you support our compliance requirements?', a: 'Yes. Every managed IT engagement includes baseline security controls, and we align our practices with standards such as SOC 2, HIPAA, and GDPR depending on your industry. Compliance posture starts strong from day one.' },
  { q: 'How does pricing work?', a: 'Managed services are a predictable monthly fee scoped to your environment, team size, and coverage level. After a short assessment we provide a clear, itemized plan so there are no surprises.' },
  { q: 'What happens during the transition from our current provider?', a: 'We run a structured onboarding: a full assessment of your environment, documentation, and access handover, then a phased cutover with zero downtime as the goal. You get a single point of contact throughout.' },
];

function M2FAQ() {
  const [open, setOpen] = useM2bState(0);
  return (
    <section style={{ background: 'var(--navy-900)', padding: 'clamp(96px,11vw,120px) 0' }}>
      <div className="m2-wrap">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <M2Eyebrow style={{ marginBottom: 18 }}>Frequently asked</M2Eyebrow>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: '0 auto', maxWidth: 560, textWrap: 'balance' }}>What organizations want to know.</h2>
        </div>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {M2_FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ background: isOpen ? 'rgba(70,76,159,0.06)' : 'transparent', borderBottom: isOpen ? '1px solid transparent' : '1px solid var(--slate-800)', borderLeft: isOpen ? '3px solid var(--indigo-500)' : '3px solid transparent', borderRadius: isOpen ? '0 16px 16px 0' : 0, transition: 'background .2s' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 'clamp(18px,2vw,22px) clamp(18px,2.2vw,26px)' }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', lineHeight: 1.35 }}>{f.q}</span>
                  <span style={{ flexShrink: 0, color: 'var(--indigo-400)', fontSize: 22, fontWeight: 700, lineHeight: 1, transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform .2s ease' }}>›</span>
                </button>
                {isOpen && <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 15, lineHeight: 1.7, color: 'var(--slate-400)', margin: 0, padding: '0 clamp(18px,2.2vw,26px) clamp(20px,2.4vw,26px)', animation: 'm2Fade .25s ease', maxWidth: 740 }}>{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ 7 · CTA / CONTACT ============ */
function M2Contact() {
  const [sent, setSent] = useM2bState(false);
  const [svc, setSvc] = useM2bState('');
  const services = ['IT Support', 'Co-Managed IT', 'Network Administration', 'Server Management', 'Cybersecurity & Compliance', 'IT Asset Management', 'Not sure yet'];
  return (
    <section id="m2-contact" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg, var(--indigo-900) 0%, var(--navy-950) 70%)', padding: 'clamp(96px,11vw,120px) 0' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 70% at 50% 30%, rgba(70,76,159,0.4), transparent 62%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', whiteSpace: 'nowrap', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(60px,11vw,150px)', letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.03)', pointerEvents: 'none', lineHeight: 1 }}>Engineered for your ambition</div>
      <div className="m2-wrap" style={{ position: 'relative' }}>
        <div className="m2-contact-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }}>
          <div>
            <M2Eyebrow style={{ marginBottom: 22 }}>Start the conversation</M2Eyebrow>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(34px,4.6vw,56px)', lineHeight: 1.02, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#fff', margin: '0 0 22px' }}>Let's take IT off your plate.</h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'var(--slate-400)', margin: '0 0 28px', maxWidth: 420 }}>Tell us about your environment and goals. We respond within one business day with next steps and a preliminary plan.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['mail', 'partners@xorora.com'], ['phone', '+1 (415) 555-0148']].map(([ic, v]) => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 14, color: 'rgba(255,255,255,.82)' }}>
                  <span style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tangerine-400)' }}><i data-lucide={ic} style={{ width: 16 }}></i></span>{v}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)', padding: 'clamp(26px,3vw,38px)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.18)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 8px' }}>Request received</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'var(--slate-400)', margin: 0 }}>We will reach out within one business day.</p>
              </div>
            ) : (
              <React.Fragment>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <M2Field label="Full name" placeholder="Jordan Reyes" />
                  <M2Field label="Work email" placeholder="you@company.com" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
                  <M2Field label="Company" placeholder="Company name" />
                  <M2Select label="Service needed" value={svc} onChange={setSvc} options={services} />
                </div>
                <div style={{ marginTop: 16 }}><M2Field label="How can we help?" placeholder="A sentence about your IT goals" textarea /></div>
                <div style={{ marginTop: 24 }}><M2Submit onClick={() => setSent(true)} /></div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function M2FieldLabel({ children }) {
  return <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--slate-500)' }}>{children}</span>;
}

function M2Field({ label, placeholder, textarea }) {
  const [f, setF] = useM2bState(false);
  const c = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 10, border: '1px solid ' + (f ? 'var(--indigo-400)' : 'rgba(255,255,255,.1)'), background: 'rgba(255,255,255,.05)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none', boxShadow: f ? '0 0 0 3px rgba(70,76,159,0.2)' : 'none', transition: 'border-color .15s, box-shadow .15s' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <M2FieldLabel>{label}</M2FieldLabel>
      {textarea ? <textarea rows={3} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={c} /> : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={c} />}
    </label>
  );
}

function M2Select({ label, value, onChange, options }) {
  const [f, setF] = useM2bState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <M2FieldLabel>{label}</M2FieldLabel>
      <div style={{ position: 'relative' }}>
        <select value={value} onChange={e => onChange(e.target.value)} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ appearance: 'none', WebkitAppearance: 'none', fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 38px 12px 14px', borderRadius: 10, border: '1px solid ' + (f ? 'var(--indigo-400)' : 'rgba(255,255,255,.1)'), background: 'rgba(255,255,255,.05)', color: value ? '#fff' : 'var(--slate-500)', outline: 'none', width: '100%', boxSizing: 'border-box', cursor: 'pointer', boxShadow: f ? '0 0 0 3px rgba(70,76,159,0.2)' : 'none' }}>
          <option value="" style={{ color: '#111' }}>Select a service</option>
          {options.map(o => <option key={o} value={o} style={{ color: '#111' }}>{o}</option>)}
        </select>
        <i data-lucide="chevron-down" style={{ position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)', width: 16, color: 'var(--slate-500)', pointerEvents: 'none' }}></i>
      </div>
    </label>
  );
}

function M2Submit({ onClick }) {
  const [h, setH] = useM2bState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ width: '100%', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16, padding: '15px 26px', borderRadius: 10, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 9, background: h ? 'var(--tangerine-600)' : 'var(--tangerine-500)', color: 'var(--xo-ink)', boxShadow: '0 4px 24px rgba(242,107,33,0.3)', transform: h ? 'translateY(-1px)' : 'none', transition: 'all .15s' }}>Submit request <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></button>
  );
}

/* ============ APP ============ */
function M2App() {
  const toContact = () => { const el = document.getElementById('m2-contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 30, behavior: 'smooth' }); };
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--navy-900)' }}>
      <MegaNav onLetsTalk={toContact} />
      <M2Hero onTalk={toContact} />
      <M2Rule />
      <M2Process />
      <M2Rule />
      <M2Services onTalk={toContact} />
      <M2Why />
      <M2Industries />
      <M2Rule />
      <M2FAQ />
      <M2Contact />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<M2App />);
