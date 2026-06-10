// Xorora Homepage V2 — dark "act one": Statement (S1), Services (S2), Industries (S3)
// All three share ONE navy-atmosphere surface + ONE glass-card chrome for coherence.
const { useState: useSvcState, useRef: useSvcRef, useEffect: useSvcFx } = React;

// Shared dark navy surface with a single blue bloom + faint concentric rings (the brand atmosphere).
function DarkSurface({ children, bloom = '50% 0%', base = '#060B1C', style }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: base, padding: 'clamp(80px,10vw,124px) 32px', ...style }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(95% 70% at ${bloom}, rgba(72,96,200,0.30) 0%, rgba(39,71,192,0.10) 34%, rgba(6,11,28,0) 62%)` }} />
      <div style={{ position: 'absolute', top: '-26%', left: '50%', width: 1200, height: 1200, transform: 'translateX(-50%)', borderRadius: '50%', opacity: 0.4, pointerEvents: 'none', background: 'repeating-radial-gradient(circle at center, rgba(131,163,238,0.06) 0px, rgba(131,163,238,0.06) 1px, transparent 1px, transparent 48px)' }} />
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

// ONE glass-card chrome, shared by service + industry tiles.
function glassCardStyle(h) {
  return {
    position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none',
    borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.2vw,30px)',
    background: h ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
    border: `1px solid rgba(255,255,255,${h ? 0.24 : 0.12})`,
    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
    boxShadow: h ? '0 30px 60px -34px rgba(2,8,30,.7)' : 'none',
    transform: h ? 'translateY(-4px)' : 'none',
    transition: 'transform .35s cubic-bezier(.16,1,.3,1), background .25s, border-color .25s, box-shadow .35s',
  };
}
function IconBadge({ icon, active }) {
  return (
    <span style={{ width: 50, height: 50, flexShrink: 0, borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: active ? 'var(--xo-indigo)' : 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.16)', marginBottom: 20, transition: 'background .25s' }}>
      <i data-lucide={icon} style={{ width: 24, height: 24, color: '#fff', strokeWidth: 1.75 }}></i>
    </span>
  );
}
// shared section eyebrow + heading
function DarkHead({ eyebrow, title, sub, center }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: center ? 'center' : 'flex-start', gap: 20, textAlign: center ? 'center' : 'left', maxWidth: center ? 720 : 'none', margin: center ? '0 auto' : 0 }}>
      <Blur><Eyebrow onDark style={{ color: 'var(--tangerine-400)' }}>{eyebrow}</Eyebrow></Blur>
      <Blur tag="h2" delay={80} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(34px,5vw,60px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', margin: 0, textWrap: 'balance' }}>{title}</Blur>
      {sub && <Blur tag="p" delay={140} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(15px,1.6vw,18px)', fontWeight: 300, lineHeight: 1.6, color: 'rgba(255,255,255,.7)', margin: 0, maxWidth: 620 }}>{sub}</Blur>}
    </div>
  );
}

/* ============ SECTION 1 — ENGINEERING FIRST (scroll-driven blue bloom) ============ */
function V2Statement() {
  const ref = useSvcRef(null);
  const [p, setP] = useSvcState(0);
  useSvcFx(() => {
    const onScroll = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh;
      setP(Math.min(1, Math.max(0, (vh - r.top) / total)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  const scale = 0.3 + p * 1.5;       // grows as you scroll
  const rise = (1 - p) * 16;          // rises from below
  return (
    <section ref={ref} style={{ position: 'relative', overflow: 'hidden', background: '#02060F', padding: 'clamp(120px,17vh,210px) 32px clamp(140px,20vh,230px)' }}>
      <div style={{ position: 'absolute', left: '50%', bottom: 0, width: 'min(1300px, 145vw)', aspectRatio: '1', transform: `translate(-50%, ${rise}%) scale(${scale})`, transformOrigin: '50% 100%', background: 'radial-gradient(circle at 50% 50%, rgba(70,104,224,0.85) 0%, rgba(46,80,200,0.45) 34%, rgba(39,71,192,0) 66%)', pointerEvents: 'none', transition: 'transform .12s linear' }} />
      <div style={{ position: 'absolute', left: '50%', bottom: '-22%', width: 1200, height: 1200, transform: 'translateX(-50%)', borderRadius: '50%', opacity: 0.4, pointerEvents: 'none', background: 'repeating-radial-gradient(circle at center, rgba(131,163,238,0.06) 0px, rgba(131,163,238,0.06) 1px, transparent 1px, transparent 48px)' }} />
      <div style={{ position: 'relative', maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
        <Blur tag="h2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(40px,7vw,84px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 30px', textWrap: 'balance' }}>
          Engineering first.<br/>AI&#8209;enhanced<span style={{ color: 'var(--tangerine-400)' }}>.</span>
        </Blur>
        <Blur tag="p" delay={120} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(16px,2vw,20px)', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,.82)', maxWidth: 660, margin: '0 auto' }}>
          The AI era doesn't replace engineering fundamentals — it raises the bar for them. The hard part is not the demo, but scaling, securing, integrating, and sustaining AI inside real products. We bring deep experience in complex systems, production delivery, and reliability-critical environments.
        </Blur>
      </div>
    </section>
  );
}

/* ============ SECTION 2 — SERVICES (bento: 1 featured + numbered tiles, read-more) ============ */
// Abstract brand-blue blob icons (sparkle / ring / cluster / chevron / comet)
function Blob({ shape, size = 56 }) {
  const id = 'bg' + shape;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" style={{ filter: 'drop-shadow(0 6px 14px rgba(46,85,214,.45))' }}>
      <defs>
        <radialGradient id={id} cx="38%" cy="30%" r="75%">
          <stop offset="0" stopColor="#A9C2FF" />
          <stop offset="55%" stopColor="#4F6BE0" />
          <stop offset="100%" stopColor="#2A45B8" />
        </radialGradient>
      </defs>
      {shape === 'star' && <path d="M32 2 C36 22 42 28 62 32 C42 36 36 42 32 62 C28 42 22 36 2 32 C22 28 28 22 32 2 Z" fill={`url(#${id})`} />}
      {shape === 'ring' && <path fillRule="evenodd" clipRule="evenodd" d="M32 4a28 28 0 100 56 28 28 0 000-56Zm0 16a12 12 0 110 24 12 12 0 010-24Z" fill={`url(#${id})`} />}
      {shape === 'cluster' && <g fill={`url(#${id})`}><circle cx="22" cy="22" r="13"/><circle cx="44" cy="22" r="11"/><circle cx="22" cy="44" r="11"/><circle cx="45" cy="45" r="13"/></g>}
      {shape === 'chevron' && <path d="M20 6 L34 6 L52 32 L34 58 L20 58 L38 32 Z" fill={`url(#${id})`} />}
      {shape === 'comet' && <path d="M54 10 C58 30 46 54 24 56 C12 57 4 49 6 37 C32 36 40 26 40 10 C40 6 50 4 54 10 Z" fill={`url(#${id})`} />}
    </svg>
  );
}

