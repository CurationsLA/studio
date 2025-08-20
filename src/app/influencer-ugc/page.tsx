
'use client';

import { useState } from 'react';
import DraftNav from '@/components/ui/draft-nav';

const InfluencerUGCPage = () => {
    const [activeTab, setActiveTab] = useState('strategy');
    const [creatorTier, setCreatorTier] = useState('micro');

    const influencerSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Influencer Collaborations & UGC Creator Content",
        "provider": {
            "@type": "Organization",
            "name": "Curations"
        },
        "description": "Strategic influencer partnerships and user-generated content programs that build authentic community and drive measurable results.",
        "serviceType": "Influencer Marketing",
        "areaServed": "Global"
    };

    const creatorTiers = {
        nano: {
            name: 'NANO CREATORS',
            range: '1K-10K',
            engagement: '8-12%',
            cost: '$100-500',
            strength: 'Hyper-local authenticity',
            color: '#EBF998'
        },
        micro: {
            name: 'MICRO INFLUENCERS',
            range: '10K-100K',
            engagement: '5-8%',
            cost: '$500-3K',
            strength: 'Niche authority',
            color: 'hsl(var(--accent))'
        },
        macro: {
            name: 'MACRO INFLUENCERS',
            range: '100K-1M',
            engagement: '2-5%',
            cost: '$3K-25K',
            strength: 'Broad reach',
            color: 'hsl(var(--primary))'
        },
        mega: {
            name: 'MEGA CREATORS',
            range: '1M+',
            engagement: '1-3%',
            cost: '$25K+',
            strength: 'Cultural impact',
            color: '#000000'
        }
    };

    return (
        <>
            <DraftNav />
            <div style={{ background: 'hsl(var(--background))', minHeight: '100vh' }}>
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(influencerSchema) }}
                />
                
                <style jsx global>{`
                    .brutal-box {
                        border: 4px solid black;
                        box-shadow: 8px 8px 0px black;
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
                        color: white;
                        border-color: hsl(var(--primary));
                    }
                    
                    .tab-button:hover:not(.active) {
                        background: hsl(var(--secondary));
                    }
                    
                    .creator-tier-card {
                        background: white;
                        border: 4px solid black;
                        padding: 2rem;
                        text-align: center;
                        transition: all 0.3s ease;
                        cursor: pointer;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .creator-tier-card.active {
                        transform: scale(1.05);
                        box-shadow: 12px 12px 0px black;
                    }
                    
                    .creator-tier-card:hover {
                        transform: translateY(-5px);
                    }
                    
                    .ugc-showcase {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 1rem;
                        margin: 2rem 0;
                    }
                    
                    .ugc-item {
                        background: white;
                        border: 4px solid black;
                        padding: 1.5rem;
                        text-align: center;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    }
                    
                    .ugc-item:hover {
                        background: #EBF998;
                        transform: rotate(2deg);
                    }
                    
                    .collaboration-timeline {
                        position: relative;
                        padding: 2rem 0;
                    }
                    
                    .timeline-line {
                        position: absolute;
                        left: 50%;
                        top: 0;
                        bottom: 0;
                        width: 4px;
                        background: hsl(var(--primary));
                        transform: translateX(-50%);
                    }
                    
                    .timeline-step {
                        display: flex;
                        align-items: center;
                        margin-bottom: 3rem;
                        position: relative;
                    }
                    
                    .timeline-step:nth-child(even) {
                        flex-direction: row-reverse;
                    }
                    
                    .timeline-content {
                        background: white;
                        border: 4px solid black;
                        padding: 2rem;
                        width: 45%;
                        position: relative;
                    }
                    
                    .timeline-marker {
                        background: hsl(var(--primary));
                        color: white;
                        width: 60px;
                        height: 60px;
                        border: 4px solid black;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 800;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 2;
                    }
                    
                    .performance-metric {
                        background: black;
                        color: #EBF998;
                        padding: 1.5rem;
                        text-align: center;
                        border: 2px solid #EBF998;
                        transition: all 0.3s ease;
                    }
                    
                    .performance-metric:hover {
                        background: #EBF998;
                        color: black;
                        transform: scale(1.05);
                    }
                    
                    .creator-network {
                        background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), #EBF998);
                        padding: 3rem;
                        color: white;
                        text-align: center;
                        margin: 2rem 0;
                    }
                    
                    .network-stats {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                        gap: 2rem;
                        margin-top: 2rem;
                    }
                    
                    .network-stat {
                        background: rgba(255,255,255,0.2);
                        padding: 1.5rem;
                        border: 2px solid white;
                        transition: all 0.3s ease;
                    }
                    
                    .network-stat:hover {
                        background: white;
                        color: black;
                    }
                    
                    @media (max-width: 768px) {
                        .timeline-step {
                            flex-direction: column !important;
                        }
                        
                        .timeline-content {
                            width: 90%;
                        }
                        
                        .timeline-line {
                            display: none;
                        }
                    }
                `}</style>

                {/* Hero Section */}
                <div style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)', padding: '4rem 2rem', color: 'white' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤝</div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', textTransform: 'uppercase', marginBottom: '1rem' }} className="font-headline font-bold">
                            INFLUENCER COLLABORATIONS
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            Strategic partnerships with creators who genuinely connect with your audience. We don't just find influencers—we build creator communities that authentically champion your brand.
                        </p>
                    </div>
                </div>

                {/* Performance Metrics */}
                <div style={{ padding: '4rem 2rem', background: 'black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }} className="font-headline font-bold">
                            INFLUENCER CAMPAIGN RESULTS
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            <div className="performance-metric">
                                <div style={{ fontSize: '2.5rem' }} className="font-headline font-bold">50M+</div>
                                <div>Total Reach</div>
                            </div>
                            <div className="performance-metric">
                                <div style={{ fontSize: '2.5rem' }} className="font-headline font-bold">12%</div>
                                <div>Avg Engagement Rate</div>
                            </div>
                            <div className="performance-metric">
                                <div style={{ fontSize: '2.5rem' }} className="font-headline font-bold">500+</div>
                                <div>Creator Partnerships</div>
                            </div>
                            <div className="performance-metric">
                                <div style={{ fontSize: '2.5rem' }} className="font-headline font-bold">890%</div>
                                <div>ROI Increase</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div style={{ padding: '2rem', background: 'hsl(var(--background))', borderBottom: '4px solid black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <button 
                            className={`tab-button ${activeTab === 'strategy' ? 'active' : ''}`}
                            onClick={() => setActiveTab('strategy')}
                        >
                            Strategy & Planning
                        </button>
                        <button 
                            className={`tab-button ${activeTab === 'creators' ? 'active' : ''}`}
                            onClick={() => setActiveTab('creators')}
                        >
                            Creator Network
                        </button>
                        <button 
                            className={`tab-button ${activeTab === 'ugc' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ugc')}
                        >
                            UGC Programs
                        </button>
                        <button 
                            className={`tab-button ${activeTab === 'management' ? 'active' : ''}`}
                            onClick={() => setActiveTab('management')}
                        >
                            Campaign Management
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                    
                    {/* Strategy & Planning Tab */}
                    {activeTab === 'strategy' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                STRATEGIC INFLUENCER PLANNING
                            </h2>
                            
                            <div className="collaboration-timeline">
                                <div className="timeline-line"></div>
                                
                                <div className="timeline-step">
                                    <div className="timeline-content">
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                            AUDIENCE ANALYSIS
                                        </h3>
                                        <p style={{ lineHeight: 1.8 }}>
                                            Deep dive into your target audience's social behavior, preferred platforms, and influencer interaction patterns. 
                                            We identify the creators your audience actually follows and trusts.
                                        </p>
                                    </div>
                                    <div className="timeline-marker">1</div>
                                </div>

                                <div className="timeline-step">
                                    <div className="timeline-content">
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                            CREATOR MATCHING
                                        </h3>
                                        <p style={{ lineHeight: 1.8 }}>
                                            Strategic pairing of your brand with creators whose values, audience, and content style align naturally. 
                                            We prioritize authentic fit over follower count every time.
                                        </p>
                                    </div>
                                    <div className="timeline-marker" style={{ background: 'hsl(var(--accent))' }}>2</div>
                                </div>

                                <div className="timeline-step">
                                    <div className="timeline-content">
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                            CAMPAIGN ARCHITECTURE
                                        </h3>
                                        <p style={{ lineHeight: 1.8 }}>
                                            Design comprehensive campaign frameworks that give creators creative freedom while maintaining brand consistency. 
                                            Clear guidelines that inspire rather than restrict authentic content creation.
                                        </p>
                                    </div>
                                    <div className="timeline-marker" style={{ background: '#EBF998', color: 'black' }}>3</div>
                                </div>

                                <div className="timeline-step">
                                    <div className="timeline-content">
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                            PERFORMANCE OPTIMIZATION
                                        </h3>
                                        <p style={{ lineHeight: 1.8 }}>
                                            Real-time monitoring and optimization based on engagement patterns, audience feedback, and conversion metrics. 
                                            We adapt strategies mid-campaign to maximize impact and ROI.
                                        </p>
                                    </div>
                                    <div className="timeline-marker">4</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Creator Network Tab */}
                    {activeTab === 'creators' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                OUR CREATOR NETWORK
                            </h2>
                            
                            <div className="creator-network brutal-box">
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                    500+ VETTED CREATORS
                                </h3>
                                <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                                    Curated network of authentic creators across all major platforms and verticals. Each creator is personally vetted 
                                    for audience authenticity, engagement quality, and brand safety.
                                </p>
                                
                                <div className="network-stats">
                                    <div className="network-stat">
                                        <div style={{ fontSize: '2rem' }} className="font-headline font-bold">50M+</div>
                                        <div>Combined Reach</div>
                                    </div>
                                    <div className="network-stat">
                                        <div style={{ fontSize: '2rem' }} className="font-headline font-bold">25</div>
                                        <div>Content Verticals</div>
                                    </div>
                                    <div className="network-stat">
                                        <div style={{ fontSize: '2rem' }} className="font-headline font-bold">95%</div>
                                        <div>Brand Safety Score</div>
                                    </div>
                                    <div className="network-stat">
                                        <div style={{ fontSize: '2rem' }} className="font-headline font-bold">12%</div>
                                        <div>Avg Engagement Rate</div>
                                    </div>
                                </div>
                            </div>

                            <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                CREATOR TIER BREAKDOWN
                            </h3>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                                {Object.entries(creatorTiers).map(([key, tier]) => (
                                    <div 
                                        key={key}
                                        className={`creator-tier-card ${creatorTier === key ? 'active' : ''}`}
                                        style={{ borderColor: tier.color }}
                                        onClick={() => setCreatorTier(key)}
                                    >
                                        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', textTransform: 'uppercase', color: tier.color }} className="font-headline font-bold">
                                            {tier.name}
                                        </h4>
                                        <div style={{ marginBottom: '1rem' }}>
                                            <strong>Followers:</strong> {tier.range}
                                        </div>
                                        <div style={{ marginBottom: '1rem' }}>
                                            <strong>Engagement:</strong> {tier.engagement}
                                        </div>
                                        <div style={{ marginBottom: '1rem' }}>
                                            <strong>Investment:</strong> {tier.cost}
                                        </div>
                                        <div style={{ color: tier.color, fontWeight: 700 }}>
                                            {tier.strength}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="brutal-box" style={{ background: 'white', padding: '3rem' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', textTransform: 'uppercase' }} className="font-headline font-bold">
                                    CREATOR VETTING PROCESS
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: '1rem' }} className="font-headline">AUDIENCE AUTHENTICITY</h4>
                                        <p style={{ lineHeight: 1.8 }}>
                                            Comprehensive analysis of follower quality, engagement patterns, and audience demographics 
                                            to ensure genuine influence and reach.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: '1rem' }} className="font-headline">BRAND SAFETY AUDIT</h4>
                                        <p style={{ lineHeight: 1.8 }}>
                                            Thorough review of past content, partnerships, and public statements to ensure 
                                            alignment with brand values and safety standards.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: '1rem' }} className="font-headline">CONTENT QUALITY ASSESSMENT</h4>
                                        <p style={{ lineHeight: 1.8 }}>
                                            Evaluation of creative style, production quality, and storytelling ability to 
                                            ensure professional-grade content creation capabilities.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: '1rem' }} className="font-headline">COLLABORATION HISTORY</h4>
                                        <p style={{ lineHeight: 1.8 }}>
                                            Review of past brand partnerships, professionalism, and campaign performance 
                                            to predict future collaboration success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* UGC Programs Tab */}
                    {activeTab === 'ugc' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                UGC THAT CONVERTS
                            </h2>
                            
                            <div className="brutal-box" style={{ background: '#EBF998', padding: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                    UGC PERFORMANCE STATS
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
                                    <div>
                                        <div style={{ fontSize: '2.5rem' }} className="font-headline font-bold">79%</div>
                                        <div>Higher Purchase Intent</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2.5rem' }} className="font-headline font-bold">5x</div>
                                        <div>More Engagement</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2.5rem' }} className="font-headline font-bold">50%</div>
                                        <div>Lower Cost</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2.5rem' }} className="font-headline font-bold">92%</div>
                                        <div>Trust Score</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                                <div className="brutal-box" style={{ background: 'hsl(var(--primary))', color: 'white', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                        UGC CAMPAIGN STRATEGY
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Hashtag campaign development</li>
                                        <li>• Content challenge design</li>
                                        <li>• Incentive program creation</li>
                                        <li>• Community guidelines setup</li>
                                        <li>• Success metrics definition</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'hsl(var(--accent))', color: 'white', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                        CREATOR RECRUITMENT
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Target creator identification</li>
                                        <li>• Outreach and onboarding</li>
                                        <li>• Brief development and training</li>
                                        <li>• Creative asset provision</li>
                                        <li>• Ongoing support and feedback</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'white', color: 'black', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                        CONTENT MODERATION
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Quality control processes</li>
                                        <li>• Brand safety monitoring</li>
                                        <li>• Rights and usage management</li>
                                        <li>• Content optimization</li>
                                        <li>• Performance tracking</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="ugc-showcase">
                                <div className="ugc-item">
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📱</div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>UNBOXING VIDEOS</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Authentic product reveals that showcase genuine reactions</p>
                                </div>
                                
                                <div className="ugc-item">
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏠</div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>LIFESTYLE INTEGRATION</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Natural product usage in daily routines and environments</p>
                                </div>
                                
                                <div className="ugc-item">
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⭐</div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>TESTIMONIALS</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Genuine customer experiences and satisfaction stories</p>
                                </div>
                                
                                <div className="ugc-item">
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎨</div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>CREATIVE CHALLENGES</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Branded challenges that encourage creative participation</p>
                                </div>
                                
                                <div className="ugc-item">
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>BEFORE/AFTER</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Transformation content that demonstrates product impact</p>
                                </div>
                                
                                <div className="ugc-item">
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>TUTORIALS</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Educational content that adds value while featuring products</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Campaign Management Tab */}
                    {activeTab === 'management' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                CAMPAIGN MANAGEMENT
                            </h2>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                        PROJECT COORDINATION
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Timeline and milestone management</li>
                                        <li>• Creator communication coordination</li>
                                        <li>• Asset delivery and approval</li>
                                        <li>• Quality control and feedback</li>
                                        <li>• Payment processing and contracts</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                        PERFORMANCE TRACKING
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Real-time analytics monitoring</li>
                                        <li>• Engagement rate optimization</li>
                                        <li>• ROI calculation and reporting</li>
                                        <li>• Audience sentiment analysis</li>
                                        <li>• Competitive performance benchmarking</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚖️</div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                        LEGAL & COMPLIANCE
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• FTC disclosure compliance</li>
                                        <li>• Contract negotiation and management</li>
                                        <li>• Rights and usage agreements</li>
                                        <li>• Platform policy adherence</li>
                                        <li>• Crisis management protocols</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔄</div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                        RELATIONSHIP MANAGEMENT
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Long-term creator partnerships</li>
                                        <li>• Performance feedback and coaching</li>
                                        <li>• Exclusive collaboration opportunities</li>
                                        <li>• Creator community building</li>
                                        <li>• Brand ambassador programs</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="brutal-box" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', color: 'white', padding: '3rem' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', textTransform: 'uppercase' }} className="font-headline font-bold">
                                    CAMPAIGN SUCCESS FRAMEWORK
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>REACH METRICS</h4>
                                        <p>Impressions, unique reach, brand awareness lift, share of voice</p>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>ENGAGEMENT METRICS</h4>
                                        <p>Likes, comments, shares, saves, engagement rate, sentiment</p>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>CONVERSION METRICS</h4>
                                        <p>Click-through rate, conversions, sales attribution, ROAS</p>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>BRAND METRICS</h4>
                                        <p>Brand lift, purchase intent, brand association, recall</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Investment Packages */}
                <div style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }} className="font-headline font-bold">
                            INFLUENCER INVESTMENT PACKAGES
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div className="brutal-box" style={{ background: 'white', padding: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                    MICRO COLLECTIVE
                                </h3>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }} className="font-headline font-bold">$15K</div>
                                <div style={{ marginBottom: '2rem' }}>5-10 micro influencers</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Strategy development</li>
                                    <li>Creator sourcing and vetting</li>
                                    <li>Campaign management</li>
                                    <li>Content approval process</li>
                                    <li>Performance reporting</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: '#EBF998', padding: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                    CREATOR AMPLIFICATION
                                </h3>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }} className="font-headline font-bold">$45K</div>
                                <div style={{ marginBottom: '2rem' }}>Multi-tier creator program</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>20+ creator partnerships</li>
                                    <li>UGC program development</li>
                                    <li>Content amplification strategy</li>
                                    <li>Advanced analytics and optimization</li>
                                    <li>Long-term relationship building</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: 'black', color: 'white', padding: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                                    CULTURAL TAKEOVER
                                </h3>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }} className="font-headline font-bold">$100K+</div>
                                <div style={{ marginBottom: '2rem' }}>Full ecosystem activation</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Celebrity and mega influencer partnerships</li>
                                    <li>Cross-platform campaign coordination</li>
                                    <li>Event activations and experiences</li>
                                    <li>Custom content production</li>
                                    <li>Cultural moment creation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div style={{ background: 'black', padding: '4rem 2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline font-bold">
                        READY TO BUILD YOUR CREATOR COMMUNITY?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Let's connect your brand with creators who genuinely love what you do.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:influencers@curations.org" className="brutal-box" style={{
                            background: 'hsl(var(--primary))', 
                            color: 'white', 
                            padding: '1rem 2rem', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            border: '4px solid hsl(var(--primary))', 
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            START COLLABORATING
                        </a>
                        <a href="#creator-network" className="brutal-box" style={{
                            background: '#EBF998', 
                            color: 'black', 
                            padding: '1rem 2rem', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            border: '4px solid #EBF998',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            VIEW CREATORS
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfluencerUGCPage;
