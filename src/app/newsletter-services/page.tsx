
'use client';

import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';
import GradientButton from '@/components/ui/GradientButton';

const NewsletterServicesPage = () => {
    const [activeService, setActiveService] = useState('strategy');
    const [selectedTemplate, setSelectedTemplate] = useState('brutal');
    const [audienceMeter, setAudienceMeter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setAudienceMeter(prev => (prev < 100 ? prev + 1 : 100));
        }, 35);
        return () => clearInterval(timer);
    }, []);

    const newsletterSchema = {
        // ... (schema remains the same)
    };

    const templateStyles = {
        // ... (templateStyles remains the same)
    };

    return (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", background: '#FDFDFC', minHeight: '100vh' }}>
            <DraftNav />
            <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(newsletterSchema) }}
            />
            
            <style jsx global>{`
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                    transition: all 0.3s ease;
                }
                .brutal-box:hover {
                    box-shadow: 12px 12px 0px hsl(var(--primary));
                }
                
                 .audience-meter {
                    width: 100%;
                    height: 24px;
                    background: #e5e5e5;
                    border: 4px solid black;
                    overflow: hidden;
                    position: relative;
                }
                
                .audience-fill {
                    height: 100%;
                    background: var(--gradient-newsletter);
                    background-size: 200% 200%;
                    animation: gradient-shift 4s ease infinite;
                    transition: width 0.1s ease-in-out;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .audience-text {
                    color: white;
                    font-weight: 800;
                    font-size: 0.8rem;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
                    z-index: 2;
                }

                .service-tab {
                    background: white;
                    border: 4px solid black;
                    padding: 1rem 2rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin: 0.5rem;
                    font-size: 0.875rem;
                }
                
                .service-tab.active {
                    background: hsl(var(--primary));
                    color: white;
                    transform: translateY(-4px);
                    box-shadow: 4px 4px 0px black;
                }
                
                .service-tab:hover:not(.active) {
                    background: hsl(var(--accent));
                    color: white;
                    transform: translateY(-2px);
                }
            `}</style>

            {/* Hero Section */}
            <div className="gradient-overlay-noise" style={{ background: 'var(--gradient-newsletter)', padding: '4rem 2rem', color: 'white', backgroundSize: '200% 200%', animation: 'gradient-shift 8s ease-in-out infinite' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📧</div>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}>
                        NEWSLETTER MASTERY
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                        From strategic branding to compelling copy, from visual design to ghostwritten excellence—we create newsletters 
                        that don't just reach inboxes, they create communities. This is where brands become voices people actually want to hear from.
                    </p>
                    
                    <div className="audience-meter brutal-box" style={{ maxWidth: '500px', margin: '2rem auto 0' }}>
                        <div 
                            className="audience-fill" 
                            style={{ width: `${audienceMeter}%` }}
                        >
                           <span className="audience-text">100% OWNING YOUR AUDIENCE</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Navigation */}
            <div style={{ padding: '2rem', background: 'white', borderBottom: '4px solid black' }}>
                {/* ... Navigation ... */}
            </div>

            {/* Service Content */}
            <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                {/* ... Content ... */}
            </div>
            
            {/* CTA Section */}
            <div className="gradient-overlay-noise" style={{ background: 'var(--gradient-newsletter)', padding: '4rem 2rem', textAlign: 'center', backgroundSize: '200% 200%', animation: 'gradient-shift 8s ease-in-out infinite' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>
                    READY TO DOMINATE INBOXES?
                </h2>
                <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                    Let's create a newsletter that people actually look forward to receiving. The kind that builds communities, 
                    drives business results, and establishes your voice as one worth following.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="mailto:hello@curations.cc">
                        <GradientButton gradient="newsletter">
                            START YOUR NEWSLETTER
                        </GradientButton>
                    </a>
                    <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer">
                         <GradientButton gradient="newsletter">
                            SEE CURATIONSLA
                        </GradientButton>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsletterServicesPage;
