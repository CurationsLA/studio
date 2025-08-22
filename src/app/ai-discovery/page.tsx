
'use client';

import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';
import GradientButton from '@/components/ui/GradientButton';

const AIDiscoveryPage = () => {
    const [activeDemo, setActiveDemo] = useState('prompt');
    const [aiResponse, setAiResponse] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [innovationMeter, setInnovationMeter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setInnovationMeter(prev => (prev < 100 ? prev + 1 : 100));
        }, 38);
        return () => clearInterval(timer);
    }, []);

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
            output: "🌱 CAMPAIGN: 'Plant-Based Pioneer'\n\n✨ STRATEGY:\n• Partner with local artists for murals featuring plant ingredients\n• Host 'Vegan Skeptic Challenge' - convert meat lovers\n• Create TikTok series: 'Guess the Secret Ingredient'\n• Launch #PlantPowerSilverLake hashtag"
        },
        seo: {
            input: "Optimize for 'best AI marketing agency Los Angeles'",
            output: "🎯 SEO OPTIMIZATION COMPLETE\n\n🔍 TARGET: 'best AI marketing agency Los Angeles'\n📊 COMPETITION: Medium-High\n🎯 STRATEGY:\n\n1. Content Clusters:\n   • 'AI Marketing Revolution in LA'\n   • 'Case Studies: AI Success Stories'\n   • 'Future of Marketing with AI'\n\n2. Technical SEO:\n   • Schema markup implementation\n   • Core Web Vitals optimization\n   • Local business markup"
        },
        tech: {
            input: "Recommend AI tools for content creation automation",
            output: "🤖 AI TECH STACK RECOMMENDATION\n\n📝 CONTENT CREATION:\n• GPT-4 for copywriting\n• Midjourney for visual assets\n• Runway for video generation\n• ElevenLabs for voiceovers\n\n🔄 AUTOMATION:\n• Zapier for workflow integration\n• Buffer for social scheduling\n• HubSpot for lead nurturing"
        }
    };

    useEffect(() => {
        if (activeDemo && demoPrompts[activeDemo]) {
            typeText(demoPrompts[activeDemo].output);
        }
    }, [activeDemo]);

    const aiDiscoverySchema = {
        // ... (schema remains the same)
    };

    return (
        <>
            <DraftNav />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", background: 'hsl(var(--background))', minHeight: '100vh' }}>
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(aiDiscoverySchema) }}
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
                    
                    .innovation-meter {
                        width: 100%;
                        height: 24px;
                        background: #e5e5e5;
                        border: 4px solid black;
                        overflow: hidden;
                        position: relative;
                    }
                    
                    .innovation-fill {
                        height: 100%;
                        background: var(--gradient-ai);
                        background-size: 200% 200%;
                        animation: gradient-shift 4s ease infinite;
                        transition: width 0.1s ease-in-out;
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .innovation-text {
                        color: white;
                        font-weight: 800;
                        font-size: 0.8rem;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
                        z-index: 2;
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
                        transform: translateY(-4px);
                        box-shadow: 4px 4px 0px black;
                    }
                    
                    .demo-button:hover:not(.active) {
                        background: hsl(var(--primary));
                        color: hsl(var(--primary-foreground));
                        transform: translateY(-2px);
                    }
                `}</style>

                {/* Hero Section */}
                <div className="gradient-overlay-noise" style={{ background: 'var(--gradient-ai)', padding: '4rem 2rem', color: 'white', backgroundSize: '200% 200%', animation: 'gradient-shift 8s ease-in-out infinite' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤖</div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}>
                            AI DISCOVERY
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            Position your brand at the forefront of the AI revolution. From prompt engineering that delivers results 
                            to SEO strategies that dominate AI-powered search, we make artificial intelligence work for authentic human connection.
                        </p>
                        <div className="innovation-meter brutal-box" style={{ maxWidth: '500px', margin: '2rem auto 0' }}>
                            <div 
                                className="innovation-fill" 
                                style={{ width: `${innovationMeter}%` }}
                            >
                               <span className="innovation-text">100% INNOVATION</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive AI Demo */}
                <div style={{ padding: '4rem 2rem', background: 'black' }}>
                    {/* ... Demo content ... */}
                </div>
                
                {/* Service Breakdown */}
                <div style={{ padding: '4rem 2rem' }}>
                   {/* ... Service breakdown ... */}
                </div>

                {/* CTA Section */}
                <div style={{ background: 'black', padding: '4rem 2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--green))', marginBottom: '2rem', textTransform: 'uppercase' }}>
                        READY TO HARNESS AI POWER?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Don't let your competitors get ahead in the AI race. Start your transformation today.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:hello@curations.cc">
                            <GradientButton gradient="ai">
                                START AI DISCOVERY
                            </GradientButton>
                        </a>
                        <a href="#">
                            <GradientButton gradient="ai">
                                BOOK AI DEMO
                            </GradientButton>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIDiscoveryPage;
