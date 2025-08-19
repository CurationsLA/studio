'use client';

const GradientFlowZinePage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
                    background: linear-gradient(135deg, 
                        #ffffff 0%, 
                        #fafafa 20%, 
                        #f5f5f5 40%, 
                        #eeeeee 60%, 
                        #e8e8e8 80%, 
                        #e0e0e0 100%);
                    min-height: 100vh;
                }
                
                .magazine-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 1.5rem;
                }
                
                .span-6 { grid-column: span 6; }
                .span-4 { grid-column: span 4; }
                .span-8 { grid-column: span 8; }
                .span-12 { grid-column: span 12; }
                
                @media (max-width: 768px) {
                    .span-6, .span-4, .span-8 { grid-column: span 12; }
                }
                
                .soft-shadow {
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
                }
                
                .glass-card {
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.95);
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                
                .pulse-animation {
                    animation: pulse 3s ease-in-out infinite;
                }
                
                .text-gradient {
                    background: linear-gradient(135deg, #FF5BF1, #6370E7);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .hover-lift {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .hover-lift:hover {
                    transform: translateY(-8px);
                }
                
                .layer-1 { z-index: 10; }
                .layer-2 { z-index: 20; }
                .layer-3 { z-index: 30; }
                
                .diagonal-accent {
                    transform: skewY(-2deg);
                }
            `}</style>
            <div>
                {/* Clean Top Navigation */}
                <nav className="fixed top-0 w-full z-50 glass-card">
                    <div className="px-8 py-3">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-bold text-gradient">[CURATIONS]</div>
                            <div className="flex items-center gap-6">
                                <span className="text-sm text-gray-600">📍 LA × Worldwide</span>
                                <span className="text-sm font-bold text-[#FF5BF1]">Since 2017</span>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Zine-Style Hero with Clean Gradient */}
                <section className="min-h-screen pt-20 px-4 md:px-8">
                    <div className="magazine-grid items-center min-h-[85vh]">
                        {/* Main Content Area */}
                        <div className="span-8">
                            <div className="diagonal-accent">
                                <h1 className="text-7xl md:text-9xl font-bold leading-none">
                                    <span className="block text-gray-800">CURATIONS</span>
                                    <span className="block text-gradient pulse-animation">CURATIONS</span>
                                    <span className="block text-gray-300">CURATIONS</span>
                                </h1>
                            </div>
                            
                            <div className="mt-10 space-y-3">
                                <p className="text-2xl text-gray-700">We curate the <span className="font-bold">HEART</span> of brands</p>
                                <p className="text-xl text-gray-600">And the <span className="font-bold text-[#6370E7]">NEWS</span> they break</p>
                            </div>
                            
                            <div className="mt-8 flex gap-4">
                                <button className="px-6 py-3 bg-black text-white font-bold hover:bg-[#FF5BF1] transition">
                                    START PROJECT →
                                </button>
                                <button className="px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition">
                                    VIEW WORK
                                </button>
                            </div>
                        </div>
                        
                        {/* Side Information Panel */}
                        <div className="span-4 space-y-4">
                            <div className="glass-card p-6 soft-shadow hover-lift">
                                <h3 className="font-bold text-lg mb-3 text-[#FF5BF1]">LIVE STATUS</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Active Projects:</span>
                                        <span className="font-bold">24</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Newsletter Subs:</span>
                                        <span className="font-bold">50K+</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>This Week:</span>
                                        <span className="font-bold text-[#6370E7]">5 Launches</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] text-white p-6 soft-shadow">
                                <p className="font-bold text-lg">🚀 TRENDING</p>
                                <p className="text-sm mt-2">AI Discovery Workshops</p>
                                <p className="text-xs mt-1 opacity-90">3 spots left this month</p>
                            </div>
                            
                            <div className="border-2 border-[#EBF998] bg-white p-6">
                                <p className="text-sm font-bold text-gray-700">GOOGLE PARTNER</p>
                                <p className="text-xs mt-2 text-gray-600">Annual pro-bono slot open</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Layered Depth Services */}
                <section className="py-20 px-8 diagonal-accent">
                    <div className="max-w-7xl mx-auto -skew-y-2">
                        <h2 className="text-6xl font-bold mb-16 text-gray-800">
                            SERVICES <span className="text-gradient">UNLEASHED</span>
                        </h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {/* Layered Service Cards */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5BF1] to-pink-300 transform rotate-3 group-hover:rotate-6 transition opacity-30 soft-shadow"></div>
                                <div className="relative glass-card p-8 soft-shadow hover-lift">
                                    <span className="text-5xl">🍽️</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">RESTAURANT & BUSINESS</h3>
                                    <p className="text-gray-600 text-sm mb-4">From ghost kitchens to grand openings</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>→ Launch Strategy</li>
                                        <li>→ Menu Marketing</li>
                                        <li>→ Digital Presence</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#6370E7] to-blue-300 transform -rotate-3 group-hover:-rotate-6 transition opacity-30 soft-shadow"></div>
                                <div className="relative glass-card p-8 soft-shadow hover-lift">
                                    <span className="text-5xl">🤖</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">AI DISCOVERY</h3>
                                    <p className="text-gray-600 text-sm mb-4">"Vibe Coding" workshops & integration</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>→ Prompt Engineering</li>
                                        <li>→ Tech Discovery</li>
                                        <li>→ Team Training</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#EBF998] to-yellow-200 transform rotate-3 group-hover:rotate-6 transition opacity-40 soft-shadow"></div>
                                <div className="relative glass-card p-8 soft-shadow hover-lift">
                                    <span className="text-5xl">📺</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">MEDIA BUYING</h3>
                                    <p className="text-gray-600 text-sm mb-4">Netflix to TikTok and beyond</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>→ TV Placement</li>
                                        <li>→ Podcast Ads</li>
                                        <li>→ Social Campaigns</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-300 transform -rotate-3 group-hover:-rotate-6 transition opacity-30 soft-shadow"></div>
                                <div className="relative glass-card p-8 soft-shadow hover-lift">
                                    <span className="text-5xl">✨</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">CREATIVE COLLABS</h3>
                                    <p className="text-gray-600 text-sm mb-4">Influencers & UGC that converts</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>→ Creator Matching</li>
                                        <li>→ Content Strategy</li>
                                        <li>→ Campaign Management</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-300 transform rotate-3 group-hover:rotate-6 transition opacity-30 soft-shadow"></div>
                                <div className="relative glass-card p-8 soft-shadow hover-lift">
                                    <span className="text-5xl">📰</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">COMMUNICATIONS</h3>
                                    <p className="text-gray-600 text-sm mb-4">From crisis to celebration</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>→ PR Strategy</li>
                                        <li>→ Executive Branding</li>
                                        <li>→ Media Relations</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5BF1] via-[#6370E7] to-[#EBF998] transform -rotate-3 group-hover:-rotate-6 transition opacity-30 soft-shadow"></div>
                                <div className="relative glass-card p-8 soft-shadow hover-lift">
                                    <span className="text-5xl">🚀</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-3">FULL-STACK DIGITAL</h3>
                                    <p className="text-gray-600 text-sm mb-4">Everything. Everywhere. All at once.</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>→ SEO & Analytics</li>
                                        <li>→ Email/CRM</li>
                                        <li>→ Conversion Optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Layered Feed */}
                <section className="py-20 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-6xl font-bold text-gray-800 mb-2">GOOD VIBES FROM</h2>
                            <h2 className="text-6xl font-bold text-gradient">CURATIONSLA</h2>
                        </div>
                        
                        {/* Layered Cards System */}
                        <div className="relative h-[650px] md:h-[500px]">
                            {/* Background Card */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl layer-1">
                                <div className="glass-card p-8 soft-shadow">
                                    <span className="text-xs text-gray-500 font-bold">NEXT WEEK</span>
                                    <h3 className="text-2xl font-bold mt-2 text-gray-700">🎭 LA Theatre Week Returns</h3>
                                    <p className="text-gray-600 mt-2">50+ shows, exclusive discounts</p>
                                </div>
                            </div>
                            
                            {/* Mid Layer Left */}
                            <div className="absolute top-16 left-0 w-full md:w-[48%] layer-2">
                                <div className="bg-gradient-to-br from-[#FF8C00] to-[#FF6B00] p-8 text-white soft-shadow hover-lift">
                                    <span className="inline-block bg-white text-[#FF8C00] px-3 py-1 text-xs font-bold mb-3">AUG 15, 2025</span>
                                    <h3 className="text-3xl font-bold mb-4">🌮 FRIDAY AFTERNOON VIBES</h3>
                                    <p className="mb-4 opacity-90">Your weekend passport to LA's hottest spots</p>
                                    <ul className="space-y-2 text-sm mb-6">
                                        <li>• Rooftop Parties</li>
                                        <li>• Beach Clubs</li>
                                        <li>• Food Trucks</li>
                                    </ul>
                                    <button className="bg-white text-[#FF8C00] px-6 py-3 font-bold">WEEKEND GUIDE →</button>
                                </div>
                            </div>
                            
                            {/* Main Feature Card */}
                            <div className="absolute top-32 right-0 w-full md:w-[48%] layer-3">
                                <div className="bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] p-8 text-white soft-shadow hover-lift">
                                    <span className="inline-block bg-white text-black px-3 py-1 text-xs font-bold mb-3">AUG 17, 2025</span>
                                    <h3 className="text-3xl font-bold mb-4">📅 EVENTS: WEEK OF MONDAY</h3>
                                    <p className="mb-4">The can't-miss lineup for August 18-24</p>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <p className="font-bold">🎸 Music</p>
                                            <p className="text-sm opacity-90">Dave Matthews, Mt. Joy</p>
                                        </div>
                                        <div>
                                            <p className="font-bold">🎤 Comedy</p>
                                            <p className="text-sm opacity-90">Adam Sandler, more</p>
                                        </div>
                                    </div>
                                    <button className="bg-white text-[#FF5BF1] px-6 py-3 font-bold">FULL CALENDAR →</button>
                                </div>
                            </div>
                            
                            {/* Bottom Card */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl layer-2">
                                <div className="glass-card border-2 border-gray-300 p-8">
                                    <span className="text-gray-600 text-xs font-bold">AUG 9, 2025</span>
                                    <h3 className="text-2xl font-bold mt-2 text-gray-800">📅 SUMMER HEAT EVENTS</h3>
                                    <p className="text-gray-600 mt-2">Beat the heat with these cool happenings</p>
                                    <button className="mt-4 text-gray-800 font-bold hover:text-[#FF5BF1] transition">VIEW ALL →</button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Newsletter Signup */}
                        <div className="mt-20 text-center">
                            <div className="inline-block glass-card p-12 soft-shadow">
                                <h3 className="text-4xl font-bold mb-4 text-gray-800">50,000+ LA INSIDERS</h3>
                                <p className="text-xl mb-8 text-gray-600">Join the movement. Get the weekly scoop.</p>
                                <button className="px-10 py-4 bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] text-white font-bold text-lg hover:shadow-lg transition">
                                    SUBSCRIBE TO CURATIONSLA →
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-16 px-8 bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <h3 className="text-3xl font-bold text-gradient mb-4">[CURATIONS]</h3>
                        <p className="text-gray-600 mb-8">Curating hearts & headlines since 2017</p>
                        <div className="flex justify-center gap-8 text-2xl">
                            <span>📧</span>
                            <span>📱</span>
                            <span>💬</span>
                            <span>🌐</span>
                        </div>
                        <p className="mt-8 text-sm text-gray-500">Grow with Google Partner • Los Angeles • Worldwide</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default GradientFlowZinePage;
