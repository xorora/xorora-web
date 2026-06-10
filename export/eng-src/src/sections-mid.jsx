// Xorora homepage — Success stories, Webinar, Recognition, Partnerships
const { useState: useMidState } = React;

/* ---------------- FEATURED SUCCESS STORIES ---------------- */
function Stories() {
  const stories = [
    {
      client: 'NORTHWIND', tag: 'FINTECH',
      title: 'Real-time fraud scoring across a payments network',
      metric: '−38% fraud loss',
      quote: 'Xorora embedded with our team and shipped a production model in nine weeks. The fraud reduction paid for the engagement in the first quarter.',
      person: 'Priya Anand', role: 'VP Risk, Northwind',
    },
    {
      client: 'AXIOM', tag: 'HEALTHCARE',
      title: 'Clinical document copilot for 4,000 providers',
      metric: '6 hrs saved / clinician / wk',
      quote: 'They engineered guardrails we trust with patient data. Clinicians actually use it — adoption hit 80% in a month.',
      person: 'Dr. Marcus Hale', role: 'Chief Medical Officer, Axiom',
    },
    {
      client: 'HELIOGEN', tag: 'ENERGY',
      title: 'Forecasting platform for a renewables operator',
      metric: '5× faster decisions',
      quote: 'From data foundations to a live dashboard, Xorora delivered the whole arc. A genuine development partner.',
      person: 'Lena Ortiz', role: 'Head of Data, Heliogen',
    },
  ];
  return (
    <section style={{ background: 'var(--bg)', padding: '110px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 52, gap: 20, flexWrap: 'wrap' }}>
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>Selected work</Eyebrow>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(30px,4.2vw,46px)', color: 'var(--fg1)', margin: 0, letterSpacing: '-0.015em' }}>Featured success stories.</h2>
          </div>
          <Button variant="secondary">All case studies <Chevron /></Button>
        </div>
        <Spotlight {...stories[0]} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 24, marginTop: 24 }}>
          {stories.slice(1).map((s) => <StoryCard key={s.client} {...s} />)}
        </div>
      </div>
    </section>
  );
}

function Spotlight({ client, tag, title, metric, quote, person, role }) {
  const [hover, setHover] = useMidState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid', gridTemplateColumns: '1.05fr 1fr', borderRadius: 'var(--r-xl)', overflow: 'hidden',
        border: '1px solid var(--border)', background: 'var(--surface)', cursor: 'pointer',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)', transition: 'box-shadow .25s',
      }} className="xo-spotlight">
      <div style={{ position: 'relative', minHeight: 340 }}>
        <MediaPlaceholder height="100%" label="CASE STUDY">
          <div style={{ position: 'absolute', inset: 0, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '.06em', color: '#fff' }}>{client}</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.14em', color: '#fff', background: 'rgba(255,255,255,.14)', padding: '5px 11px', borderRadius: 'var(--r-pill)' }}>{tag}</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, alignSelf: 'flex-start' }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(34px,4vw,52px)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>{metric}</div>
            </div>
          </div>
        </MediaPlaceholder>
      </div>
      <div style={{ padding: 'clamp(32px,4vw,52px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.14em', color: 'var(--tangerine-600)', marginBottom: 20 }}>
          <i data-lucide="star" style={{ width: 14, fill: 'var(--tangerine-500)', color: 'var(--tangerine-500)' }}></i> FEATURED OUTCOME
        </span>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(22px,2.4vw,30px)', color: 'var(--fg1)', margin: '0 0 22px', lineHeight: 1.2, letterSpacing: '-0.01em' }}>{title}</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, lineHeight: 1.65, color: 'var(--fg2)', margin: '0 0 28px' }}>"{quote}"</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name={person} size={46} />
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--fg1)' }}>{person}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'var(--fg3)' }}>{role}</div>
            </div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: 600, color: hover ? 'var(--tangerine-600)' : 'var(--accent)', transition: 'color .15s' }}>
            Read case study <Chevron />
          </span>
        </div>
      </div>
    </div>
  );
}

