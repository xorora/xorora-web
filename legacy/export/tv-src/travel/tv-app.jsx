// Xorora — Travel & Hospitality Industry Page · app shell
const { useEffect: useTvAppFx } = React;

function TravelApp() {
  const toForm = () => {
    const el = document.getElementById('tv-form');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  };
  useTvAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toForm} />
      <TvHeader onCTA={toForm} />
      <TvPain />
      <TvClients />
      <TvServices />
      <TvWhy />
      <TvAI />
      <TvProcess />
      <TvFAQ />
      <TvCTA onCTA={toForm} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TravelApp />);