function V2Services() {
  const meta = {
    'Data & AI':        { shape: 'star',    desc: 'Applied ML, LLMs, RAG and agents — engineered for your data and your domain. We turn unstructured chaos into models your business can trust.' },
    'Engineering':      { shape: 'ring',    desc: 'Full-stack delivery — custom software and AI, engineered to ship and built to scale.' },
    'Managed Services': { shape: 'cluster', desc: 'Keep production secure, observed, and always on — DevOps, security, and infrastructure.' },
    'Consulting':       { shape: 'chevron', desc: 'Turn ambition into a costed, de-risked roadmap with senior engineering advice.' },
    'Marketing Services': { shape: 'comet', desc: 'Demand and growth, measured and compounding across every channel.' },
  };
  const order = ['Data & AI', 'Engineering', 'Managed Services', 'Consulting', 'Marketing Services'];
  const all = window.XO_NAV ? window.XO_NAV.services : [];
  const list = order.map((n, i) => { const s = all.find(x => x.name === n); return s ? { ...s, ...meta[n], num: String(i + 1).padStart(2, '0') } : null; }).filter(Boolean);
  const featured = list[0];
  const rest = list.slice(1);
  return (
    <DarkSurface bloom="82% 4%" base="#070D20">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 'clamp(40px,5vw,56px)' }}>
        <DarkHead eyebrow="What we build" title={<span>Our services<span style={{ color: 'var(--tangerine-400)' }}>.</span></span>} />
        <Blur delay={140}>
          <a href="Consulting.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: '#fff', textDecoration: 'none', padding: '12px 22px', border: '1px solid rgba(255,255,255,.28)', borderRadius: 'var(--r-pill)', background: 'rgba(255,255,255,.06)', backdropFilter: 'blur(8px)' }}>
            View all services <i data-lucide="arrow-up-right" style={{ width: 16 }}></i>
          </a>
        </Blur>
      </div>
      <div className="v2-svc-bento" style={{ display: 'grid', gridTemplateColumns: '1.18fr 1fr 1fr', gridAutoRows: '1fr', gap: 18 }}>
        <V2ServiceFeatured svc={featured} />
        {rest.map((s, i) => <V2ServiceTile key={s.name} svc={s} delay={i * 60} />)}
      </div>
    </DarkSurface>
  );
}

