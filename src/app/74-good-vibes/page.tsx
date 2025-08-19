
'use client';

const GoodVibes74Page = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700;900&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
                }
                
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                }
                
                .diagonal-text {
                    transform: rotate(-3deg);
                }

                @keyframes slideIn {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
                
                .slide-in {
                    animation: slideIn 0.8s ease-out;
                }

                .text-outline-subtle {
                    -webkit-text-stroke: 1.5px #FF5BF1;
                    -webkit-text-fill-color: transparent;
                }

                .glass-effect {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .magazine-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 1.5rem;
                }
                
                .span-6 { grid-column: span 6; }
                .span-8 { grid-column: span 8; }
                .span-4 { grid-column: span 4; }
                .span-3 { grid-column: span 3; }
                .span-12 { grid-column: span 12; }

                @media (max-width: 768px) {
                    .span-6, .span-8, .span-4, .span-3, .span-12 { grid-column: span 12; }
                }

                .layer-1 { z-index: 10; }
                .layer-2 { z-index: 20; }
                .layer-3 { z-index: 30; }

                .neon-glow-pink {
                    box-shadow: 0 0 40px rgba(255, 91, 241, 0.6),
                                inset 0 0 40px rgba(255, 91, 241, 0.1);
                }
            `}</style>
            <div className="bg-white text-black">
                {/* Refined Top Bar */}
                <div className="fixed top-0 w-full z-50">
                    <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
                        <div className="px-8 py-3">
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-black">[CURATIONS]</div>
                                <div className="hidden md:flex items-center gap-8">
                                    <span className="text-sm text-gray-600">Los Angeles × Worldwide</span>
                                    <span className="text-sm font-medium">Since 2017</span>
                                    <button className="px-4 py-2 bg-black text-white text-sm font-bold hover:bg-[#FF5BF1] transition">
                                        START PROJECT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FF5BF1] text-white px-8 py-1 text-center">
                        <p className="text-xs font-medium">✨ Grow with Google Partner • One Free Annual Partnership Available</p>
                    </div>
                </div>

                {/* Hero Grid Layout */}
                <section id="home" className="min-h-screen pt-20 px-4 md:px-8 bg-white">
                    <div className="magazine-grid items-center min-h-screen">
                        {/* Main Title Block */}
                        <div className="span-8 z-10">
                            <div className="diagonal-text">
                                <h1 className="text-7xl md:text-[9rem] lg:text-[10rem] font-black leading-none">
                                    <span className="block slide-in">CURATIONS</span>
                                    <span className="block text-outline-subtle slide-in" style={{animationDelay: '0.2s'}}>CURATIONS</span>
                                    <span className="block text-[#FF5BF1] slide-in" style={{animationDelay: '0.4s'}}>CURATIONS</span>
                                </h1>
                            </div>
                        </div>
                        
                        {/* Side Panel placeholder*/}
                        <div className="span-4 space-y-4 z-20">
                             <div className="brutal-box bg-[#EBF998] text-black p-6 hover:scale-105 transition">
                                <h3 className="font-black text-xl mb-3 uppercase">MENU.EXE</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center font-bold"><span className="mr-2">[01]</span> Restaurant Launches</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[02]</span> AI Discovery</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[03]</span> Media Buying</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[04]</span> Influencer Collabs</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[05]</span> Executive Branding</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="text-6xl md:text-8xl font-black">SERVICES</h2>
                                <p className="text-lg text-gray-600 mt-2">Everything you need. Nothing you don't.</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm">ISSUE 02</p>
                                <p className="text-sm">2025 EDITION</p>
                            </div>
                        </div>
                        
                        <div className="magazine-grid">
                            {/* Feature Service - Restaurant */}
                            <div className="span-6 bg-[#FF5BF1] text-white p-8 min-h-[400px] relative overflow-hidden brutal-box">
                                <span className="text-8xl opacity-20 absolute -right-4 -top-4">🍽️</span>
                                <span className="text-6xl relative z-10">🍽️</span>
                                <h3 className="text-3xl font-black mt-4 mb-4 relative z-10">RESTAURANT & BUSINESS</h3>
                                <p className="mb-4 relative z-10">From ghost kitchens to grand openings, we know food.</p>
                                <ul className="space-y-1 text-sm relative z-10">
                                    <li>✓ Grand Openings & Events</li>
                                    <li>✓ Menu Marketing Magic</li>
                                    <li>✓ Third-Party App Strategy</li>
                                    <li>✓ Delivery Optimization</li>
                                    <li>✓ Staff & Vendor Relations</li>
                                </ul>
                                <button className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-black text-sm">LEARN MORE</button>
                            </div>
                            
                            {/* AI Discovery */}
                            <div className="span-6 border-4 border-black p-8 min-h-[400px] brutal-box">
                                <span className="text-6xl">🤖</span>
                                <h3 className="text-3xl font-black mt-4 mb-4">AI DISCOVERY</h3>
                                <p className="mb-4 text-[#6370E7] font-black text-lg">"Vibe Coding" & Beyond</p>
                                <ul className="space-y-2">
                                    <li>• AI Prompt Engineering</li>
                                    <li>• SEO & AI Citations</li>
                                    <li>• Tech Stack Discovery</li>
                                    <li>• Business Consultations</li>
                                    <li>• Team Workshops</li>
                                </ul>
                                <div className="mt-4 p-3 bg-[#EBF998] brutal-box">
                                    <p className="text-xs font-black">HOT: AI workshops booking fast!</p>
                                </div>
                            </div>
                            
                            {/* Media Buying */}
                            <div className="span-3 bg-black text-white p-6 brutal-box">
                                <h3 className="text-xl font-black mb-4 text-[#EBF998]">MEDIA BUYING</h3>
                                <div className="space-y-2 text-sm">
                                    <p>📺 Netflix</p>
                                    <p>📰 KTLA</p>
                                    <p>📻 Podcasts</p>
                                    <p>📍 Geofencing</p>
                                    <p>🎯 Amazon</p>
                                    <p>💼 LinkedIn</p>
                                    <p>🔴 Live Stream</p>
                                </div>
                            </div>
                            
                            {/* Influencer */}
                            <div className="span-3 bg-[#6370E7] text-white p-6 brutal-box">
                                <h3 className="text-xl font-black mb-4">CREATIVE COLLABS</h3>
                                <p className="text-sm mb-4">UGC that converts.</p>
                                <ul className="text-sm space-y-1">
                                    <li>→ Social Strategy</li>
                                    <li>→ Content Gaps</li>
                                    <li>→ Digital Listening</li>
                                    <li>→ Clips & Shorts</li>
                                </ul>
                            </div>
                            
                            {/* Communications */}
                            <div className="span-3 border-4 border-[#EBF998] p-6 brutal-box">
                                <h3 className="text-xl font-black mb-4">COMMUNICATIONS</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Corporate Comms</li>
                                    <li>Executive Branding</li>
                                    <li>Newsletter Design</li>
                                    <li>Chaos Management</li>
                                    <li>Legal Matching</li>
                                </ul>
                            </div>
                            
                            {/* SEO Block */}
                            <div className="span-3 bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] text-white p-6 brutal-box">
                                <h3 className="text-xl font-black mb-4">SEO & DISCOVERY</h3>
                                <p className="text-sm mb-3">Be found everywhere:</p>
                                <ul className="text-sm space-y-1">
                                    <li>🔍 Google #1</li>
                                    <li>🤖 AI Citations</li>
                                    <li>📊 Rich Snippets</li>
                                </ul>
                            </div>
                            
                            {/* Full Stack Banner */}
                            <div className="span-12 bg-gradient-to-r from-[#FF5BF1] via-[#6370E7] to-[#EBF998] p-8 text-white brutal-box">
                                <div className="flex flex-wrap justify-between items-center">
                                    <h3 className="text-3xl font-black">FULL-STACK DIGITAL DOMINATION</h3>
                                    <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                                        <span className="bg-white/20 px-4 py-2 font-bold">PAID SEARCH</span>
                                        <span className="bg-white/20 px-4 py-2 font-bold">PAID SOCIAL</span>
                                        <span className="bg-white/20 px-4 py-2 font-bold">DISPLAY ADS</span>
                                        <span className="bg-white/20 px-4 py-2 font-bold">LINEAR TV</span>
                                        <span className="bg-white/20 px-4 py-2 font-bold">EMAIL/CRM</span>
                                        <span className="bg-white/20 px-4 py-2 font-bold">INFLUENCER</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Google Partner */}
                <div className="mt-16 text-center py-10 bg-black">
                    <div className="inline-block brutal-box glass-effect p-8 border-2 border-[#EBF998]">
                        <p className="text-2xl font-black text-[#EBF998] uppercase">🏆 GROW WITH GOOGLE PARTNER</p>
                        <p className="mt-2 text-sm text-white">One deserving brand gets a full-service partnership for free, yearly.</p>
                    </div>
                </div>

                {/* CurationsLA Deep Dive */}
                <section className="py-20 px-8 relative bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-6xl md:text-8xl font-black">
                                GOOD VIBES FROM
                            </h2>
                            <h2 className="text-6xl md:text-8xl font-black">
                                <span className="text-[#FF5BF1]">CURATIONS</span><span className="text-[#6370E7]">LA</span>
                            </h2>
                        </div>
                        
                        {/* Layered Post Cards */}
                        <div className="relative h-[700px] md:h-[500px]">
                            {/* Back Layer */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl layer-1">
                                <div className="bg-gray-200 p-8 opacity-50 brutal-box">
                                    <span className="text-xs">COMING NEXT WEEK</span>
                                    <h3 className="text-2xl font-black mt-2">🎸 Summer Concert Series</h3>
                                </div>
                            </div>
                            
                            {/* Middle Layer */}
                            <div className="absolute top-20 left-0 w-full md:w-1/2 layer-2">
                                <div className="bg-[#FF8C00] p-8 brutal-box">
                                    <span className="text-sm font-black text-white">AUG 15, 2025</span>
                                    <h3 className="text-3xl font-black mt-3 mb-4 text-white">🌮 FRIDAY AFTERNOON VIBES</h3>
                                    <p className="text-white">Weekend essentials: rooftop parties, beach clubs, taco trucks, and everything in between.</p>
                                    <button className="mt-4 bg-white text-[#FF8C00] px-6 py-3 font-black">EXPLORE WEEKEND →</button>
                                </div>
                            </div>
                            
                            {/* Front Layer */}
                            <div className="absolute top-40 right-0 w-full md:w-1/2 layer-3">
                                <div className="bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] p-8 brutal-box">
                                    <span className="text-sm font-bold bg-white text-black px-2 py-1 inline-block">AUG 17, 2025</span>
                                    <h3 className="text-3xl font-black text-white mt-3 mb-4">📅 EVENTS: WEEK OF MONDAY</h3>
                                    <p className="mb-4 text-white">Dave Matthews Band, Adam Sandler, Mt. Joy, The Frey, Nelly, and more.</p>
                                    <ul className="space-y-2 mb-6 text-white">
                                        <li>🎤 Comedy Shows</li>
                                        <li>🎸 Live Music</li>
                                        <li>🍷 Wine Tastings</li>
                                    </ul>
                                    <button className="bg-white text-[#FF5BF1] px-6 py-3 font-black">FULL LINEUP →</button>
                                </div>
                            </div>
                            
                            {/* Bottom Layer */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl layer-2">
                                <div className="bg-black border-2 border-[#EBF998] p-8 brutal-box">
                                    <span className="text-[#EBF998] text-sm font-bold">AUG 9, 2025</span>
                                    <h3 className="text-2xl font-black mt-2 mb-3 text-white">📅 SUMMER HEAT EVENTS</h3>
                                    <p className="text-white">Your guide to surviving LA summer in style</p>
                                    <button className="mt-4 text-[#EBF998] font-black">DISCOVER →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Subscribe CTA */}
                <section className="py-20 px-8 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-black text-white p-12 text-center transform -skew-y-1">
                            <h3 className="text-4xl font-black mb-4 text-white">Good Vibes 74</h3>
                            <p className="text-xl mb-6 text-white">Curate Los Angeles with us</p>
                            <button className="px-8 py-4 bg-[#FF5BF1] text-white font-black text-lg hover:bg-[#EBF998] hover:text-black transition">
                                SUBSCRIBE TO CURATIONSLA →
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default GoodVibes74Page;

    