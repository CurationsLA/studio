
'use client';

const BoldGridSystemPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
                
                body {
                    font-family: 'Inter', sans-serif;
                    background: #000000;
                    color: #FFFFFF;
                }
                
                .grid-border {
                    border: 8px solid #FFFFFF;
                    box-shadow: 16px 16px 0px #FF5BF1;
                }
                
                .pink-grid {
                    border: 8px solid #FF5BF1;
                    box-shadow: 16px 16px 0px #FFFFFF;
                }
                
                .blue-grid {
                    border: 8px solid #6370E7;
                    box-shadow: 16px 16px 0px #EBF998;
                }
                
                .green-grid {
                    border: 8px solid #EBF998;
                    box-shadow: 16px 16px 0px #6370E7;
                }
                
                .bold-type {
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: -0.02em;
                    line-height: 0.9;
                }
                
                .label {
                    display: inline-block;
                    padding: 12px 24px;
                    background: #FFFFFF;
                    color: #000000;
                    font-size: 12px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
            `}</style>
            <div>
                {/* Top Bar */}
                <header style={{ background: '#FFFFFF', padding: '20px 0', borderBottom: '8px solid #FF5BF1' }}>
                    <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 40px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ color: '#000000', fontSize: '14px', fontWeight: 900 }}>
                                CURATIONS
                            </div>
                            <div style={{ color: '#FF5BF1', fontSize: '14px', fontWeight: 900 }}>
                                ISSUE 074 • AUGUST 2025
                            </div>
                            <div style={{ color: '#000000', fontSize: '14px', fontWeight: 900 }}>
                                LOS ANGELES
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Grid */}
                <section style={{ padding: '60px 40px' }}>
                    <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                        {/* Hero Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', marginBottom: '60px' }}>
                            <div className="grid-border" style={{ background: '#FF5BF1', padding: '80px' }}>
                                <div className="label">COVER STORY</div>
                                <h1 className="bold-type" style={{ fontSize: 'clamp(50px, 8vw, 120px)', color: '#FFFFFF', margin: '30px 0' }}>
                                    WE CURATE<br/>CULTURAL<br/>MOMENTS
                                </h1>
                                <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#FFFFFF', maxWidth: '500px' }}>
                                    Strategic brand narratives that connect communities and drive meaningful engagement.
                                </p>
                            </div>
                            
                            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '40px' }}>
                                <div className="blue-grid" style={{ background: '#6370E7', padding: '40px' }}>
                                    <div className="label" style={{ background: '#000000', color: '#FFFFFF' }}>AI DISCOVERY</div>
                                    <h2 style={{ fontSize: '24px', fontWeight: 900, margin: '20px 0', color: '#FFFFFF' }}>
                                        FUTURE TECH<br/>SOLUTIONS
                                    </h2>
                                </div>
                                
                                <div className="green-grid" style={{ background: '#EBF998', padding: '40px' }}>
                                    <div className="label" style={{ background: '#000000', color: '#EBF998' }}>RESTAURANT</div>
                                    <h2 style={{ fontSize: '24px', fontWeight: 900, margin: '20px 0', color: '#000000' }}>
                                        GRAND OPENING<br/>EXCELLENCE
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Services Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '60px' }}>
                            <article className="pink-grid" style={{ background: '#000000', padding: '50px' }}>
                                <div className="label" style={{ background: '#FF5BF1', color: '#FFFFFF' }}>MEDIA BUYING</div>
                                <h3 style={{ fontSize: '32px', fontWeight: 900, margin: '25px 0', lineHeight: 1, color: '#FFFFFF' }}>
                                    STRATEGIC PLACEMENT
                                </h3>
                                <p style={{ fontSize: '16px', lineHeight: 1.5, color: '#FFFFFF', marginBottom: '25px' }}>
                                    Netflix to podcasts. We place brands where culture happens.
                                </p>
                                <div style={{ borderTop: '4px solid #FF5BF1', paddingTop: '25px' }}>
                                    <span style={{ fontSize: '12px', fontWeight: 900, color: '#FF5BF1' }}>CHANNELS</span>
                                    <p style={{ fontSize: '14px', marginTop: '10px', color: '#FFFFFF' }}>Streaming • Audio • Digital</p>
                                </div>
                            </article>

                            <article className="blue-grid" style={{ background: '#FFFFFF', padding: '50px' }}>
                                <div className="label" style={{ background: '#6370E7', color: '#FFFFFF' }}>COMMUNICATIONS</div>
                                <h3 style={{ fontSize: '32px', fontWeight: 900, margin: '25px 0', lineHeight: 1, color: '#000000' }}>
                                    EXECUTIVE BRANDING
                                </h3>
                                <p style={{ fontSize: '16px', lineHeight: 1.5, color: '#000000', marginBottom: '25px' }}>
                                    Corporate communications that build thought leadership.
                                </p>
                                <div style={{ borderTop: '4px solid #6370E7', paddingTop: '25px' }}>
                                    <span style={{ fontSize: '12px', fontWeight: 900, color: '#6370E7' }}>SERVICES</span>
                                    <p style={{ fontSize: '14px', marginTop: '10px', color: '#000000' }}>PR • Content • Strategy</p>
                                </div>
                            </article>

                            <article className="green-grid" style={{ background: '#000000', padding: '50px' }}>
                                <div className="label" style={{ background: '#EBF998', color: '#000000' }}>CREATIVE</div>
                                <h3 style={{ fontSize: '32px', fontWeight: 900, margin: '25px 0', lineHeight: 1, color: '#FFFFFF' }}>
                                    SOCIAL STRATEGY
                                </h3>
                                <p style={{ fontSize: '16px', lineHeight: 1.5, color: '#FFFFFF', marginBottom: '25px' }}>
                                    Content that converts and communities that engage.
                                </p>
                                <div style={{ borderTop: '4px solid #EBF998', paddingTop: '25px' }}>
                                    <span style={{ fontSize: '12px', fontWeight: 900, color: '#EBF998' }}>FOCUS</span>
                                    <p style={{ fontSize: '14px', marginTop: '10px', color: '#FFFFFF' }}>UGC • Campaigns • Growth</p>
                                </div>
                            </article>
                        </div>

                        {/* Wide Feature */}
                        <div className="grid-border" style={{ background: 'linear-gradient(90deg, #6370E7, #FF5BF1)', padding: '80px', textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', color: '#FFFFFF', fontWeight: 900, marginBottom: '30px' }}>
                                GROW WITH GOOGLE PARTNER
                            </h2>
                            <p style={{ fontSize: '20px', color: '#FFFFFF', maxWidth: '600px', margin: '0 auto' }}>
                                One deserving brand receives our complete service suite at no cost, annually.
                            </p>
                        </div>

                        {/* Newsletter Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                            <div className="pink-grid" style={{ background: '#FFFFFF', padding: '60px' }}>
                                <h3 style={{ fontSize: '48px', fontWeight: 900, color: '#FF5BF1', lineHeight: 1, marginBottom: '30px' }}>
                                    CURATIONSLA
                                </h3>
                                <p style={{ color: '#000000', fontSize: '18px', lineHeight: 1.6 }}>
                                    The pulse of Los Angeles culture. Weekly dispatches on what matters in food, tech, and creative industries.
                                </p>
                            </div>
                            
                            <div className="grid-border" style={{ background: '#000000', padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ background: '#EBF998', color: '#000000', padding: '30px 50px', fontWeight: 900, fontSize: '20px', textTransform: 'uppercase', textAlign: 'center' }}>
                                    Subscribe for<br/>Good Vibes
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BoldGridSystemPage;
