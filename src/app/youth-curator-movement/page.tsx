
'use client';

import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';
import GradientButton from '@/components/ui/GradientButton';

const YouthCuratorMovementPage = () => {
    const [skillMeter, setSkillMeter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSkillMeter(prev => (prev < 100 ? prev + 1 : 100));
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", background: '#FDFDFC', minHeight: '100vh' }}>
            <DraftNav />
            <style jsx global>{`
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                    transition: all 0.3s ease;
                }
                .brutal-box:hover {
                    box-shadow: 12px 12px 0px hsl(var(--primary));
                }
                 .skill-meter {
                    width: 100%;
                    height: 24px;
                    background: #e5e5e5;
                    border: 4px solid black;
                    overflow: hidden;
                    position: relative;
                }
                
                .skill-fill {
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

                .skill-text {
                    color: white;
                    font-weight: 800;
                    font-size: 0.8rem;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
                    z-index: 2;
                }
            `}</style>

            {/* Hero Section */}
            <div className="gradient-overlay-noise gradient-cursor" style={{ background: 'var(--gradient-influencer)', padding: '4rem 2rem', color: 'white', backgroundSize: '200% 200%', animation: 'gradient-shift 8s ease-in-out infinite' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}>
                        Youth Curator Movement
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                        Empowering the next generation of creators to shape the future of culture.
                    </p>
                    <div className="skill-meter brutal-box" style={{ maxWidth: '500px', margin: '2rem auto 0' }}>
                        <div 
                            className="skill-fill" 
                            style={{ width: `${skillMeter}%` }}
                        >
                           <span className="skill-text">100% CREATOR POWER</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Main Content */}
            <div style={{ padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    {/* Interactive Features */}
                    <div className="brutal-box bg-white p-6 mb-8">
                         <h2 className="text-2xl font-bold uppercase mb-4">Discover Your Creative Superpower</h2>
                        {/* Placeholder for quiz */}
                        <p>What kind of creator are you? Take our quiz to find out!</p>
                    </div>

                    {/* Content Elements */}
                     <div className="brutal-box bg-white p-6 mb-8">
                         <h2 className="text-2xl font-bold uppercase mb-4">Success Stories</h2>
                        {/* Placeholder for carousel */}
                        <p>Meet some of the amazing young creators in our movement.</p>
                    </div>
                    
                    {/* Application Process */}
                     <div className="brutal-box bg-white p-6">
                        <h2 className="text-2xl font-bold uppercase mb-4">Join the Movement</h2>
                        <p className="mb-4">Ready to start your creative journey? Apply to join the Youth Curator Movement and get access to mentorship, resources, and a community of fellow creators.</p>
                        <a href="mailto:youth@curations.cc">
                            <GradientButton gradient="influencer">
                                Apply Now
                            </GradientButton>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YouthCuratorMovementPage;
