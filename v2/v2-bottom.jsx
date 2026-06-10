// Xorora Homepage V2 — Section 4 (case studies), Section 5 (how we deliver), Section 6 (contact + FAQ)
const { useState: useBotState } = React;

// light section wrapper (mirrors the design system's LightSection)
function V2Light({ bg = 'var(--surface)', children, style, id }) {
  return (
    <section id={id} style={{ background: bg, padding: 'clamp(76px,9vw,120px) 32px', ...style }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

// shared tangerine eyebrow (matches the dark sections) so every section reads as one system
function V2Eyebrow({ children, center }) {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tangerine-500)', marginBottom: 16, textAlign: center ? 'center' : 'left' }}>{children}</div>
  );
}

/* ============ SECTION 4 — CASE STUDIES (dark image cards, no client logo) ============ */
function V2Cases({ onTalk }) {
  const cases = [
    { href: 'Unified AI Voice Operations Case Study.html', img: 'assets/mocks/portal-business.webp', tag: 'AI Voice & B2B SaaS', title: 'From fragmented tools to unified AI voice operations', stat: '4', statLabel: 'Portals on one backend' },
    { href: 'Regula Case Study.html', img: 'assets/regula/featured.jpg', tag: 'RegTech & Compliance', title: 'Real-time compliance intelligence for emerging markets', stat: '70%', statLabel: 'Less compliance workload' },
    { href: 'PingPanda Case Study.html', img: 'assets/pingpanda/header-bg.jpg', tag: 'SaaS & Real-time', title: 'Real-time SaaS event monitoring with instant visibility', stat: 'Real-time', statLabel: 'Event delivery' },
  ];
  return (
    <V2Light bg="var(--surface)">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 18 }}>
        <div style={{ maxWidth: 640 }}>
          <V2Eyebrow>Our work</V2Eyebrow>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4.6vw,58px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: 'var(--fg1)', margin: 0, textWrap: 'balance' }}>
            Projects that <span style={{ color: 'var(--xo-indigo)' }}>shipped</span> and the <span style={{ color: 'var(--xo-indigo)' }}>results</span> that followed
          </h2>
        </div>
        <a href="Our Work.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: 'var(--fg1)', textDecoration: 'none', padding: '11px 20px', border: '1px solid var(--border-strong)', borderRadius: 'var(--r-pill)' }}>
          View all <i data-lucide="arrow-right" style={{ width: 16 }}></i>
        </a>
      </div>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.6, color: 'var(--fg2)', margin: '0 0 44px', maxWidth: 560 }}>
        Live products built for global clients. Here are our most recent.
      </p>
      <div className="v2-cases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {cases.map(c => <V2CaseCard key={c.href} {...c} />)}
      </div>
      <div style={{ marginTop: 40 }}>
        <Button variant="primary" size="lg" onClick={onTalk}>Book a free strategy call <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
      </div>
    </V2Light>
  );
}

function V2CaseCard({ href, img, tag, title, stat, statLabel }) {
  const [h, setH] = useBotState(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', display: 'block', textDecoration: 'none', overflow: 'hidden', borderRadius: 'var(--r-xl)', minHeight: 440, background: '#080C1E', border: '1px solid rgba(255,255,255,.1)', boxShadow: h ? '0 38px 84px -34px rgba(8,12,30,.7)' : '0 22px 56px -34px rgba(8,12,30,.5)', transform: h ? 'translateY(-4px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s' }}>
      <img src={img} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1)', transition: 'transform .5s cubic-bezier(.16,1,.3,1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,12,30,0.35) 0%, rgba(8,12,30,0.2) 38%, rgba(8,12,30,0.94) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 60% at 85% 5%, rgba(91,141,239,0.3), transparent 60%)' }} />
      <span style={{ position: 'absolute', top: 20, left: 20, fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'var(--xo-ink)', background: '#fff', borderRadius: 'var(--r-pill)', padding: '7px 14px' }}>{tag}</span>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(24px,2.4vw,30px)' }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(20px,1.7vw,24px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#fff', margin: '0 0 20px' }}>{title}</h3>
        <div style={{ height: 1, background: 'rgba(255,255,255,.18)', marginBottom: 18 }} />
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', color: 'var(--tangerine-400)', lineHeight: 1 }}>{stat}</div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,.72)', marginTop: 5 }}>{statLabel}</div>
          </div>
          <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: '50%', background: h ? '#fff' : 'var(--xo-indigo)', color: h ? 'var(--xo-ink)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}>
            <i data-lucide="arrow-up-right" style={{ width: 20 }}></i>
          </span>
        </div>
      </div>
    </a>
  );
}

/* ============ SECTION 5 — HOW WE DELIVER AI AND DATA INNOVATION ============ */
function V2Deliver() {
  const [active, setActive] = useBotState(0);
  const steps = [
    { n: '01', name: 'Discover', body: 'We assess your data landscape, goals, and constraints — mapping use cases, data readiness, and the highest-value opportunities before a line of code is written.' },
    { n: '02', name: 'Validate', body: 'We prototype fast and test against real data and KPIs, proving value and de-risking the approach before full investment.' },
    { n: '03', name: 'Build', body: 'We engineer production-grade data pipelines, models, and applications — secure, observable, and built to integrate with your existing stack.' },
    { n: '04', name: 'Scale', body: 'Expand AI and data capabilities across teams with a unified operational model. We optimize performance, enhance governance, build evaluation suites, and enable organizational adoption through training, change management, and multi-use-case rollout.' },
  ];
  return (
    <V2Light bg="var(--slate-50)">
      <V2Eyebrow>Our process</V2Eyebrow>
      <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(28px,4.2vw,52px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: 'var(--fg1)', margin: '0 0 48px', textWrap: 'balance' }}>How we deliver AI and data innovation</h2>
      <div className="v2-deliver-grid" style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'stretch', borderTop: '1px solid var(--border)' }}>
        <div className="v2-deliver-visual" style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 36 }}>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(56px,7vw,96px)', lineHeight: 0.9, letterSpacing: '-0.04em', color: 'var(--fg1)' }}>{steps[active].n}</div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0 8px' }}>
            <V2DiamondStack active={active} />
          </div>
        </div>
        <div style={{ borderLeft: '1px solid var(--border)' }}>
          {steps.map((s, i) => {
            const on = active === i;
            return (
              <div key={i} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}
                style={{ borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,2.4vw,32px)', cursor: 'pointer', background: on ? 'var(--surface)' : 'transparent', transition: 'background .18s' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: on ? 'var(--tangerine-600)' : 'var(--slate-400)', transition: 'color .18s' }}>{s.n}</span>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(20px,2.2vw,26px)', letterSpacing: '-0.01em', color: on ? 'var(--xo-indigo)' : 'var(--fg1)', margin: 0, transition: 'color .18s' }}>{s.name}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateRows: on ? '1fr' : '0fr', transition: 'grid-template-rows .3s cubic-bezier(.4,0,.2,1)' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.65, color: 'var(--fg2)', margin: 0, paddingTop: 14, paddingLeft: 29, maxWidth: 620 }}>{s.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </V2Light>
  );
}

function V2DiamondStack({ active }) {
  const cx = 150, rx = 104, ry = 46;
  const cys = [66, 112, 158, 204];
  const path = cy => `M${cx},${cy - ry} L${cx + rx},${cy} L${cx},${cy + ry} L${cx - rx},${cy} Z`;
  const order = [0, 1, 2, 3].filter(i => i !== active).concat(active);
  return (
    <svg viewBox="0 0 300 270" width="100%" style={{ maxWidth: 340, overflow: 'visible' }} aria-hidden="true">
      <defs>
        <linearGradient id="v2DiaActive" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3A63D8" />
          <stop offset="1" stopColor="#1E3FA8" />
        </linearGradient>
      </defs>
      {order.map(i => {
        const on = i === active;
        return (
          <path key={i} d={path(cys[i])}
            fill={on ? 'url(#v2DiaActive)' : 'rgba(70,90,180,0.13)'}
            stroke={on ? 'none' : 'rgba(70,90,180,0.30)'} strokeWidth="1"
            style={{ filter: on ? 'drop-shadow(0 14px 22px rgba(40,70,180,0.35))' : 'none', transition: 'fill .25s, stroke .25s' }} />
        );
      })}
    </svg>
  );
}

/* ============ SECTION 6 — CONTACT FORM + FAQ ============ */
/* ============ ENGAGEMENT MODELS ============ */
function V2Engagement({ onTalk }) {
  const models = [
    { n: '01', icon: 'square-check', name: 'Fixed Scope', tagline: 'Defined deliverable, timeline, and price.',
      body: 'When requirements are clear, we lock scope, milestones, and a fixed price up front — predictable cost and a committed delivery date, with change control if priorities shift.',
      points: ['Predictable, fixed budget', 'Committed delivery date', 'Clear milestones & change control'],
      best: 'Best for well-defined builds, MVPs, and fixed-budget projects.' },
    { n: '02', icon: 'sliders-horizontal', name: 'Variable Scope', tagline: 'Time-and-materials flexibility.',
      body: 'When the path will flex as you learn, we work in agile sprints against a prioritized backlog. You steer scope sprint by sprint and pay only for what you build.',
      points: ['Adapt scope every sprint', 'Pay for what you build', 'Reprioritize as you learn'],
      best: 'Best for evolving products, R&D, and long-running roadmaps.', featured: true },
    { n: '03', icon: 'users', name: 'Staff Augmentation', tagline: 'Senior engineers embedded in your team.',
      body: 'When you own the roadmap and need capacity or specialized skills, we embed vetted engineers into your team and process. They ramp fast, work in your stack, and report to you.',
      points: ['Vetted senior engineers', 'Embed in your process', 'Scale capacity up or down'],
      best: 'Best for in-house teams needing capacity or niche expertise.' },
  ];
  return (
    <V2Light bg="var(--surface)">
      <div style={{ marginBottom: 'clamp(40px,5vw,56px)', maxWidth: 720 }}>
        <V2Eyebrow>Engagement models</V2Eyebrow>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(28px,4.2vw,52px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: 'var(--fg1)', margin: '0 0 16px', textWrap: 'balance' }}>Pick the engagement that fits<span style={{ color: 'var(--tangerine-500)' }}>.</span></h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(15px,1.6vw,18px)', lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>Every model draws from the same senior, vetted talent pool and the same battle-tested delivery process. Only the commercials and the control change.</p>
      </div>
      <div className="v2-models-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {models.map(m => <V2ModelCard key={m.name} {...m} onTalk={onTalk} />)}
      </div>
    </V2Light>
  );
}

function V2ModelCard({ n, icon, name, tagline, body, points, best, featured, onTalk }) {
  const [h, setH] = useBotState(false);
  const dark = featured;
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: 'var(--r-lg)', padding: 'clamp(26px,2.8vw,34px)', background: dark ? 'var(--navy-900)' : 'var(--slate-50)', border: '1px solid ' + (dark ? 'rgba(120,150,240,.3)' : (h ? 'var(--border-strong)' : 'var(--border)')), boxShadow: h ? (dark ? 'var(--shadow-lg)' : 'var(--shadow-md)') : (dark ? 'var(--shadow-sm)' : 'none'), transform: h ? 'translateY(-4px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      {dark && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 80% at 100% 0%, rgba(70,76,159,.4), transparent 60%)', pointerEvents: 'none' }} />}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <span style={{ width: 50, height: 50, borderRadius: 'var(--r-md)', background: dark ? 'var(--tangerine-500)' : 'var(--indigo-50)', color: dark ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={icon} style={{ width: 24 }}></i></span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.14em', color: dark ? 'var(--tangerine-400)' : 'var(--slate-400)' }}>MODEL {n}</span>
        </div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 23, color: dark ? '#fff' : 'var(--fg1)', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{name}</h3>
        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14.5, color: dark ? 'var(--indigo-300)' : 'var(--xo-indigo)', marginBottom: 14 }}>{tagline}</div>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: dark ? 'rgba(255,255,255,.7)' : 'var(--fg2)', margin: '0 0 20px' }}>{body}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 22 }}>
          {points.map(p => (
            <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <i data-lucide="check" style={{ width: 17, flexShrink: 0, color: dark ? 'var(--tangerine-400)' : 'var(--xo-indigo)' }}></i>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: dark ? 'rgba(255,255,255,.85)' : 'var(--fg1)' }}>{p}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid ' + (dark ? 'rgba(255,255,255,.12)' : 'var(--border)') }}>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, lineHeight: 1.5, color: dark ? 'rgba(255,255,255,.6)' : 'var(--fg3)', margin: '0 0 16px' }}>{best}</p>
          <button onClick={onTalk} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: dark ? 'var(--tangerine-400)' : 'var(--accent)' }}>Discuss this model <i data-lucide="arrow-right" style={{ width: 15 }}></i></button>
        </div>
      </div>
    </div>
  );
}

