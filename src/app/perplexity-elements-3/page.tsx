
'use client';

const PerplexityElementsPage = () => {

    const v2glitchStyle = `
        .glitch { position: relative; font-size:6rem; font-weight:900; }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position:absolute;left:0;top:0;width:100%;
        }
        .glitch::before { left:2px; text-shadow:-2px 0 #FF5BF1; animation: glitch 1s infinite linear alternate-reverse;}
        .glitch::after { left:-2px;text-shadow:2px 0 #6370E7; animation: glitch 1.3s infinite linear alternate-reverse;}
        @keyframes glitch {
          0% {clip: rect(0,9999px,0,0);}
          50% {clip: rect(0,9999px,9999px,0);}
          100% {clip: rect(0,9999px,0,0);}
        }
    `;

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700;900&display=swap');
                
                .brutal-box { border: 4px solid #000; padding: 1.25rem; }
                .grid-bg {
                  background-image: linear-gradient(to right,#000 1px,transparent 1px),
                                    linear-gradient(to bottom,#000 1px,transparent 1px);
                  background-size:40px 40px;
                }
                .underline-hover:hover { text-decoration: underline; text-decoration-thickness:3px; }
                .luxe-underline-hover:hover { text-decoration: line-through; text-decoration-color:#FF5BF1;}

                ${v2glitchStyle}
            `}</style>
            <div className="bg-gray-100 p-4 sm:p-8">
                <h1 className="text-4xl md:text-6xl font-black text-center mb-12">Perplexity Elements 3</h1>

                {/* Section for Full Themes */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8 pb-2 border-b-2 border-gray-300">Full Themes</h2>
                    
                    {/* Theme 1: Ultra Brutalist Gold */}
                    <div className="mb-12 border-4 border-black p-4">
                        <h3 className="text-2xl font-bold mb-4">Theme 1: Ultra Brutalist Gold (Monochrome x Modular)</h3>
                        <div className="bg-white text-black">
                             <header className="relative top-0 w-full border-b-4 border-black bg-white z-10">
                                <div className="flex justify-between items-center px-8 py-4">
                                <h1 className="font-black text-3xl">[CURATIONS]</h1>
                                <div className="flex items-center gap-6">
                                    <span className="text-sm font-medium">Los Angeles × Worldwide</span>
                                    <button className="brutal-box bg-black text-white font-bold hover:bg-[#FF5BF1] transition">START PROJECT</button>
                                </div>
                                </div>
                            </header>
                            <section className="pt-8 px-8 grid md:grid-cols-12 gap-6 grid-bg min-h-[50vh]">
                                <div className="md:col-span-8 flex flex-col justify-center">
                                <h1 className="text-[5rem] lg:text-[8rem] font-black leading-none">CURATIONS</h1>
                                <p className="brutal-box mt-8 text-2xl uppercase font-black">We Curate the Headlines of CULTURE.</p>
                                </div>
                                <aside className="md:col-span-4 brutal-box bg-[#FF5BF1] text-white">
                                <h3 className="text-xl font-black uppercase mb-2">Recent Posts</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>[1] Anti-Design Futures</li>
                                    <li> Marketing Brutalism 2025</li>
                                    <li> Minimal × Maximum Reach</li>
                                    <li> Global × Local</li>
                                </ul>
                                </aside>
                            </section>
                        </div>
                    </div>

                    {/* Theme 2: Techno-Neon Brutalism */}
                    <div className="mb-12 border-4 border-black p-4">
                        <h3 className="text-2xl font-bold mb-4">Theme 2: Techno-Neon Brutalism (Glitch x Motion)</h3>
                        <div className="bg-black text-white">
                            <header className="relative top-0 w-full bg-black border-b border-white z-10 px-8 py-4 flex justify-between items-center">
                                <span className="font-black text-2xl">[CURATIONS]</span>
                                <button className="bg-[#FF5BF1] px-4 py-2 font-bold hover:bg-[#6370E7] transition">START PROJECT</button>
                            </header>
                            <section className="pt-8 px-8 grid md:grid-cols-2 items-center gap-8 min-h-[50vh]">
                                <div>
                                <h1 className="glitch" data-text="CURATIONS">CURATIONS</h1>
                                <p className="mt-6 text-xl text-[#EBF998]">Digital Brutalism × Nightlife Energy × Frequency</p>
                                </div>
                                <aside style={{borderWidth: '3px', borderColor: '#fff'}} className="p-5 bg-gradient-to-br from-[#FF5BF1] to-[#6370E7]">
                                <h3 className="text-2xl font-black">💥 Neon Services</h3>
                                <ul className="mt-3 space-y-2 text-sm">
                                    <li>Glitch Branding</li>
                                    <li>Cyber Collabs</li>
                                    <li>Underground Media</li>
                                </ul>
                                </aside>
                            </section>
                        </div>
                    </div>
                    
                    {/* Theme 3: Minimal Luxe Brutalism */}
                    <div className="mb-12 border-4 border-black p-4">
                        <h3 className="text-2xl font-bold mb-4">Theme 3: Minimal Luxe Brutalism (Editorial x Type-first)</h3>
                        <div className="bg-white text-black">
                            <header className="px-8 py-4 border-b border-black flex justify-between items-center">
                                <h1 className="text-xl font-black">[CURATIONS]</h1>
                                <nav className="space-x-6 text-sm font-medium">
                                <a href="#" className="luxe-underline-hover">Work</a>
                                <a href="#" className="luxe-underline-hover">Services</a>
                                <a href="#" className="luxe-underline-hover">Contact</a>
                                </nav>
                            </header>
                            <main className="px-8 py-16 grid md:grid-cols-12 gap-8">
                                <div className="md:col-span-8">
                                <h1 className="text-[5rem] lg:text-[8rem] font-black uppercase leading-none">CURATIONS</h1>
                                <p className="mt-6 text-2xl max-w-lg">We craft cultural communication — editorial strategies that fuse brutalist clarity with modern luxury.</p>
                                </div>
                                <aside className="md:col-span-4">
                                <h3 className="font-black uppercase">Recent Posts</h3>
                                <ul className="mt-4 space-y-3 text-sm">
                                    <li><span className="luxe-underline-hover">[1] Type-First Design Systems</span></li>
                                    <li><span className="luxe-underline-hover"> Luxury Minimalism as Branding</span></li>
                                    <li><span className="luxe-underline-hover"> Editorial Brutalism in 2025</span></li>
                                </ul>
                                </aside>
                            </main>
                        </div>
                    </div>
                </div>

                {/* Section for Modular Elements */}
                <div>
                    <h2 className="text-3xl font-bold text-center mb-8 pb-2 border-b-2 border-gray-300">Modular Elements</h2>

                    {/* Element 1: Branded Header Navigation */}
                    <div className="mb-12 border-4 border-black p-4">
                        <h3 className="text-xl font-bold mb-4">Element 1: Branded Header Navigation</h3>
                        <div className="space-y-4">
                            <header className="flex justify-between items-center px-8 py-4 border-4 border-black bg-white">
                                <h1 className="font-black text-3xl">[CURATIONS]</h1>
                                <nav className="flex items-center gap-6">
                                <span className="text-sm font-medium">Los Angeles × Worldwide</span>
                                <button className="brutal-box bg-black text-white font-bold hover:bg-[#FF5BF1] transition">START PROJECT</button>
                                </nav>
                            </header>
                            <header className="flex justify-between items-center px-8 py-4 bg-black border border-white">
                                <span className="font-black text-2xl text-white">[CURATIONS]</span>
                                <button className="bg-[#FF5BF1] px-4 py-2 font-bold hover:bg-[#6370E7] transition">START PROJECT</button>
                            </header>
                            <header className="flex justify-between items-center px-8 py-4 border-b border-black bg-white">
                                <h1 className="text-xl font-black">[CURATIONS]</h1>
                                <nav className="space-x-6 text-sm font-medium">
                                <a href="#" className="luxe-underline-hover">Work</a>
                                <a href="#" className="luxe-underline-hover">Services</a>
                                <a href="#" className="luxe-underline-hover">Contact</a>
                                </nav>
                            </header>
                        </div>
                    </div>

                    {/* Element 2: Hero/Main Tagline */}
                    <div className="mb-12 border-4 border-black p-4">
                        <h3 className="text-xl font-bold mb-4">Element 2: Hero/Main Tagline</h3>
                        <div className="space-y-8">
                           <div className="md:col-span-8 flex flex-col justify-center bg-white p-4">
                                <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black leading-none text-black">CURATIONS</h1>
                                <p className="brutal-box mt-8 text-2xl uppercase font-black text-black">We Curate the Headlines of CULTURE.</p>
                            </div>
                            <div className="bg-black p-4">
                                <h1 className="glitch text-white" data-text="CURATIONS">CURATIONS</h1>
                                <p className="mt-6 text-xl text-[#EBF998]">Digital Brutalism × Nightlife Energy × Frequency</p>
                            </div>
                             <div className="md:col-span-8 bg-white p-4">
                                <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black uppercase leading-none text-black">CURATIONS</h1>
                                <p className="mt-6 text-2xl max-w-lg text-black">We craft cultural communication — editorial strategies that fuse brutalist clarity with modern luxury.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Element 3: Service Card / Feature Box */}
                    <div className="mb-12 border-4 border-black p-4">
                        <h3 className="text-xl font-bold mb-4">Element 3: Service Card / Feature Box</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="brutal-box bg-white text-black">
                                <span className="text-5xl">🍽️</span>
                                <h3 className="font-black text-2xl mt-4">Restaurants & Biz</h3>
                                <p className="text-sm mt-2">Strategy to opening night.</p>
                            </div>
                            <div style={{borderWidth: '3px', borderColor: '#fff'}} className="p-5 bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] text-white">
                                <h3 className="text-2xl font-black">💥 Neon Services</h3>
                                <ul className="mt-3 space-y-2 text-sm">
                                <li>Glitch Branding</li>
                                <li>Cyber Collabs</li>
                                <li>Underground Media</li>
                                </ul>
                            </div>
                            <div className="bg-white text-black p-4">
                                <h3 className="font-black text-2xl mb-2">🍽️ Restaurant Strategy</h3>
                                <p className="text-sm">High touch hospitality launches</p>
                            </div>
                        </div>
                    </div>

                    {/* Element 4: Subscribe & CTA Block */}
                     <div className="mb-12 border-4 border-black p-4">
                        <h3 className="text-xl font-bold mb-4">Element 4: Subscribe & CTA Block</h3>
                        <div className="space-y-4">
                            <section className="py-16 px-8 bg-white text-center">
                                <p className="font-black text-lg mb-4 text-black">💌 Subscribe to CURATIONSLA</p>
                                <button className="brutal-box bg-black text-white font-black hover:bg-[#FF5BF1] transition">SUBSCRIBE</button>
                            </section>
                            <section className="px-8 py-16 flex items-center justify-center bg-black">
                                <button style={{borderWidth: '3px', borderColor: '#fff'}} className="p-5 bg-white text-black hover:bg-[#FF5BF1] hover:text-white font-black">SUBSCRIBE NOW</button>
                            </section>
                            <section className="py-16 px-8 border-t-2 border-black flex justify-center bg-white">
                                <button className="px-8 py-4 bg-black text-white font-black text-lg hover:bg-[#FF5BF1] transition">SUBSCRIBE TO CURATIONSLA</button>
                            </section>
                        </div>
                    </div>

                    {/* Element 5: Card Grid / Recent Posts */}
                    <div className="mb-12 border-4 border-black p-4">
                        <h3 className="text-xl font-bold mb-4">Element 5: Card Grid: Recent Posts/Editorial/Feed</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <aside className="brutal-box bg-[#FF5BF1] text-white">
                                <h3 className="text-xl font-black uppercase mb-2">Recent Posts</h3>
                                <ul className="space-y-2 text-sm">
                                <li>[1] Anti-Design Futures</li>
                                <li> Marketing Brutalism 2025</li>
                                </ul>
                            </aside>
                            <aside style={{borderWidth: '3px', borderColor: '#fff'}} className="p-5 bg-black text-white">
                                <h3 className="font-black text-2xl text-[#EBF998]">Editorial Feed</h3>
                                <ul className="mt-3 space-y-2 text-sm">
                                <li>Glitch Systems 101</li>
                                <li>Night Moves: LA to Tokyo</li>
                                </ul>
                            </aside>
                            <aside className="bg-white text-black p-4">
                                <h3 className="font-black uppercase">Recent Posts</h3>
                                <ul className="mt-4 space-y-3 text-sm">
                                <li><span className="luxe-underline-hover"> Type-First Design Systems</span></li>
                                <li><span className="luxe-underline-hover"> Luxury Minimalism as Branding</span></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerplexityElementsPage;
