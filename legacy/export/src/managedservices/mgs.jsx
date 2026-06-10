// Xorora — Managed Services page
const { useState: useMgsState } = React;

function MgsHeader({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#02060F', marginTop: -72, paddingTop: 72 }}>
      <SignalField />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 80% at 18% 0%, rgba(91,141,239,0.30) 0%, rgba(39,85,195,0.10) 34%, transparent 64%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,150,240,.4), transparent)' }} />
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1240, margin: '0 auto', padding: 'clamp(96px,11vw,140px) 32px clamp(64px,7vw,96px)', display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }} className="mgs-header-grid">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 16px', borderRadius: 'var(--r-pill)', border: '1px solid rgba(255,255,255,.16)', background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', marginBottom: 24, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--tangerine-400)' }}>
            <i data-lucide="server-cog" style={{ width: 14 }}></i> Managed Services
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(34px,4.6vw,60px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 24px', textWrap: 'balance' }}>
            Your IT should work as hard as <span style={{ background: 'linear-gradient(110deg,#C3C6EC,#8E94E0 46%,#FF8A3D)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>your team does<span style={{ color: 'var(--tangerine-400)', WebkitTextFillColor: 'var(--tangerine-400)' }}>.</span></span>
          </h1>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, lineHeight: 1.62, color: 'rgba(255,255,255,.74)', maxWidth: 520, margin: '0 0 32px' }}>
            Xorora serves as an extension of your IT team, providing proactive management, monitoring, and support so your internal staff can focus on strategic priorities.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="light" size="lg" onClick={onTalk}>Talk to our Consultant <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            <Button variant="onDark" size="lg" onClick={onTalk}>Book a Strategy Session</Button>
          </div>
        </div>
        <MgsGlassForm />
      </div>
    </section>
  );
}

