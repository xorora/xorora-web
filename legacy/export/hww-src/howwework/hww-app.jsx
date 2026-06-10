// Xorora — How We Work · app shell
const { useState: useHwAppState, useEffect: useHwAppFx } = React;

function HowWeWorkApp() {
  const [talkOpen, setTalkOpen] = useHwAppState(false);
  const onTalk = () => setTalkOpen(true);
  useHwAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav />
      <HwHero onTalk={onTalk} />
      <HwReasons />
      <HwProcess />
      <HwCases />
      <HwContact onTalk={onTalk} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      {window.LetsTalkModal && <LetsTalkModal open={talkOpen} onClose={() => setTalkOpen(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HowWeWorkApp />);
