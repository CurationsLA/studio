
'use client';

import { useState } from 'react';
import DraftNav from '@/components/ui/draft-nav';

const NewsletterServicesPage = () => {
    const [activeService, setActiveService] = useState('strategy');
    const [selectedTemplate, setSelectedTemplate] = useState('brutal');

    const newsletterSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Newsletter Services - Branding, Design, Content & Ghostwriting",
        "provider": {
            "@type": "Organization",
            "name": "Curations"
        },
        "description": "Complete newsletter solutions including strategic branding, visual design, content creation, and professional ghostwriting services.",
        "serviceType": "Newsletter Marketing",
        "areaServed": "Global"
    };

    const templateStyles = {
        brutal: {
            name: 'BRUTAL AESTHETIC',
            description: 'Bold, unapologetic design that demands attention',
            colors: ['#FF5BF1', '#000000', '#EBF998'],
            features: ['Heavy borders', 'Bold typography', 'High contrast']
        },
        minimal: {
            name: 'MINIMAL SOPHISTICATION',
            description: 'Clean, premium design that speaks to discerning audiences',
            colors: ['#F8F8F8', '#333333', '#6370E7'],
            features: ['White space mastery', 'Elegant typography', 'Subtle accents']
        },
        editorial: {
            name: 'EDITORIAL EXCELLENCE',
            description: 'Magazine-quality layouts that establish authority',
            colors: ['#FFFFFF', '#1A1A1A', '#FF5BF1'],
            features: ['Grid systems', 'Editorial hierarchy', 'Professional imagery']
        }
    };

    return (
        <div style={{ fontFamily: "'Inter', sans-serif", background: '#FDFDFC', minHeight: '100vh' }}>
            <DraftNav />
            <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(newsletterSchema) }}
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
                    color: white;
                    transform: translateY(-3px);
                }
                
                .service-tab:hover {
                    background: hsl(var(--accent));
                    color: white;
                }
                
                .newsletter-preview {
                    background: white;
                    border: 4px solid black;
                    padding: 2rem;
                    min-height: 400px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .newsletter-preview:hover {
                    transform: translateY(-5px);
                    box-shadow: 12px 12px 0px black;
                }
                
                .template-selector {
                    background: white;
                    border: 4px solid black;
                    padding: 1rem;
                    margin: 0.5rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                }
                
                .template-selector.active {
                    background: #EBF998;
                    transform: scale(1.05);
                }
                
                .template-selector:hover {
                    background: #EBF998;
                }
                
                .performance-stat {
                    background: black;
                    color: hsl(var(--primary));
                    padding: 2rem;
                    text-align: center;
                    border: 2px solid hsl(var(--primary));
                    transition: all 0.3s ease;
                }
                
                .performance-stat:hover {
                    background: hsl(var(--primary));
                    color: black;
                    transform: scale(1.05);
                }
                
                .content-showcase {
                    background: linear-gradient(135deg, #FF5BF1, #6370E7, #EBF998);
                    padding: 3rem;
                    color: white;
                    margin: 2rem 0;
                }
                
                .writing-sample {
                    background: white;
                    border: 4px solid black;
                    padding: 1.5rem;
                    margin: 1rem 0;
                    transition: all 0.3s ease;
                }
                
                .writing-sample:hover {
                    background: #F8F8F8;
                    transform: translateX(10px);
                }
                
                .ghostwriting-tier {
                    background: white;
                    border: 4px solid black;
                    padding: 2rem;
                    text-align: center;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .ghostwriting-tier:hover {
                    background: #EBF998;
                    transform: scale(1.02);
                }
                
                .feature-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin: 2rem 0;
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
                    flex-shrink: 0;
                }
            `}</style>

            {/* Hero Section */}
            <div style={{ background: 'hsl(var(--primary))', padding: '4rem 2rem', color: 'white' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📧</div>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }} className="font-headline">
                        NEWSLETTER MASTERY
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                        From strategic branding to compelling copy, from visual design to ghostwritten excellence—we create newsletters 
                        that don't just reach inboxes, they create communities. This is where brands become voices people actually want to hear from.
                    </p>
                    
                    <div className="brutal-box" style={{ background: 'rgba(255,255,255,0.2)', padding: '1.5rem', maxWidth: '600px', margin: '0 auto', borderColor: 'white' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                            OUR NEWSLETTER SUPERPOWER
                        </h3>
                        <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                            We don't just write newsletters—we architect communication ecosystems that turn subscribers into evangelists, 
                            readers into customers, and brands into cultural touchstones.
                        </p>
                    </div>
                </div>
            </div>

            {/* Performance Metrics */}
            <div style={{ padding: '4rem 2rem', background: 'black' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }} className="font-headline">
                        NEWSLETTER PERFORMANCE EXCELLENCE
                    </h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        <div className="performance-stat">
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>67%</div>
                            <div>Average Open Rate</div>
                            <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.8 }}>Industry: 21%</div>
                        </div>
                        <div className="performance-stat">
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>23%</div>
                            <div>Click-Through Rate</div>
                            <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.8 }}>Industry: 2.6%</div>
                        </div>
                        <div className="performance-stat">
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>89%</div>
                            <div>Subscriber Retention</div>
                            <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.8 }}>Industry: 65%</div>
                        </div>
                        <div className="performance-stat">
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>$42</div>
                            <div>ROI Per $1 Spent</div>
                            <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.8 }}>Industry: $36</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Navigation */}
            <div style={{ padding: '2rem', background: 'white', borderBottom: '4px solid black' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                    <button 
                        className={`service-tab ${activeService === 'strategy' ? 'active' : ''}`}
                        onClick={() => setActiveService('strategy')}
                    >
                        Strategic Branding
                    </button>
                    <button 
                        className={`service-tab ${activeService === 'design' ? 'active' : ''}`}
                        onClick={() => setActiveService('design')}
                    >
                        Visual Design
                    </button>
                    <button 
                        className={`service-tab ${activeService === 'content' ? 'active' : ''}`}
                        onClick={() => setActiveService('content')}
                    >
                        Content Creation
                    </button>
                    <button 
                        className={`service-tab ${activeService === 'ghostwriting' ? 'active' : ''}`}
                        onClick={() => setActiveService('ghostwriting')}
                    >
                        Ghostwriting
                    </button>
                </div>
            </div>

            {/* Service Content */}
            <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                
                {/* Strategic Branding */}
                {activeService === 'strategy' && (
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                            STRATEGIC NEWSLETTER BRANDING
                        </h2>
                        
                        <div className="content-showcase brutal-box">
                            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', textTransform: 'uppercase' }} className="font-headline">
                                CURATIONSLA: CASE STUDY IN EXCELLENCE
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>THE CHALLENGE</h4>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Create a newsletter that captures the pulse of Los Angeles culture while building authentic community connections.
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>OUR APPROACH</h4>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Brutal design aesthetic meets hyper-local curation. Every issue feels like insider knowledge from cultural architects.
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>THE RESULTS</h4>
                                    <p style={{ lineHeight: 1.8 }}>
                                        15,000+ engaged subscribers, 67% open rate, and businesses reaching out to BE featured, not pay to be featured.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="feature-grid">
                            <div className="brutal-box" style={{ background: '#FF5BF1', color: 'white', padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    BRAND VOICE ARCHITECTURE
                                </h3>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li>• Personality framework development</li>
                                    <li>• Tone and voice guidelines</li>
                                    <li>• Content pillar establishment</li>
                                    <li>• Reader persona deep-dives</li>
                                    <li>• Competitive differentiation strategy</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: '#6370E7', color: 'white', padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    EDITORIAL POSITIONING
                                </h3>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li>• Market gap analysis</li>
                                    <li>• Editorial calendar strategy</li>
                                    <li>• Content series planning</li>
                                    <li>• Reader journey mapping</li>
                                    <li>• Engagement optimization</li>
                                </ul>
                            </div>

                            <div className="brutal-box" style={{ background: '#EBF998', color: 'black', padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                    GROWTH FRAMEWORKS
                                </h3>
                                <ul style={{ lineHeight: 1.8, listStyle: 'none', paddingLeft: 0 }}>
                                    <li>• Referral program design</li>
                                    <li>• Social amplification strategy</li>
                                    <li>• Cross-platform integration</li>
                                    <li>• Community building tactics</li>
                                    <li>• Retention optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Visual Design */}
                {activeService === 'design' && (
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                            VISUAL DESIGN MASTERY
                        </h2>
                        
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                            TEMPLATE STYLES
                        </h3>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                            {Object.entries(templateStyles).map(([key, style]) => (
                                <div 
                                    key={key}
                                    className={`template-selector ${selectedTemplate === key ? 'active' : ''}`}
                                    onClick={() => setSelectedTemplate(key)}
                                >
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>{style.name}</h4>
                                    <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{style.description}</p>
                                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                        {style.colors.map((color, index) => (
                                            <div 
                                                key={index}
                                                style={{ 
                                                    width: '20px', 
                                                    height: '20px', 
                                                    background: color, 
                                                    border: '2px solid black' 
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                                    DESIGN PHILOSOPHY
                                </h3>
                                <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                                    <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>MOBILE-FIRST BRUTALISM</h4>
                                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                                        Every newsletter is designed for mobile consumption first, because that's where 80% of your readers live. 
                                        Bold design that works on any screen size.
                                    </p>
                                    <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>SCANNABLE HIERARCHY</h4>
                                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                                        Clear information architecture that guides the eye through content. Readers should know what's important 
                                        in under 3 seconds.
                                    </p>
                                    <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>BRAND CONSISTENCY</h4>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Every design element reinforces your brand identity. From color choices to typography, 
                                        everything serves your brand story.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="newsletter-preview">
                                <div style={{ borderBottom: '4px solid black', paddingBottom: '1rem', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }} className="font-headline">
                                        {templateStyles[selectedTemplate].name} PREVIEW
                                    </h3>
                                </div>
                                
                                <div style={{ 
                                    background: templateStyles[selectedTemplate].colors[0], 
                                    color: selectedTemplate === 'minimal' ? '#333' : 'white',
                                    padding: '1rem', 
                                    marginBottom: '1rem',
                                    border: selectedTemplate === 'brutal' ? '2px solid black' : 'none'
                                }}>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>HEADER SECTION</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Brand positioning and navigation</p>
                                </div>
                                
                                <div style={{ padding: '1rem', marginBottom: '1rem', background: '#F8F8F8' }}>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>FEATURED CONTENT</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Primary story with engaging headlines</p>
                                </div>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ padding: '0.75rem', background: templateStyles[selectedTemplate].colors[2], color: 'black' }}>
                                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem' }}>SECONDARY</h5>
                                    </div>
                                    <div style={{ padding: '0.75rem', background: templateStyles[selectedTemplate].colors[2], color: 'black' }}>
                                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem' }}>CONTENT</h5>
                                    </div>
                                </div>
                                
                                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                                    <strong>Key Features:</strong>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem', justifyContent: 'center' }}>
                                        {templateStyles[selectedTemplate].features.map((feature, index) => (
                                            <span key={index} style={{ 
                                                background: templateStyles[selectedTemplate].colors[1], 
                                                color: 'white', 
                                                padding: '0.25rem 0.5rem', 
                                                fontSize: '0.75rem',
                                                fontWeight: 700
                                            }}>
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Content Creation */}
                {activeService === 'content' && (
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                            CONTENT THAT CONVERTS
                        </h2>
                        
                        <div className="brutal-box" style={{ background: '#EBF998', padding: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                                CONTENT CREATION PROCESS
                            </h3>
                            
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }} className="font-headline">
                                        CULTURAL INTELLIGENCE
                                    </h4>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Deep research into your audience's world—what they read, where they hang out, what they care about. 
                                        Content that feels like it's from their community, not a corporate boardroom.
                                    </p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number" style={{ background: '#6370E7' }}>2</div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }} className="font-headline">
                                        SUBJECT LINE SCIENCE
                                    </h4>
                                    <p style={{ lineHeight: 1.8 }}>
                                        We A/B test everything. Curiosity gaps, urgency, personalization, humor—whatever makes your audience 
                                        stop mid-scroll and actually open your email.
                                    </p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number" style={{ background: '#FF5BF1' }}>3</div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }} className="font-headline">
                                        NARRATIVE ARCHITECTURE
                                    </h4>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Every newsletter tells a story. Not just what happened, but why it matters, what it means, 
                                        and how your audience should feel about it. Content with purpose and personality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                            CONTENT TYPE MASTERY
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                            <div className="writing-sample">
                                <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: '#FF5BF1' }}>CULTURAL CURATION</h4>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.8 }}>
                                    "This week in LA: A taco truck in Boyle Heights just got a Michelin mention, a Silver Lake coffee shop 
                                    is hosting cryptocurrency meetups, and someone started a underground supper club in an Arts District warehouse. 
                                    The city's cultural DNA is rewriting itself, one authentic moment at a time."
                                </p>
                                <p style={{ fontSize: '0.875rem', fontWeight: 700 }}>Sample from CurationsLA Newsletter</p>
                            </div>

                            <div className="writing-sample">
                                <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: '#6370E7' }}>BUSINESS INSIGHTS</h4>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.8 }}>
                                    "While everyone's debating AI's impact on creativity, smart brands are quietly using it to amplify human insight, 
                                    not replace it. The winners aren't choosing between artificial and authentic—they're combining both to create 
                                    something entirely new."
                                </p>
                                <p style={{ fontSize: '0.875rem', fontWeight: 700 }}>Sample Executive Newsletter Content</p>
                            </div>

                            <div className="writing-sample">
                                <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: '#EBF998', background: 'black', padding: '0.5rem' }}>COMMUNITY BUILDING</h4>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.8 }}>
                                    "Quick question for the community: What's the most underrated restaurant in your neighborhood? We're building 
                                    a crowd-sourced guide to LA's hidden gems, and your local knowledge is the secret ingredient we need. 
                                    Reply with your pick—we'll feature the best discoveries next week."
                                </p>
                                <p style={{ fontSize: '0.875rem', fontWeight: 700 }}>Sample Community Engagement Content</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ghostwriting */}
                {activeService === 'ghostwriting' && (
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                            EXECUTIVE GHOSTWRITING
                        </h2>
                        
                        <div className="content-showcase brutal-box">
                            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', textTransform: 'uppercase' }} className="font-headline">
                                YOUR VOICE, AMPLIFIED
                            </h3>
                            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, textAlign: 'center', marginBottom: '2rem' }}>
                                We don't just write for you—we become you. Through deep collaboration sessions, voice analysis, and iterative refinement, 
                                we craft content that sounds authentically yours, only better.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 800 }}>3-5</div>
                                    <div>Voice Development Sessions</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 800 }}>100%</div>
                                    <div>Authenticity Match</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 800 }}>24hr</div>
                                    <div>Turnaround Time</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 800 }}>Zero</div>
                                    <div>Generic Templates Used</div>
                                </div>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                            GHOSTWRITING TIERS
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                            <div className="ghostwriting-tier">
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase', color: '#FF5BF1' }} className="font-headline">
                                    VOICE DEVELOPMENT
                                </h4>
                                <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>$2K/month</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>4 newsletters per month</li>
                                    <li>Voice analysis and development</li>
                                    <li>Content strategy alignment</li>
                                    <li>Performance tracking</li>
                                    <li>Unlimited revisions</li>
                                </ul>
                            </div>

                            <div className="ghostwriting-tier">
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase', color: '#6370E7' }} className="font-headline">
                                    THOUGHT LEADERSHIP
                                </h4>
                                <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>$5K/month</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Weekly newsletters</li>
                                    <li>Industry insight curation</li>
                                    <li>Executive interview sessions</li>
                                    <li>Cross-platform content adaptation</li>
                                    <li>Media opportunity identification</li>
                                </ul>
                            </div>

                            <div className="ghostwriting-tier">
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase', color: '#EBF998', background: 'black', padding: '0.5rem' }} className="font-headline">
                                    CULTURAL AUTHORITY
                                </h4>
                                <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>$10K/month</div>
                                <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <li>Premium weekly content</li>
                                    <li>Cultural trend analysis</li>
                                    <li>Exclusive interview access</li>
                                    <li>Speaking engagement support</li>
                                    <li>Full editorial team support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="brutal-box" style={{ background: 'white', padding: '3rem' }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', textTransform: 'uppercase' }} className="font-headline">
                                GHOSTWRITING PROCESS
                            </h3>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: '#FF5BF1' }}>DISCOVERY PHASE</h4>
                                    <p style={{ lineHeight: 1.8 }}>
                                        In-depth interviews to understand your perspective, values, communication style, and industry insights. 
                                        We study your existing content, speaking patterns, and thought processes.
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: '#6370E7' }}>VOICE CALIBRATION</h4>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Creation of voice guidelines and content frameworks that capture your authentic communication style. 
                                        Multiple drafts until the voice feels completely natural.
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: '#EBF998', background: 'black', padding: '0.5rem' }}>COLLABORATIVE CREATION</h4>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Ongoing content creation with regular feedback loops. You provide the insights and direction, 
                                        we provide the craft and cultural intelligence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Investment Packages */}
            <div style={{ padding: '4rem 2rem', background: 'black' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase', color: 'white' }} className="font-headline">
                        NEWSLETTER INVESTMENT PACKAGES
                    </h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="brutal-box" style={{ background: 'white', padding: '2rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                NEWSLETTER FOUNDATION
                            </h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>$3K</div>
                            <div style={{ marginBottom: '2rem' }}>One-time setup package</div>
                            <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                <li>Brand voice development</li>
                                <li>Visual template design</li>
                                <li>Content strategy framework</li>
                                <li>Technical setup and integration</li>
                                <li>Launch campaign planning</li>
                            </ul>
                        </div>

                        <div className="brutal-box" style={{ background: '#EBF998', padding: '2rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                NEWSLETTER EXCELLENCE
                            </h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>$8K/month</div>
                            <div style={{ marginBottom: '2rem' }}>Most popular package</div>
                            <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                <li>Weekly newsletter creation</li>
                                <li>Content curation and writing</li>
                                <li>Design and layout optimization</li>
                                <li>Performance analytics</li>
                                <li>Growth strategy implementation</li>
                            </ul>
                        </div>

                        <div className="brutal-box" style={{ background: '#FF5BF1', color: 'white', padding: '2rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }} className="font-headline">
                                NEWSLETTER EMPIRE
                            </h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>$25K/month</div>
                            <div style={{ marginBottom: '2rem' }}>Full-service newsletter operation</div>
                            <ul style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                <li>Multiple newsletter streams</li>
                                <li>Executive ghostwriting</li>
                                <li>Custom content series</li>
                                <li>Advanced automation</li>
                                <li>Dedicated account team</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Our Newsletter Services */}
            <div style={{ padding: '4rem 2rem', background: '#FDFDFC' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }} className="font-headline">
                        WHY CURATIONS FOR NEWSLETTERS?
                    </h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase', color: '#FF5BF1' }} className="font-headline">
                                PROVEN TRACK RECORD
                            </h3>
                            <p style={{ lineHeight: 1.8 }}>
                                CurationsLA isn't just our case study—it's our daily proof of concept. 15,000+ engaged subscribers, 
                                67% open rates, and businesses reaching out to be featured, not paying to be included.
                            </p>
                        </div>

                        <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase', color: '#6370E7' }} className="font-headline">
                                CULTURAL INTELLIGENCE
                            </h3>
                            <p style={{ lineHeight: 1.8 }}>
                                We don't just understand marketing—we understand culture. Every newsletter we create taps into 
                                cultural currents that make content feel relevant, timely, and authentic.
                            </p>
                        </div>

                        <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase', color: '#EBF998', background: 'black', padding: '0.5rem' }} className="font-headline">
                                BRUTAL DESIGN MASTERY
                            </h3>
                            <p style={{ lineHeight: 1.8 }}>
                                Our signature aesthetic isn't just about looking different—it's about creating newsletters that 
                                people actually want to read, share, and talk about. Design that demands attention.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div style={{ background: 'linear-gradient(135deg, #FF5BF1 0%, #6370E7 100%)', padding: '4rem 2rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }} className="font-headline">
                    READY TO DOMINATE INBOXES?
                </h2>
                <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                    Let's create a newsletter that people actually look forward to receiving. The kind that builds communities, 
                    drives business results, and establishes your voice as one worth following.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="mailto:newsletters@curations.org" className="brutal-box" style={{
                        background: 'white', 
                        color: '#FF5BF1', 
                        padding: '1rem 2rem', 
                        fontWeight: 800, 
                        textTransform: 'uppercase', 
                        border: '4px solid white', 
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}>
                        START YOUR NEWSLETTER
                    </a>
                    <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer" className="brutal-box" style={{
                        background: '#EBF998', 
                        color: 'black', 
                        padding: '1rem 2rem', 
                        fontWeight: 800, 
                        textTransform: 'uppercase', 
                        border: '4px solid #EBF998',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}>
                        SEE CURATIONSLA
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsletterServicesPage;
