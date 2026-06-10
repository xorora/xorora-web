// Xorora — Blog · header + categories sidebar + post grid (filterable)
const { useState: useBlogState } = React;

const BLOG_POSTS = [
  { cat: 'AI Engineering', title: 'Shipping production RAG: what actually breaks at scale', excerpt: 'Retrieval looks easy in a demo and hard in production. Here is the architecture we reach for, and the failure modes we design around.', read: '8 min', date: 'Jun 2, 2026', img: 'assets/regula/featured.jpg', featured: true },
  { cat: 'Cloud & Security', title: 'Guardrails first: securing AI workloads from day one', excerpt: 'Encryption, access control, and observability are not afterthoughts. A practical checklist for AI systems handling sensitive data.', read: '6 min', date: 'May 28, 2026', img: 'assets/saas/event-monitoring.jpg' },
  { cat: 'Product', title: 'From prototype to product: the first ninety days', excerpt: 'The gap between a working demo and a product your business runs on is mostly process. Here is how we close it.', read: '7 min', date: 'May 21, 2026', img: 'assets/saas/voice-ops.jpg' },
  { cat: 'Industry', title: 'Why emerging-market fintech needs different tooling', excerpt: 'Legacy RegTech was built for US and EU enterprises. We unpack what changes when you build for everyone else.', read: '5 min', date: 'May 14, 2026', img: 'assets/regula/header-bg.jpg' },
  { cat: 'AI Engineering', title: 'Evaluating LLM output without fooling yourself', excerpt: 'Vibes are not a metric. A grounded approach to evals, regression suites, and guardrails for language-model features.', read: '9 min', date: 'May 7, 2026', img: 'assets/saas/header-bg.jpg' },
  { cat: 'Case Notes', title: 'Four portals, one backend: an architecture story', excerpt: 'How we modeled role-based access across business, sales, developer, and testing portals on a single shared API.', read: '6 min', date: 'Apr 30, 2026', img: 'assets/mocks/portal-sales.webp' },
  { cat: 'Company', title: 'How we keep engineer turnover low', excerpt: 'The people who learn your product should stay on it. A look at how we build teams that last.', read: '4 min', date: 'Apr 23, 2026', img: 'assets/healthtech/header-bg.jpg' },
  { cat: 'Product', title: 'Designing dashboards people actually check', excerpt: 'Most dashboards get opened once. We share the patterns that turn analytics into a daily habit for teams.', read: '5 min', date: 'Apr 16, 2026', img: 'assets/travel/header-bg.jpg' },
  { cat: 'Cloud & Security', title: 'Serverless event pipelines that stay cheap at scale', excerpt: 'Durable, event-driven workflows without a queue to babysit. The stack we use to keep real-time delivery affordable.', read: '7 min', date: 'Apr 9, 2026', img: 'assets/startups/header-bg.jpg' },
];

const BLOG_CATS = ['All posts', 'AI Engineering', 'Product', 'Cloud & Security', 'Industry', 'Case Notes', 'Company'];

function BlogHeader() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#02060F', marginTop: -72, paddingTop: 72 }}>
      {window.SignalField && <SignalField />}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 70% at 50% -10%, rgba(91,141,239,0.28) 0%, rgba(39,85,195,0.10) 34%, transparent 64%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(2,6,15,0.4) 0%, rgba(2,6,15,0) 30%, rgba(2,6,15,0.55) 100%)', pointerEvents: 'none' }} />
      <XWatermark size={620} color="rgba(120,150,240,0.05)" style={{ top: -150, right: -140 }} />
      <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: 'clamp(96px,11vw,150px) 32px clamp(64px,7vw,92px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <SignalRule color="var(--tangerine-400)" />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--tangerine-400)' }}>The Xorora Blog</span>
          <SignalRule color="var(--tangerine-400)" style={{ transform: 'scaleX(-1)' }} />
        </div>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(38px,5.6vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 22px', textWrap: 'balance' }}>
          Field notes on shipping <span style={{ background: 'linear-gradient(100deg, #C3C6EC, #8E94E0 45%, #FF8A3D)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>production AI</span><span style={{ color: 'var(--tangerine-400)' }}>.</span>
        </h1>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.6, color: 'rgba(255,255,255,.74)', maxWidth: 560, margin: '0 auto' }}>
          Engineering practices, product thinking, and lessons from the systems we build. No hype, just what works.
        </p>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,150,240,.4), transparent)', pointerEvents: 'none' }} />
    </section>
  );
}

