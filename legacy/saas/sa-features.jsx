// Xorora — SaaS Industry Page · Why Choose Us (dark) + Featured Case Studies
const { useState: useSaFeat } = React;

function SaWhy() {
  const cards = [
    { icon: 'gem', title: 'Deep SaaS domain expertise', body: 'An established history of delivery in complex products, from multi tenant platforms to real time monitoring systems.' },
    { icon: 'trending-up', title: 'Retention driven development', body: 'Each feature is built to maximize activation, retention, and quantifiable business value.' },
    { icon: 'shield', title: 'Mission critical reliability', body: 'Systems designed for high uptime, handling customer data with unyielding accuracy.' },
    { icon: 'pointer', title: 'Professional grade UX', body: 'Intuitive product experiences that streamline onboarding and daily use for maximum adoption.' },
    { icon: 'blocks', title: 'Custom and scalable architecture', body: 'Multi tenant solutions scaled to your roadmap and configured for enterprise from day one.' },
    { icon: 'lock', title: 'Security first philosophy', body: 'Compliance friendly design with encryption, secure APIs, and rigorous testing throughout.' },
  ];
  return (
    <DarkSection bloom="50% 6%">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 48 }}>
        <SectionHead label="What sets us apart" title="Why choose us." sub="We leverage profound SaaS domain knowledge and precision engineering to deliver scalable, reliable, and business focused products that differentiate in the marketplace." onDark style={{ maxWidth: 620 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-lg)', padding: '16px 20px', maxWidth: 320 }}>
          <i data-lucide="zap" style={{ width: 20, color: 'var(--tangerine-400)', flexShrink: 0 }}></i>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,.78)' }}>Activate faster, retain longer, and scale with SaaS software and custom AI built for your business reality.</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="sa-3grid">
        {cards.map(c => <SaWhyCard key={c.title} {...c} />)}
      </div>
    </DarkSection>
  );
}

function SaWhyCard({ icon, title, body }) {
  const [h, setH] = useSaFeat(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,.04)', border: `1px solid ${h ? 'rgba(120,150,240,.5)' : 'rgba(255,255,255,.12)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.4vw,30px)', transition: 'border-color .2s, transform .2s', transform: h ? 'translateY(-3px)' : 'none' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--indigo-700))', opacity: h ? 1 : 0, transition: 'opacity .2s' }} />
      <span style={{ width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'rgba(70,76,159,.28)', border: '1px solid rgba(120,150,240,.32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-300)', marginBottom: 18 }}>
        <i data-lucide={icon} style={{ width: 22 }}></i>
      </span>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 18.5, color: '#fff', margin: '0 0 10px', lineHeight: 1.25 }}>{title}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,.62)', margin: 0 }}>{body}</p>
    </div>
  );
}

/* ---------------- FEATURED CASE STUDIES (2 tiles) ---------------- */
function SaFeaturedCases() {
  const cases = [
    {
      href: 'Unified AI Voice Operations Case Study.html',
      img: 'assets/saas/voice-ops.jpg',
      title: 'AI Voice Operations Platform',
      desc: 'Four purpose built portals on one shared backend turned powerful voice agent technology into a commercially ready product.',
      stats: [['4', 'Role-based portals'], ['16 mo', 'To production']],
      tags: ['AI Voice', 'B2B SaaS', 'Multi-portal'],
    },
    {
      href: 'PingPanda Case Study.html',
      img: 'assets/saas/event-monitoring.jpg',
      title: 'SaaS Event Monitoring',
      desc: 'An API first event notifier: send a typed event, get an instant alert with full context. No dashboards to configure, no blind spots.',
      stats: [['Real-time', 'Event delivery'], ['13 mo', 'To production']],
      tags: ['SaaS', 'Real-time', 'API-first'],
    },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 36 }}>
        <SectionHead label="Selected work" title="Featured case studies." />
        <a href="Our Work.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
          View all work <i data-lucide="arrow-right" style={{ width: 16 }}></i>
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="sa-cases-grid">
        {cases.map(c => <SaCaseTile key={c.href} {...c} />)}
      </div>
    </LightSection>
  );
}

function SaCaseTile({ href, img, title, desc, stats, tags }) {
  const [h, setH] = useSaFeat(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-xl)', background: 'linear-gradient(155deg, #141A38 0%, #080C1E 72%)', border: '1px solid rgba(255,255,255,.1)', boxShadow: h ? '0 36px 80px -34px rgba(8,12,30,.7)' : '0 22px 56px -34px rgba(8,12,30,.5)', transform: h ? 'translateY(-4px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--tangerine-500))', zIndex: 3 }} />
      <div style={{ position: 'relative', overflow: 'hidden', height: 220 }}>
        <img src={img} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', transform: h ? 'scale(1.05)' : 'scale(1.0)', transition: 'transform .5s cubic-bezier(.16,1,.3,1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,12,30,0.1) 0%, rgba(8,12,30,0.55) 75%, #080C1E 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 80% at 85% 0%, rgba(91,141,239,0.32), transparent 60%)', pointerEvents: 'none' }} />
      </div>
      <div style={{ position: 'relative', padding: 'clamp(26px,2.8vw,36px)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(21px,2vw,26px)', lineHeight: 1.18, letterSpacing: '-0.015em', color: '#fff', margin: '0 0 14px' }}>{title}</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.66)', margin: '0 0 24px' }}>{desc}</p>
        <div style={{ display: 'flex', gap: 'clamp(20px,3vw,40px)', marginBottom: 24, flexWrap: 'wrap' }}>
          {stats.map(([v, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(20px,2vw,26px)', letterSpacing: '-0.02em', color: 'var(--tangerine-400)', lineHeight: 1 }}>{v}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: 'rgba(255,255,255,.55)', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 26 }}>
          {tags.map(t => (
            <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.06em', color: 'rgba(255,255,255,.7)', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-pill)', padding: '6px 12px' }}>{t}</span>
          ))}
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, alignSelf: 'flex-start', marginTop: 'auto', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14.5, padding: '12px 22px', borderRadius: 'var(--r-pill)', background: '#fff', color: 'var(--xo-ink)', transition: 'transform .2s', transform: h ? 'translateX(3px)' : 'none' }}>
          Read more <i data-lucide="arrow-up-right" style={{ width: 16 }}></i>
        </span>
      </div>
    </a>
  );
}

Object.assign(window, { SaWhy, SaFeaturedCases });
