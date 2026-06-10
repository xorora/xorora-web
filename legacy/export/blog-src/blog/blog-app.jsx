// Xorora — Blog · app shell
const { useState: useBlogAppState, useEffect: useBlogAppFx } = React;

function BlogApp() {
  const [talkOpen, setTalkOpen] = useBlogAppState(false);
  useBlogAppFx(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={{ background: 'var(--surface)' }}>
      <MegaNav />
      <BlogHeader />
      <BlogBody />
      <BlogNewsletter />
      <BlogContact />
      <Footer onNav={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      {window.LetsTalkModal && <LetsTalkModal open={talkOpen} onClose={() => setTalkOpen(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BlogApp />);