function BlogBody() {
  const [cat, setCat] = useBlogState('All posts');
  const counts = {};
  BLOG_POSTS.forEach(p => { counts[p.cat] = (counts[p.cat] || 0) + 1; });
  const posts = cat === 'All posts' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.cat === cat);
  return (
    <LightSection bg="var(--surface)">
      <div style={{ display: 'grid', gridTemplateColumns: '256px 1fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }} className="blog-body-grid">
        {/* sidebar */}
        <aside style={{ position: 'sticky', top: 100 }} className="blog-sidebar">
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--fg3)', marginBottom: 16 }}>Categories</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }} className="blog-cats">
            {BLOG_CATS.map(c => {
              const active = cat === c;
              const n = c === 'All posts' ? BLOG_POSTS.length : (counts[c] || 0);
              return (
                <button key={c} onClick={() => setCat(c)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, width: '100%',
                  fontFamily: 'Poppins, sans-serif', fontSize: 14.5, fontWeight: active ? 600 : 500, cursor: 'pointer',
                  padding: '11px 14px', borderRadius: 'var(--r-md)', border: '1px solid ' + (active ? 'transparent' : 'transparent'),
                  background: active ? 'var(--indigo-50)' : 'transparent', color: active ? 'var(--xo-indigo)' : 'var(--fg2)',
                  transition: 'all .15s', textAlign: 'left',
                }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--slate-50)'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
                  <span>{c}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11.5, color: active ? 'var(--xo-indigo)' : 'var(--slate-400)' }}>{n}</span>
                </button>
              );
            })}
          </div>
          <div style={{ marginTop: 28, padding: 'clamp(20px,2.4vw,26px)', borderRadius: 'var(--r-lg)', background: 'var(--navy-900)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 80% at 100% 0%, rgba(70,76,159,.4), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <i data-lucide="rss" style={{ width: 22, color: 'var(--tangerine-400)', marginBottom: 12 }}></i>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', marginBottom: 6 }}>Never miss a post</div>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,.6)', margin: '0 0 14px' }}>One engineering note a month. No spam.</p>
              <a href="#blog-news" onClick={e => { e.preventDefault(); const el = document.getElementById('blog-news'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Poppins, sans-serif', fontSize: 13.5, fontWeight: 600, color: 'var(--tangerine-400)', textDecoration: 'none' }}>Subscribe <i data-lucide="arrow-right" style={{ width: 14 }}></i></a>
            </div>
          </div>
        </aside>

        {/* posts */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, gap: 16, flexWrap: 'wrap' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(22px,2.6vw,30px)', letterSpacing: '-0.015em', color: 'var(--fg1)', margin: 0 }}>{cat}</h2>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, color: 'var(--fg3)' }}>{posts.length} article{posts.length === 1 ? '' : 's'}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }} className="blog-posts-grid">
            {posts.map((p, i) => <BlogCard key={p.title} {...p} wide={p.featured && cat === 'All posts'} />)}
          </div>
        </div>
      </div>
    </LightSection>
  );
}

function BlogCard({ cat, title, excerpt, read, date, img, wide }) {
  const [h, setH] = useBlogState(false);
  return (
    <a href="#" onClick={e => e.preventDefault()} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ gridColumn: wide ? 'span 2' : 'span 1', display: 'flex', flexDirection: wide ? 'row' : 'column', textDecoration: 'none', overflow: 'hidden', borderRadius: 'var(--r-lg)', background: 'var(--surface)', border: '1px solid ' + (h ? 'var(--border-strong)' : 'var(--border)'), boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-xs)', transform: h ? 'translateY(-3px)' : 'none', transition: 'all .22s cubic-bezier(.4,0,.2,1)' }}>
      <div style={{ position: 'relative', overflow: 'hidden', flexShrink: 0, width: wide ? '46%' : '100%', height: wide ? 'auto' : 190, minHeight: wide ? 240 : 0, background: '#080C1E' }} className="blog-card-media">
        <img src={img} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1)', transition: 'transform .5s cubic-bezier(.16,1,.3,1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg, rgba(8,12,30,0.1), rgba(8,12,30,0.45))', pointerEvents: 'none' }} />
        <span style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.08em', color: '#fff', background: 'rgba(8,12,30,0.55)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,.18)', borderRadius: 'var(--r-pill)', padding: '5px 11px' }}>{cat}</span>
      </div>
      <div style={{ padding: wide ? 'clamp(26px,3vw,40px)' : '22px 22px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontFamily: 'Poppins, sans-serif', fontSize: 12.5, color: 'var(--fg3)' }}>
          <span>{date}</span><span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--slate-300)' }} /><span>{read} read</span>
        </div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: wide ? 'clamp(22px,2.4vw,28px)' : 18.5, lineHeight: 1.25, letterSpacing: '-0.01em', color: 'var(--fg1)', margin: '0 0 10px' }}>{title}</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: wide ? 15.5 : 14, lineHeight: 1.6, color: 'var(--fg2)', margin: 0, display: '-webkit-box', WebkitLineClamp: wide ? 3 : 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{excerpt}</p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 16, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, color: h ? 'var(--tangerine-600)' : 'var(--accent)', transition: 'color .15s' }}>Read article <i data-lucide="arrow-right" style={{ width: 15 }}></i></span>
      </div>
    </a>
  );
}

Object.assign(window, { BlogHeader, BlogBody });
