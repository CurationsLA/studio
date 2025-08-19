
'use client';

const SystemGridModularPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700;900&display=swap');

                :root { 
                    --ink:#0b0b0b; 
                    --bg:#f8fafc; 
                    --pink:#FF5BF1; 
                    --indigo:#6370E7; 
                    --lime:#EBF998; 
                }

                body { 
                    font-family:'IBM Plex Sans', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; 
                    background: var(--bg); 
                    color: var(--ink); 
                }

                .grid-dots {
                  background-image: radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px);
                  background-size: 14px 14px;
                }

                .token { display:inline-block; padding:4px 10px; border:1.5px solid #000; font-weight:700; font-size:12px; background:#fff; }

                .accent-bar { height:6px; background: linear-gradient(90deg, var(--pink), var(--indigo)); }

                .hover-tilt:hover { transform: translateY(-2px) rotate(-0.3deg); transition: transform .2s ease; }
            `}</style>
            <div>
              {/* Header */}
              <header className="bg-white border-b border-black/10">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
                  <h1 className="font-black text-2xl tracking-tight">[CURATIONS]</h1>
                  <div className="flex items-center gap-3">
                    <span className="token">LA</span>
                    <span className="token">WORLDWIDE</span>
                    <button className="ml-3 px-4 py-2 bg-black text-white font-black hover:bg-[var(--pink)] transition">START PROJECT</button>
                  </div>
                </div>
              </header>

              {/* Hero */}
              <section className="grid-dots">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16 grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8">
                    <div className="accent-bar mb-4"></div>
                    <h2 className="text-[12vw] md:text-[7.5rem] leading-[0.9] font-black uppercase">CURATIONS</h2>
                    <p className="mt-5 text-xl max-w-xl">We build modular editorial systems—fast to ship, easy to scale, hard to ignore.</p>
                  </div>
                  <aside className="md:col-span-4">
                    <div className="bg-white border border-black/10 p-6">
                      <h3 className="font-black uppercase">Recent Posts</h3>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li className="hover:underline">[1] Anti‑Design Futures</li>
                        <li className="hover:underline">Marketing Brutalism 2025</li>
                        <li className="hover:underline">Global × Local</li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </section>

              {/* Services */}
              <section className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-black/10 p-6 hover-tilt">
                  <div className="text-5xl">🛰️</div>
                  <h3 className="mt-3 font-black text-2xl">Brand Systems</h3>
                  <p className="text-sm mt-2">Design ops, style maps, governance.</p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-[var(--pink)] to-[var(--indigo)]"></div>
                </div>
                <div className="bg-white border border-black/10 p-6 hover-tilt">
                  <div className="text-5xl">📡</div>
                  <h3 className="mt-3 font-black text-2xl">Signal Amplification</h3>
                  <p className="text-sm mt-2">Editorial, SEO, cultural reach.</p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-[var(--indigo)] to-[var(--pink)]"></div>
                </div>
                <div className="bg-white border border-black/10 p-6 hover-tilt">
                  <div className="text-5xl">🍽️</div>
                  <h3 className="mt-3 font-black text-2xl">Restaurants & Biz</h3>
                  <p className="text-sm mt-2">Strategy to opening night.</p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-[var(--pink)] via-[var(--lime)] to-[var(--indigo)]"></div>
                </div>
              </section>

              {/* Subscribe */}
              <section className="px-6 sm:px-10">
                <div className="max-w-7xl mx-auto bg-black text-white p-8 flex flex-col items-center text-center">
                  <p className="font-black text-lg mb-3">💌 Subscribe to Curations</p>
                  <button className="px-8 py-3 bg-white text-black font-black hover:bg-[var(--pink)] hover:text-white transition">SUBSCRIBE</button>
                </div>
              </section>

              {/* Editorial Grid */}
              <section className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid md:grid-cols-3 gap-6">
                <aside className="p-6 bg-[var(--pink)] text-black">
                  <h3 className="font-black text-lg uppercase mb-2">Recent Posts</h3>
                  <ul className="space-y-2 text-sm">
                    <li>[1] Anti‑Design Futures</li>
                    <li>Marketing Brutalism 2025</li>
                  </ul>
                </aside>
                <aside className="p-6 bg-black text-white">
                  <h3 className="font-black text-2xl text-[var(--lime)]">Editorial Feed</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>Glitch Systems 101</li>
                    <li>Night Moves: LA to Tokyo</li>
                  </ul>
                </aside>
                <aside className="p-6 bg-white border border-black/10">
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

export default SystemGridModularPage;
