
'use client';

const MinimalLuxeEditorialPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700;900&display=swap');

                :root { 
                    --ink:#111; 
                    --cream:#FAF7F2; 
                    --pink:#FF5BF1; 
                    --indigo:#6370E7; 
                }

                body { 
                    font-family:'IBM Plex Sans', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; 
                    background: var(--cream); 
                    color: var(--ink); 
                }

                .luxe-underline:hover { text-decoration: line-through; text-decoration-color: var(--pink); text-decoration-thickness: 2px; }

                .rule { height:1px; background: linear-gradient(to right, transparent, #000 30%, #000 70%, transparent); opacity:0.2; }

                .deck { max-width: 46ch; }
            `}</style>
            <div>
              {/* Header */}
              <header className="px-6 sm:px-10 py-4 border-b border-black/20 bg-white/70 backdrop-blur">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-black tracking-tight">[CURATIONS]</h1>
                  <nav className="space-x-6 text-sm font-medium">
                    <a href="#" className="luxe-underline">Work</a>
                    <a href="#" className="luxe-underline">Services</a>
                    <a href="#" className="luxe-underline">Contact</a>
                  </nav>
                </div>
              </header>

              {/* Hero */}
              <main className="px-6 sm:px-10 py-12 sm:py-20">
                <div className="grid md:grid-cols-12 gap-10 items-end">
                  <div className="md:col-span-8">
                    <h2 className="text-[12vw] md:text-[8rem] font-black leading-[0.9] uppercase tracking-tight">CURATIONS</h2>
                    <p className="mt-6 text-xl deck">We craft cultural communication—editorial strategies that fuse brutalist clarity with modern luxury.</p>
                  </div>
                  <aside className="md:col-span-4">
                    <div className="p-6 bg-white border border-black/15">
                      <h3 className="font-black uppercase">Recent Posts</h3>
                      <ul className="mt-4 space-y-3 text-sm">
                        <li><span className="luxe-underline">[1] Type‑First Design Systems</span></li>
                        <li><span className="luxe-underline">Luxury Minimalism as Branding</span></li>
                        <li><span className="luxe-underline">Editorial Brutalism in 2025</span></li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </main>

              <div className="rule mx-6 sm:mx-10 my-6"></div>

              {/* Services */}
              <section className="px-6 sm:px-10 pb-12 grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white border border-black/15">
                  <h3 className="font-black text-2xl">🍽️ Restaurant Strategy</h3>
                  <p className="text-sm mt-2">High‑touch hospitality launches.</p>
                </div>
                <div className="p-6 bg-white border border-black/15">
                  <h3 className="font-black text-2xl">🛰️ Brand Systems</h3>
                  <p className="text-sm mt-2">Design ops, style maps, governance.</p>
                </div>
                <div className="p-6 bg-white border border-black/15">
                  <h3 className="font-black text-2xl">📡 Signal Amplification</h3>
                  <p className="text-sm mt-2">Editorial, SEO, cultural reach.</p>
                </div>
              </section>

              {/* Subscribe */}
              <section className="px-6 sm:px-10 py-12 flex justify-center">
                <button className="px-8 py-3 bg-black text-white font-black text-base tracking-wide hover:bg-[var(--pink)] transition">SUBSCRIBE</button>
              </section>

              {/* Editorial Grid */}
              <section className="px-6 sm:px-10 pb-16 grid md:grid-cols-3 gap-6">
                <aside className="p-6 bg-white border border-black/15">
                  <h3 className="font-black uppercase">Recent Posts</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>[1] Anti‑Design Futures</li>
                    <li>Marketing Brutalism 2025</li>
                  </ul>
                </aside>
                <aside className="p-6 bg-black text-white">
                  <h3 className="font-black text-2xl text-[var(--pink)]">Editorial Feed</h3>
                  <ul className="mt-3 space-y-2 text-sm text-white/90">
                    <li>Glitch Systems 101</li>
                    <li>Night Moves: LA to Tokyo</li>
                  </ul>
                </aside>
                <aside className="p-6 bg-white border border-black/15">
                  <h3 className="font-black uppercase">Studio Notes</h3>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="luxe-underline">Type‑First Design Systems</li>
                    <li className="luxe-underline">Luxury Minimalism as Branding</li>
                  </ul>
                </aside>
              </section>
            </div>
        </>
    );
};

export default MinimalLuxeEditorialPage;
