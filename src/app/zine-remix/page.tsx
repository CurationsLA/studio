
const ZineRemixPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
                
                body {
                    font-family: 'IBM Plex Sans', sans-serif;
                }
                
                .neon-pink {
                    background: #FF5BF1;
                    box-shadow: 0 0 30px rgba(255, 91, 241, 0.5);
                }
                
                .neon-blue {
                    background: #6370E7;
                    box-shadow: 0 0 30px rgba(99, 112, 231, 0.5);
                }
                
                .neon-green {
                    background: #EBF998;
                    box-shadow: 0 0 30px rgba(235, 249, 152, 0.3);
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
                .span-12 { grid-column: span 12; }
                .span-2 { grid-column: span 2; }
                
                @media (max-width: 768px) {
                    .span-6, .span-4, .span-3, .span-8, .span-2, .span-12 { grid-column: span 12; }
                }
                
                .text-outline {
                    -webkit-text-stroke: 2px #FF5BF1;
                    -webkit-text-fill-color: transparent;
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                
                .pulse-animation {
                    animation: pulse 2s ease-in-out infinite;
                }
                
                .diagonal-text {
                    transform: rotate(-3deg);
                }
                
                @keyframes slideIn {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
                
                .slide-in {
                    animation: slideIn 0.8s ease-out;
                }
            `}</style>
            <div className="bg-white text-black">
                {/* Floating Corner Badge */}
                <div className="fixed top-20 right-4 z-50 bg-[#FF5BF1] text-white px-4 py-2 rotate-12 shadow-xl">
                    <span className="text-xs font-bold">V2 DROPPING 🔥</span>
                </div>

                {/* Top Bar - Extended with More Info */}
                <div className="fixed top-0 w-full z-40 bg-black text-white">
                    <div className="flex justify-between items-center px-6 py-2 text-xs">
                        <span>📍 Los Angeles | 🌐 Worldwide</span>
                        <span className="hidden md:block">CURATIONS × CurationsLA | Since 2017</span>
                        <span>✨ Grow with Google Partner</span>
                    </div>
                    <div className="bg-[#EBF998] text-black px-6 py-1 text-center">
                        <marquee className="text-sm font-bold">
                            BREAKING: NEW CLIENTS GET 20% OFF FIRST CAMPAIGN • AI DISCOVERY WORKSHOPS NOW BOOKING • CURATIONSLA REACHES 50K SUBSCRIBERS • WE'RE HIRING CREATIVE DIRECTORS 
                        </marquee>
                    </div>
                </div>

                {/* Hero Grid Layout - Enhanced */}
                <section id="home" className="min-h-screen pt-20 px-4 md:px-8">
                    <div className="magazine-grid items-center min-h-screen">
                        {/* Main Title - Bigger, Bolder */}
                        <div className="span-8">
                            <div className="diagonal-text">
                                <h1 className="text-7xl md:text-9xl font-bold leading-none">
                                    <span className="block slide-in">CURATIONS</span>
                                    <span className="block text-outline slide-in" style={{animationDelay: '0.2s'}}>CURATIONS</span>
                                    <span className="block text-[#FF5BF1] slide-in" style={{animationDelay: '0.4s'}}>CURATIONS</span>
                                </h1>
                            </div>
                            <div className="mt-8 space-y-3">
                                <p className="text-2xl">We don't just market brands.</p>
                                <p className="text-3xl font-bold">We make them <span className="neon-pink text-white px-3 py-1 inline-block">UNFORGETTABLE</span></p>
                                <p className="text-lg text-gray-600">Full-service agency + Media powerhouse = Your next level</p>
                            </div>
                            
                            {/* Quick Stats */}
                            <div className="mt-8 flex gap-4">
                                <div className="bg-black text-white p-3">
                                    <p className="text-2xl font-bold">500+</p>
                                    <p className="text-xs">Brands Elevated</p>
                                </div>
                                <div className="bg-[#6370E7] text-white p-3">
                                    <p className="text-2xl font-bold">50K+</p>
                                    <p className="text-xs">Newsletter Subs</p>
                                </div>
                                <div className="bg-[#EBF998] text-black p-3">
                                    <p className="text-2xl font-bold">8 Years</p>
                                    <p className="text-xs">LA Domination</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Side Panel - More Dynamic */}
                        <div className="span-4 space-y-4">
                            <div className="bg-[#EBF998] p-6 transform hover:scale-105 transition">
                                <h3 className="font-bold text-xl mb-3">TODAY'S MENU 🍽️</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center"><span className="mr-2">🚀</span> Restaurant Launches</li>
                                    <li className="flex items-center"><span className="mr-2">🤖</span> AI Discovery</li>
                                    <li className="flex items-center"><span className="mr-2">📺</span> Media Buying</li>
                                    <li className="flex items-center"><span className="mr-2">✨</span> Influencer Collabs</li>
                                    <li className="flex items-center"><span className="mr-2">📰</span> Executive Branding</li>
                                </ul>
                            </div>
                            
                            <div className="border-4 border-[#6370E7] p-6 bg-white">
                                <p className="font-bold text-lg">BESTIE STATUS:</p>
                                <p className="text-3xl mt-2">🚀 READY</p>
                                <div className="mt-3 space-y-1">
                                    <div className="w-full bg-gray-200 h-2">
                                        <div className="bg-[#6370E7] h-2 w-full"></div>
                                    </div>
                                    <p className="text-xs text-right">100% Caffeinated</p>
                                </div>
                            </div>
                            
                            <div className="bg-black text-white p-6">
                                <p className="text-sm font-bold mb-2">🏆 SPECIAL PROGRAM</p>
                                <p className="text-xs">One deserving brand receives full service FREE yearly through our Grow with Google Partnership</p>
                                <button className="mt-3 text-[#EBF998] text-xs underline">Apply Now →</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CurationsLA Integration Block */}
                <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold">GOOD VIBES FROM</h2>
                                <h2 className="text-4xl md:text-6xl font-bold text-[#FF5BF1]">CURATIONSLA</h2>
                            </div>
                            <div className="text-right">
                                <p className="text-sm">LIVE FEED</p>
                                <p className="text-xs text-gray-500">Updated Daily</p>
                            </div>
                        </div>
                        
                        {/* CurationsLA Posts Grid */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {/* Post 1 */}
                            <div className="bg-[#FF5BF1] text-white p-6 transform hover:-rotate-1 transition">
                                <p className="text-xs font-bold mb-2">AUG 17, 2025</p>
                                <h3 className="text-xl font-bold mb-3">📅 EVENTS: WEEK OF MONDAY, AUGUST 18TH - SUNDAY AUGUST 24TH 2025</h3>
                                <p className="text-sm mb-4">Dave Matthews Band, Adam Sandler, Mt. Joy, The Fray, Nelly, and more. Things to do this week in Los Angeles + Southern California</p>
                                <button className="bg-white text-[#FF5BF1] px-4 py-2 text-sm font-bold">READ MORE →</button>
                            </div>
                            
                            {/* Post 2 */}
                            <div className="bg-[#FF8C00] text-white p-6 transform hover:rotate-1 transition">
                                <p className="text-xs font-bold mb-2">AUG 15, 2025</p>
                                <h3 className="text-xl font-bold mb-3">🌮 FRIDAY AFTERNOON VIBES</h3>
                                <p className="text-sm mb-4">Things To Do This Weekend in Los Angeles and SoCal - Your complete guide to the hottest restaurants, events, and hidden gems.</p>
                                <button className="bg-white text-[#FF8C00] px-4 py-2 text-sm font-bold">EXPLORE →</button>
                            </div>
                            
                            {/* Post 3 */}
                            <div className="bg-[#EBF998] text-black p-6 transform hover:-rotate-1 transition">
                                <p className="text-xs font-bold mb-2">AUG 9, 2025</p>
                                <h3 className="text-xl font-bold mb-3">📅 EVENTS: WEEK OF MONDAY, AUGUST 11TH - SUNDAY AUGUST 17TH</h3>
                                <p className="text-sm mb-4">Summer concerts, rooftop parties, food festivals, and more. Don't miss out on LA's hottest happenings.</p>
                                <button className="bg-black text-[#EBF998] px-4 py-2 text-sm font-bold">DISCOVER →</button>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <button className="px-8 py-3 bg-black text-white font-bold hover:bg-[#FF5BF1] transition">
                                SUBSCRIBE TO CURATIONSLA →
                            </button>
                        </div>
                    </div>
                </section>

                {/* Services Magazine Spread - Enhanced */}
                <section id="services" className="py-20 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="text-6xl md:text-8xl font-bold">SERVICES</h2>
                                <p className="text-lg text-gray-600 mt-2">Everything you need. Nothing you don't.</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm">ISSUE 02</p>
                                <p className="text-sm">2025 EDITION</p>
                            </div>
                        </div>
                        
                        <div className="magazine-grid">
                            {/* Feature Service - Restaurant */}
                            <div className="span-6 bg-[#FF5BF1] text-white p-8 min-h-[400px] relative overflow-hidden">
                                <span className="text-8xl opacity-20 absolute -right-4 -top-4">🍽️</span>
                                <span className="text-6xl relative z-10">🍽️</span>
                                <h3 className="text-3xl font-bold mt-4 mb-4 relative z-10">RESTAURANT & BUSINESS</h3>
                                <p className="mb-4 relative z-10">From ghost kitchens to grand openings, we know food.</p>
                                <ul className="space-y-1 text-sm relative z-10">
                                    <li>✓ Grand Openings & Events</li>
                                    <li>✓ Menu Marketing Magic</li>
                                    <li>✓ Third-Party App Strategy</li>
                                    <li>✓ Delivery Optimization</li>
                                    <li>✓ Staff & Vendor Relations</li>
                                </ul>
                                <button className="mt-4 bg-white text-[#FF5BF1] px-4 py-2 font-bold text-sm">LEARN MORE</button>
                            </div>
                            
                            {/* AI Discovery */}
                            <div className="span-6 border-4 border-black p-8 min-h-[400px]">
                                <span className="text-6xl">🤖</span>
                                <h3 className="text-3xl font-bold mt-4 mb-4">AI DISCOVERY</h3>
                                <p className="mb-4 text-[#6370E7] font-bold text-lg">"Vibe Coding" & Beyond</p>
                                <ul className="space-y-2">
                                    <li>• AI Prompt Engineering</li>
                                    <li>• SEO & AI Citations</li>
                                    <li>• Tech Stack Discovery</li>
                                    <li>• Business Consultations</li>
                                    <li>• Team Workshops</li>
                                </ul>
                                <div className="mt-4 p-3 bg-[#EBF998]">
                                    <p className="text-xs font-bold">HOT: AI workshops booking fast!</p>
                                </div>
                            </div>
                            
                            {/* Media Buying */}
                            <div className="span-3 bg-black text-white p-6">
                                <h3 className="text-xl font-bold mb-4 text-[#EBF998]">MEDIA BUYING</h3>
                                <div className="space-y-2 text-sm">
                                    <p>📺 Netflix</p>
                                    <p>📰 KTLA</p>
                                    <p>📻 Podcasts</p>
                                    <p>📍 Geofencing</p>
                                    <p>🎯 Amazon</p>
                                    <p>💼 LinkedIn</p>
                                    <p>🔴 Live Stream</p>
                                </div>
                            </div>
                            
                            {/* Influencer */}
                            <div className="span-3 bg-[#6370E7] text-white p-6">
                                <h3 className="text-xl font-bold mb-4">CREATIVE COLLABS</h3>
                                <p className="text-sm mb-4">UGC that converts.</p>
                                <ul className="text-sm space-y-1">
                                    <li>→ Social Strategy</li>
                                    <li>→ Content Gaps</li>
                                    <li>→ Digital Listening</li>
                                    <li>→ Clips & Shorts</li>
                                </ul>
                            </div>
                            
                            {/* Communications */}
                            <div className="span-3 border-4 border-[#EBF998] p-6">
                                <h3 className="text-xl font-bold mb-4">COMMUNICATIONS</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Corporate Comms</li>
                                    <li>Executive Branding</li>
                                    <li>Newsletter Design</li>
                                    <li>Chaos Management</li>
                                    <li>Legal Matching</li>
                                </ul>
                            </div>
                            
                            {/* SEO Block */}
                            <div className="span-3 bg-gradient-to-br from-[#FF5BF1] to-[#6370E7] text-white p-6">
                                <h3 className="text-xl font-bold mb-4">SEO & DISCOVERY</h3>
                                <p className="text-sm mb-3">Be found everywhere:</p>
                                <ul className="text-sm space-y-1">
                                    <li>🔍 Google #1</li>
                                    <li>🤖 AI Citations</li>
                                    <li>📊 Rich Snippets</li>
                                </ul>
                            </div>
                            
                            {/* Full Stack Banner */}
                            <div className="span-12 bg-gradient-to-r from-[#FF5BF1] via-[#6370E7] to-[#EBF998] p-8 text-white">
                                <div className="flex flex-wrap justify-between items-center">
                                    <h3 className="text-3xl font-bold">FULL-STACK DIGITAL DOMINATION</h3>
                                    <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                                        <span className="bg-white/20 px-4 py-2 rounded-full">PAID SEARCH</span>
                                        <span className="bg-white/20 px-4 py-2 rounded-full">PAID SOCIAL</span>
                                        <span className="bg-white/20 px-4 py-2 rounded-full">DISPLAY ADS</span>
                                        <span className="bg-white/20 px-4 py-2 rounded-full">LINEAR TV</span>
                                        <span className="bg-white/20 px-4 py-2 rounded-full">EMAIL/CRM</span>
                                        <span className="bg-white/20 px-4 py-2 rounded-full">INFLUENCER</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 md:px-8 bg-black text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8">
                            READY TO <span className="text-[#FF5BF1]">BREAK</span> THE INTERNET?
                        </h2>
                        <p className="text-xl mb-8 text-[#EBF998]">
                            Let's throw the box away together, bestie ✨
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-[#FF5BF1] text-black font-bold hover:bg-[#6370E7] hover:text-white transition text-lg">
                                START YOUR STORY
                            </button>
                            <button className="px-8 py-4 border-2 border-[#EBF998] text-[#EBF998] hover:bg-[#EBF998] hover:text-black transition text-lg">
                                GET MEDIA KIT
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-4 md:px-8 bg-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-2xl font-bold">[CURATIONS LOGO]</div>
                                <p className="text-sm mt-2">Est. 2017</p>
                                <p className="text-xs mt-1 text-gray-600">Breaking brands daily</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2">Services</p>
                                <ul className="text-sm space-y-1">
                                    <li>Agency</li>
                                    <li>Media</li>
                                    <li>Digital</li>
                                    <li>AI</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold mb-2">Connect</p>
                                <p className="text-sm">hello@curations.org</p>
                                <div className="flex gap-2 mt-2 text-xl">
                                    <span>📧</span>
                                    <span>📱</span>
                                    <span>💬</span>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold mb-2">Partner</p>
                                <p className="text-sm">Grow with Google ✓</p>
                                <p className="text-sm mt-2">CurationsLA Media</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default ZineRemixPage;