function StoryCard({ client, tag, title, metric, quote, person, role }) {
  const [hover, setHover] = useMidState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 'var(--r-lg)', overflow: 'hidden', cursor: 'pointer',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-4px)' : 'none', transition: 'all .25s cubic-bezier(.4,0,.2,1)',
      }}>
      <div style={{ padding: '26px 26px 22px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 16, letterSpacing: '.06em', color: 'var(--slate-700)' }}>{client}</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '.14em', color: 'var(--tangerine-600)', background: 'rgba(242,107,33,.1)', padding: '4px 10px', borderRadius: 'var(--r-pill)' }}>{tag}</span>
        </div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 19, color: 'var(--fg1)', margin: '0 0 18px', lineHeight: 1.3 }}>{title}</h3>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent-soft)', padding: '7px 14px', borderRadius: 'var(--r-pill)' }}>
          <i data-lucide="trending-up" style={{ width: 16, color: 'var(--accent)' }}></i>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14.5, color: 'var(--accent)' }}>{metric}</span>
        </div>
      </div>
      <div style={{ padding: 26, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--fg2)', margin: '0 0 22px', flexGrow: 1 }}>"{quote}"</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Avatar name={person} size={42} />
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14.5, color: 'var(--fg1)' }}>{person}</div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'var(--fg3)' }}>{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- WEBINAR BANNER ---------------- */
function Webinar({ onNav }) {
  return (
    <section style={{ background: 'var(--bg)', padding: '0 32px 104px' }}>
      <Atmosphere style={{ maxWidth: 1240, margin: '0 auto', borderRadius: 'var(--r-xl)' }} bloom="85% 30%">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24, alignItems: 'center' }} className="xo-webinar-grid">
          <div style={{ padding: '56px 24px 56px 56px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.16em', color: 'var(--tangerine-400)', border: '1px solid rgba(255,138,61,.4)', borderRadius: 'var(--r-pill)', padding: '5px 12px', marginBottom: 22 }}>
              <i data-lucide="radio" style={{ width: 13 }}></i> WEBINAR
            </span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(26px,3.2vw,38px)', color: '#fff', margin: '0 0 24px', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
              From AI pilot to ROI: how growing businesses make AI work.
            </h2>
            <Button variant="light" size="lg" onClick={() => onNav('top')}>
              <i data-lucide="play" style={{ width: 16 }}></i> Watch now
            </Button>
          </div>
          <div style={{ display: 'flex', gap: 16, padding: '0 56px 0 0', alignItems: 'stretch' }} className="xo-webinar-people">
            {[{ n: 'Rajdeep Cheema', t: 'Chief AI Officer' }, { n: 'Yasir Singh', t: 'Chief Engineer' }].map(p => (
              <div key={p.n} style={{ flex: 1, minWidth: 0 }}>
                <MediaPlaceholder ratio="3 / 4" style={{ borderRadius: 'var(--r-lg)' }} label="SPEAKER">
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: 16, background: 'linear-gradient(to top, rgba(2,6,15,.7), transparent 55%)' }}>
                    <div>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#fff' }}>{p.n}</div>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: 'rgba(255,255,255,.65)' }}>{p.t}</div>
                    </div>
                  </div>
                </MediaPlaceholder>
              </div>
            ))}
          </div>
        </div>
      </Atmosphere>
    </section>
  );
}

/* ---------------- RECOGNITION (marquee) ---------------- */
function Recognition() {
  const items = ['INC. 5000', 'CLUTCH TOP 50', 'FORRESTER WAVE', 'FT 1000', 'DELOITTE FAST', 'G2 LEADER', 'ISO 27001', 'SOC 2 TYPE II', 'ISO 9001', 'GDPR READY'];
  const loop = [...items, ...items];
  return (
    <section style={{ background: 'var(--surface)', padding: '104px 0', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto 56px', textAlign: 'center', padding: '0 32px' }}>
        <Eyebrow style={{ marginBottom: 16 }}>Recognition</Eyebrow>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.8vw,42px)', color: 'var(--fg1)', margin: 0, letterSpacing: '-0.015em' }}>
          Recognized by the best, year after year.
        </h2>
      </div>
      <div className="xo-marquee-wrap">
        <div className="xo-marquee">
          {loop.map((b, i) => <Badge key={i} label={b} />)}
        </div>
      </div>
    </section>
  );
}

function Badge({ label }) {
  const cert = /ISO|SOC|GDPR/.test(label);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0, padding: '0 40px' }}>
      <div style={{ width: 52, height: 52, borderRadius: '50%', border: '2px solid var(--slate-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-400)', flexShrink: 0 }}>
        <i data-lucide={cert ? 'shield-check' : 'award'} style={{ width: 24 }}></i>
      </div>
      <span style={{ fontFamily: cert ? 'JetBrains Mono, monospace' : 'Poppins, sans-serif', fontSize: cert ? 13 : 16, fontWeight: 600, letterSpacing: cert ? '.04em' : '.02em', color: 'var(--slate-500)', whiteSpace: 'nowrap' }}>{label}</span>
    </div>
  );
}

/* ---------------- PARTNERSHIPS ---------------- */
function Partnerships() {
  const partners = [
    { name: 'Microsoft', sub: 'Solutions Partner', icon: 'grid-2x2' },
    { name: 'Google Cloud', sub: 'Build Partner', icon: 'cloud' },
    { name: 'NVIDIA', sub: 'Inception Program', icon: 'cpu' },
    { name: 'AWS', sub: 'Advanced Tier', icon: 'server' },
  ];
  return (
    <Atmosphere bloom="50% 0%">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 32px', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(26px,3.4vw,38px)', color: '#fff', margin: '0 0 56px', letterSpacing: '-0.01em' }}>
            Our partnerships with industry leaders.
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20 }}>
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center',
                padding: '24px 20px', borderRadius: 'var(--r-lg)', background: 'rgba(255,255,255,.04)',
                border: '1px solid rgba(255,255,255,.1)',
              }}>
                <i data-lucide={p.icon} style={{ width: 30, color: 'var(--indigo-300)' }}></i>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff' }}>{p.name}</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,.55)' }}>{p.sub}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Atmosphere>
  );
}

Object.assign(window, { Stories, Webinar, Recognition, Partnerships });
