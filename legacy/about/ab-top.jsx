// Xorora — About Us · Hero + Partner mindset
const { useState: useAbState, useRef: useAbRef, useEffect: useAbFx } = React;

// Animated "aurora mesh + perspective grid" hero canvas — drifting indigo/blue blooms,
// a receding dot grid, and a slow tangerine spark. Draws one frame synchronously.
function AbAurora() {
  const ref = useAbRef(null);
  useAbFx(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf, t0 = performance.now();
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      const r = canvas.parentElement.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = Math.max(1, w * dpr); canvas.height = Math.max(1, h * dpr);
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // drifting colour blooms
    const blobs = [
      { c: '88,120,235', r: 0.62, ax: 0.20, ay: 0.16, sx: 0.045, sy: 0.061, px: 0, py: 1.1, a: 0.55 },
      { c: '70,76,159', r: 0.74, ax: 0.16, ay: 0.20, sx: 0.037, sy: 0.043, px: 2.0, py: 0.4, a: 0.62 },
      { c: '120,150,240', r: 0.46, ax: 0.22, ay: 0.14, sx: 0.058, sy: 0.071, px: 4.1, py: 2.3, a: 0.42 },
      { c: '242,107,33', r: 0.30, ax: 0.18, ay: 0.12, sx: 0.032, sy: 0.05, px: 1.2, py: 3.4, a: 0.26 }, // tangerine spark
    ];

    function draw(now) {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      // base
      ctx.fillStyle = '#02060F'; ctx.fillRect(0, 0, w, h);

      // aurora blooms (screen blend for glow)
      ctx.globalCompositeOperation = 'screen';
      for (const b of blobs) {
        const cx = w * (0.5 + b.ax * Math.sin(t * b.sx * 6.28 + b.px));
        const cy = h * (0.42 + b.ay * Math.cos(t * b.sy * 6.28 + b.py));
        const rad = Math.max(w, h) * b.r;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        g.addColorStop(0, `rgba(${b.c},${b.a})`);
        g.addColorStop(0.5, `rgba(${b.c},${b.a * 0.32})`);
        g.addColorStop(1, `rgba(${b.c},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.globalCompositeOperation = 'source-over';

      // receding perspective dot grid in the lower half
      const horizon = h * 0.52;
      const cols = 26;
      ctx.fillStyle = 'rgba(150,175,245,1)';
      for (let row = 0; row < 16; row++) {
        const rt = row / 15;
        const depth = Math.pow(rt, 2.2);
        const y = horizon + depth * (h - horizon) * 1.06;
        if (y > h + 4) continue;
        const drift = ((t * 0.06 + rt) % (1 / 15)) * 0; // subtle, keep stable
        const fade = 0.06 + rt * 0.5;
        const dotR = 0.5 + rt * 1.6;
        const spread = 0.5 + depth * 1.7; // columns spread out as they near viewer
        for (let cI = 0; cI <= cols; cI++) {
          const fx = (cI / cols - 0.5) * spread + 0.5;
          if (fx < -0.02 || fx > 1.02) continue;
          const x = fx * w;
          const tw = 0.6 + 0.4 * Math.sin(t * 1.4 + cI * 0.6 + row * 0.5);
          ctx.globalAlpha = Math.min(0.6, fade * tw);
          ctx.beginPath(); ctx.arc(x, y + drift, dotR, 0, 6.2832); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      if (!reduce) raf = requestAnimationFrame(draw);
    }

    resize(); draw(performance.now());
    const onR = () => resize();
    window.addEventListener('resize', onR);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onR); };
  }, []);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden="true" />;
}

function AbHero({ onTalk }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#02060F', marginTop: -72, paddingTop: 72 }}>
      <AbAurora />
      {/* readability + depth overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 55% at 50% 42%, rgba(2,6,15,0.55) 0%, rgba(2,6,15,0) 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(2,6,15,0.5) 0%, rgba(2,6,15,0) 24%, rgba(2,6,15,0) 100%)', pointerEvents: 'none' }} />
      <XWatermark size={620} color="rgba(150,175,245,0.05)" style={{ top: -150, left: '50%', transform: 'translateX(-50%)' }} />

      <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: 'clamp(120px,13vw,176px) 32px clamp(96px,11vw,140px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '8px 16px', borderRadius: 'var(--r-pill)', border: '1px solid rgba(255,255,255,.16)', background: 'rgba(255,255,255,.06)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', marginBottom: 28, fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.9)' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tangerine-400)', boxShadow: '0 0 8px var(--tangerine-400)' }} />Your AI Development Partner
        </div>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(40px,6vw,72px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 22px', textWrap: 'balance' }}>
          Your technology partner.<br/><span style={{ background: 'linear-gradient(100deg, #C3C6EC, #8E94E0 45%, #FF8A3D)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Not just another vendor<span style={{ color: 'var(--tangerine-400)', WebkitTextFillColor: 'var(--tangerine-400)' }}>.</span></span>
        </h1>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.6, color: 'rgba(255,255,255,.74)', maxWidth: 560, margin: '0 auto 38px' }}>
          We build software the way a co-founder would. With ownership, urgency, and long-term thinking.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="light" size="lg" onClick={onTalk}>Talk to a strategy expert <i data-lucide="arrow-up-right" style={{ width: 16 }}></i></Button>
          <a href="Our Work.html" style={{ textDecoration: 'none' }}><Button variant="onDark" size="lg">See our work</Button></a>
        </div>
      </div>
    </section>
  );
}

function AbMindset() {
  const cards = [
    { icon: 'handshake', title: 'We think like co-founders', body: 'We do not wait around for specs. We challenge assumptions, flag risks early, and make decisions like the product is ours. That is the difference between a vendor and a partner.' },
    { icon: 'zap', title: 'AI-accelerated engineering', body: 'We use AI-assisted workflows internally to ship 40 to 60 percent faster. Your project benefits from modern tooling without you having to manage any of it.' },
    { icon: 'users', title: 'Senior engineers, not a bench', body: 'The team that starts your project is the team that finishes it. No junior rotations. No bait and switch. Our average engineer has 8+ years of experience.' },
    { icon: 'life-buoy', title: 'We stay after launch', body: 'Most vendors disappear at deployment. We provide ongoing optimization, monitoring, and support because the first 90 days after launch matter the most.' },
  ];
  return (
    <LightSection bg="var(--slate-50)">
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(24px,4vw,56px)', alignItems: 'end', marginBottom: 52 }} className="ab-2col">
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.8vw,44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--fg1)', margin: 0, textWrap: 'balance' }}>
          Partner mindset. Senior talent. AI-powered speed.
        </h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16.5, lineHeight: 1.65, color: 'var(--fg2)', margin: 0 }}>
          Here is what sets us apart from the hundreds of other engineering firms out there.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }} className="ab-2grid">
        {cards.map(c => <AbMindsetCard key={c.title} {...c} />)}
      </div>
    </LightSection>
  );
}

function AbMindsetCard({ icon, title, body }) {
  const [h, setH] = useAbState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface)', border: `1px solid ${h ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(26px,2.8vw,36px)', boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-xs)', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--tangerine-500))', transform: h ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }} />
      <span style={{ width: 48, height: 48, borderRadius: 'var(--r-md)', background: h ? 'var(--xo-indigo)' : 'var(--indigo-50)', color: h ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, transition: 'all .2s' }}>
        <i data-lucide={icon} style={{ width: 23 }}></i>
      </span>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(19px,1.7vw,22px)', color: 'var(--fg1)', margin: '0 0 12px', lineHeight: 1.25 }}>{title}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{body}</p>
    </div>
  );
}

Object.assign(window, { AbHero, AbMindset });
