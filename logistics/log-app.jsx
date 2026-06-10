// Xorora — Logistics Industry Page · app shell
const { useEffect: useLogAppFx } = React;

function LogisticsApp() {
  const toForm = () => {
    const el = document.getElementById('log-form');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  };
  useLogAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toForm} />
      <LogHeader onCTA={toForm} />
      <LogChallenges />
      <LogIndustries />
      <LogFeatures />
      <LogProcess />
      <LogFAQ />
      <LogFinalCTA onCTA={toForm} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LogisticsApp />);
