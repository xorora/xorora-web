// Xorora — Real Estate Industry Page · app shell
const { useEffect: useReAppFx } = React;

function RealEstateApp() {
  const toForm = () => {
    const el = document.getElementById('re-form');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  };
  useReAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toForm} />
      <ReHeader onCTA={toForm} />
      <RePain />
      <ReServices />
      <ReWhy />
      <ReAI />
      <ReProcess />
      <ReFAQ />
      <ReCTA onCTA={toForm} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RealEstateApp />);
