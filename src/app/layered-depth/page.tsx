
'use client';
import { useEffect } from 'react';

const LayeredDepthPage = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            document.body.style.setProperty('--scroll-y', `${scrollY}`);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
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
                
                .neon-glow-blue {
                    box-shadow: 0 0 40px rgba(99, 112, 231, 0.6),
                                inset 0 0 40px rgba(99, 112, 231, 0.1);
                }
                
                .parallax-slow { transform: translateY(var(--scroll-y, 0) * 0.5px); }
                .parallax-fast { transform: translateY(var(--scroll-y, 0) * 1.5px); }
                
                @keyframes slideUp {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                
                .slide-up {
                    animation: slideUp 1s ease-out;
                }
                
                .text-neon-pink {
                    color: #FF5BF1;
                    text-shadow: 0 0 20px rgba(255, 91, 241, 0.8);
                }
                
                .text-neon-blue {
                    color: #6370E7;
                    text-shadow: 0 0 20px rgba(99, 112, 231, 0.8);
                }
            `}</style>
            <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
                {/* Layered Navigation */}
                <nav className="fixed top-0 w-full z-50 glass-effect">
                    <div className="px-8 py-4">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl font-bold text-neon-pink">[CURATIONS]</div>
                            <div className="hidden md:flex gap-6">
                                <a href="#" className="hover:text-[#FF5BF1] transition">Services</a>
                                <a href="#" className="hover:text-[#6370E7] transition">Work</a>
                                <a href="#" className="hover:text-[#EBF998] transition">CurationsLA</a>
                                <button className="px-6 py-2 bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] font-bold">
                                    LET'S CREATE
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Layered Hero */}
                <section className="min-h-screen relative overflow-hidden pt-20">
                    {/* Background Layers */}
                    <div className="absolute inset-0 layer-1">
                        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF5BF1] opacity-10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#6370E7] opacity-10 rounded-full blur-3xl"></div>
                    </div>
                    
                    {/* Content Layers */}
                    <div className="relative z-30 px-8 py-20">
                        <div className="max-w-7xl mx-auto">
                            {/* Layered Title */}
                            <div className="relative">
                                <h1 className="text-8xl md:text-[12rem] font-bold text-center opacity-10 absolute inset-0">
                                    CURATIONS
                                </h1>
                                <h1 className="text-7xl md:text-9xl font-bold text-center relative slide-up">
                                    <span className="text-neon-pink">CURATIONS</span>
                                </h1>
                            </div>
                            
                            <div className="text-center mt-8 space-y-4 slide-up" style={{animationDelay: '0.3s'}}>
                                <p className="text-3xl">We curate the <span className="text-[#FF5BF1]">HEART</span> of brands</p>
                                <p className="text-2xl">And the <span className="text-[#6370E7]">NEWS</span> they break</p>
                            </div>
                            
                            {/* Floating Cards */}
                            <div className="grid md:grid-cols-3 gap-6 mt-16">
                                <div className="glass-effect p-6 neon-glow-pink slide-up" style={{animationDelay: '0.5s'}}>
                                    <h3 className="text-2xl font-bold mb-3">AGENCY</h3>
                                    <p>Full-service creative powerhouse</p>
                                    <div className="mt-4 text-4xl">🚀</div>
                                </div>
                                <div className="glass-effect p-6 neon-glow-blue slide-up" style={{animationDelay: '0.7s'}}>
                                    <h3 className="text-2xl font-bold mb-3">MEDIA</h3>
                                    <p>50K+ newsletter subscribers</p>
                                    <div className="mt-4 text-4xl">📰</div>
                                </div>
                                <div className="glass-effect p-6 border-2 border-[#EBF998] slide-up" style={{animationDelay: '0.9s'}}>
                                    <h3 className="text-2xl font-bold mb-3 text-[#EBF998]">IMPACT</h3>
                                    <p>100M+ impressions delivered</p>
                                    <div className="mt-4 text-4xl">✨</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Deep Dive */}
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
                            {/* Back Layer */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl layer-1">
                                <div className="bg-gray-800 p-8 opacity-50">
                                    <span className="text-xs">COMING NEXT WEEK</span>
                                    <h3 className="text-2xl font-bold mt-2">🎸 Summer Concert Series</h3>
                                </div>
                            </div>
                            
                            {/* Middle Layer */}
                            <div className="absolute top-20 left-0 w-full md:w-1/2 layer-2">
                                <div className="bg-[#FF8C00] p-8 glass-effect">
                                    <span className="text-sm font-bold">AUG 15, 2025</span>
                                    <h3 className="text-3xl font-bold mt-3 mb-4">🌮 FRIDAY AFTERNOON VIBES</h3>
                                    <p>Weekend essentials: rooftop parties, beach clubs, taco trucks, and everything in between.</p>
                                    <button className="mt-4 bg-white text-[#FF8C00] px-6 py-3 font-bold">EXPLORE WEEKEND →</button>
                                </div>
                            </div>
                            
                            {/* Front Layer */}
                            <div className="absolute top-40 right-0 w-full md:w-1/2 layer-3">
                                <div className="bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] p-8 neon-glow-pink">
                                    <span className="text-sm font-bold bg-white text-black px-2 py-1 inline-block">AUG 17, 2025</span>
                                    <h3 className="text-3xl font-bold mt-3 mb-4">📅 EVENTS: WEEK OF MONDAY</h3>
                                    <p className="mb-4">Dave Matthews Band, Adam Sandler, Mt. Joy, The Fray, Nelly, and more.</p>
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
                                <div className="bg-black border-2 border-[#EBF998] p-8">
                                    <span className="text-[#EBF998] text-sm font-bold">AUG 9, 2025</span>
                                    <h3 className="text-2xl font-bold mt-2 mb-3">📅 SUMMER HEAT EVENTS</h3>
                                    <p>Your guide to surviving LA summer in style</p>
                                    <button className="mt-4 text-[#EBF998] font-bold">DISCOVER →</button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Subscribe CTA */}
                        <div className="mt-20 text-center">
                            <div className="inline-block glass-effect p-12 neon-glow-blue">
                                <h3 className="text-4xl font-bold mb-4">JOIN 50,000+ ANGELENOS</h3>
                                <p className="text-xl mb-6">Get the inside scoop on LA culture, weekly.</p>
                                <button className="px-8 py-4 bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] font-bold text-lg">
                                    SUBSCRIBE TO CURATIONSLA →
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Depth Grid */}
                <section className="py-20 px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-7xl font-bold mb-16 text-center">
                            SERVICES IN <span className="text-neon-pink">VIBES</span>
                        </h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service Cards with Depth */}
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
                
                {/* Final CTA */}
                <section className="py-20 px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl md:text-7xl font-bold">
                            Ready to <span className="text-neon-pink">Reshape</span> Your Reality?
                        </h2>
                        <p className="text-xl my-8">
                            We don't just build brands. We build universes.
                        </p>
                        <button className="px-10 py-5 bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] font-bold text-xl hover:scale-105 transition">
                            BEGIN THE ASCENSION
                        </button>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-8 glass-effect border-t-0 border-x-0">
                    <div className="max-w-7xl mx-auto text-center">
                        <h3 className="text-3xl font-bold text-neon-pink mb-4">[CURATIONS]</h3>
                        <p className="text-sm text-gray-400 mb-6">Curating the heart of brands since 2017</p>
                        <div className="flex justify-center gap-6">
                            <span>📧</span>
                            <span>📱</span>
                            <span>💬</span>
                            <span>🌐</span>
                        </div>
                        <p className="mt-8 text-xs text-gray-500">
                            © {new Date().getFullYear()} Curations Creative. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default LayeredDepthPage;
