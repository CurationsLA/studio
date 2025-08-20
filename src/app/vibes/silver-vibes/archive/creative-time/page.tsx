
'use client';

import { useState, useEffect } from 'react';
import LiveDispatches from '@/components/ui/LiveDispatches';

const CreativeTimePage = () => {
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
                
                .creative-card {
                    transition: all 0.3s ease;
                    cursor: pointer;
                    display: block;
                    text-decoration: none;
                    position: relative;
                    overflow: hidden;
                }
                
                .creative-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, hsla(var(--accent), 0.1), transparent);
                    transition: all 0.5s ease;
                }
                
                .creative-card:hover::before {
                    left: 100%;
                }
                
                .creative-card:hover {
                    transform: translateY(-5px) rotate(1deg);
                    box-shadow: 12px 12px 0px black;
                }
                
                .creativity-meter {
                    width: 100%;
                    height: 20px;
                    background: #e5e5e5;
                    border: 4px solid black;
                    overflow: hidden;
                    position: relative;
                }
                
                .creativity-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #FF5BF1, #6370E7, #4AE54A);
                    transition: width 0.1s ease;
                    position: relative;
                }
                
                .creativity-fill::after {
                    content: 'CREATIVE POWER: ${creativityMeter}%';
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
                
                .collaboration-showcase {
                    background: linear-gradient(45deg, #FF5BF1, #6370E7, #4AE54A, #FF5BF1);
                    background-size: 400% 400%;
                    animation: gradient-flow 8s ease-in-out infinite;
                    color: white;
                    padding: 3rem;
                    margin: 2rem 0;
                }
                
                @keyframes gradient-flow {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
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
                <section className="px-8 py-16 flex items-center">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h1 className="text-6xl md:text-8xl font-black leading-none uppercase text-black mb-8">
                                    CURATIONS
                                </h1>
                                
                                <div className="mt-8">
                                    <div className="brutal-box bg-white text-black p-6">
                                        <h2 className="text-2xl font-black uppercase text-center">
                                            WE CURATE THE
                                        </h2>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                                        <a href="/creative-campaigns" className="brutal-box creative-card bg-[#FF5BF1] text-white p-8">
                                            <h3 className="text-2xl md:text-4xl font-black text-center uppercase">
                                                [HEART]
                                            </h3>
                                            <div className="mt-2 text-center text-sm font-bold">
                                                BRAND CONNECTION
                                            </div>
                                        </a>
                                        
                                        <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer" className="brutal-box creative-card bg-[#6370E7] text-white p-8">
                                            <h3 className="text-2xl md:text-4xl font-black text-center uppercase">
                                                [HEADLINES]
                                            </h3>
                                            <div className="mt-2 text-center text-sm font-bold">
                                                CULTURAL IMPACT
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 md:mt-0">
                                <LiveDispatches />
                                
                                {/* Creative Power Meter */}
                                <div className="brutal-box bg-white p-6 mt-4">
                                    <h3 className="font-black text-lg uppercase mb-4">CREATIVE POWER</h3>
                                    <div className="creativity-meter brutal-box" style={{boxShadow: 'none'}}>
                                        <div 
                                            className="creativity-fill" 
                                            style={{ width: `${creativityMeter}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-16 text-center">
                            <div className="flex flex-wrap gap-4 justify-center">
                                <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-bold text-sm">
                                    <span>🏆</span> GOOGLE PARTNER
                                </div>
                                <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-bold text-sm">
                                    <span>📈</span> 500% AVG GROWTH
                                </div>
                                <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-bold text-sm">
                                    <span>🌟</span> LA BASED
                                </div>
                                <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-bold text-sm">
                                    <span>🤖</span> AI POWERED
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* About Section */}
            <div id="about" className="pt-0">
                <div className="collaboration-showcase brutal-box">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-black uppercase">ABOUT [CURATIONS]</h1>
                        <p className="text-xl mt-4 max-w-4xl mx-auto font-black">
                            We curate the <span className="bg-[#FF5BF1] text-white px-2 py-1 border-2 border-black">HEART</span> and <span className="bg-white text-[#6370E7] px-2 py-1 border-2 border-black">HEADLINES</span> of <span className="bg-[#4AE54A] text-black px-2 py-1 border-2 border-black">BRANDS</span>
                        </p>
                    </div>
                </div>
                
                <div className="bg-[#FDFDFC] py-16 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="brutal-box bg-[#4AE54A] p-8 mb-8">
                            <h2 className="text-3xl font-black mb-4 uppercase">OUR STORY</h2>
                            <p className="text-lg leading-relaxed mb-4 text-black">
                                Born from the creative chaos of Los Angeles, CURATIONS emerged when we realized brands weren't just competing for market share—they were competing for cultural relevance.
                            </p>
                            <p className="text-lg leading-relaxed text-black">
                                Today, CURATIONS operates at the intersection of digital innovation and street-level culture. We're cultural architects, building bridges between what brands want to say and what people actually want to hear.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="brutal-box creative-card bg-[#FF5BF1] p-8">
                                <h3 className="text-2xl font-black mb-4 uppercase text-white">[PHILOSOPHY]</h3>
                                <p className="text-lg leading-relaxed text-white">We believe in 'Vibe Coding'—the art and science of decoding cultural signals and translating them into brand actions that feel authentic, not advertised.</p>
                            </div>
                            <div className="brutal-box creative-card bg-[#6370E7] p-8">
                                <h3 className="text-2xl font-black mb-4 uppercase text-white">[DUAL POWERHOUSE]</h3>
                                <p className="text-lg leading-relaxed text-white">While CURATIONS crafts your brand's voice, our sister media company, <a href="https://la.curations.org" className="bg-white text-[#FF5BF1] px-1 font-black border-2 border-black">CurationsLA</a>, amplifies it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div id="services" className="pt-0">
                <div className="collaboration-showcase brutal-box">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
                            OUR <span className="text-[#4AE54A]">CURATIONS</span>
                        </h2>
                        <p className="text-xl max-w-4xl mx-auto">
                            Full-stack solutions for brands ready to make cultural impact
                        </p>
                    </div>
                </div>
                
                <div className="bg-[#FDFDFC] py-16 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            <a href="/restaurant-biz" className="brutal-box creative-card bg-[#FF5BF1] text-white p-8">
                                <span className="text-5xl">🍽️</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">Restaurant & Biz</h3>
                                <p className="mt-4 text-sm">Grand openings, menu marketing, delivery optimization, and cultural integration.</p>
                                <div className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-black uppercase inline-block">
                                    EXPLORE
                                </div>
                            </a>
                            
                            <a href="/ai-discovery" className="brutal-box creative-card bg-[#6370E7] text-white p-8">
                                <span className="text-5xl">🤖</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">AI Discovery</h3>
                                <p className="mt-4 text-sm">Prompt engineering, SEO optimization, and tech stack discovery for the AI age.</p>
                                <div className="mt-4 bg-white text-[#6370E7] px-4 py-2 font-black uppercase inline-block">
                                    EXPLORE
                                </div>
                            </a>
                            
                            <a href="/public-relations" className="brutal-box creative-card bg-[#FF5BF1] text-white p-8">
                                <span className="text-5xl">📺</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">Media Buying & PR</h3>
                                <p className="mt-4 text-sm">Netflix placements, podcast ads, linear TV, and strategic public relations.</p>
                                <div className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-black uppercase inline-block">
                                    EXPLORE
                                </div>
                            </a>

                            <a href="/creative-campaigns" className="brutal-box creative-card bg-[#6370E7] text-white p-8">
                                <span className="text-5xl">🎨</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">Creative Campaigns</h3>
                                <p className="mt-4 text-sm">Campaigns that drive engagement and build authentic community connections.</p>
                                <div className="mt-4 bg-white text-[#6370E7] px-4 py-2 font-black uppercase inline-block">
                                    EXPLORE
                                </div>
                            </a>

                            <a href="/influencer-ugc" className="brutal-box creative-card bg-[#4AE54A] text-black p-8">
                                <span className="text-5xl">🤝</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">Influencer & UGC</h3>
                                <p className="mt-4 text-sm">Strategic partnerships and user-generated content programs that build trust.</p>
                                <div className="mt-4 bg-white text-black px-4 py-2 font-black uppercase inline-block">
                                    EXPLORE
                                </div>
                            </a>

                            <a href="/newsletter-services" className="brutal-box creative-card bg-[#FF5BF1] text-white p-8">
                                <span className="text-5xl">📧</span>
                                <h3 className="font-black text-2xl mt-4 uppercase">Newsletter Services</h3>
                                <p className="mt-4 text-sm">Newsletters that don't just reach inboxes, they create communities.</p>
                                <div className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-black uppercase inline-block">
                                    EXPLORE
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="pt-0 collaboration-showcase brutal-box">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase">
                        READY TO CURATE YOUR SUCCESS?
                    </h2>
                    <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                        Join 100+ brands that chose culture over algorithms, authenticity over automation.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="mailto:curate@curations.org" className="brutal-box bg-white text-[#FF5BF1] px-8 py-4 font-black uppercase border-4 border-black cursor-pointer no-underline">
                            START YOUR CURATION
                        </a>
                        <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer" className="brutal-box bg-[#4AE54A] text-black px-8 py-4 font-black uppercase border-4 border-black cursor-pointer no-underline">
                            SEE CURATIONSLA
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
