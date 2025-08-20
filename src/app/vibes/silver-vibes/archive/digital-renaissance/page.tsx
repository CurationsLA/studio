
'use client';

import { useState, useEffect } from 'react';
import LiveDispatches from '@/components/ui/LiveDispatches';


const DigitalRenaissancePage = () => {
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
                
                .digital-glow {
                    box-shadow: 0 0 20px rgba(99, 112, 231, 0.3), 8px 8px 0px black;
                }
                
                .renaissance-pattern {
                    background-image: 
                        radial-gradient(circle at 25% 25%, rgba(255, 91, 241, 0.1) 0%, transparent 25%),
                        radial-gradient(circle at 75% 75%, rgba(99, 112, 231, 0.1) 0%, transparent 25%);
                }
                
                .creative-card {
                    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
                    cursor: pointer;
                    display: block;
                    text-decoration: none;
                    position: relative;
                    overflow: hidden;
                }
                
                .creative-card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent);
                    animation: rotate 8s linear infinite;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .creative-card:hover::before {
                    opacity: 1;
                }
                
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .creative-card:hover {
                    transform: translateY(-8px) scale(1.03);
                    box-shadow: 15px 15px 0px black, 0 0 40px rgba(99, 112, 231, 0.4);
                }
                
                .creative-vibes-meter {
                    width: 100%;
                    height: 25px;
                    background: linear-gradient(90deg, #f0f0f0, #e0e0e0);
                    border: 4px solid black;
                    overflow: hidden;
                    position: relative;
                }
                
                .vibes-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #FF5BF1, #6370E7, #4AE54A);
                    transition: width 0.1s ease;
                    position: relative;
                    animation: pulse-fill 2s ease-in-out infinite;
                }
                
                @keyframes pulse-fill {
                    0%, 100% { filter: brightness(1); }
                    50% { filter: brightness(1.2); }
                }
                
                .nav {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
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
                    color: #6370E7;
                    text-shadow: 0 0 10px rgba(99, 112, 231, 0.5);
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
                    color: #6370E7;
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
                        background: #6370E7;
                        color: white;
                    }
                    
                    .nav-links {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(10px);
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
                    background: linear-gradient(135deg, #FF5BF1, #6370E7);
                    color: white;
                    padding: 0.25rem 0.5rem;
                    transform: rotate(12deg);
                    cursor: pointer;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    animation: digital-pulse 3s infinite;
                }

                @keyframes digital-pulse {
                    0%, 100% { 
                        box-shadow: 0 0 10px rgba(99, 112, 231, 0.3);
                        transform: rotate(12deg) scale(1);
                    }
                    50% { 
                        box-shadow: 0 0 20px rgba(255, 91, 241, 0.6);
                        transform: rotate(12deg) scale(1.05);
                    }
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
                    color: #6370E7;
                }
                
                .renaissance-showcase {
                    background: linear-gradient(135deg, #6370E7 0%, #FF5BF1 50%, #4AE54A 100%);
                    background-size: 400% 400%;
                    animation: renaissance-flow 10s ease-in-out infinite;
                    color: white;
                    padding: 3rem;
                    margin: 2rem 0;
                    position: relative;
                }
                
                .renaissance-showcase::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
                        linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%);
                    animation: cross-fade 6s infinite;
                }
                
                @keyframes cross-fade {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; }
                }
                
                @keyframes renaissance-flow {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                .renaissance-badges {
                    animation: digital-float 7s ease-in-out infinite;
                }
                
                @keyframes digital-float {
                    0%, 100% { 
                        transform: translateY(0px) rotateY(0deg); 
                    }
                    25% { 
                        transform: translateY(-5px) rotateY(5deg); 
                    }
                    50% { 
                        transform: translateY(-12px) rotateY(0deg); 
                    }
                    75% { 
                        transform: translateY(-5px) rotateY(-5deg); 
                    }
                }

                .digital-serif {
                    font-family: 'Times New Roman', serif;
                    letter-spacing: 1px;
                }

                .renaissance-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                }

                @media (max-width: 768px) {
                    .renaissance-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .holographic-text {
                    background: linear-gradient(45deg, #FF5BF1, #6370E7, #4AE54A, #FF5BF1);
                    background-size: 400% 400%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: holographic 8s ease-in-out infinite;
                }

                @keyframes holographic {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>

            <nav className="nav">
                <div className="nav-container">
                    <div className="text-xl font-black digital-serif">
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

            <div id="home" className="pt-20 min-h-screen">
                <section className="px-4 md:px-8 py-16 flex items-center">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none uppercase text-black mb-8 holographic-text">
                                    CURATIONS
                                </h1>
                                
                                <div className="mt-8">
                                    <div className="brutal-box digital-glow renaissance-pattern bg-white text-black p-4 md:p-6">
                                        <h2 className="text-lg md:text-2xl font-black uppercase text-center digital-serif">
                                            WE CURATE THE
                                        </h2>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                                        <a href="/creative-campaigns" className="brutal-box creative-card bg-[#FF5BF1] text-white p-6 md:p-8">
                                            <h3 className="text-xl md:text-2xl lg:text-4xl font-black text-center uppercase digital-serif">
                                                [HEART]
                                            </h3>
                                            <div className="mt-2 text-center text-xs md:text-sm font-bold">
                                                DIGITAL SOUL
                                            </div>
                                        </a>
                                        
                                        <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer" className="brutal-box creative-card bg-[#6370E7] text-white p-6 md:p-8">
                                            <h3 className="text-xl md:text-2xl lg:text-4xl font-black text-center uppercase digital-serif">
                                                [HEADLINES]
                                            </h3>
                                            <div className="mt-2 text-center text-xs md:text-sm font-bold">
                                                VIRAL RENAISSANCE
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 md:mt-0 space-y-4">
                               <LiveDispatches />
                                
                                <div className="brutal-box bg-white p-4 md:p-6 renaissance-pattern">
                                    <h3 className="font-black text-sm md:text-lg uppercase mb-4 text-[#6370E7] digital-serif">CREATIVE VIBES</h3>
                                    <div className="creative-vibes-meter brutal-box" style={{boxShadow: 'none'}}>
                                        <div 
                                            className="vibes-fill" 
                                            style={{ width: `${creativityMeter}%` }}
                                        >
                                            <span style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                color: 'white',
                                                fontWeight: 800,
                                                fontSize: '0.75rem',
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                                                mixBlendMode: 'difference'
                                            }}>
                                                CREATIVE VIBES: {creativityMeter}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-16 text-center">
                            <div className="flex flex-wrap gap-3 md:gap-4 justify-center renaissance-badges">
                                <div className="inline-flex items-center gap-2 bg-[#4AE54A] border-2 border-black px-3 md:px-4 py-2 font-bold text-xs md:text-sm digital-serif">
                                    <span>🏆</span> GROW WITH GOOGLE
                                </div>
                                <div className="inline-flex items-center gap-2 bg-[#6370E7] text-white border-2 border-black px-3 md:px-4 py-2 font-bold text-xs md:text-sm digital-serif">
                                    <span>📰</span> MEDIA + AGENCY
                                </div>
                                <div className="inline-flex items-center gap-2 bg-[#FF5BF1] text-white border-2 border-black px-3 md:px-4 py-2 font-bold text-xs md:text-sm digital-serif">
                                    <span>🌟</span> DIGITAL RENAISSANCE
                                </div>
                                <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-3 md:px-4 py-2 font-bold text-xs md:text-sm digital-serif">
                                    <span>🤖</span> HUMAN + AI POWERED
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div id="about" className="pt-0">
                <div className="renaissance-showcase brutal-box">
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase digital-serif">ABOUT [CURATIONS]</h1>
                        <p className="text-lg md:text-xl mt-4 max-w-4xl mx-auto font-black">
                            We curate the <span className="bg-[#FF5BF1] text-white px-2 py-1 border-2 border-black digital-serif">HEART</span> and <span className="bg-white text-[#6370E7] px-2 py-1 border-2 border-black digital-serif">HEADLINES</span> of <span className="bg-[#4AE54A] text-black px-2 py-1 border-2 border-black digital-serif">BRANDS</span>
                        </p>
                    </div>
                </div>
                
                <div className="bg-[#FDFDFC] py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="renaissance-grid">
                            <div className="brutal-box creative-card bg-[#FF5BF1] p-6 md:p-8 digital-glow">
                                <div className="text-4xl md:text-6xl mb-4">🎨</div>
                                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase text-white digital-serif">DIGITAL ARTISANS</h3>
                                <p className="text-sm md:text-base leading-relaxed text-white">We blend classical creativity principles with cutting-edge digital innovation, crafting timeless brands for the digital age.</p>
                            </div>
                            
                            <div className="brutal-box creative-card bg-[#6370E7] p-6 md:p-8">
                                <div className="text-4xl md:text-6xl mb-4">⚡</div>
                                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase text-white digital-serif">RENAISSANCE FUSION</h3>
                                <p className="text-sm md:text-base leading-relaxed text-white">Where agency expertise meets media innovation. We're creating a new paradigm for brand storytelling.</p>
                            </div>
                            
                            <div className="brutal-box creative-card bg-[#4AE54A] p-6 md:p-8">
                                <div className="text-4xl md:text-6xl mb-4">🔮</div>
                                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase text-black digital-serif">FUTURE ARCHAEOLOGY</h3>
                                <p className="text-sm md:text-base leading-relaxed text-black">We dig deep into emerging digital culture to unearth tomorrow's trends today.</p>
                            </div>
                        </div>

                        <div className="brutal-box bg-gradient-to-br from-slate-100 to-purple-50 p-6 md:p-8 mt-8 digital-glow renaissance-pattern">
                            <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase text-center digital-serif holographic-text">THE RENAISSANCE REVOLUTION</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-base md:text-lg leading-relaxed mb-4">
                                        In this digital renaissance, we're the Medici family of modern marketing—cultivating authentic cultural movements through strategic investment in creativity and innovation.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base md:text-lg leading-relaxed">
                                        <a href="https://la.curations.org" className="bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] text-white px-1 font-black border-2 border-black digital-serif">CurationsLA</a> serves as our cultural observatory, documenting the evolution of digital society in real-time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services" className="pt-0">
                <div className="renaissance-showcase brutal-box">
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase mb-4 digital-serif">
                            DIGITAL <span className="text-[#4AE54A]">ATELIER</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-4xl mx-auto">
                            Masterful craftsmanship for the connected age
                        </p>
                    </div>
                </div>
                
                <div className="bg-[#FDFDFC] py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <a href="/restaurant-biz" className="brutal-box creative-card bg-[#FF5BF1] text-white p-6 md:p-8 digital-glow">
                                <span className="text-4xl md:text-5xl">🍽️</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase digital-serif">Restaurant & Biz</h3>
                                <p className="mt-4 text-sm md:text-base">Culinary experiences that transcend the physical and digital realms.</p>
                                <div className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-black uppercase inline-block text-sm digital-serif">
                                    EXPLORE
                                </div>
                            </a>
                            
                            <a href="/ai-discovery" className="brutal-box creative-card bg-[#6370E7] text-white p-6 md:p-8">
                                <span className="text-4xl md:text-5xl">🤖</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase digital-serif">AI Discovery</h3>
                                <p className="mt-4 text-sm md:text-base">Renaissance minds enhanced by artificial intelligence.</p>
                                <div className="mt-4 bg-white text-[#6370E7] px-4 py-2 font-black uppercase inline-block text-sm digital-serif">
                                    EXPLORE
                                </div>
                            </a>
                            
                            <a href="/public-relations" className="brutal-box creative-card bg-[#FF5BF1] text-white p-6 md:p-8">
                                <span className="text-4xl md:text-5xl">📺</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase digital-serif">Media Buying & PR</h3>
                                <p className="mt-4 text-sm md:text-base">Strategic placements across the digital cultural landscape.</p>
                                <div className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-black uppercase inline-block text-sm digital-serif">
                                    EXPLORE
                                </div>
                            </a>

                            <a href="/creative-campaigns" className="brutal-box creative-card bg-[#6370E7] text-white p-6 md:p-8">
                                <span className="text-4xl md:text-5xl">🎨</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase digital-serif">Creative Campaigns</h3>
                                <p className="mt-4 text-sm md:text-base">Campaigns that become digital cultural artifacts.</p>
                                <div className="mt-4 bg-white text-[#6370E7] px-4 py-2 font-black uppercase inline-block text-sm digital-serif">
                                    EXPLORE
                                </div>
                            </a>

                            <a href="/influencer-ugc" className="brutal-box creative-card bg-[#4AE54A] text-black p-6 md:p-8">
                                <span className="text-4xl md:text-5xl">🤝</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase digital-serif">Influencer & UGC</h3>
                                <p className="mt-4 text-sm md:text-base">Authentic partnerships with digital renaissance creators.</p>
                                <div className="mt-4 bg-white text-black px-4 py-2 font-black uppercase inline-block text-sm digital-serif">
                                    EXPLORE
                                </div>
                            </a>

                            <a href="/newsletter-services" className="brutal-box creative-card bg-[#FF5BF1] text-white p-6 md:p-8">
                                <span className="text-4xl md:text-5xl">📧</span>
                                <h3 className="font-black text-xl md:text-2xl mt-4 uppercase digital-serif">Newsletter Services</h3>
                                <p className="mt-4 text-sm md:text-base">Curated communications for the enlightened digital age.</p>
                                <div className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-black uppercase inline-block text-sm digital-serif">
                                    EXPLORE
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="pt-0 renaissance-showcase brutal-box">
                <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 uppercase digital-serif">
                        COMMISSION YOUR RENAISSANCE?
                    </h2>
                    <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
                        Join the digital cultural revolution. Create tomorrow's classics today.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="mailto:curate@curations.org" className="brutal-box digital-glow bg-white text-[#6370E7] px-6 md:px-8 py-4 font-black uppercase border-4 border-black cursor-pointer no-underline text-sm md:text-base digital-serif">
                            BEGIN RENAISSANCE
                        </a>
                        <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer" className="brutal-box bg-[#4AE54A] text-black px-6 md:px-8 py-4 font-black uppercase border-4 border-black cursor-pointer no-underline text-sm md:text-base digital-serif">
                            SEE CURATIONSLA
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;