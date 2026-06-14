export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          YouTube Thumbnail A/B Testing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing.<br />Start Testing Thumbnails.
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically rotate thumbnail variants on your YouTube videos and let real click-through data tell you which one wins. Built for creators and agencies serious about growth.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $12/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Connect YouTube", desc: "Link your channel via YouTube Data API in seconds." },
          { step: "2", title: "Upload Variants", desc: "Add 2–4 thumbnail variants per video to test." },
          { step: "3", title: "Track & Win", desc: "We rotate thumbnails and surface the highest CTR winner." }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
            <h3 className="text-white font-semibold mb-1">{title}</h3>
            <p className="text-sm text-[#8b949e]">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited A/B thumbnail tests",
              "Automatic thumbnail rotation",
              "Real-time CTR analytics dashboard",
              "Up to 50 videos tracked",
              "YouTube Data API integration",
              "Email winner alerts"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does thumbnail rotation work?",
              a: "Our background service uses the YouTube Data API to swap your video's thumbnail at set intervals. We track impressions and CTR for each variant and automatically promote the winner."
            },
            {
              q: "Will this violate YouTube's Terms of Service?",
              a: "No. We use the official YouTube Data API with OAuth 2.0 and only update thumbnails on videos you own. Thumbnail updates are a supported API feature."
            },
            {
              q: "How long does a test run before a winner is picked?",
              a: "Tests run for a minimum of 7 days or until statistical significance is reached — whichever comes first. You can also manually end a test at any time."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} ThumbnailCTR. All rights reserved.
      </footer>
    </main>
  );
}
