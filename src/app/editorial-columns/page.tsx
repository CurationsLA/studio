
'use client';

const EditorialColumnsPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;900&family=Archivo+Narrow:wght@700&display=swap');
                
                body {
                    font-family: 'Archivo', sans-serif;
                    background: #FFFFFF;
                    color: #000000;
                    line-height: 1.6;
                }
                
                .frame-border {
                    border: 4px solid #000000;
                    box-shadow: 8px 8px 0px #FF5BF1;
                }
                
                .highlight-box {
                    background: linear-gradient(to bottom, transparent 50%, #EBF998 50%);
                    display: inline;
                    padding: 0 8px;
                }
                
                .column-rule {
                    column-count: 2;
                    column-gap: 40px;
                    column-rule: 3px solid #000000;
                }
                
                @media (max-width: 768px) {
                    .column-rule {
                        column-count: 1;
                    }
                }
                
                .dropcap {
                    float: left;
                    font-size: 84px;
                    line-height: 0.8;
                    font-weight: 900;
                    margin-right: 8px;
                    margin-top: 8px;
                    color: #FF5BF1;
                }
                
                .sidebar-item {
                    padding: 20px;
                    margin-bottom: 20px;
                    border-left: 6px solid #6370E7;
                    background: #F8F8F8;
                }
            `}</style>
            <div>
                {/* Newsletter Header */}
                <header style={{ borderBottom: '8px solid #000000', padding: '30px 0', background: '#FFFFFF' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <div>
                                <h1 style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: '18px', fontWeight: 700, letterSpacing: '0.3em' }}>CURATIONS</h1>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '12px', color: '#666' }}>VOL. 074 | AUGUST 2025</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '12px', fontWeight: 600 }}>LOS ANGELES | WORLDWIDE</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Headline */}
                <section style={{ padding: '60px 40px', background: '#FFFFFF' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div className="frame-border" style={{ padding: '60px', background: '#FFFFFF' }}>
                            <h1 style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 900, lineHeight: 0.9, textAlign: 'center' }}>
                                WE CURATE THE<br />
                                <span className="highlight-box">HEART</span> & <span className="highlight-box">HEADLINES</span>
                            </h1>
                            <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                                Cultural Curation for Modern Brands • Restaurant Launches • AI Discovery • Media Buying • Creative Strategy
                            </p>
                        </div>
                    </div>
                </section>

                {/* Editorial Content */}
                <section style={{ padding: '60px 40px' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px' }}>
                            {/* Main Content */}
                            <div>
                                {/* Lead Article */}
                                <article style={{ marginBottom: '60px' }}>
                                    <div style={{ padding: '8px 16px', background: '#FF5BF1', color: '#FFFFFF', display: 'inline-block', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', marginBottom: '20px' }}>
                                        FEATURE STORY
                                    </div>
                                    <h2 style={{ fontSize: '48px', fontWeight: 900, lineHeight: 1, marginBottom: '30px' }}>
                                        Building Cultural Resonance in the Digital Age
                                    </h2>
                                    <div className="column-rule" style={{ fontSize: '16px' }}>
                                        <p><span className="dropcap">I</span>n today's fragmented media landscape, capturing attention isn't enough—brands need to create genuine cultural moments that resonate with their communities. At CURATIONS, we've spent eight years perfecting the art of cultural curation, transforming brand narratives into movements that matter.</p>
                                        
                                        <p style={{ marginTop: '20px' }}>Our approach begins with understanding the intersection of local culture and global trends. Whether launching a new restaurant in Los Angeles or developing an AI-powered discovery strategy, we focus on creating authentic connections that drive both engagement and impact.</p>
                                        
                                        <p style={{ marginTop: '20px' }}>From strategic media placements on Netflix to crafting viral social campaigns, our full-stack digital capabilities ensure your brand appears exactly where culture happens. We don't just buy media—we curate experiences that embed your brand into the cultural conversation.</p>
                                    </div>
                                </article>

                                {/* Services Grid */}
                                <div style={{ borderTop: '4px solid #000000', paddingTop: '40px' }}>
                                    <h3 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '30px' }}>Core Capabilities</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                                        <div className="frame-border" style={{ padding: '30px', background: '#F8F8F8' }}>
                                            <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#FF5BF1' }}>Restaurant & Hospitality</h4>
                                            <p style={{ marginTop: '15px' }}>Grand openings, menu marketing, third-party app optimization, delivery strategy.</p>
                                        </div>
                                        <div className="frame-border" style={{ padding: '30px', background: '#F8F8F8' }}>
                                            <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#6370E7' }}>AI Discovery</h4>
                                            <p style={{ marginTop: '15px' }}>Prompt engineering, SEO optimization, tech stack development, team workshops.</p>
                                        </div>
                                        <div className="frame-border" style={{ padding: '30px', background: '#F8F8F8' }}>
                                            <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#EBF998', textShadow: '1px 1px 0 #000' }}>Media Buying</h4>
                                            <p style={{ marginTop: '15px' }}>Netflix placement, podcast advertising, linear TV, social media campaigns.</p>
                                        </div>
                                        <div className="frame-border" style={{ padding: '30px', background: '#F8F8F8' }}>
                                            <h4 style={{ fontSize: '24px', fontWeight: 700 }}>Creative Collaborations</h4>
                                            <p style={{ marginTop: '15px' }}>Social strategy, content gaps, UGC campaigns, influencer partnerships.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside>
                                {/* About Box */}
                                <div className="frame-border" style={{ padding: '30px', background: '#000000', color: '#FFFFFF', marginBottom: '40px' }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#FF5BF1', marginBottom: '15px' }}>ABOUT CURATIONS</h3>
                                    <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                                        Since 2017, we've been the cultural architects behind LA's most talked-about brand launches and campaigns.
                                    </p>
                                    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #FF5BF1' }}>
                                        <p style={{ fontSize: '12px', color: '#EBF998' }}>🏆 GROW WITH GOOGLE PARTNER</p>
                                    </div>
                                </div>

                                {/* Quick Links */}
                                <div>
                                    <h4 style={{ fontSize: '18px', fontWeight: 900, marginBottom: '20px', paddingBottom: '10px', borderBottom: '3px solid #000000' }}>QUICK LINKS</h4>
                                    <div className="sidebar-item">
                                        <h5 style={{ fontWeight: 700, color: '#6370E7' }}>CurationsLA Newsletter</h5>
                                        <p style={{ fontSize: '14px', marginTop: '8px' }}>25,000+ subscribers get weekly LA culture updates</p>
                                    </div>
                                    <div className="sidebar-item">
                                        <h5 style={{ fontWeight: 700, color: '#6370E7' }}>Recent Work</h5>
                                        <p style={{ fontSize: '14px', marginTop: '8px' }}>View our portfolio of cultural case studies.</p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default EditorialColumnsPage;
