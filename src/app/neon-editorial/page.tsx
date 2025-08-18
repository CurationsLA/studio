'use client';

const NeonEditorialPage = () => {
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
                
                @media (max-width: 768px) {
                    .span-6, .span-4, .span-3, .span-8 { grid-column: span 12; }
                }
                
                .text-outline {
                    -webkit-text-stroke: 2px #FF5BF1;
                    -webkit-text-fill-color: transparent;
                }

                .text-outline-black {
                    -webkit-text-stroke: 1px black;
                    -webkit-text-fill-color: transparent;
                    text-shadow: 0 0 5px rgba(0,0,0,0.5);
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                
                .pulse-animation {
                    animation: pulse 2s ease-in-out infinite;
                }
                
                .diagonal-text {
                    transform: rotate(-3deg);
                }
            `}</style>
            <div className="bg-white text-black">
                {/* Sticky Side Navigation */}
                <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
                    <div className="flex flex-col space-y-2 p-4">
                        <a href="#home" className="w-3 h-3 rounded-full bg-[#FF5BF1] hover:scale-150 transition"></a>
                        <a href="#services" className="w-3 h-3 rounded-full bg-[#6370E7] hover:scale-150 transition"></a>
                        <a href="#work" className="w-3 h-3 rounded-full bg-[#EBF998] hover:scale-150 transition"></a>
                        <a href="#connect" className="w-3 h-3 rounded-full bg-black hover:scale-150 transition"></a>
                    </div>
                </div>

                {/* Top Bar */}
                <div className="fixed top-0 w-full z-40 bg-black text-white p-2">
                    <div className="flex justify-between items-center px-6">
                        <span className="text-sm">📍 Los Angeles | 🌐 Worldwide</span>
                        <span className="text-sm text-[#EBF998]">CURATIONS × CurationsLA</span>
                        <span className="text-sm">Since 2017</span>
                    </div>
                </div>

                {/* Hero Grid Layout */}
                <section id="home" className="min-h-screen pt-16 px-4 md:px-8">
                    <div className="magazine-grid h-screen items-center">
                        {/* Main Title */}
                        <div className="span-8">
                            <div className="diagonal-text">
                                <h1 className="text-5xl md:text-6xl font-bold uppercase leading-tight">
                                    WE CURATE THE <span className="text-[#FF5BF1]">HEART</span><br/>OF <span className="text-[#6370E7]">BRANDS</span>
                                </h1>
                            </div>
                            <div className="mt-8 space-y-2">
                                <p className="text-3xl font-bold"><span className="text-outline-black">And the news they</span> <span className="neon-pink text-white px-2">BREAK</span></p>
                            </div>
                        </div>
                        
                        {/* Side Panel */}
                        <div className="span-4 space-y-4">
                            <div className="bg-[#EBF998] p-6">
                                <h3 className="font-bold text-xl mb-2">TODAY'S VIBE</h3>
                                <p>Breaking barriers in:</p>
                                <ul className="mt-2">
                                    <li>→ Restaurant Launches</li>
                                    <li>→ AI Discovery</li>
                                    <li>→ Media Buying</li>
                                    <li>→ Influencer Collabs</li>
                                </ul>
                            </div>
                            
                            <div className="border-4 border-[#6370E7] p-6">
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

                {/* Services Magazine Spread */}
                <section id="services" className="py-20 px-4 md:px-8 bg-[#F5F5F5]">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-5xl md:text-7xl font-bold">SERVICES</h2>
                            <div className="text-right">
                                <p className="text-sm">ISSUE 02</p>
                                <p className="text-sm">2025 EDITION</p>
                            </div>
                        </div>
                        
                        <div className="magazine-grid">
                            {/* Feature Service */}
                            <div className="span-6 bg-black text-white p-8 min-h-[400px]">
                                <span className="text-6xl">🍽️</span>
                                <h3 className="text-3xl font-bold mt-4 mb-4 text-[#EBF998]">RESTAURANT & BUSINESS</h3>
                                <p className="mb-4">From ghost kitchens to grand openings, we know food.</p>
                                <ul className="space-y-1 text-sm">
                                    <li>✓ Grand Openings & Events</li>
                                    <li>✓ Menu Marketing</li>
                                    <li>✓ Third-Party App Strategy</li>
                                    <li>✓ Delivery Optimization</li>
                                    <li>✓ Staff & Vendor Relations</li>
                                </ul>
                            </div>
                            
                            {/* AI Discovery */}
                            <div className="span-6 bg-[#6370E7] text-white p-8 min-h-[400px]">
                                <span className="text-6xl">🤖</span>
                                <h3 className="text-3xl font-bold mt-4 mb-4">AI DISCOVERY</h3>
                                <p className="mb-4 font-bold">"Vibe Coding" & Beyond</p>
                                <ul className="space-y-1">
                                    <li>• AI Prompt Engineering</li>
                                    <li>• SEO & AI Citations</li>
                                    <li>• Tech Stack Discovery</li>
                                    <li>• Business Consultations</li>
                                    <li>• Team Workshops</li>
                                </ul>
                            </div>
                            
                            {/* Media Buying */}
                            <div className="span-4 bg-[#EBF998] text-black p-6">
                                <h3 className="text-2xl font-bold mb-4 text-[#6370E7]">MEDIA BUYING</h3>
                                <div className="space-y-2 text-sm">
                                    <p>📺 Netflix | KTLA | NBC</p>
                                    <p>📻 Podcast Placement</p>
                                    <p>📍 Geofencing</p>
                                    <p>🎯 Amazon | LinkedIn | Reddit</p>
                                    <p>🔴 Live Streaming</p>
                                </div>
                            </div>
                            
                            {/* Influencer */}
                            <div className="span-4 border-4 border-[#FF5BF1] p-6">
                                <h3 className="text-2xl font-bold mb-4 text-[#FF5BF1]">CREATIVE COLLABS</h3>
                                <p className="text-sm mb-4">UGC that actually converts.</p>
                                <ul className="text-sm space-y-1">
                                    <li>→ Social Strategy</li>
                                    <li>→ Content Gaps</li>
                                    <li>→ Digital Listening</li>
                                    <li>→ Clips & Shorts</li>
                                </ul>
                            </div>
                            
                            {/* Communications */}
                            <div className="span-4 bg-black text-white p-6">
                                <h3 className="text-2xl font-bold mb-4 text-[#FF5BF1]">COMMUNICATIONS</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Corporate Comms</li>
                                    <li>Executive Branding</li>
                                    <li>Newsletter Design</li>
                                    <li>Chaos Management</li>
                                    <li>Legal Matching</li>
                                </ul>
                            </div>
                            
                            {/* Full Stack */}
                            <div className="span-12 bg-gradient-to-r from-[#FF5BF1] via-[#6370E7] to-[#EBF998] p-8 text-white">
                                <div className="flex flex-wrap justify-between items-center">
                                    <h3 className="text-3xl font-bold">FULL-STACK DIGITAL</h3>
                                    <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
                                        <span className="bg-white/20 px-3 py-1 rounded">PAID SEARCH</span>
                                        <span className="bg-white/20 px-3 py-1 rounded">PAID SOCIAL</span>
                                        <span className="bg-white/20 px-3 py-1 rounded">DISPLAY ADS</span>
                                        <span className="bg-white/20 px-3 py-1 rounded">LINEAR TV</span>
                                        <span className="bg-white/20 px-3 py-1 rounded">EMAIL/CRM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Feature */}
                <section className="py-20 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-5xl font-bold mb-4">
                                    <span className="text-[#FF5BF1]">CURATIONS</span> +
                                    <span className="text-[#6370E7]"> CurationsLA</span>
                                </h2>
                                <p className="text-xl mb-6">The only dual-platform powerhouse in Los Angeles.</p>
                                <p className="mb-6">While we craft your brand strategy, our sister company puts you directly in the inbox of LA's most influential community leaders, creators, and culture makers.</p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="bg-[#EBF998] p-6">
                                    <h3 className="font-bold text-xl mb-2">RECENTLY IN <span className="text-[#6370E7]">CurationsLA</span></h3>
                                    <p>→ The Best Tacos in East LA (Eats)</p>
                                    <p>→ Indie Film Fest This Weekend (Events)</p>
                                    <p>→ Vibe Coding: Our Latest Obsession (Newsletter)</p>
                                </div>
                                
                                <div className="border-4 border-[#6370E7] p-6">
                                    <p className="font-bold">IN YOUR INBOX:</p>
                                    <p className="text-2xl mt-2">💌 WEEKLY DROPS</p>
                                </div>
                                
                                <div className="bg-black text-white p-6 text-center">
                                    <p className="font-bold mb-2">GET THE ALPHA</p>
                                    <button className="w-full px-6 py-3 bg-[#FF5BF1] text-black font-bold hover:bg-[#6370E7] hover:text-white transition">
                                        SUBSCRIBE TO CURATIONSLA
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4 md:px-8 bg-black text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            READY TO <span className="text-[#FF5BF1]">BREAK</span> THE INTERNET?
                        </h2>
                        <p className="text-xl mb-8 text-[#EBF998]">
                            Let's throw the box away together, bestie ✨
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-[#FF5BF1] text-black font-bold hover:bg-[#6370E7] hover:text-white transition">
                                START YOUR STORY
                            </button>
                            <button className="px-8 py-4 border-2 border-[#EBF998] text-[#EBF998] hover:bg-[#EBF998] hover:text-black transition">
                                GET MEDIA KIT
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-4 md:px-8 bg-[#F5F5F5]">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-2xl font-bold">[CURATIONS LOGO]</div>
                                <p className="text-sm mt-2">Est. 2017</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2">Services</p>
                                <ul className="text-sm space-y-1">
                                    <li>Agency</li>
                                    <li>Media</li>
                                    <li>Digital</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold mb-2">Connect</p>
                                <p className="text-sm">hello@curations.org</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2">Partner</p>
                                <p className="text-sm">Grow with Google ✓</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default NeonEditorialPage;
