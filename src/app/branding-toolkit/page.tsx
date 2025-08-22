
'use client';

import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';

const BrandingToolkitPage = () => {
    const [brandVibesMeter, setBrandVibesMeter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setBrandVibesMeter(prev => (prev < 100 ? prev + 1 : 100));
        }, 40);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", background: '#FDFDFC', minHeight: '100vh' }}>
            <DraftNav />
            <style jsx global>{`
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                    transition: all 0.3s ease;
                }
                .brutal-box:hover {
                    box-shadow: 12px 12px 0px hsl(var(--primary));
                }
                .brand-vibes-meter {
                    width: 100%;
                    height: 24px;
                    background: #e5e5e5;
                    border: 4px solid black;
                    overflow: hidden;
                    position: relative;
                }
                
                .brand-vibes-fill {
                    height: 100%;
                    background: var(--gradient-branding);
                    background-size: 200% 200%;
                    animation: gradient-shift 4s ease infinite;
                    transition: width 0.1s ease-in-out;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .brand-vibes-text {
                    color: white;
                    font-weight: 800;
                    font-size: 0.8rem;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
                    z-index: 2;
                }
            `}</style>

            {/* Hero Section */}
            <div className="gradient-overlay-noise" style={{ background: 'var(--gradient-branding)', padding: '4rem 2rem', color: 'white', backgroundSize: '200% 200%', animation: 'gradient-shift 8s ease-in-out infinite' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛠️</div>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}>
                        BRANDING TOOLKIT
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                        From foundational logos to comprehensive brand ecosystems, we build iconic brands that resonate with culture and stand the test of time.
                    </p>
                    <div className="brand-vibes-meter brutal-box" style={{ maxWidth: '500px', margin: '2rem auto 0' }}>
                        <div 
                            className="brand-vibes-fill" 
                            style={{ width: `${brandVibesMeter}%` }}
                        >
                           <span className="brand-vibes-text">100% BRAND VIBES</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Sections */}
            <div style={{ padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    {/* Website Design */}
                    <div className="brutal-box" style={{ background: 'white', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>Website Design</h2>
                        <p>Websites that are not just beautiful, but are powerful business tools.</p>
                    </div>

                    {/* Logo Design */}
                    <div className="brutal-box" style={{ background: 'white', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>Logo Design</h2>
                        <p>Logos that are memorable, versatile, and timeless.</p>
                    </div>

                    {/* Letterheads & Stationery */}
                    <div className="brutal-box" style={{ background: 'white', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>Letterheads & Stationery</h2>
                        <p>A cohesive suite of materials for a professional brand image.</p>
                    </div>

                    {/* Internal Portals */}
                    <div className="brutal-box" style={{ background: 'white', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>Internal Portals</h2>
                        <p>Custom-designed portals that streamline your workflow and enhance your team's productivity.</p>
                    </div>

                    {/* Ecommerce Design */}
                    <div className="brutal-box" style={{ background: 'white', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>Ecommerce Design</h2>
                        <p>Beautiful and intuitive e-commerce experiences that drive sales.</p>
                    </div>

                    {/* Podcast Thumbnails */}
                    <div className="brutal-box" style={{ background: 'white', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>Podcast Thumbnails</h2>
                        <p>Eye-catching thumbnails that make your podcast stand out.</p>
                    </div>

                    {/* YouTube Branding */}
                    <div className="brutal-box" style={{ background: 'white', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>YouTube Branding</h2>
                        <p>A complete branding package for your YouTube channel.</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div style={{ background: 'black', padding: '4rem 2rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>
                    Ready to Build Your Brand?
                </h2>
                <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                    Let's create a brand that tells your story, captivates your audience, and drives your business forward.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="mailto:hello@curations.cc" className="brutal-box" style={{
                        background: 'hsl(var(--accent))', 
                        color: 'white', 
                        padding: '1rem 2rem', 
                        fontWeight: 800, 
                        textTransform: 'uppercase', 
                        border: '4px solid hsl(var(--accent))', 
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}>
                        START YOUR BRAND JOURNEY
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BrandingToolkitPage;