function MgsGlassForm() {
  const [sent, setSent] = useMgsState(false);
  const [nda, setNda] = useMgsState(false);
  const fld = (label, ph, ta) => <MgsHeroField label={label} placeholder={ph} textarea={ta} />;
  return (
    <div id="mgs-hero-form" style={{ position: 'relative', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3vw,40px)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', boxShadow: '0 30px 80px -30px rgba(0,0,0,0.7)' }} className="mgs-glass">
      <div style={{ position: 'absolute', inset: 0, borderRadius: 'var(--r-xl)', background: 'linear-gradient(150deg, rgba(255,255,255,0.10), rgba(255,255,255,0) 45%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.2)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 24, color: '#fff', margin: '0 0 8px' }}>Message sent</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.7)', margin: 0 }}>Our team will reply within one business day.</p>
          </div>
        ) : (
          <React.Fragment>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(24px,2.4vw,32px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 24px' }}>Book a strategy session</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>{fld('Full Name', 'Jordan Reyes')}{fld('Email', 'you@company.com')}</div>
            <div style={{ marginTop: 18 }}>{fld('About your IT environment', 'A sentence about your setup', true)}</div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, cursor: 'pointer' }} onClick={() => setNda(!nda)}>
              <span style={{ width: 20, height: 20, borderRadius: 'var(--r-sm)', border: '1px solid ' + (nda ? 'var(--tangerine-400)' : 'rgba(255,255,255,.3)'), background: nda ? 'var(--tangerine-500)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}>{nda && <i data-lucide="check" style={{ width: 13, color: '#fff' }}></i>}</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, color: 'rgba(255,255,255,.78)' }}>Send me an NDA first</span>
            </label>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 26, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,.5)', maxWidth: 200, lineHeight: 1.45 }}>By sending this form you accept our Privacy Policy.</span>
              <Button variant="primary" size="lg" onClick={() => setSent(true)}>Send Message <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function MgsHeroField({ label, placeholder, textarea }) {
  const [f, setF] = useMgsState(false);
  const common = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '11px 2px', width: '100%', boxSizing: 'border-box', background: 'transparent', color: '#fff', outline: 'none', border: 'none', borderBottom: '1px solid ' + (f ? 'var(--tangerine-400)' : 'rgba(255,255,255,.28)'), resize: 'none', transition: 'border-color .15s' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '.02em', color: 'rgba(255,255,255,.6)' }}>{label}</span>
      {textarea ? <textarea rows={2} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} /> : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={common} />}
    </label>
  );
}

/* HOW WE WORK */
function MgsApproach() {
  const steps = [
    { n: '01', icon: 'search', name: 'Comprehensive Assessment', body: 'We start with a thorough evaluation of your current IT environment to identify strengths, risks, and opportunities for improvement. No assumptions, just data.' },
    { n: '02', icon: 'map', name: 'Customized Strategy', body: 'Based on the assessment, we develop a tailored IT plan that aligns with your business goals. Every recommendation ties directly to a measurable outcome.' },
    { n: '03', icon: 'life-buoy', name: 'Implementation & Support', body: 'We implement the agreed solutions and provide continuous monitoring and proactive support. Your team gets a single point of contact, not a ticket queue.' },
  ];
  return (
    <DarkSection bloom="50% 6%">
      <SectionHead label="How we work" title="From assessment to optimization, we've got it." sub="Our approach ensures your IT infrastructure is optimized for current demands and scalable for future growth. Three steps, no surprises." onDark align="center" style={{ marginBottom: 52, maxWidth: 760 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="mgs-grid3">
        {steps.map(s => (
          <div key={s.n} style={{ position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.6vw,32px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{ width: 46, height: 46, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.28)', border: '1px solid rgba(120,150,240,.32)', color: 'var(--indigo-300)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={s.icon} style={{ width: 22 }}></i></span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.1em', color: 'var(--tangerine-400)' }}>{s.n}</span>
            </div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 18.5, color: '#fff', margin: '0 0 10px' }}>{s.name}</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.62)', margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </DarkSection>
  );
}

/* OUR MANAGED IT SERVICES */
function MgsServices({ onTalk }) {
  const svc = [
    { icon: 'infinity', name: 'DevOps', body: 'CI/CD pipelines, infrastructure as code, and automated deployments. We keep your release cycle fast, reliable, and observable so you ship with confidence.' },
    { icon: 'shield-check', name: 'Cybersecurity', body: 'Baseline security controls, threat monitoring, and compliance built in. We harden your stack and keep your security posture strong around the clock.' },
    { icon: 'network', name: 'IT Infrastructure', body: 'Proactive management of cloud, networks, and servers. We monitor, patch, and optimize your critical infrastructure for peak performance and uptime.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Our managed IT services" title="Technology support that keeps you moving." sub="Proactive, fully managed IT so your internal team can focus on what moves the business forward." style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="mgs-grid2">
        {svc.map(s => <MgsServiceCard key={s.name} {...s} onTalk={onTalk} />)}
        <MgsNotSureCard onTalk={onTalk} />
      </div>
    </LightSection>
  );
}

function MgsServiceCard({ icon, name, body, onTalk }) {
  const [h, setH] = useMgsState(false);
  return (
    <div onClick={onTalk} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', background: h ? 'var(--surface)' : 'var(--slate-50)', border: '1px solid ' + (h ? 'var(--border-strong)' : 'var(--border)'), borderRadius: 'var(--r-lg)', padding: 'clamp(26px,2.8vw,36px)', boxShadow: h ? 'var(--shadow-md)' : 'none', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--tangerine-500))', transform: h ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <span style={{ width: 50, height: 50, borderRadius: 'var(--r-md)', background: h ? 'var(--xo-indigo)' : 'var(--indigo-50)', color: h ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}><i data-lucide={icon} style={{ width: 24 }}></i></span>
        <i data-lucide="arrow-up-right" style={{ width: 19, color: h ? 'var(--tangerine-500)' : 'var(--slate-400)', transition: 'color .2s' }}></i>
      </div>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 21, color: 'var(--fg1)', margin: '0 0 12px', lineHeight: 1.25 }}>{name}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--fg2)', margin: '0 0 18px' }}>{body}</p>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, color: h ? 'var(--tangerine-600)' : 'var(--accent)', transition: 'color .15s' }}>Learn more <i data-lucide="arrow-right" style={{ width: 15 }}></i></span>
    </div>
  );
}

function MgsNotSureCard({ onTalk }) {
  const [h, setH] = useMgsState(false);
  return (
    <div onClick={onTalk} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', background: 'var(--navy-900)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-lg)', padding: 'clamp(26px,2.8vw,36px)', boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-sm)', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 80% at 100% 0%, rgba(70,76,159,.4), transparent 60%)', pointerEvents: 'none' }} />
      <XWatermark size={240} color="rgba(120,150,240,0.07)" style={{ bottom: -90, right: -50 }} />
      <div style={{ position: 'relative' }}>
        <span style={{ width: 50, height: 50, borderRadius: 'var(--r-md)', background: 'var(--tangerine-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><i data-lucide="plus" style={{ width: 24 }}></i></span>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 21, color: '#fff', margin: '0 0 12px', lineHeight: 1.25 }}>Not sure where to start?</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.68)', margin: '0 0 18px' }}>Every organization is different. Let's talk about your environment, your goals, and where managed IT can make the biggest impact for your team.</p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, color: 'var(--tangerine-400)' }}>Let's talk <i data-lucide="arrow-right" style={{ width: 15 }}></i></span>
      </div>
    </div>
  );
}

/* WHY XORORA */
function MgsWhy({ onTalk }) {
  const cards = [
    ['clock', '24/7 Proactive Monitoring', 'Our team identifies and resolves issues before they impact your business. No waiting for something to break.'],
    ['user-check', 'Single Point of Contact', 'You outsource, we manage and deliver. No finger-pointing between vendors, no runaround. One team owns the outcome.'],
    ['shield-check', 'Security Built In, Not Bolted On', 'Every managed IT engagement includes baseline security controls and compliance-ready practices. Your posture starts strong from day one.'],
    ['trending-up', 'Strategic, Not Just Tactical', 'Beyond fixing tickets, we help you plan for growth, budget for technology, and align IT spending with business value.'],
  ];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-950)', padding: 'clamp(72px,9vw,118px) 32px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 70% at 15% 30%, rgba(70,76,159,0.3), transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }} className="mgs-why-grid">
        <div>
          <SectionHead label="Why Xorora" title="A partner, not a vendor." onDark />
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '24px 0 28px', maxWidth: 420 }}>
            We don't sell technology and walk away. Xorora works alongside your organization to keep systems secure, your team productive, and your infrastructure aligned with where the business is headed.
          </p>
          <Button variant="onDark" size="lg" onClick={onTalk}>About Xorora <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {cards.map(([ic, t, b]) => (
            <div key={t} style={{ display: 'flex', gap: 18, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: 'clamp(20px,2.2vw,26px)' }}>
              <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.28)', border: '1px solid rgba(120,150,240,.32)', color: 'var(--indigo-300)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={ic} style={{ width: 21 }}></i></span>
              <div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 17.5, color: '#fff', margin: '0 0 7px', lineHeight: 1.25 }}>{t}</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,.62)', margin: 0 }}>{b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* INDUSTRIES */
