// Xorora — Marketing Services · mid (Services grid, Results)
const { useState: useMktMidState } = React;

/* ============ 3 · SERVICES GRID ============ */
function MktServices({ onTalk }) {
  const svc = [
    { icon: 'search-check', name: 'Search Equity Engineering', plain: 'SEO', body: 'Technical SEO, content systems, and authority building that compound organic visibility into a durable acquisition channel.', tags: ['TECHNICAL SEO', 'CONTENT', 'LINK EQUITY'] },
    { icon: 'map-pin', name: 'Local Signal Optimization', plain: 'Local SEO', body: 'Google Business Profile, citations, and review velocity tuned so you own the map pack across every service area.', tags: ['GBP', 'CITATIONS', 'REVIEWS'] },
    { icon: 'badge-dollar-sign', name: 'Paid Search Architecture', plain: 'Google Ads', body: 'Search, Shopping, and Performance Max structured for intent — bid systems and feeds engineered for profitable ROAS.', tags: ['SEM', 'SHOPPING', 'PMAX'] },
    { icon: 'thumbs-up', name: 'Social Demand Generation', plain: 'Meta Ads', body: 'Prospecting and retargeting funnels with creative testing loops that turn cold audiences into measurable pipeline.', tags: ['PROSPECTING', 'RETARGETING', 'CREATIVE'] },
    { icon: 'share-2', name: 'Audience Signal Management', plain: 'Social Media', body: 'Organic presence run as a signal system — content, community, and analytics that feed the rest of the funnel.', tags: ['ORGANIC', 'COMMUNITY', 'ANALYTICS'] },
    { icon: 'briefcase', name: 'B2B Pipeline Engineering', plain: 'B2B Marketing', body: 'Account-based programs and full-funnel demand gen wired to your CRM — attribution from first touch to closed revenue.', tags: ['ABM', 'DEMAND GEN', 'ATTRIBUTION'], featured: true },
  ];
  return (
    <section style={{ position: 'relative', background: 'var(--navy-900)', padding: 'clamp(96px,11vw,120px) 0' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(70,76,159,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none', opacity: 0.7 }} />
      <div className="mkt-wrap" style={{ position: 'relative' }}>
        <div style={{ marginBottom: 56 }}>
          <MktEyebrow style={{ marginBottom: 18 }}>Our marketing services</MktEyebrow>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(32px,5vw,56px)', lineHeight: 1.02, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#fff', margin: 0, maxWidth: 720, textWrap: 'balance' }}>Channels, built as systems</h2>
        </div>
        <div className="mkt-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {svc.map(s => <MktServiceCard key={s.name} {...s} onTalk={onTalk} />)}
        </div>
      </div>
    </section>
  );
}

function MktServiceCard({ icon, name, plain, body, tags, featured, onTalk }) {
  const [h, setH] = useMktMidState(false);
  const bg = featured ? 'var(--indigo-800)' : 'rgba(255,255,255,0.02)';
  const border = featured ? 'var(--indigo-500)' : (h ? 'rgba(70,76,159,0.45)' : 'rgba(70,76,159,0.2)');
  const topHi = featured ? 'inset 0 1px 0 rgba(107,112,182,0.4)' : 'inset 0 1px 0 rgba(255,255,255,0.06)';
  return (
    <div onClick={onTalk} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', background: bg, border: '1px solid ' + border, boxShadow: topHi + (h ? ', var(--shadow-lg)' : ''), borderRadius: 16, padding: '32px 28px', transform: h ? 'translateY(-3px)' : 'none', transition: 'transform .2s ease, border-color .2s ease, box-shadow .2s ease' }}>
      {featured && <span style={{ position: 'absolute', top: 16, right: 18, fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.14em', color: 'var(--tangerine-400)' }}>FEATURED</span>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 18 }}>
        <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 10, background: 'rgba(70,76,159,0.16)', border: '1px solid rgba(70,76,159,0.35)', color: 'var(--indigo-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={icon} style={{ width: 21 }}></i></span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--slate-500)' }}>{plain}</span>
      </div>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 19, color: '#fff', margin: '0 0 10px', lineHeight: 1.25 }}>{name}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.6, color: featured ? 'rgba(255,255,255,.72)' : 'var(--slate-400)', margin: '0 0 18px' }}>{body}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 'auto' }}>
        {tags.map(t => <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '.06em', color: 'var(--indigo-300)', background: 'rgba(70,76,159,0.12)', border: '1px solid rgba(70,76,159,0.25)', padding: '5px 9px', borderRadius: 6 }}>{t}</span>)}
      </div>
    </div>
  );
}

