
'use client';

const EditorialStackPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
                
                body {
                    font-family: 'Inter', sans-serif;
                    background: #FFFFFF;
                    color: #000000;
                }
                
                .brutal-border {
                    border: 5px solid #000000;
                    box-shadow: 10px 10px 0px #000000;
                }
                
                .pink-border {
                    border: 5px solid #FF5BF1;
                    box-shadow: 10px 10px 0px #FF5BF1;
                }
                
                .green-border {
                    border: 5px solid #EBF998;
                    box-shadow: 10px 10px 0px #000000;
                }
                
                .blue-border {
                    border: 5px solid #6370E7;
                    box-shadow: 10px 10px 0px #6370E7;
                }
                
                .headline-serif {
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: -0.02em;
                    line-height: 0.9;
                }
                
                .category-tag {
                    display: inline-block;
                    padding: 8px 16px;
                    background: #000000;
                    color: #FFFFFF;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
            `}</style>
            <div>
                {/* Magazine Header */}
                <header style={{ background: '#000000', padding: '20px 0' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ color: '#FFFFFF' }}>
                                <span style={{ fontSize: '11px', letterSpacing: '0.2em' }}>ISSUE 074 • AUGUST 2025</span>
                            </div>
                            <div style={{ color: '#FF5BF1', fontSize: '24px', fontWeight: 900, letterSpacing: '0.05em' }}>
                                CURATIONS
                            </div>
                            <div style={{ color: '#FFFFFF' }}>
                                <span style={{ fontSize: '11px', letterSpacing: '0.1em' }}>LOS ANGELES • WORLDWIDE</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Feature Stack */}
                <section style={{ padding: '60px 40px' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        {/* Main Feature */}
                        <div className="brutal-border" style={{ background: '#FF5BF1', padding: '60px', marginBottom: '40px' }}>
                            <div className="category-tag" style={{ background: '#FFFFFF', color: '#FF5BF1' }}>COVER STORY</div>
                            <h1 className="headline-serif" style={{ fontSize: 'clamp(48px, 8vw, 120px)', color: '#FFFFFF', margin: '20px 0' }}>
                                WE CURATE<br />THE HEART &<br />HEADLINES
                            </h1>
                            <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#FFFFFF', maxWidth: '600px' }}>
                                Building cultural resonance through strategic brand narratives that connect communities and drive meaningful engagement across Los Angeles and beyond.
                            </p>
                        </div>

                        {/* Three Column Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
                            <article className="green-border" style={{ background: '#EBF998', padding: '40px' }}>
                                <div className="category-tag">RESTAURANT LAUNCH</div>
                                <h2 style={{ fontSize: '32px', fontWeight: 900, margin: '20px 0', lineHeight: 1.1 }}>
                                    GRAND OPENINGS THAT MAKE HEADLINES
                                </h2>
                                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                                    From soft launches to media events, we orchestrate restaurant debuts that capture attention and build lasting community connections.
                                </p>
                                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '3px solid #000000' }}>
                                    <span style={{ fontSize: '12px', fontWeight: 700 }}>FEATURED CLIENTS</span>
                                    <p style={{ fontSize: '11px', marginTop: '5px' }}>Republique • Guelaguetza • Night + Market</p>
                                </div>
                            </article>

                            <article className="blue-border" style={{ background: '#FFFFFF', padding: '40px' }}>
                                <div className="category-tag" style={{ background: '#6370E7', color: '#FFFFFF' }}>AI DISCOVERY</div>
                                <h2 style={{ fontSize: '32px', fontWeight: 900, margin: '20px 0', lineHeight: 1.1, color: '#6370E7' }}>
                                    FUTURE-FORWARD TECH STRATEGIES
                                </h2>
                                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                                    Navigate the AI landscape with confidence. We translate emerging technologies into practical solutions for modern brands.
                                </p>
                                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '3px solid #6370E7' }}>
                                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#6370E7' }}>CAPABILITIES</span>
                                    <p style={{ fontSize: '11px', marginTop: '5px' }}>Prompt Engineering • SEO Optimization • Tech Stack</p>
                                </div>
                            </article>

                            <article className="pink-border" style={{ background: '#FFFFFF', padding: '40px' }}>
                                <div className="category-tag" style={{ background: '#FF5BF1', color: '#FFFFFF' }}>MEDIA BUYING</div>
                                <h2 style={{ fontSize: '32px', fontWeight: 900, margin: '20px 0', lineHeight: 1.1 }}>
                                    STRATEGIC PLACEMENT EVERYWHERE
                                </h2>
                                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                                    Netflix to podcasts, billboards to social feeds. We place your brand where culture happens.
                                </p>
                                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '3px solid #FF5BF1' }}>
                                    <span style={{ fontSize: '12px', fontWeight: 700 }}>CHANNELS</span>
                                    <p style={{ fontSize: '11px', marginTop: '5px' }}>Streaming • Audio • Digital • Traditional</p>
                                </div>
                            </article>
                        </div>

                        {/* Full Width Feature */}
                        <div className="brutal-border" style={{ background: 'linear-gradient(to right, #FF5BF1, #6370E7)', padding: '80px 60px', textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)', color: '#FFFFFF', fontWeight: 900 }}>
                                GROW WITH GOOGLE PARTNER
                            </h2>
                            <p style={{ fontSize: '18px', color: '#FFFFFF', marginTop: '20px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                                One deserving brand receives our complete service suite at no cost, annually.
                            </p>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="brutal-border" style={{ background: '#000000', padding: '60px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                                <div>
                                    <h3 style={{ fontSize: '48px', fontWeight: 900, color: '#FF5BF1', lineHeight: 1 }}>
                                        CURATIONSLA
                                    </h3>
                                    <p style={{ color: '#FFFFFF', fontSize: '16px', marginTop: '20px', lineHeight: 1.6 }}>
                                        The pulse of Los Angeles culture. Weekly dispatches on what matters in food, tech, and creative industries.
                                    </p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ display: 'inline-block', padding: '20px 40px', background: '#EBF998', color: '#000000', fontWeight: 700, textTransform: 'uppercase' }}>
                                        Subscribe for Good Vibes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EditorialStackPage;