function MgsIndustries() {
  const inds = (window.XO_NAV && window.XO_NAV.industries) || [];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="Industries we serve" title="Managed IT tailored to your reality." sub="We partner with organizations across industries, each with distinct operational and regulatory requirements." align="center" style={{ marginBottom: 52, maxWidth: 700 }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
        {inds.map(i => <MgsIndustryPill key={i.name} {...i} />)}
      </div>
    </LightSection>
  );
}

function MgsIndustryPill({ name, icon, href }) {
  const [h, setH] = useMgsState(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', padding: '13px 22px', borderRadius: 'var(--r-pill)', background: h ? 'var(--xo-indigo)' : 'var(--slate-50)', border: '1px solid ' + (h ? 'transparent' : 'var(--border)'), boxShadow: h ? 'var(--shadow-md)' : 'none', transform: h ? 'translateY(-2px)' : 'none', transition: 'all .2s' }}>
      <i data-lucide={icon} style={{ width: 18, color: h ? 'var(--tangerine-400)' : 'var(--xo-indigo)' }}></i>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: h ? '#fff' : 'var(--fg1)' }}>{name}</span>
    </a>
  );
}

/* FAQ */
const MGS_FAQS = [
  { q: 'What does "managed IT" actually include?', a: 'It means Xorora takes ownership of your IT environment: 24/7 monitoring, help desk support, patch management, infrastructure administration, server management, vendor coordination, and strategic planning. We become an extension of your team, not a break-fix shop you call when something fails.' },
  { q: 'How is this different from co-managed IT?', a: 'Fully managed means we own the entire IT function. Co-managed means we work alongside your existing in-house IT staff, filling gaps, handling overflow, and bringing specialized expertise where your team needs it. We tailor the model to your structure.' },
  { q: 'How fast is your response time?', a: 'Critical issues get an immediate response through our 24/7 monitoring, with most resolved before they ever impact your business. We agree exact response and resolution targets in your service-level agreement up front.' },
  { q: 'Can you support our compliance requirements?', a: 'Yes. Every managed IT engagement includes baseline security controls, and we align our practices with standards such as SOC 2, HIPAA, and GDPR depending on your industry. Compliance posture starts strong from day one.' },
  { q: 'What industries do you serve?', a: 'We work across Healthcare, Real Estate, Fintech, E-commerce, Edtech, Logistics, SaaS, Startups, and Travel & Hospitality, each with distinct operational and regulatory needs that shape how we manage IT.' },
  { q: 'How does pricing work?', a: 'Managed services are a predictable monthly fee scoped to your environment, team size, and coverage level. After a short assessment we provide a clear, itemized plan so there are no surprises.' },
  { q: 'What happens during the transition from our current provider?', a: 'We run a structured onboarding: a full assessment of your environment, documentation, and access handover, then a phased cutover with zero downtime as the goal. You get a single point of contact throughout.' },
];

function MgsFAQ() {
  const [open, setOpen] = useMgsState(0);
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead label="Frequently asked questions" title="What organizations want to know." align="center" style={{ marginBottom: 44, maxWidth: 640 }} />
      <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {MGS_FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ background: 'var(--surface)', border: '1px solid ' + (isOpen ? 'var(--border-strong)' : 'var(--border)'), borderRadius: 'var(--r-lg)', overflow: 'hidden', transition: 'border-color .18s' }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 'clamp(18px,2vw,22px) clamp(20px,2.4vw,28px)' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--fg1)', lineHeight: 1.35 }}>{f.q}</span>
                <i data-lucide={isOpen ? 'chevron-up' : 'chevron-down'} style={{ width: 20, flexShrink: 0, color: isOpen ? 'var(--tangerine-500)' : 'var(--slate-400)' }}></i>
              </button>
              {isOpen && <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.7, color: 'var(--fg2)', margin: 0, padding: '0 clamp(20px,2.4vw,28px) clamp(20px,2.4vw,26px)', animation: 'mgsFade .25s ease' }}>{f.a}</p>}
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}

/* CONTACT */
function MgsContact({ innerRef }) {
  const [sent, setSent] = useMgsState(false);
  const [svc, setSvc] = useMgsState('');
  const [budget, setBudget] = useMgsState('');
  const services = ['DevOps', 'Cybersecurity', 'IT Infrastructure', 'Fully managed IT', 'Co-managed IT', 'Not sure yet'];
  const budgets = ['up to $2k / mo', '$2k – $5k / mo', '$5k – $10k / mo', '$10k+ / mo'];
  return (
    <section ref={innerRef} id="mgs-contact" style={{ background: 'var(--navy-950)', padding: 'clamp(64px,8vw,104px) 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)', padding: 'clamp(32px,4.5vw,60px)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,.4), transparent 58%)', pointerEvents: 'none' }} />
        <XWatermark size={420} color="rgba(120,150,240,0.05)" style={{ bottom: -180, left: -120 }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(36px,5vw,64px)' }} className="mgs-contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,46px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 22px' }}>Let's take IT off your plate.</h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.66)', margin: '0 0 28px', maxWidth: 420 }}>Tell us about your environment and goals. We respond within one business day with next steps and a preliminary plan.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 'auto' }}>
              {[['mail', 'partners@xorora.com'], ['phone', '+1 (415) 555-0148']].map(([ic, v]) => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.85)' }}>
                  <span style={{ width: 36, height: 36, borderRadius: 'var(--r-md)', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tangerine-400)' }}><i data-lucide={ic} style={{ width: 17 }}></i></span>{v}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px,3vw,32px)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '56px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.18)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i data-lucide="check" style={{ width: 28 }}></i></div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 8px' }}>Request received</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: 'rgba(255,255,255,.65)', margin: 0 }}>We will reach out within one business day.</p>
              </div>
            ) : (
              <React.Fragment>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <MgsField label="Full name" placeholder="Jordan Reyes" />
                  <MgsField label="Work email" placeholder="you@company.com" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
                  <MgsField label="Company" placeholder="Company name" />
                  <MgsField label="Team size" placeholder="e.g. 50 employees" />
                </div>
                <div style={{ marginTop: 14 }}><MgsSelect label="Service needed" value={svc} onChange={setSvc} options={services} ph="Select a service" /></div>
                <div style={{ marginTop: 16 }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginBottom: 10 }}>Monthly budget</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                    {budgets.map(b => {
                      const on = budget === b;
                      return <button key={b} onClick={() => setBudget(b)} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, cursor: 'pointer', padding: '8px 15px', borderRadius: 'var(--r-pill)', transition: 'all .15s', border: '1px solid ' + (on ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'), background: on ? 'rgba(242,107,33,.14)' : 'rgba(255,255,255,.03)', color: on ? 'var(--tangerine-400)' : 'rgba(255,255,255,.75)' }}>{b}</button>;
                    })}
                  </div>
                </div>
                <div style={{ marginTop: 14 }}><MgsField label="How can we help?" placeholder="A sentence about your IT goals" textarea /></div>
                <div style={{ marginTop: 24 }}><Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSent(true)}>Submit request <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button></div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function MgsField({ label, placeholder, textarea }) {
  const [f, setF] = useMgsState(false);
  const c = { fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 14px', borderRadius: 'var(--r-md)', border: '1px solid ' + (f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'), background: 'rgba(255,255,255,.04)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none', boxShadow: f ? 'var(--shadow-focus)' : 'none' };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{label}</span>
      {textarea ? <textarea rows={3} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={c} /> : <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={c} />}
    </label>
  );
}

