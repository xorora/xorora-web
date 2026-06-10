// Xorora homepage — animated "signal field" hero background + brand geometry
const { useRef: useGeoRef, useEffect: useGeoEffect } = React;

// Canvas signal field: concentric pulses + drifting grid nodes + scan, echoing the
// banner's concentric-wave motif. Draws one frame synchronously so it shows in any capture.
function SignalField({ style }) {
  const canvasRef = useGeoRef(null);
  useGeoEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf, t0 = performance.now();

    function resize() {
      const r = canvas.parentElement.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // grid nodes
    let nodes = [];
    function seed() {
      nodes = [];
      const gap = 64;
      for (let x = 0; x < w + gap; x += gap)
        for (let y = 0; y < h + gap; y += gap)
          nodes.push({ x, y, p: Math.random() * Math.PI * 2 });
    }

    function draw(now) {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      const fx = w * 0.8, fy = h * 0.12; // focal (upper-right)

      // drifting node dots, brighten near focal
      for (const n of nodes) {
        const dx = n.x - fx, dy = n.y - fy;
        const d = Math.sqrt(dx * dx + dy * dy);
        const near = Math.max(0, 1 - d / (w * 0.85));
        const tw = 0.5 + 0.5 * Math.sin(t * 1.2 + n.p);
        const a = (0.05 + near * 0.5) * (0.5 + 0.5 * tw);
        ctx.fillStyle = `rgba(140,168,242,${a})`;
        ctx.fillRect(n.x, n.y, 2, 2);
      }

      // concentric expanding pulses from focal
      const period = 5.5, count = 4;
      for (let i = 0; i < count; i++) {
        const phase = ((t / period) + i / count) % 1;
        const radius = Math.max(0, phase * Math.max(w, h) * 0.95);
        const a = (1 - phase) * 0.22;
        ctx.beginPath();
        ctx.arc(fx, fy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(110,150,245,${a})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // faint static guide rings for depth
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(fx, fy, Math.max(0, i * 150), 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(120,150,235,0.05)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    }

    resize(); seed(); draw(performance.now());
    const onR = () => { resize(); seed(); };
    window.addEventListener('resize', onR);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onR); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', ...style }} />;
}

// Oversized faint X mark watermark bleeding off an edge — recurring brand device
function XWatermark({ size = 520, color = 'rgba(255,255,255,0.04)', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ position: 'absolute', pointerEvents: 'none', ...style }} aria-hidden="true">
      <path d="M50 4 C56 32 68 44 96 50 C68 56 56 68 50 96 C44 68 32 56 4 50 C32 44 44 32 50 4 Z" fill={color} />
    </svg>
  );
}

// Horizontal signal bars (engineered divider / accent), thin tapering rule
function SignalRule({ color = 'var(--tangerine-500)', style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5, ...style }}>
      {[26, 18, 12, 7].map((wd, i) => (
        <div key={i} style={{ width: wd, height: 3, background: color, opacity: 1 - i * 0.18, borderRadius: 1 }} />
      ))}
    </div>
  );
}

// 45° chevron-cut divider between two section colors (echoes the logo geometry)
function Slant({ top, bottom, h = 90, dir = 'left' }) {
  const clip = dir === 'left'
    ? 'polygon(0 0, 100% 0, 100% 0, 0 100%)'
    : 'polygon(0 0, 100% 0, 100% 100%, 0 0)';
  return (
    <div style={{ height: h, background: bottom, position: 'relative', overflow: 'hidden', lineHeight: 0 }}>
      <div style={{ position: 'absolute', inset: 0, background: top, clipPath: clip }} />
    </div>
  );
}

Object.assign(window, { SignalField, XWatermark, SignalRule, Slant });
