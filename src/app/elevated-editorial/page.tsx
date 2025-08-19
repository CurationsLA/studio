
'use client';

const ElevatedEditorialPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
                    background: linear-gradient(180deg, 
                        #ffffff 0%, 
                        #fbfbfb 15%,
                        #f7f7f7 30%, 
                        #f0f0f0 50%, 
                        #e8e8e8 70%,
                        #dedede 85%,
                        #d8d8d8 100%);
                }
                
                .magazine-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 1.25rem;
                }
                
                .span-6 { grid-column: span 6; }
                .span-4 { grid-column: span 4; }
                .span-8 { grid-column: span 8; }
                .span-12 { grid-column: span 12; }
                .span-3 { grid-column: span 3; }
                
                @media (max-width: 768px) {
                    .span-6, .span-4, .span-8, .span-3 { grid-column: span 12; }
                }
                
                .premium-glass {
                    background: rgba(255, 255, 255, 0.92);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 1);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
                }
                
                .text-outline-subtle {
                    -webkit-text-stroke: 1.5px #FF5BF1;
                    -webkit-text-fill-color: transparent;
                }
                
                .editorial-tilt {
                    transform: rotate(-1.5deg);
                }

                .diagonal-text {
                    transform: rotate(-3deg);
                }
                
                @keyframes fadeInUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .fade-in-up {
                    animation: fadeInUp 0.6s ease-out;
                }

                @keyframes slideIn {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
                
                .slide-in {
                    animation: slideIn 0.8s ease-out;
                }
                
                .layer-depth-1 {
                    z-index: 10;
                    transform: translateZ(0);
                }
                
                .layer-depth-2 {
                    z-index: 20;
                    transform: translateZ(10px);
                }
                
                .layer-depth-3 {
                    z-index: 30;
                    transform: translateZ(20px);
                }
                
                .elegant-shadow {
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04),
                                0 8px 40px rgba(0, 0, 0, 0.04);
                }
                
                .hover-elegant {
                    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
                }
                
                .hover-elegant:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
                }
                
                .gradient-subtle {
                    background: linear-gradient(135deg, 
                        rgba(255, 91, 241, 0.05), 
                        rgba(99, 112, 231, 0.05));
                }
            `}</style>
            <div>
                {/* Refined Top Bar */}
                <div className="fixed top-0 w-full z-50">
                    <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
                        <div className="px-8 py-3">
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-bold">[CURATIONS]</div>
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

                {/* Editorial Hero Section */}
                <section className="min-h-screen pt-24 px-4 md:px-8">
                    <div className="magazine-grid items-center min-h-[85vh] relative">
                        {/* Main Title Block */}
                        <div className="span-8 z-10">
                            <div className="diagonal-text">
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
                                    <span className="block slide-in">CURATIONS</span>
                                    <span className="block text-outline-subtle slide-in" style={{animationDelay: '0.2s'}}>CURATIONS</span>
                                    <span className="block text-[#FF5BF1] slide-in" style={{animationDelay: '0.4s'}}>CURATIONS</span>
                                </h1>
                            </div>
                            
                            <div className="mt-10 space-y-3 fade-in-up" style={{animationDelay: '0.6s'}}>
                                <p className="text-2xl text-gray-700">
                                    We curate the <span className="bg-[#FF5BF1] text-white px-2">HEART</span> of brands
                                </p>
                                <p className="text-xl text-gray-600">
                                    And the <span className="bg-[#6370E7] text-white px-2">NEWS</span> they break
                                </p>
                            </div>
                            
                            {/* Quick Stats Bar */}
                            <div className="mt-10 flex gap-6 fade-in-up" style={{animationDelay: '0.8s'}}>
                                <div>
                                    <p className="text-3xl font-bold text-[#FF5BF1]">500+</p>
                                    <p className="text-sm text-gray-600">Brands</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#6370E7]">50K+</p>
                                    <p className="text-sm text-gray-600">Readers</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-800">100M+</p>
                                    <p className="text-sm text-gray-600">Impressions</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Side Panel - Refined */}
                        <div className="span-4 space-y-4 fade-in-up z-20" style={{animationDelay: '1s'}}>
                            <div className="premium-glass p-6 hover-elegant">
                                <h3 className="font-bold text-lg mb-3">TODAY'S FOCUS</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl">🍽️</span>
                                        <span>3 Restaurant Openings</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl">🤖</span>
                                        <span>AI Workshop Today</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl">📺</span>
                                        <span>Netflix Campaign Live</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl">✨</span>
                                        <span>5 Influencer Collabs</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-black text-white p-6">
                                <p className="font-bold text-[#EBF998]">BESTIE STATUS</p>
                                <div className="mt-3 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Creativity</span>
                                        <span>100%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 h-1">
                                        <div className="bg-[#EBF998] h-1 w-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Layered Services Section */}
                <section className="py-20 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-7xl font-bold text-gray-800">
                                SERVICES THAT <span className="text-[#FF5BF1]">ELEVATE</span>
                            </h2>
                            <p className="text-xl text-gray-600 mt-4">Full-stack. Full-service. Full-stop.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Premium Service Cards */}
                            <div className="group relative fade-in-up">
                                <div className="absolute inset-0 gradient-subtle transform rotate-2 group-hover:rotate-3 transition elegant-shadow"></div>
                                <div className="relative premium-glass p-8 hover-elegant">
                                    <span className="text-5xl">🍽️</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">Restaurant & Business</h3>
                                    <p className="text-gray-600 text-sm mb-4">Grand openings to ghost kitchens</p>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FF5BF1]">•</span>
                                            <span>Launch Strategy</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FF5BF1]">•</span>
                                            <span>Menu Marketing</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FF5BF1]">•</span>
                                            <span>Third-Party Apps</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="group relative fade-in-up" style={{animationDelay: '0.1s'}}>
                                <div className="absolute inset-0 gradient-subtle transform -rotate-2 group-hover:-rotate-3 transition elegant-shadow"></div>
                                <div className="relative premium-glass p-8 hover-elegant">
                                    <span className="text-5xl">🤖</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">AI Discovery</h3>
                                    <p className="text-gray-600 text-sm mb-4">"Vibe Coding" & beyond</p>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#6370E7]">•</span>
                                            <span>Prompt Engineering</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#6370E7]">•</span>
                                            <span>Tech Stack Discovery</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#6370E7]">•</span>
                                            <span>Team Workshops</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="group relative fade-in-up" style={{animationDelay: '0.2s'}}>
                                <div className="absolute inset-0 gradient-subtle transform rotate-2 group-hover:rotate-3 transition elegant-shadow"></div>
                                <div className="relative premium-glass p-8 hover-elegant">
                                    <span className="text-5xl">📺</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">Media Buying</h3>
                                    <p className="text-gray-600 text-sm mb-4">Netflix to TikTok</p>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#EBF998]">•</span>
                                            <span>TV Placement</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#EBF998]">•</span>
                                            <span>Podcast Network</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#EBF998]">•</span>
                                            <span>Live Streaming</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="group relative fade-in-up" style={{animationDelay: '0.3s'}}>
                                <div className="absolute inset-0 gradient-subtle transform -rotate-2 group-hover:-rotate-3 transition elegant-shadow"></div>
                                <div className="relative premium-glass p-8 hover-elegant">
                                    <span className="text-5xl">✨</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">Creative Collabs</h3>
                                    <p className="text-gray-600 text-sm mb-4">UGC that converts</p>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FF5BF1]">•</span>
                                            <span>Influencer Matching</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FF5BF1]">•</span>
                                            <span>Content Strategy</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FF5BF1]">•</span>
                                            <span>Social Campaigns</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="group relative fade-in-up" style={{animationDelay: '0.4s'}}>
                                <div className="absolute inset-0 gradient-subtle transform rotate-2 group-hover:rotate-3 transition elegant-shadow"></div>
                                <div className="relative premium-glass p-8 hover-elegant">
                                    <span className="text-5xl">📰</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">Communications</h3>
                                    <p className="text-gray-600 text-sm mb-4">Crisis to celebration</p>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#6370E7]">•</span>
                                            <span>Executive Branding</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#6370E7]">•</span>
                                            <span>PR Strategy</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#6370E7]">•</span>
                                            <span>Media Relations</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="group relative fade-in-up" style={{animationDelay: '0.5s'}}>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] opacity-10 transform -rotate-2 group-hover:-rotate-3 transition elegant-shadow"></div>
                                <div className="relative premium-glass p-8 hover-elegant">
                                    <span className="text-5xl">🚀</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">Full-Stack Digital</h3>
                                    <p className="text-gray-600 text-sm mb-4">End-to-end excellence</p>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] text-transparent bg-clip-text">•</span>
                                            <span>SEO & Analytics</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] text-transparent bg-clip-text">•</span>
                                            <span>Email/CRM</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] text-transparent bg-clip-text">•</span>
                                            <span>Paid Media</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Premium Layered Section */}
                <section className="py-20 px-8 gradient-subtle">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-7xl font-bold text-gray-800">GOOD VIBES FROM</h2>
                            <h2 className="text-5xl md:text-7xl font-bold">
                                <span className="text-[#FF5BF1]">CURATIONS</span><span className="text-[#6370E7]">LA</span>
                            </h2>
                            <p className="text-xl text-gray-600 mt-4">Your weekly dose of LA culture, curated daily</p>
                        </div>
                        
                        {/* Premium Layered Cards */}
                        <div className="relative h-[700px] md:h-[550px]">
                            {/* Back Layer */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl layer-depth-1">
                                <div className="premium-glass p-8 elegant-shadow opacity-60">
                                    <span className="text-xs text-gray-500 font-medium">COMING SOON</span>
                                    <h3 className="text-2xl font-bold mt-2 text-gray-700">🎪 LA County Fair Returns</h3>
                                    <p className="text-gray-600 mt-2">September 1-25 • Pomona Fairplex</p>
                                </div>
                            </div>
                            
                            {/* Left Card */}
                            <div className="absolute top-20 left-0 w-full md:w-[47%] layer-depth-2">
                                <div className="bg-[#FF8C00] text-white p-8 elegant-shadow hover-elegant">
                                    <span className="inline-block bg-white text-[#FF8C00] px-3 py-1 text-xs font-bold mb-4">AUG 15, 2025</span>
                                    <h3 className="text-3xl font-bold mb-4">🌮 FRIDAY AFTERNOON VIBES</h3>
                                    <p className="mb-4 opacity-90">Your weekend passport to LA's hottest spots: rooftop parties, beach clubs, and taco trucks.</p>
                                    <button className="bg-white text-[#FF8C00] px-6 py-3 font-bold">WEEKEND GUIDE →</button>
                                </div>
                            </div>

                            {/* Right Card */}
                            <div className="absolute top-40 right-0 w-full md:w-[47%] layer-depth-3">
                                <div className="bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] text-white p-8 elegant-shadow hover-elegant">
                                    <span className="inline-block bg-white text-black px-3 py-1 text-xs font-bold mb-4">AUG 17, 2025</span>
                                    <h3 className="text-3xl font-bold mb-4">📅 EVENTS: WEEK OF MONDAY</h3>
                                    <p className="mb-4">Dave Matthews Band, Adam Sandler, Mt. Joy, The Fray, Nelly, and more.</p>
                                    <button className="bg-white text-[#FF5BF1] px-6 py-3 font-bold">FULL LINEUP →</button>
                                </div>
                            </div>
                            
                            {/* Bottom CTA */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl layer-depth-2">
                                <div className="premium-glass p-12 text-center elegant-shadow">
                                    <h3 className="text-3xl font-bold mb-4 text-gray-800">50,000+ LA INSIDERS</h3>
                                    <p className="text-lg mb-6 text-gray-600">Join the movement. Get the weekly scoop.</p>
                                    <button className="px-8 py-4 bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] text-white font-bold text-lg">
                                        SUBSCRIBE TO CURATIONSLA →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Footer */}
                <footer className="py-16 px-8 mt-20">
                    <div className="max-w-6xl mx-auto text-center">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">[CURATIONS]</h3>
                        <p className="text-gray-600 mb-8">Curating hearts & headlines since 2017</p>
                        <div className="flex justify-center gap-8 text-2xl">
                            <span>📧</span>
                            <span>📱</span>
                            <span>💬</span>
                            <span>🌐</span>
                        </div>
                        <p className="mt-8 text-sm text-gray-500">Los Angeles • Worldwide</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default ElevatedEditorialPage;

    

    