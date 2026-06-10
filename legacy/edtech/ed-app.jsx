// Xorora — EdTech Industry Page · app shell
const { useRef: useEdAppRef, useEffect: useEdAppFx } = React;

function EdtechApp() {
  const contactRef = useEdAppRef(null);
  const toContact = () => {
    const el = document.getElementById('ed-contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
  };
  useEdAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav onLetsTalk={toContact} />
      <EdHeader onCTA={toContact} />
      <EdServices />
      <EdCapabilities />
      <EdBandCTA onCTA={toContact} />
      <EdWhatYouGet />
      <EdFAQ />
      <EdContact innerRef={contactRef} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<EdtechApp />);
