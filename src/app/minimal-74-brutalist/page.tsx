
'use client';

const Minimal74BrutalistPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
                
                body {
                    font-family: 'JetBrains Mono', monospace;
                }
                
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                }

                .text-outline {
                    -webkit-text-stroke: 3px #FF5BF1;
                    -webkit-text-fill-color: transparent;
                }
                
                @keyframes pulse-brutal {
                    0%, 100% { 
                        transform: scale(1);
                    }
                    50% { 
                        transform: scale(1.02);
                    }
                }
                
                .pulse-brutal {
                    animation: pulse-brutal 1.8s ease-in-out infinite;
                }
                
                @keyframes slideIn {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
                
                .slide-in {
                    animation: slideIn 0.8s ease-out;
                }
                
                .neon-glow-pink {
                    box-shadow: 0 0 40px rgba(255, 91, 241, 0.6),
                                inset 0 0 40px rgba(255, 91, 241, 0.1);
                }
            `}</style>
            <div className="bg-white text-black">
                {/* Floating Corner Badge */}
                <div className="fixed top-20 right-4 z-50 bg-[#FF5BF1] text-white px-4 py-2 rotate-12 shadow-xl brutal-box">
                    <span className="text-xs font-bold">SUMMER 2025 🔥</span>
                </div>

                {/* Top Bar */}
                <div className="fixed top-0 w-full z-40 bg-black text-white">
                    <div className="flex justify-between items-center px-6 py-2 text-xs">
                        <span>📍 Los Angeles | 🌐 Worldwide</span>
                        <span className="hidden md:block">CURATIONS × CurationsLA | Since 2017</span>
                        <span>✨ Grow with Google Partner</span>
                    </div>
                </div>

                {/* Hero Grid Layout */}
                <section id="home" className="min-h-[70vh] pt-24 px-4 md:px-8 bg-white">
                    <div className="grid md:grid-cols-12 gap-6 items-center h-full">
                        {/* Main Title */}
                        <div className="md:col-span-8 z-10">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-black leading-tight uppercase">
                                    <span className="block slide-in">CURATIONS</span>
                                    <span className="block text-outline slide-in" style={{animationDelay: '0.2s'}}>CURATIONS</span>
                                    <span className="block text-[#6370E7] slide-in" style={{animationDelay: '0.4s'}}>CURATIONS</span>
                                </h1>
                            </div>
                            
                            {/* Brutalist Motto Expression */}
                            <div className="mt-8 space-y-6">
                                <div className="brutal-box bg-black text-white p-6 pulse-brutal">
                                    <h2 className="text-2xl md:text-3xl font-black uppercase text-center">
                                        WE CURATE THE
                                    </h2>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="brutal-box bg-[#FF5BF1] text-white p-8 pulse-brutal" style={{animationDelay: '0.3s'}}>
                                        <h3 className="text-3xl md:text-4xl font-black text-center uppercase">
                                            [HEART]
                                        </h3>
                                        <div className="mt-2 text-center text-sm font-bold">
                                            BRAND CONNECTION
                                        </div>
                                    </div>
                                    
                                    <div className="brutal-box bg-[#6370E7] text-white p-8 pulse-brutal" style={{animationDelay: '0.6s'}}>
                                        <h3 className="text-3xl md:text-4xl font-black text-center uppercase">
                                            [HEADLINES]
                                        </h3>
                                        <div className="mt-2 text-center text-sm font-bold">
                                            CULTURAL IMPACT
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Side Panel */}
                        <div className="md:col-span-4 space-y-4 z-20">
                            <div className="brutal-box bg-[#EBF998] text-black p-6 hover:scale-105 transition">
                                <h3 className="font-black text-xl mb-3 uppercase">OUR FOCUS</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="font-bold">[1] Restaurant Launches</li>
                                    <li className="font-bold">[2] AI Discovery</li>
                                    <li className="font-bold">[3] Media Buying</li>
                                    <li className="font-bold">[4] Creative Collabs</li>
                                    <li className="font-bold">[5] Communications</li>
                                </ul>
                            </div>
                            
                            <div className="brutal-box bg-white p-6">
                                <p className="font-black text-lg uppercase">SYSTEMS:</p>
                                <p className="text-3xl mt-2 pulse-brutal font-black text-[#FF5BF1]">[ONLINE]</p>
                                <div className="mt-3 space-y-1">
                                    <div className="w-full bg-gray-300 h-4 brutal-box">
                                        <div className="bg-[#6370E7] h-full w-full pulse-brutal"></div>
                                    </div>
                                    <p className="text-xs text-right font-bold">100% READY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-12 px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-7xl font-black mb-16 text-center uppercase text-[#FF5BF1]">
                            [SERVICES]
                        </h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                             <div className="brutal-box bg-white hover:bg-gray-100 transition p-8 border-[#FF5BF1]">
                                <span className="text-5xl">🍽️</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">Restaurant & Biz</h3>
                                <ul className="mt-4 space-y-2 text-sm font-bold">
                                    <li>• Grand Openings</li>
                                    <li>• Ghost Kitchens</li>
                                    <li>• Menu Marketing</li>
                                    <li>• Third-Party Apps</li>
                                </ul>
                            </div>
                            
                            <div className="brutal-box bg-white hover:bg-gray-100 transition p-8 border-[#6370E7]">
                                <span className="text-5xl">🤖</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">AI Discovery</h3>
                                <ul className="mt-4 space-y-2 text-sm font-bold">
                                    <li>• Citation + Sourcing</li>
                                    <li>• Prompt Engineering</li>
                                    <li>• Tech Stack</li>
                                    <li>• Team Workshops</li>
                                </ul>
                            </div>
                            
                            <div className="brutal-box bg-white hover:bg-gray-100 transition p-8 border-[#EBF998]">
                                <span className="text-5xl">📺</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">Media Buying</h3>
                                <ul className="mt-4 space-y-2 text-sm font-bold">
                                  <li>• Netflix Placement</li>
                                  <li>• Podcast Ads</li>
                                  <li>• Linear TV</li>
                                  <li>• Social Media</li>
                                </ul>
                            </div>
                            
                            <div className="brutal-box bg-white hover:bg-gray-100 transition p-8">
                                <span className="text-5xl">👋</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">Creative Collabs</h3>
                                 <ul className="mt-4 space-y-2 text-sm font-bold">
                                  <li>• Influencer Matching</li>
                                  <li>• UGC Campaigns</li>
                                  <li>• Content Creation</li>
                                  <li>• Social Strategy</li>
                                </ul>
                            </div>
                            
                            <div className="brutal-box bg-white hover:bg-gray-100 transition p-8">
                                <span className="text-5xl">📰</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">Communications</h3>
                                <ul className="mt-4 space-y-2 text-sm font-bold">
                                  <li>• Crisis Management</li>
                                  <li>• Executive Branding</li>
                                  <li>• PR Strategy</li>
                                  <li>• Media Relations</li>
                                </ul>
                            </div>
                            
                            <div className="brutal-box bg-white hover:bg-gray-100 transition p-8">
                                <span className="text-5xl">🚀</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">Full-Stack</h3>
                                <ul className="mt-4 space-y-2 text-sm font-bold">
                                  <li>• SEO & SEM</li>
                                  <li>• Email/CRM</li>
                                  <li>• Analytics</li>
                                  <li>• Conversion</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-16 brutal-box bg-gradient-to-r from-[#FF5BF1] via-[#6370E7] to-[#EBF998] p-8 text-white">
                            <div className="flex flex-wrap justify-between items-center">
                                <h3 className="text-3xl font-black">FULL STACK DIGITAL DOMINATION</h3>
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
                </section>
                
                {/* Google Partner */}
                <div className="py-6 bg-black">
                    <div className="text-center">
                         <div className="inline-block brutal-box p-8 border-2 border-[#EBF998] neon-glow-pink">
                            <p className="text-2xl font-black text-[#EBF998] uppercase">🏆 GROW WITH GOOGLE PARTNER</p>
                            <p className="mt-2 text-sm text-white">One deserving brand gets a full-service partnership for free, yearly.</p>
                        </div>
                    </div>
                </div>

                {/* CurationsLA Deep Dive */}
                <section className="py-12 px-8 relative bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] text-transparent bg-clip-text">
                                GOOD VIBES FROM CURATIONSLA
                            </h2>
                            <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-700">
                                This isn't just a newsletter. It's the pulse of LA. While <span className="font-bold">[CURATIONS]</span> builds your brand, <span className="font-bold text-[#6370E7]">CurationsLA</span> puts you in the inbox of the city's most influential voices, creating a dual-powerhouse for cultural impact.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="brutal-box bg-[#FF5BF1] text-white p-6">
                                <span className="text-sm font-black">AUG 15, 2025</span>
                                <h3 className="text-2xl font-black mt-3 mb-3">🌮 FRIDAY AFTERNOON VIBES</h3>
                                <p className="text-sm">Weekend essentials: rooftop parties, beach clubs, taco trucks, and everything in between.</p>
                            </div>
                             <div className="brutal-box bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] p-6 text-white">
                                <span className="text-sm font-bold bg-white text-black px-2 py-1 inline-block">AUG 17, 2025</span>
                                <h3 className="text-2xl font-black text-white mt-3 mb-3">📅 EVENTS: WEEK OF MONDAY</h3>
                                <p className="mb-3 text-white text-sm">Dave Matthews Band, Adam Sandler, Mt. Joy, The Frey, Nelly, and more.</p>
                            </div>
                             <div className="brutal-box bg-white text-black p-6 border-4 border-black">
                                <span className="text-black text-sm font-bold">AUG 9, 2025</span>
                                <h3 className="text-xl font-black mt-2 mb-2">📅 SUMMER HEAT EVENTS</h3>
                                <p className="text-sm">Your guide to surviving LA summer in style</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Subscribe CTA */}
                <section className="py-20 px-8 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="brutal-box bg-white text-black p-12 text-center">
                            <h3 className="text-4xl font-black mb-4 uppercase">RECEIVE GOOD VIBES IN YOUR INBOX</h3>
                            <p className="text-xl mb-6 font-bold">Curate Los Angeles with us</p>
                            <button className="brutal-box px-8 py-4 bg-[#FF5BF1] text-white font-black text-lg uppercase hover:bg-[#6370E7] transition">
                                SUBSCRIBE TO CURATIONSLA
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Minimal74BrutalistPage;