function V2ServiceFeatured({ svc }) {
  const [h, setH] = useSvcState(false);
  return (
    <a href={svc.href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      className="v2-svc-feat"
      style={{ position: 'relative', overflow: 'hidden', gridRow: '1 / span 2', display: 'flex', flexDirection: 'column', textDecoration: 'none', minHeight: 420, borderRadius: 'var(--r-lg)', padding: 'clamp(28px,2.6vw,38px)', background: 'linear-gradient(165deg, #0C1430 0%, #0A1024 55%, #0B1640 100%)', border: `1px solid rgba(120,150,240,${h ? 0.4 : 0.22})`, boxShadow: h ? '0 40px 80px -36px rgba(2,8,30,.8)' : '0 24px 60px -40px rgba(2,8,30,.6)', transform: h ? 'translateY(-4px)' : 'none', transition: 'transform .35s cubic-bezier(.16,1,.3,1), border-color .25s, box-shadow .35s' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 60% at 80% 6%, rgba(70,96,200,0.4), transparent 58%)', pointerEvents: 'none' }} />
      <XWatermark size={360} color="rgba(120,150,240,0.06)" style={{ bottom: -150, right: -110 }} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <Blob shape={svc.shape} size={84} />
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: '.14em', color: 'rgba(255,255,255,.4)' }}>{svc.num}</span>
      </div>
      <div style={{ position: 'relative', marginTop: 'auto' }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(24px,2.4vw,32px)', lineHeight: 1.12, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 14px' }}>{svc.name}</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.72)', margin: '0 0 22px', maxWidth: 460 }}>{svc.desc}</p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: 'var(--tangerine-400)' }}>
          Read more <i data-lucide="arrow-right" style={{ width: 16, transform: h ? 'translateX(3px)' : 'none', transition: 'transform .2s' }}></i>
        </span>
      </div>
    </a>
  );
}

