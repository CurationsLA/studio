
'use client';

import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';

const CreativeCampaignsPage = () => {
    const [activeCampaignType, setActiveCampaignType] = useState('social');
    const [creativityMeter, setCreativityMeter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCreativityMeter(prev => (prev + 1) % 101);
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
            color: 'hsl(var(--accent))',
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
            color: 'hsl(var(--primary))',
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
            color: '#EBF998',
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
            color: 'hsl(var(--accent))',
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
            <div style={{ background: 'hsl(var(--background))', minHeight: '100vh' }}>
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(campaignSchema) }}
                />
                
                <style jsx global>{`
                    .brutal-box {
                        border: 4px solid black;
                        box-shadow: 8px 8px 0px black;
                    }
                    
                    .creativity-meter {
                        width: 100%;
                        height: 20px;
                        background: #e5e5e5;
                        border: 4px solid black;
                        overflow: hidden;
                        position: relative;
                    }
                    
                    .creativity-fill {
                        height: 100%;
                        background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), #EBF998);
                        transition: width 0.1s ease;
                        position: relative;
                    }
                    
                    .creativity-fill::after {
                        content: 'CREATIVITY LEVEL: ${creativityMeter}%';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        color: white;
                        font-weight: 800;
                        font-size: 0.75rem;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
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
                        transform: translateY(-3px);
                    }
                    
                    .campaign-type-button:hover {
                        background: hsl(var(--primary));
                        color: hsl(var(--primary-foreground));
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
                        background: linear-gradient(90deg, transparent, hsla(var(--accent), 0.1), transparent);
                        transition: all 0.5s ease;
                    }
                    
                    .creative-card:hover::before {
                        left: 100%;
                    }
                    
                    .creative-card:hover {
                        transform: translateY(-5px) rotate(1deg);
                        box-shadow: 12px 12px 0px black;
                    }
                    
                    .collaboration-showcase {
                        background: linear-gradient(45deg, hsl(var(--accent)), hsl(var(--primary)), #EBF998, hsl(var(--accent)));
                        background-size: 400% 400%;
                        animation: gradient-flow 8s ease-in-out infinite;
                        color: white;
                        padding: 3rem;
                        margin: 2rem 0;
                    }
                    
                    @keyframes gradient-flow {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }
                    
                    .viral-element {
                        animation: viral-pulse 2s ease-in-out infinite;
                    }
                    
                    @keyframes viral-pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.1); }
                    }
                    
                    .engagement-stat {
                        background: black;
                        color: #EBF998;
                        padding: 1.5rem;
                        text-align: center;
                        border: 2px solid #EBF998;
                        transition: all 0.3s ease;
                    }
                    
                    .engagement-stat:hover {
                        background: #EBF998;
                        color: black;
                        transform: scale(1.05);
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
                    }
                `}</style>

                {/* Hero Section */}
                <div style={{ background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)', padding: '4rem 2rem', color: 'white' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎨</div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }} className="font-headline">
                            CREATIVE CAMPAIGNS
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                            Where strategy meets creativity, where data meets intuition, where brands become movements. 
                            We don't just create campaigns—we create cultural moments that people want to be part of.
                        </p>
                        
                        <div className="creativity-meter brutal-box" style={{ maxWidth: '500px', margin: '0 auto' }}>
                            <div 
                                className="creativity-fill" 
                                style={{ width: `${creativityMeter}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Engagement Stats */}
                <div style={{ padding: '4rem 2rem', background: 'black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }} className="font-headline">
                            CREATIVE IMPACT METRICS
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            <div className="engagement-stat">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>10M+</div>
                                <div>Total Impressions</div>
                            </div>
                            <div className="engagement-stat">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>850%</div>
                                <div>Engagement Increase</div>
                            </div>
                            <div className="engagement-stat">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>47</div>
                                <div>Viral Campaigns</div>
                            </div>
                            <div className="engagement-stat">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>92%</div>
                                <div>Brand Recall Rate</div>
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
                    <div className="collaboration-showcase brutal-box">
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                                {campaignTypes[activeCampaignType].icon}
                            </div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                {campaignTypes[activeCampaignType].title}
                            </h2>
                            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                                {campaignTypes[activeCampaignType].description}
                            </p>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                {campaignTypes[activeCampaignType].features.map((feature:string, index:number) => (
                                    <div key={index} style={{ 
                                        background: 'rgba(255,255,255,0.2)', 
                                        padding: '1rem', 
                                        border: '2px solid white',
                                        fontWeight: 700
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
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                            OUR CREATIVE PROCESS
                        </h2>
                        
                        <div className="creative-process">
                            <div className="process-step">
                                <div className="step-icon">1</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }} className="font-headline">
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
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }} className="font-headline">
                                        CREATIVE IDEATION
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Brainstorming sessions that blend strategic thinking with wild creativity. We push beyond the obvious 
                                        to find ideas that make people stop scrolling and start engaging.
                                    </p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-icon" style={{ background: '#EBF998', color: 'black' }}>3</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }} className="font-headline">
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
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }} className="font-headline">
                                        CULTURAL LAUNCH
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Strategic rollout that maximizes cultural impact. We don't just launch campaigns—we orchestrate cultural moments 
                                        that people want to participate in, share, and remember.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="process-step">
                                <div className="step-icon" style={{ background: 'hsl(var(--primary))' }}>5</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }} className="font-headline">
                                        OPTIMIZATION & AMPLIFICATION
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Real-time monitoring and optimization based on performance and cultural response. We double down on what works 
                                        and pivot what doesn't, always staying ahead of the conversation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Offerings Grid */}
                <div style={{ padding: '4rem 2rem', background: 'white' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                            CREATIVE SERVICES BREAKDOWN
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                            <div className="creative-card">
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    SOCIAL STRATEGY
                                </h3>
                                <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    Platform-specific strategies that turn followers into community members through authentic engagement and cultural relevance.
                                </p>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li>• Content strategy and planning</li>
                                    <li>• Community management</li>
                                    <li>• Influencer partnership coordination</li>
                                    <li>• Viral content creation</li>
                                    <li>• Platform optimization</li>
                                </ul>
                            </div>

                            <div className="creative-card">
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    UGC THAT CONVERTS
                                </h3>
                                <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    User-generated content programs that build authentic trust and drive measurable conversions through community participation.
                                </p>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li>• UGC campaign strategy</li>
                                    <li>• Creator recruitment and management</li>
                                    <li>• Content quality guidelines</li>
                                    <li>• Rights and usage management</li>
                                    <li>• Conversion optimization</li>
                                </ul>
                            </div>

                            <div className="creative-card">
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    CONTENT GAPS
                                </h3>
                                <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    Strategic analysis and filling of content gaps in your marketing ecosystem to ensure comprehensive audience coverage.
                                </p>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li>• Content audit and gap analysis</li>
                                    <li>• Strategic content planning</li>
                                    <li>• Multi-format content creation</li>
                                    <li>• Distribution strategy</li>
                                    <li>• Performance measurement</li>
                                </ul>
                            </div>

                            <div className="creative-card">
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎪</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    EXPERIENTIAL CAMPAIGNS
                                </h3>
                                <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    Real-world experiences that create lasting brand memories and drive organic social amplification.
                                </p>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li>• Event concept development</li>
                                    <li>• Immersive experience design</li>
                                    <li>• Social integration strategy</li>
                                    <li>• Community activation</li>
                                    <li>• Post-event amplification</li>
                                </ul>
                            </div>

                            <div className="creative-card">
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎬</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    VIDEO PRODUCTION
                                </h3>
                                <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    From concept to completion, video content that stops the scroll and starts conversations.
                                </p>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li>• Concept development</li>
                                    <li>• Pre-production planning</li>
                                    <li>• Professional filming</li>
                                    <li>• Post-production editing</li>
                                    <li>• Platform optimization</li>
                                </ul>
                            </div>

                            <div className="creative-card">
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    BRAND COLLABORATIONS
                                </h3>
                                <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    Strategic partnerships between brands that create mutual value and expand audience reach.
                                </p>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li>• Partnership strategy development</li>
                                    <li>• Brand alignment assessment</li>
                                    <li>• Co-marketing campaign creation</li>
                                    <li>• Cross-promotion planning</li>
                                    <li>• Performance tracking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Campaign Showcase */}
                <div style={{ padding: '4rem 2rem', background: 'black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }} className="font-headline">
                            CAMPAIGN HIGHLIGHTS
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                            <div className="brutal-box" style={{ background: 'hsl(var(--accent))', color: 'white', padding: '2rem' }}>
                                <div className="viral-element" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>🌮</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    "TACO TRUCK TAKEOVER"
                                </h3>
                                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 800 }}>2.3M</div>
                                    <div>TikTok Views in 48 Hours</div>
                                </div>
                                <p style={{ lineHeight: 1.8 }}>
                                    Transformed a local taco truck into LA's most talked-about food destination through a guerrilla social campaign 
                                    featuring surprise celebrity visits and limited-time menu drops.
                                </p>
                            </div>

                            <div className="brutal-box" style={{ background: 'hsl(var(--primary))', color: 'white', padding: '2rem' }}>
                                <div className="viral-element" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>☕</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    "COFFEE SHOP COLLECTIVE"
                                </h3>
                                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 800 }}>500%</div>
                                    <div>UGC Increase</div>
                                </div>
                                <p style={{ lineHeight: 1.8 }}>
                                    Created a city-wide coffee shop collaboration campaign where customers could "collect" stamps from different 
                                    shops, driving cross-location traffic and community building.
                                </p>
                            </div>

                            <div className="brutal-box" style={{ background: '#EBF998', color: 'black', padding: '2rem' }}>
                                <div className="viral-element" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>🎨</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    "ARTIST SPOTLIGHT SERIES"
                                </h3>
                                <div style={{ background: 'black', color: '#EBF998', padding: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 800 }}>50+</div>
                                    <div>Local Artists Featured</div>
                                </div>
                                <p style={{ lineHeight: 1.8 }}>
                                    Monthly campaign showcasing local artists in collaboration with businesses, creating authentic community 
                                    connections while driving foot traffic and social engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Investment Packages */}
                <div style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }} className="font-headline">
                            CREATIVE INVESTMENT PACKAGES
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div className="brutal-box" style={{ background: 'white', padding: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    CREATIVE STARTER
                                </h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }} className="font-headline">$10K</div>
                                <div style={{ marginBottom: '2rem' }}>Essential creative services</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Social strategy development</li>
                                    <li>Content creation (20 pieces)</li>
                                    <li>UGC campaign setup</li>
                                    <li>Performance tracking</li>
                                    <li>Monthly optimization</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: '#EBF998', padding: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    CREATIVE ACCELERATOR
                                </h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }} className="font-headline">$30K</div>
                                <div style={{ marginBottom: '2rem' }}>Comprehensive creative campaigns</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Multi-platform strategy</li>
                                    <li>Video production included</li>
                                    <li>Influencer collaborations</li>
                                    <li>Experiential campaign</li>
                                    <li>Advanced analytics</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: 'black', color: 'white', padding: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    CREATIVE DOMINATION
                                </h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }} className="font-headline">$75K+</div>
                                <div style={{ marginBottom: '2rem' }}>Full creative transformation</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Dedicated creative team</li>
                                    <li>Custom campaign development</li>
                                    <li>Celebrity collaborations</li>
                                    <li>Multi-city activations</li>
                                    <li>Cultural moment creation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div style={{ background: 'black', padding: '4rem 2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                        READY TO CREATE CULTURAL MOMENTS?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Let's turn your brand into the conversation everyone wants to join.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:creative@curations.org" className="brutal-box" style={{
                            background: 'hsl(var(--accent))', 
                            color: 'white', 
                            padding: '1rem 2rem', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            border: '4px solid hsl(var(--accent))', 
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            START CREATING
                        </a>
                        <a href="#portfolio" className="brutal-box" style={{
                            background: '#EBF998', 
                            color: 'black', 
                            padding: '1rem 2rem', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            border: '4px solid #EBF998',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            VIEW CAMPAIGNS
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreativeCampaignsPage;