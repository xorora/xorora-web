// Xorora homepage — Hero, Services (bento), Stats
const { useState: useTopState, useEffect: useTopEffect, useRef: useTopRef } = React;

/* ---------------- HERO ---------------- */
function Hero({ onNav }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 80% at 50% -8%, rgba(91,141,239,0.32) 0%, rgba(39,85,195,0.10) 32%, rgba(1,12,40,0) 64%)', pointerEvents: 'none' }} />
      <SignalField />
      <XWatermark size={760} color="rgba(120,150,240,0.05)" style={{ top: -180, left: '50%', transform: 'translateX(-50%)' }} />
      <div style={{ position: 'relative', zIndex: 20, maxWidth: 1000, margin: '0 auto', padding: 'clamp(64px,8vw,104px) 32px 0', textAlign: 'center' }}>
        {/* glass announcement pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, padding: '6px 16px 6px 6px', borderRadius: 'var(--r-pill)', border: '1px solid rgba(255,255,255,.14)', background: 'rgba(255,255,255,.06)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', marginBottom: 30 }}>
          <span style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg, var(--indigo-400), var(--tangerine-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 16px rgba(242,107,33,.5)' }}>
            <i data-lucide="zap" style={{ width: 14, color: '#fff' }}></i>
          </span>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 500, color: 'rgba(255,255,255,.82)' }}>Your AI Development Partner</span>
        </div>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(44px,7vw,84px)', lineHeight: 0.96, letterSpacing: '-0.03em', margin: '0 0 22px', textWrap: 'balance' }}>
          <span style={{ display: 'block', background: 'linear-gradient(180deg, #fff 28%, rgba(255,255,255,.66))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Engineered for</span>
          <span style={{ display: 'block', background: 'linear-gradient(110deg, #C3C6EC, #8E94E0 46%, #FF8A3D)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>your Ambition<span style={{ color: 'var(--tangerine-400)', WebkitTextFillColor: 'var(--tangerine-400)' }}>.</span></span>
        </h1>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.6, color: 'rgba(255,255,255,.8)', maxWidth: 560, margin: '0 auto 36px' }}>
          We turn bold ideas into production AI and software that doesn't just ship, it grows your business. From the first prototype to the system you run on.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <GradientCTA onClick={() => onNav('contact')}>Book a 15-min call</GradientCTA>
          <Button variant="onDark" size="lg" onClick={() => onNav('top')}>See our work</Button>
        </div>
      </div>
      <LogoCloud />
    </div>
  );
}

// White pill CTA with a gradient arrow circle + glass border wrapper.
function GradientCTA({ children, onClick }) {
  const [h, setH] = useTopState(false);
  return (
    <div style={{ padding: 2, borderRadius: 'var(--r-pill)', background: 'linear-gradient(120deg, rgba(255,255,255,.5), rgba(255,255,255,.08))', display: 'inline-block' }}>
      <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 9px 8px 22px', borderRadius: 'var(--r-pill)', border: 'none', cursor: 'pointer', background: '#fff', color: 'var(--xo-ink)', fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 600, transition: 'transform .15s', transform: h ? 'translateY(-1px)' : 'none' }}>
        {children}
        <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg, var(--indigo-400), var(--tangerine-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 16px rgba(242,107,33,.45)', transform: h ? 'translateX(2px)' : 'none', transition: 'transform .15s' }}>
          <i data-lucide="arrow-right" style={{ width: 17, color: '#fff' }}></i>
        </span>
      </button>
    </div>
  );
}

// HLS video that blends behind the headline (mix-blend-screen), overlapping upward.
// Fails gracefully: if the stream can't load, the block hides itself.
function VideoHero() {
  const vref = useTopRef(null);
  const [ok, setOk] = useTopState(true);
  useTopEffect(() => {
    const video = vref.current; if (!video) return;
    const src = 'https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8';
    let hls;
    const fail = () => setOk(false);
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src; video.addEventListener('error', fail);
    } else if (window.Hls && window.Hls.isSupported()) {
      hls = new window.Hls();
      hls.loadSource(src); hls.attachMedia(video);
      hls.on(window.Hls.Events.ERROR, (_e, d) => { if (d && d.fatal) fail(); });
    } else { fail(); }
    const p = video.play(); if (p && p.catch) p.catch(() => {});
    return () => { if (hls) hls.destroy(); video.removeEventListener('error', fail); };
  }, []);
  return (
    <div style={{ position: 'relative', zIndex: 10, marginTop: ok ? 'clamp(-90px,-9vw,-150px)' : 0, height: ok ? 'auto' : 'clamp(40px,6vw,80px)', pointerEvents: 'none' }}>
      <video ref={vref} muted loop playsInline autoPlay aria-hidden="true"
        style={{ width: '100%', height: 'auto', display: ok ? 'block' : 'none', mixBlendMode: 'screen' }} />
      {ok && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--navy-900) 0%, transparent 26%, transparent 72%, var(--navy-900) 100%)', pointerEvents: 'none' }} />}
      {ok && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--navy-900), transparent 12%, transparent 88%, var(--navy-900))', pointerEvents: 'none' }} />}
    </div>
  );
}

// Animated infinite logo cloud.
function LogoCloud() {
  const logos = [
    'https://html.tailus.io/blocks/customers/openai.svg',
    'https://html.tailus.io/blocks/customers/nvidia.svg',
    'https://html.tailus.io/blocks/customers/github.svg',
    'https://html.tailus.io/blocks/customers/column.svg',
    'https://html.tailus.io/blocks/customers/laravel.svg',
    'https://html.tailus.io/blocks/customers/lemonsqueezy.svg',
    'https://html.tailus.io/blocks/customers/nike.svg',
    'https://html.tailus.io/blocks/customers/lilly.svg',
  ];
  const loop = [...logos, ...logos];
  return (
    <div style={{ position: 'relative', zIndex: 20, marginTop: 'clamp(-36px,-3vw,-60px)', background: 'rgba(0,0,0,.22)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', borderTop: '1px solid rgba(255,255,255,.06)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '26px 32px', display: 'flex', alignItems: 'center', gap: 36 }} className="xo-logocloud">
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 24 }} className="xo-logocloud-label">
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,.6)', maxWidth: 180, lineHeight: 1.4 }}>Powering teams that build with the best</span>
          <span style={{ width: 1, height: 40, background: 'rgba(255,255,255,.12)' }} className="xo-logocloud-divider" />
        </div>
        <div className="xo-logo-marquee-wrap" style={{ flex: 1, minWidth: 0 }}>
          <div className="xo-logo-marquee">
            {loop.map((src, i) => (
              <img key={i} src={src} alt="" aria-hidden="true" style={{ height: 26, width: 'auto', flexShrink: 0, filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SERVICES (bento) ---------------- */
function ServiceMark({ kind, size = 88 }) {
  const id = 'sg-' + kind;
  return (
    <svg width={size} height={size} viewBox="0 0 92 92" fill="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={id} x1="14" y1="8" x2="78" y2="84" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6B70B6" /><stop offset="0.55" stopColor="#464C9F" /><stop offset="1" stopColor="#2F336B" />
        </linearGradient>
        <radialGradient id={id + '-h'} cx="0.35" cy="0.25" r="0.8">
          <stop stopColor="rgba(255,255,255,0.55)" /><stop offset="0.5" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      {kind === 'spark' && <path d="M46 4 C50 30 62 42 88 46 C62 50 50 62 46 88 C42 62 30 50 4 46 C30 42 42 30 46 4 Z" fill={`url(#${id})`} />}
      {kind === 'ring' && <path d="M46 8 a38 38 0 1 1 -26.9 11.1 l11.3 11.3 A22 22 0 1 0 46 24 Z" fill={`url(#${id})`} />}
      {kind === 'cluster' && <g fill={`url(#${id})`}><circle cx="34" cy="34" r="22" /><circle cx="62" cy="40" r="18" opacity="0.85" /><circle cx="46" cy="62" r="20" opacity="0.92" /></g>}
      {kind === 'blade' && <path d="M26 8 L60 8 L86 46 L60 84 L26 84 L52 46 Z" fill={`url(#${id})`} />}
      <ellipse cx="38" cy="30" rx="30" ry="22" fill={`url(#${id}-h)`} opacity="0.7" style={{ mixBlendMode: 'screen' }} />
    </svg>
  );
}

function Services() {
  const items = [
    { mark: 'spark', no: '01', title: 'AI & Data Innovation', body: 'Applied ML, LLMs, RAG and agents — engineered for your data and your domain. We turn unstructured chaos into a model your business can trust.', big: true },
    { mark: 'ring', no: '02', title: 'Engineering', body: 'Full-stack delivery: model, API, and the interface your users touch.' },
    { mark: 'cluster', no: '03', title: 'Cloud & Security', body: 'Scalable, observable infrastructure with guardrails baked in.' },
    { mark: 'blade', no: '04', title: 'AI Strategy Consulting', body: 'Two-week build reviews that turn ambition into a costed, de-risked roadmap.', wide: true },
  ];
  return (
    <section style={{ background: 'var(--surface)', padding: '110px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, gap: 20, flexWrap: 'wrap' }}>
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>What we engineer</Eyebrow>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(30px,4.2vw,46px)', color: 'var(--fg1)', margin: 0, letterSpacing: '-0.015em' }}>Our services.</h2>
          </div>
          <Button variant="secondary" onClick={() => {}}>View all services <Chevron /></Button>
        </div>
        <div className="xo-bento">
          {items.map(it => <ServiceCard key={it.title} {...it} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ mark, no, title, body, big, wide }) {
  const [hover, setHover] = useTopState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className={big ? 'xo-bento-big' : (wide ? 'xo-bento-wide' : 'xo-bento-cell')}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        background: big ? 'var(--navy-900)' : 'var(--slate-50)',
        border: `1px solid ${big ? 'transparent' : 'var(--border)'}`,
        borderRadius: 'var(--r-lg)', padding: big ? 40 : 28,
        boxShadow: hover ? 'var(--shadow-md)' : 'none',
        transform: hover ? 'translateY(-3px)' : 'none', transition: 'all .25s cubic-bezier(.4,0,.2,1)',
        display: 'flex', flexDirection: 'column',
      }}>
      {big && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 90% at 90% 10%, rgba(91,141,239,0.25), transparent 60%)', pointerEvents: 'none' }} />}
      {big && <XWatermark size={300} color="rgba(120,150,240,0.06)" style={{ bottom: -70, right: -60 }} />}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ transform: hover ? 'translateY(-4px) rotate(-4deg)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }}>
          <ServiceMark kind={mark} size={big ? 104 : 70} />
        </div>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.12em', color: big ? 'rgba(255,255,255,.4)' : 'var(--slate-400)' }}>{no}</span>
      </div>
      <div style={{ position: 'relative', marginTop: 'auto', paddingTop: big ? 36 : 24 }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: big ? 26 : 19, color: big ? '#fff' : 'var(--fg1)', margin: '0 0 10px' }}>{title}</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: big ? 16 : 14.5, lineHeight: 1.55, color: big ? 'rgba(255,255,255,.66)' : 'var(--fg2)', margin: '0 0 16px', maxWidth: big ? 420 : 'none' }}>{body}</p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, color: big ? 'var(--tangerine-400)' : (hover ? 'var(--tangerine-600)' : 'var(--accent)'), transition: 'color .15s' }}>
          Learn more <Chevron />
        </span>
      </div>
    </div>
  );
}

