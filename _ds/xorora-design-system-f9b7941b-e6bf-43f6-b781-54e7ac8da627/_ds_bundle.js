/* @ds-bundle: {"format":3,"namespace":"XororaDesignSystem_f9b794","components":[],"sourceHashes":{"ui_kits/social/App.jsx":"7db791217295","ui_kits/social/Templates.jsx":"4087ae1a9144","ui_kits/website/App.jsx":"a2f7e04fef5b","ui_kits/website/Footer.jsx":"4ad58d404886","ui_kits/website/Nav.jsx":"88a0f777dd64","ui_kits/website/Sections.jsx":"4518e8c6278b","ui_kits/website/primitives.jsx":"0108f4728c8b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.XororaDesignSystem_f9b794 = window.XororaDesignSystem_f9b794 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/social/App.jsx
try { (() => {
// Xorora social kit — gallery that scales each native-size template into a labeled card
function Frame({
  w,
  h,
  label,
  sub,
  children
}) {
  const display = 360;
  const scale = display / w;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: display,
      height: h * scale,
      position: 'relative',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: w,
      height: h,
      transform: `scale(${scale})`,
      transformOrigin: 'top left'
    }
  }, children)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--fg1)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'JetBrains Mono,monospace',
      fontSize: 12,
      color: 'var(--fg3)',
      marginTop: 2
    }
  }, sub)));
}
function SocialApp() {
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg)',
      minHeight: '100%',
      padding: '56px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--tangerine-500)'
    }
  }, "Social Kit"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 38,
      color: 'var(--fg1)',
      margin: '10px 0 8px',
      letterSpacing: '-0.01em'
    }
  }, "Ready-to-post templates"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontSize: 16,
      color: 'var(--fg2)',
      margin: 0,
      maxWidth: 600
    }
  }, "On-brand layouts for the formats Xorora posts most. Each renders at true export size \u2014 duplicate a component and swap the copy.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    label: "Statement post",
    sub: "1080 \xD7 1080 \xB7 feed"
  }, /*#__PURE__*/React.createElement(SquareStatement, null)), /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    label: "Proof / stat post",
    sub: "1080 \xD7 1080 \xB7 feed"
  }, /*#__PURE__*/React.createElement(SquareStat, null)), /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1350,
    label: "Story / portrait",
    sub: "1080 \xD7 1350 \xB7 4:5"
  }, /*#__PURE__*/React.createElement(StoryPost, null)), /*#__PURE__*/React.createElement(Frame, {
    w: 1200,
    h: 628,
    label: "Announcement banner",
    sub: "1200 \xD7 628 \xB7 LinkedIn / OG"
  }, /*#__PURE__*/React.createElement(LandscapeBanner, null)))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(SocialApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Templates.jsx
try { (() => {
// Xorora — social media templates (native-size frames for export)
const {
  useState: useSocState
} = React;

// Navy atmosphere with off-center bloom + concentric waves (matches brand banner)
function SocAtmosphere({
  children,
  style,
  blob = '62% 14%'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      background: 'var(--navy-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `radial-gradient(110% 80% at ${blob}, rgba(91,141,239,0.45) 0%, rgba(39,85,195,0.16) 30%, rgba(1,12,40,0) 62%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-30%',
      left: '60%',
      width: '140%',
      height: '160%',
      transform: 'translateX(-50%)',
      borderRadius: '50%',
      opacity: 0.5,
      background: 'repeating-radial-gradient(circle at center, rgba(131,163,238,0.10) 0px, rgba(131,163,238,0.10) 1.5px, transparent 1.5px, transparent 64px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%'
    }
  }, children));
}
function Logo({
  h = 44,
  dark = true
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: `../../assets/logo-wordmark-${dark ? 'dark' : 'light'}-transparent.svg`,
    alt: "Xorora",
    style: {
      height: h,
      display: 'block'
    }
  });
}
function Eye({
  children,
  color = 'var(--tangerine-400)',
  size = 22
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 600,
      fontSize: size,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color
    }
  }, children);
}

