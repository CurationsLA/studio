'use client';
import { useState, useEffect } from 'react';

const GlitchMatrixPage = () => {
    const [activePage, setActivePage] = useState('home');
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [glitchText, setGlitchText] = useState('CURATIONS');

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
        const glitchWords = ['CURATIONS', 'CURAT10NS', 'CUR@T1ONS', 'CURATIONS', '©URATIONS', 'CURATIONS'];
        let index = 0;
        
        const glitchInterval = setInterval(() => {
            setGlitchText(glitchWords[index % glitchWords.length]);
            index++;
        }, 150);

        setTimeout(() => clearInterval(glitchInterval), 3000);

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
        <>
            <style jsx global>{`
                :root {
                    --primary: 337 100% 66%;
                    --accent: 242 73% 63%;
                }
                
                html { scroll-behavior: smooth; }
                body { 
                    background: #FDFDFC; 
                    color: black; 
                    overflow-x: hidden;
                    font-family: 'Arial Black', sans-serif;
                }
                
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                }
                
                @keyframes matrix-rain {
                    0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                }
                
                @keyframes glitch-shake {
                    0%, 100% { transform: translate(0); }
                    10% { transform: translate(-2px, 2px); }
                    20% { transform: translate(2px, -2px); }
                    30% { transform: translate(-2px, -2px); }
                    40% { transform: translate(2px, 2px); }
                    50% { transform: translate(-2px, 0); }
                    60% { transform: translate(2px, 0); }
                    70% { transform: translate(0, -2px); }
                    80% { transform: translate(0, 2px); }
                    90% { transform: translate(-2px, 2px); }
                }
                
                @keyframes data-stream {
                    0% { opacity: 0; transform: scaleX(0); }
                    50% { opacity: 1; transform: scaleX(1); }
                    100% { opacity: 0; transform: scaleX(0); }
                }
                
                .glitch-text {
                    animation: glitch-shake 0.3s infinite;
                    position: relative;
                }
                
                .glitch-text::before {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 2px;
                    color: #FF5BF1;
                    opacity: 0.8;
                    z-index: -1;
                }
                
                .glitch-text::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: -2px;
                    color: #6370E7;
                    opacity: 0.8;
                    z-index: -1;
                }
                
                .matrix-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    overflow: hidden;
                    pointer-events: none;
                    z-index: -1;
                }
                
                .matrix-char {
                    position: absolute;
                    color: #EBF998;
                    font-family: 'Courier New', monospace;
                    font-weight: bold;
                    animation: matrix-rain 4s linear infinite;
                    opacity: 0.3;
                }
                
                .data-stream {
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #FF5BF1, transparent);
                    animation: data-stream 2s ease-in-out infinite;
                    margin: 0.5rem 0;
                }
                
                .cyber-grid {
                    background-image: 
                        linear-gradient(rgba(255, 91, 241, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 91, 241, 0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                
                .hologram {
                    background: linear-gradient(45deg, 
                        rgba(255, 91, 241, 0.1) 0%, 
                        rgba(99, 112, 231, 0.1) 50%, 
                        rgba(235, 249, 152, 0.1) 100%);
                    backdrop-filter: blur(1px);
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
                    font-size: 1.5rem;
                    font-weight: 800;
                }
                
                .logo-link:hover { color: hsl(var(--primary)); }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
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
                    color: hsl(var(--primary));
                }
                
                .menu-toggle {
                    display: none;
                    background: #EBF998;
                    color: black;
                    border: none;
                    padding: 0.5rem 1rem;
                    font-weight: 700;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .menu-toggle { display: block; }
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
                    .nav-links.open { display: flex; }
                }
                
                .page-section { padding-top: 80px; min-height: 100vh; }
                .grid { display: grid; gap: 2rem; }
                
                @media (min-width: 768px) {
                    .grid-2 { grid-template-columns: repeat(2, 1fr); }
                    .grid-3 { grid-template-columns: repeat(3, 1fr); }
                }
                
                .corner-badge {
                    position: fixed;
                    top: 100px;
                    right: 15px;
                    z-index: 50;
                    background: hsl(var(--primary));
                    color: white;
                    padding: 0.5rem 1rem;
                    transform: rotate(12deg);
                    cursor: pointer;
                    text-decoration: none;
                    font-weight: 700;
                    transition: all 0.2s ease-in-out;
                }
                
                .corner-badge:hover {
                    transform: rotate(12deg) scale(1.1);
                    background: white;
                    color: hsl(var(--primary));
                }
                
                .service-card {
                    transition: all 0.3s ease;
                    cursor: pointer;
                    display: block;
                    text-decoration: none;
                }
                
                .service-card:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 12px 12px 0px black;
                }
                
                .trust-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: white;
                    border: 2px solid black;
                    padding: 0.5rem 1rem;
                    font-weight: 700;
                    font-size: 0.875rem;
                    margin: 0.25rem;
                }
            `}</style>
            
            <nav className="nav">
                <div className="nav-container">
                    <a onClick={() => showPage('home')} className="logo-link">[CURATIONS]</a>
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
                EMAIL US!
            </a>

            <div id="home" className="page-section cyber-grid" style={{minHeight: 'auto', position: 'relative'}}>
                <div className="matrix-bg">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="matrix-char"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                fontSize: `${Math.random() * 20 + 10}px`
                            }}
                        >
                            {Math.random() > 0.5 ? '01' : '10'}
                        </div>
                    ))}
                </div>
                
                <section style={{ padding: '2rem 2rem 4rem 2rem', display: 'flex', alignItems: 'center' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                        <div className="grid grid-2" style={{ alignItems: 'center' }}>
                            <div>
                                <h1 style={{ 
                                    fontSize: 'clamp(3rem, 6vw, 6rem)', 
                                    fontWeight: 800, 
                                    lineHeight: 1, 
                                    textTransform: 'uppercase',
                                    marginBottom: '2rem'
                                }}>
                                    <div className="glitch-text" data-text={glitchText} style={{ 
                                        color: 'hsl(var(--primary))', 
                                        WebkitTextStroke: '2px black',
                                        display: 'block',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {glitchText}
                                    </div>
                                    <div style={{ 
                                        color: '#EBF998', 
                                        WebkitTextStroke: '2px black',
                                        display: 'block',
                                        marginBottom: '0.5rem'
                                    }}>
                                        CURATIONS
                                    </div>
                                    <div style={{ 
                                        color: 'hsl(var(--accent))', 
                                        WebkitTextStroke: '2px black',
                                        display: 'block'
                                    }}>
                                        CURATIONS
                                    </div>
                                </h1>
                                
                                <div className="brutal-box hologram" style={{ 
                                    background: 'rgba(255, 255, 255, 0.9)', 
                                    color: 'black', 
                                    padding: '1.5rem',
                                    marginBottom: '2rem'
                                }}>
                                    <h2 style={{ 
                                        fontSize: '1.5rem', 
                                        fontWeight: 800, 
                                        textTransform: 'uppercase', 
                                        textAlign: 'center',
                                        marginBottom: '1rem'
                                    }}>
                                        WE CURATE THE
                                    </h2>
                                    <div className="data-stream"></div>
                                </div>
                                
                                <div className="grid grid-2" style={{ gap: '1rem' }}>
                                    <div className="brutal-box service-card hologram" style={{ 
                                        background: 'hsl(var(--primary))', 
                                        color: 'white', 
                                        padding: '2rem' 
                                    }}>
                                        <h3 style={{ 
                                            fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                                            fontWeight: 800, 
                                            textAlign: 'center', 
                                            textTransform: 'uppercase',
                                            marginBottom: '0.5rem'
                                        }}>
                                            [HEART]
                                        </h3>
                                        <div style={{ 
                                            textAlign: 'center', 
                                            fontSize: '0.875rem', 
                                            fontWeight: 700 
                                        }}>
                                            BRAND CONNECTION
                                        </div>
                                        <div className="data-stream" style={{ background: 'linear-gradient(90deg, transparent, white, transparent)' }}></div>
                                    </div>
                                    
                                    <div className="brutal-box service-card hologram" style={{ 
                                        background: 'hsl(var(--accent))', 
                                        color: 'white', 
                                        padding: '2rem' 
                                    }}>
                                        <h3 style={{ 
                                            fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                                            fontWeight: 800, 
                                            textAlign: 'center', 
                                            textTransform: 'uppercase',
                                            marginBottom: '0.5rem'
                                        }}>
                                            [HEADLINES]
                                        </h3>
                                        <div style={{ 
                                            textAlign: 'center', 
                                            fontSize: '0.875rem', 
                                            fontWeight: 700 
                                        }}>
                                            CULTURAL IMPACT
                                        </div>
                                        <div className="data-stream" style={{ background: 'linear-gradient(90deg, transparent, white, transparent)' }}></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{ marginTop: '2rem' }}>
                                <div className="brutal-box hologram" style={{ 
                                    background: 'rgba(255, 255, 255, 0.95)', 
                                    padding: '1.5rem',
                                    marginBottom: '1rem'
                                }}>
                                    <p style={{ 
                                        fontWeight: 800, 
                                        fontSize: '1.125rem', 
                                        textTransform: 'uppercase',
                                        marginBottom: '0.5rem'
                                    }}>
                                        NEURAL NETWORK:
                                    </p>
                                    <p style={{ 
                                        fontSize: '1.875rem', 
                                        fontWeight: 800, 
                                        color: 'hsl(var(--primary))',
                                        marginBottom: '0.75rem'
                                    }}>
                                        [ONLINE]
                                    </p>
                                    <div className="brutal-box" style={{ 
                                        width: '100%', 
                                        background: '#e5e5e5', 
                                        height: '1rem', 
                                        border: '2px solid black', 
                                        boxShadow: 'none',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{ 
                                            background: 'linear-gradient(90deg, hsl(var(--accent)), #EBF998, hsl(var(--primary)))', 
                                            height: '100%', 
                                            width: '100%',
                                            animation: 'data-stream 3s ease-in-out infinite'
                                        }}></div>
                                    </div>
                                    <p style={{ 
                                        fontSize: '0.75rem', 
                                        textAlign: 'right', 
                                        fontWeight: 800, 
                                        marginTop: '1rem' 
                                    }}>
                                        <span style={{ 
                                            background: '#EBF998', 
                                            padding: '0.1rem 0.25rem', 
                                            fontWeight: 800 
                                        }}>
                                            MATRIX: LOADED
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                                <div className="trust-badge hologram">🏆 DIGITAL ARCHITECTS</div>
                                <div className="trust-badge hologram">📈 500% AVG GROWTH</div>
                                <div className="trust-badge hologram">🌟 LA MATRIX</div>
                                <div className="trust-badge hologram">🤖 AI ENHANCED</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <div id="contact" className="page-section" style={{ 
                paddingTop: 0, 
                minHeight: 'auto', 
                background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)', 
                padding: '4rem 2rem' 
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ 
                        fontSize: 'clamp(2rem, 4vw, 3rem)', 
                        fontWeight: 800, 
                        color: 'white', 
                        marginBottom: '2rem', 
                        textTransform: 'uppercase' 
                    }}>
                        ENTER THE MATRIX
                    </h2>
                    <p style={{ 
                        fontSize: '1.25rem', 
                        color: 'white', 
                        marginBottom: '2rem', 
                        maxWidth: '600px', 
                        margin: '0 auto 2rem auto' 
                    }}>
                        Join the digital revolution. Culture over algorithms.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a 
                            href="mailto:curate@curations.org" 
                            className="brutal-box service-card"
                            style={{
                                background: 'white', 
                                color: 'hsl(var(--primary))', 
                                padding: '1rem 2rem', 
                                fontWeight: 800, 
                                textTransform: 'uppercase', 
                                textDecoration: 'none'
                            }}
                        >
                            JACK IN
                        </a>
                        <a 
                            href="https://la.curations.org" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="brutal-box service-card"
                            style={{
                                background: '#EBF998', 
                                color: 'black', 
                                padding: '1rem 2rem', 
                                fontWeight: 800, 
                                textTransform: 'uppercase', 
                                textDecoration: 'none'
                            }}
                        >
                            EXPLORE LA
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlitchMatrixPage;
