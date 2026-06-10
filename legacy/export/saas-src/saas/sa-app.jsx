// Xorora — SaaS Industry Page · app shell
const { useEffect: useSaAppFx } = React;

function SaasApp() {
  const toForm = () => {
    const el = document.getElementById('sa-form');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  };
  useSaAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toForm} />
      <SaHeader onCTA={toForm} />
      <SaPain />
      <SaServices />
      <SaWhy />
      <SaFeaturedCases />
      <SaProcess />
      <SaFAQ />
      <SaCTA onCTA={toForm} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SaasApp />);
