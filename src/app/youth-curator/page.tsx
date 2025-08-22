'use client';

import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';
import GradientButton from '@/components/ui/GradientButton';

const YouthCuratorMovementPage = () => {
  const [skillMeter, setSkillMeter] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [applicationStep, setApplicationStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSkillMeter(prev => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const youthSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Youth Curator Movement",
    "provider": {
      "@type": "Organization",
      "name": "Curations"
    },
    "description": "Empowering high school juniors and seniors through AI ethics education, digital marketing mentorship, and safe brand partnerships with full parental collaboration.",
    "educationalLevel": "High School",
    "audience": {
      "@type": "EducationalAudience",
      "audienceType": "High School Students"
    }
  };

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", background: '#FDFDFC', minHeight: '100vh' }}>
      <DraftNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(youthSchema) }}
      />

      <style jsx global>{`
        .brutal-box {
          border: 4px solid black;
          box-shadow: 8px 8px 0px black;
          transition: all 0.3s ease;
        }
        .brutal-box:hover {
          box-shadow: 12px 12px 0px #ff69b4;
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
          background: linear-gradient(135deg, #ff69b4 0%, #38b6ff 50%, #ebf998 100%);
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

        .community-quote {
          background: linear-gradient(135deg, #38b6ff 0%, #ebf998 100%);
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
          padding: 3rem;
          margin: 3rem 0;
          border: 4px solid black;
          box-shadow: 12px 12px 0px black;
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center;
          position: relative;
        }

        .ai-ethics-card {
          background: #38b6ff;
          color: white;
          padding: 2rem;
          border: 4px solid black;
          box-shadow: 8px 8px 0px black;
          transition: all 0.3s ease;
        }

        .ai-ethics-card:hover {
          transform: translateY(-8px) rotate(1deg);
          box-shadow: 15px 15px 0px black;
        }

        .parent-portal {
          background: #ebf998;
          color: black;
          padding: 2rem;
          border: 4px solid black;
          box-shadow: 8px 8px 0px black;
          margin: 2rem 0;
        }

        .mentor-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .mentor-card {
          background: white;
          border: 4px solid black;
          padding: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .mentor-card:hover {
          transform: scale(1.05) rotate(-1deg);
          box-shadow: 12px 12px 0px #ff69b4;
        }

        .application-flow {
          background: white;
          border: 4px solid black;
          padding: 2rem;
          margin: 2rem 0;
        }

        .step-indicator {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .step {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 4px solid black;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          background: white;
          transition: all 0.3s ease;
        }

        .step.active {
          background: #ff69b4;
          color: white;
        }

        .step.completed {
          background: #ebf998;
          color: black;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Hero Section */}
      <div className="gradient-overlay-noise" style={{
        background: 'linear-gradient(135deg, #ff69b4 0%, #38b6ff 50%, #ebf998 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 8s ease-in-out infinite',
        padding: '4rem 2rem',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}>
            Youth Curator Movement
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Where high school juniors and seniors learn AI ethics, build real brands, get paid for their creativity,
            and prepare for futures we're helping them create—all with complete parental collaboration and transparency.
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

      {/* Community Philosophy Quote */}
      <div className="community-quote gradient-overlay-noise">
        <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic', margin: 0 }}>
          "We were taught in school to compete against one another, whether it be test scores, classroom placements, or of the like.
          But that is not how a community works. A community builds each other up. And that's what we're doing—building a healthy
          approach to modern solutions."
        </blockquote>
      </div>

      {/* Main Content */}
      <div style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Four Pillars */}
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', textTransform: 'uppercase' }}>
            Four Pillars of Youth Curation
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>

            {/* AI Ethics Education */}
            <div className="ai-ethics-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                AI Ethics & Tools
              </h3>
              <p style={{ lineHeight: 1.6 }}>
                Learn responsible AI usage, ethics frameworks, and cutting-edge tools from industry mentors.
                Understand the nuances of AI in marketing, content creation, and brand strategy.
              </p>
              <ul style={{ marginTop: '1rem' }}>
                <li>• AI prompt engineering for marketing</li>
                <li>• Ethics frameworks for responsible AI</li>
                <li>• Tool evaluation and selection</li>
                <li>• Future of AI in business</li>
              </ul>
            </div>

            {/* Mentor-Led Learning */}
            <div className="brutal-box" style={{ background: '#ff69b4', color: 'white', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                Mentor-Led Takeovers
              </h3>
              <p style={{ lineHeight: 1.6 }}>
                Work directly with local influencers and brand experts on real social media takeovers,
                cultural awareness campaigns, and digital platform strategies.
              </p>
              <ul style={{ marginTop: '1rem' }}>
                <li>• Social media takeover opportunities</li>
                <li>• Cultural-awareness branding projects</li>
                <li>• CurationsLA Newsletter collaborations</li>
                <li>• Direct mentorship relationships</li>
              </ul>
            </div>

            {/* Economic Opportunity */}
            <div className="brutal-box" style={{ background: '#ebf998', color: 'black', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                Real Economic Impact
              </h3>
              <p style={{ lineHeight: 1.6 }}>
                Youth get paid for real work. Online artifacts are created. College becomes an option.
                Job opportunities and digital contacts are built systematically.
              </p>
              <ul style={{ marginTop: '1rem' }}>
                <li>• Transparent 74/26 revenue split</li>
                <li>• Portfolio building for college apps</li>
                <li>• Professional network development</li>
                <li>• Digital tax documentation</li>
              </ul>
            </div>

            {/* Family Collaboration */}
            <div className="brutal-box" style={{ background: 'white', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                First-of-its-Kind Family Engagement
              </h3>
              <p style={{ lineHeight: 1.6 }}>
                Parents and guardians understand how their youth solve real-world issues with real-world brands,
                providing feedback and guidance throughout the process.
              </p>
              <ul style={{ marginTop: '1rem' }}>
                <li>• Complete transparency in all communications</li>
                <li>• Parent/guardian involvement in every project</li>
                <li>• Family feedback integration</li>
                <li>• Creative process understanding</li>
              </ul>
            </div>
          </div>

          {/* Parent Portal */}
          <div className="parent-portal">
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
              🛡️ Parent & Guardian Portal
            </h3>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Complete transparency and collaboration. Every email, every conversation, every collaboration
              includes parents and guardians so families can actively engage together.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div style={{ background: 'white', padding: '1rem', border: '2px solid black' }}>
                <strong>Email Loop-In</strong><br />
                Parents on every business communication
              </div>
              <div style={{ background: 'white', padding: '1rem', border: '2px solid black' }}>
                <strong>Project Dashboard</strong><br />
                Real-time project and payment tracking
              </div>
              <div style={{ background: 'white', padding: '1rem', border: '2px solid black' }}>
                <strong>Skill Development</strong><br />
                Watch your youth master email crafting, negotiation, conflict resolution
              </div>
              <div style={{ background: 'white', padding: '1rem', border: '2px solid black' }}>
                <strong>Safety Protocols</strong><br />
                Verified brand partnerships with clear boundaries
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="application-flow">
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase', textAlign: 'center' }}>
              Join the Movement - Application Process
            </h3>

            <div className="step-indicator">
              <div className={`step ${applicationStep >= 1 ? 'completed' : ''}`}>1</div>
              <div className={`step ${applicationStep >= 2 ? 'active' : ''}`}>2</div>
              <div className={`step ${applicationStep >= 3 ? '' : ''}`}>3</div>
              <div className={`step ${applicationStep >= 4 ? '' : ''}`}>4</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>1. STUDENT APPLICATION</h4>
                <p>High school junior or senior submits interest with class rank and creative portfolio samples.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>2. PARENT VERIFICATION</h4>
                <p>Parent/guardian email and phone verification. Family alignment meeting scheduled.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>3. SKILLS ASSESSMENT</h4>
                <p>AI aptitude, creative abilities, and communication skills evaluation with mentor matching.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>4. PROGRAM LAUNCH</h4>
                <p>First project assignment with full family collaboration and mentor guidance.</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                <strong>Requirements:</strong> High school junior or senior, parent/guardian email,
                parent/guardian phone number, creative portfolio or interest samples
              </p>
            </div>
          </div>

          {/* Newsletter Integration */}
          <div style={{ background: 'black', color: 'white', padding: '2rem', border: '4px solid black', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#ebf998' }}>
              📬 Newsletter Philosophy
            </h3>
            <p style={{ fontSize: '1.25rem', fontStyle: 'italic', textAlign: 'center' }}>
              "The world is so small. And email is so big."
            </p>
            <p style={{ marginTop: '1rem', lineHeight: 1.6 }}>
              Youth Curators contribute to the CurationsLA Newsletter, learning professional writing,
              audience development, and the power of owned media in building lasting brand relationships.
            </p>
          </div>

          {/* Final CTA */}
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
              Ready to Build the Future Together?
            </h3>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Applications open for our February 2024 pilot program. Youth, parents, mentors, and brands—
              let's build something meaningful together.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:youth@curations.cc?subject=Youth Curator Application - Student">
                <GradientButton gradient="youth">
                  STUDENT APPLICATION
                </GradientButton>
              </a>
              <a href="mailto:youth@curations.cc?subject=Youth Curator Application - Parent/Guardian">
                <GradientButton gradient="youth">
                  PARENT INQUIRY
                </GradientButton>
              </a>
              <a href="mailto:youth@curations.cc?subject=Youth Curator Program - Brand Partner">
                <GradientButton gradient="youth">
                  BRAND PARTNERSHIPS
                </GradientButton>
              </a>
            </div>

            <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
              <p>Questions? Email us at <strong>youth@curations.cc</strong> or call <strong>747-200-5740</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthCuratorMovementPage;