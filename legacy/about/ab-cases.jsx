// Xorora — About Us · Case studies (prototype style, our work) + FAQ + CTA
const { useState: useAbBot } = React;

function AbCases({ onTalk }) {
  const cases = [
    { href: 'Regula Case Study.html', img: 'assets/regula/featured.jpg', client: 'REGULA', clientIcon: 'landmark', tag: 'RegTech & Compliance', title: 'Real-time regulatory intelligence for emerging markets', stat: '70%', statLabel: 'Less compliance workload' },
    { href: 'Unified AI Voice Operations Case Study.html', img: 'assets/saas/voice-ops.jpg', client: 'AI VOICE OPS', clientIcon: 'audio-lines', tag: 'AI Voice & B2B SaaS', title: 'From fragmented tools to unified AI voice operations', stat: '4', statLabel: 'Portals on one backend' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 18 }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.8vw,46px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--fg1)', margin: 0, textWrap: 'balance' }}>
          We build products that<br/><span style={{ color: 'var(--xo-indigo)' }}>move businesses forward<span style={{ color: 'var(--tangerine-500)' }}>.</span></span>
        </h2>
        <a href="Our Work.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: 'var(--fg1)', textDecoration: 'none', padding: '11px 20px', border: '1px solid var(--border-strong)', borderRadius: 'var(--r-pill)' }}>
          View all <i data-lucide="arrow-right" style={{ width: 16 }}></i>
        </a>
      </div>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.6, color: 'var(--fg2)', margin: '0 0 40px', maxWidth: 560 }}>
        Live products built for ambitious clients. Here are some of our most recent.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="ab-cases-grid">
        {cases.map(c => <AbCaseCard key={c.href} {...c} />)}
      </div>
      <div style={{ marginTop: 36 }}>
        <Button variant="primary" size="lg" onClick={onTalk}>Book a free strategy call <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
      </div>
    </LightSection>
  );
}

function AbCaseCard({ href, img, client, clientIcon, tag, title, stat, statLabel }) {
  const [h, setH] = useAbBot(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', display: 'block', textDecoration: 'none', overflow: 'hidden', borderRadius: 'var(--r-xl)', minHeight: 420, background: '#080C1E', border: '1px solid rgba(255,255,255,.1)', boxShadow: h ? '0 38px 84px -34px rgba(8,12,30,.7)' : '0 22px 56px -34px rgba(8,12,30,.5)', transform: h ? 'translateY(-4px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s' }}>
      <img src={img} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1.0)', transition: 'transform .5s cubic-bezier(.16,1,.3,1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,12,30,0.35) 0%, rgba(8,12,30,0.2) 40%, rgba(8,12,30,0.92) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 60% at 85% 5%, rgba(91,141,239,0.3), transparent 60%)' }} />
      {/* tag chip */}
      <span style={{ position: 'absolute', top: 22, right: 22, fontFamily: 'Poppins, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'var(--xo-ink)', background: '#fff', borderRadius: 'var(--r-pill)', padding: '7px 14px' }}>{tag}</span>
      {/* content */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(24px,2.8vw,32px)' }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(21px,2vw,26px)', lineHeight: 1.18, letterSpacing: '-0.01em', color: '#fff', margin: '0 0 20px', maxWidth: 420 }}>{title}</h3>
        <div style={{ height: 1, background: 'rgba(255,255,255,.18)', marginBottom: 18 }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <i data-lucide={clientIcon} style={{ width: 18, color: '#fff' }}></i>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13.5, letterSpacing: '.06em', color: '#fff' }}>{client}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--tangerine-400)', lineHeight: 1 }}>{stat}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11.5, color: 'rgba(255,255,255,.7)', marginTop: 3 }}>{statLabel}</div>
            </div>
            <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: '50%', background: h ? '#fff' : 'var(--xo-indigo)', color: h ? 'var(--xo-ink)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}>
              <i data-lucide="arrow-up-right" style={{ width: 20 }}></i>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

function AbFAQ({ onTalk }) {
  const faqs = [
    { q: 'Where is Xorora based?', a: 'We are a distributed team with hubs in San Francisco, London, and Singapore, working with clients across North America, Europe, and Asia.' },
    { q: 'How quickly can you start?', a: 'For most engagements we can kick off within one to two weeks of a signed agreement. A focused discovery can often begin within days.' },
    { q: 'Do you sign NDAs?', a: 'Yes, always. An NDA is a standard step in our onboarding process before any project details, business context, or technical information is discussed. We take IP protection seriously.' },
    { q: 'What does a project typically cost?', a: 'It depends on scope, integrations, and team model. After a short discovery we provide a clear, itemized estimate so you know what each milestone costs before we start.' },
    { q: 'How do I know the project will be on time?', a: 'We work in short, demoable sprints with continuous visibility, so you see working software every week and there are no surprises at the deadline.' },
    { q: 'Do you work with startups or only enterprises?', a: 'Both. We partner with funded startups building their first product and with enterprises modernizing complex systems, tailoring the engagement model to each.' },
    { q: 'What happens after launch?', a: 'We stay. We provide ongoing optimization, monitoring, and support because the first 90 days after launch matter the most.' },
  ];
  const [open, setOpen] = useAbBot(2);
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.9fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="ab-2col">
        <div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--fg1)', margin: '0 0 32px', textWrap: 'balance' }}>
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
                  {isOpen && <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.65, color: 'var(--fg2)', margin: '0 0 22px', maxWidth: 560, animation: 'abFade .25s ease' }}>{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA panel */}
        <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', borderRadius: 'var(--r-xl)', padding: 'clamp(30px,3.5vw,44px)', position: 'sticky', top: 96 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 70% at 90% 0%, rgba(70,76,159,.45), transparent 58%)', pointerEvents: 'none' }} />
          <XWatermark size={320} color="rgba(120,150,240,0.06)" style={{ bottom: -130, left: -90 }} />
          <div style={{ position: 'relative' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(24px,2.6vw,32px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 14px' }}>Let's talk about your project</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.66)', margin: '0 0 28px' }}>
              We respond within one business day with a real person, not an automated acknowledgement.
            </p>
            <Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} onClick={onTalk}>Start the conversation <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 20px', marginTop: 24 }}>
              {['NDA available', 'No sales pressure', 'Free consultation'].map(t => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,.8)' }}>
                  <i data-lucide="check" style={{ width: 15, color: 'var(--tangerine-400)' }}></i>{t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.1)' }}>
              {[['phone', '+1 (415) 555-0148'], ['mail', 'partners@xorora.com']].map(([ic, v]) => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 11, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: 'rgba(255,255,255,.85)' }}>
                  <i data-lucide={ic} style={{ width: 16, color: 'var(--tangerine-400)' }}></i>{v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LightSection>
  );
}

Object.assign(window, { AbCases, AbFAQ });