/* ---------------- STATS ---------------- */
function Stats({ onNav }) {
  const stats = [
    { n: '40+', l: 'AI systems shipped to production' },
    { n: '800+', l: 'engineering hours saved monthly' },
    { n: '3.5×', l: 'median speed-up vs. in-house build' },
    { n: '99.9%', l: 'uptime across deployed models' },
  ];
  const clients = ['NORTHWIND', 'AXIOM', 'HELIOGEN', 'QUANTLY', 'VERTEX', 'LUMEN'];
  return (
    <Atmosphere bloom="18% 0%">
      <XWatermark size={620} color="rgba(120,150,240,0.04)" style={{ top: -120, left: -180 }} />
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '100px 32px 84px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'end', marginBottom: 72 }} className="xo-stats-head">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.8vw,42px)', color: '#fff', margin: 0, lineHeight: 1.12, letterSpacing: '-0.015em' }}>
            We're committed to lead your<br/>digital journey to success.
          </h2>
          <div>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.66)', margin: '0 0 20px' }}>
              From the first prototype to production scale, we engineer software that compounds — measurable outcomes, not slideware.
            </p>
            <Button variant="onDark" onClick={() => onNav('contact')}>Work with us <Chevron /></Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 0, paddingBottom: 64, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
          {stats.map((s, i) => (
            <div key={s.l} style={{ padding: '0 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,.1)' }} className="xo-stat-cell">
              <SignalRule color="var(--tangerine-400)" style={{ marginBottom: 18 }} />
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(44px,5.4vw,64px)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: 'rgba(255,255,255,.6)', marginTop: 14, maxWidth: 200 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap', justifyContent: 'center', paddingTop: 48 }}>
          {clients.map(c => <span key={c} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16, letterSpacing: '.05em', color: 'rgba(255,255,255,.4)' }}>{c}</span>)}
        </div>
      </div>
    </Atmosphere>
  );
}

Object.assign(window, { Hero, Services, Stats });
