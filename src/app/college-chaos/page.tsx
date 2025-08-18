'use client';

const CollegeChaosPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
                }
                
                .rotate-3 { transform: rotate(3deg); }
                .rotate--3 { transform: rotate(-3deg); }
                .rotate-6 { transform: rotate(6deg); }
                .rotate--6 { transform: rotate(-6deg); }
                
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                
                .blink {
                    animation: blink 2s infinite;
                }
                
                .tape-effect {
                    position: relative;
                }
                
                .tape-effect::before {
                    content: '';
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 20px;
                    background: rgba(235, 249, 152, 0.8);
                    transform: rotate(-5deg);
                }
                
                .hover-shake:hover {
                    animation: shake 0.5s;
                }
                
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                
                .sticker-effect {
                    border-radius: 50%;
                    border: 3px dashed;
                }
            `}</style>
            <div className="bg-white">
                {/* Chaos Navigation */}
                <nav className="fixed top-0 w-full z-50 p-4">
                    <div className="bg-black text-white p-4 rotate--3 inline-block">
                        <span className="text-xl font-bold">[CURATIONS]</span>
                    </div>
                    <div className="float-right space-x-2">
                        <span className="inline-block bg-[#FF5BF1] text-white px-3 py-2 rotate-3">Services</span>
                        <span className="inline-block bg-[#6370E7] text-white px-3 py-2 rotate--3">Work</span>
                        <span className="inline-block bg-[#EBF998] text-black px-3 py-2 rotate-3">Contact</span>
                    </div>
                </nav>

                {/* Collage Hero */}
                <section className="min-h-screen pt-20 px-4 relative overflow-hidden">
                    {/* Scattered Elements */}
                    <div className="absolute top-32 left-20 bg-[#FF5BF1] text-white p-4 rotate-6 z-10">
                        <p className="font-bold">SINCE 2017</p>
                    </div>
                    
                    <div className="absolute top-40 right-32 bg-[#EBF998] p-3 rotate--6 z-10">
                        <p className="text-2xl">✨</p>
                    </div>
                    
                    <div className="absolute bottom-20 left-40 border-4 border-[#6370E7] p-4 rotate-3 z-10">
                        <p className="font-bold">LOS ANGELES</p>
                    </div>
                    
                    {/* Main Content */}
                    <div className="max-w-7xl mx-auto relative z-20 py-20">
                        <div className="text-center">
                            {/* Stacked Titles */}
                            <h1 className="text-8xl md:text-9xl font-bold">
                                <span className="block rotate--3 inline-block">CURATIONS</span>
                            </h1>
                            <div className="flex justify-center items-center gap-4 -mt-8">
                                <span className="text-6xl">×</span>
                                <h2 className="text-6xl font-bold text-[#6370E7]">CurationsLA</h2>
                            </div>
                            
                            {/* Tagline Collage */}
                            <div className="mt-12 flex flex-wrap justify-center gap-4">
                                <span className="bg-[#FF5BF1] text-white px-4 py-2 text-2xl font-bold rotate--3">WE CURATE</span>
                                <span className="border-4 border-black px-4 py-2 text-2xl font-bold rotate-3">THE HEART</span>
                                <span className="bg-[#EBF998] px-4 py-2 text-2xl font-bold rotate--3">OF BRANDS</span>
                            </div>
                            
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <span className="bg-black text-white px-4 py-2 text-xl rotate-3">& THE NEWS</span>
                                <span className="bg-[#6370E7] text-white px-4 py-2 text-xl rotate--3">THEY BREAK</span>
                            </div>
                        </div>
                        
                        {/* Scattered Stats */}
                        <div className="mt-20 relative h-64">
                            <div className="absolute top-0 left-1/4 tape-effect">
                                <div className="bg-white border-4 border-[#FF5BF1] p-4 rotate-6 hover-shake">
                                    <p className="text-3xl font-bold">500+</p>
                                    <p className="text-sm">Brands</p>
                                </div>
                            </div>
                            
                            <div className="absolute top-10 right-1/4">
                                <div className="bg-[#6370E7] text-white p-4 rotate--3 hover-shake">
                                    <p className="text-3xl font-bold">50K+</p>
                                    <p className="text-sm">Readers</p>
                                </div>
                            </div>
                            
                            <div className="absolute bottom-0 left-1/3">
                                <div className="bg-[#EBF998] p-4 rotate-3 hover-shake">
                                    <p className="text-3xl font-bold">100M+</p>
                                    <p className="text-sm">Views</p>
                                </div>
                            </div>
                            
                            <div className="absolute bottom-10 right-1/3">
                                <div className="sticker-effect border-[#FF5BF1] p-6">
                                    <p className="text-2xl">🚀</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Feed Collage */}
                <section className="py-20 px-4 bg-gradient-to-b from-white to-[#EBF998]/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-6xl font-bold">
                                <span className="inline-block rotate--3">GOOD</span>
                                <span className="inline-block rotate-3 text-[#FF5BF1]">VIBES</span>
                                <span className="inline-block rotate--3">FROM</span>
                            </h2>
                            <h2 className="text-6xl font-bold text-[#6370E7]">CURATIONSLA</h2>
                        </div>
                        
                        {/* Collage Layout Posts */}
                        <div className="relative h-[600px]">
                            {/* Post 1 - Top Left */}
                            <div className="absolute top-0 left-0 w-96 rotate--3">
                                <div className="bg-[#FF5BF1] text-white p-6 tape-effect">
                                    <span className="bg-white text-[#FF5BF1] px-2 py-1 text-xs font-bold">AUG 17</span>
                                    <h3 className="text-2xl font-bold mt-3 mb-3">📅 EVENTS: WEEK OF MONDAY</h3>
                                    <p className="text-sm mb-4">Dave Matthews, Adam Sandler, Mt. Joy + more LA shows</p>
                                    <button className="bg-white text-[#FF5BF1] px-4 py-2 font-bold">READ →</button>
                                </div>
                            </div>
                            
                            {/* Post 2 - Top Right */}
                            <div className="absolute top-20 right-0 w-80 rotate-6">
                                <div className="bg-[#FF8C00] text-white p-6">
                                    <span className="text-xs font-bold">AUG 15</span>
                                    <h3 className="text-xl font-bold mt-2">🌮 FRIDAY VIBES</h3>
                                    <p className="text-sm mt-2">Weekend guide to LA</p>
                                    <span className="inline-block mt-3 bg-white text-[#FF8C00] px-3 py-1 text-sm font-bold">EXPLORE</span>
                                </div>
                            </div>
                            
                            {/* Post 3 - Bottom Center */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 rotate--6">
                                <div className="bg-black text-white p-6 border-4 border-[#EBF998]">
                                    <span className="text-[#EBF998] text-xs font-bold">AUG 9</span>
                                    <h3 className="text-2xl font-bold mt-2">📅 SUMMER HEAT</h3>
                                    <p className="text-sm mt-2">Concerts, festivals, rooftops</p>
                                    <button className="mt-3 text-[#EBF998] font-bold">DISCOVER →</button>
                                </div>
                            </div>
                            
                            {/* Subscribe Sticker */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="bg-[#EBF998] p-8 rounded-full border-4 border-black rotate-12 hover:rotate-0 transition">
                                    <p className="text-2xl font-bold">50K+</p>
                                    <p className="text-sm">SUBSCRIBERS</p>
                                    <button className="mt-2 bg-black text-[#EBF998] px-4 py-2 text-xs font-bold">JOIN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Scrapbook */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-7xl font-bold mb-12">
                            <span className="text-[#FF5BF1]">SERVICES</span> MENU
                        </h2>
                        
                        {/* Scrapbook Grid */}
                        <div className="grid grid-cols-12 gap-4">
                            {/* Restaurant */}
                            <div className="col-span-4 bg-black text-white p-6 rotate--3 hover:rotate-0 transition">
                                <span className="text-4xl">🍽️</span>
                                <h3 className="text-2xl font-bold mt-2 text-[#FF5BF1]">RESTAURANT</h3>
                                <ul className="text-sm mt-3 space-y-1">
                                    <li>• Grand Openings</li>
                                    <li>• Ghost Kitchens</li>
                                    <li>• Menu Marketing</li>
                                </ul>
                            </div>
                            
                            {/* AI */}
                            <div className="col-span-4 border-4 border-[#6370E7] p-6 rotate-3 hover:rotate-0 transition">
                                <span className="text-4xl">🤖</span>
                                <h3 className="text-2xl font-bold mt-2 text-[#6370E7]">AI DISCOVERY</h3>
                                <p className="text-sm mt-2 font-bold">"Vibe Coding"</p>
                                <p className="text-xs mt-1">Workshops Available</p>
                            </div>
                            
                            {/* Media */}
                            <div className="col-span-4 bg-[#EBF998] p-6 rotate--3 hover:rotate-0 transition">
                                <span className="text-4xl">📺</span>
                                <h3 className="text-2xl font-bold mt-2">MEDIA BUYING</h3>
                                <p className="text-sm mt-2">Netflix to TikTok</p>
                            </div>
                            
                            {/* Influencer */}
                            <div className="col-span-3 bg-[#FF5BF1] text-white p-4 rotate-6">
                                <span className="text-3xl">✨</span>
                                <h4 className="font-bold">INFLUENCER</h4>
                            </div>
                            
                            {/* Comms */}
                            <div className="col-span-3 bg-[#6370E7] text-white p-4 rotate--6">
                                <span className="text-3xl">📰</span>
                                <h4 className="font-bold">COMMS</h4>
                            </div>
                            
                            {/* SEO */}
                            <div className="col-span-3 border-4 border-black p-4 rotate-3">
                                <span className="text-3xl">🔍</span>
                                <h4 className="font-bold">SEO</h4>
                            </div>
                            
                            {/* Newsletter */}
                            <div className="col-span-3 bg-black text-white p-4 rotate--3">
                                <span className="text-3xl">💌</span>
                                <h4 className="font-bold text-[#EBF998]">NEWSLETTERS</h4>
                            </div>
                            
                            {/* Full Stack Banner */}
                            <div className="col-span-12 bg-gradient-to-r from-[#FF5BF1] via-[#6370E7] to-[#EBF998] p-8 text-white rotate--3 mt-4">
                                <h3 className="text-3xl font-bold text-center">FULL-STACK EVERYTHING</h3>
                                <p className="text-center mt-2">PAID SEARCH • SOCIAL • DISPLAY • TV • EMAIL • CRM • AND MORE</p>
                            </div>
                        </div>
                        
                        {/* Google Partner Badge */}
                        <div className="mt-12 text-center">
                            <div className="inline-block bg-white border-4 border-black p-6 rotate-3">
                                <p className="text-sm font-bold">🏆 GROW WITH GOOGLE PARTNER</p>
                                <p className="text-xs mt-2">One free annual partnership available</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Explosion */}
                <section className="py-20 px-4 bg-black text-white relative overflow-hidden">
                    <div className="absolute top-10 left-10 text-8xl opacity-10 rotate-12">✨</div>
                    <div className="absolute bottom-10 right-10 text-8xl opacity-10 rotate--12">🚀</div>
                    <div className="absolute top-1/2 left-20 text-6xl opacity-10">💡</div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-6xl font-bold mb-8">
                            <span className="inline-block rotate--3">DON'T</span>
                            <span className="inline-block rotate-3 text-[#FF5BF1]">THINK</span>
                            <span className="inline-block rotate--3">OUTSIDE</span>
                        </h2>
                        <h2 className="text-6xl font-bold mb-8">
                            <span className="inline-block rotate-3">THE</span>
                            <span className="inline-block rotate--3 text-[#6370E7]">BOX.</span>
                        </h2>
                        <h2 className="text-7xl font-bold mb-12 text-[#EBF998]">
                            THROW IT AWAY.
                        </h2>
                        
                        <div className="flex justify-center gap-4">
                            <button className="px-8 py-4 bg-[#FF5BF1] text-black font-bold text-lg rotate--3 hover:rotate-0 transition">
                                START NOW
                            </button>
                            <button className="px-8 py-4 border-4 border-[#EBF998] text-[#EBF998] font-bold text-lg rotate-3 hover:rotate-0 transition">
                                GET INFO
                            </button>
                        </div>
                    </div>
                </section>

                {/* Collage Footer */}
                <footer className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="inline-block bg-black text-white p-8 rotate--3">
                            <h3 className="text-3xl font-bold">[CURATIONS]</h3>
                            <p className="mt-2">EST. 2017 • LOS ANGELES • WORLDWIDE</p>
                            <p className="mt-4 text-[#EBF998]">hello@curations.org</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default CollegeChaosPage;
