'use client';

const ArcticTerminalPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@400;700;900&display=swap');
                
                body {
                    font-family: 'Space Mono', monospace;
                }
                
                .arctic-blue {
                    background: #00D4FF;
                    box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
                }
                
                .ice-white {
                    background: #F0F8FF;
                    box-shadow: 0 0 30px rgba(240, 248, 255, 0.3);
                }
                
                .steel-gray {
                    background: #708090;
                    box-shadow: 0 0 30px rgba(112, 128, 144, 0.3);
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
                    -webkit-text-stroke: 3px #00D4FF;
                    -webkit-text-fill-color: transparent;
                }
                
                @keyframes arctic-pulse {
                    0%, 100% { 
                        transform: scale(1) rotateX(0deg);
                        filter: brightness(1) blur(0px);
                        box-shadow: 0 0 0px rgba(0, 212, 255, 0.3);
                    }
                    50% { 
                        transform: scale(1.01) rotateX(1deg);
                        filter: brightness(1.1) blur(0.5px);
                        box-shadow: 0 0 20px rgba(0, 212, 255, 0.6);
                    }
                }
                
                .arctic-pulse {
                    animation: arctic-pulse 2.5s ease-in-out infinite;
                }
                
                @keyframes slideIn {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
                
                .slide-in {
                    animation: slideIn 0.8s ease-out;
                }
                
                .layer-1 { z-index: 10; }
                .layer-2 { z-index: 20; }
                .layer-3 { z-index: 30; }
                
                .glass-effect {
                    background: rgba(240, 248, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(240, 248, 255, 0.2);
                }
                
                .arctic-glow {
                    box-shadow: 0 0 40px rgba(0, 212, 255, 0.4),
                                inset 0 0 40px rgba(0, 212, 255, 0.1);
                }
                
                .text-arctic-blue {
                    color: #00D4FF;
                    text-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
                }
                
                .text-steel-gray {
                    color: #708090;
                    text-shadow: 0 0 10px rgba(112, 128, 144, 0.8);
                }
                
                .terminal-box {
                    border: 2px solid #00D4FF;
                    background: #0A0A0A;
                    box-shadow: inset 0 0 10px rgba(0, 212, 255, 0.2);
                }
                
                .orbitron {
                    font-family: 'Orbitron', monospace;
                }
                
                .scanline {
                    position: relative;
                    overflow: hidden;
                }
                
                .scanline::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent);
                    animation: scan 3s infinite;
                }
                
                @keyframes scan {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
            `}</style>
            <div className="bg-gray-900 text-white min-h-screen">
                {/* Floating Corner Badge */}
                <div className="fixed top-20 right-4 z-50 arctic-blue text-black px-4 py-2 rotate-12 shadow-xl terminal-box">
                    <span className="text-xs font-bold orbitron">V2.DROPPING</span>
                </div>

                {/* Top Bar */}
                <div className="fixed top-0 w-full z-40 bg-black text-white border-b-2 border-arctic-blue">
                    <div className="flex justify-between items-center px-6 py-2 text-xs">
                        <span className="text-arctic-blue">COORDINATES: LAX.34.0522 | GLOBAL.NETWORK</span>
                        <span className="hidden md:block orbitron">CURATIONS_x_CURATIONSLA_|_SINCE_2017</span>
                        <span className="text-steel-gray">GOOGLE.PARTNER.ACTIVE</span>
                    </div>
                    <div className="ice-white text-black px-6 py-1 text-center scanline">
                        <marquee className="text-sm font-bold orbitron">
                            SYSTEM_ALERT: NEW_CLIENTS_20%_DISCOUNT • AI_DISCOVERY_WORKSHOPS_ONLINE • SUBSCRIBER_COUNT_50K_REACHED • RECRUITMENT_CREATIVE_DIRECTORS_ACTIVE 
                        </marquee>
                    </div>
                </div>

                {/* Hero Grid Layout */}
                <section id="home" className="min-h-screen pt-20 px-4 md:px-8 bg-gray-900">
                    <div className="magazine-grid items-center min-h-screen">
                        {/* Main Title */}
                        <div className="span-8 z-10">
                            <div>
                                <h1 className="text-4xl md:text-6xl orbitron font-black leading-tight uppercase">
                                    <span className="block slide-in text-arctic-blue">CURATIONS</span>
                                    <span className="block text-outline slide-in" style={{animationDelay: '0.2s'}}>CURATIONS</span>
                                    <span className="block text-white slide-in" style={{animationDelay: '0.4s'}}>CURATIONS</span>
                                </h1>
                            </div>
                            
                            {/* Arctic Terminal Motto Expression */}
                            <div className="mt-12 space-y-6">
                                <div className="terminal-box p-6 arctic-pulse scanline">
                                    <h2 className="text-2xl md:text-3xl orbitron font-black uppercase text-center text-arctic-blue">
                                        CURATING_PROTOCOL_INIT
                                    </h2>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="terminal-box arctic-blue text-black p-8 arctic-pulse" style={{animationDelay: '0.3s'}}>
                                        <h3 className="text-3xl md:text-4xl orbitron font-black text-center uppercase">
                                            [CORE_HEART]
                                        </h3>
                                        <div className="mt-2 text-center text-sm font-bold">
                                            EMOTIONAL_DATA_STREAM
                                        </div>
                                        <div className="mt-3 h-1 bg-black/30 w-full">
                                            <div className="h-1 bg-black w-3/4 arctic-pulse"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="terminal-box ice-white text-black p-8 arctic-pulse" style={{animationDelay: '0.6s'}}>
                                        <h3 className="text-3xl md:text-4xl orbitron font-black text-center uppercase">
                                            [NET_HEADLINES]
                                        </h3>
                                        <div className="mt-2 text-center text-sm font-bold">
                                            MEDIA_TRANSMISSION_LIVE
                                        </div>
                                        <div className="mt-3 h-1 bg-gray-300 w-full">
                                            <div className="h-1 bg-gray-700 w-4/5 arctic-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="terminal-box steel-gray text-white p-6 arctic-pulse" style={{animationDelay: '0.9s'}}>
                                    <h2 className="text-3xl md:text-4xl orbitron font-black uppercase text-center">
                                        TARGET &gt;&gt; BRAND_ENTITIES &lt;&lt; 
                                    </h2>
                                    <div className="mt-3 text-center text-sm font-bold">
                                        CURATION_COMPLETE
                                    </div>
                                </div>
                            </div>
                            
                            {/* Quick Stats */}
                            <div className="mt-8 flex gap-4 flex-wrap">
                                <div className="terminal-box p-3">
                                    <p className="text-2xl orbitron font-black text-arctic-blue">500+</p>
                                    <p className="text-xs uppercase">ENTITIES</p>
                                </div>
                                <div className="terminal-box p-3">
                                    <p className="text-2xl orbitron font-black text-white">50K+</p>
                                    <p className="text-xs uppercase">USERS</p>
                                </div>
                                <div className="terminal-box p-3">
                                    <p className="text-2xl orbitron font-black text-steel-gray">8_YRS</p>
                                    <p className="text-xs uppercase">RUNTIME</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Side Panel */}
                        <div className="span-4 space-y-4 z-20">
                            <div className="terminal-box ice-white text-black p-6 hover:scale-105 transition">
                                <h3 className="orbitron font-black text-xl mb-3 uppercase">MENU.SYS</h3>
                                <ul className="space-y-2 text-sm font-bold">
                                    <li className="flex items-center"><span className="mr-2 text-arctic-blue">[01]</span> RESTAURANT_LAUNCH</li>
                                    <li className="flex items-center"><span className="mr-2 text-arctic-blue">[02]</span> AI_DISCOVERY</li>
                                    <li className="flex items-center"><span className="mr-2 text-arctic-blue">[03]</span> MEDIA_ACQUISITION</li>
                                    <li className="flex items-center"><span className="mr-2 text-arctic-blue">[04]</span> INFLUENCER_SYNC</li>
                                    <li className="flex items-center"><span className="mr-2 text-arctic-blue">[05]</span> EXECUTIVE_BRAND</li>
                                </ul>
                            </div>
                            
                            <div className="terminal-box p-6">
                                <p className="orbitron font-black text-lg uppercase text-arctic-blue">SYS_STATUS:</p>
                                <p className="text-3xl mt-2 arctic-pulse orbitron font-black text-white">[ONLINE]</p>
                                <div className="mt-3 space-y-1">
                                    <div className="w-full bg-gray-700 h-4 terminal-box">
                                        <div className="arctic-blue h-4 w-full arctic-pulse"></div>
                                    </div>
                                    <p className="text-xs text-right font-bold text-arctic-blue">100%_OPERATIONAL</p>
                                </div>
                            </div>
                            
                            <div className="terminal-box p-6">
                                <p className="text-sm orbitron font-black mb-2 uppercase text-steel-gray">SPECIAL_PROGRAM.EXE</p>
                                <p className="text-xs font-bold">One deserving brand receives full service FREE yearly through our Grow with Google Partnership</p>
                                <button className="mt-3 text-arctic-blue text-xs orbitron font-black uppercase underline">EXECUTE_APPLICATION &gt;&gt;&gt;</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <div className="bg-gray-800">
                    <section className="py-20 px-8">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-7xl orbitron font-black mb-16 text-center uppercase text-arctic-blue arctic-pulse">
                                [SERVICES]
                            </h2>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Service Cards */}
                                <div className="terminal-box hover:bg-gray-700 transition p-8 scanline">
                                    <span className="text-5xl">🍽️</span>
                                    <h3 className="text-xl orbitron font-black mt-4 uppercase text-arctic-blue">RESTAURANT_SYS</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• GRAND_OPENING_PROTOCOL</li>
                                        <li>• GHOST_KITCHEN_DEPLOY</li>
                                        <li>• MENU_MARKETING_STREAM</li>
                                        <li>• THIRD_PARTY_INTEGRATION</li>
                                    </ul>
                                </div>
                                
                                <div className="terminal-box hover:bg-gray-700 transition p-8 scanline">
                                    <span className="text-5xl">🤖</span>
                                    <h3 className="text-xl orbitron font-black mt-4 uppercase text-white">AI_DISCOVERY_MODULE</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• CITATION_ENGINE_V2</li>
                                        <li>• PROMPT_ENGINEERING_CORE</li>
                                        <li>• TECH_STACK_ANALYSIS</li>
                                        <li>• TEAM_WORKSHOP_DEPLOY</li>
                                    </ul>
                                </div>
                                
                                <div className="terminal-box hover:bg-gray-700 transition p-8 scanline">
                                    <span className="text-5xl">📺</span>
                                    <h3 className="text-xl orbitron font-black mt-4 uppercase text-steel-gray">MEDIA_ACQUISITION</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• NETFLIX_PLACEMENT_API</li>
                                        <li>• PODCAST_AD_NETWORK</li>
                                        <li>• LINEAR_TV_PROTOCOL</li>
                                        <li>• SOCIAL_MEDIA_STREAM</li>
                                    </ul>
                                </div>
                                
                                <div className="terminal-box hover:bg-gray-700 transition p-8 scanline">
                                    <span className="text-5xl">✨</span>
                                    <h3 className="text-xl orbitron font-black mt-4 uppercase text-arctic-blue">CREATIVE_COLLAB_SYS</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• INFLUENCER_MATCH_ALG</li>
                                        <li>• UGC_CAMPAIGN_ENGINE</li>
                                        <li>• CONTENT_CREATION_LAB</li>
                                        <li>• SOCIAL_STRATEGY_AI</li>
                                    </ul>
                                </div>
                                
                                <div className="terminal-box hover:bg-gray-700 transition p-8 scanline">
                                    <span className="text-5xl">📰</span>
                                    <h3 className="text-xl orbitron font-black mt-4 uppercase text-white">COMMUNICATIONS_NET</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• CRISIS_MANAGEMENT_PROTO</li>
                                        <li>• EXECUTIVE_BRAND_SYS</li>
                                        <li>• PR_STRATEGY_MODULE</li>
                                        <li>• MEDIA_RELATIONS_API</li>
                                    </ul>
                                </div>
                                
                                <div className="terminal-box hover:bg-gray-700 transition p-8 scanline">
                                    <span className="text-5xl">🚀</span>
                                    <h3 className="text-xl orbitron font-black mt-4 uppercase text-steel-gray">FULL_STACK_DEPLOY</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>• SEO_SEM_ENGINE</li>
                                        <li>• EMAIL_CRM_INTEGRATION</li>
                                        <li>• ANALYTICS_DASHBOARD</li>
                                        <li>• CONVERSION_OPTIMIZER</li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/* Google Partner */}
                            <div className="mt-16 text-center">
                                <div className="inline-block terminal-box p-8 scanline">
                                    <p className="text-2xl orbitron font-black text-arctic-blue uppercase arctic-pulse">GOOGLE_PARTNER.ACTIVE</p>
                                    <p className="mt-2 text-sm font-bold">One deserving brand gets full-service partnership for free, yearly.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CurationsLA Section */}
                    <section className="py-20 px-8 relative bg-gray-900">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-6xl md:text-8xl orbitron font-black">
                                    <span className="text-white">DATA_STREAM_FROM</span>
                                </h2>
                                <h2 className="text-6xl md:text-8xl orbitron font-black">
                                    <span className="text-arctic-blue arctic-pulse">CURATIONS</span><span className="text-steel-gray">LA</span>
                                </h2>
                            </div>
                            
                            {/* Terminal Post Cards */}
                            <div className="relative h-[700px] md:h-[500px]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl layer-1">
                                    <div className="terminal-box p-8 opacity-50">
                                        <span className="text-xs text-arctic-blue">QUEUED_NEXT_WEEK</span>
                                        <h3 className="text-2xl orbitron font-bold mt-2 text-white">SUMMER_CONCERT_SERIES.EXE</h3>
                                    </div>
                                </div>
                                
                                <div className="absolute top-20 left-0 w-full md:w-1/2 layer-2">
                                    <div className="arctic-blue text-black p-8 arctic-glow">
                                        <span className="text-sm orbitron font-bold">AUG_15_2025</span>
                                        <h3 className="text-3xl orbitron font-bold mt-3 mb-4">FRIDAY_AFTERNOON_PROTOCOL</h3>
                                        <p>Weekend initialization: rooftop_parties, beach_clubs, taco_trucks, comprehensive_coverage.</p>
                                        <button className="mt-4 bg-black text-arctic-blue px-6 py-3 orbitron font-bold">EXECUTE_WEEKEND &gt;&gt;&gt;</button>
                                    </div>
                                </div>
                                
                                <div className="absolute top-40 right-0 w-full md:w-1/2 layer-3">
                                    <div className="terminal-box ice-white text-black p-8 arctic-glow">
                                        <span className="text-sm orbitron font-bold bg-black text-arctic-blue px-2 py-1 inline-block">AUG_17_2025</span>
                                        <h3 className="text-3xl orbitron font-bold mt-3 mb-4">EVENTS_WEEKLY_MANIFEST</h3>
                                        <p className="mb-4">Dave_Matthews_Band, Adam_Sandler, Mt_Joy, The_Frey, Nelly, additional_entries.</p>
                                        <ul className="space-y-2 mb-6 font-bold">
                                            <li>COMEDY_SHOWS.EXE</li>
                                            <li>LIVE_MUSIC.STREAM</li>
                                            <li>WINE_TASTINGS.APP</li>
                                        </ul>
                                        <button className="bg-black text-arctic-blue px-6 py-3 orbitron font-bold">ACCESS_FULL_LINEUP &gt;&gt;&gt;</button>
                                    </div>
                                </div>
                                
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl layer-2">
                                    <div className="terminal-box p-8">
                                        <span className="text-steel-gray text-sm orbitron font-bold">AUG_09_2025</span>
                                        <h3 className="text-2xl orbitron font-bold mt-2 mb-3 text-white">SUMMER_HEAT_EVENTS.LOG</h3>
                                        <p className="text-white">User_guide: surviving_LA_summer in_optimal_style</p>
                                        <button className="mt-4 text-arctic-blue orbitron font-bold terminal-box px-4 py-2">DISCOVER_DATA &gt;&gt;&gt;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                {/* Subscribe CTA */}
                <section className="py-20 px-8 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="terminal-box p-12 text-center arctic-pulse scanline">
                            <h3 className="text-4xl orbitron font-black mb-4 text-arctic-blue uppercase">INBOX_SUBSCRIPTION.INIT</h3>
                            <p className="text-xl mb-6 text-white">Curate_Los_Angeles_with_us</p>
                            <button className="arctic-blue text-black px-8 py-4 orbitron font-bold text-lg hover:ice-white hover:text-black transition terminal-box">
                                SUBSCRIBE_CURATIONSLA &gt;&gt;&gt;
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ArcticTerminalPage;