function V2ServiceTile({ svc, delay }) {
  const [h, setH] = useSvcState(false);
  return (
    <Blur delay={delay}>
      <a href={svc.href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ ...glassCardStyle(h), minHeight: 210, height: '100%' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: 'var(--r-lg)', background: 'linear-gradient(155deg, rgba(255,255,255,0.12), rgba(255,255,255,0) 44%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
            <Blob shape={svc.shape} size={50} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.14em', color: 'rgba(255,255,255,.34)' }}>{svc.num}</span>
          </div>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(18px,1.5vw,21px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#fff', margin: '0 0 9px' }}>{svc.name}</h3>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,.64)', margin: 0 }}>{svc.desc}</p>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 18, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 600, color: h ? 'var(--tangerine-400)' : 'rgba(255,255,255,.82)', transition: 'color .2s' }}>
            Read more <i data-lucide="arrow-right" style={{ width: 15, transform: h ? 'translateX(3px)' : 'none', transition: 'transform .2s' }}></i>
          </span>
        </div>
      </a>
    </Blur>
  );
}

/* ============ SECTION 3 — INDUSTRIES (3x3 glass tiles) ============ */
function V2Industries() {
  const inds = window.XO_NAV ? window.XO_NAV.industries : [];
  const photos = {
    'Healthcare': 'hospital,medical',
    'Real Estate': 'building,architecture',
    'Fintech': 'finance,bank',
    'E-commerce': 'shopping,retail',
    'Edtech': 'classroom,education',
    'Logistics': 'logistics,warehouse',
    'SaaS': 'datacenter,server',
    'Startups': 'startup,office',
    'Travel & Hospitality': 'hotel,resort',
  };
  return (
    <DarkSurface bloom="50% 0%" base="#060B1C">
      <div style={{ marginBottom: 'clamp(40px,5vw,58px)' }}>
        <DarkHead center eyebrow="Industries we serve" title="Built for your industry" sub="Domain depth where it counts — we ship production systems engineered around the realities of your sector." />
      </div>
      <div className="v2-ind-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {inds.map((ind, i) => <V2IndustryTile key={ind.name} ind={ind} photo={photos[ind.name]} idx={i + 1} delay={(i % 3) * 60} />)}
      </div>
    </DarkSurface>
  );
}

function V2IndustryTile({ ind, photo, idx, delay }) {
  const [h, setH] = useSvcState(false);
  const src = `https://loremflickr.com/640/460/${photo}?lock=${idx}`;
  return (
    <Blur delay={delay}>
      <a href={ind.href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none', minHeight: 264, borderRadius: 'var(--r-lg)', border: `1px solid rgba(255,255,255,${h ? 0.28 : 0.14})`, boxShadow: h ? '0 30px 60px -34px rgba(2,8,30,.8)' : 'none', transform: h ? 'translateY(-4px)' : 'none', transition: 'transform .35s cubic-bezier(.16,1,.3,1), border-color .25s, box-shadow .35s' }}>
        {/* stock photo */}
        <img src={src} alt="" onError={e => { e.currentTarget.style.display = 'none'; }} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.06)' : 'scale(1)', transition: 'transform .6s cubic-bezier(.16,1,.3,1)' }} />
        {/* glass layer: heavy frost at rest → clears on hover to reveal the photo */}
        <div style={{ position: 'absolute', inset: 0, background: h ? 'linear-gradient(to bottom, rgba(8,12,30,0.12) 0%, rgba(8,12,30,0.34) 58%, rgba(8,12,30,0.7) 100%)' : 'linear-gradient(to bottom, rgba(13,20,46,0.74) 0%, rgba(11,17,40,0.82) 55%, rgba(8,12,30,0.9) 100%)', backdropFilter: h ? 'blur(0px)' : 'blur(14px)', WebkitBackdropFilter: h ? 'blur(0px)' : 'blur(14px)', transition: 'background .4s ease, backdrop-filter .4s ease, -webkit-backdrop-filter .4s ease' }} />
        {/* glass sheen */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(155deg, rgba(255,255,255,0.16), rgba(255,255,255,0) 42%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', padding: 'clamp(24px,2.2vw,30px)' }}>
          <span style={{ width: 50, height: 50, flexShrink: 0, borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: h ? 'var(--xo-indigo)' : 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.22)', backdropFilter: 'blur(6px)', marginBottom: 20, transition: 'background .25s' }}>
            <i data-lucide={ind.icon} style={{ width: 24, height: 24, color: '#fff', strokeWidth: 1.75 }}></i>
          </span>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(19px,1.6vw,22px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#fff', margin: '0 0 10px', textShadow: '0 2px 16px rgba(0,0,0,.4)' }}>{ind.name}</h3>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: 0, textShadow: '0 1px 10px rgba(0,0,0,.4)' }}>{ind.desc}</p>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 22, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, color: h ? 'var(--tangerine-400)' : '#fff', transition: 'color .2s' }}>
            Read more <i data-lucide="arrow-right" style={{ width: 16, transform: h ? 'translateX(3px)' : 'none', transition: 'transform .2s' }}></i>
          </span>
        </div>
      </a>
    </Blur>
  );
}

Object.assign(window, { V2Statement, V2Services, V2Industries });
