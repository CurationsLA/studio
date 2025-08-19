
'use client';

const MinimalSwissPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700;900&display=swap');
                
                body {
                    font-family: 'Work Sans', sans-serif;
                    background: #FAFAFA;
                    color: #000000;
                }
                
                .swiss-frame {
                    border: 3px solid #000000;
                    box-shadow: 6px 6px 0px #000000;
                }
                
                .color-block-pink { background: #FF5BF1; }
                .color-block-blue { background: #6370E7; }
                .color-block-green { background: #EBF998; }
                
                .grid-system {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 20px;
                }
                
                .overline {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                }

                @media (max-width: 768px) {
                    .grid-system {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
            <div>
                {/* Minimal Header */}
                <header style={{ padding: '40px', background: '#FFFFFF', borderBottom: '3px solid #000000' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                            <div>
                                <div className="overline">Est. 2017 / Los Angeles</div>
                                <h1 style={{ fontSize: '36px', fontWeight: 900, marginTop: '5px' }}>CURATIONS</h1>
                            </div>
                            <nav style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                                <span style={{ fontWeight: 500 }}>Services</span>
                                <span style={{ fontWeight: 500 }}>Work</span>
                                <span style={{ fontWeight: 500 }}>About</span>
                                <span style={{ fontWeight: 500 }}>Newsletter</span>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Statement */}
                <section style={{ padding: '100px 40px', background: '#FFFFFF' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div className="grid-system">
                            <div style={{ gridColumn: 'span 8' }}>
                                <h2 style={{ fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: 900, lineHeight: 0.95 }}>
                                    We Curate<br />
                                    The Heart &<br />
                                    Headlines
                                </h2>
                            </div>
                            <div style={{ gridColumn: 'span 4' }}>
                                <div className="swiss-frame color-block-pink" style={{ padding: '30px', height: '100%' }}>
                                    <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '20px' }}>
                                        Cultural curation for brands that matter.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section style={{ padding: '80px 40px', background: '#FAFAFA' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div className="overline" style={{ marginBottom: '40px' }}>Our Services</div>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            {/* Service 1 */}
                            <div className="swiss-frame" style={{ background: '#FFFFFF' }}>
                                <div className="color-block-pink" style={{ height: '8px' }}></div>
                                <div style={{ padding: '30px' }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '15px' }}>Restaurant Launch</h3>
                                    <ul style={{ listStyle: 'none', fontSize: '14px', lineHeight: 2 }}>
                                        <li>• Grand Openings</li>
                                        <li>• Menu Marketing</li>
                                        <li>• Delivery Strategy</li>
                                        <li>• App Optimization</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="swiss-frame" style={{ background: '#FFFFFF' }}>
                                <div className="color-block-blue" style={{ height: '8px' }}></div>
                                <div style={{ padding: '30px' }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '15px' }}>AI Discovery</h3>
                                    <ul style={{ listStyle: 'none', fontSize: '14px', lineHeight: 2 }}>
                                        <li>• Prompt Engineering</li>
                                        <li>• SEO & Citations</li>
                                        <li>• Tech Stack</li>
                                        <li>• Team Training</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="swiss-frame" style={{ background: '#FFFFFF' }}>
                                <div className="color-block-green" style={{ height: '8px' }}></div>
                                <div style={{ padding: '30px' }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '15px' }}>Media Buying</h3>
                                    <ul style={{ listStyle: 'none', fontSize: '14px', lineHeight: 2 }}>
                                        <li>• Netflix Placement</li>
                                        <li>• Podcast Ads</li>
                                        <li>• Social Media</li>
                                        <li>• Linear TV</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Service 4 */}
                            <div className="swiss-frame" style={{ background: '#FFFFFF' }}>
                                <div style={{ height: '8px', background: 'linear-gradient(90deg, #FF5BF1, #6370E7)' }}></div>
                                <div style={{ padding: '30px' }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '15px' }}>Creative</h3>
                                    <ul style={{ listStyle: 'none', fontSize: '14px', lineHeight: 2 }}>
                                        <li>• Social Strategy</li>
                                        <li>• Content Gaps</li>
                                        <li>• UGC Campaigns</li>
                                        <li>• Collaborations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section style={{ padding: '80px 40px', background: '#000000' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
                            <div>
                                <div style={{ fontSize: '64px', fontWeight: 900, color: '#FF5BF1' }}>8+</div>
                                <div style={{ color: '#FFFFFF', fontSize: '14px', marginTop: '10px' }}>Years of Excellence</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '64px', fontWeight: 900, color: '#6370E7' }}>150+</div>
                                <div style={{ color: '#FFFFFF', fontSize: '14px', marginTop: '10px' }}>Brands Launched</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '64px', fontWeight: 900, color: '#EBF998' }}>25K+</div>
                                <div style={{ color: '#FFFFFF', fontSize: '14px', marginTop: '10px' }}>Newsletter Subscribers</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '64px', fontWeight: 900, color: '#FFFFFF' }}>1</div>
                                <div style={{ color: '#FFFFFF', fontSize: '14px', marginTop: '10px' }}>Google Partner Award</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA */}
                <section style={{ padding: '80px 40px', background: '#FFFFFF' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div className="grid-system">
                            <div style={{ gridColumn: 'span 6' }}>
                                <div className="swiss-frame" style={{ padding: '60px', background: '#FAFAFA' }}>
                                    <div className="overline" style={{ color: '#6370E7' }}>Newsletter</div>
                                    <h2 style={{ fontSize: '48px', fontWeight: 900, margin: '20px 0' }}>CurationsLA</h2>
                                    <p style={{ fontSize: '18px', lineHeight: 1.6, marginBottom: '30px' }}>
                                        Weekly dispatches on LA culture, events, and everything that matters.
                                    </p>
                                    <div className="swiss-frame color-block-green" style={{ padding: '15px 30px', display: 'inline-block' }}>
                                        <span style={{ fontWeight: 700 }}>Subscribe Now</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ gridColumn: 'span 6' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div className="swiss-frame" style={{ padding: '30px', background: '#FFFFFF' }}>
                                        <div className="overline">Latest Issue</div>
                                        <h4 style={{ fontSize: '20px', fontWeight: 700, marginTop: '10px' }}>Friday Vibes: Weekend Essentials</h4>
                                    </div>
                                    <div className="swiss-frame" style={{ padding: '30px', background: '#FFFFFF' }}>
                                        <div className="overline">Coming Monday</div>
                                        <h4 style={{ fontSize: '20px', fontWeight: 700, marginTop: '10px' }}>Events: Dave Matthews, Adam Sandler & More</h4>
                                    </div>
                                    <div className="swiss-frame" style={{ padding: '30px', background: '#FFFFFF' }}>
                                        <div className="overline">Popular</div>
                                        <h4 style={{ fontSize: '20px', fontWeight: 700, marginTop: '10px' }}>Summer Heat: Your August Guide</h4>
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

export default MinimalSwissPage;
