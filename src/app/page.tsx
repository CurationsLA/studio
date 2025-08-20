
'use client';
import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';
import Link from 'next/link';
import LiveDispatches from '@/components/ui/LiveDispatches';

const HomePage = () => {
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
        <>
            <div style={{ scrollBehavior: 'smooth' }}>
                 <DraftNav />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                
                <style jsx global>{`
                    html {
                        scroll-behavior: smooth;
                    }
                    body {
                        background: #FDFDFC;
                        color: black;
                        overflow-x: hidden;
                    }
                    
                    .brutal-box {
                        border: 4px solid black;
                        box-shadow: 8px 8px 0px black;
                    }
                    
                    .text-outline-subtle {
                        -webkit-text-stroke: 1.5px hsl(var(--primary));
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
                        box-shadow: 0 0 40px hsla(var(--primary), 0.6),
                                    inset 0 0 40px hsla(var(--primary), 0.1);
                    }
                    
                    .parallax-element {
                        transform: translateY(${scrollY * 0.5}px);
                    }
                    
                    .hero-gradient {
                        background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, #EBF998 100%);
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
                    
                    .corner-badge {
                        position: fixed;
                        top: 100px;
                        right: 15px;
                        z-index: 50;
                        background: hsl(var(--primary));
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
                        color: hsl(var(--primary));
                    }

                    .service-card {
                        transition: all 0.3s ease;
                        cursor: pointer;
                        display: block;
                        text-decoration: none;
                    }
                    
                    .service-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 12px 12px 0px black;
                    }
                    
                    .text-center { text-align: center; }
                    .mb-2 { margin-bottom: 1rem; }
                    .mb-4 { margin-bottom: 2rem; }
                    .mb-8 { margin-bottom: 4rem; }
                    .mt-4 { margin-top: 2rem; }
                    .mt-8 { margin-top: 4rem; }
                    .p-4 { padding: 2rem; }
                    .p-8 { padding: 4rem; }
                    
                    .btn-primary {
                        background: hsl(var(--primary));
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
                        background: hsl(var(--accent));
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
                
                <a href="mailto:curate@curations.org" className="corner-badge brutal-box">
                    <span>EMAIL US!</span>
                </a>

                <div id="home" style={{paddingTop: '80px', minHeight: 'auto'}}>
                    <section style={{ padding: '2rem 2rem 4rem 2rem', display: 'flex', alignItems: 'center' }}>
                        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                            <div className="grid grid-2" style={{ alignItems: 'center' }}>
                                <div>
                                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, lineHeight: 1, textTransform: 'uppercase' }} className="font-headline">
                                        <span className="slide-in" style={{ display: 'block' }}>CURATIONS</span>
                                        <span className="text-outline-subtle slide-in" style={{ display: 'block', animationDelay: '0.2s' }}>CURATIONS</span>
                                        <span className="slide-in hero-gradient" style={{ display: 'block', animationDelay: '0.4s' }}>CURATIONS</span>
                                    </h1>
                                    
                                    <div className="mt-8">
                                        <div className="brutal-box pulse-brutal" style={{ background: 'white', color: 'black', padding: '1.5rem' }}>
                                            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', textAlign: 'center' }} className="font-headline">
                                                WE CURATE THE
                                            </h2>
                                        </div>
                                        
                                        <div className="grid grid-2 mt-4">
                                            <Link href="/creative-campaigns" className="brutal-box pulse-brutal service-card" style={{ background: 'hsl(var(--primary))', color: 'white', padding: '2rem', animationDelay: '0.3s' }}>
                                                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, textAlign: 'center', textTransform: 'uppercase' }} className="font-headline">
                                                    [HEART]
                                                </h3>
                                                <div style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: 700 }}>
                                                    BRAND CONNECTION
                                                </div>
                                            </Link>
                                            
                                            <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer" className="brutal-box pulse-brutal service-card" style={{ background: 'hsl(var(--accent))', color: 'white', padding: '2rem', animationDelay: '0.6s' }}>
                                                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, textAlign: 'center', textTransform: 'uppercase' }} className="font-headline">
                                                    [HEADLINES]
                                                </h3>
                                                <div style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: 700 }}>
                                                    CULTURAL IMPACT
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style={{ marginTop: '2rem' }}>
                                    <LiveDispatches />
                                    
                                    <div className="brutal-box fade-in-up mt-4" style={{ background: 'white', padding: '1.5rem', animationDelay: '0.2s' }}>
                                        <p style={{ fontWeight: 800, fontSize: '1.125rem', textTransform: 'uppercase' }} className="font-headline">SYSTEMS:</p>
                                        <p className="pulse-brutal" style={{ fontSize: '1.875rem', marginTop: '0.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>[ONLINE]</p>
                                        <div style={{ marginTop: '0.75rem' }}>
                                            <div className="brutal-box" style={{ width: '100%', background: '#e5e5e5', height: '1rem', border: '2px solid black', boxShadow: 'none' }}>
                                                <div className="pulse-brutal" style={{ background: 'hsl(var(--accent))', height: '100%', width: '100%' }}></div>
                                            </div>
                                            <p style={{ fontSize: '0.75rem', textAlign: 'right', fontWeight: 800, marginTop: '1rem' }}>
                                                <span style={{ background: '#EBF998', padding: '0.1rem 0.25rem', fontWeight: 800 }}>100% READY</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
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
                
                <div style={{ background: 'black', padding: '2rem 0' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                        <div className="grid grid-4">
                            <div className="text-center">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }} className="font-headline">100+</div>
                                <div style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>BRANDS CURATED</div>
                            </div>
                            <div className="text-center">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--accent))' }} className="font-headline">500%</div>
                                <div style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>AVG GROWTH</div>
                            </div>
                            <div className="text-center">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#EBF998' }} className="font-headline">24/7</div>
                                <div style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>AI MONITORING</div>
                            </div>
                            <div className="text-center">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }} className="font-headline">∞</div>
                                <div style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>POSSIBILITIES</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="services" style={{ padding: '4rem 2rem', background: '#FDFDFC' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div className="text-center mb-8">
                            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }} className="font-headline">
                                OUR <span className="hero-gradient">CURATIONS</span>
                            </h2>
                            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                                Full-stack solutions for brands ready to make cultural impact
                            </p>
                        </div>
                        
                        <div className="grid grid-3">
                            <Link href="/restaurant-biz" className="brutal-box service-card" style={{background: 'hsl(var(--primary))', color: 'white', padding: '2rem'}}>
                                <span style={{fontSize: '3rem'}}>🍽️</span>
                                <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}} className="font-headline">Restaurant & Biz</h3>
                                <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Grand openings, menu marketing, delivery optimization, and cultural integration.</p>
                                <div className="btn-primary" style={{marginTop: '1rem', background: 'white', color: 'hsl(var(--primary))', display: 'inline-block'}}>
                                    EXPLORE
                                </div>
                            </Link>
                            
                            <Link href="/ai-discovery" className="brutal-box service-card" style={{background: 'hsl(var(--accent))', color: 'white', padding: '2rem'}}>
                                <span style={{fontSize: '3rem'}}>🤖</span>
                                <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}} className="font-headline">AI Discovery</h3>
                                <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Prompt engineering, SEO optimization, and tech stack discovery for the AI age.</p>
                                <div className="btn-primary" style={{marginTop: '1rem', background: 'white', color: 'hsl(var(--accent))', display: 'inline-block'}}>
                                    EXPLORE
                                </div>
                            </Link>
                            
                            <Link href="/public-relations" className="brutal-box service-card" style={{background: '#EBF998', color: 'black', padding: '2rem'}}>
                                <span style={{fontSize: '3rem'}}>📺</span>
                                <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}} className="font-headline">Media Buying & PR</h3>
                                <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Netflix placements, podcast ads, linear TV, and strategic public relations.</p>
                                <div className="btn-primary" style={{marginTop: '1rem', display: 'inline-block'}}>
                                    EXPLORE
                                </div>
                            </Link>

                             <Link href="/creative-campaigns" className="brutal-box service-card" style={{background: 'white', color: 'black', padding: '2rem'}}>
                                <span style={{fontSize: '3rem'}}>🎨</span>
                                <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}} className="font-headline">Creative Campaigns</h3>
                                <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Campaigns that drive engagement and build authentic community connections.</p>
                                <div className="btn-primary" style={{marginTop: '1rem', display: 'inline-block'}}>
                                    EXPLORE
                                </div>
                            </Link>

                             <Link href="/influencer-ugc" className="brutal-box service-card" style={{background: 'white', color: 'black', padding: '2rem'}}>
                                <span style={{fontSize: '3rem'}}>🤝</span>
                                <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}} className="font-headline">Influencer & UGC</h3>
                                <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Strategic partnerships and user-generated content programs that build trust.</p>
                                <div className="btn-primary" style={{marginTop: '1rem', display: 'inline-block'}}>
                                    EXPLORE
                                </div>
                            </Link>

                             <Link href="/newsletter-services" className="brutal-box service-card" style={{background: 'white', color: 'black', padding: '2rem'}}>
                                <span style={{fontSize: '3rem'}}>📧</span>
                                <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}} className="font-headline">Newsletter Services</h3>
                                <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Newsletters that don't just reach inboxes, they create communities.</p>
                                <div className="btn-primary" style={{marginTop: '1rem', display: 'inline-block'}}>
                                    EXPLORE
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="contact" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)', padding: '4rem 2rem' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                            READY TO CURATE YOUR SUCCESS?
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                            Join 100+ brands that chose culture over algorithms, authenticity over automation.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                             <a href="mailto:curate@curations.org" className="brutal-box" style={{background: 'white', color: 'hsl(var(--primary))', padding: '1rem 2rem', fontWeight: 800, textTransform: 'uppercase', border: '4px solid black', cursor: 'pointer', textDecoration: 'none'}}>
                                START YOUR CURATION
                            </a>
                            <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer" className="brutal-box" style={{background: '#EBF998', color: 'black', padding: '1rem 2rem', fontWeight: 800, textTransform: 'uppercase', border: '4px solid black', cursor: 'pointer', textDecoration: 'none'}}>
                                SEE CURATIONSLA
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
