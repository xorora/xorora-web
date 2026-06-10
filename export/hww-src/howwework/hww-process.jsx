// Xorora — How We Work · engagement toggle + 4-step workflow
const { useState: useHwPState } = React;

const HW_FLOWS = {
  staff: [
    { n: '01', img: window.__resources.stepDiscovery, title: 'Evaluation', accent: 'of an existing product', body: 'We discuss your idea, vision, and business targets. That sets scope and requirements. In staff augmentation, we adjust to your existing team.',
      items: [['file-lock-2', 'Confidentiality (NDA), if required', 'You retain full intellectual property rights, and any details can be covered by an NDA.'], ['users', 'Building the team', 'After the initial discussion you receive CVs of the proposed members. We can arrange technical interviews with individual candidates.']],
      meta: [['Our role', 'Tell us about your requirements and needs'], ['Your role', 'Facilitate discussions, answer questions, and conduct code reviews'], ['Duration', '2 to 5 days'], ['Outcome', 'The agreement is signed and you get exactly the team you need']] },
    { n: '02', img: window.__resources.stepTeam, title: 'Onboarding', accent: 'and integration', body: 'Your new engineers integrate into your workflow, tools, and rituals. They ramp on the codebase fast and start contributing within the first sprint.',
      items: [['plug', 'Access and tooling', 'We set up access, environments, and accounts so the team is productive from day one.'], ['git-merge', 'Codebase ramp-up', 'Engineers study the architecture, conventions, and backlog, pairing with your team where useful.']],
      meta: [['Our role', 'Provide senior engineers and ramp them quickly'], ['Your role', 'Grant access and share context and conventions'], ['Duration', '3 to 7 days'], ['Outcome', 'Engineers embedded and shipping inside your process']] },
    { n: '03', img: window.__resources.stepDev, title: 'Delivery', accent: 'inside your process', body: 'Our engineers work as part of your team, in your sprints, under your direction. You keep full control of priorities while we add senior capacity.',
      items: [['activity', 'Your cadence', 'We follow your sprints, standups, and review process, reporting exactly how you prefer.'], ['shield-check', 'Quality built in', 'Tests, code review, and clean delivery come standard, never as an afterthought.']],
      meta: [['Our role', 'Deliver high-quality work within your team'], ['Your role', 'Own the roadmap and prioritize the backlog'], ['Duration', 'Ongoing, flexible'], ['Outcome', 'More senior throughput without the hiring overhead']] },
    { n: '04', img: window.__resources.stepLaunch, title: 'Scale', accent: 'up or down', body: 'As your needs change, we flex the team. Add specialists for a push or scale back between phases, with no long recruitment cycles.',
      items: [['trending-up', 'Elastic capacity', 'Ramp the team to match your roadmap, sprint by sprint.'], ['handshake', 'Long-term partnership', 'Low turnover means the people who learned your product stay on it.']],
      meta: [['Our role', 'Flex capacity to match your needs'], ['Your role', 'Signal upcoming changes in scope'], ['Duration', 'Ongoing, flexible'], ['Outcome', 'A team that scales with your ambition']] },
  ],
  dedicated: [
    { n: '01', img: window.__resources.stepDiscovery, title: 'Evaluation', accent: 'and discovery', body: 'We discuss your idea, vision, and business targets you want to achieve. This helps us set a clear scope, requirements, and a costed roadmap.',
      items: [['file-lock-2', 'Confidentiality (NDA), if required', 'You retain full intellectual property rights, and any details can be covered by an NDA.'], ['compass', 'Shaping the solution', 'We translate goals into architecture, scope, and a delivery plan before any code is written.']],
      meta: [['Our role', 'Analyze needs and shape the solution'], ['Your role', 'Share your idea, vision, and business targets'], ['Duration', '2 to 5 days'], ['Outcome', 'A clear, costed roadmap to production']] },
    { n: '02', img: window.__resources.stepTeam, title: 'Team assembly', accent: 'and project kick-off', body: 'We assemble a team based on your requirements. You interview and pick the talents you want on your dedicated development team.',
      items: [['rocket', 'Introductory workshops', 'Clients get to know the development team, one of the key benefits of a dedicated team over staff augmentation.'], ['clipboard-check', 'Kick-off outcomes', 'You meet the team and we align expectations so everyone is on the same page from the start.']],
      meta: [['Our role', 'Propose patterns, implement tooling, and run workshops'], ['Your role', 'Give feedback, make decisions, keep an open mind'], ['Duration', '7 to 14 days'], ['Outcome', 'Shared understanding of objectives, milestones, and risks']] },
    { n: '03', img: window.__resources.stepDev, title: 'Development', accent: 'phase', body: 'We follow Agile and Lean principles, dividing work into two-week sprints that each deliver usable parts of the system across web and mobile.',
      items: [['repeat', 'Two-week sprints', 'Plan, define, develop, test, review, and accept, then increment. You verify and adjust throughout.'], ['layers', 'Full-stack delivery', 'Design, frontend, backend, DevOps, and QA, working as one coordinated team.']],
      meta: [['Our role', 'Manage the process, lead meetings, deliver increments'], ['Your role', 'Take part in meetings and follow through on actions'], ['Duration', 'Depends on scope'], ['Outcome', 'Deliverables that meet your expectations']] },
    { n: '04', img: window.__resources.stepLaunch, title: 'Software', accent: 'project launch', body: 'After launching the MVP we continue development, maintenance, and support, making room for additional features after customer feedback.',
      items: [['rocket', 'Launch and beyond', 'For a top-notch operation, we keep your software well-maintained and updated.'], ['message-circle', 'Feedback loops', 'We fold in real customer feedback to prioritize what gets built next.']],
      meta: [['Our role', 'Build beautiful, reliable software'], ['Your role', 'Provide regular feedback, stay in touch with the team'], ['Duration', 'Depends on scope'], ['Outcome', 'A product highly desirable to your end users']] },
  ],
};

