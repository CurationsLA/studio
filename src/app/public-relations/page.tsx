
'use client';

import { useState } from 'react';
import DraftNav from '@/components/ui/draft-nav';

const PublicRelationsPage = () => {
    const [activeService, setActiveService] = useState('corporate');
    const [selectedMetric, setSelectedMetric] = useState(null);

    const prSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Public Relations & Communications",
        "provider": {
            "@type": "Organization",
            "name": "Curations"
        },
        "description": "Strategic public relations, corporate communications, executive branding, and reputation management services.",
        "serviceType": "Public Relations",
        "areaServed": "Global"
    };

    const prMetrics = [
        { metric: '10M+', label: 'Media Impressions Generated', color: 'hsl(var(--primary))' },
        { metric: '95%', label: 'Positive Sentiment Score', color: 'hsl(var(--accent))' },
        { metric: '200+', label: 'Media Placements Secured', color: '#EBF998' },
        { metric: '48hrs', label: 'Average Crisis Response Time', color: 'hsl(var(--primary))' }
    ];

    const mediaOutlets = [
        { name: 'TechCrunch', type: 'Digital', tier: 'Tier 1' },
        { name: 'The Wall Street Journal', type: 'Print/Digital', tier: 'Tier 1' },
        { name: 'Forbes', type: 'Business', tier: 'Tier 1' },
        { name: 'Los Angeles Times', type: 'Regional', tier: 'Tier 2' },
        { name: 'Eater LA', type: 'Industry', tier: 'Tier 2' },
        { name: 'Built In LA', type: 'Tech', tier: 'Tier 2' },
        { name: 'Variety', type: 'Entertainment', tier: 'Tier 1' },
        { name: 'Ad Age', type: 'Marketing', tier: 'Tier 1' }
    ];

    return (
        <>
             <DraftNav />
            <div style={{ background: 'hsl(var(--background))', minHeight: '100vh' }}>
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(prSchema) }}
                />
                
                <style jsx global>{`
                    .brutal-box {
                        border: 4px solid black;
                        box-shadow: 8px 8px 0px black;
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
                        transform: translateY(-3px);
                    }
                    
                    .service-tab:hover {
                        background: hsl(var(--accent));
                        color: hsl(var(--accent-foreground));
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
                        box-shadow: 12px 12px 0px black;
                    }
                    
                    .media-badge {
                        background: white;
                        border: 2px solid black;
                        padding: 0.5rem 1rem;
                        margin: 0.25rem;
                        display: inline-block;
                        font-size: 0.75rem;
                        font-weight: 700;
                        transition: all 0.3s ease;
                    }
                    
                    .media-badge:hover {
                        background: #EBF998;
                        transform: scale(1.1);
                    }
                    
                    .tier-1 { border-color: hsl(var(--primary)); }
                    .tier-2 { border-color: hsl(var(--accent)); }
                    
                    .crisis-simulator {
                        background: linear-gradient(45deg, #FF0000, hsl(var(--primary)));
                        color: white;
                        padding: 2rem;
                        margin: 2rem 0;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .crisis-simulator::before {
                        content: '⚠️ CRISIS ALERT ⚠️';
                        position: absolute;
                        top: 10px;
                        left: -100%;
                        width: 100%;
                        text-align: center;
                        font-weight: 800;
                        animation: scroll-alert 3s linear infinite;
                    }
                    
                    @keyframes scroll-alert {
                        0% { left: -100%; }
                        100% { left: 100%; }
                    }
                    
                    .pr-timeline {
                        position: relative;
                        padding-left: 2rem;
                    }
                    
                    .pr-timeline::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        width: 4px;
                        background: hsl(var(--primary));
                    }
                    
                    .timeline-item {
                        position: relative;
                        margin-bottom: 2rem;
                        padding-left: 2rem;
                    }
                    
                    .timeline-item::before {
                        content: '';
                        position: absolute;
                        left: -10px;
                        top: 0;
                        width: 20px;
                        height: 20px;
                        background: hsl(var(--primary));
                        border: 4px solid black;
                        border-radius: 50%;
                    }
                    
                    .executive-profile {
                        background: linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)));
                        color: white;
                        padding: 2rem;
                        margin: 1rem 0;
                        transform: skew(-2deg);
                        transition: all 0.3s ease;
                    }
                    
                    .executive-profile:hover {
                        transform: skew(0deg);
                    }
                `}</style>

                {/* Hero Section */}
                <div style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)', padding: '4rem 2rem', color: 'white' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📰</div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }} className="font-headline">
                            PUBLIC RELATIONS
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            Strategic communications that build reputations, manage crises, and position leaders as industry voices. 
                            We don't just manage your story—we help you become the story worth telling.
                        </p>
                    </div>
                </div>

                {/* Key Metrics */}
                <div style={{ padding: '4rem 2rem', background: 'black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }} className="font-headline">
                            PR PERFORMANCE METRICS
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {prMetrics.map((item, index) => (
                                <div 
                                    key={index}
                                    className="metric-card"
                                    style={{ background: item.color === '#EBF998' ? '#EBF998' : item.color, color: item.color === '#EBF998' ? 'black' : 'white' }}
                                    onClick={() => setSelectedMetric(item)}
                                >
                                    <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }} className="font-headline">
                                        {item.metric}
                                    </div>
                                    <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Service Tabs */}
                <div style={{ padding: '2rem', background: 'hsl(var(--background))', borderBottom: '4px solid black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <button 
                            className={`service-tab ${activeService === 'corporate' ? 'active' : ''}`}
                            onClick={() => setActiveService('corporate')}
                        >
                            Corporate Communications
                        </button>
                        <button 
                            className={`service-tab ${activeService === 'executive' ? 'active' : ''}`}
                            onClick={() => setActiveService('executive')}
                        >
                            Executive Branding
                        </button>
                        <button 
                            className={`service-tab ${activeService === 'crisis' ? 'active' : ''}`}
                            onClick={() => setActiveService('crisis')}
                        >
                            Crisis Management
                        </button>
                        <button 
                            className={`service-tab ${activeService === 'media' ? 'active' : ''}`}
                            onClick={() => setActiveService('media')}
                        >
                            Media Relations
                        </button>
                        <button 
                            className={`service-tab ${activeService === 'newsletter' ? 'active' : ''}`}
                            onClick={() => setActiveService('newsletter')}
                        >
                            Newsletter Design
                        </button>
                    </div>
                </div>

                {/* Service Content */}
                <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                    
                    {/* Corporate Communications */}
                    {activeService === 'corporate' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                                CORPORATE COMMUNICATIONS
                            </h2>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                                <div className="brutal-box" style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        STRATEGIC MESSAGING
                                    </h3>
                                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                                        Develop core messaging frameworks that resonate across all stakeholder groups while maintaining authenticity and clarity.
                                    </p>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Brand voice development</li>
                                        <li>• Key message architecture</li>
                                        <li>• Stakeholder communication plans</li>
                                        <li>• Internal communication strategy</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        THOUGHT LEADERSHIP
                                    </h3>
                                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                                        Position your company and executives as industry authorities through strategic content and speaking opportunities.
                                    </p>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Industry report creation</li>
                                        <li>• Speaking engagement strategy</li>
                                        <li>• Expert commentary placement</li>
                                        <li>• Trend analysis and prediction</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: '#EBF998', color: 'black', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        INVESTOR RELATIONS
                                    </h3>
                                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                                        Transparent, compelling communications that build investor confidence and support funding objectives.
                                    </p>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Earnings call preparation</li>
                                        <li>• Investor deck development</li>
                                        <li>• Annual report design</li>
                                        <li>• Shareholder communication</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="brutal-box" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', color: 'white', padding: '3rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                                    CORPORATE COMMUNICATION AUDIT
                                </h3>
                                <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                                    Complete analysis of your current communication ecosystem with actionable recommendations for improvement.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', border: '2px solid white' }}>
                                        <strong>Message Consistency</strong>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', border: '2px solid white' }}>
                                        <strong>Channel Effectiveness</strong>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', border: '2px solid white' }}>
                                        <strong>Stakeholder Sentiment</strong>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', border: '2px solid white' }}>
                                        <strong>Competitive Positioning</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Executive Branding */}
                    {activeService === 'executive' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                                EXECUTIVE BRANDING
                            </h2>
                            
                            <div className="executive-profile brutal-box">
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    TRANSFORM LEADERS INTO INDUSTRY VOICES
                                </h3>
                                <p style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
                                    Strategic personal branding that positions executives as thought leaders while maintaining authentic connection to company values.
                                </p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        PERSONAL BRAND STRATEGY
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Brand archetype definition</li>
                                        <li>• Unique value proposition</li>
                                        <li>• Content pillar development</li>
                                        <li>• Voice and tone guidelines</li>
                                        <li>• Visual identity creation</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        DIGITAL PRESENCE
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• LinkedIn optimization</li>
                                        <li>• Twitter/X strategy</li>
                                        <li>• Instagram professional presence</li>
                                        <li>• TikTok for executives</li>
                                        <li>• Personal website development</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎤</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        SPEAKING & MEDIA
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Conference speaking strategy</li>
                                        <li>• Media training sessions</li>
                                        <li>• Podcast appearance coaching</li>
                                        <li>• Panel discussion preparation</li>
                                        <li>• Award nomination campaigns</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✍️</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        CONTENT CREATION
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Ghostwritten articles</li>
                                        <li>• Industry commentary</li>
                                        <li>• Newsletter content</li>
                                        <li>• Video script development</li>
                                        <li>• Book planning and writing</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="pr-timeline" style={{ marginTop: '3rem' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                                    90-DAY EXECUTIVE BRAND LAUNCH
                                </h3>
                                
                                <div className="timeline-item">
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Days 1-30: Foundation</h4>
                                    <p>Brand strategy development, visual identity creation, platform optimization, initial content calendar.</p>
                                </div>
                                
                                <div className="timeline-item">
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Days 31-60: Activation</h4>
                                    <p>Content publishing, speaking opportunity pursuit, media relationship building, industry engagement.</p>
                                </div>
                                
                                <div className="timeline-item">
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Days 61-90: Amplification</h4>
                                    <p>Thought leadership pieces, major speaking engagements, media interviews, industry recognition pursuit.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Crisis Management */}
                    {activeService === 'crisis' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                                CRISIS MANAGEMENT
                            </h2>
                            
                            <div className="crisis-simulator brutal-box">
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', textTransform: 'uppercase' }} className="font-headline">
                                    CRISIS RESPONSE PROTOCOL
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', textAlign: 'center', border: '2px solid white' }}>
                                        <strong>0-1 HR</strong><br />Assessment & Team Assembly
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', textAlign: 'center', border: '2px solid white' }}>
                                        <strong>1-4 HRS</strong><br />Initial Response & Containment
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', textAlign: 'center', border: '2px solid white' }}>
                                        <strong>4-24 HRS</strong><br />Strategic Communication
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', textAlign: 'center', border: '2px solid white' }}>
                                        <strong>1-7 DAYS</strong><br />Recovery & Reputation Repair
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                                <div className="brutal-box" style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        CRISIS PREVENTION
                                    </h3>
                                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                                        Proactive strategies to identify and mitigate potential reputation risks before they become crises.
                                    </p>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Risk assessment audits</li>
                                        <li>• Social media monitoring</li>
                                        <li>• Stakeholder sentiment tracking</li>
                                        <li>• Crisis simulation exercises</li>
                                        <li>• Response plan development</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        CRISIS RESPONSE
                                    </h3>
                                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                                        Immediate, strategic response to minimize damage and begin the path to reputation recovery.
                                    </p>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• 24/7 crisis hotline</li>
                                        <li>• Rapid response team activation</li>
                                        <li>• Media statement development</li>
                                        <li>• Stakeholder communication</li>
                                        <li>• Social media management</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: '#EBF998', color: 'black', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        REPUTATION RECOVERY
                                    </h3>
                                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                                        Long-term strategies to rebuild trust and restore positive brand perception post-crisis.
                                    </p>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Reputation rehabilitation strategy</li>
                                        <li>• Positive content campaigns</li>
                                        <li>• Community rebuilding initiatives</li>
                                        <li>• Ongoing monitoring and adjustment</li>
                                        <li>• Preventive measure implementation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Media Relations */}
                    {activeService === 'media' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                                MEDIA RELATIONS
                            </h2>
                            
                            <div className="brutal-box" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', color: 'white', padding: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                                    OUR MEDIA NETWORK
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                                    {mediaOutlets.map((outlet, index) => (
                                        <div 
                                            key={index}
                                            className={`media-badge ${outlet.tier === 'Tier 1' ? 'tier-1' : 'tier-2'}`}
                                            style={{ background: 'white', color: 'black' }}
                                        >
                                            {outlet.name}
                                        </div>
                                    ))}
                                </div>
                                <p style={{ marginTop: '2rem', fontSize: '1.125rem' }}>
                                    Direct relationships with 200+ journalists across tech, business, lifestyle, and industry verticals.
                                </p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📧</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        MEDIA OUTREACH
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Press release distribution</li>
                                        <li>• Journalist relationship management</li>
                                        <li>• Story pitch development</li>
                                        <li>• Exclusive interview coordination</li>
                                        <li>• Follow-up and relationship nurturing</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        MEDIA MONITORING
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Real-time mention tracking</li>
                                        <li>• Sentiment analysis</li>
                                        <li>• Competitive media analysis</li>
                                        <li>• Share of voice measurement</li>
                                        <li>• Crisis early warning system</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎥</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        MEDIA TRAINING
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Interview preparation sessions</li>
                                        <li>• Message development workshops</li>
                                        <li>• Crisis communication training</li>
                                        <li>• On-camera presentation coaching</li>
                                        <li>• Q&A strategy development</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📈</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        MEDIA ANALYTICS
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Coverage impact measurement</li>
                                        <li>• Reach and frequency analysis</li>
                                        <li>• Message pull-through tracking</li>
                                        <li>• ROI calculation and reporting</li>
                                        <li>• Competitive benchmarking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Newsletter Design */}
                    {activeService === 'newsletter' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                                NEWSLETTER DESIGN & STRATEGY
                            </h2>
                            
                            <div className="brutal-box" style={{ background: '#EBF998', color: 'black', padding: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                                    NEWSLETTER SUCCESS METRICS
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
                                    <div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>67%</div>
                                        <div>Average Open Rate</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>23%</div>
                                        <div>Click-Through Rate</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>89%</div>
                                        <div>Subscriber Retention</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>340%</div>
                                        <div>Revenue Attribution</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                <div className="brutal-box" style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        STRATEGIC PLANNING
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Content strategy development</li>
                                        <li>• Editorial calendar creation</li>
                                        <li>• Audience segmentation</li>
                                        <li>• Engagement optimization</li>
                                        <li>• Growth strategy planning</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        DESIGN & BRANDING
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Visual template design</li>
                                        <li>• Brand consistency guidelines</li>
                                        <li>• Mobile optimization</li>
                                        <li>• Accessibility compliance</li>
                                        <li>• A/B testing frameworks</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'white', color: 'black', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        CONTENT CREATION
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Editorial writing and curation</li>
                                        <li>• Subject line optimization</li>
                                        <li>• Call-to-action development</li>
                                        <li>• Personalization strategies</li>
                                        <li>• Interactive element integration</li>
                                    </ul>
                                </div>

                                <div className="brutal-box" style={{ background: 'black', color: '#EBF998', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                        ANALYTICS & OPTIMIZATION
                                    </h3>
                                    <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                        <li>• Performance tracking and reporting</li>
                                        <li>• Subscriber behavior analysis</li>
                                        <li>• Revenue attribution modeling</li>
                                        <li>• Deliverability optimization</li>
                                        <li>• Continuous improvement process</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="brutal-box" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', color: 'white', padding: '3rem', marginTop: '3rem' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', textTransform: 'uppercase' }} className="font-headline">
                                    CURATIONSLA: CASE STUDY
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>THE CHALLENGE</h4>
                                        <p style={{ lineHeight: 1.8 }}>
                                            Create a newsletter that captures the pulse of Los Angeles culture while driving business value for local brands.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>THE STRATEGY</h4>
                                        <p style={{ lineHeight: 1.8 }}>
                                            Hyper-local content curation with brutal design aesthetic, focusing on authentic cultural moments over promotional content.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>THE RESULTS</h4>
                                        <p style={{ lineHeight: 1.8 }}>
                                            15,000+ engaged subscribers, 67% open rate, and direct partnership inquiries from featured businesses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Investment Packages */}
                <div style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }} className="font-headline">
                            PR INVESTMENT PACKAGES
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div className="brutal-box" style={{ background: 'white', padding: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    FOUNDATION
                                </h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }} className="font-headline">$12K</div>
                                <div style={{ marginBottom: '2rem' }}>Essential PR services</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Media relations setup</li>
                                    <li>Press release distribution</li>
                                    <li>Basic crisis management</li>
                                    <li>Monthly media monitoring</li>
                                    <li>Quarterly strategy review</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: '#EBF998', padding: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    AMPLIFICATION
                                </h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }} className="font-headline">$35K</div>
                                <div style={{ marginBottom: '2rem' }}>Comprehensive PR strategy</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Full-service media relations</li>
                                    <li>Executive branding program</li>
                                    <li>Crisis management retainer</li>
                                    <li>Thought leadership development</li>
                                    <li>Newsletter design and strategy</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: 'black', color: 'hsl(var(--primary-foreground))', padding: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    DOMINATION
                                </h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }} className="font-headline">$75K+</div>
                                <div style={{ marginBottom: '2rem' }}>Enterprise PR solutions</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Dedicated PR team</li>
                                    <li>24/7 crisis support</li>
                                    <li>Global media relations</li>
                                    <li>Custom research and reporting</li>
                                    <li>Integrated marketing campaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div style={{ background: 'black', padding: '4rem 2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                        READY TO CONTROL YOUR NARRATIVE?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Let's build the reputation your brand deserves and the communications strategy that sustains it.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:pr@curations.org" className="brutal-box" style={{
                            background: 'hsl(var(--primary))', 
                            color: 'hsl(var(--primary-foreground))', 
                            padding: '1rem 2rem', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            border: '4px solid hsl(var(--primary))', 
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            START PR STRATEGY
                        </a>
                        <a href="tel:+1-555-CURATE" className="brutal-box" style={{
                            background: 'white', 
                            color: 'black', 
                            padding: '1rem 2rem', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            border: '4px solid white',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            CRISIS HOTLINE
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PublicRelationsPage;
