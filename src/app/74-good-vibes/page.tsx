
'use client';

import { useEffect, useState } from 'react';

interface FeedItem {
    title: string;
    pubDate: string;
    link: string;
    description: string;
}

const GoodVibes74Page = () => {
    const [feed, setFeed] = useState<FeedItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

     useEffect(() => {
        async function loadFeed() {
          try {
            const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://rss.beehiiv.com/feeds/cbPjFUPGbR.xml');
            const data = await response.json();
    
            if (!data.items) {
              throw new Error('No items found');
            }
    
            const items = data.items.map((item: any) => ({
                ...item,
                link: item.link.replace('.cc', '.org')
            }))
    
            setFeed(items.slice(0, 5));
          } catch (err) {
            setError('Failed to load articles.');
            console.error('RSS Load Error:', err);
          } finally {
            setLoading(false);
          }
        }
    
        loadFeed();
      }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }).toUpperCase();
      }


    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700;900&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
                }
                
                .brutal-box {
                    border: 4px solid black;
                    box-shadow: 8px 8px 0px black;
                }

                .magazine-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 1.5rem;
                }
                
                .span-6 { grid-column: span 6; }
                .span-8 { grid-column: span 8; }
                .span-4 { grid-column: span 4; }
                .span-3 { grid-column: span 3; }
                .span-12 { grid-column: span 12; }

                @media (max-width: 768px) {
                    .span-6, .span-8, .span-4, .span-3, .span-12 { grid-column: span 12; }
                }

                .layer-1 { z-index: 10; }
                .layer-2 { z-index: 20; }
                .layer-3 { z-index: 30; }

                .neon-glow-pink {
                    box-shadow: 0 0 40px rgba(255, 91, 241, 0.6),
                                inset 0 0 40px rgba(255, 91, 241, 0.1);
                }

                .glitch { position: relative; font-weight: 900; letter-spacing:-0.02em; }
                .glitch::before, .glitch::after {
                    content: attr(data-text); position: absolute; inset: 0; pointer-events:none;
                }
                .glitch::before { transform: translateX(2px); text-shadow: -2px 0 #FF5BF1; animation: g1 1.2s infinite linear alternate; }
                .glitch::after { transform: translateX(-2px); text-shadow: 2px 0 #6370E7; animation: g2 1.4s infinite linear alternate; }
                @keyframes g1 { 0%{clip-path: inset(0 0 40% 0);} 50%{clip-path: inset(60% 0 0 0);} 100%{clip-path: inset(0 0 40% 0);} }
                @keyframes g2 { 0%{clip-path: inset(60% 0 0 0);} 50%{clip-path: inset(0 0 55% 0);} 100%{clip-path: inset(60% 0 0 0);} }
            `}</style>
            <div className="bg-white text-black">
                {/* Refined Top Bar */}
                <div className="fixed top-0 w-full z-50">
                    <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
                        <div className="px-8 py-3">
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-black">[CURATIONS]</div>
                                <div className="hidden md:flex items-center gap-8">
                                    <span className="text-sm text-gray-600">Los Angeles × Worldwide</span>
                                    <span className="text-sm font-medium">Since 2017</span>
                                    <button className="px-4 py-2 bg-black text-white text-sm font-bold hover:bg-[#FF5BF1] transition">
                                        START PROJECT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Grid Layout */}
                <section id="home" className="pt-16 px-4 md:px-8 bg-white">
                    <div className="magazine-grid items-center min-h-[80vh]">
                        {/* Main Title Block */}
                        <div className="span-8 z-10">
                            <div className="bg-black text-white p-4 brutal-box">
                                <h1 className="glitch text-[5.75rem] md:text-[5.75rem] lg:text-[6.5rem] leading-none" data-text="[CURATIONS]">[CURATIONS]</h1>
                            </div>
                             <div className="mt-8 brutal-box bg-black text-white p-4">
                                <h2 className="text-2xl md:text-3xl font-black uppercase text-center">
                                    We <span className="text-[#FF5BF1]">CURATE</span> the <span className="text-[#EBF998]">HEART</span> and <span className="text-[#6370E7]">HEADLINES</span> of BRANDS
                                </h2>
                            </div>
                        </div>
                        
                        {/* Side Panel placeholder*/}
                        <div className="span-4 space-y-4 z-20">
                             <div className="brutal-box bg-[#EBF998] text-black p-6 hover:scale-105 transition">
                                <h3 className="font-black text-xl mb-3 uppercase">Recent Posts</h3>
                                <ul className="space-y-2 text-sm">
                                {loading && <p className="font-bold">Loading feed...</p>}
                                {error && <p className="text-red-500 font-bold">{error}</p>}
                                {!loading && !error && feed.map((item, index) => (
                                    <li key={item.link} className="font-bold">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                           [{index + 1}] {item.title}
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-12 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="magazine-grid">
                            {/* Feature Service - Restaurant */}
                            <div className="span-6 bg-[#FF5BF1] text-white p-8 min-h-[400px] relative overflow-hidden brutal-box">
                                <span className="text-8xl opacity-20 absolute -right-4 -top-4">🍽️</span>
                                <span className="text-6xl relative z-10">🍽️</span>
                                <h3 className="text-3xl font-black mt-4 mb-4 relative z-10">RESTAURANT & BUSINESS</h3>
                                <p className="mb-4 relative z-10">From ghost kitchens to grand openings, we know food.</p>
                                <ul className="space-y-1 text-sm relative z-10">
                                    <li>✓ Grand Openings & Events</li>
                                    <li>✓ Menu Marketing Magic</li>
                                    <li>✓ Third-Party App Strategy</li>
                                    <li>✓ Delivery Optimization</li>
                                    <li>✓ Staff & Vendor Relations</li>
                                </ul>
                                <button className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-black text-sm">LEARN MORE</button>
                            </div>
                            
                            {/* AI Discovery */}
                            <div className="span-6 border-4 border-black p-8 min-h-[400px] brutal-box">
                                <span className="text-6xl">🤖</span>
                                <h3 className="text-3xl font-black mt-4 mb-4">AI DISCOVERY</h3>
                                <p className="mb-4 text-[#6370E7] font-black text-lg">"Vibe Coding" & Beyond</p>
                                <ul className="space-y-2">
                                    <li>• AI Prompt Engineering</li>
                                    <li>• SEO & AI Citations</li>
                                    <li>• Tech Stack Discovery</li>
                                    <li>• Business Consultations</li>
                                    <li>• Team Workshops</li>
                                </ul>
                                <div className="mt-4 p-3 bg-[#EBF998] brutal-box">
                                    <p className="text-xs font-black">HOT: AI workshops booking fast!</p>
                                </div>
                            </div>
                            
                           <div className="span-3 bg-black text-white p-6 brutal-box">
                                <span className="text-4xl">📺</span>
                                <h3 className="text-xl font-black my-2 text-[#EBF998]">MEDIA BUYING</h3>
                                <ul className="space-y-1 text-xs">
                                  <li>• Netflix</li>
                                  <li>• KTLA</li>
                                  <li>• Podcasts</li>
                                  <li>• Geofencing</li>
                                </ul>
                            </div>
                            
                            <div className="span-3 bg-[#6370E7] text-white p-6 brutal-box">
                                <span className="text-4xl">✨</span>
                                <h3 className="text-xl font-black my-2">CREATIVE COLLABS</h3>
                                <ul className="space-y-1 text-xs">
                                  <li>• Social Strategy</li>
                                  <li>• Content Gaps</li>
                                  <li>• UGC that Converts</li>
                                </ul>
                            </div>
                            
                            <div className="span-3 border-4 border-[#EBF998] p-6 brutal-box">
                                <span className="text-4xl">📰</span>
                                <h3 className="text-xl font-black my-2">COMMUNICATIONS</h3>
                                <ul className="space-y-1 text-xs">
                                  <li>• Corporate Comms</li>
                                  <li>• Executive Branding</li>
                                  <li>• Newsletter Design</li>
                                </ul>
                            </div>
                            
                            <div className="span-3 bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] text-white p-6 brutal-box">
                                <span className="text-4xl">🔍</span>
                                <h3 className="text-xl font-black my-2">SEO & DISCOVERY</h3>
                                 <ul className="space-y-1 text-xs">
                                  <li>• Google #1</li>
                                  <li>• AI Citations</li>
                                  <li>• Rich Snippets</li>
                                </ul>
                            </div>
                            
                            {/* Full Stack Banner */}
                            <div className="span-12 bg-gradient-to-r from-[#FF5BF1] via-[#6370E7] to-[#EBF998] p-8 text-white brutal-box">
                                <div className="flex flex-wrap justify-between items-center">
                                    <h3 className="text-3xl font-black">FULL-STACK DIGITAL DOMINATION</h3>
                                    <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                                        <span className="bg-white/20 px-4 py-2 font-bold">PAID SEARCH</span>
                                        <span className="bg-white/20 px-4 py-2 font-bold">PAID SOCIAL</span>
                                        <span className="bg-white/20 px-4 py-2 font-bold">DISPLAY ADS</span>
                                        <span className="bg-white/20 px-4 py-2 font-bold">LINEAR TV</span>
                                        <span className="bg-white/20 px-4 py-2 font-bold">EMAIL/CRM</span>
                                        <span className="bg-white/20 px-4 py-2 font-bold">INFLUENCER</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Google Partner */}
                <div className="py-6 bg-black">
                    <div className="text-center">
                         <div className="inline-block brutal-box p-8 border-2 border-[#EBF998] neon-glow-pink">
                            <p className="text-2xl font-black text-[#EBF998] uppercase">🏆 GROW WITH GOOGLE PARTNER</p>
                            <p className="mt-2 text-sm text-white">One deserving brand gets a full-service partnership for free, yearly.</p>
                        </div>
                    </div>
                </div>

                {/* CurationsLA Deep Dive */}
                <section className="py-12 px-8 relative bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#FF5BF1] to-[#6370E7] text-transparent bg-clip-text">
                                GOOD VIBES FROM CURATIONSLA
                            </h2>
                            <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-700">
                                This isn't just a newsletter. It's the pulse of LA. While <span className="font-bold">[CURATIONS]</span> builds your brand, <span className="font-bold text-[#6370E7]">CurationsLA</span> puts you in the inbox of the city's most influential voices, creating a dual-powerhouse for cultural impact.
                            </p>
                        </div>
                        
                        {/* Layered Post Cards */}
                        <div className="relative h-[600px] md:h-[450px]">
                            {/* Back Layer */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl layer-1">
                                <div className="bg-gray-200 p-6 opacity-50 brutal-box">
                                    <span className="text-xs">COMING NEXT WEEK</span>
                                    <h3 className="text-xl font-black mt-2">🎸 Summer Concert Series</h3>
                                </div>
                            </div>
                            
                            {/* Middle Layer */}
                            <div className="absolute top-16 left-0 w-full md:w-1/2 layer-2">
                                <div className="bg-[#FF5BF1] text-white p-6 brutal-box">
                                    <span className="text-sm font-black">AUG 15, 2025</span>
                                    <h3 className="text-2xl font-black mt-3 mb-3">🌮 FRIDAY AFTERNOON VIBES</h3>
                                    <p className="text-sm">Weekend essentials: rooftop parties, beach clubs, taco trucks, and everything in between.</p>
                                    <button className="mt-3 bg-white text-[#FF5BF1] px-5 py-2 font-black">EXPLORE WEEKEND →</button>
                                </div>
                            </div>
                            
                            {/* Front Layer */}
                            <div className="absolute top-32 right-0 w-full md:w-1/2 layer-3">
                                <div className="bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] p-6 brutal-box">
                                    <span className="text-sm font-bold bg-white text-black px-2 py-1 inline-block">AUG 17, 2025</span>
                                    <h3 className="text-2xl font-black text-white mt-3 mb-3">📅 EVENTS: WEEK OF MONDAY</h3>
                                    <p className="mb-3 text-white text-sm">Dave Matthews Band, Adam Sandler, Mt. Joy, The Frey, Nelly, and more.</p>
                                    <ul className="space-y-1 mb-4 text-white text-sm">
                                        <li>🎤 Comedy Shows</li>
                                        <li>🎸 Live Music</li>
                                        <li>🍷 Wine Tastings</li>
                                    </ul>
                                    <button className="bg-white text-[#FF5BF1] px-5 py-2 font-black">FULL LINEUP →</button>
                                </div>
                            </div>
                            
                            {/* Bottom Layer */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl layer-2">
                                <div className="bg-black border-2 border-[#EBF998] p-6 brutal-box">
                                    <span className="text-[#EBF998] text-sm font-bold">AUG 9, 2025</span>
                                    <h3 className="text-xl font-black mt-2 mb-2 text-white">📅 SUMMER HEAT EVENTS</h3>
                                    <p className="text-white text-sm">Your guide to surviving LA summer in style</p>
                                    <button className="mt-3 text-[#EBF998] font-black">DISCOVER →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Subscribe CTA */}
                <section className="py-12 px-8 bg-white">
                    <div className="max-w-7xl mx-auto flex justify-end items-center">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl">💌</span>
                             <button className="px-6 py-3 bg-black text-white font-black text-lg hover:bg-[#FF5BF1] transition brutal-box">
                                SUBSCRIBE TO CURATIONSLA
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default GoodVibes74Page;
