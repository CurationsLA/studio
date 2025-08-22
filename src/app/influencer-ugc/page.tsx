
'use client';

import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';
import GradientButton from '@/components/ui/GradientButton';

const InfluencerUGCPage = () => {
    const [activeTab, setActiveTab] = useState('strategy');
    const [creatorTier, setCreatorTier] = useState('micro');
    const [communityMeter, setCommunityMeter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCommunityMeter(prev => (prev < 100 ? prev + 1 : 100));
        }, 42);
        return () => clearInterval(timer);
    }, []);

    const influencerSchema = {
        // ... (schema remains the same)
    };

    const creatorTiers = {
        // ... (creatorTiers remains the same, pricing will be ignored)
    };

    return (
        <>
            <DraftNav />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", background: 'hsl(var(--background))', minHeight: '100vh' }}>
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(influencerSchema) }}
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
                    
                    .community-meter {
                        width: 100%;
                        height: 24px;
                        background: #e5e5e5;
                        border: 4px solid black;
                        overflow: hidden;
                        position: relative;
                    }
                    
                    .community-fill {
                        height: 100%;
                        background: var(--gradient-influencer);
                        background-size: 200% 200%;
                        animation: gradient-shift 4s ease infinite;
                        transition: width 0.1s ease-in-out;
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .community-text {
                        color: white;
                        font-weight: 800;
                        font-size: 0.8rem;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
                        z-index: 2;
                    }

                    .tab-button {
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
                    
                    .tab-button.active {
                        background: hsl(var(--primary));
                        color: hsl(var(--primary-foreground));
                        transform: translateY(-4px);
                        box-shadow: 4px 4px 0px black;
                    }
                    
                    .tab-button:hover:not(.active) {
                        background: hsl(var(--secondary));
                        transform: translateY(-2px);
                    }
                `}</style>

                {/* Hero Section */}
                <div className="gradient-overlay-noise" style={{ background: 'var(--gradient-influencer)', padding: '4rem 2rem', color: 'white', backgroundSize: '200% 200%', animation: 'gradient-shift 8s ease-in-out infinite' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤝</div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', textTransform: 'uppercase', marginBottom: '1rem', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }} className="font-bold">
                            INFLUENCER COLLABORATIONS
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            Strategic partnerships with creators who genuinely connect with your audience. We don't just find influencers—we build creator communities that authentically champion your brand.
                        </p>
                        <div className="community-meter brutal-box" style={{ maxWidth: '500px', margin: '2rem auto 0' }}>
                            <div 
                                className="community-fill" 
                                style={{ width: `${communityMeter}%` }}
                            >
                               <span className="community-text">100% COMMUNITY</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Tab Navigation */}
                <div style={{ padding: '2rem', background: 'hsl(var(--background))', borderBottom: '4px solid black' }}>
                    {/* ... Tabs */}
                </div>

                {/* Tab Content */}
                <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                   {/* ... Content */}
                </div>

                {/* CTA Section */}
                <div style={{ background: 'black', padding: '4rem 2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-bold">
                        READY TO BUILD YOUR CREATOR COMMUNITY?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Let's connect your brand with creators who genuinely love what you do.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:hello@curations.cc">
                            <GradientButton gradient="influencer">
                                START COLLABORATING
                            </GradientButton>
                        </a>
                        <a href="#creator-network">
                            <GradientButton gradient="influencer">
                                VIEW CREATORS
                            </GradientButton>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfluencerUGCPage;
