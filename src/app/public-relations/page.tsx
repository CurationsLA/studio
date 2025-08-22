
'use client';

import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';
import GradientButton from '@/components/ui/GradientButton';

const PublicRelationsPage = () => {
    const [activeService, setActiveService] = useState('corporate');
    const [impactMeter, setImpactMeter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setImpactMeter(prev => (prev < 100 ? prev + 1 : 100));
        }, 45);
        return () => clearInterval(timer);
    }, []);

    const prSchema = {
        // ... (schema remains the same)
    };

    return (
        <>
             <DraftNav />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", background: 'hsl(var(--background))', minHeight: '100vh' }}>
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(prSchema) }}
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

                    .impact-meter {
                        width: 100%;
                        height: 24px;
                        background: #e5e5e5;
                        border: 4px solid black;
                        overflow: hidden;
                        position: relative;
                    }
                    
                    .impact-fill {
                        height: 100%;
                        background: var(--gradient-pr);
                        background-size: 200% 200%;
                        animation: gradient-shift 4s ease infinite;
                        transition: width 0.1s ease-in-out;
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .impact-text {
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
                        color: hsl(var(--primary-foreground));
                        transform: translateY(-4px);
                        box-shadow: 4px 4px 0px black;
                    }
                    
                    .service-tab:hover:not(.active) {
                        background: hsl(var(--accent));
                        color: hsl(var(--accent-foreground));
                        transform: translateY(-2px);
                    }
                    
                    .metric-card {
                        background: white;
                        border: 4px solid black;
                        padding: 2rem;
                        text-align: center;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    }
                    
                    .metric-card:hover {
                        transform: scale(1.05) rotate(1deg);
                        box-shadow: 12px 12px 0px hsl(var(--accent));
                    }
                `}</style>

                {/* Hero Section */}
                <div className="gradient-overlay-noise" style={{ background: 'var(--gradient-pr)', padding: '4rem 2rem', color: 'white', backgroundSize: '200% 200%', animation: 'gradient-shift 8s ease-in-out infinite' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📰</div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}>
                            PUBLIC RELATIONS
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            Strategic communications that build reputations, manage crises, and position leaders as industry voices. 
                            We don't just manage your story—we help you become the story worth telling.
                        </p>
                        <div className="impact-meter brutal-box" style={{ maxWidth: '500px', margin: '2rem auto 0' }}>
                            <div 
                                className="impact-fill" 
                                style={{ width: `${impactMeter}%` }}
                            >
                               <span className="impact-text">100% IMPACT</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Key Metrics */}
                <div style={{ padding: '4rem 2rem', background: 'black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }}>
                            PR PERFORMANCE METRICS
                        </h2>
                        {/* Metrics Content */}
                    </div>
                </div>

                {/* Service Tabs */}
                <div style={{ padding: '2rem', background: 'hsl(var(--background))', borderBottom: '4px solid black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        {/* Service Tabs Buttons */}
                    </div>
                </div>

                {/* Service Content */}
                <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                    {/* Service Content based on active tab */}
                </div>

                {/* CTA Section */}
                <div style={{ background: 'black', padding: '4rem 2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }} >
                        READY TO CONTROL YOUR NARRATIVE?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Let's build the reputation your brand deserves and the communications strategy that sustains it.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:hello@curations.cc">
                            <GradientButton gradient="pr">
                                START PR STRATEGY
                            </GradientButton>
                        </a>
                        <a href="tel:747-200-5740">
                             <GradientButton gradient="pr">
                                CRISIS HOTLINE
                            </GradientButton>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PublicRelationsPage;
