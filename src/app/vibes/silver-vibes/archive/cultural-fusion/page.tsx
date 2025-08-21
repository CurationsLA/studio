
'use client';

import { useState, useEffect } from 'react';
import LiveDispatches from '@/components/ui/LiveDispatches';


const CulturalFusionPage = () => {
    const [activePage, setActivePage] = useState('home');
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [creativityMeter, setCreativityMeter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCreativityMeter(prev => (prev + 1) % 101);
        }, 50);
        return () => clearInterval(timer);
    }, []);

    const showPage = (pageId: string) => {
        const section = document.getElementById(pageId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActivePage(pageId);
        }
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const id of sections) {
                const section = document.getElementById(id);
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActivePage(id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFC]">
            <style jsx global>{`
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                }
                
                .neon-glow {
                    box-shadow: 0 0 20px rgba(255, 91, 241, 0.5), 8px 8px 0px black;
                }
                
                .creative-card {
                    transition: all 0.3s ease;
                    cursor: pointer;
                    display: block;
                    text-decoration: none;
                    position: relative;
                    overflow: hidden;
                }
                
                .creative-card:hover {
                    transform: translateY(-8px) rotate(2deg);
                    box-shadow: 15px 15px 0px black, 0 0 30px rgba(255, 91, 241, 0.7);
                }
                
                .creative-vibes-meter {
                    width: 100%;
                    height: 25px;
                    background: #e5e5e5;
                    border: 4px solid black;
                    overflow: hidden;
                    position: relative;
                }
                
                .vibes-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #FF5BF1, #6370E7, #4AE54A, #FF5BF1);
                    background-size: 200% 100%;
                    animation: shimmer 3s infinite;
                    transition: width 0.1s ease;
                    position: relative;
                }
                
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                
                .vibes-fill::after {
                    content: 'CREATIVE VIBES: ${creativityMeter}%';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    font-weight: 800;
                    font-size: 0.75rem;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
                }
                
                .nav {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    background: white;
                    z-index: 100;
                    border-bottom: 4px solid black;
                }
                
                .nav-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo-link {
                    text-decoration: none;
                    color: black;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .logo-link:hover {
                    color: #FF5BF1;
                    text-shadow: 0 0 10px rgba(255, 91, 241, 0.5);
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                }
                
                .nav-links a {
                    color: black;
                    text-decoration: none;
                    font-weight: 700;
                    text-transform: uppercase;
                    transition: all 0.3s;
                    cursor: pointer;
                }
                
                .nav-links a:hover, .nav-links a.active {
                    color: #FF5BF1;
                }
                
                .menu-toggle {
                    display: none;
                    background: #4AE54A;
                    color: black;
                    border: none;
                    padding: 0.5rem 1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                @media (max-width: 768px) {
                    .menu-toggle {
                        display: block;
                    }

                    .menu-toggle:hover {
                        background: #FF5BF1;
                        color: white;
                    }
                    
                    .nav-links {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: white;
                        flex-direction: column;
                        padding: 2rem;
                        border-top: 4px solid black;
                        display: none;
                    }
                    
                    .nav-links.open {
                        display: flex;
                    }
                }
                
                .corner-badge {
                    position: fixed;
                    top: 100px;
                    right: 15px;
                    z-index: 50;
                    background: #FF5BF1;
                    color: white;
                    padding: 0.25rem 0.5rem;
                    transform: rotate(12deg);
                    cursor: pointer;
                    text-decoration: none;
                    transition: all 0.2s ease-in-out;
                    animation: pulse-neon 2s infinite;
                }

                @keyframes pulse-neon {
                    0%, 100% { box-shadow: 0 0 5px rgba(255, 91, 241, 0.5); }
                    50% { box-shadow: 0 0 20px rgba(255, 91, 241, 0.8), 0 0 30px rgba(255, 91, 241, 0.4); }
                }

                .corner-badge span {
                    font-size: 0.75rem;
                    font-weight: 700;
                }
                
                @media (min-width: 768px) {
                    .corner-badge {
                        top: 105px;
                        right: 30px;
                        padding: 0.5rem 1rem;
                    }
                    .corner-badge span {
                        font-size: 1rem;
                    }
                }

                .corner-badge:hover {
                    transform: rotate(12deg) scale(1.1);
                    background: white;
                    color: #FF5BF1;
                }
                
                .cultural-showcase {
                    background: linear-gradient(45deg, #FF5BF1, #6370E7, #4AE54A, #FF5BF1);
                    background-size: 400% 400%;
                    animation: gradient-flow 8s ease-in-out infinite;
                    color: white;
                    padding: 3rem;
                    margin: 2rem 0;
                    position: relative;
                }
                
                .cultural-showcase::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                    animation: sweep 4s infinite;
                }
                
                @keyframes sweep {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                @keyframes gradient-flow {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                .floating-badges {
                    animation: float-bounce 6s ease-in-out infinite;
                }
                
                @keyframes float-bounce {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    25% { transform: translateY(-5px) scale(1.02); }
                    50% { transform: translateY(-10px) scale(1); }
                    75% { transform: translateY(-5px) scale(0.98); }
                }

                .culture-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                }

                @media (max-width: 768px) {
                    .culture-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <nav className="nav">
                <div className="nav-container">
                    <div className="text-xl font-black">
                        <a onClick={() => showPage('home')} className="logo-link">[CURATIONS]</a>
                    </div>
                    <button className="menu-toggle brutal-box" onClick={toggleMenu}>MENU</button>
                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <li><a onClick={() => showPage('home')} className={activePage === 'home' ? 'active' : ''}>Home</a></li>
                        <li><a onClick={() => showPage('about')} className={activePage === 'about' ? 'active' : ''}>About</a></li>
                        <li><a onClick={() => showPage('services')} className={activePage === 'services' ? 'active' : ''}>Services</a></li>
                        <li><a onClick={() => showPage('contact')} className={activePage === 'contact' ? 'active' : ''}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            <a href="mailto:curate@curations.org" className="corner-badge brutal-box">
                <span>EMAIL US!</span>
            </a>

            {/* Hero Section */}
            <div id="home" className="pt-20 min-h-screen">
                <section className="px-4 md:px-8 py-16 flex items-center">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none uppercase text-black mb-8">
                                    CURATIONS
                                </h1>
                                
                                <div className="mt-8">
                                    <div className="brutal-box neon-glow bg-white text-black p-4 md:p-6">
                                        <h2 className="text-lg md:text-2xl font-black uppercase text-center">
                                            WE CURATE THE
                                        </h2>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                                        <a href="/creative-campaigns" className="brutal-box creative-card bg-[#FF5BF1] text-white p-6 md:p-8">
                                            <h3 className="text-xl md:text-2xl lg:text-4xl font-black text-center uppercase">
                                                [HEART]
                                            </h3>
                                            <div className="mt-2 text-center text-xs md:text-sm font-bold">
                                                CULTURAL CONNECTION
                                            </div>
                                        </a>
                                        
                                        <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer" className="brutal-box creative-card bg-[#6370E7] text-white p-6 md:p-8">
                                            <h3 className="text-xl md:text-2xl lg:text-4xl font-black text-center uppercase">
                                                [HEADLINES]
                                            </h3>
                                            <div className="mt-2 text-center text-xs md:text-sm font-bold">
                                                MEDIA AMPLIFICATION
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 md:mt-0 space-y-4">
                                <LiveDispatches />
                                
                                {/* Creative Vibes Meter */}
                                <div className="brutal-box bg-white p-4 md:p-6">
                                    <h3 className="font-black text-sm md:text-lg uppercase mb-4 text-[#FF5BF1]">CREATIVE VIBES</h3>
                                    <div className="creative-vibes-meter brutal-box" style={{boxShadow: 'none'}}>
                                        <div 
                                            className="vibes-fill" 
                                            style={{ width: `${creativityMeter}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-16 text-center">
                            <div className="flex flex-wrap gap-3 md:gap-4 justify-center floating-badges">
                                <div className="inline-flex items-center gap-2 bg-[#4AE54A] border-2 border-black px-3 md:px-4 py-2 font-bold text-xs md:text-sm">
                                    <span>🏆</span> GROW WITH GOOGLE
                                </div>
                                <div className="inline-flex items-center gap-2 bg-[#6370E7] text-white border-2 border-black px-3 md:px-4 py-2 font-bold text-xs md:text-sm">
                                    <span>📰</span> MEDIA + AGENCY
                                </div>
                                <div className="inline-flex items-center gap-2 bg-[#FF5BF1] text-white border-2 border-black px-3 md:px-4 py-2 font-bold text-xs md:text-sm">
                                    <span>🌟</span> LA CULTURE
                                </div>
                                <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-3 md:px-4 py-2 font-bold text-xs md:text-sm">
                                    <span>🤖</span> HUMAN + AI POWERED
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* About Section */}
            <div id="about" className="pt-0">
                <div className="cultural-showcase brutal-box">
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase">ABOUT [CURATIONS]</h1>
                        <p className="text-lg md:text-xl mt-4 max-w-4xl mx-auto font-black">
                            We curate the <span className="bg-[#FF5BF1] text-white px-2 py-1 border-2 border-black">HEART</span> and <span className="bg-white text-[#6370E7] px-2 py-1 border-2 border-black">HEADLINES</span> of <span className="bg-[#4AE54A] text-black px-2 py-1 border-2 border-black">BRANDS</span>
                        </p>
                    </div>
                </div>
                
                <div className="bg-[#FDFDFC] py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="culture-grid">
                            <div className="brutal-box creative-card bg-[#FF5BF1] p-6 md:p-8 neon-glow">
                                <div className="text-4xl md:text-6xl mb-4">🌆</div>
                                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase text-white">CULTURE ARCHITECTS</h3>
                                <p className="text-sm md:text-base leading-relaxed text-white">We build bridges between street culture and boardroom strategy, creating authentic brand experiences that resonate.</p>
                            </div>
                            
                            <div className="brutal-box creative-card bg-[#6370E7] p-6 md:p-8">
                                <div className="text-4xl md:text-6xl mb-4">⚡</div>
                                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase text-white">DUAL VOLTAGE</h3>
                                <p className="text-sm md:text-base leading-relaxed text-white">Agency precision meets media authenticity. We don't just create campaigns—we create conversations that matter.</p>
                            </div>
                            
                            <div className="brutal-box creative-card bg-[#4AE54A] p-6 md:p-8">
                                <div className="text-4xl md:text-6xl mb-4">🎭</div>
                                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase text-black">VIBE ENGINEERING</h3>
                                <p className="text-sm md:text-base leading-relaxed text-black">We decode the cultural matrix and engineer authentic connections between brands and communities.</p>
                            </div>
                        </div>

                        <div className="brutal-box bg-black text-white p-6 md:p-8 mt-8 neon-glow">
                            <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase text-center text-[#4AE54A]">THE NEON DIFFERENCE</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-base md:text-lg leading-relaxed mb-4">
                                        Born in the neon-lit streets of LA, we understand that culture moves faster than algorithms. We're plugged into the underground currents that become tomorrow's mainstream.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base md:text-lg leading-relaxed">
                                        Through <a href="https://la.curations.org" className="bg-[#FF5BF1] text-white px-1 font-black border-2 border-[#4AE54A]">CurationsLA</a>, we don't just amplify—we originate the conversations that define cultural moments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div id="services" className="pt-0">
                <div className="cultural-showcase brutal-box">
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase mb-4">
                            CULTURE <span className="text-[#4AE54A]">ARSENAL</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-4xl mx-auto">
                            Weaponized creativity for brands ready to own the cultural conversation
                        </p>
                    </div>
                </div>
                
                <div className="bg-[#FDFDFC] py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <a href="/restaurant-biz" className="brutal-box creative-card bg-[#FF5BF1] text-white p-6 md:p-8 neon-glow">
                                <span className="text-4xl md:text-5xl">🍽️</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase">Restaurant & Biz</h3>
                                <p className="mt-4 text-sm md:text-base">Cultural dining experiences that become neighborhood legends.</p>
                                <div className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-black uppercase inline-block text-sm">
                                    EXPLORE
                                </div>
                            </a>
                            
                            <a href="/ai-discovery" className="brutal-box creative-card bg-[#6370E7] text-white p-6 md:p-8">
                                <span className="text-4xl md:text-5xl">🤖</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase">AI Discovery</h3>
                                <p className="mt-4 text-sm md:text-base">Human creativity amplified by intelligent technology.</p>
                                <div className="mt-4 bg-white text-[#6370E7] px-4 py-2 font-black uppercase inline-block text-sm">
                                    EXPLORE
                                </div>
                            </a>
                            
                            <a href="/public-relations" className="brutal-box creative-card bg-[#FF5BF1] text-white p-6 md:p-8">
                                <span className="text-4xl md:text-5xl">📺</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase">Media Buying & PR</h3>
                                <p className="mt-4 text-sm md:text-base">Strategic placements that spark cultural conversations.</p>
                                <div className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-black uppercase inline-block text-sm">
                                    EXPLORE
                                </div>
                            </a>

                            <a href="/creative-campaigns" className="brutal-box creative-card bg-[#6370E7] text-white p-6 md:p-8">
                                <span className="text-4xl md:text-5xl">🎨</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase">Creative Campaigns</h3>
                                <p className="mt-4 text-sm md:text-base">Campaigns that become cultural movements.</p>
                                <div className="mt-4 bg-white text-[#6370E7] px-4 py-2 font-black uppercase inline-block text-sm">
                                    EXPLORE
                                </div>
                            </a>

                            <a href="/influencer-ugc" className="brutal-box creative-card bg-[#4AE54A] text-black p-6 md:p-8">
                                <span className="text-4xl md:text-5xl">🤝</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase">Influencer & UGC</h3>
                                <p className="mt-4 text-sm md:text-base">Authentic partnerships with cultural tastemakers.</p>
                                <div className="mt-4 bg-white text-black px-4 py-2 font-black uppercase inline-block text-sm">
                                    EXPLORE
                                </div>
                            </a>

                            <a href="/newsletter-services" className="brutal-box creative-card bg-[#FF5BF1] text-white p-6 md:p-8">
                                <span className="text-4xl md:text-5xl">📧</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase">Newsletter Services</h3>
                                <p className="mt-4 text-sm md:text-base">Direct lines to engaged cultural communities.</p>
                                <div className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-black uppercase inline-block text-sm">
                                    EXPLORE
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="pt-0 cultural-showcase brutal-box">
                <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 uppercase">
                        READY TO ELECTRIFY YOUR BRAND?
                    </h2>
                    <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
                        Join the cultural revolution. Choose authenticity over algorithms.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="mailto:curate@curations.org" className="brutal-box neon-glow bg-white text-[#FF5BF1] px-6 md:px-8 py-4 font-black uppercase border-4 border-black cursor-pointer no-underline text-sm md:text-base">
                            IGNITE YOUR BRAND
                        </a>
                        <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer" className="brutal-box bg-[#4AE54A] text-black px-6 md:px-8 py-4 font-black uppercase border-4 border-black cursor-pointer no-underline text-sm md:text-base">
                            SEE CURATIONSLA
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeonCulturePage;

    