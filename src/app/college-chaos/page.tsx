
'use client';
import { useEffect, useState } from 'react';

interface FeedItem {
    title: string;
    link: string;
}

const CollegeChaosPage = () => {
    const [feed, setFeed] = useState<FeedItem[]>([]);

    useEffect(() => {
        async function loadFeed() {
            try {
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://rss.beehiiv.com/feeds/cbPjFUPGbR.xml');
                const data = await response.json();
        
                if (!data.items) {
                  throw new Error('No items found');
                }
        
                const items = data.items.slice(0, 4);
                setFeed(items);
            } catch (err) {
                console.error('Feed loading error:', err);
                // You might want to set an error state here
            }
        }
    
        loadFeed();
    }, []);

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;700;900&display=swap');
                
                body {
                    font-family: 'Inter', sans-serif;
                }
                
                .headline-font {
                    font-family: 'Bebas Neue', sans-serif;
                }
                
                .cut-out {
                    clip-path: polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%);
                }
                
                .torn-edge {
                    position: relative;
                }
                
                .torn-edge::after {
                    content: '';
                    position: absolute;
                    top: -5px;
                    left: 0;
                    right: 0;
                    height: 10px;
                    background: url("data:image/svg+xml,%3csvg width='100' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m0,20L5,0L10,20L15,5L20,20L25,0L30,20L35,5L40,20L45,0L50,20L55,5L60,20L65,0L70,20L75,5L80,20L85,0L90,20L95,5L100,20L100,20L0,20Z' fill='white'/%3e%3c/svg%3e") repeat-x;
                }
                
                .magazine-shadow {
                    box-shadow: 8px 8px 0px rgba(0,0,0,0.3);
                }
                
                .rotate-slight {
                    transform: rotate(-2deg);
                }
                
                .rotate-slight-r {
                    transform: rotate(3deg);
                }
                
                .polaroid {
                    background: white;
                    padding: 1rem 1rem 3rem 1rem;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                }
                
                .sticker {
                    border-radius: 50%;
                    border: 4px solid white;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                }
                
                .highlight-marker {
                    background: linear-gradient(120deg, #ffff00 0%, #ffff00 100%);
                    background-repeat: no-repeat;
                    background-size: 100% 0.4em;
                    background-position: 0 88%;
                    padding: 0 2px;
                }
                
                .red-marker {
                    background: linear-gradient(120deg, #ff5b5b 0%, #ff5b5b 100%);
                    background-repeat: no-repeat;
                    background-size: 100% 0.4em;
                    background-position: 0 88%;
                }
                
                .collage-grid {
                    display: grid;
                    grid-template-columns: repeat(16, 1fr);
                    grid-template-rows: repeat(12, 80px);
                    gap: 1rem;
                }
                
                @media (max-width: 768px) {
                    .collage-grid {
                        grid-template-columns: repeat(8, 1fr);
                        grid-template-rows: repeat(20, 60px);
                    }
                }
            `}</style>
            <div className="bg-gray-100">
                {/* Magazine Header */}
                <div className="bg-white border-b-4 border-black sticky top-0 z-50">
                    <div className="px-6 py-4 flex justify-between items-center">
                        <div className="headline-font text-3xl font-black">CURATIONS MAGAZINE</div>
                        <div className="text-sm">
                            <span className="bg-red-500 text-white px-2 py-1 font-bold">ISSUE #74</span>
                            <span className="ml-2 font-bold">AUGUST 2025</span>
                        </div>
                    </div>
                </div>

                {/* Magazine Cover/Hero */}
                <div className="relative min-h-screen p-6 overflow-hidden">
                    <div className="collage-grid max-w-7xl mx-auto relative">
                        
                        {/* Main Cover Story */}
                        <div className="col-span-8 row-span-6 md:col-span-6 md:row-span-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 magazine-shadow rotate-slight">
                            <div className="headline-font text-xs mb-2 bg-yellow-400 text-black px-2 py-1 inline-block">COVER STORY</div>
                            <h1 className="headline-font text-5xl md:text-6xl leading-none mb-4">
                                WE CURATE<br/>
                                THE <span className="highlight-marker text-black">HEART</span><br/>
                                & HEADLINES<br/>
                                OF BRANDS
                            </h1>
                            <p className="text-lg font-bold mb-6">How LA's most brutal agency is rewriting the rules of brand building</p>
                            <div className="bg-white text-black p-3 inline-block transform -rotate-2">
                                <p className="font-black text-sm">EXCLUSIVE: Inside the CURATIONS method</p>
                            </div>
                        </div>

                        {/* Restaurant Feature */}
                        <div className="col-span-8 row-span-4 md:col-span-5 md:row-span-5 bg-orange-400 text-black p-4 magazine-shadow rotate-slight-r">
                            <div className="headline-font text-sm mb-2 bg-black text-white px-2 py-1 inline-block">FOOD & BIZ</div>
                            <h2 className="headline-font text-3xl mb-3">RESTAURANT REVOLUTION</h2>
                            <div className="polaroid inline-block mb-3">
                                <div className="w-16 h-12 bg-red-500 flex items-center justify-center text-white text-2xl">🍽️</div>
                                <p className="text-xs mt-1 font-bold">Ghost kitchens → Gold mines</p>
                            </div>
                            <ul className="text-sm font-bold space-y-1">
                                <li>• Grand Opening Mastery</li>
                                <li>• Menu Marketing Magic</li>
                                <li>• Delivery Domination</li>
                            </ul>
                        </div>

                        {/* AI Discovery */}
                        <div className="col-span-8 row-span-4 md:col-span-5 md:row-span-4 bg-blue-500 text-white p-4 magazine-shadow">
                            <div className="headline-font text-sm mb-2 bg-yellow-400 text-black px-2 py-1 inline-block">TECH TALK</div>
                            <h2 className="headline-font text-2xl mb-3">AI DISCOVERY</h2>
                            <div className="bg-white text-black p-3 mb-3 torn-edge">
                                <p className="font-black text-sm red-marker">"Vibe Coding" is the future</p>
                            </div>
                            <div className="text-sm space-y-1">
                                <div>✓ Prompt Engineering</div>
                                <div>✓ SEO Algorithms</div>
                                <div>✓ Business Consulting</div>
                            </div>
                        </div>

                        {/* Media Buying Sticker */}
                        <div className="col-span-4 row-span-3 md:col-span-3 md:row-span-3 bg-black text-white p-3 sticker flex flex-col justify-center items-center">
                            <div className="text-2xl mb-2">📺</div>
                            <div className="headline-font text-lg text-center">MEDIA BUYING</div>
                            <div className="text-xs text-center mt-2">Netflix • KTLA • Podcasts</div>
                        </div>

                        {/* Creative Collabs */}
                        <div className="col-span-4 row-span-3 md:col-span-3 md:row-span-3 bg-pink-500 text-white p-3 cut-out">
                            <div className="text-2xl mb-2">✨</div>
                            <div className="headline-font text-lg">CREATIVE</div>
                            <div className="text-xs mt-2">
                                Social Strategy<br/>
                                UGC Conversion<br/>
                                Content Gaps
                            </div>
                        </div>

                        {/* Communications */}
                        <div className="col-span-8 row-span-3 md:col-span-4 md:row-span-3 bg-green-400 text-black p-4 magazine-shadow rotate-slight">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="headline-font text-xl mb-1">COMMUNICATIONS</div>
                                    <div className="text-sm">Corporate • Executive • Newsletter</div>
                                </div>
                                <div className="text-3xl">📰</div>
                            </div>
                        </div>

                        {/* SEO Badge */}
                        <div className="col-span-4 row-span-2 md:col-span-3 md:row-span-2 bg-yellow-400 text-black p-3 sticker flex flex-col justify-center items-center">
                            <div className="text-xl mb-1">🔍</div>
                            <div className="headline-font text-sm text-center">SEO MASTERY</div>
                            <div className="text-xs text-center">Google #1</div>
                        </div>

                        {/* Google Partner Stamp */}
                        <div className="col-span-8 row-span-2 md:col-span-6 md:row-span-2 bg-red-600 text-white p-3 flex items-center justify-center magazine-shadow">
                            <div className="text-center">
                                <div className="headline-font text-xl">🏆 GOOGLE PARTNER</div>
                                <div className="text-xs">One free partnership yearly</div>
                            </div>
                        </div>

                        {/* CurationsLA Feature */}
                        <div className="col-span-8 row-span-4 md:col-span-7 md:row-span-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 magazine-shadow rotate-slight-r">
                            <div className="headline-font text-sm mb-2 bg-white text-black px-2 py-1 inline-block">LA INSIDER</div>
                            <h2 className="headline-font text-2xl mb-3">CURATIONSLA FEED</h2>
                            <div className="bg-white text-black p-3 mb-3 torn-edge">
                                <p className="font-bold text-sm">Latest from the City of Angels</p>
                            </div>
                            <div id="feed-container" className="text-xs space-y-1">
                                {feed.length === 0 ? <div className="text-red-300">Feed loading...</div> :
                                    feed.map(item => (
                                        <div key={item.link} className="font-bold">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                               {item.title.substring(0, 40)}...
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Quote Bubble */}
                        <div className="col-span-8 row-span-3 md:col-span-5 md:row-span-3 bg-yellow-300 text-black p-4 magazine-shadow">
                            <div className="text-center">
                                <div className="text-4xl mb-2">"</div>
                                <p className="font-black text-lg headline-font">FULL-STACK DIGITAL DOMINATION</p>
                                <div className="flex flex-wrap gap-1 mt-3 justify-center">
                                    <span className="bg-black text-white px-2 py-1 text-xs">PAID SEARCH</span>
                                    <span className="bg-black text-white px-2 py-1 text-xs">SOCIAL</span>
                                    <span className="bg-black text-white px-2 py-1 text-xs">TV</span>
                                    <span className="bg-black text-white px-2 py-1 text-xs">EMAIL</span>
                                </div>
                            </div>
                        </div>

                        {/* Magazine Subscription */}
                        <div className="col-span-8 row-span-2 md:col-span-4 md:row-span-2 bg-black text-white p-3 flex items-center justify-center">
                            <button className="bg-white text-black px-4 py-2 font-black headline-font hover:bg-yellow-400 transition">
                                SUBSCRIBE NOW
                            </button>
                        </div>

                    </div>

                    {/* Scattered Elements */}
                    <div className="absolute top-20 left-10 bg-red-500 text-white px-3 py-1 transform rotate-12 font-bold text-sm">
                        HOT!
                    </div>
                    
                    <div className="absolute bottom-20 right-10 bg-yellow-400 text-black px-3 py-1 transform -rotate-12 font-bold text-sm">
                        NEW!
                    </div>

                    <div className="absolute top-1/2 left-5 w-8 h-8 bg-pink-500 rounded-full sticker"></div>
                    <div className="absolute top-1/3 right-5 w-6 h-6 bg-blue-500 rounded-full sticker"></div>
                </div>
            </div>
        </>
    );
};

export default CollegeChaosPage;
