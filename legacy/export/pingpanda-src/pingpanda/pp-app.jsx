// PingPanda Case Study — app shell
const { useRef: usePpAppRef, useEffect: usePpAppFx } = React;

function PingPandaApp() {
  const contactRef = usePpAppRef(null);
  const toContact = () => {
    const el = contactRef.current;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
  };
  usePpAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--bg)' }}>
      <PpNav onCTA={toContact} />
      <PpHeader onCTA={toContact} />
      <PpKeyMetrics />
      <PpServices />
      <PpOverview />
      <PpChallenge />
      <PpSolution />
      <PpArchitecture />
      <PpTechStack />
      <PpOutcomes />
      <PpResult />
      <PpContactCTA innerRef={contactRef} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PingPandaApp />);