function MgsSelect({ label, value, onChange, options, ph }) {
  const [f, setF] = useMgsState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{label}</span>
      <div style={{ position: 'relative' }}>
        <select value={value} onChange={e => onChange(e.target.value)} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ appearance: 'none', WebkitAppearance: 'none', fontFamily: 'Poppins, sans-serif', fontSize: 15, padding: '12px 38px 12px 14px', borderRadius: 'var(--r-md)', border: '1px solid ' + (f ? 'var(--tangerine-500)' : 'rgba(255,255,255,.16)'), background: 'rgba(255,255,255,.04)', color: value ? '#fff' : 'rgba(255,255,255,.5)', outline: 'none', width: '100%', boxSizing: 'border-box', cursor: 'pointer' }}>
          <option value="" style={{ color: '#111' }}>{ph}</option>
          {options.map(o => <option key={o} value={o} style={{ color: '#111' }}>{o}</option>)}
        </select>
        <i data-lucide="chevron-down" style={{ position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)', width: 16, color: 'rgba(255,255,255,.5)', pointerEvents: 'none' }}></i>
      </div>
    </label>
  );
}

function MgsApp() {
  const ref = React.useRef(null);
  const toContact = () => { const el = document.getElementById('mgs-contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 30, behavior: 'smooth' }); };
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toContact} />
      <MgsHeader onTalk={toContact} />
      <MgsApproach />
      <MgsServices onTalk={toContact} />
      <MgsWhy onTalk={toContact} />
      <MgsIndustries />
      <MgsFAQ />
      <MgsContact innerRef={ref} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MgsApp />);
