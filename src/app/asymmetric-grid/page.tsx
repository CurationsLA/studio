'use client';

const AsymmetricGridPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
                }
                
                .skew-left {
                    transform: skewY(-2deg);
                }
                
                .skew-right {
                    transform: skewY(2deg);
                }
                
                .neon-border {
                    border: 3px solid #FF5BF1;
                    box-shadow: 0 0 20px rgba(255, 91, 241, 0.5), inset 0 0 20px rgba(255, 91, 241, 0.1);
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                
                .float-animation {
                    animation: float 4s ease-in-out infinite;
                }
                
                .gradient-text {
                    background: linear-gradient(135deg, #FF5BF1, #6370E7, #EBF998);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>
            <div className="bg-black">
                {/* Floating Navigation Orbs */}
                <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 space-y-4">
                    <a href="#home" className="block w-12 h-12 bg-[#FF5BF1] rounded-full flex items-center justify-center text-white hover:scale-110 transition">
                        <span className="text-xs">01</span>
                    </a>
                    <a href="#services" className="block w-12 h-12 bg-[#6370E7] rounded-full flex items-center justify-center text-white hover:scale-110 transition">
                        <span className="text-xs">02</span>
                    </a>
                    <a href="#la" className="block w-12 h-12 bg-[#EBF998] rounded-full flex items-center justify-center text-black hover:scale-110 transition">
                        <span className="text-xs">03</span>
                    </a>
                </div>

                {/* Asymmetric Hero */}
                <section id="home" className="min-h-screen relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF5BF1] opacity-20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6370E7] opacity-20 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 px-8 py-20">
                        {/* Top Bar */}
                        <div className="flex justify-between items-start mb-20">
                            <div className="text-white">
                                <p className="text-sm text-[#EBF998]">EST. 2017</p>
                                <h3 className="text-2xl font-bold">[CURATIONS]</h3>
                            </div>
                            <div className="text-right text-white">
                                <p className="text-sm">LOS ANGELES</p>
                                <p className="text-sm text-[#FF5BF1]">WORLDWIDE</p>
                            </div>
                        </div>
                        
                        {/* Asymmetric Title Layout */}
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-7">
                                    <h1 className="text-7xl md:text-9xl font-bold text-white leading-none">
                                        <span className="block">WE</span>
                                        <span className="block text-[#FF5BF1]">CURATE</span>
                                        <span className="block gradient-text">BRANDS</span>
                                    </h1>
                                </div>
                                <div className="col-span-5 flex items-end">
                                    <div className="bg-[#EBF998] p-6 w-full skew-left">
                                        <h3 className="text-2xl font-bold mb-2">& THE NEWS</h3>
                                        <h3 className="text-2xl font-bold">THEY BREAK</h3>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating Stats */}
                            <div className="grid grid-cols-12 gap-4 mt-12">
                                <div className="col-span-3 col-start-2">
                                    <div className="bg-white p-4 float-animation">
                                        <p className="text-3xl font-bold text-[#FF5BF1]">500+</p>
                                        <p className="text-sm">Brands Elevated</p>
                                    </div>
                                </div>
                                <div className="col-span-3 col-start-6">
                                    <div className="bg-[#6370E7] text-white p-4 float-animation" style={{animationDelay: '1s'}}>
                                        <p className="text-3xl font-bold">50K+</p>
                                        <p className="text-sm">Newsletter Subs</p>
                                    </div>
                                </div>
                                <div className="col-span-3 col-start-10">
                                    <div className="bg-[#FF5BF1] text-white p-4 float-animation" style={{animationDelay: '2s'}}>
                                        <p className="text-3xl font-bold">100M+</p>
                                        <p className="text-sm">Impressions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Chaos Grid */}
                <section id="services" className="py-20 px-8 bg-white skew-right">
                    <div className="max-w-7xl mx-auto -skew-y-2">
                        <h2 className="text-7xl font-bold mb-12">SERVICES <span className="text-[#FF5BF1]">MENU</span></h2>
                        
                        {/* Asymmetric Service Grid */}
                        <div className="grid grid-cols-12 gap-4">
                            {/* Restaurant - Large */}
                            <div className="col-span-5 row-span-2 neon-border bg-black text-white p-8">
                                <span className="text-6xl">🍽️</span>
                                <h3 className="text-3xl font-bold mt-4 mb-4 text-[#FF5BF1]">RESTAURANT & BUSINESS</h3>
                                <p className="mb-4">Ghost kitchens to Michelin stars</p>
                                <ul className="space-y-2 text-sm">
                                    <li>→ Grand Openings</li>
                                    <li>→ Menu Marketing</li>
                                    <li>→ Third-Party Apps</li>
                                    <li>→ Vendor Relations</li>
                                </ul>
                            </div>
                            
                            {/* AI - Tall */}
                            <div className="col-span-4 row-span-3 bg-gradient-to-b from-[#6370E7] to-[#FF5BF1] text-white p-8">
                                <span className="text-6xl">🤖</span>
                                <h3 className="text-2xl font-bold mt-4 mb-4">AI DISCOVERY</h3>
                                <div className="bg-white/20 p-4 mb-4">
                                    <p className="font-bold">"Vibe Coding"</p>
                                    <p className="text-sm">The future, decoded</p>
                                </div>
                                <ul className="space-y-2 text-sm">
                                    <li>• Prompt Engineering</li>
                                    <li>• Tech Stack Discovery</li>
                                    <li>• AI SEO Citations</li>
                                    <li>• Team Workshops</li>
                                    <li>• Business Integration</li>
                                </ul>
                            </div>
                            
                            {/* Small Tiles */}
                            <div className="col-span-3 bg-[#EBF998] p-4">
                                <span className="text-3xl">📺</span>
                                <h4 className="font-bold">Media Buying</h4>
                            </div>
                            
                            <div className="col-span-3 bg-black text-white p-4">
                                <span className="text-3xl">✨</span>
                                <h4 className="font-bold text-[#EBF998]">Influencer</h4>
                            </div>
                            
                            <div className="col-span-5 bg-[#FF5BF1] text-white p-6">
                                <h3 className="text-2xl font-bold">FULL-STACK DIGITAL</h3>
                                <p className="text-sm mt-2">SEO • Paid Social • Email • CRM • Everything</p>
                            </div>
                            
                            <div className="col-span-3 border-4 border-[#6370E7] p-4">
                                <span className="text-3xl">📰</span>
                                <h4 className="font-bold">Comms</h4>
                                <p className="text-xs">Crisis? Handled.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Integration */}
                <section id="la" className="py-20 px-8 bg-gradient-to-b from-white to-[#EBF998]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-6xl md:text-8xl font-bold">
                                GOOD VIBES FROM
                            </h2>
                            <h2 className="text-6xl md:text-8xl font-bold gradient-text">
                                CURATIONSLA
                            </h2>
                        </div>
                        
                        {/* Asymmetric Post Layout */}
                        <div className="grid grid-cols-12 gap-4 mb-12">
                            {/* Large Feature Post */}
                            <div className="col-span-6 row-span-2">
                                <div className="bg-[#FF5BF1] h-full p-8 text-white transform -rotate-1 hover:rotate-0 transition">
                                    <span className="inline-block px-3 py-1 bg-white text-[#FF5BF1] text-xs font-bold mb-4">AUG 17, 2025</span>
                                    <h3 className="text-3xl font-bold mb-4">📅 EVENTS: WEEK OF MONDAY, AUGUST 18TH</h3>
                                    <p className="mb-6">Dave Matthews Band, Adam Sandler, Mt. Joy, The Fray, Nelly, and more. Your complete guide to LA's hottest week.</p>
                                    <ul className="space-y-2 mb-6">
                                        <li>🎸 Live Music</li>
                                        <li>🎭 Comedy Shows</li>
                                        <li>🍷 Wine Tastings</li>
                                        <li>🎨 Art Openings</li>
                                    </ul>
                                    <button className="bg-white text-[#FF5BF1] px-6 py-3 font-bold">FULL LINEUP →</button>
                                </div>
                            </div>
                            
                            {/* Medium Post */}
                            <div className="col-span-6">
                                <div className="bg-[#FF8C00] p-6 text-white transform rotate-1 hover:rotate-0 transition">
                                    <span className="text-xs font-bold">AUG 15, 2025</span>
                                    <h3 className="text-2xl font-bold mt-2 mb-3">🌮 FRIDAY AFTERNOON VIBES</h3>
                                    <p className="text-sm">Weekend essentials: rooftop parties, beach clubs, food trucks</p>
                                    <button className="mt-4 bg-white text-[#FF8C00] px-4 py-2 text-sm font-bold">EXPLORE →</button>
                                </div>
                            </div>
                            
                            {/* Small Post */}
                            <div className="col-span-6">
                                <div className="bg-black text-white p-6">
                                    <span className="text-xs text-[#EBF998]">AUG 9, 2025</span>
                                    <h3 className="text-xl font-bold mt-2 mb-3">📅 SUMMER HEAT EVENTS</h3>
                                    <p className="text-sm">Concerts, festivals, and everything in between</p>
                                    <button className="mt-4 text-[#EBF998] font-bold text-sm">VIEW ALL →</button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Subscribe CTA */}
                        <div className="bg-black text-white p-12 text-center transform -skew-y-1">
                            <h3 className="text-4xl font-bold mb-4">JOIN THE LA INSIDER CLUB</h3>
                            <p className="text-xl mb-6">50,000+ subscribers can't be wrong</p>
                            <button className="px-8 py-4 bg-[#FF5BF1] text-white font-bold text-lg hover:bg-[#EBF998] hover:text-black transition">
                                SUBSCRIBE TO CURATIONSLA →
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-16 px-8 bg-black text-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <h3 className="text-4xl font-bold gradient-text mb-8">[CURATIONS]</h3>
                        <p className="mb-8">Curating the heart of brands since 2017</p>
                        <div className="flex justify-center gap-8 text-2xl">
                            <span>📧</span>
                            <span>📱</span>
                            <span>💬</span>
                            <span>🌐</span>
                        </div>
                        <p className="mt-8 text-[#EBF998]">Grow with Google Partner ✓</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default AsymmetricGridPage;
