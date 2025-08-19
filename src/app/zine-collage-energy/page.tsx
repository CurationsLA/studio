
'use client';

const ZineCollageEnergyPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700;900&display=swap');

                :root { 
                    --ink:#000; 
                    --paper:#fff; 
                    --pink:#FF5BF1; 
                    --indigo:#6370E7; 
                    --tape:#FDE68A; 
                }

                body { 
                    font-family:'IBM Plex Sans', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; 
                    background: var(--paper); 
                    color: var(--ink); 
                }

                .grid-bg {
                  background-image:
                    linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px);
                  background-size: 28px 28px;
                }

                .card-zine {
                  border: 3px solid var(--ink);
                  box-shadow: 8px 8px 0 0 var(--ink);
                  transform: rotate(-0.8deg);
                }

                .tape {
                  position: absolute; top:-10px; left:12px; background: var(--tape); color:#111;
                  padding: 6px 10px; transform: rotate(-5deg);
                  box-shadow: 0 2px 0 rgba(0,0,0,0.2);
                  font-weight: 900; letter-spacing:0.02em;
                }

                .riso {
                  text-shadow:
                    -2px 0 0 var(--pink),
                    2px 0 0 var(--indigo);
                  letter-spacing:-0.02em;
                }
            `}</style>
            <div>
              {/* Header */}
              <header className="border-b-4 border-black bg-white">
                <div className="px-6 sm:px-10 py-4 flex items-center justify-between">
                  <h1 className="font-black text-3xl tracking-tight">[CURATIONS]</h1>
                  <div className="flex items-center gap-6">
                    <span className="text-xs sm:text-sm font-medium">Los Angeles × Worldwide</span>
                    <button className="px-4 py-2 bg-black text-white font-black border-4 border-black hover:bg-[var(--pink)] transition">START PROJECT</button>
                  </div>
                </div>
              </header>

              {/* Hero */}
              <section className="grid-bg">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
                  <div className="relative inline-block mb-4">
                    <span className="tape">NEW</span>
                    <span className="px-3 py-1 bg-white border-2 border-black font-black">AGENCY REBRAND</span>
                  </div>
                  <h2 className="riso text-[13vw] md:text-[8rem] leading-[0.87] font-black uppercase">CURATIONS</h2>
                  <p className="mt-6 text-xl max-w-xl">We curate cultural signals—zine‑like layouts, modern performance.</p>
                </div>
              </section>

              {/* Services */}
              <section className="max-w-7xl mx-auto px-6 sm:px-10 py-10 grid md:grid-cols-3 gap-6">
                <div className="relative bg-white p-6 card-zine">
                  <h3 className="font-black text-2xl">🍽️ Restaurants & Biz</h3>
                  <p className="text-sm mt-2">Strategy to opening night.</p>
                </div>
                <div className="relative bg-gradient-to-br from-[var(--pink)] to-[var(--indigo)] text-white p-6 card-zine" style={{borderColor:'#fff'}}>
                  <h3 className="font-black text-2xl">💥 Neon Services</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>Glitch Branding</li>
                    <li>Cyber Collabs</li>
                    <li>Underground Media</li>
                  </ul>
                </div>
                <div className="relative bg-white p-6 card-zine rotate-1">
                  <h3 className="font-black text-2xl">📦 Modular Tooling</h3>
                  <p className="text-sm mt-2">Blocks for rapid editorial builds.</p>
                </div>
              </section>

              {/* Subscribe */}
              <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-12">
                <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] flex flex-col items-center text-center">
                  <p className="font-black text-lg mb-4">💌 Subscribe to Curations</p>
                  <button className="px-8 py-3 bg-black text-white font-black border-4 border-black hover:bg-[var(--pink)] transition">SUBSCRIBE</button>
                </div>
              </section>

              {/* Editorial Grid */}
              <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16 grid md:grid-cols-3 gap-6">
                <aside className="bg-[var(--pink)] text-white p-6 border-4 border-black shadow-[8px_8px_0_0_#000]">
                  <h3 className="font-black text-lg uppercase mb-2">Recent Posts</h3>
                  <ul className="space-y-2 text-sm">
                    <li>[1] Anti‑Design Futures</li>
                    <li>Marketing Brutalism 2025</li>
                  </ul>
                </aside>
                <aside className="bg-black text-white p-6 border-4 border-white shadow-[8px_8px_0_0_#000]">
                  <h3 className="font-black text-2xl text-[#EBF998]">Editorial Feed</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>Glitch Systems 101</li>
                    <li>Night Moves: LA to Tokyo</li>
                  </ul>
                </aside>
                <aside className="bg-white p-6 border-4 border-black shadow-[8px_8px_0_0_#000]">
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

export default ZineCollageEnergyPage;
