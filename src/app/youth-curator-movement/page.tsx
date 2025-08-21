'use client';

import Link from 'next/link';

const YouthCuratorMovementPage = () => {

    const programSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": "The CuratED Movement by Curations",
        "provider": {
            "@type": "Organization",
            "name": "Curations"
        },
        "description": "A mentorship and career development program for high school juniors and seniors to gain real-world experience in digital media, content creation, and creative marketing. Participants receive paid collaborations, professional guidance, and build a portfolio of online artifacts.",
        "programType": "Mentorship, Internship, Work-Study",
        "educationalCredentialAwarded": "Certificate of Completion, Professional Portfolio",
        "applicationDeadline": "Open Enrollment",
        "offers": {
            "@type": "Offer",
            "category": "Paid Mentorship"
        }
    };

    return (
        <div style={{ fontFamily: "'Poppins', sans-serif", background: '#FDFDFC', minHeight: '100vh' }}>
            <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }}
            />
            
            <style jsx global>{`
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                }
                .highlight-box {
                    background: #EBF998;
                    border: 4px solid black;
                    padding: 2rem;
                    transition: all 0.3s ease;
                }
                .highlight-box:hover {
                    transform: translateY(-5px);
                    box-shadow: 12px 12px 0px black;
                }
                .cta-button {
                    background: #FF5BF1;
                    color: white;
                    padding: 1rem 2rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    border: 4px solid black;
                    text-decoration: none;
                    display: inline-block;
                    transition: all 0.3s ease;
                }
                .cta-button:hover {
                    background: #6370E7;
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 10px 10px 0px black;
                }
                .benefit-card {
                    background: white;
                    border: 4px solid black;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                .step-item {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 2rem;
                }
                .step-number {
                    background: #6370E7;
                    color: white;
                    width: 50px;
                    height: 50px;
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
            <div style={{ background: 'linear-gradient(135deg, #FF5BF1 0%, #6370E7 100%)', padding: '5rem 2rem', color: 'white', textAlign: 'center' }}>
                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', textShadow: '4px 4px 0px black' }}>
                    The CuratED Movement
                </h1>
                <p style={{ fontSize: '1.5rem', maxWidth: '900px', margin: '0 auto 2rem auto', fontWeight: 700 }}>
                    A Curations Initiative to Empower the Next Generation of Digital Creators.
                </p>
                <a href="#apply" className="cta-button">
                    Apply Now
                </a>
            </div>

            <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                
                {/* Mission Section */}
                <section id="mission" style={{ marginBottom: '4rem' }}>
                    <div className="highlight-box">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>
                            Shape the Future of Digital Culture
                        </h2>
                        <p style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
                            The CuratED Movement is a pioneering program by Curations designed for ambitious high school juniors and seniors. It provides a unique bridge between education and the creative industry, offering mentorship, real-world collaborations, and paid opportunities. The initiative is built to equip young creators with the connections, portfolio artifacts, and employability skills necessary to thrive, whether they pursue higher education or enter the workforce directly.
                        </p>
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2rem', textAlign: 'center' }}>
                        Why Join The Movement?
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="benefit-card brutal-box">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>Real-World Experience</h3>
                            <p style={{ lineHeight: 1.8 }}>Engage in tangible projects with real brands. From social media takeovers to content creation for CurationsLA, build a professional portfolio that stands out.</p>
                        </div>
                        <div className="benefit-card brutal-box">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧠</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>Professional Mentorship</h3>
                            <p style={{ lineHeight: 1.8 }}>Receive direct guidance from the creative experts at Curations. Learn to navigate disagreements, craft professional communications, and expand creative ideas.</p>
                        </div>
                        <div className="benefit-card brutal-box">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>Get Paid for Creativity</h3>
                            <p style={{ lineHeight: 1.8 }}>This is not an unpaid internship. Youth Curators earn a significant share of revenue from sponsoring brands, based on a transparent 74/26 split model.</p>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '3rem', textAlign: 'center' }}>
                        The Framework for Success
                    </h2>
                    <div className="brutal-box" style={{ background: 'white', padding: '3rem' }}>
                        <div className="step-item">
                            <div className="step-number">1</div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>Collaborative Partnership</h3>
                                <p style={{ lineHeight: 1.8 }}>The program is founded on a unique model of collaboration between the Youth Curator, their parents/guardians, and the Curations team. Guardians are looped into all major communications, fostering a supportive environment for growth and providing unique insight into the creative process.</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-number" style={{ background: '#FF5BF1' }}>2</div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>Project-Based Learning</h3>
                                <p style={{ lineHeight: 1.8 }}>Youth Curators are matched with brand collaborations that align with their interests. They will contribute to CurationsLA guides, manage social media campaigns, and generate content that builds an SEO-enabled portfolio of their work.</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-number" style={{ background: '#EBF998', color: 'black' }}>3</div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>Transparent Compensation</h3>
                                <p style={{ lineHeight: 1.8 }}>For sponsored projects, compensation is handled with full transparency. Youth Curators receive 74% of the project fee paid by the brand, with all digital paperwork provided for tax purposes, reinforcing our commitment to ethical and fair practices.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Apply Section */}
                <section id="apply">
                    <div className="highlight-box" style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>
                            Become a Youth Curator
                        </h2>
                        <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                            The program is open to high school juniors and seniors. To begin the conversation, interested students should send an email to the address below with the required information.
                        </p>
                        <a href="mailto:go@curatedla.xyz?subject=Youth%20Curator%20Interest" className="cta-button" style={{ background: 'black', color: 'white' }}>
                            Email: go@curatedla.xyz
                        </a>
                        <div className="brutal-box" style={{ background: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'left', display: 'inline-block' }}>
                            <h4 style={{ fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>Email Checklist:</h4>
                            <ul style={{ listStyleType: 'square', paddingLeft: '20px', lineHeight: 1.8 }}>
                                <li>Subject Line: "Youth Curator Interest"</li>
                                <li>Your Name</li>
                                <li>Your Class Rank (Junior or Senior)</li>
                                <li>Parent or Guardian's Full Name</li>
                                <li>Parent or Guardian's Email Address</li>
                                <li>Parent or Guardian's Best Phone Number</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default YouthCuratorMovementPage;
