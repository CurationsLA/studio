
'use client';

const TechnoNeonPulsePage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700;900&display=swap');

                :root { 
                    --bg:#000000; 
                    --fg:#ffffff; 
                    --pink:#FF5BF1; 
                    --indigo:#6370E7; 
                    --lime:#EBF998; 
                }

                body { 
                    font-family:'IBM Plex Sans', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; 
                    background: var(--bg); 
                    color: var(--fg);
                }

                .neon-border { position: relative; }
                .neon-border::after {
                  content:""; position:absolute; inset:0; border:3px solid transparent; border-radius: 0;
                  background: linear-gradient(45deg,var(--pink),var(--indigo)) border-box;
                  -webkit-mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
                  -webkit-mask-composite: xor; mask-composite: exclude;
                }

                .glitch { position: relative; font-weight: 900; letter-spacing:-0.02em; }
                .glitch::before, .glitch::after {
                  content: attr(data-text); position: absolute; inset: 0; pointer-events:none;
                }
                .glitch::before { transform: translateX(2px); text-shadow: -2px 0 var(--pink); animation: g1 1.2s infinite linear alternate; }
                .glitch::after { transform: translateX(-2px); text-shadow: 2px 0 var(--indigo); animation: g2 1.4s infinite linear alternate; }
                @keyframes g1 { 0%{clip-path: inset(0 0 40% 0);} 50%{clip-path: inset(60% 0 0 0);} 100%{clip-path: inset(0 0 40% 0);} }
                @keyframes g2 { 0%{clip-path: inset(60% 0 0 0);} 50%{clip-path: inset(0 0 55% 0);} 100%{clip-path: inset(60% 0 0 0);} }

                .soft-glow { text-shadow: 0 0 18px rgba(255,91,241,0.55), 0 0 6px rgba(99,112,231,0.6); }
                .btn-neon { background: var(--pink); color: #000; font-weight: 900; }
                .btn-neon:hover { background: var(--indigo); color: #fff; }
            `}</style>
            <div>
              {/* Header */}
              <header className="w-full border-b border-white/20 backdrop-blur-sm sticky top-0 z-20">
                <div className="px-6 sm:px-10 py-4 flex items-center justify-between">
                  <span className="font-black text-2xl">[CURATIONS]</span>
                  <button className="px-4 py-2 btn-neon neon-border">START PROJECT</button>
                </div>
              </header>

              {/* Hero */}
              <section className="px-6 sm:px-10 py-12 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="glitch soft-glow text-[15vw] md:text-[8rem] leading-[0.85]" data-text="CURATIONS">CURATIONS</h1>
                  <p className="mt-5 text-xl text-[var(--lime)]">Digital brutalism × nightlife energy × frequency.</p>
                </div>
                <aside className="p-6 neon-border bg-gradient-to-br from-[var(--pink)]/20 to-[var(--indigo)]/20">
                  <h3 className="text-2xl font-black">💥 Neon Services</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>Glitch Branding</li>
                    <li>Cyber Collabs</li>
                    <li>Underground Media</li>
                  </ul>
                </aside>
              </section>

              {/* Services */}
              <section className="px-6 sm:px-10 pb-12 grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 border border-white/15 neon-border">
                  <div className="text-5xl">🛰️</div>
                  <h3 className="mt-4 font-black text-2xl">Brand Systems</h3>
                  <p className="text-sm mt-2 text-white/80">Design ops, style maps, governance.</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/15 neon-border">
                  <div className="text-5xl">📡</div>
                  <h3 className="mt-4 font-black text-2xl">Signal Amplification</h3>
                  <p className="text-sm mt-2 text-white/80">Editorial, SEO, cultural reach.</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/15 neon-border">
                  <div className="text-5xl">🍽️</div>
                  <h3 className="mt-4 font-black text-2xl">Restaurants & Biz</h3>
                  <p className="text-sm mt-2 text-white/80">Strategy to opening night.</p>
                </div>
              </section>

              {/* Subscribe */}
              <section className="px-6 sm:px-10 py-12 flex items-center justify-center">
                <button className="px-8 py-3 btn-neon neon-border text-base">SUBSCRIBE TO CURATIONS</button>
              </section>

              {/* Editorial Grid */}
              <section className="px-6 sm:px-10 pb-16 grid md:grid-cols-3 gap-6">
                <aside className="p-6 bg-[var(--pink)] text-black neon-border">
                  <h3 className="font-black text-lg uppercase mb-2">Recent Posts</h3>
                  <ul className="space-y-2 text-sm">
                    <li>[1] Anti‑Design Futures</li>
                    <li>Marketing Brutalism 2025</li>
                  </ul>
                </aside>
                <aside className="p-6 bg-black text-white border border-white/15 neon-border">
                  <h3 className="font-black text-2xl text-[var(--lime)]">Editorial Feed</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>Glitch Systems 101</li>
                    <li>Night Moves: LA to Tokyo</li>
                  </ul>
                </aside>
                <aside className="p-6 bg-white/5 text-white neon-border">
                  <h3 className="font-black uppercase">Studio Notes</h3>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="underline">Type‑First Design Systems</li>
                    <li className="underline">Luxury Minimalism as Branding</li>
                  </ul>
                </aside>
              </section>
            </div>
        </>
    );
};

export default TechnoNeonPulsePage;
