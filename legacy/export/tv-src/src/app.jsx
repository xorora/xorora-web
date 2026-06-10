// Xorora homepage — app shell
const { useState: useAppState, useEffect: useAppEffect } = React;

function App() {
  const [scrolled, setScrolled] = useAppState(false);

  function handleNav(target) {
    if (target === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (target === 'contact') {
      const el = document.getElementById('contact');
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 30;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      return;
    }
  }

  useAppEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useAppEffect(() => { if (window.lucide) lucide.createIcons(); });

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100%' }}>
      <NavBar onNav={handleNav} scrolled={scrolled} />
      <main>
        <Hero onNav={handleNav} />
        <Services />
        <Stats onNav={handleNav} />
        <Stories />
        <Webinar onNav={handleNav} />
        <Recognition />
        <Partnerships />
        <Playbook />
        <Conversations />
        <div id="contact"><Contact onNav={handleNav} /></div>
        <Insights />
      </main>
      <FinalCTA onNav={handleNav} />
      <Footer onNav={handleNav} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
