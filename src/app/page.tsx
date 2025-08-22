'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import LiveDispatches from '@/components/ui/LiveDispatches';

const HomePage = () => {
    const [activePage, setActivePage] = useState('home');
    const [isMenuOpen, setMenuOpen] = useState(false);

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
        "description": "We curate the heart and headlines of brands",
        "url": "https://curations.cc",
        "sameAs": [
            "https://la.curations.org"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "747-200-5740",
            "email": "hello@curations.cc"
        }
    };

    return (
        <>
            <div style={{ scrollBehavior: 'smooth' }}>
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                
                <style jsx global>{`
                    .brutal-box {
                        border: 4px solid black;
                        box-shadow: 8px 8px 0px black;
                        transition: all 0.3s ease;
                    }
                    
                    .brutal-box:hover {
                        box-shadow: 12px 12px 0px hsl(var(--primary));
                        transform: translateY(-4px);
                    }
                    
                    .page-section {
                        width: 100%;
                    }
                    
                    .service-hero {
                        padding: 3rem 2rem;
                        text-align: center;
                        background: white;
                    }
                    
                    .hero-gradient {
                        background: var(--gradient-creative);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    
                    .grid {
                        display: grid;
                    }
                    
                    .grid-3 {
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        gap: 2rem;
                    }
                    
                    .service-card {
                        transition: all 0.3s ease;
                        text-decoration: none;
                        display: block;
                    }
                    
                    .service-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 15px 15px 0px black;
                    }
                    
                    .btn-primary {
                        padding: 0.75rem 1.5rem;
                        font-weight: 800;
                        text-transform: uppercase;
                        border: 4px solid black;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    
                    @keyframes gradient-shift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}</style>
                
                {/* Navigation */}
                <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(253, 253, 252, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '4px solid black', padding: '1rem 2rem' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>
                            CURATIONS
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                            <a href="#home" style={{ fontWeight: 700, textDecoration: 'none', color: activePage === 'home' ? 'hsl(var(--primary))' : 'black' }} onClick={() => showPage('home')}>Home</a>
                            <a href="#about" style={{ fontWeight: 700, textDecoration: 'none', color: activePage === 'about' ? 'hsl(var(--primary))' : 'black' }} onClick={() => showPage('about')}>About</a>
                            <a href="#services" style={{ fontWeight: 700, textDecoration: 'none', color: activePage === 'services' ? 'hsl(var(--primary))' : 'black' }} onClick={() => showPage('services')}>Services</a>
                            <a href="#contact" style={{ fontWeight: 700, textDecoration: 'none', color: activePage === 'contact' ? 'hsl(var(--primary))' : 'black' }} onClick={() => showPage('contact')}>Contact</a>
                            <button onClick={toggleMenu} style={{ display: 'none', background: 'transparent', border: 'none', fontSize: '1.5rem' }}>☰</button>
                        </div>
                    </div>
                </nav>
                
                <div style={{ paddingTop: '80px' }}>
                    <div id="home" className="page-section" style={{minHeight: 'auto'}}>
                        <div style={{ padding: '4rem 2rem', textAlign: 'center', background: 'var(--gradient-influencer)', color: 'white' }}>
                            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    <span className="brutal-box" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'white', color: 'black', margin: '0.25rem' }}>CURATIONS</span>
                                </h1>
                                <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                                    We curate the heart and headlines of brands
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <a href="#services" className="brutal-box" style={{
                                        background: 'white', 
                                        color: 'black', 
                                        padding: '1rem 2rem', 
                                        fontWeight: 800, 
                                        textTransform: 'uppercase', 
                                        textDecoration: 'none',
                                        display: 'inline-block'
                                    }}>
                                        Explore Services
                                    </a>
                                    <a href="mailto:hello@curations.cc" className="brutal-box" style={{
                                        background: 'rgba(255,255,255,0.1)', 
                                        color: 'white', 
                                        padding: '1rem 2rem', 
                                        fontWeight: 800, 
                                        textTransform: 'uppercase', 
                                        border: '4px solid white', 
                                        textDecoration: 'none',
                                        display: 'inline-block'
                                    }}>
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Youth Curator Movement Section */}
                    <div id="youth-curator-movement" style={{ padding: '4rem 2rem', background: 'var(--gradient-influencer)', color: 'white' }}>
                        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }} className="font-headline">
                                Youth Curator Movement
                            </h2>
                            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                                Empowering the next generation of creators to shape the future of culture.
                            </p>
                            <div className="brutal-box" style={{ background: 'rgba(255,255,255,0.2)', padding: '1.5rem', maxWidth: '600px', margin: '0 auto', borderColor: 'white' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    Join the Movement
                                </h3>
                                <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                                    Are you a young creator with a passion for storytelling and a desire to make an impact? The Youth Curator Movement is for you.
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <Link href="/youth-curator" className="brutal-box" style={{
                                        background: 'white', 
                                        color: 'hsl(var(--primary))', 
                                        padding: '1rem 2rem', 
                                        fontWeight: 800, 
                                        textTransform: 'uppercase', 
                                        border: '4px solid black', 
                                        cursor: 'pointer', 
                                        textDecoration: 'none',
                                        display: 'inline-block'
                                    }}>
                                        Learn More
                                    </Link>
                                    <a href="mailto:youth@curations.cc" className="brutal-box" style={{
                                        background: 'rgba(255,255,255,0.1)', 
                                        color: 'white', 
                                        padding: '1rem 2rem', 
                                        fontWeight: 800, 
                                        textTransform: 'uppercase', 
                                        border: '4px solid white', 
                                        cursor: 'pointer', 
                                        textDecoration: 'none',
                                        display: 'inline-block'
                                    }}>
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="about" className="page-section" style={{paddingTop: 0, minHeight: 'auto'}}>
                        <div style={{ padding: '4rem 2rem', background: '#FDFDFC', textAlign: 'center' }}>
                            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase' }}>
                                    Strategic Creative Agency
                                </h2>
                                <p style={{ fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
                                    We're the bridge between authentic creativity and strategic impact. From AI discovery to youth mentorship, 
                                    we build brands that matter in an ever-evolving digital landscape.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="services" className="page-section" style={{paddingTop: 0, minHeight: 'auto'}}>
                        <div className="service-hero">
                            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }} className="font-headline">
                                OUR <span className="hero-gradient">CURATIONS</span>
                            </h2>
                            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                                Full-stack solutions for brands ready to make cultural impact
                            </p>
                        </div>
                        <div style={{ padding: '4rem 2rem', background: '#FDFDFC' }}>
                            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
                                        <p style={{marginTop: '1.5rem', fontSize: '0.875rem'}}>Prompt engineering, SEO optimization, and tech stack discovery for the AI age.</p>
                                        <div className="btn-primary" style={{marginTop: '1rem', background: 'white', color: 'hsl(var(--accent))', display: 'inline-block'}}>
                                            EXPLORE
                                        </div>
                                    </Link>
                                    
                                    <Link href="/public-relations" className="brutal-box service-card" style={{background: '#EBF998', color: 'black', padding: '2rem'}}>
                                        <span style={{fontSize: '3rem'}}>📺</span>
                                        <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}} className="font-headline">Media Buying & PR</h3>
                                        <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Netflix placements, podcast ads, linear TV, and strategic public relations.</p>
                                        <div className="btn-primary" style={{marginTop: '1rem', display: 'inline-block', color: 'black', background: 'white'}}>
                                            EXPLORE
                                        </div>
                                    </Link>

                                    <Link href="/creative-campaigns" className="brutal-box service-card" style={{background: 'hsl(var(--accent))', color: 'white', padding: '2rem'}}>
                                        <span style={{fontSize: '3rem'}}>🎨</span>
                                        <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}} className="font-headline">Creative Campaigns</h3>
                                        <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Campaigns that drive engagement and build authentic community connections.</p>
                                        <div className="btn-primary" style={{marginTop: '1rem', background: 'white', color: 'hsl(var(--accent))', display: 'inline-block'}}>
                                            EXPLORE
                                        </div>
                                    </Link>

                                    <Link href="/influencer-ugc" className="brutal-box service-card" style={{background: '#EBF998', color: 'black', padding: '2rem'}}>
                                        <span style={{fontSize: '3rem'}}>🤝</span>
                                        <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}} className="font-headline">Influencer & UGC</h3>
                                        <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Strategic partnerships and user-generated content programs that build trust.</p>
                                        <div className="btn-primary" style={{marginTop: '1rem', display: 'inline-block', color: 'black', background: 'white'}}>
                                            EXPLORE
                                        </div>
                                    </Link>

                                    <Link href="/newsletter-services" className="brutal-box service-card" style={{background: 'hsl(var(--primary))', color: 'white', padding: '2rem'}}>
                                        <span style={{fontSize: '3rem'}}>📧</span>
                                        <h3 style={{fontWeight: 800, fontSize: '1.5rem', marginTop: '1rem', textTransform: 'uppercase'}} className="font-headline">Newsletter Services</h3>
                                        <p style={{marginTop: '1rem', fontSize: '0.875rem'}}>Newsletters that don't just reach inboxes, they create communities.</p>
                                        <div className="btn-primary" style={{marginTop: '1rem', background: 'white', color: 'hsl(var(--primary))', display: 'inline-block'}}>
                                            EXPLORE
                                        </div>
                                    </Link>

                                    {/* Branding Toolkit Service Card */}
                                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-sm"></div>
                                      <div className="relative z-10">
                                        <div className="mb-6 flex items-center justify-between">
                                          <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                                            </svg>
                                          </div>
                                          <span className="text-sm font-medium text-white/80">Brand Identity</span>
                                        </div>
                                        <h3 className="mb-4 text-2xl font-bold text-white">Branding Toolkit</h3>
                                        <p className="mb-6 text-white/90">
                                          Complete brand identity solutions: websites, logos, letterheads, internal portals, ecommerce platforms, podcast thumbnails, and YouTube branding.
                                        </p>
                                        <Link href="/branding-toolkit" className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30">
                                          Explore Branding
                                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </Link>
                                      </div>
                                    </div>

                                    {/* Outbox Service Card */}
                                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-gray-200 to-blue-500 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/20 via-gray-200/20 to-blue-500/20 backdrop-blur-sm"></div>
                                      <div className="relative z-10">
                                        <div className="mb-6 flex items-center justify-between">
                                          <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                                            <svg className="h-8 w-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                          </div>
                                          <span className="text-sm font-medium text-gray-600">Partnership Hub</span>
                                        </div>
                                        <h3 className="mb-4 text-2xl font-bold text-gray-800">Outbox</h3>
                                        <p className="mb-6 text-gray-700">
                                          Your partnership gateway: FAQ resources, affiliate program applications, media kit submissions, and agency collaboration opportunities.
                                        </p>
                                        <Link href="/outbox" className="inline-flex items-center rounded-full bg-blue-500/20 px-6 py-3 font-semibold text-blue-700 backdrop-blur-sm transition-all hover:bg-blue-500/30">
                                          Access Outbox
                                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </Link>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Google Partner Section */}
                        <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                            <div className="brutal-box" style={{ background: '#EBF998', color: 'black', padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏆</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                                    Grow with Google Partner
                                </h3>
                                <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                                    One deserving brand receives a full-service partnership for free, yearly. Building digital equity and community growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="contact" className="page-section" style={{ paddingTop: 0, minHeight: 'auto', background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)', padding: '4rem 2rem' }}>
                        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                                Ready to Curate Your Success?
                            </h2>
                            <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1rem' }}>
                                Phone: 747-200-5740
                            </p>
                             <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem' }}>
                                Email: hello@curations.cc
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                 <a href="mailto:hello@curations.cc" className="brutal-box" style={{background: 'white', color: 'hsl(var(--primary))', padding: '1rem 2rem', fontWeight: 800, textTransform: 'uppercase', border: '4px solid black', cursor: 'pointer', textDecoration: 'none'}}>
                                    START YOUR CURATION
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;