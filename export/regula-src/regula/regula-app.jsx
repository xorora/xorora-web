// Regula Case Study — app shell
const { useRef: useRegAppRef, useEffect: useRegAppFx } = React;

function RegulaApp() {
  const contactRef = useRegAppRef(null);
  const toContact = () => {
    const el = contactRef.current;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
  };
  useRegAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--bg)' }}>
      <RegNav onCTA={toContact} />
      <RegHeader onCTA={toContact} />
      <RegKeyMetrics />
      <RegServices />
      <RegMarketContext />
      <RegOverview />
      <RegChallenge />
      <RegSolution />
      <RegArchitecture />
      <RegTechStack />
      <RegOutcomes />
      <RegResult />
      <RegContactCTA innerRef={contactRef} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RegulaApp />);
