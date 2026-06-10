// Xorora — Startups Industry Page · app shell
const { useEffect: useStAppFx } = React;

function StartupsApp() {
  const toForm = () => {
    const el = document.getElementById('st-form');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  };
  useStAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toForm} />
      <StHeader onCTA={toForm} />
      <StPain />
      <StServices />
      <StWhy />
      <StAI />
      <StProcess />
      <StFAQ />
      <StCTA onCTA={toForm} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<StartupsApp />);
