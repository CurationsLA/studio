
'use client';

const BrutalistManPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Rajdhani:wght@400;600;700&display=swap');
                
                body {
                    font-family: 'Courier Prime', monospace;
                }
                
                .magazine-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 1rem;
                }
                
                .span-6 { grid-column: span 6; }
                .span-4 { grid-column: span 4; }
                .span-3 { grid-column: span 3; }
                .span-8 { grid-column: span 8; }
                .span-12 { grid-column: span 12; }
                .span-2 { grid-column: span 2; }
                
                @media (max-width: 768px) {
                    .span-6, .span-4, .span-3, .span-8, .span-2, .span-12 { grid-column: span 12; }
                }
                
                .text-outline {
                    -webkit-text-stroke: 3px #FF5BF1;
                    -webkit-text-fill-color: transparent;
                }
                
                @keyframes pulse-brutal {
                    0%, 100% { 
                        transform: scale(1) rotateX(0deg);
                        filter: contrast(1);
                    }
                    50% { 
                        transform: scale(1.02) rotateX(2deg);
                        filter: contrast(1.2);
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

                .glass-effect {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .neon-glow-lime {
                    box-shadow: 0 0 40px rgba(235, 249, 152, 0.6),
                                inset 0 0 40px rgba(235, 249, 152, 0.1);
                }
                
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                }

                .rajdhani {
                    font-family: 'Rajdhani', sans-serif;
                }
            `}</style>
            <div className="bg-white text-black">
                {/* Floating Corner Badge */}
                <div className="fixed top-20 right-4 z-50 bg-[#FF5BF1] text-white px-4 py-2 rotate-12 shadow-xl brutal-box">
                    <span className="text-xs font-bold">V2 DROPPING 🔥</span>
                </div>

                {/* Top Bar */}
                <div className="fixed top-0 w-full z-40 bg-black text-white">
                    <div className="flex justify-between items-center px-6 py-2 text-xs">
                        <span>📍 Los Angeles | 🌐 Worldwide</span>
                        <span className="hidden md:block">CURATIONS × CurationsLA | Since 2017</span>
                        <span>✨ Grow with Google Partner</span>
                    </div>
                    <div className="bg-[#EBF998] text-black px-6 py-1 text-center">
                        <marquee className="text-sm font-bold">
                            BREAKING: NEW CLIENTS GET 20% OFF FIRST CAMPAIGN • AI DISCOVERY WORKSHOPS NOW BOOKING • CURATIONSLA REACHES 50K SUBSCRIBERS • WE'RE HIRING CREATIVE DIRECTORS 
                        </marquee>
                    </div>
                </div>

                {/* Hero Grid Layout */}
                <section id="home" className="min-h-screen pt-20 px-4 md:px-8 bg-white">
                    <div className="magazine-grid items-center min-h-screen">
                        {/* Main Title */}
                        <div className="span-8 z-10">
                            <div className="rajdhani">
                                <h1 className="text-4xl md:text-6xl font-black leading-tight uppercase">
                                    <span className="block slide-in">CURATIONS</span>
                                    <span className="block text-outline slide-in" style={{animationDelay: '0.2s'}}>CURATIONS</span>
                                    <span className="block text-[#6370E7] slide-in" style={{animationDelay: '0.4s'}}>CURATIONS</span>
                                </h1>
                            </div>
                            
                            {/* Brutalist Motto Expression */}
                            <div className="mt-12 space-y-6">
                                <div className="brutal-box bg-black text-white p-6 pulse-brutal">
                                    <h2 className="text-2xl md:text-3xl font-black uppercase text-center rajdhani">
                                        WE_CURATE_THE
                                    </h2>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="brutal-box bg-[#FF5BF1] text-white p-8 pulse-brutal" style={{animationDelay: '0.3s'}}>
                                        <h3 className="text-3xl md:text-4xl font-black text-center uppercase rajdhani">
                                            [HEART]
                                        </h3>
                                        <div className="mt-2 text-center text-sm font-bold">
                                            EMOTIONAL_CONNECTION
                                        </div>
                                    </div>
                                    
                                    <div className="brutal-box bg-[#6370E7] text-white p-8 pulse-brutal" style={{animationDelay: '0.6s'}}>
                                        <h3 className="text-3xl md:text-4xl font-black text-center uppercase rajdhani">
                                            [HEADLINES]
                                        </h3>
                                        <div className="mt-2 text-center text-sm font-bold">
                                            MEDIA_PRESENCE
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="brutal-box bg-[#EBF998] text-black p-6 pulse-brutal" style={{animationDelay: '0.9s'}}>
                                    <h2 className="text-3xl md:text-4xl font-black uppercase text-center rajdhani">
                                        OF &gt;&gt; BRANDS &lt;&lt; 
                                    </h2>
                                </div>
                            </div>
                            
                            {/* Quick Stats */}
                            <div className="mt-8 flex gap-4 flex-wrap">
                                <div className="brutal-box bg-black text-white p-3">
                                    <p className="text-2xl font-black">500+</p>
                                    <p className="text-xs uppercase">Brands</p>
                                </div>
                                <div className="brutal-box bg-[#6370E7] text-white p-3">
                                    <p className="text-2xl font-black">50K+</p>
                                    <p className="text-xs uppercase">Subs</p>
                                </div>
                                <div className="brutal-box bg-[#EBF998] text-black p-3">
                                    <p className="text-2xl font-black">8 YRS</p>
                                    <p className="text-xs uppercase">LA</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Side Panel */}
                        <div className="span-4 space-y-4 z-20">
                            <div className="brutal-box bg-[#EBF998] text-black p-6 hover:scale-105 transition">
                                <h3 className="font-black text-xl mb-3 uppercase rajdhani">MENU.EXE</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center font-bold"><span className="mr-2">[01]</span> Restaurant Launches</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[02]</span> AI Discovery</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[03]</span> Media Buying</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[04]</span> Influencer Collabs</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[05]</span> Executive Branding</li>
                                </ul>
                            </div>
                            
                            <div className="brutal-box bg-white p-6">
                                <p className="font-black text-lg uppercase rajdhani">SYS_STATUS:</p>
                                <p className="text-3xl mt-2 pulse-brutal font-black">[ACTIVE]</p>
                                <div className="mt-3 space-y-1">
                                    <div className="w-full bg-gray-300 h-4 brutal-box">
                                        <div className="bg-[#6370E7] h-4 w-full pulse-brutal"></div>
                                    </div>
                                    <p className="text-xs text-right font-bold">100% OPERATIONAL</p>
                                </div>
                            </div>
                            
                            <div className="brutal-box bg-black text-white p-6">
                                <p className="text-sm font-black mb-2 uppercase text-[#EBF998]">SPECIAL_PROGRAM.EXE</p>
                                <p className="text-xs font-bold">One deserving brand receives full service FREE yearly through our Grow with Google Partnership</p>
                                <button className="mt-3 text-[#EBF998] text-xs font-black uppercase underline">EXECUTE &gt;&gt;&gt;</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="text-6xl md:text-8xl font-bold rajdhani">SERVICES</h2>
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
                                <h3 className="text-3xl font-bold mt-4 mb-4 relative z-10 rajdhani">RESTAURANT & BUSINESS</h3>
                                <p className="mb-4 relative z-10">From ghost kitchens to grand openings, we know food.</p>
                                <ul className="space-y-1 text-sm relative z-10">
                                    <li>✓ Grand Openings & Events</li>
                                    <li>✓ Menu Marketing Magic</li>
                                    <li>✓ Third-Party App Strategy</li>
                                    <li>✓ Delivery Optimization</li>
                                    <li>✓ Staff & Vendor Relations</li>
                                </ul>
                                <button className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-bold text-sm">LEARN MORE</button>
                            </div>
                            
                            {/* AI Discovery */}
                            <div className="span-6 border-4 border-black p-8 min-h-[400px] brutal-box">
                                <span className="text-6xl">🤖</span>
                                <h3 className="text-3xl font-bold mt-4 mb-4 rajdhani">AI DISCOVERY</h3>
                                <p className="mb-4 text-[#6370E7] font-bold text-lg">"Vibe Coding" & Beyond</p>
                                <ul className="space-y-2">
                                    <li>• AI Prompt Engineering</li>
                                    <li>• SEO & AI Citations</li>
                                    <li>• Tech Stack Discovery</li>
                                    <li>• Business Consultations</li>
                                    <li>• Team Workshops</li>
                                </ul>
                                <div className="mt-4 p-3 bg-[#EBF998] brutal-box">
                                    <p className="text-xs font-bold">HOT: AI workshops booking fast!</p>
                                </div>
                            </div>
                            
                            {/* Media Buying */}
                            <div className="span-3 bg-black text-white p-6 brutal-box">
                                <h3 className="text-xl font-bold mb-4 text-[#EBF998] rajdhani">MEDIA BUYING</h3>
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
                                <h3 className="text-xl font-bold mb-4 rajdhani">CREATIVE COLLABS</h3>
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
                                <h3 className="text-xl font-bold mb-4 rajdhani">COMMUNICATIONS</h3>
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
                                <h3 className="text-xl font-bold mb-4 rajdhani">SEO & DISCOVERY</h3>
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
                                    <h3 className="text-3xl font-bold rajdhani">FULL-STACK DIGITAL DOMINATION</h3>
                                    <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                                        <span className="bg-white/20 px-4 py-2 rounded-full">PAID SEARCH</span>
                                        <span className="bg-white/20 px-4 py-2 rounded-full">PAID SOCIAL</span>
                                        <span className="bg-white/20 px-4 py-2 rounded-full">DISPLAY ADS</span>
                                        <span className="bg-white/20 px-4 py-2 rounded-full">LINEAR TV</span>
                                        <span className="bg-white/20 px-4 py-2 rounded-full">EMAIL/CRM</span>
                                        <span className="bg-white/20 px-4 py-2 rounded-full">INFLUENCER</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Google Partner */}
                <div className="mt-16 text-center py-10">
                    <div className="inline-block brutal-box glass-effect p-8 border-2 border-[#EBF998]">
                        <p className="text-2xl font-bold text-[#EBF998] uppercase rajdhani">🏆 GROW WITH GOOGLE PARTNER</p>
                        <p className="mt-2 text-sm text-white">One deserving brand gets a full-service partnership for free, yearly.</p>
                    </div>
                </div>

                {/* Subscribe CTA */}
                <section className="py-20 px-8 bg-gradient-to-b from-black to-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-black text-white p-12 text-center transform -skew-y-1">
                            <h3 className="text-4xl font-bold mb-4 text-white rajdhani">Good Vibes 74</h3>
                            <p className="text-xl mb-6 text-white">Curate Los Angeles with us</p>
                            <button className="px-8 py-4 bg-[#FF5BF1] text-white font-bold text-lg hover:bg-[#EBF998] hover:text-black transition">
                                SUBSCRIBE TO CURATIONSLA →
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BrutalistManPage;

    