function V2Contact() {
  const faqs = [
    { q: 'Where is Xorora based?', a: 'We are a distributed team with hubs in San Francisco, London, and Singapore, working with clients across North America, Europe, and Asia.' },
    { q: 'How quickly can you start?', a: 'For most engagements we can kick off within one to two weeks of a signed agreement. A focused discovery can often begin within days.' },
    { q: 'Do you sign NDAs?', a: 'Yes, always. An NDA is a standard step in our onboarding process before any project details, business context, or technical information is discussed. We take IP protection seriously.' },
    { q: 'What does a project typically cost?', a: 'It depends on scope, integrations, and team model. After a short discovery we provide a clear, itemized estimate so you know what each milestone costs before we start.' },
    { q: 'How do I know the project will be on time?', a: 'We work in short, demoable sprints with continuous visibility, so you see working software every week and there are no surprises at the deadline.' },
    { q: 'Do you work with startups or only enterprises?', a: 'Both. We partner with funded startups building their first product and with enterprises modernizing complex systems, tailoring the engagement model to each.' },
    { q: 'What happens after launch?', a: 'We stay. We provide ongoing optimization, monitoring, and support because the first 90 days after launch matter the most.' },
  ];
  const [open, setOpen] = useBotState(0);
  return (
    <V2Light bg="var(--slate-50)">
      <div className="v2-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.92fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }}>
        {/* FAQ */}
        <div>
          <V2Eyebrow>Get in touch</V2Eyebrow>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--fg1)', margin: '0 0 32px', textWrap: 'balance' }}>
            Everything you may ask before <span style={{ color: 'var(--xo-indigo)' }}>booking a call</span>
          </h2>
          <div>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderTop: '1px solid var(--border)' }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '20px 0' }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(15px,1.4vw,18px)', color: 'var(--fg1)', lineHeight: 1.35 }}>{f.q}</span>
                    <span style={{ width: 32, height: 32, flexShrink: 0, borderRadius: 'var(--r-md)', background: isOpen ? 'var(--xo-indigo)' : 'var(--surface)', border: `1px solid ${isOpen ? 'transparent' : 'var(--border-strong)'}`, color: isOpen ? '#fff' : 'var(--fg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .18s' }}>
                      <i data-lucide={isOpen ? 'minus' : 'plus'} style={{ width: 17 }}></i>
                    </span>
                  </button>
                  <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows .3s cubic-bezier(.4,0,.2,1)' }}>
                    <div style={{ overflow: 'hidden' }}>
                      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.65, color: 'var(--fg2)', margin: '0 0 22px', maxWidth: 560 }}>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Contact form */}
        <V2ContactForm />
      </div>
    </V2Light>
  );
}

function V2ContactForm() {
  const [sent, setSent] = useBotState(false);
  const fieldStyle = { width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: '#fff', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.16)', borderRadius: 'var(--r-md)', padding: '14px 16px', outline: 'none', boxSizing: 'border-box' };
  const focus = e => { e.target.style.borderColor = 'var(--tangerine-400)'; e.target.style.boxShadow = '0 0 0 3px rgba(255,138,61,.25)'; };
  const blur = e => { e.target.style.borderColor = 'rgba(255,255,255,.16)'; e.target.style.boxShadow = 'none'; };
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,3vw,40px)', position: 'sticky', top: 96 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 70% at 90% 0%, rgba(70,76,159,.5), transparent 58%)', pointerEvents: 'none' }} />
      <XWatermark size={300} color="rgba(120,150,240,0.06)" style={{ bottom: -120, left: -80 }} />
      <div style={{ position: 'relative' }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(24px,2.6vw,32px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 12px' }}>Let's talk about your project</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.66)', margin: '0 0 26px' }}>
          We respond within 2 hours during business hours with a real person, not an automated acknowledgement.
        </p>
        {sent ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14, padding: '40px 0' }}>
            <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide="check" style={{ width: 26, color: '#fff' }}></i></span>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', margin: 0 }}>Thanks — we'll be in touch.</h4>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.66)', margin: 0 }}>A real person from our team will reply within 2 hours during business hours.</p>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <input required placeholder="First name*" style={fieldStyle} onFocus={focus} onBlur={blur} />
              <input required placeholder="Last name*" style={fieldStyle} onFocus={focus} onBlur={blur} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <input required type="email" placeholder="Email*" style={fieldStyle} onFocus={focus} onBlur={blur} />
              <input required placeholder="Phone*" style={fieldStyle} onFocus={focus} onBlur={blur} />
            </div>
            <textarea required placeholder="How can we help you?*" rows={5} style={{ ...fieldStyle, resize: 'vertical', marginBottom: 16 }} onFocus={focus} onBlur={blur}></textarea>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, lineHeight: 1.5, color: 'rgba(255,255,255,.5)', margin: '0 0 18px' }}>By sending this form I confirm that I have read and accept the Xorora Privacy Policy.</p>
            <Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }}>Get a response in 2 hours <i data-lucide="arrow-right" style={{ width: 16 }}></i></Button>
          </form>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 22px', marginTop: 24 }}>
          {['NDA available', 'No sales pressure', 'Free consultation'].map(t => (
            <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,.8)' }}>
              <i data-lucide="check" style={{ width: 15, color: 'var(--tangerine-400)' }}></i>{t}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 26px', marginTop: 24, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,.1)' }}>
          {[['phone', '+1 (415) 555-0148'], ['mail', 'partners@xorora.com']].map(([ic, v]) => (
            <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 11, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: 'rgba(255,255,255,.85)' }}>
              <i data-lucide={ic} style={{ width: 16, color: 'var(--tangerine-400)' }}></i>{v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { V2Cases, V2Deliver, V2Engagement, V2Contact });
