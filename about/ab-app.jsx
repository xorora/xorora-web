// Xorora — About Us · app shell
const { useState: useAbAppState, useEffect: useAbAppFx } = React;

function AboutApp() {
  const [talkOpen, setTalkOpen] = useAbAppState(false);
  const onTalk = () => setTalkOpen(true);
  useAbAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav />
      <AbHero onTalk={onTalk} />
      <AbMindset />
      <AbImpact />
      <AbCases onTalk={onTalk} />
      <AbDifferent />
      <AbFAQ onTalk={onTalk} />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      {window.LetsTalkModal && <LetsTalkModal open={talkOpen} onClose={() => setTalkOpen(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AboutApp />);
