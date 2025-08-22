
'use client';

import { useState, useEffect } from 'react';
import DraftNav from '@/components/ui/draft-nav';

const OutboxPage = () => {
    const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="brutal-box mb-4 bg-white">
                <button
                    className="w-full p-4 text-left font-bold text-lg flex justify-between items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {question}
                    <span>{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && (
                    <div className="p-4 border-t-4 border-black">
                        <p>{answer}</p>
                    </div>
                )}
            </div>
        );
    };

    const OutboxMeter = () => {
      const [progress, setProgress] = useState(0);
      const [text, setText] = useState('CONNECTING');

      useEffect(() => {
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev < 100) {
              if (prev < 25) setText('CONNECTING');
              else if (prev < 50) setText('PARTNERSHIPS');
              else if (prev < 75) setText('COLLABORATING');
              else if (prev < 95) setText('DELIVERING');
              else setText('100% CONNECTED');
              return prev + 2;
            }
            return 100;
          });
        }, 50);
        return () => clearInterval(interval);
      }, []);

      return (
        <div className="mx-auto max-w-2xl my-12">
          <div className="rounded-2xl bg-black/80 backdrop-blur-sm border border-white/20 p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Partnership Portal</h3>
              <p className="text-white/80">Building connections, one collaboration at a time</p>
            </div>
            <div className="relative">
              <div className="flex justify-between text-sm text-white/60 mb-2">
                <span>Partnership Status</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 mb-4 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-100 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
              <div className="text-center">
                <span className="text-lg font-bold text-white tracking-wider">{text}</span>
              </div>
            </div>
          </div>
        </div>
      );
    };

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
                 .form-input {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border: 4px solid black;
                    margin-bottom: 1rem;
                    font-family: 'JetBrains Mono', monospace;
                }
                .form-input:focus {
                    outline: none;
                    box-shadow: 4px 4px 0px hsl(var(--accent));
                }
                .submit-button {
                    background: hsl(var(--accent));
                    color: white;
                    padding: 1rem 2rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    border: 4px solid black;
                    width: 100%;
                }
                 .drop-zone {
                    border: 4px dashed black;
                    padding: 3rem;
                    text-align: center;
                    background: #f0f0f0;
                    margin-top: 1rem;
                }
            `}</style>

            {/* Hero Section */}
            <div className="gradient-overlay-noise" style={{ background: 'var(--gradient-outbox)', padding: '4rem 2rem', color: 'black', backgroundSize: '200% 200%', animation: 'gradient-shift 12s ease-in-out infinite' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📤</div>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', textShadow: '3px 3px 0px rgba(255,255,255,0.5)' }}>
                        OUTBOX
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                        Your hub for collaboration, inquiries, and partnerships. Find answers, submit proposals, and connect with the CURATIONS ecosystem.
                    </p>
                </div>
            </div>

            <OutboxMeter />

            {/* Main Content */}
            <div style={{ padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '4rem' }}>
                    
                    {/* FAQ Column */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                        <FAQItem 
                            question="What are your service costs?"
                            answer="We provide custom quotes based on the scope of each project. We believe in creating value and tailor our partnerships to meet your specific goals and budget. Contact us to discuss your project."
                        />
                        <FAQItem 
                            question="What is the Youth Curator Movement?"
                            answer="The Youth Curator Movement is our initiative to empower the next generation of creative talent. We provide mentorship, resources, and opportunities for young creators. Contact youth@curations.cc to learn more."
                        />
                         <FAQItem 
                            question="How does the AI Discovery process work?"
                            answer="Our AI Discovery process begins with a deep dive into your business to identify opportunities for AI integration. We then develop custom strategies, recommend tech stacks, and can help with implementation and team training."
                        />
                    </div>

                    {/* Partner Portal Column */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2rem' }}>Partner Portal</h2>
                        
                        {/* Affiliate Program */}
                        <div className="brutal-box bg-white p-6 mb-8">
                            <h3 className="text-2xl font-bold uppercase mb-4">Affiliate Program</h3>
                            <p className="mb-4">Partner with CURATIONS and get access to our network, platform integrations, and co-marketing opportunities.</p>
                            <input className="form-input" type="text" placeholder="Company Name" />
                            <input className="form-input" type="email" placeholder="Contact Email" />
                            <textarea className="form-input" rows={4} placeholder="Tell us about your company..."></textarea>
                            <button className="submit-button">Submit Partnership Pitch</button>
                        </div>

                        {/* Media Kit Dropbox */}
                        <div className="brutal-box bg-white p-6 mb-8">
                            <h3 className="text-2xl font-bold uppercase mb-4">Media Kit Dropbox</h3>
                             <p className="mb-4">Submit media kits, ad rate cards, and sponsorship packages for consideration in our campaigns and newsletters.</p>
                            <div className="drop-zone">
                                <p className="font-bold">DRAG & DROP FILES HERE</p>
                                <p className="text-sm">(PDF, PPT, ZIP)</p>
                            </div>
                        </div>

                        {/* Agency Collaboration */}
                         <div className="brutal-box bg-white p-6">
                            <h3 className="text-2xl font-bold uppercase mb-4">Agency Collaboration</h3>
                             <p className="mb-4">We believe in collaboration over competition. Submit your agency's capabilities for potential white-label projects or overflow work.</p>
                             <input className="form-input" type="text" placeholder="Agency Name" />
                             <input className="form-input" type="text" placeholder="Website URL" />
                             <button className="submit-button">Connect with Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutboxPage;