// 1 — Square statement / quote post (1080×1080)
function SquareStatement() {
  return /*#__PURE__*/React.createElement(SocAtmosphere, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      boxSizing: 'border-box',
      padding: 90,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    h: 48
  }), /*#__PURE__*/React.createElement(Eye, {
    size: 20
  }, "Your AI Development Partner")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 800,
      fontSize: 108,
      lineHeight: 1.0,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: 0
    }
  }, "Engineered", /*#__PURE__*/React.createElement("br", null), "for your", /*#__PURE__*/React.createElement("br", null), "ambition."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 300,
      fontSize: 30,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,.72)',
      margin: '40px 0 0',
      maxWidth: 720
    }
  }, "From the first prototype to the system your business runs on.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      height: 4,
      width: 64,
      background: 'var(--tangerine-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono,monospace',
      fontSize: 22,
      color: 'rgba(255,255,255,.55)'
    }
  }, "xorora.ai"))));
}

// 2 — Square stat / proof post (1080×1080), light surface
function SquareStat() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--slate-50)',
      boxSizing: 'border-box',
      padding: 90,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 10,
      background: 'var(--xo-indigo)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    h: 48,
    dark: false
  }), /*#__PURE__*/React.createElement(Eye, {
    size: 20,
    color: "var(--xo-indigo)"
  }, "Selected Work")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 800,
      fontSize: 230,
      lineHeight: 0.9,
      letterSpacing: '-0.04em',
      color: 'var(--xo-indigo)'
    }
  }, "3.5\xD7"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1.1,
      color: 'var(--xo-ink)',
      margin: '24px 0 0',
      maxWidth: 760
    }
  }, "Median speed-up versus an in-house build.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: 4
    }
  }, [1, 0.82, 0.66, 0.5, 0.34].map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 5,
      width: 40 * w,
      background: 'var(--xo-indigo)',
      borderRadius: 1
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono,monospace',
      fontSize: 22,
      color: 'var(--fg3)'
    }
  }, "xorora.ai \xB7 case studies")));
}

// 3 — Landscape announcement banner (1200×628) — LinkedIn / OG image
function LandscapeBanner() {
  return /*#__PURE__*/React.createElement(SocAtmosphere, {
    blob: "78% 20%"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      boxSizing: 'border-box',
      padding: '64px 72px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    h: 42
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eye, {
    size: 18
  }, "New \xB7 AI Strategy Sprints"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 800,
      fontSize: 76,
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: '18px 0 0',
      maxWidth: 820
    }
  }, "Turn ambition into a costed roadmap in two weeks.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--tangerine-400)'
    }
  }, "Book a build review \u203A"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono,monospace',
      fontSize: 20,
      color: 'rgba(255,255,255,.5)'
    }
  }, "xorora.ai"))));
}

