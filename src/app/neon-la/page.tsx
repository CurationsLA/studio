'use client';
import { useState, useEffect } from 'react';

const NeonLAPage = () => {
    const [activePage, setActivePage] = useState('home');
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [timeOfDay, setTimeOfDay] = useState('night');

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
            setScrollY(window.scrollY);
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

        // Simulate day/night cycle
        const timeInterval = setInterval(() => {
            setTimeOfDay(prev => prev === 'night' ? 'day' : 'night');
        }, 8000);

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timeInterval);
        };
    }, []);

    return (
        <>
            <style jsx global>{`
                :root {
                    --primary: 337 100% 66%;
                    --accent: 242 73% 63%;
                    --neon-pink: #FF1493;
                    --neon-blue: #00BFFF;
                    --neon-green: #39FF14;
                    --neon-purple: #BF00FF;
                }
                
                html { scroll-behavior: smooth; }
                body { 
                    background: ${timeOfDay === 'night' ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' : '#FDFDFC'}; 
                    color: ${timeOfDay === 'night' ? 'white' : 'black'}; 
                    overflow-x: hidden;
                    font-family: 'Arial Black', sans-serif;
                    transition: all 2s ease;
                }
                
                .brutal-box {
                    border: 4px solid ${timeOfDay === 'night' ? 'var(--neon-pink)' : 'black'};
                    box-shadow: 8px 8px 0px ${timeOfDay === 'night' ? 'var(--neon-pink)' : 'black'};
                    transition: all 0.5s ease;
                }
                
                @keyframes neon-glow {
                    0%, 100% {
                        text-shadow: 
                            0 0 5px currentColor,
                            0 0 10px currentColor,
                            0 0 15px currentColor,
                            0 0 20px var(--neon-pink),
                            0 0 25px var(--neon-pink);
                    }
                    50% {
                        text-shadow: 
                            0 0 2px currentColor,
                            0 0 5px currentColor,
                            0 0 8px currentColor,
                            0 0 12px var(--neon-pink),
                            0 0 15px var(--neon-pink);
                    }
                }
                
                @keyframes neon-flicker {
                    0%, 100% { opacity: 1; }
                    2% { opacity: 0.8; }
                    4% { opacity: 1; }
                    8% { opacity: 0.8; }
                    9% { opacity: 1; }
                    12% { opacity: 0.8; }
                    15% { opacity: 1; }
                }
                
                @keyframes parallax-float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    25% { transform: translateY(-20px) translateX(10px); }
                    50% { transform: translateY(0px) translateX(20px); }
                    75% { transform: translateY(20px) translateX(10px); }
                }
                
                @keyframes urban-pulse {
                    0%, 100% { 
                        transform: scale(1);
                        box-shadow: 0 0 20px var(--neon-blue);
                    }
                    50% { 
                        transform: scale(1.05);
                        box-shadow: 0 0 30px var(--neon-blue), 0 0 40px var(--neon-pink);
                    }
                }
                
                @keyframes city-lights {
                    0% { background-position: 0% 0%; }
                    50% { background-position: 100% 100%; }
                    100% { background-position: 0% 0%; }
                }
                
                .neon-text {
                    animation: neon-glow 2s ease-in-out infinite;
                    color: var(--neon-pink);
                }
                
                .neon-flicker {
                    animation: neon-flicker 3s infinite;
                }
                
                .parallax-element {
                    animation: parallax-float 6s ease-in-out infinite;
                }
                
                .urban-glow {
                    animation: urban-pulse 3s ease-in-out infinite;
                    background: ${timeOfDay === 'night' ? 
                        'linear-gradient(45deg, rgba(255, 20, 147, 0.1), rgba(0, 191, 255, 0.1), rgba(57, 255, 20, 0.1))' : 
                        'white'};
                    backdrop-filter: blur(2px);
                }
                
                .city-skyline {
                    background: linear-gradient(45deg, 
                        var(--neon-pink) 0%, 
                        var(--neon-blue) 25%, 
                        var(--neon-green) 50%, 
                        var(--neon-purple) 75%, 
                        var(--neon-pink) 100%);
                    background-size: 400% 400%;
                    animation: city-lights 4s ease infinite;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .street-grid {
                    background-image: 
                        linear-gradient(rgba(255, 20, 147, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 20, 147, 0.3) 1px, transparent 1px);
                    background-size: 30px 30px;
                    position: relative;
                }
                
                .neon-border {
                    border: 2px solid var(--neon-blue);
                    box-shadow: 
                        0 0 10px var(--neon-blue),
                        inset 0 0 10px rgba(0, 191, 255, 0.1);
                }
                
                .nav {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    background: ${timeOfDay === 'night' ? 
                        'rgba(0, 0, 0, 0.9)' : 
                        'rgba(255, 255, 255, 0.95)'};
                    backdrop-filter: blur(10px);
                    z-index: 100;
                    border-bottom: 4px solid ${timeOfDay === 'night' ? 'var(--neon-pink)' : 'black'};
                    transition: all 0.5s ease;
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
                    color: ${timeOfDay === 'night' ? 'var(--neon-pink)' : 'black'};
                    cursor: pointer;
                    transition: all 0.3s;
                    font-size: 1.5rem;
                    font-weight: 800;
                }
                
                .logo-link:hover { 
                    color: ${timeOfDay === 'night' ? 'var(--neon-blue)' : 'hsl(var(--primary))'};
                    text-shadow: ${timeOfDay === 'night' ? '0 0 10px currentColor' : 'none'};
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                
                .nav-links a {
                    color: ${timeOfDay === 'night' ? 'white' : 'black'};
                    text-decoration: none;
                    font-weight: 700;
                    text-transform: uppercase;
                    transition: all 0.3s;
                    cursor: pointer;
                }
                
                .nav-links a:hover, .nav-links a.active {
                    color: ${timeOfDay === 'night' ? 'var(--neon-green)' : 'hsl(var(--primary))'};
                    text-shadow: ${timeOfDay === 'night' ? '0 0 8px currentColor' : 'none'};
                }
                
                .menu-toggle {
                    display: none;
                    background: ${timeOfDay === 'night' ? 'var(--neon-green)' : '#EBF998'};
                    color: black;
                    border: none;
                    padding: 0.5rem 1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                
                @media (max-width: 768px) {
                    .menu-toggle { display: block; }
                    .nav-links {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: ${timeOfDay === 'night' ? 'rgba(0, 0, 0, 0.95)' : 'white'};
                        flex-direction: column;
                        padding: 2rem;
                        border-top: 4px solid ${timeOfDay === 'night' ? 'var(--neon-pink)' : 'black'};
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
                    background: ${timeOfDay === 'night' ? 'var(--neon-purple)' : 'hsl(var(--primary))'};
                    color: ${timeOfDay === 'night' ? 'black' : 'white'};
                    padding: 0.5rem 1rem;
                    transform: rotate(12deg);
                    cursor: pointer;
                    text-decoration: none;
                    font-weight: 700;
                    transition: all 0.2s ease-in-out;
                    box-shadow: ${timeOfDay === 'night' ? '0 0 15px currentColor' : 'none'};
                }
                
                .corner-badge:hover {
                    transform: rotate(12deg) scale(1.1);
                    background: ${timeOfDay === 'night' ? 'var(--neon-green)' : 'white'};
                    color: ${timeOfDay === 'night' ? 'black' : 'hsl(var(--primary))'};
                }
                
                .service-card {
                    transition: all 0.3s ease;
                    cursor: pointer;
                    display: block;
                    text-decoration: none;
                }
                
                .service-card:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: ${timeOfDay === 'night' ? 
                        '12px 12px 0px var(--neon-pink), 0 0 20px var(--neon-blue)' : 
                        '12px 12px 0px black'};
                }
                
                .trust-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: ${timeOfDay === 'night' ? 'rgba(0, 0, 0, 0.8)' : 'white'};
                    border: 2px solid ${timeOfDay === 'night' ? 'var(--neon-blue)' : 'black'};
                    padding: 0.5rem 1rem;
                    font-weight: 700;
                    font-size: 0.875rem;
                    margin: 0.25rem;
                    color: ${timeOfDay === 'night' ? 'var(--neon-blue)' : 'black'};
                    box-shadow: ${timeOfDay === 'night' ? '0 0 8px var(--neon-blue)' : 'none'};
                    transition: all 0.5s ease;
                }
            `}</style>
            
            <nav className="nav">
                <div className="nav-container">
                    <a onClick={() => showPage('home')} className="logo-link neon-flicker">[CURATIONS]</a>
                    <button className="menu-toggle brutal-box" onClick={toggleMenu}>MENU</button>
                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <li><a onClick={() => showPage('home')} className={activePage === 'home' ? 'active' : ''}>Home</a></li>
                        <li><a onClick={() => showPage('about')} className={activePage === 'about' ? 'active' : ''}>About</a></li>
                        <li><a onClick={() => showPage('services')} className={activePage === 'services' ? 'active' : ''}>Services</a></li>
                        <li><a onClick={() => showPage('contact')} className={activePage === 'contact' ? 'active' : ''}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            <a href="mailto:curate@curations.org" className="corner-badge brutal-box neon-flicker">
                EMAIL US!
            </a>

            <div id="home" className="page-section street-grid" style={{minHeight: 'auto', position: 'relative'}}>
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
                                    <div className="neon-text city-skyline parallax-element" style={{ 
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        transform: `translateY(${scrollY * 0.1}px)`
                                    }}>
                                        CURATIONS
                                    </div>
                                    <div className="neon-flicker" style={{ 
                                        color: timeOfDay === 'night' ? 'var(--neon-green)' : '#EBF998', 
                                        WebkitTextStroke: timeOfDay === 'night' ? '1px var(--neon-green)' : '2px black',
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        textShadow: timeOfDay === 'night' ? '0 0 20px currentColor' : 'none'
                                    }}>
                                        CURATIONS
                                    </div>
                                    <div className="parallax-element" style={{ 
                                        color: timeOfDay === 'night' ? 'var(--neon-purple)' : 'hsl(var(--accent))', 
                                        WebkitTextStroke: timeOfDay === 'night' ? '1px var(--neon-purple)' : '2px black',
                                        display: 'block',
                                        textShadow: timeOfDay === 'night' ? '0 0 15px currentColor' : 'none',
                                        transform: `translateY(${scrollY * -0.05}px)`
                                    }}>
                                        CURATIONS
                                    </div>
                                </h1>
                                
                                <div className="brutal-box urban-glow" style={{ 
                                    background: timeOfDay === 'night' ? 'rgba(0, 0, 0, 0.8)' : 'white', 
                                    color: timeOfDay === 'night' ? 'var(--neon-blue)' : 'black', 
                                    padding: '1.5rem',
                                    marginBottom: '2rem',
                                    border: timeOfDay === 'night' ? '4px solid var(--neon-blue)' : '4px solid black'
                                }}>
                                    <h2 style={{ 
                                        fontSize: '1.5rem', 
                                        fontWeight: 800, 
                                        textTransform: 'uppercase', 
                                        textAlign: 'center',
                                        marginBottom: '1rem',
                                        textShadow: timeOfDay === 'night' ? '0 0 10px currentColor' : 'none'
                                    }}>
                                        WE CURATE THE
                                    </h2>
                                </div>
                                
                                <div className="grid grid-2" style={{ gap: '1rem' }}>
                                    <div className="brutal-box service-card urban-glow" style={{ 
                                        background: timeOfDay === 'night' ? 'var(--neon-pink)' : 'hsl(var(--primary))', 
                                        color: timeOfDay === 'night' ? 'black' : 'white', 
                                        padding: '2rem',
                                        border: timeOfDay === 'night' ? '4px solid var(--neon-pink)' : '4px solid black'
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
                                    </div>
                                    
                                    <div className="brutal-box service-card urban-glow" style={{ 
                                        background: timeOfDay === 'night' ? 'var(--neon-blue)' : 'hsl(var(--accent))', 
                                        color: timeOfDay === 'night' ? 'black' : 'white', 
                                        padding: '2rem',
                                        border: timeOfDay === 'night' ? '4px solid var(--neon-blue)' : '4px solid black'
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
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{ marginTop: '2rem' }}>
                                <div className="brutal-box urban-glow neon-border" style={{ 
                                    background: timeOfDay === 'night' ? 'rgba(0, 0, 0, 0.9)' : 'white', 
                                    padding: '1.5rem',
                                    marginBottom: '1rem',
                                    color: timeOfDay === 'night' ? 'var(--neon-green)' : 'black'
                                }}>
                                    <p style={{ 
                                        fontWeight: 800, 
                                        fontSize: '1.125rem', 
                                        textTransform: 'uppercase',
                                        marginBottom: '0.5rem',
                                        textShadow: timeOfDay === 'night' ? '0 0 8px currentColor' : 'none'
                                    }}>
                                        URBAN NETWORK:
                                    </p>
                                    <p className="neon-flicker" style={{ 
                                        fontSize: '1.875rem', 
                                        fontWeight: 800, 
                                        color: timeOfDay === 'night' ? 'var(--neon-purple)' : 'hsl(var(--primary))',
                                        marginBottom: '0.75rem',
                                        textShadow: timeOfDay === 'night' ? '0 0 15px currentColor' : 'none'
                                    }}>
                                        [LIVE]
                                    </p>
                                    <div className="brutal-box" style={{ 
                                        width: '100%', 
                                        background: timeOfDay === 'night' ? '#1a1a1a' : '#e5e5e5', 
                                        height: '1rem', 
                                        border: timeOfDay === 'night' ? '2px solid var(--neon-green)' : '2px solid black', 
                                        boxShadow: 'none',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{ 
                                            background: timeOfDay === 'night' ? 
                                                'linear-gradient(90deg, var(--neon-pink), var(--neon-blue), var(--neon-green))' :
                                                'linear-gradient(90deg, hsl(var(--accent)), #EBF998, hsl(var(--primary)))', 
                                            height: '100%', 
                                            width: '100%',
                                            animation: 'city-lights 2s ease-in-out infinite'
                                        }}></div>
                                    </div>
                                    <p style={{ 
                                        fontSize: '0.75rem', 
                                        textAlign: 'right', 
                                        fontWeight: 800, 
                                        marginTop: '1rem' 
                                    }}>
                                        <span style={{ 
                                            background: timeOfDay === 'night' ? 'var(--neon-green)' : '#EBF998', 
                                            color: 'black',
                                            padding: '0.1rem 0.25rem', 
                                            fontWeight: 800,
                                            boxShadow: timeOfDay === 'night' ? '0 0 5px currentColor' : 'none'
                                        }}>
                                            CITY: ONLINE
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                                <div className="trust-badge urban-glow">🏆 NEON MASTERS</div>
                                <div className="trust-badge urban-glow">📈 500% AVG GROWTH</div>
                                <div className="trust-badge urban-glow">🌟 LA NIGHTS</div>
                                <div className="trust-badge urban-glow">🤖 AI ENHANCED</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <div id="contact" className="page-section" style={{ 
                paddingTop: 0, 
                minHeight: 'auto', 
                background: timeOfDay === 'night' ? 
                    'linear-gradient(135deg, var(--neon-purple) 0%, var(--neon-pink) 50%, var(--neon-blue) 100%)' :
                    'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)', 
                padding: '4rem 2rem' 
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className="neon-text city-skyline" style={{ 
                        fontSize: 'clamp(2rem, 4vw, 3rem)', 
                        fontWeight: 800, 
                        color: timeOfDay === 'night' ? 'white' : 'white', 
                        marginBottom: '2rem', 
                        textTransform: 'uppercase',
                        textShadow: timeOfDay === 'night' ? '0 0 20px currentColor' : 'none'
                    }}>
                        LIGHT UP THE CITY
                    </h2>
                    <p style={{ 
                        fontSize: '1.25rem', 
                        color: timeOfDay === 'night' ? 'white' : 'white', 
                        marginBottom: '2rem', 
                        maxWidth: '600px', 
                        margin: '0 auto 2rem auto' 
                    }}>
                        Where urban culture meets digital innovation. Join the neon revolution.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a 
                            href="mailto:curate@curations.org" 
                            className="brutal-box service-card urban-glow"
                            style={{
                                background: timeOfDay === 'night' ? 'var(--neon-green)' : 'white', 
                                color: 'black', 
                                padding: '1rem 2rem', 
                                fontWeight: 800, 
                                textTransform: 'uppercase', 
                                textDecoration: 'none',
                                border: timeOfDay === 'night' ? '4px solid var(--neon-green)' : '4px solid black'
                            }}
                        >
                            IGNITE
                        </a>
                        <a 
                            href="https://la.curations.org" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="brutal-box service-card urban-glow"
                            style={{
                                background: timeOfDay === 'night' ? 'var(--neon-pink)' : '#EBF998', 
                                color: 'black', 
                                padding: '1rem 2rem', 
                                fontWeight: 800, 
                                textTransform: 'uppercase', 
                                textDecoration: 'none',
                                border: timeOfDay === 'night' ? '4px solid var(--neon-pink)' : '4px solid black'
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

export default HomePage;
