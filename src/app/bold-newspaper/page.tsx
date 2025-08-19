
'use client';

const BoldNewspaperPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Merriweather:wght@300;400&display=swap');
                
                body {
                    font-family: 'Merriweather', serif;
                    background: #FFFFFF;
                    color: #000000;
                }
                
                h1, h2, h3, h4 {
                    font-family: 'Oswald', sans-serif;
                    text-transform: uppercase;
                }
                
                .newspaper-border {
                    border: 5px double #000000;
                    box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
                }
                
                .thick-underline {
                    border-bottom: 8px solid #000000;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                }
                
                .dateline {
                    font-family: 'Oswald', sans-serif;
                    font-size: 12px;
                    letter-spacing: 0.15em;
                    font-weight: 500;
                }
                
                .article-columns {
                    columns: 3;
                    column-gap: 30px;
                    column-rule: 1px solid #CCCCCC;
                }
                
                @media (max-width: 968px) {
                    .article-columns {
                        columns: 2;
                    }
                }
                
                @media (max-width: 640px) {
                    .article-columns {
                        columns: 1;
                    }
                }
                
                .highlight-pink { background: #FF5BF1; color: #FFFFFF; padding: 2px 8px; }
                .highlight-blue { background: #6370E7; color: #FFFFFF; padding: 2px 8px; }
                .highlight-green { background: #EBF998; color: #000000; padding: 2px 8px; }
            `}</style>
            <div>
                {/* Newspaper Header */}
                <header style={{ padding: '20px 40px', borderBottom: '10px solid #000000' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', padding: '20px 0' }}>
                            <div className="dateline">AUGUST 2025 | VOL. 074 | LOS ANGELES & WORLDWIDE</div>
                            <h1 style={{ fontSize: 'clamp(60px, 10vw, 120px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '20px 0' }}>
                                THE CURATIONS TIMES
                            </h1>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                <span className="highlight-pink" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>CULTURE</span>
                                <span className="highlight-blue" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>DIGITAL</span>
                                <span className="highlight-green" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>CREATIVE</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Headline */}
                <section style={{ padding: '60px 40px' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div className="newspaper-border" style={{ padding: '40px', background: 'linear-gradient(to right, #FF5BF1 0%, #FF5BF1 33%, #6370E7 33%, #6370E7 66%, #EBF998 66%, #EBF998 100%)', marginBottom: '40px' }}>
                            <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)', textAlign: 'center', color: '#FFFFFF', textShadow: '3px 3px 0 #000000' }}>
                                WE CURATE THE HEART & HEADLINES
                            </h2>
                        </div>

                        {/* Lead Story */}
                        <article style={{ marginBottom: '60px' }}>
                            <h3 className="thick-underline" style={{ fontSize: '36px' }}>Breaking: Cultural Curation Transforms Brand Narratives</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
                                <div>
                                    <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                                        <span style={{ fontSize: '24px', fontWeight: 700 }}>LOS ANGELES —</span> In an era of fragmented attention and cultural complexity, CURATIONS has emerged as the definitive voice in brand cultural strategy, bridging the gap between corporate ambition and authentic community connection.
                                    </p>
                                    <div className="article-columns" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                                        <p style={{ marginBottom: '15px' }}>
                                            Since 2017, the agency has orchestrated over 150 brand launches, from restaurant grand openings to AI-powered marketing campaigns, each designed to create genuine cultural moments rather than mere advertising impressions.
                                        </p>
                                        <p style={{ marginBottom: '15px' }}>
                                            "We don't just reach audiences," explains the team. "We create the conversations that shape culture." This philosophy has driven successful campaigns across Netflix, podcast networks, and social platforms, positioning brands at the intersection of relevance and resonance.
                                        </p>
                                        <p style={{ marginBottom: '15px' }}>
                                            The agency's unique approach combines hyperlocal Los Angeles insights with global digital strategies, creating campaigns that feel both intimate and expansive. Their restaurant launch division has become the go-to for hospitality brands seeking to make an impact.
                                        </p>
                                    </div>
                                </div>
                                <aside>
                                    <div className="newspaper-border" style={{ padding: '30px', background: '#F5F5F5' }}>
                                        <h4 style={{ fontSize: '20px', marginBottom: '20px' }}>Services at a Glance</h4>
                                        <ul style={{ listStyle: 'none', fontFamily: 'Oswald, sans-serif', fontSize: '14px' }}>
                                            <li style={{ padding: '10px 0', borderBottom: '1px solid #CCC' }}>◆ RESTAURANT LAUNCHES</li>
                                            <li style={{ padding: '10px 0', borderBottom: '1px solid #CCC' }}>◆ AI DISCOVERY</li>
                                            <li style={{ padding: '10px 0', borderBottom: '1px solid #CCC' }}>◆ MEDIA BUYING</li>
                                            <li style={{ padding: '10px 0', borderBottom: '1px solid #CCC' }}>◆ CREATIVE COLLABS</li>
                                            <li style={{ padding: '10px 0', borderBottom: '1px solid #CCC' }}>◆ COMMUNICATIONS</li>
                                            <li style={{ padding: '10px 0' }}>◆ SEO & DISCOVERY</li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </article>

                        {/* Section Break */}
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <span style={{ fontSize: '24px' }}>◆ ◆ ◆</span>
                        </div>

                        {/* Secondary Stories Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
                            <article className="newspaper-border" style={{ padding: '30px' }}>
                                <div className="dateline highlight-pink" style={{ display: 'inline-block', marginBottom: '15px' }}>SPECIAL REPORT</div>
                                <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>Google Partnership Transforms Local Business</h3>
                                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                                    As an official Grow with Google Partner, CURATIONS annually selects one deserving brand for a complete pro-bono service package, demonstrating commitment to community growth and digital equity.
                                </p>
                            </article>

                            <article className="newspaper-border" style={{ padding: '30px' }}>
                                <div className="dateline highlight-blue" style={{ display: 'inline-block', marginBottom: '15px' }}>TECHNOLOGY</div>
                                <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>AI Revolution Meets Marketing Strategy</h3>
                                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                                    From prompt engineering to SEO optimization, the agency's AI Discovery division helps brands navigate the rapidly evolving landscape of artificial intelligence and machine learning applications.
                                </p>
                            </article>

                            <article className="newspaper-border" style={{ padding: '30px' }}>
                                <div className="dateline highlight-green" style={{ display: 'inline-block', marginBottom: '15px' }}>MEDIA</div>
                                <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>Strategic Placements Drive Cultural Impact</h3>
                                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                                    Netflix, podcasts, billboards, social feeds—CURATIONS' media buying expertise ensures brands appear exactly where culture happens, with precision targeting and measurable impact.
                                </p>
                            </article>
                        </div>

                        {/* Newsletter Section */}
                        <div style={{ background: '#000000', padding: '60px', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '48px', color: '#FF5BF1', marginBottom: '20px' }}>CURATIONSLA NEWSLETTER</h2>
                            <p style={{ color: '#FFFFFF', fontSize: '18px', maxWidth: '600px', margin: '0 auto 30px' }}>
                                Join 25,000+ subscribers for weekly dispatches on LA culture, events, and the stories shaping our city.
                            </p>
                            <div style={{ display: 'inline-block', padding: '20px 60px', background: '#EBF998', color: '#000000', fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '18px' }}>
                                SUBSCRIBE TODAY
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer style={{ padding: '40px', borderTop: '8px solid #000000', background: '#F5F5F5' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <p className="dateline">© 2025 CURATIONS | EST. 2017 | CURATIONSLA.COM</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default BoldNewspaperPage;
