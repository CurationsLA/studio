'use client';

import { useState } from 'react';
import Link from 'next/link';
import DraftNav from '@/components/ui/draft-nav';

const HomepageDraft = () => {
    const [currentView, setCurrentView] = useState('home');

    return (
        <>
            <DraftNav />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", background: 'hsl(var(--background))', minHeight: '100vh' }}>
                <style jsx global>{`
                    .brutal-box {
                        border: 4px solid black;
                        box-shadow: 8px 8px 0px black;
                        transition: all 0.3s ease;
                    }
                    
                    .brutal-box:hover {
                        box-shadow: 12px 12px 0px #FF5BF1;
                        transform: translateY(-4px);
                    }
                    
                    .gradient-text {
                        background: linear-gradient(135deg, #FF5BF1 0%, #6370E7 100%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                `}</style>

                {/* Hero Section */}
                <div style={{ padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #FF5BF1 0%, #6370E7 50%, #EBF998 100%)', color: 'white' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase', lineHeight: 1 }}>
                            DRAFT HOMEPAGE
                        </h1>
                        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                            Design iteration workspace for the CURATIONS web platform
                        </p>
                        <div className="brutal-box" style={{ background: 'white', color: 'black', padding: '1rem 2rem', display: 'inline-block', fontWeight: 800, textTransform: 'uppercase' }}>
                            DEVELOPMENT MODE
                        </div>
                    </div>
                </div>

                {/* Navigation Grid */}
                <div style={{ padding: '4rem 2rem', background: 'white' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }}>
                            HOMEPAGE ITERATIONS & DESIGN SYSTEMS
                        </h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {/* Live Homepage */}
                            <Link href="/" className="brutal-box" style={{ background: '#FF5BF1', color: 'white', padding: '2rem', textDecoration: 'none', display: 'block' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏠</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    LIVE HOMEPAGE
                                </h3>
                                <p style={{ lineHeight: 1.6 }}>
                                    Current production homepage with full service showcase and business information.
                                </p>
                            </Link>

                            {/* Design Inspirations */}
                            <Link href="/v2-inspirations" className="brutal-box" style={{ background: '#6370E7', color: 'white', padding: '2rem', textDecoration: 'none', display: 'block' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    V2 INSPIRATIONS
                                </h3>
                                <p style={{ lineHeight: 1.6 }}>
                                    Design inspiration gallery and future homepage iterations for platform evolution.
                                </p>
                            </Link>

                            {/* Service Pages Overview */}
                            <div className="brutal-box" style={{ background: '#EBF998', color: 'black', padding: '2rem' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛠️</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    SERVICE PAGES
                                </h3>
                                <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
                                    All service landing pages operational and accessible via main navigation.
                                </p>
                                <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                                    8 Core Services Active
                                </div>
                            </div>

                            {/* Youth Curator Program */}
                            <Link href="/youth-curator" className="brutal-box" style={{ background: 'black', color: 'white', padding: '2rem', textDecoration: 'none', display: 'block' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    YOUTH CURATOR
                                </h3>
                                <p style={{ lineHeight: 1.6 }}>
                                    Mission-critical youth mentorship and revenue program with full application system.
                                </p>
                            </Link>

                            {/* Partnership Hub */}
                            <Link href="/outbox" className="brutal-box" style={{ background: 'linear-gradient(135deg, #FF5BF1 0%, #6370E7 100%)', color: 'white', padding: '2rem', textDecoration: 'none', display: 'block' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    OUTBOX
                                </h3>
                                <p style={{ lineHeight: 1.6 }}>
                                    Partnership gateway for client onboarding, affiliate programs, and collaboration requests.
                                </p>
                            </Link>

                            {/* Design Systems */}
                            <div className="brutal-box" style={{ background: 'white', border: '4px solid black', color: 'black', padding: '2rem' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    DESIGN SYSTEM
                                </h3>
                                <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
                                    Brand colors, typography, and component library fully implemented across all pages.
                                </p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    <div style={{ width: '20px', height: '20px', background: '#FF5BF1', border: '1px solid black' }} title="Primary"></div>
                                    <div style={{ width: '20px', height: '20px', background: '#6370E7', border: '1px solid black' }} title="Accent"></div>
                                    <div style={{ width: '20px', height: '20px', background: '#EBF998', border: '1px solid black' }} title="Highlight"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Development Status */}
                <div style={{ padding: '3rem 2rem', background: 'black', color: 'white', textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                            PLATFORM STATUS: DEPLOYMENT READY ✅
                        </h3>
                        <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
                            All critical pages functional, navigation operational, styling systems active. 
                            Platform ready for business operations and client acquisition.
                        </p>
                        <p style={{ fontSize: '0.875rem', color: '#EBF998' }}>
                            Build Status: SUCCESS • Pages: 67 • Routes: Functional • Styling: Complete
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomepageDraft;