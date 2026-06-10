// Xorora — Fintech Industry Page · app shell
const { useEffect: useFinAppFx } = React;

function FintechApp() {
  const toForm = () => {
    const el = document.getElementById('fin-form');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  };
  useFinAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toForm} />
      <FinHeader onCTA={toForm} />
      <FinPain />
      <FinServices />
      <FinWhy />
      <FinFeaturedCase />
      <FinAI />
      <FinProcess />
      <FinFAQ />
      <FinCTA onCTA={toForm} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FintechApp />);
