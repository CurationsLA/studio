
'use client';
import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';
import GradientButton from '@/components/ui/GradientButton';

const RestaurantBizPage = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [flavorMeter, setFlavorMeter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setFlavorMeter(prev => (prev < 100 ? prev + 1 : 100));
        }, 40);
        return () => clearInterval(timer);
    }, []);

    const serviceSchema = {
        // ... (schema remains the same)
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
                        transition: all 0.3s ease;
                    }
                    .brutal-box:hover {
                        box-shadow: 12px 12px 0px hsl(var(--primary));
                    }
                    
                    .flavor-meter {
                        width: 100%;
                        height: 24px;
                        background: #e5e5e5;
                        border: 4px solid black;
                        overflow: hidden;
                        position: relative;
                    }
                    
                    .flavor-fill {
                        height: 100%;
                        background: var(--gradient-restaurant);
                        background-size: 200% 200%;
                        animation: gradient-shift 4s ease infinite;
                        transition: width 0.1s ease-in-out;
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .flavor-text {
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
                        margin-right: 1rem;
                        margin-bottom: 1rem;
                    }
                    
                    .tab-button.active {
                        background: hsl(var(--pink));
                        color: white;
                        transform: translateY(-4px);
                        box-shadow: 4px 4px 0px black;
                    }
                    
                    .tab-button:hover:not(.active) {
                        background: hsl(var(--neon-blue));
                        color: white;
                        transform: translateY(-2px);
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
                        background: hsl(var(--pink));
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
                    
                    .case-study-card {
                        transition: all 0.3s ease;
                        cursor: pointer;
                    }
                    
                    .case-study-card:hover {
                        transform: translateY(-8px) rotate(-1deg);
                        box-shadow: 15px 15px 0px black;
                    }
                    
                    .roi-metric {
                        background: hsl(var(--green));
                        border: 2px solid black;
                        padding: 1rem;
                        margin: 0.5rem;
                        display: inline-block;
                        font-weight: 700;
                        transition: all 0.3s ease;
                    }
                    .roi-metric:hover {
                        background: black;
                        color: hsl(var(--green));
                        transform: scale(1.1);
                    }

                    .hero-icon-animation {
                        animation: bounce 2s infinite;
                    }

                    @keyframes bounce {
                        0%, 20%, 50%, 80%, 100% {
                            transform: translateY(0);
                        }
                        40% {
                            transform: translateY(-30px);
                        }
                        60% {
                            transform: translateY(-15px);
                        }
                    }
                `}</style>

                {/* Hero Section */}
                <div className="gradient-overlay-noise" style={{ background: 'var(--gradient-restaurant)', padding: '4rem 2rem', color: 'white', backgroundSize: '200% 200%', animation: 'gradient-shift 8s ease-in-out infinite' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="hero-icon-animation" style={{ fontSize: '4rem', marginBottom: '1rem' }}>🍽️</div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}>
                            RESTAURANT & BIZ
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            From grand openings that become cultural moments to delivery optimization that drives revenue, 
                            we turn restaurants into community cornerstones and businesses into cultural forces.
                        </p>
                        <div className="flavor-meter brutal-box" style={{ maxWidth: '500px', margin: '2rem auto 0' }}>
                            <div 
                                className="flavor-fill" 
                                style={{ width: `${flavorMeter}%` }}
                            >
                               <span className="flavor-text">100% FLAVOR</span>
                            </div>
                        </div>
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
                    </div>
                </div>

                {/* Content Sections */}
                <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                    {/* Tabs Content */}
                </div>

                {/* CTA Section */}
                <div className="gradient-overlay-noise" style={{ background: 'var(--gradient-restaurant)', padding: '4rem 2rem', textAlign: 'center', backgroundSize: '200% 200%', animation: 'gradient-shift 8s ease-in-out infinite' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>
                        READY TO BECOME A CULTURAL FORCE?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Let's turn your restaurant or business into the place everyone talks about.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:hello@curations.cc">
                            <GradientButton gradient="restaurant">
                                START YOUR CURATION
                            </GradientButton>
                        </a>
                        <a href="tel:747-200-5740">
                             <GradientButton gradient="restaurant">
                                CALL US NOW
                            </GradientButton>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantBizPage;
