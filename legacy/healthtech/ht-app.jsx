// Xorora — Health Tech Industry Page · app shell
const { useEffect: useHtAppFx } = React;

function HealthTechApp() {
  const toForm = () => {
    const el = document.getElementById('ht-form');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  };
  useHtAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toForm} />
      <HtHeader onCTA={toForm} />
      <HtComplexities />
      <HtExpertise />
      <HtAISolutions />
      <HtCertifications />
      <HtProcess />
      <HtFAQ />
      <HtCTA onCTA={toForm} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HealthTechApp />);
