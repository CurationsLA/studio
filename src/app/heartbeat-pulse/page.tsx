
'use client';

const HeartbeatPulsePage = () => {
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
                
                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                .heartbeat {
                    animation: heartbeat 2s ease-in-out infinite;
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
                
                .heart-shape {
                    position: relative;
                    display: inline-block;
                }
                
                .heart-shape::before {
                    content: '💖';
                    position: absolute;
                    top: -10px;
                    right: -20px;
                    font-size: 20px;
                    animation: heartbeat 1.5s ease-in-out infinite;
                }
            `}</style>
            <div className="bg-white text-black">
                {/* Floating Corner Badge */}
                <div className="fixed top-20 right-4 z-50 bg-[#FF5BF1] text-white px-4 py-2 rotate-12 shadow-xl">
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
                        {/* Main Title - Fixed Size */}
                        <div className="span-8 z-10">
                            <div className="transform rotate-1">
                                <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                                    <span className="block slide-in">CURATIONS</span>
                                    <span className="block text-outline slide-in" style={{animationDelay: '0.2s'}}>CURATIONS</span>
                                    <span className="block text-[#FF5BF1] slide-in" style={{animationDelay: '0.4s'}}>CURATIONS</span>
                                </h1>
                            </div>
                            
                            {/* Creative Motto Expression */}
                            <div className="mt-8 space-y-4">
                                <div className="text-2xl md:text-4xl font-bold leading-tight">
                                    <p className="mb-4">We <span className="heart-shape neon-pink text-white px-3 py-1 inline-block heartbeat">CURATE</span> the</p>
                                    <p className="mb-4"><span className="text-6xl">💖</span> <span className="neon-pink text-white px-4 py-2 inline-block transform -skew-x-12">HEART</span></p>
                                    <p className="mb-4">and the <span className="neon-blue text-white px-4 py-2 inline-block">📰 HEADLINES</span></p>
                                    <p>of <span className="neon-green text-black px-4 py-2 inline-block text-2xl md:text-5xl font-black">BRANDS</span></p>
                                </div>
                            </div>
                            
                            {/* Quick Stats */}
                            <div className="mt-8 flex gap-4 flex-wrap">
                                <div className="bg-black text-white p-3">
                                    <p className="text-2xl font-bold">500+</p>
                                    <p className="text-xs">Brands Elevated</p>
                                </div>
                                <div className="bg-[#6370E7] text-white p-3">
                                    <p className="text-2xl font-bold">50K+</p>
                                    <p className="text-xs">Newsletter Subs</p>
                                </div>
                                <div className="bg-[#EBF998] text-black p-3">
                                    <p className="text-2xl font-bold">8 Years</p>
                                    <p className="text-xs">LA Domination</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Side Panel */}
                        <div className="span-4 space-y-4 z-20">
                            <div className="bg-[#EBF998] p-6 transform hover:scale-105 transition">
                                <h3 className="font-bold text-xl mb-3">TODAY'S MENU 🍽️</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center"><span className="mr-2">🚀</span> Restaurant Launches</li>
                                    <li className="flex items-center"><span className="mr-2">🤖</span> AI Discovery</li>
                                    <li className="flex items-center"><span className="mr-2">📺</span> Media Buying</li>
                                    <li className="flex items-center"><span className="mr-2">✨</span> Influencer Collabs</li>
                                    <li className="flex items-center"><span className="mr-2">📰</span> Executive Branding</li>
                                </ul>
                            </div>
                            
                            <div className="border-4 border-[#6370E7] p-6 bg-white">
                                <p className="font-bold text-lg">HEARTBEAT STATUS:</p>
                                <p className="text-3xl mt-2 heartbeat">💗 STRONG</p>
                                <div className="mt-3 space-y-1">
                                    <div className="w-full bg-gray-200 h-2">
                                        <div className="bg-[#FF5BF1] h-2 w-full heartbeat"></div>
                                    </div>
                                    <p className="text-xs text-right">100% Love-Powered</p>
                                </div>
                            </div>
                            
                            <div className="bg-black text-white p-6">
                                <p className="text-sm font-bold mb-2">🏆 SPECIAL PROGRAM</p>
                                <p className="text-xs">One deserving brand receives full service FREE yearly through our Grow with Google Partnership</p>
                                <button className="mt-3 text-[#EBF998] text-xs underline">Apply Now →</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rest of the content remains the same */}
                <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
                    {/* Services Section */}
                    <section className="py-20 px-8">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-7xl font-bold mb-16 text-center text-neon-pink">
                                VIBES
                            </h2>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Service Cards */}
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-[#FF5BF1] transform rotate-3 group-hover:rotate-6 transition"></div>
                                    <div className="relative bg-black p-8 border-2 border-[#FF5BF1]">
                                        <span className="text-5xl">🍽️</span>
                                        <h3 className="text-2xl font-bold mt-4 text-[#FF5BF1]">RESTAURANT & BUSINESS</h3>
                                        <ul className="mt-4 space-y-2 text-sm">
                                            <li>• Grand Openings</li>
                                            <li>• Ghost Kitchens</li>
                                            <li>• Menu Marketing</li>
                                            <li>• Third-Party Apps</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-[#6370E7] transform -rotate-3 group-hover:-rotate-6 transition"></div>
                                    <div className="relative bg-black p-8 border-2 border-[#6370E7]">
                                        <span className="text-5xl">🤖</span>
                                        <h3 className="text-2xl font-bold mt-4 text-[#6370E7]">AI DISCOVERY</h3>
                                        <ul className="mt-4 space-y-2 text-sm">
                                            <li>• Citation + Sourcing</li>
                                            <li>• Prompt Engineering</li>
                                            <li>• Tech Stack</li>
                                            <li>• Team Workshops</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-[#EBF998] transform rotate-3 group-hover:rotate-6 transition"></div>
                                    <div className="relative bg-black p-8 border-2 border-[#EBF998]">
                                        <span className="text-5xl">📺</span>
                                        <h3 className="text-2xl font-bold mt-4 text-[#EBF998]">MEDIA BUYING</h3>
                                        <ul className="mt-4 space-y-2 text-sm">
                                            <li>• Netflix Placement</li>
                                            <li>• Podcast Ads</li>
                                            <li>• Linear TV</li>
                                            <li>• Social Media</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] transform -rotate-3 group-hover:-rotate-6 transition"></div>
                                    <div className="relative bg-black p-8 border-2 border-white">
                                        <span className="text-5xl">✨</span>
                                        <h3 className="text-2xl font-bold mt-4">CREATIVE COLLABS</h3>
                                        <ul className="mt-4 space-y-2 text-sm">
                                            <li>• Influencer Matching</li>
                                            <li>• UGC Campaigns</li>
                                            <li>• Content Creation</li>
                                            <li>• Social Strategy</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-white transform rotate-3 group-hover:rotate-6 transition"></div>
                                    <div className="relative bg-black p-8 border-2 border-white">
                                        <span className="text-5xl">📰</span>
                                        <h3 className="text-2xl font-bold mt-4">COMMUNICATIONS</h3>
                                        <ul className="mt-4 space-y-2 text-sm">
                                            <li>• Crisis Management</li>
                                            <li>• Executive Branding</li>
                                            <li>• PR Strategy</li>
                                            <li>• Media Relations</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#EBF998] to-[#FF5BF1] transform -rotate-3 group-hover:-rotate-6 transition"></div>
                                    <div className="relative bg-black p-8 border-2 border-[#EBF998]">
                                        <span className="text-5xl">🚀</span>
                                        <h3 className="text-2xl font-bold mt-4 text-[#EBF998]">FULL-STACK</h3>
                                        <ul className="mt-4 space-y-2 text-sm">
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
                                <div className="inline-block glass-effect p-8 border-2 border-[#EBF998]">
                                    <p className="text-2xl font-bold text-[#EBF998]">🏆 GROW WITH GOOGLE PARTNER</p>
                                    <p className="mt-2 text-sm">One deserving brand gets a full-service partnership for free, yearly.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CurationsLA Section */}
                    <section className="py-20 px-8 relative">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-6xl md:text-8xl font-bold">
                                    GOOD VIBES FROM
                                </h2>
                                <h2 className="text-6xl md:text-8xl font-bold">
                                    <span className="text-neon-pink">CURATIONS</span><span className="text-neon-blue">LA</span>
                                </h2>
                            </div>
                            
                            {/* Layered Post Cards */}
                            <div className="relative h-[700px] md:h-[500px]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl layer-1">
                                    <div className="bg-gray-800 p-8 opacity-50">
                                        <span className="text-xs">COMING NEXT WEEK</span>
                                        <h3 className="text-2xl font-bold mt-2">🎸 Summer Concert Series</h3>
                                    </div>
                                </div>
                                
                                <div className="absolute top-20 left-0 w-full md:w-1/2 layer-2">
                                    <div className="bg-[#FF8C00] p-8 glass-effect">
                                        <span className="text-sm font-bold">AUG 15, 2025</span>
                                        <h3 className="text-3xl font-bold mt-3 mb-4">🌮 FRIDAY AFTERNOON VIBES</h3>
                                        <p>Weekend essentials: rooftop parties, beach clubs, taco trucks, and everything in between.</p>
                                        <button className="mt-4 bg-white text-[#FF8C00] px-6 py-3 font-bold">EXPLORE WEEKEND →</button>
                                    </div>
                                </div>
                                
                                <div className="absolute top-40 right-0 w-full md:w-1/2 layer-3">
                                    <div className="bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] p-8 neon-glow-pink">
                                        <span className="text-sm font-bold bg-white text-black px-2 py-1 inline-block">AUG 17, 2025</span>
                                        <h3 className="text-3xl font-bold mt-3 mb-4">📅 EVENTS: WEEK OF MONDAY</h3>
                                        <p className="mb-4">Dave Matthews Band, Adam Sandler, Mt. Joy, The Frey, Nelly, and more.</p>
                                        <ul className="space-y-2 mb-6">
                                            <li>🎤 Comedy Shows</li>
                                            <li>🎸 Live Music</li>
                                            <li>🍷 Wine Tastings</li>
                                        </ul>
                                        <button className="bg-white text-[#FF5BF1] px-6 py-3 font-bold">FULL LINEUP →</button>
                                    </div>
                                </div>
                                
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl layer-2">
                                    <div className="bg-black border-2 border-[#EBF998] p-8">
                                        <span className="text-[#EBF998] text-sm font-bold">AUG 9, 2025</span>
                                        <h3 className="text-2xl font-bold mt-2 mb-3">📅 SUMMER HEAT EVENTS</h3>
                                        <p>Your guide to surviving LA summer in style</p>
                                        <button className="mt-4 text-[#EBF998] font-bold">DISCOVER →</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                {/* Subscribe CTA */}
                <section className="py-20 px-8 bg-gradient-to-b from-black to-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-black text-white p-12 text-center transform -skew-y-1">
                            <h3 className="text-4xl font-bold mb-4 text-white">RECEIVE GOOD VIBES IN YOUR INBOX</h3>
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

export default HeartbeatPulsePage;
