
'use client';
import { useState, useEffect } from 'react';

const HomePageDraft = () => {
    const [activePage, setActivePage] = useState('home');
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

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
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        
        const hash = window.location.hash.substring(1);
        if (hash) {
            setActivePage(hash);
        } else {
            window.scrollTo(0, 0);
        }
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Schema.org structured data for SEO
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Curations",
        "url": "https://curations.org",
        "logo": "https://curations.org/logo.png",
        "description": "We curate the HEART and HEADLINES of brands through strategic marketing, AI discovery, and cultural connection.",
        "foundingLocation": "Los Angeles, CA",
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Marketing Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Restaurant & Business Marketing",
                        "description": "Grand openings, menu marketing, delivery optimization"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI Discovery",
                        "description": "AI prompt engineering, SEO, tech stack discovery"
                    }
                }
            ]
        }
    };

    return (
        <div style={{ scrollBehavior: 'smooth' }}>
            <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            
            <style jsx global>{`
                html {
                    scroll-behavior: smooth;
                }
                body {
                    font-family: 'JetBrains Mono', monospace;
                    background: #FDFDFC;
                    color: black;
                    overflow-x: hidden;
                }
                
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                }
                
                .text-outline-subtle {
                    -webkit-text-stroke: 1.5px #FF5BF1;
                    -webkit-text-fill-color: transparent;
                }
                
                @keyframes pulse-brutal {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                }
                
                .pulse-brutal {
                    animation: pulse-brutal 1.8s ease-in-out infinite;
                }
                
                @keyframes slideIn {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
                
                .slide-in {
                    animation: slideIn 0.8s ease-out;
                }
                
                @keyframes fadeInUp {
                    from { 
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .fade-in-up {
                    animation: fadeInUp 0.8s ease-out;
                }
                
                .neon-glow-pink {
                    box-shadow: 0 0 40px rgba(255, 91, 241, 0.6),
                                inset 0 0 40px rgba(255, 91, 241, 0.1);
                }
                
                .parallax-element {
                    transform: translateY(${scrollY * 0.5}px);
                }
                
                /* Navigation with scroll effect */
                .nav {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    background: ${scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'white'};
                    backdrop-filter: ${scrollY > 50 ? 'blur(10px)' : 'none'};
                    z-index: 100;
                    border-bottom: 4px solid black;
                    transition: all 0.3s ease;
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
                
                .nav-links a:hover {
                    color: #FF5BF1;
                    transform: scale(1.1);
                }
                
                .page-section {
                    padding-top: 80px; 
                    min-height: 100vh;
                }
                
                /* Hero section enhancements */
                .hero-gradient {
                    background: linear-gradient(135deg, #FF5BF1 0%, #6370E7 50%, #EBF998 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .floating-element {
                    animation: float 3s ease-in-out infinite;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                /* Trust indicators */
                .trust-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: white;
                    border: 2px solid black;
                    padding: 0.5rem 1rem;
                    font-weight: 700;
                    font-size: 0.875rem;
                }
                
                /* Mobile menu toggle */
                .menu-toggle {
                    display: none;
                    background: #EBF998;
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

                    .arsenal-grid-container {
                        justify-content: center;
                    }
                }
                
                /* Corner Badge */
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

                /* Enhanced service cards */
                .service-card {
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 12px 12px 0px black;
                }
                
                /* Utility classes */
                .text-center { text-align: center; }
                .mb-2 { margin-bottom: 1rem; }
                .mb-4 { margin-bottom: 2rem; }
                .mb-8 { margin-bottom: 4rem; }
                .mt-4 { margin-top: 2rem; }
                .mt-8 { margin-top: 4rem; }
                .p-4 { padding: 2rem; }
                .p-8 { padding: 4rem; }
                
                .btn-primary {
                    background: #FF5BF1;
                    color: white;
                    padding: 1rem 2rem;
                    border: none;
                    font-weight: 700;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: background 0.3s;
                    text-decoration: none;
                    display: inline-block;
                }
                
                .btn-primary:hover {
                    background: #6370E7;
                }
                
                .grid {
                    display: grid;
                    gap: 2rem;
                }
                
                @media (min-width: 768px) {
                    .grid-2 {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .grid-3 {
                         grid-template-columns: repeat(3, 1fr);
                    }
                    .grid-4 {
                         grid-template-columns: repeat(4, 1fr);
                    }
                }
            `}</style>
            
            <nav className="nav">
                <div className="nav-container">
                    <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                        <a onClick={(e) => { e.preventDefault(); showPage('home');}} className="logo-link">[CURATIONS]</a>
                    </div>
                    <button className="menu-toggle brutal-box" onClick={toggleMenu}>MENU</button>
                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
                        <li><a onClick={(e) => { e.preventDefault(); showPage('home');}}>Home</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); showPage('about');}}>About</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); showPage('services');}}>Services</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); showPage('portfolio');}}>Portfolio</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); showPage('insights');}}>Insights</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); showPage('contact');}}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            <a href="mailto:curate@curations.org" className="corner-badge brutal-box">
                <span>EMAIL US!</span>
            </a>

            {/* Enhanced Hero Section */}
            <div id="home" className="page-section" style={{paddingTop: '80px', minHeight: 'auto'}}>
                <section style={{ padding: '2rem 2rem 4rem 2rem', display: 'flex', alignItems: 'center' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div className="grid grid-2" style={{ alignItems: 'center' }}>
                            <div>
                                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, lineHeight: 1, textTransform: 'uppercase' }}>
                                    <span className="slide-in" style={{ display: 'block' }}>CURATIONS</span>
                                    <span className="text-outline-subtle slide-in" style={{ display: 'block', animationDelay: '0.2s' }}>CURATIONS</span>
                                    <span className="slide-in hero-gradient" style={{ display: 'block', animationDelay: '0.4s' }}>CURATIONS</span>
                                </h1>
                                
                                <div className="mt-8">
                                    <div className="brutal-box pulse-brutal" style={{ background: 'white', color: 'black', padding: '1.5rem' }}>
                                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', textAlign: 'center' }}>
                                            WE CURATE THE
                                        </h2>
                                    </div>
                                    
                                    <div className="grid grid-2 mt-4">
                                        <div className="brutal-box pulse-brutal service-card" style={{ background: '#FF5BF1', color: 'white', padding: '2rem', animationDelay: '0.3s' }}>
                                            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, textAlign: 'center', textTransform: 'uppercase' }}>
                                                [HEART]
                                            </h3>
                                            <div style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: 700 }}>
                                                BRAND CONNECTION
                                            </div>
                                        </div>
                                        
                                        <div className="brutal-box pulse-brutal service-card" style={{ background: '#6370E7', color: 'white', padding: '2rem', animationDelay: '0.6s' }}>
                                            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, textAlign: 'center', textTransform: 'uppercase' }}>
                                                [HEADLINES]
                                            </h3>
                                            <div style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: 700 }}>
                                                CULTURAL IMPACT
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{ marginTop: '2rem' }}>
                                <div className="brutal-box mb-4 fade-in-up" style={{ background: '#EBF998', padding: '1.5rem' }}>
                                    <h3 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>OUR FOCUS</h3>
                                    <ul style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                                        <li style={{ fontWeight: 700, marginBottom: '0.5rem' }}>[1] Eats + Biz</li>
                                        <li style={{ fontWeight: 700, marginBottom: '0.5rem' }}>[2] AI Discovery</li>
                                        <li style={{ fontWeight: 700, marginBottom: '0.5rem' }}>[3] Media Buying</li>
                                        <li style={{ fontWeight: 700, marginBottom: '0.5rem' }}>[4] Creative Collabs</li>
                                        <li style={{ fontWeight: 700 }}>[5] Communications</li>
                                    </ul>
                                </div>
                                
                                <div className="brutal-box fade-in-up" style={{ background: 'white', padding: '1.5rem', animationDelay: '0.2s' }}>
                                    <p style={{ fontWeight: 800, fontSize: '1.125rem', textTransform: 'uppercase' }}>SYSTEMS:</p>
                                    <p className="pulse-brutal" style={{ fontSize: '1.875rem', marginTop: '0.5rem', fontWeight: 800, color: '#FF5BF1' }}>[ONLINE]</p>
                                    <div style={{ marginTop: '0.75rem' }}>
                                        <div className="brutal-box" style={{ width: '100%', background: '#e5e5e5', height: '1rem', border: '2px solid black', boxShadow: 'none' }}>
                                            <div className="pulse-brutal" style={{ background: '#6370E7', height: '100%', width: '100%' }}></div>
                                        </div>
                                        <p style={{ fontSize: '0.75rem', textAlign: 'right', fontWeight: 800, marginTop: '1rem' }}>
                                            <span style={{ background: '#EBF998', padding: '0.1rem 0.25rem', fontWeight: 800 }}>100% READY</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Trust Indicators */}
                        <div className="mt-8 text-center">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                                <div className="trust-badge">
                                    <span>🏆</span> GOOGLE PARTNER
                                </div>
                                <div className="trust-badge">
                                    <span>📈</span> 500% AVG GROWTH
                                </div>
                                <div className="trust-badge">
                                    <span>🌟</span> LA BASED
                                </div>
                                <div className="trust-badge">
                                    <span>🤖</span> AI POWERED
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            {/* Quick Stats Section */}
            <div style={{ background: 'black', padding: '2rem 0' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="grid grid-4">
                        <div className="text-center">
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FF5BF1' }}>100+</div>
                            <div style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>BRANDS CURATED</div>
                        </div>
                        <div className="text-center">
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#6370E7' }}>500%</div>
                            <div style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>AVG GROWTH</div>
                        </div>
                        <div className="text-center">
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#EBF998' }}>24/7</div>
                            <div style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>AI MONITORING</div>
                        </div>
                        <div className="text-center">
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FF5BF1' }}>∞</div>
                            <div style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>POSSIBILITIES</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Preview */}
            <div style={{ padding: '4rem 2rem', background: '#FDFDFC' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div className="text-center mb-8">
                        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>
                            OUR <span className="hero-gradient">CURATIONS</span>
                        </h2>
                        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            Full-stack solutions for brands ready to make cultural impact
                        </p>
                    </div>
                    
                    <div className="grid grid-3">
                        <div className="brutal-box service-card" style={{background: '#FF5BF1', color: 'white', padding: '2rem'}}>
                            <span style={{fontSize: '3rem'}}>🍽️</span>
                            <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}}>Restaurant & Biz</h3>
                            <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Grand openings, menu marketing, delivery optimization, and cultural integration.</p>
                            <button onClick={() => showPage('services')} className="btn-primary" style={{marginTop: '1rem', background: 'white', color: '#FF5BF1'}}>
                                EXPLORE
                            </button>
                        </div>
                        
                        <div className="brutal-box service-card" style={{background: '#6370E7', color: 'white', padding: '2rem'}}>
                            <span style={{fontSize: '3rem'}}>🤖</span>
                            <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}}>AI Discovery</h3>
                            <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Prompt engineering, SEO optimization, and tech stack discovery for the AI age.</p>
                            <button onClick={() => showPage('services')} className="btn-primary" style={{marginTop: '1rem', background: 'white', color: '#6370E7'}}>
                                EXPLORE
                            </button>
                        </div>
                        
                        <div className="brutal-box service-card" style={{background: '#EBF998', color: 'black', padding: '2rem'}}>
                            <span style={{fontSize: '3rem'}}>📺</span>
                            <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}}>Media Buying</h3>
                            <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Netflix placements, podcast ads, linear TV, and strategic social media.</p>
                            <button onClick={() => showPage('services')} className="btn-primary" style={{marginTop: '1rem'}}>
                                EXPLORE
                            </button>
                        </div>
                    </div>
                    
                    <div className="text-center mt-8">
                        <button onClick={() => showPage('services')} className="brutal-box btn-primary" style={{padding: '1.5rem 3rem', fontSize: '1.25rem'}}>
                            VIEW ALL SERVICES
                        </button>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div style={{ background: 'linear-gradient(135deg, #FF5BF1 0%, #6370E7 100%)', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>
                        READY TO CURATE YOUR SUCCESS?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Join 100+ brands that chose culture over algorithms, authenticity over automation.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button onClick={() => showPage('contact')} className="brutal-box" style={{background: 'white', color: '#FF5BF1', padding: '1rem 2rem', fontWeight: 800, textTransform: 'uppercase', border: '4px solid black', cursor: 'pointer'}}>
                            START YOUR CURATION
                        </button>
                        <button onClick={() => showPage('portfolio')} className="brutal-box" style={{background: '#EBF998', color: 'black', padding: '1rem 2rem', fontWeight: 800, textTransform: 'uppercase', border: '4px solid black', cursor: 'pointer'}}>
                            VIEW OUR WORK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageDraft;
