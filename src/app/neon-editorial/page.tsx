'use client';
import { useState, useEffect } from 'react';

interface FeedItem {
    title: string;
    pubDate: string;
    link: string;
    description: string;
}

const NeonEditorialPage = () => {
    const [feed, setFeed] = useState<FeedItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadFeed() {
          try {
            const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://rss.beehiiv.com/feeds/tXcBFCgC6G.xml');
            const data = await response.json();
    
            if (!data.items) {
              throw new Error('No items found');
            }
    
            const items = data.items.map((item: any) => ({
                ...item,
                link: item.link.replace('.cc', '.org')
            }))
    
            setFeed(items.slice(0, 3));
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
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
                    background: #f8f8f8;
                }

                .font-anton {
                    font-family: 'Anton', sans-serif;
                }

                .font-permanent-marker {
                    font-family: 'Permanent Marker', sans-serif;
                }

                .text-outline-pink {
                    -webkit-text-stroke: 2px #F0469B;
                    -webkit-text-fill-color: transparent;
                }
                
                .magazine-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 1rem;
                }
                
                .span-6 { grid-column: span 6; }
                .span-4 { grid-column: span 4; }
                .span-3 { grid-column: span 3; }
                .span-8 { grid-column: span 8; }
                .span-9 { grid-column: span 9; }
                .span-12 { grid-column: span 12; }
                
                @media (max-width: 768px) {
                    .span-6, .span-4, .span-3, .span-8, .span-9 { grid-column: span 12; }
                }
            `}</style>
            <div className="bg-[#f8f8f8] text-black">
                {/* Sticky Side Navigation */}
                <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
                    <div className="flex flex-col gap-y-4 ml-4">
                        <a href="#home" className="w-3 h-3 rounded-full bg-[#f474b4] hover:scale-150 transition"></a>
                        <a href="#services" className="w-3 h-3 rounded-full bg-[#6370E7] hover:scale-150 transition"></a>
                        <a href="#work" className="w-3 h-3 rounded-full bg-[#EBF998] hover:scale-150 transition"></a>
                        <a href="#connect" className="w-3 h-3 rounded-full bg-black hover:scale-150 transition"></a>
                    </div>
                </div>

                {/* Top Bar */}
                <div className="fixed top-0 w-full z-40 bg-black text-white p-2">
                    <div className="flex justify-between items-center px-6">
                        <span className="text-sm">📍 Los Angeles | 🌐 Worldwide</span>
                        <span className="text-sm text-[#EBF998]">CURATIONS × CurationsLA</span>
                        <span className="text-sm">Since 2017</span>
                    </div>
                </div>

                {/* Hero Grid Layout */}
                <section id="home" className="pt-24 px-4 md:px-8">
                    <div className="magazine-grid">
                        {/* Main Content Column */}
                        <div className="span-9 space-y-4">
                            {/* Main Title */}
                            <div className="relative text-center py-10">
                                <div className="font-bold uppercase leading-tight text-4xl md:text-5xl space-y-2">
                                    <div className="space-x-4" style={{ transform: 'rotate(-2deg)' }}>
                                        <span className="font-anton inline-block bg-black text-white px-2 py-1">WE</span>
                                        <span className="font-anton inline-block bg-black text-white px-2 py-1">CURATE</span>
                                    </div>
                                    <div className="space-x-2" style={{ transform: 'rotate(1deg)' }}>
                                        <span className="font-permanent-marker normal-case text-[#f474b4] text-5xl inline-block">the heart of</span>
                                    </div>
                                    <div>
                                        <span className="font-anton text-outline-pink text-8xl inline-block" style={{ transform: 'rotate(-3deg)' }}>BRANDS</span>
                                    </div>
                                </div>
                                <div className="mt-6 font-bold uppercase" style={{ transform: 'rotate(1deg)' }}>
                                    <p className="inline-block bg-[#EBF998] px-3 py-1 text-lg">
                                        AND THE NEWS THEY <span className="bg-[#6370E7] text-white px-2">BREAK</span>
                                    </p>
                                </div>
                            </div>
                            
                            {/* Services Section */}
                             <div id="services">
                                <div className="h-1 bg-[#f474b4] mb-6 mt-2"></div>
                                <h2 className="text-lg font-bold bg-[#EBF998] text-black px-4 py-2 inline-block" style={{fontSize: '60%'}}>SERVICES</h2>
                                
                                <div className="magazine-grid">
                                    {/* Feature Service */}
                                    <div className="span-6 bg-black text-white p-6 min-h-[250px]">
                                        <span className="text-4xl">🍽️</span>
                                        <h3 className="text-xl font-bold mt-2 mb-2 text-[#EBF998]">RESTAURANT & BUSINESS</h3>
                                        <p className="text-xs">From ghost kitchens to grand openings, we know food.</p>
                                    </div>
                                    
                                    {/* AI Discovery */}
                                    <div className="span-6 bg-[#6370E7] text-white p-6 min-h-[250px]">
                                        <span className="text-4xl">🤖</span>
                                        <h3 className="text-xl font-bold mt-2 mb-2">AI DISCOVERY</h3>
                                        <p className="font-bold text-xs">"Vibe Coding" & Beyond</p>
                                    </div>
                                    
                                    {/* Media Buying */}
                                    <div className="span-4 bg-[#EBF998] text-black p-4">
                                        <h3 className="text-lg font-bold text-[#6370E7]">MEDIA BUYING</h3>
                                    </div>
                                    
                                    {/* Influencer */}
                                    <div className="span-4 border-4 border-[#f474b4] p-4 bg-white">
                                        <h3 className="text-lg font-bold text-[#f474b4]">CREATIVE COLLABS</h3>
                                    </div>
                                    
                                    {/* Communications */}
                                    <div className="span-4 bg-black text-white p-4">
                                        <h3 className="text-lg font-bold text-[#f474b4]">COMMUNICATIONS</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Side Panel / News Feed */}
                        <div className="span-3 space-y-4">
                             <div className="border-4 border-[#f474b4] p-6 bg-white">
                                <h3 className="font-bold text-xl mb-2 text-black uppercase">GOOD VIBES FROM CURATIONSLA</h3>
                                {loading && <p>Loading...</p>}
                                {error && <p className="text-red-500">{error}</p>}
                                {!loading && !error && feed.map(item => (
                                    <div key={item.link} className="mb-4">
                                        <p className="text-xs font-bold"><span className="bg-[#EBF998] font-bold">{formatDate(item.pubDate)}</span></p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline uppercase">{item.title}</a>
                                        <p className="text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="bg-black text-white p-6 text-center">
                                <button className="w-full px-6 py-3 bg-[#f474b4] text-black font-bold hover:bg-[#6370E7] hover:text-white transition">
                                    SUBSCRIBE TO CURATIONSLA
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Magazine Spread */}
                <section className="py-20 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="magazine-grid">
                            {/* Full Stack */}
                            <div className="span-12 bg-gradient-to-r from-[#f474b4] via-[#6370E7] to-[#EBF998] p-8 text-white">
                                <div className="flex flex-wrap justify-between items-center">
                                    <h3 className="text-2xl font-bold">FULL-STACK DIGITAL</h3>
                                    <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
                                        <span className="bg-white/20 px-3 py-1 rounded text-xs">PAID SEARCH</span>
                                        <span className="bg-white/20 px-3 py-1 rounded text-xs">PAID SOCIAL</span>
                                        <span className="bg-white/20 px-3 py-1 rounded text-xs">DISPLAY ADS</span>
                                        <span className="bg-white/20 px-3 py-1 rounded text-xs">LINEAR TV</span>
                                        <span className="bg-white/20 px-3 py-1 rounded text-xs">EMAIL/CRM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Feature */}
                <section className="py-20 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-5xl font-bold mb-4">
                                    <span className="text-[#f474b4]">CURATIONS</span> +
                                    <span className="text-[#6370E7]"> CurationsLA</span>
                                </h2>
                                <p className="text-xl mb-6">The only dual-platform powerhouse in Los Angeles.</p>
                                <p className="mb-6">While we craft your brand strategy, our sister company puts you directly in the inbox of LA's most influential community leaders, creators, and culture makers.</p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="bg-[#EBF998] p-6">
                                    <h3 className="font-bold text-xl mb-2">RECENTLY IN <span className="text-[#6370E7]">CurationsLA</span></h3>
                                    <p>→ The Best Tacos in East LA (Eats)</p>
                                    <p>→ Indie Film Fest This Weekend (Events)</p>
                                    <p>→ Vibe Coding: Our Latest Obsession (Newsletter)</p>
                                </div>
                                
                                <div className="bg-black text-white p-6 text-center">
                                    <button className="w-full px-6 py-3 bg-[#f474b4] text-black font-bold hover:bg-[#6370E7] hover:text-white transition">
                                        SUBSCRIBE TO CURATIONSLA
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4 md:px-8 bg-black text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            READY TO <span className="text-[#f474b4]">BREAK</span> THE INTERNET?
                        </h2>
                        <p className="text-xl mb-8 text-[#EBF998]">
                            Let's throw the box away together, bestie ✨
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-[#f474b4] text-black font-bold hover:bg-[#6370E7] hover:text-white transition">
                                START YOUR STORY
                            </button>
                            <button className="px-8 py-4 border-2 border-[#EBF998] text-[#EBF998] hover:bg-[#EBF998] hover:text-black transition">
                                GET MEDIA KIT
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-4 md:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-2xl font-bold">[CURATIONS LOGO]</div>
                                <p className="text-sm mt-2">Est. 2017</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2">Services</p>
                                <ul className="text-sm space-y-1">
                                    <li>Agency</li>
                                    <li>Media</li>
                                    <li>Digital</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold mb-2">Connect</p>
                                <p className="text-sm">hello@curations.org</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2">Partner</p>
                                <p className="text-sm">Grow with Google ✓</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default NeonEditorialPage;
