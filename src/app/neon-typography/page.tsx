'use client';

const NeonTypographyPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
                }
                
                .neon-pink {
                    background: #FF5BF1;
                    box-shadow: 0 0 30px rgba(255, 91, 241, 0.5);
                }
                
                .neon-blue {
                    background: #6370E7;
                    box-shadow: 0 0 30px rgba(99, 112, 231, 0.5);
                }
                
                .neon-green {
                    background: #EBF998;
                    box-shadow: 0 0 30px rgba(235, 249, 152, 0.3);
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
                    -webkit-text-stroke: 2px #FF5BF1;
                    -webkit-text-fill-color: transparent;
                }
                
                @keyframes neon-flicker {
                    0%, 100% { 
                        text-shadow: 
                            0 0 5px #FF5BF1,
                            0 0 10px #FF5BF1,
                            0 0 20px #FF5BF1,
                            0 0 40px #FF5BF1;
                    }
                    50% { 
                        text-shadow: 
                            0 0 2px #FF5BF1,
                            0 0 5px #FF5BF1,
                            0 0 8px #FF5BF1,
                            0 0 12px #FF5BF1;
                    }
                }
                
                .neon-flicker {
                    animation: neon-flicker 2s ease-in-out infinite;
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
                    box-shadow: 0 0 40px rgba(255, 91, 241, 0.6),
                                inset 0 0 40px rgba(255, 91, 241, 0.1);
                }
                
                .text-neon-pink {
                    color: #FF5BF1;
                    text-shadow: 0 0 20px rgba(255, 91, 241, 0.8);
                }
                
                .text-neon-blue {
                    color: #6370E7;
                    text-shadow: 0 0 20px rgba(99, 112, 231, 0.8);
                }
                
                .text-neon-green {
                    color: #EBF998;
                    text-shadow: 0 0 20px rgba(235, 249, 152, 0.8);
                }
                
                .cyberpunk-border {
                    position: relative;
                    overflow: hidden;
                }
                
                .cyberpunk-border::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 91, 241, 0.8), transparent);
                    animation: slide 3s infinite;
                }
                
                @keyframes slide {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
            `}</style>
            <div className="bg-black text-white">
                {/* Floating Corner Badge */}
                <div className="fixed top-20 right-4 z-50 bg-[#FF5BF1] text-white px-4 py-2 rotate-12 shadow-xl neon-flicker">
                    <span className="text-xs font-bold">V2 DROPPING 🔥</span>
                </div>

                {/* Top Bar */}
                <div className="fixed top-0 w-full z-40 bg-black text-white border-b border-[#FF5BF1]">
                    <div className="flex justify-between items-center px-6 py-2 text-xs">
                        <span className="text-neon-green">📍 Los Angeles | 🌐 Worldwide</span>
                        <span className="hidden md:block text-neon-pink">CURATIONS × CurationsLA | Since 2017</span>
                        <span className="text-neon-blue">✨ Grow with Google Partner</span>
                    </div>
                    <div className="bg-[#EBF998] text-black px-6 py-1 text-center">
                        <marquee className="text-sm font-bold">
                            BREAKING: NEW CLIENTS GET 20% OFF FIRST CAMPAIGN • AI DISCOVERY WORKSHOPS NOW BOOKING • CURATIONSLA REACHES 50K SUBSCRIBERS • WE'RE HIRING CREATIVE DIRECTORS 
                        </marquee>
                    </div>
                </div>

                {/* Hero Grid Layout */}
                <section id="home" className="min-h-screen pt-20 px-4 md:px-8 bg-black">
                    <div className="magazine-grid items-center min-h-screen">
                        {/* Main Title - Fixed Size */}
                        <div className="span-8 z-10">
                            <div className="transform rotate-1">
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                                    <span className="block slide-in text-neon-pink neon-flicker">CURATIONS</span>
                                    <span className="block text-outline slide-in" style={{animationDelay: '0.2s'}}>CURATIONS</span>
                                    <span className="block text-neon-blue slide-in" style={{animationDelay: '0.4s'}}>CURATIONS</span>
                                </h1>
                            </div>
                            
                            {/* Creative Motto Expression - Cyberpunk Style */}
                            <div className="space-y-6">
                                <div className="cyberpunk-border bg-gradient-to-r from-black via-gray-900 to-black p-6 border border-[#FF5BF1]">
                                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                                        <span className="text-neon-pink">WE</span> 
                                        <span className="text-neon-green neon-flicker">CURATE</span> 
                                        <span className="text-white">THE</span>
                                    </h2>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-[#FF5BF1] p-6 text-center transform -skew-x-12">
                                        <span className="text-5xl">💖</span>
                                        <h3 className="text-2xl md:text-3xl font-black text-white">HEART</h3>
                                    </div>
                                    <div className="bg-[#6370E7] p-6 text-center transform skew-x-12">
                                        <span className="text-5xl">📰</span>
                                        <h3 className="text-2xl md:text-3xl font-black text-white">HEADLINES</h3>
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <h2 className="text-3xl md:text-4xl font-bold">
                                        <span className="text-white">OF</span>
                                        <span className="bg-[#EBF998] text-black px-6 py-2 inline-block mx-2 text-neon-green font-black">BRANDS</span>
                                    </h2>
                                </div>
                            </div>
                            
                            {/* Quick Stats */}
                            <div className="mt-8 flex gap-4 flex-wrap">
                                <div className="bg-gray-900 border border-[#FF5BF1] text-white p-3">
                                    <p className="text-2xl font-bold text-neon-pink">500+</p>
                                    <p className="text-xs">Brands Elevated</p>
                                </div>
                                <div className="bg-gray-900 border border-[#6370E7] text-white p-3">
                                    <p className="text-2xl font-bold text-neon-blue">50K+</p>
                                    <p className="text-xs">Newsletter Subs</p>
                                </div>
                                <div className="bg-gray-900 border border-[#EBF998] text-white p-3">
                                    <p className="text-2xl font-bold text-neon-green">8 Years</p>
                                    <p className="text-xs">LA Domination</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Side Panel */}
                        <div className="span-4 space-y-4 z-20">
                            <div className="bg-gray-900 border border-[#EBF998] p-6 transform hover:scale-105 transition">
                                <h3 className="font-bold text-xl mb-3 text-neon-green">TODAY'S MENU 🍽️</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-white"><span className="mr-2">🚀</span> Restaurant Launches</li>
                                    <li className="flex items-center text-white"><span className="mr-2">🤖</span> AI Discovery</li>
                                    <li className="flex items-center text-white"><span className="mr-2">📺</span> Media Buying</li>
                                    <li className="flex items-center text-white"><span className="mr-2">✨</span> Influencer Collabs</li>
                                    <li className="flex items-center text-white"><span className="mr-2">📰</span> Executive Branding</li>
                                </ul>
                            </div>
                            
                            <div className="border-4 border-[#6370E7] p-6 bg-gray-900">
                                <p className="font-bold text-lg text-white">NEON STATUS:</p>
                                <p className="text-3xl mt-2 text-neon-blue neon-flicker">⚡ CHARGED</p>
                                <div className="mt-3 space-y-1">
                                    <div className="w-full bg-gray-700 h-2">
                                        <div className="bg-[#6370E7] h-2 w-full neon-flicker"></div>
                                    </div>
                                    <p className="text-xs text-right text-white">100% Electric</p>
                                </div>
                            </div>
                            
                            <div className="bg-black border border-[#FF5BF1] text-white p-6">
                                <p className="text-sm font-bold mb-2 text-neon-pink">🏆 SPECIAL PROGRAM</p>
                                <p className="text-xs">One deserving brand receives full service FREE yearly through our Grow with Google Partnership</p>
                                <button className="mt-3 text-[#EBF998] text-xs underline hover:text-neon-green">Apply Now →</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 px-8 bg-gradient-to-b from-black via-gray-900 to-black">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-7xl font-bold mb-16 text-center text-neon-pink neon-flicker">
                            VIBES
                        </h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service Cards */}
                            <div className="group relative cyberpunk-border">
                                <div className="bg-gray-900 border border-[#FF5BF1] p-8 hover:bg-gray-800 transition">
                                    <span className="text-5xl">🍽️</span>
                                    <h3 className="text-2xl font-bold mt-4 text-neon-pink">RESTAURANT & BUSINESS</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-white">
                                        <li>• Grand Openings</li>
                                        <li>• Ghost Kitchens</li>
                                        <li>• Menu Marketing</li>
                                        <li>• Third-Party Apps</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative cyberpunk-border">
                                <div className="bg-gray-900 border border-[#6370E7] p-8 hover:bg-gray-800 transition">
                                    <span className="text-5xl">🤖</span>
                                    <h3 className="text-2xl font-bold mt-4 text-neon-blue">AI DISCOVERY</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-white">
                                        <li>• Citation + Sourcing</li>
                                        <li>• Prompt Engineering</li>
                                        <li>• Tech Stack</li>
                                        <li>• Team Workshops</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative cyberpunk-border">
                                <div className="bg-gray-900 border border-[#EBF998] p-8 hover:bg-gray-800 transition">
                                    <span className="text-5xl">📺</span>
                                    <h3 className="text-2xl font-bold mt-4 text-neon-green">MEDIA BUYING</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-white">
                                        <li>• Netflix Placement</li>
                                        <li>• Podcast Ads</li>
                                        <li>• Linear TV</li>
                                        <li>• Social Media</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative cyberpunk-border">
                                <div className="bg-gray-900 border border-white p-8 hover:bg-gray-800 transition">
                                    <span className="text-5xl">✨</span>
                                    <h3 className="text-2xl font-bold mt-4 text-white">CREATIVE COLLABS</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-white">
                                        <li>• Influencer Matching</li>
                                        <li>• UGC Campaigns</li>
                                        <li>• Content Creation</li>
                                        <li>• Social Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative cyberpunk-border">
                                <div className="bg-gray-900 border border-white p-8 hover:bg-gray-800 transition">
                                    <span className="text-5xl">📰</span>
                                    <h3 className="text-2xl font-bold mt-4 text-white">COMMUNICATIONS</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-white">
                                        <li>• Crisis Management</li>
                                        <li>• Executive Branding</li>
                                        <li>• PR Strategy</li>
                                        <li>• Media Relations</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative cyberpunk-border">
                                <div className="bg-gray-900 border border-[#EBF998] p-8 hover:bg-gray-800 transition">
                                    <span className="text-5xl">🚀</span>
                                    <h3 className="text-2xl font-bold mt-4 text-neon-green">FULL-STACK</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-white">
                                        <li>• SEO & SEM</li>
                                        <li>• Email/CRM</li>
                                        <li>• Analytics</li>
                                        <li>• Conversion</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        {/* Google Partner */}
                        <div className="mt-16 text-center">
                            <div className="inline-block glass-effect p-8 border-2 border-[#EBF998] cyberpunk-border">
                                <p className="text-2xl font-bold text-neon-green neon-flicker">🏆 GROW WITH GOOGLE PARTNER</p>
                                <p className="mt-2 text-sm text-white">One deserving brand gets a full-service partnership for free, yearly.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Section */}
                <section className="py-20 px-8 relative bg-gradient-to-b from-gray-900 to-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-6xl md:text-8xl font-bold">
                                <span className="text-white">GOOD VIBES FROM</span>
                            </h2>
                            <h2 className="text-6xl md:text-8xl font-bold">
                                <span className="text-neon-pink neon-flicker">CURATIONS</span><span className="text-neon-blue">LA</span>
                            </h2>
                        </div>
                        
                        {/* Layered Post Cards */}
                        <div className="relative h-[700px] md:h-[500px]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl layer-1">
                                <div className="bg-gray-800 border border-gray-600 p-8 opacity-50">
                                    <span className="text-xs text-gray-400">COMING NEXT WEEK</span>
                                    <h3 className="text-2xl font-bold mt-2 text-white">🎸 Summer Concert Series</h3>
                                </div>
                            </div>
                            
                            <div className="absolute top-20 left-0 w-full md:w-1/2 layer-2">
                                <div className="bg-[#FF8C00] border border-[#FF8C00] p-8 glass-effect">
                                    <span className="text-sm font-bold text-black">AUG 15, 2025</span>
                                    <h3 className="text-3xl font-bold mt-3 mb-4 text-black">🌮 FRIDAY AFTERNOON VIBES</h3>
                                    <p className="text-black">Weekend essentials: rooftop parties, beach clubs, taco trucks, and everything in between.</p>
                                    <button className="mt-4 bg-white text-[#FF8C00] px-6 py-3 font-bold border border-white">EXPLORE WEEKEND →</button>
                                </div>
                            </div>
                            
                            <div className="absolute top-40 right-0 w-full md:w-1/2 layer-3">
                                <div className="bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] border border-[#FF5BF1] p-8 neon-glow-pink">
                                    <span className="text-sm font-bold bg-white text-black px-2 py-1 inline-block">AUG 17, 2025</span>
                                    <h3 className="text-3xl font-bold mt-3 mb-4 text-white">📅 EVENTS: WEEK OF MONDAY</h3>
                                    <p className="mb-4 text-white">Dave Matthews Band, Adam Sandler, Mt. Joy, The Frey, Nelly, and more.</p>
                                    <ul className="space-y-2 mb-6 text-white">
                                        <li>🎤 Comedy Shows</li>
                                        <li>🎸 Live Music</li>
                                        <li>🍷 Wine Tastings</li>
                                    </ul>
                                    <button className="bg-white text-[#FF5BF1] px-6 py-3 font-bold border border-white">FULL LINEUP →</button>
                                </div>
                            </div>
                            
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl layer-2">
                                <div className="bg-black border-2 border-[#EBF998] p-8">
                                    <span className="text-neon-green text-sm font-bold">AUG 9, 2025</span>
                                    <h3 className="text-2xl font-bold mt-2 mb-3 text-white">📅 SUMMER HEAT EVENTS</h3>
                                    <p className="text-white">Your guide to surviving LA summer in style</p>
                                    <button className="mt-4 text-neon-green font-bold border border-[#EBF998] px-4 py-2">DISCOVER →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Subscribe CTA */}
                <section className="py-20 px-8 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-gray-900 border border-[#FF5BF1] text-white p-12 text-center transform -skew-y-1 cyberpunk-border">
                            <h3 className="text-4xl font-bold mb-4 text-neon-pink neon-flicker">RECEIVE GOOD VIBES IN YOUR INBOX</h3>
                            <p className="text-xl mb-6 text-white">Curate Los Angeles with us</p>
                            <button className="px-8 py-4 bg-[#FF5BF1] text-white font-bold text-lg border border-[#FF5BF1] hover:bg-[#EBF998] hover:text-black hover:border-[#EBF998] transition">
                                SUBSCRIBE TO CURATIONSLA →
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default NeonTypographyPage;
