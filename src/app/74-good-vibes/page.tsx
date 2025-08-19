
'use client';
import { useState, useEffect } from 'react';

const GoodVibes74Page = () => {
    const [activePage, setActivePage] = useState('home');
    const [isMenuOpen, setMenuOpen] = useState(false);

    const showPage = (pageId: string) => {
        setActivePage(pageId);
        setMenuOpen(false); // Close menu on navigation
        window.scrollTo(0, 0);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            setActivePage(hash);
        }
    }, []);


    return (
        <>
            <style jsx global>{`
                body {
                    font-family: 'JetBrains Mono', monospace;
                    background: white;
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
                
                .neon-glow-pink {
                    box-shadow: 0 0 40px rgba(255, 91, 241, 0.6),
                                inset 0 0 40px rgba(255, 91, 241, 0.1);
                }
                
                /* Navigation */
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
                
                /* Page sections */
                .page-section {
                    display: none;
                    padding-top: 80px; /* Adjust based on nav height */
                    min-height: 100vh;
                }
                
                .page-section.active {
                    display: block;
                }
                
                /* Mobile menu toggle */
                .menu-toggle {
                    display: none;
                    background: #FF5BF1;
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    font-weight: 700;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .menu-toggle {
                        display: block;
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
                
                /* Service page styles */
                .service-hero {
                    padding: 4rem 2rem;
                    background: linear-gradient(135deg, #FF5BF1 0%, #6370E7 100%);
                    color: white;
                    text-align: center;
                }
                
                .service-content {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 4rem 2rem;
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
                
                /* Corner Badge */
                .corner-badge {
                    position: fixed;
                    top: 80px;
                    right: 20px;
                    z-index: 50;
                    background: #FF5BF1;
                    color: white;
                    padding: 0.5rem 1rem;
                    transform: rotate(12deg);
                    cursor: pointer;
                    text-decoration: none;
                    transition: transform 0.2s ease-in-out;
                }
                
                .corner-badge:hover {
                    transform: rotate(12deg) scale(1.1);
                }
            `}</style>
            
            <nav className="nav">
                <div className="nav-container">
                    <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                        <a onClick={() => showPage('home')} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>[CURATIONS]</a>
                    </div>
                    <button className="menu-toggle brutal-box" onClick={toggleMenu}>MENU</button>
                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
                        <li><a onClick={() => showPage('home')}>Home</a></li>
                        <li><a onClick={() => showPage('about')}>About</a></li>
                        <li><a onClick={() => showPage('services')}>Services</a></li>
                        <li><a onClick={() => showPage('contact')}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            <a href="mailto:hello@curations.la" className="corner-badge brutal-box">
                <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>EMAIL US! 📧</span>
            </a>

            <div id="home" className={`page-section ${activePage === 'home' ? 'active' : ''}`}>
                <section style={{ minHeight: '70vh', padding: '4rem 2rem', display: 'flex', alignItems: 'center' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div className="grid grid-2" style={{ alignItems: 'center' }}>
                            <div>
                                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, lineHeight: 1, textTransform: 'uppercase' }}>
                                    <span className="slide-in" style={{ display: 'block' }}>CURATIONS</span>
                                    <span className="text-outline-subtle slide-in" style={{ display: 'block', animationDelay: '0.2s' }}>CURATIONS</span>
                                    <span className="slide-in" style={{ display: 'block', color: '#6370E7', animationDelay: '0.4s' }}>CURATIONS</span>
                                </h1>
                                
                                <div className="mt-8">
                                    <div className="brutal-box pulse-brutal" style={{ background: 'black', color: 'white', padding: '1.5rem' }}>
                                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', textAlign: 'center' }}>
                                            WE CURATE THE
                                        </h2>
                                    </div>
                                    
                                    <div className="grid grid-2 mt-4">
                                        <div className="brutal-box pulse-brutal" style={{ background: '#FF5BF1', color: 'white', padding: '2rem', animationDelay: '0.3s' }}>
                                            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, textAlign: 'center', textTransform: 'uppercase' }}>
                                                [HEART]
                                            </h3>
                                            <div style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: 700 }}>
                                                BRAND CONNECTION
                                            </div>
                                        </div>
                                        
                                        <div className="brutal-box pulse-brutal" style={{ background: '#6370E7', color: 'white', padding: '2rem', animationDelay: '0.6s' }}>
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
                                <div className="brutal-box mb-4" style={{ background: '#EBF998', padding: '1.5rem' }}>
                                    <h3 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>OUR FOCUS</h3>
                                    <ul style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                                        <li style={{ fontWeight: 700, marginBottom: '0.5rem' }}>[1] Restaurant Launches</li>
                                        <li style={{ fontWeight: 700, marginBottom: '0.5rem' }}>[2] AI Discovery</li>
                                        <li style={{ fontWeight: 700, marginBottom: '0.5rem' }}>[3] Media Buying</li>
                                        <li style={{ fontWeight: 700, marginBottom: '0.5rem' }}>[4] Creative Collabs</li>
                                        <li style={{ fontWeight: 700 }}>[5] Communications</li>
                                    </ul>
                                </div>
                                
                                <div className="brutal-box" style={{ background: 'white', padding: '1.5rem' }}>
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
                    </div>
                </section>
            </div>
            
            <div id="about" className={`page-section ${activePage === 'about' ? 'active' : ''}`}>
                <div className="service-hero">
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase' }}>ABOUT [CURATIONS]</h1>
                    <p style={{ fontSize: '1.25rem', marginTop: '1rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Where Culture Meets Commerce in Los Angeles
                    </p>
                </div>
                
                <div className="service-content">
                    <div className="brutal-box mb-8" style={{ background: '#EBF998', padding: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>OUR STORY</h2>
                        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                            Born from the creative chaos of Los Angeles, CURATIONS emerged when we realized brands weren&apos;t just competing for market share—they were competing for cultural relevance. In a city where trends are born at food trucks and go global through TikTok, we saw an opportunity to bridge the gap between authentic local culture and ambitious brand storytelling.
                        </p>
                        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                            We started with a simple observation: the brands that win hearts don&apos;t just advertise, they participate. They show up at the right moments, in the right places, with the right message. They understand that in LA, your next customer might be at a warehouse party in DTLA, a farmers market in Santa Monica, or scrolling through their phone at a coffee shop in Silver Lake.
                        </p>
                        <p style={{ lineHeight: 1.8 }}>
                            Today, CURATIONS operates at the intersection of digital innovation and street-level culture. We&apos;re not just another agency—we&apos;re cultural architects, building bridges between what brands want to say and what people actually want to hear.
                        </p>
                    </div>
        
                    <div className="grid grid-2 mb-8">
                        <div className="brutal-box" style={{ background: '#FF5BF1', color: 'white', padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>[PHILOSOPHY]</h3>
                            <p style={{ lineHeight: 1.8 }}>We believe in &apos;Vibe Coding&apos;—the art and science of decoding cultural signals and translating them into brand actions that feel authentic, not advertised. It’s about being part of the conversation, not just buying your way into it. Our work is data-informed but human-driven, ensuring every campaign has a real, beating heart.</p>
                        </div>
                         <div className="brutal-box" style={{ background: '#6370E7', color: 'white', padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>[DUAL POWERHOUSE]</h3>
                            <p style={{ lineHeight: 1.8 }}>What makes us unique is our dual structure. While CURATIONS crafts your brand&apos;s voice and strategy, our sister media company, CurationsLA, amplifies it. With a newsletter reaching over 50,000 of LA&apos;s most engaged citizens, we don&apos;t just hope for media pickup—we create it.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="services" className={`page-section ${activePage === 'services' ? 'active' : ''}`}>
                <div className="service-hero">
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase' }}>OUR CURATIONS</h1>
                    <p style={{ fontSize: '1.25rem', marginTop: '1rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                        A full-stack arsenal for modern brands.
                    </p>
                </div>
                <div className="service-content">
                    <div className="grid grid-3">
                         <div className="brutal-box" style={{background: 'white', padding: '2rem', display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontSize: '3rem'}}>🍽️</span>
                            <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}}>Restaurant & Biz</h3>
                            <ul style={{marginTop: '1rem', listStyle: 'none', fontSize: '0.875rem', fontWeight: 700, flexGrow: 1}}>
                                <li style={{marginBottom: '0.5rem'}}>• Grand Openings & Events</li>
                                <li style={{marginBottom: '0.5rem'}}>• Menu Marketing Magic</li>
                                <li style={{marginBottom: '0.5rem'}}>• Third-Party App Strategy</li>
                                <li>• Delivery Optimization</li>
                            </ul>
                            <div style={{marginTop: '1rem'}}>
                                <a onClick={() => showPage('restaurant-biz')} style={{fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer'}}>
                                    <span style={{background: '#EBF998', color: 'black', padding: '0.25rem 0.5rem'}}>Learn More</span>
                                </a>
                            </div>
                        </div>
                        <div className="brutal-box" style={{background: 'white', padding: '2rem', display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontSize: '3rem'}}>🤖</span>
                            <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}}>AI Discovery</h3>
                            <ul style={{marginTop: '1rem', listStyle: 'none', fontSize: '0.875rem', fontWeight: 700, flexGrow: 1}}>
                                <li style={{marginBottom: '0.5rem'}}>• AI Prompt Engineering</li>
                                <li style={{marginBottom: '0.5rem'}}>• SEO & AI Citations</li>
                                <li style={{marginBottom: '0.5rem'}}>• Tech Stack Discovery</li>
                                <li>• Team Workshops</li>
                            </ul>
                            <div style={{marginTop: '1rem'}}>
                                <a onClick={() => showPage('ai-discovery')} style={{fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer'}}>
                                    <span style={{background: '#EBF998', color: 'black', padding: '0.25rem 0.5rem'}}>Learn More</span>
                                </a>
                            </div>
                        </div>
                        <div className="brutal-box" style={{background: 'white', padding: '2rem', display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontSize: '3rem'}}>📺</span>
                            <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}}>Media Buying</h3>
                            <ul style={{marginTop: '1rem', listStyle: 'none', fontSize: '0.875rem', fontWeight: 700, flexGrow: 1}}>
                                <li style={{marginBottom: '0.5rem'}}>• Netflix Placement</li>
                                <li style={{marginBottom: '0.5rem'}}>• Podcast Ads</li>
                                <li style={{marginBottom: '0.5rem'}}>• Linear TV</li>
                                <li>• Social Media</li>
                            </ul>
                            <div style={{marginTop: '1rem'}}>
                                <a onClick={() => showPage('media-buying')} style={{fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer'}}>
                                    <span style={{background: '#EBF998', color: 'black', padding: '0.25rem 0.5rem'}}>Learn More</span>
                                </a>
                            </div>
                        </div>
                        <div className="brutal-box" style={{background: 'white', padding: '2rem', display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontSize: '3rem'}}>👋</span>
                            <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}}>Creative Collabs</h3>
                            <ul style={{marginTop: '1rem', listStyle: 'none', fontSize: '0.875rem', fontWeight: 700, flexGrow: 1}}>
                                <li style={{marginBottom: '0.5rem'}}>• Social Strategy</li>
                                <li style={{marginBottom: '0.5rem'}}>• UGC that Converts</li>
                                <li>• Content Gaps</li>
                            </ul>
                            <div style={{marginTop: '1rem'}}>
                                <a onClick={() => showPage('creative-collabs')} style={{fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer'}}>
                                    <span style={{background: '#EBF998', color: 'black', padding: '0.25rem 0.5rem'}}>Learn More</span>
                                </a>
                            </div>
                        </div>
                        <div className="brutal-box" style={{background: 'white', padding: '2rem', display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontSize: '3rem'}}>📰</span>
                            <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}}>Communications</h3>
                            <ul style={{marginTop: '1rem', listStyle: 'none', fontSize: '0.875rem', fontWeight: 700, flexGrow: 1}}>
                                <li style={{marginBottom: '0.5rem'}}>• Corporate Comms</li>
                                <li style={{marginBottom: '0.5rem'}}>• Executive Branding</li>
                                <li>• Newsletter Design</li>
                            </ul>
                            <div style={{marginTop: '1rem'}}>
                                <a onClick={() => showPage('communications')} style={{fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer'}}>
                                    <span style={{background: '#EBF998', color: 'black', padding: '0.25rem 0.5rem'}}>Learn More</span>
                                </a>
                            </div>
                        </div>
                         <div className="brutal-box" style={{background: 'white', padding: '2rem', display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontSize: '3rem'}}>🚀</span>
                            <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}}>SEO & Discovery</h3>
                            <ul style={{marginTop: '1rem', listStyle: 'none', fontSize: '0.875rem', fontWeight: 700, flexGrow: 1}}>
                                <li style={{marginBottom: '0.5rem'}}>• Big Search</li>
                                <li style={{marginBottom: '0.5rem'}}>• AI Citations</li>
                                <li>• Rich Snippets</li>
                            </ul>
                            <div style={{marginTop: '1rem'}}>
                                <a onClick={() => showPage('seo-discovery')} style={{fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer'}}>
                                    <span style={{background: '#EBF998', color: 'black', padding: '0.25rem 0.5rem'}}>Learn More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                     <div className="brutal-box mt-8 mb-8" style={{background: 'linear-gradient(to right, #FF5BF1, #6370E7, #EBF998)', padding: '2rem', color: 'white'}}>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3 style={{fontSize: 'clamp(1.25rem, 2vw, 2rem)', fontWeight: 800, marginRight: '1.5rem'}}>FULL STACK DIGITAL</h3>
                            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem'}}>
                                <span style={{background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', fontWeight: 700, border: '2px solid black'}}>PAID SEARCH</span>
                                <span style={{background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', fontWeight: 700, border: '2px solid black'}}>PAID SOCIAL</span>
                                <span style={{background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', fontWeight: 700, border: '2px solid black'}}>DISPLAY ADS</span>
                                <span style={{background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', fontWeight: 700, border: '2px solid black'}}>EMAIL/CRM</span>
                                <span style={{background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', fontWeight: 700, border: '2px solid black'}}>SEO</span>
                                <span style={{background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', fontWeight: 700, border: '2px solid black'}}>UI/UX</span>
                            </div>
                        </div>
                    </div>
                    <div style={{padding: '3rem 2rem', background: 'black'}}>
                        <div className="text-center">
                            <div className="brutal-box neon-glow-pink" style={{display: 'inline-block', padding: '2rem', border: '2px solid #EBF998'}}>
                                <p style={{fontSize: '1.5rem', fontWeight: 800, color: '#EBF998', textTransform: 'uppercase'}}>🏆 GROW WITH GOOGLE PARTNER</p>
                                <p style={{marginTop: '0.5rem', fontSize: '0.875rem', color: 'white'}}>One deserving brand gets a full-service partnership for free, yearly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="contact" className={`page-section ${activePage === 'contact' ? 'active' : ''}`}>
                <div className="service-hero">
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase' }}>LET&apos;S CURATE</h1>
                    <p style={{ fontSize: '1.25rem', marginTop: '1rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Have a project, a question, or just want to vibe? Drop us a line.
                    </p>
                </div>
                <div className="service-content">
                    <div className="brutal-box" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
                        <form action="mailto:hello@curations.la" method="post" encType="text/plain">
                            <div style={{ marginBottom: '1rem' }}>
                                <label htmlFor="name" style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>NAME</label>
                                <input type="text" id="name" name="name" className="brutal-box" style={{ width: '100%', padding: '0.75rem', border: '4px solid black', boxShadow: 'none' }} required />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label htmlFor="email" style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>EMAIL</label>
                                <input type="email" id="email" name="email" className="brutal-box" style={{ width: '100%', padding: '0.75rem', border: '4px solid black', boxShadow: 'none' }} required />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label htmlFor="message" style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>MESSAGE</label>
                                <textarea id="message" name="message" rows={6} className="brutal-box" style={{ width: '100%', padding: '0.75rem', border: '4px solid black', boxShadow: 'none' }} required></textarea>
                            </div>
                            <button type="submit" className="brutal-box btn-primary" style={{ width: '100%', padding: '1rem' }}>SEND IT</button>
                        </form>
                    </div>
                     <section style={{padding: '5rem 2rem', background: 'black', marginTop: '4rem'}}>
                        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
                            <div className="brutal-box" style={{background: 'white', color: 'black', padding: '3rem', textAlign: 'center'}}>
                                <h3 style={{fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase'}}>RECEIVE GOOD VIBES IN YOUR INBOX</h3>
                                <p style={{fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 700}}>Curate Los Angeles with&nbsp;us</p>
                                <button className="brutal-box btn-primary" style={{padding: '1rem 2rem', fontSize: '1.125rem'}}>
                                    SUBSCRIBE TO CURATIONSLA
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
            <div id="restaurant-biz" className={`page-section ${activePage === 'restaurant-biz' ? 'active' : ''}`}>
                <div className="service-hero"><h1>🍽️ Restaurant & Biz</h1></div>
                <div className="service-content"><p>Details about Restaurant & Biz services...</p></div>
            </div>
            <div id="ai-discovery" className={`page-section ${activePage === 'ai-discovery' ? 'active' : ''}`}>
                <div className="service-hero"><h1>🤖 AI Discovery</h1></div>
                <div className="service-content"><p>Details about AI Discovery services...</p></div>
            </div>
            <div id="media-buying" className={`page-section ${activePage === 'media-buying' ? 'active' : ''}`}>
                <div className="service-hero"><h1>📺 Media Buying</h1></div>
                <div className="service-content"><p>Details about Media Buying services...</p></div>
            </div>
            <div id="creative-collabs" className={`page-section ${activePage === 'creative-collabs' ? 'active' : ''}`}>
                <div className="service-hero"><h1>👋 Creative Collabs</h1></div>
                <div className="service-content"><p>Details about Creative Collabs services...</p></div>
            </div>
            <div id="communications" className={`page-section ${activePage === 'communications' ? 'active' : ''}`}>
                <div className="service-hero"><h1>📰 Communications</h1></div>
                <div className="service-content"><p>Details about Communications services...</p></div>
            </div>
            <div id="seo-discovery" className={`page-section ${activePage === 'seo-discovery' ? 'active' : ''}`}>
                <div className="service-hero"><h1>🚀 SEO & Discovery</h1></div>
                <div className="service-content"><p>Details about SEO & Discovery services...</p></div>
            </div>
        </>
    );
};

export default GoodVibes74Page;
