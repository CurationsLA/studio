
'use client';

const UltraBrutalistNewspaperGridPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700;900&display=swap');

                :root { 
                    --ink:#000; 
                    --paper:#ffffff; 
                    --accent:#FF5BF1; 
                    --accent-2:#6370E7; 
                    --lime:#EBF998; 
                }

                body { 
                    font-family: 'IBM Plex Sans', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
                }

                .grid-bg {
                  background-image:
                    linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px);
                  background-size: 40px 40px;
                }

                .brutal { border:4px solid var(--ink); }
                .ink-underline:hover { text-decoration: underline; text-decoration-thickness: 3px; text-underline-offset: 4px; }

                .stamp {
                  display:inline-block; border:4px solid var(--ink); padding:0.35rem 0.6rem; font-weight:900; letter-spacing:0.02em;
                  transform: rotate(-2deg);
                  box-shadow: 6px 6px 0 0 var(--ink);
                  background: var(--paper); color:var(--ink);
                }
            `}</style>
            <div className="bg-white text-black">
              {/* Header */}
              <header className="w-full brutal bg-white">
                <div className="px-6 sm:px-10 py-4 flex items-center justify-between">
                  <h1 className="font-black text-2xl sm:text-3xl tracking-tight">[CURATIONS]</h1>
                  <nav className="flex items-center gap-6">
                    <span className="text-xs sm:text-sm font-medium">Los Angeles × Worldwide</span>
                    <button className="px-4 py-2 bg-black text-white font-black brutal hover:bg-[var(--accent)] transition">START PROJECT</button>
                  </nav>
                </div>
              </header>

              {/* Hero */}
              <section className="grid-bg min-h-[55vh] brutal border-t-0">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 sm:py-16 grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="stamp">NEW ISSUE</span>
                      <span className="text-xs font-bold">VOL. 03 — AGENCY EDITION</span>
                    </div>
                    <h2 className="text-[11vw] md:text-[8rem] leading-[0.9] font-black tracking-tight uppercase">CURATIONS</h2>
                    <p className="mt-6 text-xl sm:text-2xl font-black uppercase">We curate the headlines of culture.</p>
                  </div>
                  <aside className="md:col-span-4">
                    <div className="p-5 bg-white brutal">
                      <h3 className="font-black text-lg uppercase mb-3">Recent Posts</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="ink-underline">[1] Anti‑Design Futures</li>
                        <li className="ink-underline">Marketing Brutalism 2025</li>
                        <li className="ink-underline">Minimal × Maximum Reach</li>
                        <li className="ink-underline">Global × Local</li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </section>

              {/* Services */}
              <section className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white brutal">
                  <div className="text-5xl">🍽️</div>
                  <h3 className="mt-4 font-black text-2xl">Restaurants & Biz</h3>
                  <p className="text-sm mt-2">Strategy to opening night.</p>
                </div>
                <div className="p-6 bg-white brutal">
                  <div className="text-5xl">🛰️</div>
                  <h3 className="mt-4 font-black text-2xl">Brand Systems</h3>
                  <p className="text-sm mt-2">Design ops, style maps, governance.</p>
                </div>
                <div className="p-6 bg-white brutal">
                  <div className="text-5xl">📡</div>
                  <h3 className="mt-4 font-black text-2xl">Signal Amplification</h3>
                  <p className="text-sm mt-2">Editorial, SEO, cultural reach.</p>
                </div>
              </section>

              {/* Subscribe / CTA */}
              <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 flex flex-col items-center text-center">
                  <p className="font-black text-lg mb-4">💌 Subscribe to Curations</p>
                  <button className="px-8 py-3 bg-black text-white font-black text-base brutal hover:bg-[var(--accent)] transition">SUBSCRIBE</button>
                </div>
              </section>

              {/* Editorial Grid */}
              <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16 grid md:grid-cols-3 gap-6">
                <aside className="p-6 bg-[var(--accent)] text-white brutal">
                  <h3 className="font-black text-lg uppercase mb-2">Recent Posts</h3>
                  <ul className="space-y-2 text-sm">
                    <li>[1] Anti‑Design Futures</li>
                    <li>Marketing Brutalism 2025</li>
                  </ul>
                </aside>
                <aside className="p-6 bg-black text-white brutal">
                  <h3 className="font-black text-2xl text-[var(--lime)]">Editorial Feed</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>Glitch Systems 101</li>
                    <li>Night Moves: LA to Tokyo</li>
                  </ul>
                </aside>
                <aside className="p-6 bg-white brutal">
                  <h3 className="font-black uppercase">Studio Notes</h3>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="ink-underline">Type‑First Design Systems</li>
                    <li className="ink-underline">Luxury Minimalism as Branding</li>
                  </ul>
                </aside>
              </section>
            </div>
        </>
    );
};

export default UltraBrutalistNewspaperGridPage;
