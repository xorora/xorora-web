// Xorora — Data & AI page · middle sections (Evolve, How we deliver, Tools & tech)
const { useState: useDaiMidState } = React;

/* ============ 4 · DATA & AI THAT EVOLVE (glass on blue) ============ */
function DaiEvolve() {
  const tiles = [
    { t: 'End-to-end expertise in data & AI', b: 'From strategy through to execution, we combine deep technical skill with business insight to deliver solutions that matter.' },
    { t: 'Proven frameworks and modern platforms', b: 'We leverage leading technologies and reusable accelerators to scale faster, reduce risk, and deliver value sooner.' },
    { t: 'Teams that integrate with yours', b: 'Our experts become an extension of your organization, working closely with your stakeholders to solve your unique challenges.' },
    { t: 'Business-outcome driven', b: 'We focus on tangible business impact — improved decision-making, cost reduction, new revenue streams, or increased operational agility.' },
  ];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg, #15225C 0%, #1E3784 44%, #2A4FBD 100%)', padding: 'clamp(72px,9vw,118px) 32px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 80% at 82% 14%, rgba(140,175,255,0.55), transparent 56%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: 900, height: 900, borderRadius: '50%', background: 'repeating-radial-gradient(circle at center, rgba(255,255,255,.06) 0px, rgba(255,255,255,.06) 1.5px, transparent 1.5px, transparent 40px)', opacity: .5, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(30px,4.2vw,52px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', textAlign: 'center', margin: '0 auto 56px', maxWidth: 820, textWrap: 'balance' }}>Data and AI that evolve with your needs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="dai-evolve-grid">
          {tiles.map((c, i) => (
            <div key={i} style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 300, borderRadius: 'var(--r-lg)', padding: 'clamp(24px,2.4vw,30px)', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.20)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: 'var(--r-lg)', background: 'linear-gradient(155deg, rgba(255,255,255,0.16), rgba(255,255,255,0) 50%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 20, color: '#fff', margin: 0, lineHeight: 1.22, letterSpacing: '-0.01em' }}>{c.t}</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.74)', margin: 0, marginTop: 'auto', paddingTop: 32 }}>{c.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 5 · HOW WE DELIVER (interactive) ============ */
function DaiDeliver() {
  const [active, setActive] = useDaiMidState(0);
  const steps = [
    { n: '01', name: 'Discover', body: 'We assess your data landscape, goals, and constraints — mapping use cases, data readiness, and the highest-value opportunities before a line of code is written.' },
    { n: '02', name: 'Validate', body: 'We prototype fast and test against real data and KPIs, proving value and de-risking the approach before full investment.' },
    { n: '03', name: 'Build', body: 'We engineer production-grade data pipelines, models, and applications — secure, observable, and built to integrate with your existing stack.' },
    { n: '04', name: 'Scale', body: 'Expand AI and data capabilities across teams with a unified operational model. We optimize performance, enhance governance, build evaluation suites, and enable organizational adoption through training, change management, and multi-use-case rollout.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,4vw,46px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--fg1)', margin: '0 0 48px', textWrap: 'balance' }}>How we deliver AI and data innovation</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'stretch', borderTop: '1px solid var(--border)' }} className="dai-deliver-grid">
        {/* visual */}
        <div className="dai-deliver-visual" style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 36 }}>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(56px,7vw,96px)', lineHeight: 0.9, letterSpacing: '-0.04em', color: 'var(--fg1)' }}>{steps[active].n}</div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0 8px' }}>
            <DiamondStack active={active} />
          </div>
        </div>
        {/* list */}
        <div style={{ borderLeft: '1px solid var(--border)' }}>
          {steps.map((s, i) => {
            const on = active === i;
            return (
              <div key={i} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}
                style={{ borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,2.4vw,32px)', cursor: 'pointer', background: on ? 'var(--slate-50)' : 'transparent', transition: 'background .18s' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: on ? 'var(--tangerine-600)' : 'var(--slate-400)', transition: 'color .18s' }}>{s.n}</span>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(20px,2.2vw,26px)', letterSpacing: '-0.01em', color: on ? 'var(--xo-indigo)' : 'var(--fg1)', margin: 0, transition: 'color .18s' }}>{s.name}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateRows: on ? '1fr' : '0fr', transition: 'grid-template-rows .3s cubic-bezier(.4,0,.2,1)' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.65, color: 'var(--fg2)', margin: 0, paddingTop: 14, paddingLeft: 29, maxWidth: 620 }}>{s.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </LightSection>
  );
}

// Stacked isometric diamonds; the active layer fills solid indigo
function DiamondStack({ active }) {
  const cx = 150, rx = 104, ry = 46;
  const cys = [66, 112, 158, 204];
  const path = cy => `M${cx},${cy - ry} L${cx + rx},${cy} L${cx},${cy + ry} L${cx - rx},${cy} Z`;
  // draw inactive first (top→bottom), active last so it sits on top and crisp
  const order = [0, 1, 2, 3].filter(i => i !== active).concat(active);
  return (
    <svg viewBox="0 0 300 270" width="100%" style={{ maxWidth: 340, overflow: 'visible' }} aria-hidden="true">
      <defs>
        <linearGradient id="daiDiaActive" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3A63D8" />
          <stop offset="1" stopColor="#1E3FA8" />
        </linearGradient>
      </defs>
      {order.map(i => {
        const on = i === active;
        return (
          <path key={i} d={path(cys[i])}
            fill={on ? 'url(#daiDiaActive)' : 'rgba(70,90,180,0.13)'}
            stroke={on ? 'none' : 'rgba(70,90,180,0.30)'} strokeWidth="1"
            style={{ filter: on ? 'drop-shadow(0 14px 22px rgba(40,70,180,0.35))' : 'none', transition: 'fill .25s, stroke .25s' }} />
        );
      })}
    </svg>
  );
}

