
'use client';

const MinimalBrutalistPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
                
                body {
                    font-family: 'JetBrains Mono', monospace;
                }
                
                .neon-pink {
                    background: #FF0080;
                    box-shadow: 0 0 30px rgba(255, 0, 128, 0.5);
                }
                
                .neon-blue {
                    background: #0080FF;
                    box-shadow: 0 0 30px rgba(0, 128, 255, 0.5);
                }
                
                .neon-green {
                    background: #00FF80;
                    box-shadow: 0 0 30px rgba(0, 255, 128, 0.3);
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
                    -webkit-text-stroke: 3px #FF0080;
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
                
                .layer-1 { z-index: 10; }
                .layer-2 { z-index: 20; }
                .layer-3 { z-index: 30; }
                
                .glass-effect {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .neon-glow-pink {
                    box-shadow: 0 0 40px rgba(255, 0, 128, 0.6),
                                inset 0 0 40px rgba(255, 0, 128, 0.1);
                }
                
                .text-neon-pink {
                    color: #FF0080;
                    text-shadow: 0 0 20px rgba(255, 0, 128, 0.8);
                }
                
                .text-neon-blue {
                    color: #0080FF;
                    text-shadow: 0 0 20px rgba(0, 128, 255, 0.8);
                }
                
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                }
            `}</style>
            <div className="bg-white text-black">
                {/* Floating Corner Badge */}
                <div className="fixed top-20 right-4 z-50 bg-[#FF0080] text-white px-4 py-2 rotate-12 shadow-xl brutal-box">
                    <span className="text-xs font-bold">V2 DROPPING 🔥</span>
                </div>

                {/* Top Bar */}
                <div className="fixed top-0 w-full z-40 bg-black text-white">
                    <div className="flex justify-between items-center px-6 py-2 text-xs">
                        <span>📍 Los Angeles | 🌐 Worldwide</span>
                        <span className="hidden md:block">CURATIONS × CurationsLA | Since 2017</span>
                        <span>✨ Grow with Google Partner</span>
                    </div>
                    <div className="bg-[#00FF80] text-black px-6 py-1 text-center">
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
                            <div>
                                <h1 className="text-4xl md:text-6xl font-black leading-tight uppercase">
                                    <span className="block slide-in">CURATIONS</span>
                                    <span className="block text-outline slide-in" style={{animationDelay: '0.2s'}}>CURATIONS</span>
                                    <span className="block text-[#FF0080] slide-in" style={{animationDelay: '0.4s'}}>CURATIONS</span>
                                </h1>
                            </div>
                            
                            {/* Brutalist Motto Expression */}
                            <div className="mt-12 space-y-6">
                                <div className="brutal-box bg-black text-white p-6 pulse-brutal">
                                    <h2 className="text-2xl md:text-3xl font-black uppercase text-center">
                                        WE_CURATE_THE
                                    </h2>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="brutal-box bg-[#FF0080] text-white p-8 pulse-brutal" style={{animationDelay: '0.3s'}}>
                                        <h3 className="text-3xl md:text-4xl font-black text-center uppercase">
                                            [HEART]
                                        </h3>
                                        <div className="mt-2 text-center text-sm font-bold">
                                            EMOTIONAL_CONNECTION
                                        </div>
                                    </div>
                                    
                                    <div className="brutal-box bg-[#0080FF] text-white p-8 pulse-brutal" style={{animationDelay: '0.6s'}}>
                                        <h3 className="text-3xl md:text-4xl font-black text-center uppercase">
                                            [HEADLINES]
                                        </h3>
                                        <div className="mt-2 text-center text-sm font-bold">
                                            MEDIA_PRESENCE
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="brutal-box bg-[#00FF80] text-black p-6 pulse-brutal" style={{animationDelay: '0.9s'}}>
                                    <h2 className="text-3xl md:text-4xl font-black uppercase text-center">
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
                                <div className="brutal-box bg-[#0080FF] text-white p-3">
                                    <p className="text-2xl font-black">50K+</p>
                                    <p className="text-xs uppercase">Subs</p>
                                </div>
                                <div className="brutal-box bg-[#00FF80] text-black p-3">
                                    <p className="text-2xl font-black">8 YRS</p>
                                    <p className="text-xs uppercase">LA</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Side Panel */}
                        <div className="span-4 space-y-4 z-20">
                            <div className="brutal-box bg-[#00FF80] text-black p-6 hover:scale-105 transition">
                                <h3 className="font-black text-xl mb-3 uppercase">MENU.EXE</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center font-bold"><span className="mr-2">[01]</span> Restaurant Launches</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[02]</span> AI Discovery</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[03]</span> Media Buying</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[04]</span> Influencer Collabs</li>
                                    <li className="flex items-center font-bold"><span className="mr-2">[05]</span> Executive Branding</li>
                                </ul>
                            </div>
                            
                            <div className="brutal-box bg-white p-6">
                                <p className="font-black text-lg uppercase">SYS_STATUS:</p>
                                <p className="text-3xl mt-2 pulse-brutal font-black">[ACTIVE]</p>
                                <div className="mt-3 space-y-1">
                                    <div className="w-full bg-gray-300 h-4 brutal-box">
                                        <div className="bg-[#0080FF] h-4 w-full pulse-brutal"></div>
                                    </div>
                                    <p className="text-xs text-right font-bold">100% OPERATIONAL</p>
                                </div>
                            </div>
                            
                            <div className="brutal-box bg-black text-white p-6">
                                <p className="text-sm font-black mb-2 uppercase">SPECIAL_PROGRAM.EXE</p>
                                <p className="text-xs font-bold">One deserving brand receives full service FREE yearly through our Grow with Google Partnership</p>
                                <button className="mt-3 text-[#00FF80] text-xs font-black uppercase underline">EXECUTE &gt;&gt;&gt;</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <div className="bg-white">
                    <section className="py-20 px-8">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-7xl font-black mb-16 text-center uppercase">
                                [VIBES]
                            </h2>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Service Cards */}
                                <div className="brutal-box bg-white hover:bg-gray-100 transition p-8">
                                    <span className="text-5xl">🍽️</span>
                                    <h3 className="text-xl font-black mt-4 uppercase">RESTAURANT_SYS</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• Grand_Openings</li>
                                        <li>• Ghost_Kitchens</li>
                                        <li>• Menu_Marketing</li>
                                        <li>• Third_Party_Apps</li>
                                    </ul>
                                </div>
                                
                                <div className="brutal-box bg-white hover:bg-gray-100 transition p-8">
                                    <span className="text-5xl">🤖</span>
                                    <h3 className="text-xl font-black mt-4 uppercase">AI_DISCOVERY</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• Citation_Engine</li>
                                        <li>• Prompt_Engineering</li>
                                        <li>• Tech_Stack</li>
                                        <li>• Team_Workshops</li>
                                    </ul>
                                </div>
                                
                                <div className="brutal-box bg-white hover:bg-gray-100 transition p-8">
                                    <span className="text-5xl">📺</span>
                                    <h3 className="text-xl font-black mt-4 uppercase">MEDIA_BUY</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• Netflix_Placement</li>
                                        <li>• Podcast_Ads</li>
                                        <li>• Linear_TV</li>
                                        <li>• Social_Media</li>
                                    </ul>
                                </div>
                                
                                <div className="brutal-box bg-white hover:bg-gray-100 transition p-8">
                                    <span className="text-5xl">✨</span>
                                    <h3 className="text-xl font-black mt-4 uppercase">CREATIVE_COLLAB</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• Influencer_Match</li>
                                        <li>• UGC_Campaigns</li>
                                        <li>• Content_Creation</li>
                                        <li>• Social_Strategy</li>
                                    </ul>
                                </div>
                                
                                <div className="brutal-box bg-white hover:bg-gray-100 transition p-8">
                                    <span className="text-5xl">📰</span>
                                    <h3 className="text-xl font-black mt-4 uppercase">COMMUNICATIONS</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• Crisis_Management</li>
                                        <li>• Executive_Branding</li>
                                        <li>• PR_Strategy</li>
                                        <li>• Media_Relations</li>
                                    </ul>
                                </div>
                                
                                <div className="brutal-box bg-white hover:bg-gray-100 transition p-8">
                                    <span className="text-5xl">🚀</span>
                                    <h3 className="text-xl font-black mt-4 uppercase">FULL_STACK</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• SEO_&_SEM</li>
                                        <li>• Email/CRM</li>
                                        <li>• Analytics</li>
                                        <li>• Conversion</li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/* Google Partner */}
                            <div className="mt-16 text-center">
                                <div className="inline-block brutal-box bg-black text-white p-8">
                                    <p className="text-2xl font-black text-[#00FF80] uppercase">GOOGLE_PARTNER.EXE</p>
                                    <p className="mt-2 text-sm font-bold">One deserving brand gets a full-service partnership for free, yearly.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                {/* Subscribe CTA */}
                <section className="py-20 px-8 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="brutal-box bg-white text-black p-12 text-center">
                            <h3 className="text-4xl font-black mb-4 uppercase">INBOX_SYNC.EXE</h3>
                            <p className="text-xl mb-6 font-bold">Curate Los Angeles with us</p>
                            <button className="brutal-box px-8 py-4 bg-[#FF0080] text-white font-black text-lg uppercase hover:bg-[#00FF80] hover:text-black transition">
                                SUBSCRIBE_NOW &gt;&gt;&gt;
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MinimalBrutalistPage;