// 4 — Story / portrait post (1080×1350)
function StoryPost() {
  return /*#__PURE__*/React.createElement(SocAtmosphere, {
    blob: "50% 12%"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      boxSizing: 'border-box',
      padding: 90,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    h: 50
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eye, null, "What we build"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 800,
      fontSize: 96,
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: '28px 0 44px'
    }
  }, "AI that ships."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, ['Applied ML & LLMs', 'AI product engineering', 'Production & MLOps', 'Embedded teams'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 34,
      color: 'var(--tangerine-400)',
      fontFamily: 'Poppins,sans-serif'
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 500,
      fontSize: 38,
      color: '#fff'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.16)',
      paddingTop: 30,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 300,
      fontSize: 26,
      color: 'rgba(255,255,255,.7)'
    }
  }, "Engineered for your ambition."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono,monospace',
      fontSize: 22,
      color: 'rgba(255,255,255,.5)'
    }
  }, "xorora.ai"))));
}
Object.assign(window, {
  SocAtmosphere,
  SquareStatement,
  SquareStat,
  LandscapeBanner,
  StoryPost
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Templates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// Xorora marketing website — app shell
const {
  useState: useAppState,
  useEffect
} = React;
function App() {
  const [active, setActive] = useAppState('Platform');
  const [scrolled, setScrolled] = useAppState(false);
  const [contact, setContact] = useAppState(false);
  function handleNav(target) {
    if (target === 'contact') {
      setContact(true);
      return;
    }
    setActive(target);
    if (window.scrollTo) window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  useEffect(() => {
    const sc = document.getElementById('xo-scroll');
    const onScroll = () => setScrolled((sc ? sc.scrollTop : window.scrollY) > 40);
    const node = sc || window;
    node.addEventListener('scroll', onScroll);
    return () => node.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: active,
    onNav: handleNav,
    scrolled: scrolled
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: handleNav
  }), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Metrics, null), /*#__PURE__*/React.createElement(Showcase, null), /*#__PURE__*/React.createElement(CTA, {
    onNav: handleNav
  })), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ContactModal, {
    open: contact,
    onClose: () => setContact(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Xorora website — footer + contact modal
function Footer() {
  const cols = [{
    h: 'Platform',
    items: ['Applied ML', 'Product engineering', 'MLOps', 'Strategy sprints']
  }, {
    h: 'Company',
    items: ['About', 'Work', 'Careers', 'Contact']
  }, {
    h: 'Resources',
    items: ['Engineering blog', 'Case studies', 'Security', 'Docs']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-950)',
      borderTop: '1px solid rgba(255,255,255,.07)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '64px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.6fr repeat(3,1fr)',
      gap: 40
    },
    className: "xo-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    height: 24,
    dark: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.55)',
      maxWidth: 260,
      margin: '18px 0 0'
    }
  }, "Engineered for your ambition. Your AI development partner, from prototype to production.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 14,
      color: 'rgba(255,255,255,.72)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '0 32px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid rgba(255,255,255,.07)',
      paddingTop: 24,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 12,
      color: 'rgba(255,255,255,.4)'
    }
  }, "\xA9 2026 Xorora \xB7 All rights reserved"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, ['globe', 'mail', 'rss'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    style: {
      color: 'rgba(255,255,255,.55)',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s,
    style: {
      width: 18
    }
  }))))));
}
function ContactModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(2,6,15,0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(480px,100%)',
      background: 'var(--surface)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--xo-indigo)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--indigo-50)',
      color: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 28
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--fg1)',
      margin: '0 0 8px'
    }
  }, "Request received"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontSize: 15,
      color: 'var(--fg2)',
      margin: '0 0 22px'
    }
  }, "We'll reach out within one business day to schedule your build review."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Close")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 10
    }
  }, "Start a project"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--fg1)',
      margin: '0 0 22px',
      letterSpacing: '-0.01em'
    }
  }, "Book a build review"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    placeholder: "Jordan Reyes"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "What are you building?",
    placeholder: "A short sentence about your ambition\u2026",
    textarea: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%',
      justifyContent: 'center'
    },
    onClick: () => setSent(true)
  }, "Request review ", /*#__PURE__*/React.createElement(Chevron, {
    size: 16
  })))))));
}
function Field({
  label,
  placeholder,
  textarea
}) {
  const [focus, setFocus] = React.useState(false);
  const common = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 15,
    padding: '11px 14px',
    borderRadius: 'var(--r-md)',
    border: `1px solid ${focus ? 'var(--tangerine-500)' : 'var(--border-strong)'}`,
    boxShadow: focus ? 'var(--shadow-focus)' : 'none',
    outline: 'none',
    color: 'var(--fg1)',
    width: '100%',
    boxSizing: 'border-box',
    resize: 'none',
    background: 'var(--surface)'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--fg2)'
    }
  }, label), textarea ? /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: common
  }) : /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: common
  }));
}
Object.assign(window, {
  Footer,
  ContactModal,
  Field
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Xorora website — top navigation bar
const {
  useState: useNavState
} = React;
function NavBar({
  active = 'Platform',
  onNav,
  scrolled
}) {
  const [menuOpen, setMenuOpen] = useNavState(false);
  const links = ['Platform', 'Solutions', 'Work', 'Company'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(2,6,15,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      transition: 'all .25s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '18px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav && onNav('Platform'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    height: 24,
    dark: true
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30,
      marginLeft: 8
    },
    className: "xo-desktop-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNav && onNav(l),
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 14.5,
      fontWeight: 500,
      color: active === l ? '#fff' : 'rgba(255,255,255,.62)',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color .15s'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'rgba(255,255,255,.7)',
      display: 'flex',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 19
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "sm",
    onClick: () => onNav && onNav('contact')
  }, "Start a project ", /*#__PURE__*/React.createElement(Chevron, null)))));
}
window.NavBar = NavBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Xorora website — page sections (Hero, Trust, Features, Showcase, Metrics, CTA)

