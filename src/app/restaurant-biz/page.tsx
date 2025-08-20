
'use client';
import { useState } from 'react';
import DraftNav from '@/components/ui/draft-nav';

const RestaurantBizPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Restaurant & Business Marketing",
        "provider": {
            "@type": "Organization",
            "name": "Curations"
        },
        "description": "Comprehensive marketing solutions for restaurants and businesses including grand openings, menu marketing, delivery optimization, and cultural integration.",
        "serviceType": "Marketing Services",
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Restaurant Marketing Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Grand Opening Events",
                        "description": "Strategic launch events that create cultural buzz and lasting impressions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Menu Marketing Magic",
                        "description": "Data-driven menu optimization and promotional strategies"
                    }
                }
            ]
        }
    };

    return (
        <>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", background: '#FDFDFC', minHeight: '100vh' }}>
                 <DraftNav />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                        margin-right: 1rem;
                        margin-bottom: 1rem;
                    }
                    
                    .tab-button.active {
                        background: #FF5BF1;
                        color: white;
                    }
                    
                    .tab-button:hover {
                        background: #6370E7;
                        color: white;
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
                    
                    .step-number {
                        background: #FF5BF1;
                        color: white;
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 800;
                        font-size: 1.5rem;
                        margin-right: 1.5rem;
                        border: 4px solid black;
                    }
                    
                    .case-study-card {
                        transition: all 0.3s ease;
                        cursor: pointer;
                    }
                    
                    .case-study-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 12px 12px 0px black;
                    }
                    
                    .pricing-tier {
                        background: white;
                        border: 4px solid black;
                        padding: 2rem;
                        text-align: center;
                        transition: all 0.3s ease;
                    }
                    
                    .pricing-tier:hover {
                        background: #EBF998;
                        transform: scale(1.05);
                    }
                    
                    .pricing-tier.featured {
                        background: #FF5BF1;
                        color: white;
                        transform: scale(1.1);
                    }
                    
                    .roi-metric {
                        background: #EBF998;
                        border: 2px solid black;
                        padding: 1rem;
                        margin: 0.5rem;
                        display: inline-block;
                        font-weight: 700;
                    }
                `}</style>

                {/* Hero Section */}
                <div style={{ background: 'linear-gradient(135deg, #FF5BF1 0%, #6370E7 100%)', padding: '4rem 2rem', color: 'white' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🍽️</div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>
                            RESTAURANT & BIZ
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            From grand openings that become cultural moments to delivery optimization that drives revenue, 
                            we turn restaurants into community cornerstones and businesses into cultural forces.
                        </p>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div style={{ padding: '2rem', background: 'white', borderBottom: '4px solid black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <button 
                            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            Overview
                        </button>
                        <button 
                            className={`tab-button ${activeTab === 'services' ? 'active' : ''}`}
                            onClick={() => setActiveTab('services')}
                        >
                            Services
                        </button>
                        <button 
                            className={`tab-button ${activeTab === 'process' ? 'active' : ''}`}
                            onClick={() => setActiveTab('process')}
                        >
                            Process
                        </button>
                        <button 
                            className={`tab-button ${activeTab === 'results' ? 'active' : ''}`}
                            onClick={() => setActiveTab('results')}
                        >
                            Results
                        </button>
                        <button 
                            className={`tab-button ${activeTab === 'pricing' ? 'active' : ''}`}
                            onClick={() => setActiveTab('pricing')}
                        >
                            Investment
                        </button>
                    </div>
                </div>

                {/* Content Sections */}
                <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                    
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                                <div className="brutal-box" style={{ background: '#EBF998', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                        THE CHALLENGE
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        In a saturated market, restaurants and businesses need more than good food or services—they need cultural relevance. 
                                        Traditional marketing creates noise; we create movements.
                                    </p>
                                </div>
                                
                                <div className="brutal-box" style={{ background: '#FF5BF1', color: 'white', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                        OUR APPROACH
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        We combine data-driven insights with street-level cultural intelligence. Every campaign is built to create authentic connections 
                                        that turn customers into community members.
                                    </p>
                                </div>
                                
                                <div className="brutal-box" style={{ background: '#6370E7', color: 'white', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                        THE RESULT
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Brands that don't just survive but thrive. Our clients see average revenue increases of 300%+ within 6 months, 
                                        with lasting cultural impact that extends far beyond their immediate market.
                                    </p>
                                </div>
                            </div>

                            {/* ROI Metrics */}
                            <div className="brutal-box" style={{ background: 'white', padding: '3rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase' }}>
                                    PROVEN RESULTS
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                                    <div className="roi-metric">
                                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>300%+</div>
                                        <div>Revenue Increase</div>
                                    </div>
                                    <div className="roi-metric">
                                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>85%</div>
                                        <div>Customer Retention</div>
                                    </div>
                                    <div className="roi-metric">
                                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>500%</div>
                                        <div>Social Engagement</div>
                                    </div>
                                    <div className="roi-metric">
                                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>30</div>
                                        <div>Days to ROI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Services Tab */}
                    {activeTab === 'services' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                            <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    GRAND OPENINGS & EVENTS
                                </h3>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>• Cultural moment creation</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Influencer & media orchestration</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Community integration strategies</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Post-launch momentum campaigns</li>
                                    <li>• Long-term brand positioning</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    MENU MARKETING MAGIC
                                </h3>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>• Psychological pricing optimization</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Seasonal campaign development</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Limited-time offer strategies</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Cross-platform promotion</li>
                                    <li>• Performance tracking & iteration</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    THIRD-PARTY APP STRATEGY
                                </h3>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>• DoorDash/Uber optimization</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Platform-specific promotions</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Review management systems</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Commission cost reduction</li>
                                    <li>• Direct ordering channel development</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚚</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    DELIVERY OPTIMIZATION
                                </h3>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>• Route efficiency analysis</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Peak hour demand forecasting</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Customer experience mapping</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Technology integration</li>
                                    <li>• Sustainability initiatives</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Process Tab */}
                    {activeTab === 'process' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }}>
                                OUR PROVEN PROCESS
                            </h2>
                            
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        CULTURAL AUDIT
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Deep dive into your brand's current cultural position, competitive landscape, and untapped opportunities. 
                                        We analyze everything from local community dynamics to social media sentiment.
                                    </p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number" style={{ background: '#6370E7' }}>2</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        STRATEGY DEVELOPMENT
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Create a comprehensive roadmap that aligns with your business goals while authentically connecting with your community. 
                                        Every strategy is custom-built, never templated.
                                    </p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number" style={{ background: '#EBF998', color: 'black' }}>3</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        EXECUTION & LAUNCH
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Roll out campaigns with precision timing and cultural sensitivity. We handle everything from content creation 
                                        to community outreach, ensuring seamless execution across all channels.
                                    </p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number" style={{ background: '#FF5BF1' }}>4</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        OPTIMIZATION & SCALE
                                    </h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Continuous monitoring and refinement based on real-time data and community feedback. 
                                        We scale what works and pivot what doesn't, always staying ahead of cultural shifts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Results Tab */}
                    {activeTab === 'results' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }}>
                                SUCCESS STORIES
                            </h2>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                                <div className="brutal-box case-study-card" style={{ background: '#FF5BF1', color: 'white', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                                        TACO TRUCK → CULTURAL ICON
                                    </h3>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>400%</div>
                                        <div>Revenue increase in 3 months</div>
                                    </div>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Transformed a local taco truck into LA's most talked-about food destination through strategic social campaigns 
                                        and community partnerships. Now featured on Netflix and has a permanent brick-and-mortar location.
                                    </p>
                                </div>

                                <div className="brutal-box case-study-card" style={{ background: '#6370E7', color: 'white', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                                        COFFEE SHOP COMEBACK
                                    </h3>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>250%</div>
                                        <div>Customer retention boost</div>
                                    </div>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Revitalized a struggling coffee shop by repositioning it as a creative hub for local artists and remote workers. 
                                        Created a subscription model that generated 60% recurring revenue within 6 months.
                                    </p>
                                </div>

                                <div className="brutal-box case-study-card" style={{ background: '#EBF998', color: 'black', padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                                        RESTAURANT CHAIN EXPANSION
                                    </h3>
                                    <div style={{ background: 'black', color: '#EBF998', padding: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>15</div>
                                        <div>New locations in 12 months</div>
                                    </div>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Helped a regional restaurant chain expand nationally by creating location-specific cultural campaigns 
                                        that honored local communities while maintaining brand consistency. Each new location achieved profitability within 60 days.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pricing Tab */}
                    {activeTab === 'pricing' && (
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }}>
                                INVESTMENT TIERS
                            </h2>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                <div className="pricing-tier">
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                        STARTER
                                    </h3>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>$5K</div>
                                    <div style={{ marginBottom: '2rem' }}>Perfect for single location restaurants</div>
                                    <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                        <li>Grand opening strategy</li>
                                        <li>3-month campaign execution</li>
                                        <li>Social media setup</li>
                                        <li>Basic analytics</li>
                                    </ul>
                                </div>

                                <div className="pricing-tier featured">
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                        GROWTH
                                    </h3>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>$15K</div>
                                    <div style={{ marginBottom: '2rem' }}>Most popular for expanding businesses</div>
                                    <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                        <li>6-month comprehensive strategy</li>
                                        <li>Multi-platform campaigns</li>
                                        <li>Influencer partnerships</li>
                                        <li>Advanced analytics & optimization</li>
                                        <li>Monthly strategy sessions</li>
                                    </ul>
                                </div>

                                <div className="pricing-tier">
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                        ENTERPRISE
                                    </h3>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>$50K+</div>
                                    <div style={{ marginBottom: '2rem' }}>For chains and major expansion</div>
                                    <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                        <li>12+ month partnerships</li>
                                        <li>Multi-location coordination</li>
                                        <li>Custom technology integration</li>
                                        <li>Dedicated account team</li>
                                        <li>Quarterly business reviews</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="brutal-box" style={{ background: 'black', color: 'white', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    100% ROI GUARANTEE
                                </h3>
                                <p style={{ lineHeight: 1.8 }}>
                                    If you don't see a positive return on investment within 90 days, we'll work for free until you do. 
                                    That's how confident we are in our process.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* CTA Section */}
                <div style={{ background: 'linear-gradient(135deg, #FF5BF1 0%, #6370E7 100%)', padding: '4rem 2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>
                        READY TO BECOME A CULTURAL FORCE?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Let's turn your restaurant or business into the place everyone talks about.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:curate@curations.org" className="brutal-box" style={{
                            background: 'white', 
                            color: '#FF5BF1', 
                            padding: '1rem 2rem', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            border: '4px solid black', 
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            START YOUR CURATION
                        </a>
                        <a href="tel:+1-555-CURATE" className="brutal-box" style={{
                            background: '#EBF998', 
                            color: 'black', 
                            padding: '1rem 2rem', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            border: '4px solid black',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            CALL US NOW
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantBizPage;

    