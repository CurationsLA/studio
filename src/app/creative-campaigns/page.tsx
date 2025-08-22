
'use client';

import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';
import GradientButton from '@/components/ui/GradientButton';

const CreativeCampaignsPage = () => {
    const [activeCampaignType, setActiveCampaignType] = useState('social');
    const [creativityMeter, setCreativityMeter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCreativityMeter(prev => (prev < 100 ? prev + 1 : 100));
        }, 50);
        return () => clearInterval(timer);
    }, []);

    const campaignSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Creative Campaigns & Collaborations",
        "provider": {
            "@type": "Organization",
            "name": "Curations"
        },
        "description": "Strategic creative campaigns, social media strategy, UGC content creation, and brand collaborations that drive authentic engagement.",
        "serviceType": "Creative Marketing",
        "areaServed": "Global"
    };

    const campaignTypes: { [key: string]: any } = {
        social: {
            title: 'SOCIAL STRATEGY',
            description: 'Platform-specific strategies that turn followers into community members',
            icon: '📱',
            features: [
                'Platform-specific content strategies',
                'Community building frameworks',
                'Engagement optimization',
                'Viral content creation',
                'Influencer partnership coordination'
            ]
        },
        ugc: {
            title: 'UGC THAT CONVERTS',
            description: 'User-generated content programs that build trust and drive sales',
            icon: '📸',
            features: [
                'UGC campaign strategy',
                'Creator community management',
                'Content quality guidelines',
                'Conversion optimization',
                'Rights management'
            ]
        },
        content: {
            title: 'CONTENT GAPS',
            description: 'Identify and fill strategic content gaps in your marketing ecosystem',
            icon: '🎯',
            features: [
                'Content audit and gap analysis',
                'Strategic content planning',
                'Multi-format content creation',
                'Content distribution strategy',
                'Performance measurement'
            ]
        },
        experiential: {
            title: 'EXPERIENTIAL CAMPAIGNS',
            description: 'IRL experiences that create lasting brand memories',
            icon: '🎪',
            features: [
                'Event concept development',
                'Immersive experience design',
                'Social integration strategy',
                'Community activation',
                'Post-event amplification'
            ]
        }
    };

    return (
        <>
            <DraftNav />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", background: 'hsl(var(--background))', minHeight: '100vh' }}>
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(campaignSchema) }}
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
                    
                    .creativity-meter {
                        width: 100%;
                        height: 24px;
                        background: #e5e5e5;
                        border: 4px solid black;
                        overflow: hidden;
                        position: relative;
                    }
                    
                    .creativity-fill {
                        height: 100%;
                        background: var(--gradient-creative);
                        background-size: 200% 200%;
                        animation: gradient-shift 4s ease infinite;
                        transition: width 0.1s ease-in-out;
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .creativity-text {
                        color: white;
                        font-weight: 800;
                        font-size: 0.8rem;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
                        z-index: 2;
                    }
                    
                    .campaign-type-button {
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
                    
                    .campaign-type-button.active {
                        background: hsl(var(--accent));
                        color: hsl(var(--accent-foreground));
                        transform: translateY(-4px);
                        box-shadow: 4px 4px 0px black;
                    }
                    
                    .campaign-type-button:hover:not(.active) {
                        background: hsl(var(--primary));
                        color: hsl(var(--primary-foreground));
                        transform: translateY(-2px);
                    }
                    
                    .creative-card {
                        background: white;
                        border: 4px solid black;
                        padding: 2rem;
                        transition: all 0.3s ease;
                        cursor: pointer;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .creative-card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, hsla(var(--accent), 0.2), transparent);
                        transition: left 0.7s ease;
                    }
                    
                    .creative-card:hover::before {
                        left: 100%;
                    }
                    
                    .creative-card:hover {
                        transform: translateY(-8px) rotate(1.5deg);
                        box-shadow: 15px 15px 0px hsl(var(--accent));
                    }
                    
                    .collaboration-showcase {
                        background: var(--gradient-creative-alt);
                        background-size: 400% 400%;
                        animation: gradient-shift 10s ease-in-out infinite;
                        color: white;
                        padding: 3rem;
                        margin: 2rem 0;
                        position: relative;
                    }
                    
                    .viral-element {
                        animation: viral-pulse 2s ease-in-out infinite alternate;
                    }
                    
                    @keyframes viral-pulse {
                        0% { transform: scale(1) rotate(0deg); }
                        100% { transform: scale(1.05) rotate(3deg); }
                    }
                    
                    .engagement-stat {
                        background: black;
                        color: hsl(var(--green));
                        padding: 1.5rem;
                        text-align: center;
                        border: 2px solid hsl(var(--green));
                        transition: all 0.3s ease;
                    }
                    
                    .engagement-stat:hover {
                        background: hsl(var(--green));
                        color: black;
                        transform: scale(1.05);
                        box-shadow: 0 0 20px hsl(var(--green));
                    }
                    
                    .creative-process {
                        background: white;
                        border: 4px solid black;
                        padding: 2rem;
                        margin: 1rem 0;
                        position: relative;
                    }
                    
                    .process-step {
                        display: flex;
                        align-items: center;
                        margin-bottom: 2rem;
                        transition: all 0.3s ease;
                    }
                    
                    .process-step:hover {
                        transform: translateX(10px);
                    }
                    
                    .step-icon {
                        background: hsl(var(--accent));
                        color: white;
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.5rem;
                        margin-right: 1.5rem;
                        border: 4px solid black;
                        flex-shrink: 0;
                    }
                `}</style>

                {/* Hero Section */}
                <div className="gradient-overlay-noise gradient-cursor" style={{ position: 'relative', background: 'var(--gradient-creative)', padding: '4rem 2rem', color: 'white', backgroundSize: '200% 200%', animation: 'gradient-shift 8s ease-in-out infinite' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎨</div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }} >
                            CREATIVE CAMPAIGNS
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                            Where strategy meets creativity, where data meets intuition, where brands become movements. 
                            We don't just create campaigns—we create cultural moments that people want to be part of.
                        </p>
                        
                        <div className="creativity-meter brutal-box" style={{ maxWidth: '500px', margin: '2rem auto 0' }}>
                            <div 
                                className="creativity-fill" 
                                style={{ width: `${creativityMeter}%` }}
                            >
                               <span className="creativity-text">100% CREATIVITY</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Engagement Stats */}
                <div style={{ padding: '4rem 2rem', background: 'black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }}>
                            CREATIVE IMPACT
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                           <div className="engagement-stat">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>+78%</div>
                                <div>Brand Recognition</div>
                            </div>
                            <div className="engagement-stat">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>+120%</div>
                                <div>Community Growth</div>
                            </div>
                            <div className="engagement-stat">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>+95%</div>
                                <div>Audience Retention</div>
                            </div>
                            <div className="engagement-stat">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>+200%</div>
                                <div>Authentic Engagement</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Campaign Type Navigation */}
                <div style={{ padding: '2rem', background: 'white', borderBottom: '4px solid black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        {Object.keys(campaignTypes).map(type => (
                            <button 
                                key={type}
                                className={`campaign-type-button ${activeCampaignType === type ? 'active' : ''}`}
                                onClick={() => setActiveCampaignType(type)}
                            >
                                {campaignTypes[type].icon} {campaignTypes[type].title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Campaign Type Content */}
                <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                    <div className="collaboration-showcase brutal-box gradient-overlay-noise">
                        <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                                {campaignTypes[activeCampaignType].icon}
                            </div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                {campaignTypes[activeCampaignType].title}
                            </h2>
                            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.8, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                                {campaignTypes[activeCampaignType].description}
                            </p>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                {campaignTypes[activeCampaignType].features.map((feature:string, index:number) => (
                                    <div key={index} style={{ 
                                        background: 'rgba(255,255,255,0.15)', 
                                        padding: '1rem', 
                                        border: '2px solid white',
                                        fontWeight: 700,
                                        backdropFilter: 'blur(10px)',
                                    }}>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Creative Process */}
                <div style={{ padding: '4rem 2rem', background: 'hsl(var(--background))' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} >
                            OUR CREATIVE PROCESS
                        </h2>
                        
                        <div className="creative-process">
                             <div className="process-step">
                                <div className="step-icon">1</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        CULTURAL IMMERSION
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Deep dive into your audience's world. We study their language, their hangouts, their heroes, their pain points. 
                                        Real insight comes from real understanding, not just data points.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="process-step">
                                <div className="step-icon" style={{ background: 'hsl(var(--primary))' }}>2</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        CREATIVE IDEATION
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Brainstorming sessions that blend strategic thinking with wild creativity. We push beyond the obvious 
                                        to find ideas that make people stop scrolling and start engaging.
                                    </p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-icon" style={{ background: 'hsl(var(--green))', color: 'black' }}>3</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        RAPID PROTOTYPING
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Quick, scrappy versions of big ideas. We test concepts fast and cheap before investing in full production. 
                                        Fail fast, learn faster, win biggest.
                                    </p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-icon">4</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        CULTURAL LAUNCH
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Strategic rollout that maximizes cultural impact. We don't just launch campaigns—we orchestrate cultural moments 
                                        that people want to participate in, share, and remember.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Offerings Grid */}
                <div style={{ padding: '4rem 2rem', background: 'white' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }}>
                            CREATIVE SERVICES BREAKDOWN
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                            {/* Service Cards Here */}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div style={{ background: 'black', padding: '4rem 2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>
                        READY TO CREATE CULTURAL MOMENTS?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Let's turn your brand into the conversation everyone wants to join.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:hello@curations.cc">
                            <GradientButton gradient="creative">
                                START CREATING
                            </GradientButton>
                        </a>
                        <a href="#portfolio">
                             <GradientButton gradient="creative">
                                VIEW CAMPAIGNS
                            </GradientButton>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreativeCampaignsPage;