/* ============ 6 · TOOLS & TECHNOLOGIES ============ */
function DaiTools() {
  const [tab, setTab] = useDaiMidState(0);
  const tabs = ['LLMs', 'Agent frameworks', 'Vector stores'];
  const data = [
    {
      items: [
        { name: 'OpenAI', slug: 'openai', abbr: 'Oa', color: '#0A0A0A' },
        { name: 'Anthropic', slug: 'claude-color', abbr: 'An', color: '#D2540F' },
        { name: 'Gemini', slug: 'gemini-color', abbr: 'Gm', color: '#2C57C9' },
        { name: 'DeepSeek', slug: 'deepseek-color', abbr: 'Ds', color: '#2C57C9' },
        { name: 'Llama', slug: 'ollama', abbr: 'Lm', color: '#0A0A0A' },
        { name: 'Mistral', slug: 'mistral-color', abbr: 'Mi', color: '#D2540F' },
      ],
      more: 'Grok · Cohere · Qwen · Phi · Command R',
    },
    {
      items: [
        { name: 'LangChain', slug: 'langchain-color', abbr: 'Lc', color: '#1C7E6E' },
        { name: 'LlamaIndex', slug: 'llamaindex-color', abbr: 'Li', color: '#8B5CF6' },
        { name: 'CrewAI', slug: 'crewai', abbr: 'Cr', color: '#D2540F' },
        { name: 'AutoGen', mono: true, abbr: 'AG', color: '#2C57C9' },
        { name: 'Haystack', mono: true, abbr: 'Hs', color: '#1B9E77' },
        { name: 'DSPy', mono: true, abbr: 'Dy', color: '#D2540F' },
      ],
      more: 'Semantic Kernel · Pydantic AI · n8n · Temporal',
    },
    {
      items: [
        { name: 'Pinecone', mono: true, abbr: 'Pc', color: '#0B7285' },
        { name: 'Weaviate', mono: true, abbr: 'We', color: '#1B9E77' },
        { name: 'Qdrant', mono: true, abbr: 'Qd', color: '#D2453E' },
        { name: 'Chroma', mono: true, abbr: 'Ch', color: '#D9A23B' },
        { name: 'Milvus', mono: true, abbr: 'Mv', color: '#2C57C9' },
        { name: 'pgvector', mono: true, abbr: 'pg', color: '#336791' },
      ],
      more: 'Redis · Elasticsearch · MongoDB Atlas',
    },
  ];
  const cur = data[tab];
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead title="Tools &amp; technologies" align="center" style={{ marginBottom: 30 }} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 48 }}>
        {tabs.map((t, i) => {
          const on = tab === i;
          return (
            <button key={t} onClick={() => setTab(i)} style={{ position: 'relative', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15.5, cursor: 'pointer', background: 'none', border: 'none', padding: '10px 18px', color: on ? 'var(--xo-indigo)' : 'var(--fg2)', transition: 'color .15s' }}>
              {t}
              <span style={{ position: 'absolute', left: 14, right: 14, bottom: 0, height: 2, borderRadius: 2, background: 'var(--xo-indigo)', transform: on ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform .2s' }} />
            </button>
          );
        })}
      </div>
      <div style={{ maxWidth: 1000, margin: '0 auto', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', background: 'var(--surface)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }} className="dai-tech-row" key={tab}>
          {cur.items.map((it, i) => (
            <div key={it.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '30px 12px', borderRight: (i % 6 === 5) ? 'none' : '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--slate-500)', textAlign: 'center' }}>{it.name}</span>
              <TechIcon {...it} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', padding: '18px 16px', fontFamily: 'Poppins, sans-serif', fontSize: 13.5, color: 'var(--fg3)' }}>
          <span style={{ color: 'var(--slate-500)' }}>and more — </span>{cur.more}
        </div>
      </div>
    </LightSection>
  );
}

function TechIcon({ slug, abbr, color, mono }) {
  const [err, setErr] = useDaiMidState(false);
  if (mono || err || !slug) {
    return (
      <span style={{ width: 42, height: 42, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: (color || 'var(--xo-indigo)') + '1A', border: '1px solid ' + (color || 'var(--xo-indigo)') + '40', color: color || 'var(--xo-indigo)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15 }}>{abbr || '··'}</span>
    );
  }
  return (
    <img src={'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/' + slug + '.svg'} alt="" onError={() => setErr(true)}
      style={{ width: 42, height: 42, objectFit: 'contain' }} />
  );
}

Object.assign(window, { DaiEvolve, DaiDeliver, DaiTools });