/* ============ 4 · RESULTS (light) ============ */
function MktResults() {
  const stats = [
    { num: '312', unit: '%', label: 'Avg organic growth' },
    { num: '4.8', unit: '×', label: 'Paid media ROAS' },
    { num: '−52', unit: '%', label: 'Cost per acquisition' },
    { num: '89', unit: '%', label: 'More qualified leads' },
  ];
  const projects = [
    { tag: 'E-COMMERCE · PAID SEARCH', name: 'Confidential client', result: '4.2× ROAS in 90 days', desc: 'Rebuilt the Shopping feed and migrated to Performance Max with profit-tiered bids. Scaled spend 3× while holding target ROAS.', meta: 'Q1 2025 · 90-day sprint', tags: ['PMAX', 'SHOPPING', 'CRO'] },
    { tag: 'LOCAL SERVICES · SEO', name: 'Confidential client', result: 'Top-3 maps across 14 areas', desc: 'Engineered a local signal system — GBP optimization, geo-content, and review velocity — lifting booked-call volume 2.6×.', meta: 'Q3 2024 · 6-month engagement', tags: ['GBP', 'LOCAL CONTENT', 'REVIEWS'] },
    { tag: 'B2B SAAS · FULL FUNNEL', name: 'Confidential client', result: '$4.1M pipeline · −38% CAC', desc: 'Stood up an ABM motion wired to the CRM with closed-loop attribution, compounding MQL-to-SQL conversion quarter over quarter.', meta: 'Q4 2024 · Ongoing', tags: ['ABM', 'DEMAND GEN', 'ATTRIBUTION'] },
  ];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#fff', padding: 'clamp(96px,11vw,120px) 0' }}>
      <div className="mkt-wrap">
        <MktEyebrow color="var(--tangerine-600)" style={{ marginBottom: 18 }}>Engineered outcomes</MktEyebrow>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(32px,4.6vw,52px)', lineHeight: 1.02, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--xo-ink)', margin: '0 0 52px', maxWidth: 720 }}>Outcomes you can measure</h2>
        <div className="mkt-results-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginBottom: 72 }}>
          {stats.map(s => (
            <div key={s.label} style={{ borderLeft: '3px solid var(--indigo-200)', paddingLeft: 24 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(46px,5vw,64px)', lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--xo-ink)' }}>{s.num}</span>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 36, color: 'var(--indigo-500)' }}>{s.unit}</span>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--slate-500)', margin: '14px 0 6px' }}>{s.label}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, color: 'var(--slate-400)' }}>campaign benchmark</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--slate-400)', marginBottom: 16, lineHeight: 1.6 }}>* Featured projects are representative engagements. Client names withheld by NDA.</div>
        <div className="mkt-projects" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {projects.map(p => <MktProjectCard key={p.tag} {...p} />)}
        </div>
      </div>
    </section>
  );
}

function MktProjectCard({ tag, name, result, desc, meta, tags }) {
  const [h, setH] = useMktMidState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', flexDirection: 'column', background: 'var(--slate-50)', border: '1px solid var(--slate-200)', borderTop: '3px solid ' + (h ? 'var(--tangerine-500)' : 'var(--indigo-500)'), borderRadius: 16, padding: 28, transform: h ? 'translateY(-3px)' : 'none', boxShadow: h ? 'var(--shadow-md)' : 'none', transition: 'transform .2s ease, border-top-color .2s ease, box-shadow .2s ease' }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.1em', color: 'var(--xo-indigo)', marginBottom: 16 }}>{tag}</div>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--slate-500)', marginBottom: 6 }}>{name}</div>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 20, color: 'var(--xo-ink)', margin: '0 0 12px', lineHeight: 1.25 }}>{result}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.6, color: 'var(--slate-600)', margin: '0 0 18px' }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 }}>
        {tags.map(t => <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '.05em', color: 'var(--indigo-700)', background: 'var(--indigo-50)', border: '1px solid var(--indigo-100)', padding: '4px 8px', borderRadius: 5 }}>{t}</span>)}
      </div>
      <div style={{ marginTop: 'auto', fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'var(--slate-400)' }}>{meta}</div>
    </div>
  );
}

Object.assign(window, { MktServices, MktResults });
