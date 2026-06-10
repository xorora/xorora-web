// Xorora Case Study — app shell
const { useRef: useAppCsRef, useEffect: useAppCsEffect } = React;

function CaseStudyApp() {
  const contactRef = useAppCsRef(null);
  const toContact = () => {
    const el = contactRef.current;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
  };
  useAppCsEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--bg)' }}>
      <MegaNav onLetsTalk={toContact} />
      <Header onCTA={toContact} />
      <KeyMetrics />
      <ClientOverview />
      <ChallengeSolution />
      <Architecture />
      <RelatedServices />
      <TechStack />
      <BandCTA onCTA={toContact} />
      <MeasurableOutcomes />
      <Results />
      <ContactCTA innerRef={contactRef} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CaseStudyApp />);
