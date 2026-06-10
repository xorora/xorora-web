// Xorora Homepage V2 — app shell
const { useState: useV2AppState, useEffect: useV2AppFx } = React;

function HomepageV2App() {
  const [talkOpen, setTalkOpen] = useV2AppState(false);
  const onTalk = () => setTalkOpen(true);
  useV2AppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: '#02060F' }}>
      <MegaNav onLetsTalk={onTalk} />
      <V2Hero onTalk={onTalk} />
      <V2Statement />
      <V2Services />
      <V2Industries />
      <V2Cases onTalk={onTalk} />
      <V2Deliver />
      <V2Engagement onTalk={onTalk} />
      <V2Contact />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      {window.LetsTalkModal && <LetsTalkModal open={talkOpen} onClose={() => setTalkOpen(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HomepageV2App />);