function HwProcess() {
  const [mode, setMode] = useHwPState('dedicated');
  const steps = HW_FLOWS[mode];
  const accent = mode === 'staff' ? 'var(--tangerine-500)' : 'var(--xo-indigo)';
  return (
    <section id="hw-process" style={{ background: 'var(--surface)', padding: 'clamp(64px,8vw,104px) 32px clamp(40px,5vw,64px)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <p style={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(20px,2.4vw,28px)', fontWeight: 600, color: 'var(--fg1)', margin: '0 0 28px', letterSpacing: '-0.01em' }}>Choose the one that interests you</p>
        {/* segmented toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, position: 'relative', background: 'var(--navy-900)', borderRadius: 'var(--r-pill)', padding: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
            <HwToggleBtn active={mode === 'staff'} onClick={() => setMode('staff')}>Staff Augmentation</HwToggleBtn>
            <span style={{ width: 34, height: 34, flexShrink: 0, borderRadius: '50%', border: '1px solid rgba(255,255,255,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600, color: 'var(--tangerine-400)' }}>or</span>
            <HwToggleBtn active={mode === 'dedicated'} onClick={() => setMode('dedicated')}>Dedicated Development Teams</HwToggleBtn>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1180, margin: '0 auto', paddingTop: 'clamp(40px,5vw,64px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,72px)' }}>
        {steps.map((s, i) => <HwStep key={mode + i} step={s} flip={i % 2 === 1} accent={accent} />)}
      </div>
    </section>
  );
}

function HwToggleBtn({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(14px,1.5vw,16px)', fontWeight: 700, cursor: 'pointer',
      padding: '13px 22px', borderRadius: 'var(--r-pill)', border: 'none', transition: 'all .2s',
      background: active ? '#fff' : 'transparent', color: active ? 'var(--tangerine-600)' : 'rgba(255,255,255,.8)',
    }}>{children}</button>
  );
}

function HwStep({ step, flip, accent }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'center' }} className="hw-step-grid">
      <div style={{ order: flip ? 2 : 1 }}>
        <div style={{ position: 'relative', marginBottom: 16 }}>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(64px,8vw,104px)', lineHeight: 0.8, color: 'var(--slate-100)', letterSpacing: '-0.04em' }}>{step.n}</span>
          <div style={{ position: 'absolute', left: 4, bottom: 6 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.18em', color: 'var(--slate-400)', marginBottom: 4 }}>OUR WORKFLOW</div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(22px,2.6vw,32px)', letterSpacing: '-0.015em', color: 'var(--fg1)', margin: 0 }}>
              <span style={{ color: accent }}>{step.title}</span> {step.accent}
            </h3>
          </div>
        </div>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, lineHeight: 1.65, color: 'var(--fg2)', margin: '0 0 24px', maxWidth: 480 }}>{step.body}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {step.items.map(([ic, t, b]) => (
            <div key={t} style={{ display: 'flex', gap: 14 }}>
              <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 'var(--r-md)', background: 'var(--indigo-50)', color: 'var(--xo-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i data-lucide={ic} style={{ width: 19 }}></i>
              </span>
              <div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15.5, color: 'var(--fg1)', marginBottom: 4 }}>{t}</div>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.55, color: 'var(--fg2)', margin: 0, maxWidth: 440 }}>{b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3D media panel + meta */}
      <div style={{ order: flip ? 1 : 2 }}>
        <HwStepVisual n={step.n} img={step.img} title={step.title + ' ' + step.accent} accent={accent} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 24px', background: 'var(--slate-50)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 'clamp(20px,2.4vw,28px)', marginTop: 16 }}>
          {step.meta.map(([k, v]) => (
            <div key={k}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, letterSpacing: '.12em', textTransform: 'uppercase', color: accent, marginBottom: 6 }}>{k}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, lineHeight: 1.45, color: 'var(--fg1)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Framed stock-photo panel per step — adds a human, behind-the-scenes feel.
function HwStepVisual({ n, img, title, accent }) {
  const [h, setH] = useHwPState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-xl)', background: '#080C1E', border: '1px solid rgba(255,255,255,.1)', height: 320, boxShadow: h ? '0 34px 78px -34px rgba(8,12,30,.65)' : '0 20px 52px -34px rgba(8,12,30,.5)', transform: h ? 'translateY(-3px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s' }}>
      <img src={img} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1)', transition: 'transform .5s cubic-bezier(.16,1,.3,1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg, rgba(8,12,30,0.32) 0%, rgba(8,12,30,0.12) 42%, rgba(8,12,30,0.74) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 60% at 80% 8%, rgba(91,141,239,0.28), transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--indigo-400), var(--tangerine-500))' }} />
      <span style={{ position: 'absolute', top: 16, right: 22, fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 76, lineHeight: 1, color: 'rgba(255,255,255,.12)', letterSpacing: '-0.04em' }}>{n}</span>
    </div>
  );
}

window.HwProcess = HwProcess;
