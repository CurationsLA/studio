'use client';

const CleanZineLayersPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
                    background: linear-gradient(180deg, 
                        #ffffff 0%, 
                        #f8f8f8 25%, 
                        #f0f0f0 50%, 
                        #e8e8e8 75%, 
                        #e0e0e0 100%);
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
                
                @media (max-width: 768px) {
                    .span-6, .span-4, .span-3, .span-8 { grid-column: span 12; }
                }
                
                .text-outline {
                    -webkit-text-stroke: 2px #FF5BF1;
                    -webkit-text-fill-color: transparent;
                }
                
                .diagonal-text {
                    transform: rotate(-2deg);
                }
                
                .glass-effect {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.9);
                }
                
                .layer-shadow {
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                }
                
                .neon-glow-pink {
                    box-shadow: 0 0 30px rgba(255, 91, 241, 0.3),
                                inset 0 0 30px rgba(255, 91, 241, 0.05);
                }
                
                .neon-glow-blue {
                    box-shadow: 0 0 30px rgba(99, 112, 231, 0.3),
                                inset 0 0 30px rgba(99, 112, 231, 0.05);
                }
                
                @keyframes slideUp {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                
                .slide-up {
                    animation: slideUp 0.8s ease-out;
                }
                
                .layer-1 { z-index: 10; }
                .layer-2 { z-index: 20; }
                .layer-3 { z-index: 30; }
            `}</style>
            <div>
                {/* Top Bar Zine Style */}
                <div className="fixed top-0 w-full z-40 bg-black text-white p-2">
                    <div className="flex justify-between items-center px-6">
                        <span className="text-sm">📍 Los Angeles | 🌐 Worldwide</span>
                        <span className="text-sm text-[#EBF998]">CURATIONS × CurationsLA</span>
                        <span className="text-sm">Since 2017</span>
                    </div>
                </div>

                {/* Hero Grid Layout - Zine Remix Style */}
                <section className="min-h-screen pt-16 px-4 md:px-8">
                    <div className="magazine-grid items-center min-h-[90vh]">
                        {/* Main Title */}
                        <div className="span-8">
                            <h1 className="text-6xl md:text-8xl font-bold diagonal-text">
                                <span className="block">CURATIONS</span>
                                <span className="block text-outline">CURATIONS</span>
                                <span className="block text-[#FF5BF1]">CURATIONS</span>
                            </h1>
                            <div className="mt-8 space-y-2">
                                <p className="text-2xl text-gray-700">We don't just market brands.</p>
                                <p className="text-3xl font-bold">We make them <span className="bg-[#FF5BF1] text-white px-2">UNFORGETTABLE</span></p>
                            </div>
                        </div>
                        
                        {/* Side Panel */}
                        <div className="span-4 space-y-4">
                            <div className="glass-effect p-6 layer-shadow">
                                <h3 className="font-bold text-xl mb-2">TODAY'S VIBE</h3>
                                <p>Breaking barriers in:</p>
                                <ul className="mt-2 text-sm">
                                    <li>→ Restaurant Launches</li>
                                    <li>→ AI Discovery</li>
                                    <li>→ Media Buying</li>
                                    <li>→ Influencer Collabs</li>
                                </ul>
                            </div>
                            
                            <div className="border-4 border-[#6370E7] p-6 bg-white">
                                <p className="font-bold">BESTIE STATUS:</p>
                                <p className="text-2xl mt-2">🚀 READY TO LAUNCH</p>
                            </div>
                            
                            <div className="bg-black text-white p-6">
                                <p className="text-sm">Grow with Google Partner</p>
                                <p className="text-xs mt-2">One brand. Full service. Free. Yearly.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Depth Grid - Layered Style */}
                <section className="py-20 px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-6xl md:text-7xl font-bold mb-16 text-gray-800">
                            SERVICES IN <span className="text-[#FF5BF1]">LAYERS</span>
                        </h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service Cards with Depth */}
                            <div className="group relative slide-up">
                                <div className="absolute inset-0 bg-[#FF5BF1] transform rotate-3 group-hover:rotate-6 transition opacity-20"></div>
                                <div className="relative glass-effect p-8 border-2 border-[#FF5BF1]">
                                    <span className="text-5xl">🍽️</span>
                                    <h3 className="text-2xl font-bold mt-4 text-[#FF5BF1]">RESTAURANT & BUSINESS</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                        <li>• Grand Openings</li>
                                        <li>• Ghost Kitchens</li>
                                        <li>• Menu Marketing</li>
                                        <li>• Third-Party Apps</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative slide-up" style={{animationDelay: '0.1s'}}>
                                <div className="absolute inset-0 bg-[#6370E7] transform -rotate-3 group-hover:-rotate-6 transition opacity-20"></div>
                                <div className="relative glass-effect p-8 border-2 border-[#6370E7]">
                                    <span className="text-5xl">🤖</span>
                                    <h3 className="text-2xl font-bold mt-4 text-[#6370E7]">AI DISCOVERY</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                        <li>• "Vibe Coding"</li>
                                        <li>• Prompt Engineering</li>
                                        <li>• Tech Stack</li>
                                        <li>• Team Workshops</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative slide-up" style={{animationDelay: '0.2s'}}>
                                <div className="absolute inset-0 bg-[#EBF998] transform rotate-3 group-hover:rotate-6 transition opacity-30"></div>
                                <div className="relative glass-effect p-8 border-2 border-gray-400">
                                    <span className="text-5xl">📺</span>
                                    <h3 className="text-2xl font-bold mt-4 text-gray-800">MEDIA BUYING</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                        <li>• Netflix Placement</li>
                                        <li>• Podcast Ads</li>
                                        <li>• Linear TV</li>
                                        <li>• Social Media</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative slide-up" style={{animationDelay: '0.3s'}}>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] transform -rotate-3 group-hover:-rotate-6 transition opacity-20"></div>
                                <div className="relative glass-effect p-8 border-2 border-gray-300">
                                    <span className="text-5xl">✨</span>
                                    <h3 className="text-2xl font-bold mt-4 text-gray-800">CREATIVE COLLABS</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                        <li>• Influencer Matching</li>
                                        <li>• UGC Campaigns</li>
                                        <li>• Content Creation</li>
                                        <li>• Social Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative slide-up" style={{animationDelay: '0.4s'}}>
                                <div className="absolute inset-0 bg-gray-800 transform rotate-3 group-hover:rotate-6 transition opacity-20"></div>
                                <div className="relative glass-effect p-8 border-2 border-gray-400">
                                    <span className="text-5xl">📰</span>
                                    <h3 className="text-2xl font-bold mt-4 text-gray-800">COMMUNICATIONS</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                        <li>• Crisis Management</li>
                                        <li>• Executive Branding</li>
                                        <li>• PR Strategy</li>
                                        <li>• Media Relations</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative slide-up" style={{animationDelay: '0.5s'}}>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#EBF998] to-[#FF5BF1] transform -rotate-3 group-hover:-rotate-6 transition opacity-20"></div>
                                <div className="relative glass-effect p-8 border-2 border-gray-300">
                                    <span className="text-5xl">🚀</span>
                                    <h3 className="text-2xl font-bold mt-4 text-gray-800">FULL-STACK</h3>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                        <li>• SEO & SEM</li>
                                        <li>• Email/CRM</li>
                                        <li>• Analytics</li>
                                        <li>• Conversion</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Layered Cards */}
                <section className="py-20 px-8 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-7xl font-bold text-gray-800">
                                GOOD VIBES FROM
                            </h2>
                            <h2 className="text-5xl md:text-7xl font-bold">
                                <span className="text-[#FF5BF1]">CURATIONS</span><span className="text-[#6370E7]">LA</span>
                            </h2>
                        </div>
                        
                        {/* Layered Post Cards */}
                        <div className="relative h-[700px] md:h-[500px]">
                            {/* Back Layer */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl layer-1">
                                <div className="glass-effect p-8 layer-shadow opacity-70">
                                    <span className="text-xs text-gray-600">COMING NEXT WEEK</span>
                                    <h3 className="text-2xl font-bold mt-2 text-gray-700">🎸 Summer Concert Series</h3>
                                    <p className="text-gray-600 mt-2">The biggest names in music hit LA stages</p>
                                </div>
                            </div>
                            
                            {/* Middle Layer */}
                            <div className="absolute top-20 left-0 w-full md:w-1/2 layer-2">
                                <div className="bg-[#FF8C00] p-8 glass-effect neon-glow-pink">
                                    <span className="text-sm font-bold text-white">AUG 15, 2025</span>
                                    <h3 className="text-3xl font-bold mt-3 mb-4 text-white">🌮 FRIDAY AFTERNOON VIBES</h3>
                                    <p className="text-white/90">Weekend essentials: rooftop parties, beach clubs, taco trucks, and everything in between.</p>
                                    <button className="mt-4 bg-white text-[#FF8C00] px-6 py-3 font-bold">EXPLORE WEEKEND →</button>
                                </div>
                            </div>
                            
                            {/* Front Layer */}
                            <div className="absolute top-40 right-0 w-full md:w-1/2 layer-3">
                                <div className="bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] p-8 neon-glow-blue text-white">
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
                            
                            {/* Bottom Layer */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl layer-2">
                                <div className="glass-effect border-2 border-[#EBF998] p-8">
                                    <span className="text-gray-600 text-sm font-bold">AUG 9, 2025</span>
                                    <h3 className="text-2xl font-bold mt-2 mb-3 text-gray-800">📅 SUMMER HEAT EVENTS</h3>
                                    <p className="text-gray-600">Your guide to surviving LA summer in style</p>
                                    <button className="mt-4 text-gray-800 font-bold border-b-2 border-gray-800">DISCOVER →</button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Subscribe CTA */}
                        <div className="mt-20 text-center">
                            <div className="inline-block glass-effect p-12 neon-glow-blue">
                                <h3 className="text-4xl font-bold mb-4 text-gray-800">JOIN 50,000+ ANGELENOS</h3>
                                <p className="text-xl mb-6 text-gray-600">Get the inside scoop on LA culture, weekly.</p>
                                <button className="px-8 py-4 bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] text-white font-bold text-lg">
                                    SUBSCRIBE TO CURATIONSLA →
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-4 md:px-8 bg-gray-100 border-t">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-2xl font-bold text-gray-800">[CURATIONS LOGO]</div>
                                <p className="text-sm mt-2 text-gray-600">Est. 2017</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-gray-800">Services</p>
                                <ul className="text-sm space-y-1 text-gray-600">
                                    <li>Agency</li>
                                    <li>Media</li>
                                    <li>Digital</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-gray-800">Connect</p>
                                <p className="text-sm text-gray-600">hello@curations.org</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-gray-800">Partner</p>
                                <p className="text-sm text-gray-600">Grow with Google ✓</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default CleanZineLayersPage;
