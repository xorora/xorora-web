// Xorora — EdTech Industry Page · Services We Offer (rows) + Our Capabilities (cards)
const { useState: useEdMid } = React;

function EdServices() {
  const rows = [
    { icon: 'puzzle', title: 'Custom EdTech software development', body: 'As a full service education software company, we build solutions tailored to your learners, your content model, and your delivery goals. Architecture reflects your current scale and where you plan to be in three years, so you do not rebuild when you grow.' },
    { icon: 'graduation-cap', title: 'Learning management systems (LMS)', body: 'We build LMS platforms that make course management straightforward for administrators and frictionless for learners. Progress tracking, enrollment workflows, and reporting are built into the platform.' },
    { icon: 'monitor-play', title: 'E learning platform development', body: 'We develop complete e learning platforms with collaborative tools, interactive content delivery, and the infrastructure to handle large concurrent audiences. The focus is on keeping learners engaged from first login through completion.' },
    { icon: 'smartphone', title: 'Mobile learning applications', body: 'We build mobile learning apps for iOS and Android that give learners consistent access to content regardless of device or connectivity.' },
    { icon: 'briefcase', title: 'Corporate training platforms', body: 'We deliver training platforms for onboarding, compliance, and upskilling that connect to your HR systems and surface real data on learner progress. Training that is tracked and measurable is training that gets done.' },
    { icon: 'sparkles', title: 'AI powered learning solutions', body: 'We build AI features into learning platforms: adaptive learning paths, automated assessments, RAG based support chatbots, and recommendation engines that personalize every learner journey.' },
    { icon: 'layers', title: 'Legacy system modernization', body: 'We migrate outdated education platforms to modern, cloud native architectures. Data integrity, user continuity, and integration with your current toolstack are handled through the transition.' },
  ];
  return (
    <LightSection bg="var(--surface)">
      <SectionHead label="What we build" title="EdTech software development services we offer." style={{ marginBottom: 44 }} />
      <div>
        {rows.map((r, i) => <EdServiceRow key={r.title} {...r} first={i === 0} />)}
      </div>
    </LightSection>
  );
}

function EdServiceRow({ icon, title, body, first }) {
  const [h, setH] = useEdMid(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'grid', gridTemplateColumns: '54px 1.1fr 1.4fr', gap: 'clamp(16px,2.5vw,40px)', alignItems: 'start', padding: 'clamp(24px,2.6vw,30px) 8px', borderTop: first ? 'none' : '1px solid var(--border)', transition: 'background .18s', background: h ? 'var(--slate-50)' : 'transparent', borderRadius: 'var(--r-md)' }} className="ed-svc-row">
      <span style={{ width: 50, height: 50, flexShrink: 0, borderRadius: 'var(--r-md)', background: h ? 'var(--xo-indigo)' : 'var(--indigo-50)', color: h ? '#fff' : 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .18s' }}>
        <i data-lucide={icon} style={{ width: 24 }}></i>
      </span>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(18px,1.6vw,22px)', color: 'var(--fg1)', margin: 0, lineHeight: 1.25 }}>{title}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--fg2)', margin: 0 }}>{body}</p>
    </div>
  );
}

function EdCapabilities() {
  const caps = [
    { n: '01', title: 'Scalable learning platforms', body: 'We architect platforms with horizontal scaling, load balancing, and automated failover, built to handle peak enrollment traffic without performance degradation.' },
    { n: '02', title: 'Cloud native EdTech solutions', body: 'We build on AWS, Azure, and GCP using containerized microservices, CI and CD pipelines, and infrastructure as code for rapid, reliable updates.' },
    { n: '03', title: 'AI and personalization in education', body: 'We implement adaptive learning algorithms, LLM fine tuning, RAG pipelines, and recommendation engines using tools like LangChain and modern LLMs.' },
    { n: '04', title: 'Data analytics and learning insights', body: 'We build analytics pipelines and dashboards that turn raw engagement data into actionable insight: enrollment funnels, cohort analysis, and at risk learner identification.' },
    { n: '05', title: 'Product strategy and EdTech consulting', body: 'We assess your platform state, define a technical roadmap, and help prioritize features against market timing and resource constraints.' },
    { n: '06', title: 'AI enabled engineering delivery', body: 'AI agents complete multi step tasks across the development cycle, writing test suites, generating components, and producing pull requests while engineers review every output and own all architectural decisions.' },
  ];
  return (
    <DarkSection bloom="50% 4%">
      <SectionHead label="How we deliver" title="Our capabilities." onDark align="center" style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="ed-cap-grid">
        {caps.map(c => <EdCapCard key={c.n} {...c} />)}
      </div>
    </DarkSection>
  );
}

function EdCapCard({ n, title, body }) {
  const [h, setH] = useEdMid(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,.04)', border: `1px solid ${h ? 'rgba(120,150,240,.5)' : 'rgba(255,255,255,.12)'}`, borderRadius: 'var(--r-lg)', padding: 'clamp(26px,2.6vw,32px)', transition: 'border-color .2s, transform .2s', transform: h ? 'translateY(-3px)' : 'none' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--indigo-700))', opacity: h ? 1 : 0, transition: 'opacity .2s' }} />
      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 30, letterSpacing: '-0.02em', color: 'var(--indigo-300)', lineHeight: 1, marginBottom: 18 }}>{n}</div>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 18.5, color: '#fff', margin: '0 0 12px', lineHeight: 1.25 }}>{title}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.64)', margin: 0 }}>{body}</p>
    </div>
  );
}

Object.assign(window, { EdServices, EdCapabilities });
