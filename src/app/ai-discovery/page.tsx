
'use client';

import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';

const AIDiscoveryPage = () => {
    const [activeDemo, setActiveDemo] = useState('prompt');
    const [aiResponse, setAiResponse] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const typeText = (text: string, callback?: () => void) => {
        setIsTyping(true);
        setAiResponse('');
        let i = 0;
        const speed = 30;
        
        const typeWriter = () => {
            if (i < text.length) {
                setAiResponse(prev => prev + text.charAt(i));
                i++;
                setTimeout(typeWriter, speed);
            } else {
                setIsTyping(false);
                if (callback) callback();
            }
        };
        typeWriter();
    };

    const demoPrompts: {[key: string]: {input: string; output: string}} = {
        prompt: {
            input: "Create a viral social media campaign for a new vegan restaurant in Silver Lake",
            output: "🌱 CAMPAIGN: 'Plant-Based Pioneer'\n\n✨ STRATEGY:\n• Partner with local artists for murals featuring plant ingredients\n• Host 'Vegan Skeptic Challenge' - convert meat lovers\n• Create TikTok series: 'Guess the Secret Ingredient'\n• Launch #PlantPowerSilverLake hashtag\n\n📈 PROJECTED REACH: 500K+ impressions\n💰 ESTIMATED ROI: 400% in 3 months"
        },
        seo: {
            input: "Optimize for 'best AI marketing agency Los Angeles'",
            output: "🎯 SEO OPTIMIZATION COMPLETE\n\n🔍 TARGET: 'best AI marketing agency Los Angeles'\n📊 COMPETITION: Medium-High\n🎯 STRATEGY:\n\n1. Content Clusters:\n   • 'AI Marketing Revolution in LA'\n   • 'Case Studies: AI Success Stories'\n   • 'Future of Marketing with AI'\n\n2. Technical SEO:\n   • Schema markup implementation\n   • Core Web Vitals optimization\n   • Local business markup\n\n📈 PROJECTED RANKING: Top 3 in 90 days"
        },
        tech: {
            input: "Recommend AI tools for content creation automation",
            output: "🤖 AI TECH STACK RECOMMENDATION\n\n📝 CONTENT CREATION:\n• GPT-4 for copywriting\n• Midjourney for visual assets\n• Runway for video generation\n• ElevenLabs for voiceovers\n\n🔄 AUTOMATION:\n• Zapier for workflow integration\n• Buffer for social scheduling\n• HubSpot for lead nurturing\n\n💡 CUSTOM SOLUTIONS:\n• Brand voice training models\n• Automated A/B testing\n• Predictive content performance"
        }
    };

    useEffect(() => {
        if (activeDemo && demoPrompts[activeDemo]) {
            typeText(demoPrompts[activeDemo].output);
        }
    }, [activeDemo]);

    const aiDiscoverySchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Discovery Services",
        "provider": {
            "@type": "Organization",
            "name": "Curations"
        },
        "description": "Advanced AI integration services including prompt engineering, SEO optimization, tech stack discovery, and team workshops for the AI-powered future.",
        "serviceType": "AI Consulting",
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Discovery Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI Prompt Engineering",
                        "description": "Custom AI prompt development for optimal business outcomes"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI SEO & Citations",
                        "description": "Search optimization for the AI-discovery era"
                    }
                }
            ]
        }
    };

    return (
        <>
            <DraftNav />
            <div style={{ background: 'hsl(var(--background))', minHeight: '100vh' }}>
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(aiDiscoverySchema) }}
                />
                
                <style jsx global>{`
                    .brutal-box {
                        border: 4px solid black;
                        box-shadow: 8px 8px 0px black;
                    }
                    
                    .ai-terminal {
                        background: #000;
                        color: hsl(var(--accent-foreground));
                        font-family: 'JetBrains Mono', monospace;
                        padding: 1.5rem;
                        border: 4px solid hsl(var(--accent));
                        box-shadow: 0 0 20px hsla(var(--accent), 0.3);
                        min-height: 200px;
                        overflow: hidden;
                    }
                    
                    .ai-cursor {
                        display: inline-block;
                        background: hsl(var(--accent));
                        animation: blink 1s infinite;
                        width: 10px;
                        height: 20px;
                        margin-left: 5px;
                    }
                    
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                    
                    .demo-button {
                        background: white;
                        border: 4px solid black;
                        padding: 1rem 1.5rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        margin: 0.5rem;
                    }
                    
                    .demo-button.active {
                        background: hsl(var(--accent));
                        color: hsl(var(--accent-foreground));
                    }
                    
                    .demo-button:hover {
                        background: hsl(var(--primary));
                        color: hsl(var(--primary-foreground));
                        transform: translateY(-2px);
                    }
                    
                    .ai-feature-card {
                        background: white;
                        border: 4px solid black;
                        padding: 2rem;
                        transition: all 0.3s ease;
                    }
                    
                    .ai-feature-card:hover {
                        background: #EBF998;
                        transform: translateY(-5px);
                        box-shadow: 12px 12px 0px black;
                    }

                     .ai-feature-card.highlight {
                        background: #EBF998;
                    }
                    
                    .stats-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 1rem;
                        margin: 2rem 0;
                    }
                    
                    .stat-box {
                        background: black;
                        color: #EBF998;
                        padding: 1.5rem;
                        text-align: center;
                        border: 2px solid #EBF998;
                        font-weight: 700;
                    }
                    
                    .ai-workflow {
                        background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
                        color: white;
                        padding: 2rem;
                        margin: 1rem 0;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .ai-workflow::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                        animation: scan 3s infinite;
                    }
                    
                    @keyframes scan {
                        0% { left: -100%; }
                        100% { left: 100%; }
                    }
                    
                    .price-calculator {
                        background: white;
                        border: 4px solid black;
                        padding: 2rem;
                        margin: 2rem 0;
                    }
                    
                    .roi-visualization {
                        background: linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), #EBF998);
                        padding: 2rem;
                        color: white;
                        text-align: center;
                        animation: gradient-shift 3s ease-in-out infinite;
                        background-size: 200% 200%;
                    }
                    
                    @keyframes gradient-shift {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }
                `}</style>

                {/* Hero Section */}
                <div style={{ background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)', padding: '4rem 2rem', color: 'white' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤖</div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }} className="font-headline">
                            AI DISCOVERY
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            Position your brand at the forefront of the AI revolution. From prompt engineering that delivers results 
                            to SEO strategies that dominate AI-powered search, we make artificial intelligence work for authentic human connection.
                        </p>
                    </div>
                </div>

                {/* Interactive AI Demo */}
                <div style={{ padding: '4rem 2rem', background: 'black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem', textTransform: 'uppercase', color: '#EBF998' }} className="font-headline">
                            LIVE AI DEMONSTRATION
                        </h2>
                        
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <button 
                                className={`demo-button ${activeDemo === 'prompt' ? 'active' : ''}`}
                                onClick={() => setActiveDemo('prompt')}
                            >
                                Prompt Engineering
                            </button>
                            <button 
                                className={`demo-button ${activeDemo === 'seo' ? 'active' : ''}`}
                                onClick={() => setActiveDemo('seo')}
                            >
                                AI SEO Strategy
                            </button>
                            <button 
                                className={`demo-button ${activeDemo === 'tech' ? 'active' : ''}`}
                                onClick={() => setActiveDemo('tech')}
                            >
                                Tech Stack Discovery
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h3 style={{ color: '#EBF998', marginBottom: '1rem', textTransform: 'uppercase', fontWeight: 800 }}>
                                    INPUT PROMPT:
                                </h3>
                                <div className="ai-terminal" style={{ minHeight: '150px' }}>
                                    <div style={{ color: '#EBF998' }}>$ curations-ai --execute</div>
                                    <div style={{ color: 'white', marginTop: '1rem' }}>
                                        {demoPrompts[activeDemo]?.input}
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 style={{ color: '#EBF998', marginBottom: '1rem', textTransform: 'uppercase', fontWeight: 800 }}>
                                    AI OUTPUT:
                                </h3>
                                <div className="ai-terminal" style={{ minHeight: '150px' }}>
                                    <div style={{ color: '#EBF998' }}>$ Processing...</div>
                                    <div style={{ color: 'white', marginTop: '1rem', whiteSpace: 'pre-line' }}>
                                        {aiResponse}
                                        {isTyping && <span className="ai-cursor"></span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Statistics */}
                <div style={{ padding: '4rem 2rem', background: 'hsl(var(--background))' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                            AI-POWERED RESULTS
                        </h2>
                        
                        <div className="stats-grid">
                            <div className="stat-box">
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>10x</div>
                                <div>Faster Content Creation</div>
                            </div>
                            <div className="stat-box">
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>85%</div>
                                <div>Cost Reduction</div>
                            </div>
                            <div className="stat-box">
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>300%</div>
                                <div>Engagement Increase</div>
                            </div>
                            <div className="stat-box">
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>24/7</div>
                                <div>Automated Monitoring</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Breakdown */}
                <div style={{ padding: '4rem 2rem' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                            
                            <div className="ai-feature-card highlight">
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    AI PROMPT ENGINEERING
                                </h3>
                                <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                    Custom-engineered prompts that deliver consistent, brand-aligned results across all AI platforms.
                                </p>
                                <ul style={{ listStyle: 'none', paddingLeft: 0, fontWeight: 700 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>• Brand voice training datasets</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Multi-modal prompt optimization</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Output quality assurance</li>
                                    <li>• Performance analytics</li>
                                </ul>
                            </div>

                            <div className="ai-feature-card">
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    AI SEO & CITATIONS
                                </h3>
                                <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                    Optimize for AI-powered search engines and ensure your brand appears in AI-generated responses.
                                </p>
                                <ul style={{ listStyle: 'none', paddingLeft: 0, fontWeight: 700 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>• ChatGPT citation optimization</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Perplexity AI visibility</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Google AI Overview ranking</li>
                                    <li>• Rich snippet enhancement</li>
                                </ul>
                            </div>

                            <div className="ai-feature-card">
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛠️</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    TECH STACK DISCOVERY
                                </h3>
                                <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                    Identify and integrate the perfect AI tools for your specific business needs and budget.
                                </p>
                                <ul style={{ listStyle: 'none', paddingLeft: 0, fontWeight: 700 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>• Custom AI tool audits</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Integration roadmaps</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• ROI projections</li>
                                    <li>• Training & onboarding</li>
                                </ul>
                            </div>

                            <div className="ai-feature-card">
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    TEAM WORKSHOPS
                                </h3>
                                <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                    Hands-on training sessions that transform your team into AI power users.
                                </p>
                                <ul style={{ listStyle: 'none', paddingLeft: 0, fontWeight: 700 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>• Custom workshop design</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Hands-on AI training</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• Best practices frameworks</li>
                                    <li>• Ongoing support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Workflow Visualization */}
                <div style={{ padding: '4rem 2rem', background: 'black' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }} className="font-headline">
                            OUR AI INTEGRATION PROCESS
                        </h2>
                        
                        <div className="ai-workflow brutal-box">
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                PHASE 1: AI AUDIT & DISCOVERY
                            </h3>
                            <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                                Comprehensive analysis of your current processes, identification of AI opportunities, 
                                and competitive landscape assessment.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', border: '2px solid white' }}>
                                    Process Mapping
                                </span>
                                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', border: '2px solid white' }}>
                                    Tool Assessment
                                </span>
                                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', border: '2px solid white' }}>
                                    ROI Analysis
                                </span>
                            </div>
                        </div>

                        <div className="ai-workflow brutal-box" style={{ animationDelay: '0.5s' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                PHASE 2: CUSTOM AI DEVELOPMENT
                            </h3>
                            <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                                Build and train AI systems specifically for your brand voice, audience, and business objectives.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', border: '2px solid white' }}>
                                    Prompt Engineering
                                </span>
                                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', border: '2px solid white' }}>
                                    Model Training
                                </span>
                                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', border: '2px solid white' }}>
                                    Integration Setup
                                </span>
                            </div>
                        </div>

                        <div className="ai-workflow brutal-box" style={{ animationDelay: '1s' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                PHASE 3: DEPLOYMENT & OPTIMIZATION
                            </h3>
                            <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                                Launch AI systems with continuous monitoring and optimization for maximum performance.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', border: '2px solid white' }}>
                                    Live Deployment
                                </span>
                                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', border: '2px solid white' }}>
                                    Performance Monitoring
                                </span>
                                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', border: '2px solid white' }}>
                                    Continuous Optimization
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ROI Calculator */}
                <div style={{ padding: '4rem 2rem', background: 'hsl(var(--background))' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                            AI ROI PROJECTIONS
                        </h2>
                        
                        <div className="roi-visualization brutal-box">
                            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                                TYPICAL 12-MONTH RESULTS
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                                <div>
                                    <div style={{ fontSize: '3rem', fontWeight: 800 }}>85%</div>
                                    <div>Cost Reduction</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '3rem', fontWeight: 800 }}>10x</div>
                                    <div>Speed Increase</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '3rem', fontWeight: 800 }}>300%</div>
                                    <div>Output Quality</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '3rem', fontWeight: 800 }}>500%</div>
                                    <div>Team Productivity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Investment Packages */}
                <div style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }} className="font-headline">
                            AI DISCOVERY PACKAGES
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div className="brutal-box" style={{ background: 'white', padding: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    AI STARTER
                                </h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }} className="font-headline">$8K</div>
                                <div style={{ marginBottom: '2rem' }}>Perfect for AI beginners</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>AI audit & strategy</li>
                                    <li>Basic prompt engineering</li>
                                    <li>Tool recommendations</li>
                                    <li>Team workshop (4 hours)</li>
                                    <li>30-day support</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: '#EBF998', padding: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    AI ACCELERATOR
                                </h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }} className="font-headline">$25K</div>
                                <div style={{ marginBottom: '2rem' }}>Most popular package</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Complete AI integration</li>
                                    <li>Custom model training</li>
                                    <li>Advanced SEO optimization</li>
                                    <li>Multiple team workshops</li>
                                    <li>6-month optimization</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: 'black', color: '#EBF998', padding: '2rem', textAlign: 'center', borderColor: '#EBF998' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    AI ENTERPRISE
                                </h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }} className="font-headline">$75K+</div>
                                <div style={{ marginBottom: '2rem' }}>Full AI transformation</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Custom AI development</li>
                                    <li>Proprietary model creation</li>
                                    <li>Enterprise integrations</li>
                                    <li>Dedicated AI team</li>
                                    <li>12+ month partnership</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div style={{ background: 'black', padding: '4rem 2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#EBF998', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                        READY TO HARNESS AI POWER?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Don't let your competitors get ahead in the AI race. Start your transformation today.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:ai@curations.org" className="brutal-box" style={{
                            background: '#EBF998', 
                            color: 'black', 
                            padding: '1rem 2rem', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            border: '4px solid #EBF998', 
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            START AI DISCOVERY
                        </a>
                        <a href="#" className="brutal-box" style={{
                            background: 'white', 
                            color: 'black', 
                            padding: '1rem 2rem', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            border: '4px solid white',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            BOOK AI DEMO
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIDiscoveryPage;
