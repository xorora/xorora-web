// Xorora homepage — shared primitives (extended from the design-system website kit)
const { useState, useRef, useEffect } = React;

// Official XORORA wordmark — supplied brand SVG (mark + lettering)
function Wordmark({ height = 26, dark = false, style }) {
  return (
    <img
      src={dark ? window.__resources.wordmarkWhite : window.__resources.wordmarkBlack}
      alt="Xorora"
      style={{ height, display: 'block', ...style }}
    />
  );
}

function Eyebrow({ children, style, onDark }) {
  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: onDark ? 'var(--tangerine-400)' : 'var(--tangerine-500)', ...style,
    }}>{children}</div>
  );
}

function Button({ children, variant = 'primary', size = 'md', onClick, style }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const sizes = {
    md: { padding: '12px 24px', fontSize: 15 },
    lg: { padding: '15px 30px', fontSize: 16 },
    sm: { padding: '9px 18px', fontSize: 14 },
  };
  const base = {
    fontFamily: 'Poppins, sans-serif', fontWeight: 600, borderRadius: 'var(--r-md)',
    border: '1px solid transparent', cursor: 'pointer', display: 'inline-flex',
    alignItems: 'center', gap: 8, transition: 'all .18s cubic-bezier(.4,0,.2,1)',
    transform: press ? 'scale(.98)' : 'none', whiteSpace: 'nowrap', ...sizes[size],
  };
  const variants = {
    primary: {
      background: hover ? 'var(--indigo-600)' : 'var(--xo-indigo)', color: '#fff',
      boxShadow: hover ? 'var(--glow-indigo)' : 'none',
    },
    secondary: {
      color: 'var(--fg1)',
      borderColor: hover ? 'var(--border-strong)' : 'var(--border)',
      background: hover ? 'var(--surface-2)' : 'var(--surface)',
    },
    ghost: { background: 'transparent', color: 'var(--accent)', padding: size === 'md' ? '12px 8px' : undefined },
    onDark: {
      background: hover ? '#fff' : 'rgba(255,255,255,.10)', color: hover ? 'var(--xo-ink)' : '#fff',
      border: '1px solid rgba(255,255,255,.25)', backdropFilter: 'blur(6px)',
    },
    light: {
      background: hover ? 'var(--slate-100)' : '#fff', color: 'var(--xo-ink)',
      boxShadow: 'var(--shadow-sm)',
    },
  };
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants[variant], ...style }}>{children}</button>
  );
}

function Chevron({ size = 14, color = 'currentColor' }) {
  return <span style={{ fontWeight: 800, fontSize: size, color, lineHeight: 1 }}>›</span>;
}

function Arrow({ size = 16, color = 'currentColor' }) {
  return <i data-lucide="arrow-right" style={{ width: size, height: size, color }}></i>;
}

// thin decorative "pyramid bars" — the brand's signal-strength motif
function PyramidBars({ color = 'var(--xo-indigo)', size = 48, style }) {
  const rows = [0.18, 0.34, 0.5, 0.66, 0.82, 1];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.07, ...style }}>
      {rows.map((w, i) => (
        <div key={i} style={{ width: size * w, height: Math.max(2, size * 0.055), background: color, borderRadius: 1 }} />
      ))}
    </div>
  );
}

// Navy atmosphere background: off-center light bloom + faint concentric waves
function Atmosphere({ children, style, bloom = '62% 8%' }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-900)', ...style }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(120% 90% at ${bloom}, rgba(91,141,239,0.35) 0%, rgba(39,85,195,0.12) 28%, rgba(1,12,40,0) 60%)`,
      }} />
      <div style={{
        position: 'absolute', top: '-40%', left: '50%', width: 1400, height: 1400,
        transform: 'translateX(-30%)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.5,
        background: 'repeating-radial-gradient(circle at center, rgba(131,163,238,0.08) 0px, rgba(131,163,238,0.08) 1px, transparent 1px, transparent 46px)',
      }} />
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}

// Reusable "image placeholder" — on-brand gradient panel with subtle motif + label.
// A polished stand-in for a real photo/screenshot the user will supply.
function MediaPlaceholder({ label = 'PHOTO', ratio, height, dark = true, style, children }) {
  const wrap = {
    position: 'relative', overflow: 'hidden', borderRadius: 'inherit',
    background: dark
      ? 'linear-gradient(135deg, #0A1230 0%, #242750 55%, #3A3F86 100%)'
      : 'linear-gradient(135deg, var(--slate-100), var(--slate-200))',
    ...(ratio ? { aspectRatio: ratio } : {}),
    ...(height ? { height } : {}),
    ...style,
  };
  return (
    <div style={wrap}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(90% 80% at 70% 10%, rgba(120,150,240,0.30), transparent 60%)',
        pointerEvents: 'none',
      }} />
      {children ?? (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          <PyramidBars color={dark ? 'rgba(255,255,255,.4)' : 'var(--slate-400)'} size={44} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.2em', color: dark ? 'rgba(255,255,255,.45)' : 'var(--slate-400)' }}>{label}</span>
        </div>
      )}
    </div>
  );
}

// Avatar placeholder with initials
function Avatar({ name = 'XO', size = 44, ring }) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: 'linear-gradient(140deg, var(--indigo-400), var(--indigo-700))',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: size * 0.36,
      border: ring ? '2px solid #fff' : 'none', boxShadow: ring ? 'var(--shadow-sm)' : 'none',
    }}>{initials}</div>
  );
}

// pass-through wrapper (kept for structure; entrance animation removed for reliability)
function Reveal({ children, delay = 0, style }) {
  return <div style={style}>{children}</div>;
}

Object.assign(window, { Wordmark, Eyebrow, Button, Chevron, Arrow, PyramidBars, Atmosphere, MediaPlaceholder, Avatar, Reveal });
