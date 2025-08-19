
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

                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
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
                    text-shadow: 0 0 20px rgba(255, 91, 241, 0.8), 0 0 40px rgba(255, 91, 241, 0.5);
                }
                
                .text-neon-blue {
                    color: #6370E7;
                    text-shadow: 0 0 20px rgba(99, 112, 231, 0.8), 0 0 40px rgba(99, 112, 231, 0.5);
                }

                .rajdhani {
                    font-family: 'Rajdhani', sans-serif;
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
                <section className="min-h-screen relative overflow-hidden pt-20 flex items-center justify-center">
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
                               <p className="text-3xl font-bold">
                                    We <span className="text-neon-pink">CURATE</span> the <span className="text-neon-pink">HEART</span> and the <span className="text-neon-blue">HEADLINES</span> of BRANDS
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Deep Dive */}
                <section className="py-20 px-8 relative bg-white text-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-6xl md:text-8xl font-bold rajdhani">
                                CURATIONS <span className="text-[#FF5BF1]">+</span> CurationsLA
                            </h2>
                             <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-700">
                                This isn't just a newsletter. It's the pulse of LA. While <span className="font-bold">[CURATIONS]</span> builds your brand, <span className="font-bold text-[#6370E7]">CurationsLA</span> puts you in the inbox of the city's most influential voices, creating a dual-powerhouse for cultural impact.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="brutal-box bg-white text-black p-8">
                                <h3 className="text-xl font-bold mb-4 rajdhani">FRIDAY AFTERNOON VIBES</h3>
                                <p className="text-sm">Weekend essentials: rooftop parties, beach clubs, taco trucks, and everything in between.</p>
                                <button className="mt-4 bg-black text-white px-4 py-2 font-bold text-sm">EXPLORE WEEKEND →</button>
                            </div>
                            <div className="brutal-box bg-white text-black p-8">
                                <h3 className="text-xl font-bold mb-4 rajdhani">EVENTS: WEEK OF MONDAY</h3>
                                <p className="text-sm">Dave Matthews Band, Adam Sandler, Mt. Joy, The Frey, Nelly, and more.</p>
                                <button className="mt-4 bg-black text-white px-4 py-2 font-bold text-sm">FULL LINEUP →</button>
                            </div>
                            <div className="brutal-box bg-white text-black p-8">
                               <h3 className="text-xl font-bold mb-4 rajdhani">SUMMER HEAT EVENTS</h3>
                                <p className="text-sm">Your guide to surviving LA summer in style. Concerts, festivals, and more.</p>
                                <button className="mt-4 bg-black text-white px-4 py-2 font-bold text-sm">DISCOVER →</button>
                            </div>
                        </div>
                        
                    </div>
                </section>

                {/* Services Depth Grid */}
                <section className="py-20 px-8 bg-white text-black">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-7xl font-bold mb-16 text-center rajdhani">
                            VIBES
                        </h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