// Navy atmosphere background: off-center light bloom + faint concentric waves
function Atmosphere({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--navy-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 62% 8%, rgba(91,141,239,0.35) 0%, rgba(39,85,195,0.12) 28%, rgba(1,12,40,0) 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-40%',
      left: '50%',
      width: 1400,
      height: 1400,
      transform: 'translateX(-30%)',
      borderRadius: '50%',
      pointerEvents: 'none',
      opacity: 0.5,
      background: 'repeating-radial-gradient(circle at center, rgba(131,163,238,0.08) 0px, rgba(131,163,238,0.08) 1px, transparent 1px, transparent 46px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement(Atmosphere, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '120px 32px 130px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--tangerine-400)',
      marginBottom: 22
    }
  }, "Your AI Development Partner"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 800,
      fontSize: 'clamp(40px,6vw,72px)',
      lineHeight: 1.02,
      letterSpacing: '-0.015em',
      color: '#fff',
      margin: '0 0 24px',
      textWrap: 'balance'
    }
  }, "Engineered for", /*#__PURE__*/React.createElement("br", null), "your ambition."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.72)',
      maxWidth: 600,
      margin: '0 auto 38px'
    }
  }, "We design, build, and ship production AI \u2014 partnering with your team from the first prototype to the system your business runs on."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav && onNav('contact')
  }, "Start a project ", /*#__PURE__*/React.createElement(Chevron, {
    size: 16
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => onNav && onNav('Work')
  }, "See our work"))));
}
function TrustBar() {
  const names = ['NORTHWIND', 'AXIOM', 'HELIOGEN', 'QUANTLY', 'VERTEX', 'LUMEN'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-950)',
      borderTop: '1px solid rgba(255,255,255,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '28px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11.5,
      letterSpacing: '.12em',
      color: 'rgba(255,255,255,.4)',
      marginRight: 8
    }
  }, "TRUSTED BY ENGINEERING TEAMS AT"), names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '.05em',
      color: 'rgba(255,255,255,.55)'
    }
  }, n))));
}
function FeatureCard({
  icon,
  title,
  body,
  featured
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-lg)',
      padding: 28,
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'all .2s cubic-bezier(.4,0,.2,1)'
    }
  }, featured && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: 'var(--xo-indigo)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--r-md)',
      background: 'var(--indigo-50)',
      color: 'var(--xo-indigo)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 23
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--fg1)',
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--fg2)',
      margin: 0
    }
  }, body));
}
function Features() {
  const items = [{
    icon: 'cpu',
    title: 'Applied ML & LLMs',
    body: 'Fine-tuning, RAG, agents, and evaluation harnesses — engineered for your data and your domain.',
    featured: true
  }, {
    icon: 'workflow',
    title: 'AI product engineering',
    body: 'Full-stack delivery: model, API, and the interface your users actually touch.'
  }, {
    icon: 'shield-check',
    title: 'Production & MLOps',
    body: 'Monitoring, guardrails, and CI for models so what you ship keeps working.'
  }, {
    icon: 'compass',
    title: 'AI strategy sprints',
    body: 'Two-week build reviews that turn an ambition into a costed, de-risked roadmap.'
  }, {
    icon: 'database',
    title: 'Data foundations',
    body: 'Pipelines and feature stores that make your models trustworthy and fast.'
  }, {
    icon: 'users',
    title: 'Embedded teams',
    body: 'Senior engineers who code alongside yours — not a deck, a delivery partner.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "What we build"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(30px,4vw,44px)',
      lineHeight: 1.1,
      color: 'var(--fg1)',
      margin: '0 0 14px',
      letterSpacing: '-0.01em'
    }
  }, "AI that ships \u2014 not slideware."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--fg2)',
      margin: 0
    }
  }, "One partner across the whole arc: strategy, data, modeling, product, and the operations that keep it running.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement(FeatureCard, _extends({
    key: it.title
  }, it))))));
}
function Metrics() {
  const stats = [{
    n: '40+',
    l: 'AI systems shipped to production'
  }, {
    n: '3.5×',
    l: 'median speed-up vs. in-house build'
  }, {
    n: '12 yr',
    l: 'average engineer experience'
  }, {
    n: '99.9%',
    l: 'uptime across deployed models'
  }];
  return /*#__PURE__*/React.createElement(Atmosphere, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '80px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 32
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 800,
      fontSize: 52,
      color: '#fff',
      letterSpacing: '-0.02em'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 14.5,
      color: 'rgba(255,255,255,.6)',
      marginTop: 6
    }
  }, s.l)))));
}
function Showcase() {
  const work = [{
    tag: 'FINTECH',
    title: 'Real-time fraud scoring for a payments network',
    metric: '−38% fraud loss',
    color: 'linear-gradient(135deg,#1A1C3A,#3A3F86)'
  }, {
    tag: 'HEALTHCARE',
    title: 'Clinical document copilot for 4,000 providers',
    metric: '6 hrs saved / clinician / wk',
    color: 'linear-gradient(135deg,#02060F,#2755c3)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface)',
      padding: '96px 32px',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 44,
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(30px,4vw,44px)',
      color: 'var(--fg1)',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, "Outcomes, engineered.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "View all work ", /*#__PURE__*/React.createElement(Chevron, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
      gap: 24
    }
  }, work.map(w => /*#__PURE__*/React.createElement(CaseCard, _extends({
    key: w.title
  }, w))))));
}
function CaseCard({
  tag,
  title,
  metric,
  color
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      cursor: 'pointer',
      border: '1px solid var(--border)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transition: 'all .25s',
      transform: hover ? 'translateY(-4px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: color,
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      right: 22,
      opacity: .9
    }
  }, /*#__PURE__*/React.createElement(PyramidBars, {
    color: "rgba(255,255,255,.55)",
    size: 40
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11,
      letterSpacing: '.14em',
      color: 'rgba(255,255,255,.8)'
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--fg1)',
      margin: '0 0 14px',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--accent)'
    }
  }, metric), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement(Chevron, {
    size: 16
  })))));
}
function CTA({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg)',
      padding: '0 32px 96px'
    }
  }, /*#__PURE__*/React.createElement(Atmosphere, {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      borderRadius: 'var(--r-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '72px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,48px)',
      color: '#fff',
      margin: '0 0 16px',
      letterSpacing: '-0.015em',
      textWrap: 'balance'
    }
  }, "Let's engineer what's next."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 18,
      color: 'rgba(255,255,255,.7)',
      maxWidth: 520,
      margin: '0 auto 32px'
    }
  }, "Book a build review. We'll pressure-test your idea and map the fastest path to production."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav && onNav('contact')
  }, "Book a build review ", /*#__PURE__*/React.createElement(Chevron, {
    size: 16
  })))));
}
Object.assign(window, {
  Atmosphere,
  Hero,
  TrustBar,
  Features,
  Metrics,
  Showcase,
  CaseCard,
  FeatureCard,
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/primitives.jsx
try { (() => {
// Xorora website UI kit — shared primitives
const {
  useState
} = React;

// Official XORORA wordmark — the supplied brand SVG (mark + lettering)
function Wordmark({
  height = 26,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: dark ? '../../assets/logo-wordmark-dark-transparent.svg' : '../../assets/logo-wordmark-light-transparent.svg',
    alt: "Xorora",
    style: {
      height: height,
      display: 'block'
    }
  });
}
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--tangerine-500)',
      ...style
    }
  }, children);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const sizes = {
    md: {
      padding: '12px 24px',
      fontSize: 15
    },
    lg: {
      padding: '15px 30px',
      fontSize: 16
    },
    sm: {
      padding: '8px 16px',
      fontSize: 14
    }
  };
  const base = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    borderRadius: 'var(--r-md)',
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all .18s cubic-bezier(.4,0,.2,1)',
    transform: press ? 'scale(.98)' : 'none',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover ? 'var(--indigo-600)' : 'var(--xo-indigo)',
      color: '#fff',
      boxShadow: hover ? 'var(--glow-indigo)' : 'none'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--fg1)',
      borderColor: hover ? 'var(--border-strong)' : 'var(--border)',
      background: hover ? 'var(--surface-2)' : 'transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)'
    },
    onDark: {
      background: hover ? '#fff' : 'rgba(255,255,255,.10)',
      color: hover ? 'var(--xo-ink)' : '#fff',
      border: '1px solid rgba(255,255,255,.25)',
      backdropFilter: 'blur(6px)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, children);
}
function Chevron({
  size = 14,
  color = 'currentColor'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: size,
      color,
      lineHeight: 1
    }
  }, "\u203A");
}

// thin decorative "pyramid bars" — the brand's signal-strength motif
function PyramidBars({
  color = 'var(--xo-indigo)',
  size = 48,
  style
}) {
  const rows = [0.18, 0.34, 0.5, 0.66, 0.82, 1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: size * 0.07,
      ...style
    }
  }, rows.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: size * w,
      height: Math.max(2, size * 0.055),
      background: color,
      borderRadius: 1
    }
  })));
}
Object.assign(window, {
  Wordmark,
  Eyebrow,
  Button,
  Chevron,
  PyramidBars
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/primitives.jsx", error: String((e && e.message) || e) }); }

})();
