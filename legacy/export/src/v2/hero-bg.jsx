// Xorora Homepage V2 — hero background.
// Glassy torus-knot in BRAND indigo (#464C9F) with light-indigo glass shading and
// rim glow, indigo additive bokeh particles, a custom perspective grid floor with a
// traveling wave pulse + center radial fade, faint wireframe shapes, and bloom.
const { useRef: useHbRef, useEffect: useHbFx } = React;

function HeroKnot({ style }) {
  const mountRef = useHbRef(null);
  useHbFx(() => {
    const THREE = window.THREE;
    const mount = mountRef.current;
    if (!THREE || !mount) return;

    // Brand palette — indigo is the primary; no purple/cyan.
    const BG = 0x020209;
    const INDIGO = new THREE.Color(0x464c9f);        // brand indigo
    const INDIGO_LIGHT = new THREE.Color(0x6b71c4);  // light indigo highlight
    const INDIGO_BRIGHT = new THREE.Color(0x9aa0e6); // bright rim
    const INDIGO_DEEP = new THREE.Color(0x23264f);   // far / shadow

    const sizeOf = () => {
      const r = mount.getBoundingClientRect();
      return { w: r.width || window.innerWidth, h: r.height || window.innerHeight };
    };
    let { w: W, h: H } = sizeOf();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(BG, 1);
    const el = renderer.domElement;
    el.style.cssText = 'width:100%;height:100%;display:block';
    mount.appendChild(el);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 16);

    // --- Glassy torus knot: indigo glass + bright indigo Fresnel rim ---
    const knotMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uDark: { value: INDIGO },
        uLight: { value: INDIGO_LIGHT },
        uRim: { value: INDIGO_BRIGHT },
      },
      vertexShader: `
        varying vec3 vN; varying vec3 vView; varying vec2 vUv;
        void main(){
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vN = normalize(mat3(modelMatrix) * normal);
          vView = normalize(cameraPosition - wp.xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform float uTime; uniform vec3 uDark; uniform vec3 uLight; uniform vec3 uRim;
        varying vec3 vN; varying vec3 vView; varying vec2 vUv;
        void main(){
          vec3 N = normalize(vN); vec3 V = normalize(vView);
          float facing = clamp(dot(N, V), 0.0, 1.0);
          float fres = pow(1.0 - facing, 2.6);
          // soft indigo sheen bands travelling along the tube
          float band = 0.5 + 0.5 * sin(vUv.x * 6.2831 * 3.0 + uTime * 0.6);
          vec3 base = mix(uDark, uLight, band);
          base *= 0.5 + 0.6 * facing;          // glassy shading
          vec3 col = base + uRim * fres * 1.1;   // bright indigo rim glow
          float alpha = mix(0.5, 1.0, fres);     // semi-transparent glass
          gl_FragColor = vec4(col, alpha);
        }`,
    });
    const geo = new THREE.TorusKnotGeometry(3.05, 0.92, 260, 36, 2, 3);
    const knot = new THREE.Mesh(geo, knotMat);
    scene.add(knot);

    // --- Soft round glow sprite (white so particle vertex-colors show) ---
    const dotTex = (() => {
      const c = document.createElement('canvas'); c.width = c.height = 64;
      const g = c.getContext('2d');
      const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grd.addColorStop(0, 'rgba(255,255,255,1)');
      grd.addColorStop(0.25, 'rgba(255,255,255,0.6)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    })();

    // bright indigo near front -> deep indigo in the distance
    function field(count, spread, size, opacity) {
      const g = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      const zMin = -spread * 0.35, zMax = spread * 0.25;
      for (let i = 0; i < count; i++) {
        const z = zMin + Math.random() * (zMax - zMin);
        pos[i * 3] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.62;
        pos[i * 3 + 2] = z;
        const t = (z - zMin) / (zMax - zMin); // 0 far -> 1 near
        const c = INDIGO_DEEP.clone().lerp(INDIGO_LIGHT, t);
        col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      }
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      const m = new THREE.PointsMaterial({
        size, map: dotTex, vertexColors: true, transparent: true, opacity,
        depthWrite: false, blending: THREE.AdditiveBlending,
      });
      return new THREE.Points(g, m);
    }
    const far = field(480, 46, 0.16, 0.55);
    const near = field(160, 34, 0.46, 0.9);
    scene.add(far); scene.add(near);

    // --- Perspective grid floor: thin indigo lines, center radial fade,
    //     slow horizontal wave pulse travelling into the distance ---
    const gridMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      extensions: { derivatives: true },
      uniforms: { uTime: { value: 0 }, uColor: { value: INDIGO } },
      vertexShader: `
        varying vec2 vUv;
        void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        precision highp float;
        uniform float uTime; uniform vec3 uColor; varying vec2 vUv;
        void main(){
          vec2 g = vUv * 64.0;
          vec2 grid = abs(fract(g - 0.5) - 0.5) / fwidth(g);
          float line = 1.0 - min(min(grid.x, grid.y), 1.0);
          float d = distance(vUv, vec2(0.5));
          float fade = smoothstep(0.5, 0.04, d);              // bright center -> clear edges
          float wave = 0.5 + 0.5 * sin(vUv.y * 14.0 - uTime * 1.3); // pulse travelling in depth
          float intensity = line * fade * (0.45 + 0.9 * wave);
          gl_FragColor = vec4(uColor, intensity * 0.13);       // faint indigo floor
        }`,
    });
    const grid = new THREE.Mesh(new THREE.PlaneGeometry(170, 170), gridMat);
    grid.rotation.x = -Math.PI / 2;       // steep receding floor under center
    grid.position.set(0, -7, -4);
    scene.add(grid);

    // --- Low-opacity wireframe shapes receding in back ---
    const wires = [];
    function wire(g, x, y, z, op) {
      const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: INDIGO.getHex(), wireframe: true, transparent: true, opacity: op }));
      m.position.set(x, y, z); scene.add(m); wires.push(m); return m;
    }
    wire(new THREE.IcosahedronGeometry(1.7, 0), -10, 3.5, -12, 0.12);
    wire(new THREE.OctahedronGeometry(1.5, 0), 11, -3, -14, 0.1);
    wire(new THREE.TorusGeometry(1.4, 0.45, 8, 16), 9, 5, -16, 0.08);

    // --- Bloom ---
    let composer = null;
    if (THREE.EffectComposer && THREE.UnrealBloomPass && THREE.RenderPass) {
      composer = new THREE.EffectComposer(renderer);
      composer.addPass(new THREE.RenderPass(scene, camera));
      composer.addPass(new THREE.UnrealBloomPass(new THREE.Vector2(W, H), 0.5, 0.45, 0.3));
    }

    let raf, t0 = performance.now();
    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5);
      ty = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('pointermove', onMove);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function frame(now) {
      const t = (now - t0) / 1000;
      knotMat.uniforms.uTime.value = t;
      gridMat.uniforms.uTime.value = t;
      knot.rotation.x = reduce ? 0.5 : t * 0.16;
      knot.rotation.y = reduce ? 0.6 : t * 0.24;
      mx += (tx - mx) * 0.04; my += (ty - my) * 0.04;
      knot.rotation.z = mx * 0.25;
      camera.position.x = mx * 1.1;
      camera.position.y = -my * 0.7;
      camera.lookAt(0, 0, 0);
      far.rotation.y = t * 0.02; near.rotation.y = -t * 0.015;
      wires.forEach((m, i) => { m.rotation.x = t * (0.05 + i * 0.02); m.rotation.y = t * (0.06 + i * 0.015); });
      if (composer) composer.render(); else renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    }
    frame(performance.now());

    function resize() {
      const { w, h } = sizeOf();
      camera.aspect = w / h; camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (composer) composer.setSize(w, h);
    }
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      renderer.dispose(); geo.dispose(); knotMat.dispose(); gridMat.dispose(); dotTex.dispose();
      if (mount.contains(el)) mount.removeChild(el);
    };
  }, []);
  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', ...style }} />;
}

Object.assign(window, { HeroKnot });
