// Xorora — modern "tech field" animated background (plexus network + perspective grid + traveling pulses)
const { useRef: useTfRef, useEffect: useTfEffect } = React;

function TechField({ style }) {
  const canvasRef = useTfRef(null);
  useTfEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf, t0 = performance.now();
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let nodes = [];
    let pulses = [];

    function resize() {
      const r = canvas.parentElement.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = Math.max(1, w * dpr); canvas.height = Math.max(1, h * dpr);
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      const density = Math.max(34, Math.min(80, Math.round((w * h) / 17000)));
      nodes = [];
      for (let i = 0; i < density; i++) {
        nodes.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.6 + 0.8,
          accent: Math.random() < 0.08, // a few tangerine sparks
        });
      }
      pulses = [];
    }

    const LINK = 132;            // max distance for a link
    const FOCAL = () => ({ x: w * 0.78, y: h * 0.16 });

    function spawnPulse() {
      // pick a random link and send a light pulse along it
      if (nodes.length < 2) return;
      const a = nodes[(Math.random() * nodes.length) | 0];
      // find a near neighbor
      let best = null, bd = LINK;
      for (const b of nodes) {
        if (b === a) continue;
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < bd) { bd = d; best = b; }
      }
      if (best) pulses.push({ a, b: best, t: 0, speed: 0.012 + Math.random() * 0.02, accent: Math.random() < 0.25 });
    }

    function frame(now) {
      const time = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      const f = FOCAL();

      // perspective grid (subtle, receding toward focal) — drawn faint
      ctx.save();
      ctx.globalAlpha = 1;
      const horizonY = h * 0.04;
      const vanishX = w * 0.78;
      ctx.strokeStyle = 'rgba(110,140,230,0.05)';
      ctx.lineWidth = 1;
      for (let i = -8; i <= 12; i++) {
        const bx = (i / 12) * w * 1.6 + w * 0.1;
        ctx.beginPath();
        ctx.moveTo(bx, h);
        ctx.lineTo(vanishX, horizonY);
        ctx.stroke();
      }
      const drift = (time * 14) % 70;
      for (let gy = horizonY; gy < h + 70; gy += 70) {
        const yy = gy + drift;
        const depth = (yy - horizonY) / (h - horizonY);
        ctx.globalAlpha = Math.max(0, Math.min(1, depth)) * 0.06;
        ctx.beginPath(); ctx.moveTo(0, yy); ctx.lineTo(w, yy); ctx.stroke();
      }
      ctx.restore();

      // move nodes
      for (const n of nodes) {
        if (!reduce) { n.x += n.vx; n.y += n.vy; }
        if (n.x < -20) n.x = w + 20; if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20; if (n.y > h + 20) n.y = -20;
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            const near = 1 - Math.min(1, Math.hypot((a.x + b.x) / 2 - f.x, (a.y + b.y) / 2 - f.y) / (w * 0.95));
            const alpha = (1 - d / LINK) * (0.10 + near * 0.4);
            ctx.strokeStyle = `rgba(120,150,240,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const near = 1 - Math.min(1, Math.hypot(n.x - f.x, n.y - f.y) / (w * 0.95));
        if (n.accent) {
          ctx.fillStyle = `rgba(255,138,61,${0.45 + near * 0.4})`;
        } else {
          ctx.fillStyle = `rgba(150,176,245,${0.30 + near * 0.55})`;
        }
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }

      // traveling pulses
      if (!reduce) {
        if (pulses.length < 14 && Math.random() < 0.16) spawnPulse();
        for (let i = pulses.length - 1; i >= 0; i--) {
          const p = pulses[i];
          p.t += p.speed;
          if (p.t >= 1) { pulses.splice(i, 1); continue; }
          const x = p.a.x + (p.b.x - p.a.x) * p.t;
          const y = p.a.y + (p.b.y - p.a.y) * p.t;
          const fade = Math.sin(p.t * Math.PI);
          const col = p.accent ? '255,160,90' : '150,190,255';
          const grd = ctx.createRadialGradient(x, y, 0, x, y, 6);
          grd.addColorStop(0, `rgba(${col},${0.9 * fade})`);
          grd.addColorStop(1, `rgba(${col},0)`);
          ctx.fillStyle = grd;
          ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
        }
      }

      raf = requestAnimationFrame(frame);
    }

    resize(); seed(); frame(performance.now());
    const onR = () => { resize(); seed(); };
    window.addEventListener('resize', onR);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onR); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', ...style }} />;
}

window.TechField = TechField;
