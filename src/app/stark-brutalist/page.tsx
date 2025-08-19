
'use client';

const StarkBrutalistPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
                
                body {
                    font-family: 'Inter', sans-serif;
                    background: #000000;
                    color: #FFFFFF;
                }
                
                .stark-border {
                    border: 10px solid #FFFFFF;
                    box-shadow: 20px 20px 0px #FF5BF1;
                }
                
                .pink-stark {
                    border: 10px solid #FF5BF1;
                    box-shadow: 20px 20px 0px #000000;
                }
                
                .blue-stark {
                    border: 10px solid #6370E7;
                    box-shadow: 20px 20px 0px #FFFFFF;
                }
                
                .green-stark {
                    border: 10px solid #EBF998;
                    box-shadow: 20px 20px 0px #FF5BF1;
                }
                
                .brutal-type {
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: -0.04em;
                    line-height: 0.8;
                }
                
                .stark-label {
                    display: inline-block;
                    padding: 15px 30px;
                    background: #FFFFFF;
                    color: #000000;
                    font-size: 14px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                }
            `}</style>
            <div>
                {/* Stark Header */}
                <header style={{ background: '#FFFFFF', padding: '40px 0', borderBottom: '10px solid #FF5BF1' }}>
                    <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 40px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ color: '#000000', fontSize: '16px', fontWeight: 900 }}>
                                LOS ANGELES
                            </div>
                            <div style={{ color: '#FF5BF1', fontSize: '48px', fontWeight: 900, letterSpacing: '0.1em' }}>
                                CURATIONS
                            </div>
                            <div style={{ color: '#000000', fontSize: '16px', fontWeight: 900 }}>
                                074 • 2025
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Brutal Layout */}
                <section style={{ padding: '100px 40px' }}>
                    <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                        {/* Massive Statement */}
                        <div className="stark-border" style={{ background: '#FF5BF1', padding: '120px', marginBottom: '80px' }}>
                            <div className="stark-label">MANIFESTO</div>
                            <h1 className="brutal-type" style={{ fontSize: 'clamp(70px, 12vw, 180px)', color: '#FFFFFF', margin: '40px 0' }}>
                                WE CURATE<br />THE HEART<br />& HEADLINES
                            </h1>
                            <p style={{ fontSize: '24px', lineHeight: 1.4, color: '#FFFFFF', maxWidth: '800px', fontWeight: 700 }}>
                                BUILDING CULTURAL RESONANCE THROUGH STRATEGIC BRAND NARRATIVES THAT CONNECT COMMUNITIES AND DRIVE MEANINGFUL ENGAGEMENT.
                            </p>
                        </div>

                        {/* Brutal Service Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '100px' }}>
                            <div className="green-stark" style={{ background: '#EBF998', padding: '80px' }}>
                                <div className="stark-label" style={{ background: '#000000', color: '#EBF998' }}>RESTAURANT</div>
                                <h2 className="brutal-type" style={{ fontSize: '56px', color: '#000000', margin: '40px 0' }}>
                                    GRAND OPENING<br />MASTERY
                                </h2>
                                <p style={{ fontSize: '20px', lineHeight: 1.5, color: '#000000', marginBottom: '40px', fontWeight: 700 }}>
                                    FROM SOFT LAUNCHES TO MEDIA EVENTS, WE ORCHESTRATE RESTAURANT DEBUTS THAT CAPTURE ATTENTION AND BUILD LASTING COMMUNITY CONNECTIONS.
                                </p>
                                <div style={{ borderTop: '6px solid #000000', paddingTop: '40px' }}>
                                    <span style={{ fontSize: '16px', fontWeight: 900, color: '#000000' }}>FEATURED CLIENTS</span>
                                    <p style={{ fontSize: '18px', marginTop: '15px', color: '#000000', fontWeight: 700 }}>REPUBLIQUE • GUELAGUETZA • NIGHT + MARKET</p>
                                </div>
                            </div>

                            <div className="blue-stark" style={{ background: '#6370E7', padding: '80px' }}>
                                <div className="stark-label" style={{ background: '#FFFFFF', color: '#6370E7' }}>AI DISCOVERY</div>
                                <h2 className="brutal-type" style={{ fontSize: '56px', color: '#FFFFFF', margin: '40px 0' }}>
                                    FUTURE-FORWARD<br />TECH STRATEGIES
                                </h2>
                                <p style={{ fontSize: '20px', lineHeight: 1.5, color: '#FFFFFF', marginBottom: '40px', fontWeight: 700 }}>
                                    NAVIGATE THE AI LANDSCAPE WITH CONFIDENCE. WE TRANSLATE EMERGING TECHNOLOGIES INTO PRACTICAL SOLUTIONS FOR MODERN BRANDS.
                                </p>
                                <div style={{ borderTop: '6px solid #FFFFFF', paddingTop: '40px' }}>
                                    <span style={{ fontSize: '16px', fontWeight: 900, color: '#FFFFFF' }}>CAPABILITIES</span>
                                    <p style={{ fontSize: '18px', marginTop: '15px', color: '#FFFFFF', fontWeight: 700 }}>PROMPT ENGINEERING • SEO OPTIMIZATION • TECH STACK</p>
                                </div>
                            </div>
                        </div>

                        {/* Full Width Media Section */}
                        <div className="pink-stark" style={{ background: '#000000', padding: '100px', marginBottom: '100px' }}>
                            <div className="stark-label" style={{ background: '#FF5BF1', color: '#000000' }}>MEDIA BUYING</div>
                            <h2 className="brutal-type" style={{ fontSize: '72px', color: '#FFFFFF', margin: '40px 0', textAlign: 'center' }}>
                                STRATEGIC PLACEMENT<br />EVERYWHERE
                            </h2>
                            <p style={{ fontSize: '22px', lineHeight: 1.4, color: '#FFFFFF', textAlign: 'center', maxWidth: '900px', margin: '0 auto 60px', fontWeight: 700 }}>
                                NETFLIX TO PODCASTS, BILLBOARDS TO SOCIAL FEEDS. WE PLACE YOUR BRAND WHERE CULTURE HAPPENS AND CONVERSATIONS START.
                            </p>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
                                <div style={{ border: '6px solid #FF5BF1', padding: '40px', textAlign: 'center', background: '#FFFFFF' }}>
                                    <h3 style={{ fontWeight: 900, fontSize: '24px', color: '#000000', marginBottom: '15px' }}>STREAMING</h3>
                                    <p style={{ fontSize: '16px', color: '#000000', fontWeight: 700 }}>NETFLIX • HULU • PRIME</p>
                                </div>
                                <div style={{ border: '6px solid #FF5BF1', padding: '40px', textAlign: 'center', background: '#FFFFFF' }}>
                                    <h3 style={{ fontWeight: 900, fontSize: '24px', color: '#000000', marginBottom: '15px' }}>AUDIO</h3>
                                    <p style={{ fontSize: '16px', color: '#000000', fontWeight: 700 }}>PODCASTS • SPOTIFY • RADIO</p>
                                </div>
                                <div style={{ border: '6px solid #FF5BF1', padding: '40px', textAlign: 'center', background: '#FFFFFF' }}>
                                    <h3 style={{ fontWeight: 900, fontSize: '24px', color: '#000000', marginBottom: '15px' }}>DIGITAL</h3>
                                    <p style={{ fontSize: '16px', color: '#000000', fontWeight: 700 }}>SOCIAL • DISPLAY • SEARCH</p>
                                </div>
                                <div style={{ border: '6px solid #FF5BF1', padding: '40px', textAlign: 'center', background: '#FFFFFF' }}>
                                    <h3 style={{ fontWeight: 900, fontSize: '24px', color: '#000000', marginBottom: '15px' }}>TRADITIONAL</h3>
                                    <p style={{ fontSize: '16px', color: '#000000', fontWeight: 700 }}>TV • PRINT • OOH</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Partner Stark */}
                        <div className="stark-border" style={{ background: 'linear-gradient(135deg, #6370E7, #FF5BF1)', padding: '120px', textAlign: 'center', marginBottom: '100px' }}>
                            <h2 className="brutal-type" style={{ fontSize: 'clamp(50px, 8vw, 100px)', color: '#FFFFFF', marginBottom: '40px' }}>
                                GROW WITH GOOGLE<br />PARTNER
                            </h2>
                            <p style={{ fontSize: '24px', color: '#FFFFFF', maxWidth: '700px', margin: '0 auto', fontWeight: 700 }}>
                                ONE DESERVING BRAND RECEIVES OUR COMPLETE SERVICE SUITE AT NO COST, ANNUALLY.
                            </p>
                        </div>

                        {/* Newsletter Stark */}
                        <div className="stark-border" style={{ background: '#FFFFFF', padding: '100px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
                                <div>
                                    <h3 className="brutal-type" style={{ fontSize: '80px', color: '#FF5BF1', lineHeight: 1, marginBottom: '40px' }}>
                                        CURATIONSLA
                                    </h3>
                                    <p style={{ color: '#000000', fontSize: '22px', lineHeight: 1.4, fontWeight: 700 }}>
                                        THE PULSE OF LOS ANGELES CULTURE. WEEKLY DISPATCHES ON WHAT MATTERS IN FOOD, TECH, AND CREATIVE INDUSTRIES.
                                    </p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ background: '#EBF998', color: '#000000', padding: '50px 70px', display: 'inline-block', fontWeight: 900, fontSize: '24px', textTransform: 'uppercase', border: '8px solid #000000' }}>
                                        SUBSCRIBE FOR<br />GOOD VIBES
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

export default StarkBrutalistPage;
