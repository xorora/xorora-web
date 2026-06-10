// Xorora — How We Work · CSS-3D brand scene (animated layered-pyramid + chevron monogram)
const { useState: useHw3State, useEffect: useHw3Fx, useRef: useHw3Ref } = React;

// A floating 3D object built from real DOM layers in preserve-3d space:
// a stacked "signal pyramid" of bars + an orbiting chevron blade, drifting on
// pointer move (parallax) and breathing on a slow loop. This is the page's 3D render.
function Brand3D() {
  const wrapRef = useHw3Ref(null);
  const sceneRef = useHw3Ref(null);

  useHw3Fx(() => {
    const wrap = wrapRef.current, scene = sceneRef.current;
    if (!wrap || !scene) return;
    let rx = -18, ry = -28, trx = -18, try_ = -28, raf;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function onMove(e) {
      const r = wrap.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      trx = -18 - py * 16;
      try_ = -28 + px * 26;
    }
    function onLeave() { trx = -18; try_ = -28; }
    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', onLeave);

    let t = 0;
    function loop() {
      t += 0.012;
      rx += (trx - rx) * 0.06;
      ry += (try_ - ry) * 0.06;
      const floatY = Math.sin(t) * 10;
      const breathe = ry + (reduce ? 0 : Math.sin(t * 0.5) * 6);
      scene.style.transform = `translateY(${floatY}px) rotateX(${rx}deg) rotateY(${breathe}deg)`;
      if (!reduce) raf = requestAnimationFrame(loop);
      else scene.style.transform = `rotateX(-18deg) rotateY(-28deg)`;
    }
    loop();
    return () => { cancelAnimationFrame(raf); wrap.removeEventListener('pointermove', onMove); wrap.removeEventListener('pointerleave', onLeave); };
  }, []);

  // pyramid of tapering bars (each a thin 3D slab via box-shadow depth stack)
  const bars = [
    { w: 230, c: '#2A2F66' },
    { w: 196, c: '#343A7D' },
    { w: 162, c: '#3E4593' },
    { w: 128, c: '#474EA0' },
    { w: 94, c: '#5860C0' },
    { w: 60, c: '#6E78D8' },
  ];

  return (
    <div ref={wrapRef} style={{ position: 'relative', width: '100%', height: '100%', minHeight: 420, perspective: 1100, perspectiveOrigin: '55% 45%' }}>
      {/* glow puddle */}
      <div style={{ position: 'absolute', left: '50%', top: '58%', width: 420, height: 420, transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(91,141,239,0.35), transparent 62%)', filter: 'blur(20px)', pointerEvents: 'none' }} />

      <div ref={sceneRef} style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d', willChange: 'transform' }}>
        {/* layered signal pyramid — each bar pushed in Z to build a 3D stack */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transformStyle: 'preserve-3d', transform: 'translate(-50%,-50%)' }}>
          {bars.map((b, i) => {
            const z = (bars.length - 1 - i) * 26 - 65;
            const y = i * 34 - 95;
            return (
              <div key={i} style={{
                position: 'absolute', left: '50%', top: '50%',
                width: b.w, height: 20, marginLeft: -b.w / 2, marginTop: -10,
                transform: `translateZ(${z}px) translateY(${y}px)`,
                background: `linear-gradient(180deg, ${b.c}, ${b.c}cc)`,
                borderRadius: 3,
                boxShadow: `0 1px 0 rgba(255,255,255,.18) inset, 0 14px 30px -10px rgba(2,6,15,.7)`,
                border: '1px solid rgba(150,170,250,.25)',
              }} />
            );
          })}
          {/* apex spark */}
          <div style={{ position: 'absolute', left: '50%', top: '50%', width: 16, height: 16, marginLeft: -8, marginTop: -8, transform: 'translateZ(91px) translateY(-130px) rotate(45deg)', background: 'linear-gradient(135deg, #FFB07A, #F26B21)', borderRadius: 3, boxShadow: '0 0 24px rgba(242,107,33,.8)' }} />
        </div>

        {/* orbiting chevron blade (parallelogram), offset in Z */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%) translateZ(140px) translateX(-150px) rotateY(34deg)', transformStyle: 'preserve-3d' }}>
          <div style={{ width: 86, height: 220, background: 'linear-gradient(150deg, #5860C0, #2A2F66)', clipPath: 'polygon(0 0, 55% 0, 100% 50%, 55% 100%, 0 100%, 45% 50%)', boxShadow: '0 30px 60px -18px rgba(2,6,15,.7)', border: '1px solid rgba(150,170,250,.3)' }} />
        </div>

        {/* floating shards for depth */}
        {[[170, -120, 60, 'rgba(120,150,240,.5)'], [-180, 90, 40, 'rgba(242,107,33,.55)'], [150, 120, 30, 'rgba(150,170,250,.45)'], [-130, -110, 22, 'rgba(255,176,122,.5)']].map(([x, y, z, c], i) => (
          <div key={i} style={{ position: 'absolute', left: '50%', top: '50%', width: 16, height: 16, marginLeft: -8, marginTop: -8, transform: `translate3d(${x}px, ${y}px, ${z}px) rotate(45deg)`, background: c, borderRadius: 2, boxShadow: `0 0 16px ${c}` }} />
        ))}
      </div>
    </div>
  );
}

window.Brand3D = Brand3D;
