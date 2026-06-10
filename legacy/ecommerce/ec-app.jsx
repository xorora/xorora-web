// Xorora — E-commerce Industry Page · app shell
const { useEffect: useEcAppFx } = React;

function EcommerceApp() {
  const toForm = () => {
    const el = document.getElementById('ec-form');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  };
  useEcAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toForm} />
      <EcHeader onCTA={toForm} />
      <EcPain />
      <EcServices />
      <EcWhy />
      <EcAI />
      <EcProcess />
      <EcFAQ />
      <EcCTA onCTA={toForm} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<EcommerceApp />);
