'use client';

const SplitScreenMagazinePage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
                }
                
                .split-gradient {
                    background: linear-gradient(90deg, #FF5BF1 50%, #6370E7 50%);
                }
                
                @keyframes typewriter {
                    from { width: 0; }
                    to { width: 100%; }
                }
                
                .typewriter {
                    overflow: hidden;
                    white-space: nowrap;
                    animation: typewriter 3s steps(40, end);
                }
                
                .hover-tilt:hover {
                    transform: perspective(1000px) rotateY(5deg);
                    transition: transform 0.3s;
                }
                
                .text-shadow-pink {
                    text-shadow: 3px 3px 0px #FF5BF1;
                }
                
                .text-shadow-blue {
                    text-shadow: 3px 3px 0px #6370E7;
                }
            `}</style>
            <div className="bg-white overflow-x-hidden">
                {/* Split Navigation */}
                <nav className="fixed top-0 w-full z-50 split-gradient">
                    <div className="flex justify-between items-center px-8 py-4">
                        <div className="text-white font-bold text-xl">[CURATIONS]</div>
                        <div className="flex gap-6 text-white">
                            <a href="#" className="hover:text-[#EBF998] transition">Services</a>
                            <a href="#" className="hover:text-[#EBF998] transition">Work</a>
                            <a href="#" className="hover:text-[#EBF998] transition">CurationsLA</a>
                            <button className="px-4 py-2 bg-[#EBF998] text-black font-bold">Let's Talk</button>
                        </div>
                    </div>
                </nav>

                {/* Split Hero */}
                <section className="min-h-screen pt-20 flex">
                    {/* Left Side - Agency */}
                    <div className="w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center">
                        <div className="max-w-xl">
                            <h1 className="text-6xl md:text-8xl font-bold text-shadow-pink">
                                CURATIONS
                            </h1>
                            <p className="text-2xl mt-4 mb-6">We curate the <span className="text-[#FF5BF1]">HEART</span> of brands</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🍽️</span>
                                    <span>Restaurant & Business</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🤖</span>
                                    <span>AI Discovery</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">📺</span>
                                    <span>Media Buying</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">✨</span>
                                    <span>Creative Collabs</span>
                                </div>
                            </div>
                            <button className="mt-8 px-6 py-3 bg-[#FF5BF1] text-white font-bold hover:bg-black transition">
                                AGENCY SERVICES →
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Side - Media */}
                    <div className="w-1/2 bg-black text-white p-8 md:p-16 flex flex-col justify-center">
                        <div className="max-w-xl">
                            <h1 className="text-6xl md:text-8xl font-bold text-shadow-blue">
                                CurationsLA
                            </h1>
                            <p className="text-2xl mt-4 mb-6">And the <span className="text-[#6370E7]">NEWS</span> they break</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">📰</span>
                                    <span>Breaking News</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🎯</span>
                                    <span>Event Coverage</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">💌</span>
                                    <span>50K+ Subscribers</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🌟</span>
                                    <span>LA Culture</span>
                                </div>
                            </div>
                            <button className="mt-8 px-6 py-3 bg-[#6370E7] text-white font-bold hover:bg-white hover:text-black transition">
                                MEDIA COVERAGE →
                            </button>
                        </div>
                    </div>
                </section>

                {/* Unified Power Section */}
                <section className="py-20 bg-[#EBF998]">
                    <div className="max-w-6xl mx-auto px-8 text-center">
                        <h2 className="text-5xl md:text-7xl font-bold mb-6">
                            TWO PLATFORMS.<br/>
                            <span className="text-[#FF5BF1]">ONE</span> POWERHOUSE.
                        </h2>
                        <p className="text-xl mb-12 max-w-3xl mx-auto">
                            The only dual-platform media and agency combo in Los Angeles. 
                            We don't just tell your story—we make sure everyone hears it.
                        </p>
                        
                        {/* Stats Grid */}
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="bg-white p-6 hover-tilt">
                                <p className="text-4xl font-bold text-[#FF5BF1]">500+</p>
                                <p>Brands Launched</p>
                            </div>
                            <div className="bg-white p-6 hover-tilt">
                                <p className="text-4xl font-bold text-[#6370E7]">50K+</p>
                                <p>Newsletter Readers</p>
                            </div>
                            <div className="bg-white p-6 hover-tilt">
                                <p className="text-4xl font-bold text-[#FF5BF1]">100M+</p>
                                <p>Impressions</p>
                            </div>
                            <div className="bg-white p-6 hover-tilt">
                                <p className="text-4xl font-bold text-[#6370E7]">8</p>
                                <p>Years Strong</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Feed Section */}
                <section className="py-20 px-8 bg-gradient-to-b from-white"></section>
            </div>
        </>
    );
};

export default SplitScreenMagazinePage;
