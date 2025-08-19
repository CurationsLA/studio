
'use client';

const CrimsonCommandPage = () => {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Rajdhani:wght@400;600;700&display=swap');
                
                body {
                    font-family: 'Courier Prime', monospace;
                }
                
                .crimson-red {
                    background: #DC143C;
                    box-shadow: 0 0 30px rgba(220, 20, 60, 0.5);
                }
                
                .blood-orange {
                    background: #FF4500;
                    box-shadow: 0 0 30px rgba(255, 69, 0, 0.5);
                }
                
                .dark-gold {
                    background: #B8860B;
                    box-shadow: 0 0 30px rgba(184, 134, 11, 0.3);
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
                    -webkit-text-stroke: 3px #DC143C;
                    -webkit-text-fill-color: transparent;
                }
                
                @keyframes command-pulse {
                    0%, 100% { 
                        transform: scale(1) skewX(0deg);
                        filter: contrast(1) saturate(1);
                        border-color: #DC143C;
                    }
                    50% { 
                        transform: scale(1.02) skewX(1deg);
                        filter: contrast(1.2) saturate(1.3);
                        border-color: #FF4500;
                    }
                }
                
                .command-pulse {
                    animation: command-pulse 2s ease-in-out infinite;
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
                    background: rgba(220, 20, 60, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(220, 20, 60, 0.2);
                }
                
                .crimson-glow {
                    box-shadow: 0 0 40px rgba(220, 20, 60, 0.6),
                                inset 0 0 40px rgba(220, 20, 60, 0.1);
                }
                
                .text-crimson-red {
                    color: #DC143C;
                    text-shadow: 0 0 10px rgba(220, 20, 60, 0.8);
                }
                
                .text-blood-orange {
                    color: #FF4500;
                    text-shadow: 0 0 10px rgba(255, 69, 0, 0.8);
                }
                
                .command-box {
                    border: 3px solid #DC143C;
                    background: #1C1C1C;
                    box-shadow: 
                        inset 0 0 15px rgba(220, 20, 60, 0.2),
                        0 0 15px rgba(220, 20, 60, 0.3);
                }
                
                .rajdhani {
                    font-family: 'Rajdhani', sans-serif;
                }
                
                .glitch {
                    position: relative;
                }
                
                .glitch::before,
                .glitch::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
                .glitch::before {
                    animation: glitch-1 0.5s infinite linear alternate-reverse;
                    color: #FF4500;
                    z-index: -1;
                }
                
                .glitch::after {
                    animation: glitch-2 0.5s infinite linear alternate-reverse;
                    color: #B8860B;
                    z-index: -2;
                }
                
                @keyframes glitch-1 {
                    0% { clip: rect(64px, 9999px, 66px, 0); }
                    25% { clip: rect(85px, 9999px, 140px, 0); }
                    50% { clip: rect(36px, 9999px, 105px, 0); }
                    75% { clip: rect(62px, 9999px, 180px, 0); }
                    100% { clip: rect(91px, 9999px, 94px, 0); }
                }
                
                @keyframes glitch-2 {
                    0% { clip: rect(65px, 9999px, 119px, 0); }
                    25% { clip: rect(52px, 9999px, 74px, 0); }
                    50% { clip: rect(79px, 9999px, 85px, 0); }
                    75% { clip: rect(75px, 9999px, 5px, 0); }
                    100% { clip: rect(67px, 9999px, 90px, 0); }
                }
                
                .typing-cursor::after {
                    content: '█';
                    animation: cursor-blink 1s infinite;
                    color: #DC143C;
                }
                
                @keyframes cursor-blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
            <div className="bg-black text-white min-h-screen">
                {/* Floating Corner Badge */}
                <div className="fixed top-20 right-4 z-50 crimson-red text-white px-4 py-2 rotate-12 shadow-xl command-box">
                    <span className="text-xs font-bold rajdhani">V2_DEPLOY</span>
                </div>

                {/* Top Bar */}
                <div className="fixed top-0 w-full z-40 bg-gray-900 text-white border-b-2 border-crimson-red">
                    <div className="flex justify-between items-center px-6 py-2 text-xs">
                        <span className="text-crimson-red">ROOT@LAX:~$ GLOBAL_ACCESS</span>
                        <span className="hidden md:block rajdhani">CURATIONS_x_CURATIONSLA_|_EST_2017</span>
                        <span className="text-blood-orange">GOOGLE_PARTNERSHIP_ACTIVE</span>
                    </div>
                    <div className="dark-gold text-black px-6 py-1 text-center">
                        <marquee className="text-sm font-bold rajdhani">
                            EXEC: CLIENT_DISCOUNT_20% | AI_WORKSHOPS_DEPLOY | SUBSCRIBER_BASE_50K | RECRUITMENT_PROTOCOL_ACTIVE 
                        </marquee>
                    </div>
                </div>

                {/* Hero Grid Layout */}
                <section id="home" className="min-h-screen pt-20 px-4 md:px-8 bg-black">
                    <div className="magazine-grid items-center min-h-screen">
                        {/* Main Title */}
                        <div className="span-8 z-10">
                            <div>
                                <h1 className="text-4xl md:text-6xl rajdhani font-black leading-tight uppercase">
                                    <span className="block slide-in text-crimson-red glitch" data-text="CURATIONS">CURATIONS</span>
                                    <span className="block text-outline slide-in" style={{animationDelay: '0.2s'}}>CURATIONS</span>
                                    <span className="block text-white slide-in" style={{animationDelay: '0.4s'}}>CURATIONS</span>
                                </h1>
                            </div>
                            
                            {/* Crimson Command Motto Expression */}
                            <div className="mt-12 space-y-6">
                                <div className="command-box p-6 command-pulse">
                                    <h2 className="text-2xl md:text-3xl rajdhani font-black uppercase text-center text-crimson-red typing-cursor">
                                        EXEC: CURATE_PROTOCOL
                                    </h2>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="command-box crimson-red text-white p-8 command-pulse" style={{animationDelay: '0.3s'}}>
                                        <h3 className="text-3xl md:text-4xl rajdhani font-black text-center uppercase">
                                            &gt;&gt; HEART_CORE
                                        </h3>
                                        <div className="mt-2 text-center text-sm font-bold">
                                            EMOTIONAL_TARGETING_ACTIVE
                                        </div>
                                        <div className="mt-3 border border-white/30 p-2">
                                            <div className="text-xs font-mono">LOVE_METRICS: 97.3%</div>
                                        </div>
                                    </div>
                                    
                                    <div className="command-box blood-orange text-white p-8 command-pulse" style={{animationDelay: '0.6s'}}>
                                        <h3 className="text-3xl md:text-4xl rajdhani font-black text-center uppercase">
                                            &gt;&gt; HEADLINE_NET
                                        </h3>
                                        <div className="mt-2 text-center text-sm font-bold">
                                            MEDIA_INFILTRATION_LIVE
                                        </div>
                                        <div className="mt-3 border border-white/30 p-2">
                                            <div className="text-xs font-mono">REACH_STATUS: MAXIMUM</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="command-box dark-gold text-white p-6 command-pulse" style={{animationDelay: '0.9s'}}>
                                    <h2 className="text-3xl md:text-4xl rajdhani font-black uppercase text-center">
                                        TARGET: &lt;BRAND_ENTITIES&gt;
                                    </h2>
                                    <div className="mt-3 text-center text-sm font-bold">
                                        MISSION_STATUS: ACCOMPLISHED
                                    </div>
                                </div>
                            </div>
                            
                            {/* Quick Stats */}
                            <div className="mt-8 flex gap-4 flex-wrap">
                                <div className="command-box p-3">
                                    <p className="text-2xl rajdhani font-black text-crimson-red">500+</p>
                                    <p className="text-xs uppercase">TARGETS</p>
                                </div>
                                <div className="command-box p-3">
                                    <p className="text-2xl rajdhani font-black text-blood-orange">50K+</p>
                                    <p className="text-xs uppercase">AGENTS</p>
                                </div>
                                <div className="command-box p-3">
                                    <p className="text-2xl rajdhani font-black text-white">8_YRS</p>
                                    <p className="text-xs uppercase">UPTIME</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Side Panel */}
                        <div className="span-4 space-y-4 z-20">
                            <div className="command-box dark-gold text-white p-6 hover:scale-105 transition">
                                <h3 className="rajdhani font-black text-xl mb-3 uppercase">COMMAND_MENU:</h3>
                                <ul className="space-y-2 text-sm font-bold">
                                    <li className="flex items-center"><span className="mr-2 text-crimson-red">&gt;</span> RESTAURANT_DEPLOY</li>
                                    <li className="flex items-center"><span className="mr-2 text-crimson-red">&gt;</span> AI_DISCOVERY_INIT</li>
                                    <li className="flex items-center"><span className="mr-2 text-crimson-red">&gt;</span> MEDIA_ACQUISITION</li>
                                    <li className="flex items-center"><span className="mr-2 text-crimson-red">&gt;</span> INFLUENCER_SYNC</li>
                                    <li className="flex items-center"><span className="mr-2 text-crimson-red">&gt;</span> EXECUTIVE_BRAND</li>
                                </ul>
                            </div>
                            
                            <div className="command-box p-6">
                                <p className="rajdhani font-black text-lg uppercase text-crimson-red">SYSTEM_STATUS:</p>
                                <p className="text-3xl mt-2 command-pulse rajdhani font-black text-white glitch" data-text="[ONLINE]">[ONLINE]</p>
                                <div className="mt-3 space-y-1">
                                    <div className="w-full bg-gray-800 h-4 command-box">
                                        <div className="crimson-red h-4 w-full command-pulse"></div>
                                    </div>
                                    <p className="text-xs text-right font-bold text-crimson-red">100%_COMBAT_READY</p>
                                </div>
                            </div>
                            
                            <div className="command-box p-6">
                                <p className="text-sm rajdhani font-black mb-2 uppercase text-blood-orange">SPECIAL_OPERATION:</p>
                                <p className="text-xs font-bold">One deserving brand receives full service FREE yearly through our Grow with Google Partnership</p>
                                <button className="mt-3 text-dark-gold text-xs rajdhani font-black uppercase underline">INITIATE_APPLICATION &gt;&gt;</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <div className="bg-gray-900">
                    <section className="py-20 px-8">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-7xl rajdhani font-black mb-16 text-center uppercase text-crimson-red command-pulse glitch" data-text="[OPERATIONS]">
                                [OPERATIONS]
                            </h2>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Service Cards */}
                                <div className="command-box hover:bg-gray-800 transition p-8">
                                    <span className="text-5xl">🍽️</span>
                                    <h3 className="text-xl rajdhani font-black mt-4 uppercase text-crimson-red">RESTAURANT_WARFARE</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>&gt; GRAND_OPENING_STRIKE</li>
                                        <li>&gt; GHOST_KITCHEN_STEALTH</li>
                                        <li>&gt; MENU_MARKETING_BLITZ</li>
                                        <li>&gt; THIRD_PARTY_INVASION</li>
                                    </ul>
                                </div>
                                
                                <div className="command-box hover:bg-gray-800 transition p-8">
                                    <span className="text-5xl">🤖</span>
                                    <h3 className="text-xl rajdhani font-black mt-4 uppercase text-blood-orange">AI_DISCOVERY_UNIT</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>&gt; CITATION_WARFARE_V3</li>
                                        <li>&gt; PROMPT_ENGINEERING_CORE</li>
                                        <li>&gt; TECH_STACK_INFILTRATION</li>
                                        <li>&gt; TEAM_WORKSHOP_ASSAULT</li>
                                    </ul>
                                </div>
                                
                                <div className="command-box hover:bg-gray-800 transition p-8">
                                    <span className="text-5xl">📺</span>
                                    <h3 className="text-xl rajdhani font-black mt-4 uppercase text-white">MEDIA_DOMINATION</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>&gt; NETFLIX_INFILTRATION</li>
                                        <li>&gt; PODCAST_AD_WARFARE</li>
                                        <li>&gt; LINEAR_TV_CONQUEST</li>
                                        <li>&gt; SOCIAL_MEDIA_BLITZ</li>
                                    </ul>
                                </div>
                                
                                <div className="command-box hover:bg-gray-800 transition p-8">
                                    <span className="text-5xl">✨</span>
                                    <h3 className="text-xl rajdhani font-black mt-4 uppercase text-crimson-red">CREATIVE_BATTALION</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>&gt; INFLUENCER_RECRUITMENT</li>
                                        <li>&gt; UGC_CAMPAIGN_DEPLOY</li>
                                        <li>&gt; CONTENT_CREATION_WAR</li>
                                        <li>&gt; SOCIAL_STRATEGY_COMMAND</li>
                                    </ul>
                                </div>
                                
                                <div className="command-box hover:bg-gray-800 transition p-8">
                                    <span className="text-5xl">📰</span>
                                    <h3 className="text-xl rajdhani font-black mt-4 uppercase text-blood-orange">COMMUNICATION_HQ</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>&gt; CRISIS_MANAGEMENT_PROTOCOL</li>
                                        <li>&gt; EXECUTIVE_BRAND_WARFARE</li>
                                        <li>&gt; PR_STRATEGY_COMMAND</li>
                                        <li>&gt; MEDIA_RELATIONS_UNIT</li>
                                    </ul>
                                </div>
                                
                                <div className="command-box hover:bg-gray-800 transition p-8">
                                    <span className="text-5xl">🚀</span>
                                    <h3 className="text-xl rajdhani font-black mt-4 uppercase text-white">FULL_STACK_ARSENAL</h3>
                                    <ul className="mt-4 space-y-2 text-sm font-bold">
                                        <li>&gt; SEO_SEM_ARTILLERY</li>
                                        <li>&gt; EMAIL_CRM_MISSILES</li>
                                        <li>&gt; ANALYTICS_SURVEILLANCE</li>
                                        <li>&gt; CONVERSION_WEAPONRY</li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/* Google Partner */}
                            <div className="mt-16 text-center">
                                <div className="inline-block command-box p-8">
                                    <p className="text-2xl rajdhani font-black text-crimson-red uppercase command-pulse">GOOGLE_PARTNERSHIP_CLASSIFIED</p>
                                    <p className="mt-2 text-sm font-bold">One deserving brand receives full military-grade service annually.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CurationsLA Section */}
                    <section className="py-20 px-8 relative bg-black">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-6xl md:text-8xl rajdhani font-black">
                                    <span className="text-white">INTEL_FEED_FROM</span>
                                </h2>
                                <h2 className="text-6xl md:text-8xl rajdhani font-black">
                                    <span className="text-crimson-red command-pulse glitch" data-text="CURATIONS">CURATIONS</span><span className="text-blood-orange">LA</span>
                                </h2>
                            </div>
                            
                            {/* Command Post Cards */}
                            <div className="relative h-[700px] md:h-[500px]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl layer-1">
                                    <div className="command-box p-8 opacity-50">
                                        <span className="text-xs text-crimson-red">INTEL_NEXT_WEEK</span>
                                        <h3 className="text-2xl rajdhani font-bold mt-2 text-white">SUMMER_CONCERT_OPERATION</h3>
                                    </div>
                                </div>
                                
                                <div className="absolute top-20 left-0 w-full md:w-1/2 layer-2">
                                    <div className="blood-orange text-white p-8 crimson-glow">
                                        <span className="text-sm rajdhani font-bold">AUG_15_2025</span>
                                        <h3 className="text-3xl rajdhani font-bold mt-3 mb-4">FRIDAY_ASSAULT_PROTOCOL</h3>
                                        <p>Weekend_targets: rooftop_parties, beach_clubs, taco_trucks, full_spectrum_dominance.</p>
                                        <button className="mt-4 bg-black text-blood-orange px-6 py-3 rajdhani font-bold command-box">EXECUTE_WEEKEND &gt;&gt;</button>
                                    </div>
                                </div>
                                
                                <div className="absolute top-40 right-0 w-full md:w-1/2 layer-3">
                                    <div className="command-box crimson-red text-white p-8 crimson-glow">
                                        <span className="text-sm rajdhani font-bold bg-black text-crimson-red px-2 py-1 inline-block">AUG_17_2025</span>
                                        <h3 className="text-3xl rajdhani font-bold mt-3 mb-4">EVENTS_TACTICAL_BRIEFING</h3>
                                        <p className="mb-4">Dave_Matthews_Band, Adam_Sandler, Mt_Joy, The_Frey, Nelly, additional_targets.</p>
                                        <ul className="space-y-2 mb-6 font-bold">
                                            <li>&gt; COMEDY_SHOWS_OPERATION</li>
                                            <li>&gt; LIVE_MUSIC_CAMPAIGN</li>
                                            <li>&gt; WINE_TASTINGS_MISSION</li>
                                        </ul>
                                        <button className="bg-black text-crimson-red px-6 py-3 rajdhani font-bold command-box">ACCESS_FULL_INTEL &gt;&gt;</button>
                                    </div>
                                </div>
                                
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl layer-2">
                                    <div className="command-box p-8">
                                        <span className="text-blood-orange text-sm rajdhani font-bold">AUG_09_2025</span>
                                        <h3 className="text-2xl rajdhani font-bold mt-2 mb-3 text-white">SUMMER_HEAT_TACTICAL_LOG</h3>
                                        <p className="text-white">Survival_guide: LA_summer_optimal_combat_style</p>
                                        <button className="mt-4 text-crimson-red rajdhani font-bold command-box px-4 py-2">DISCOVER_INTEL &gt;&gt;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                {/* Subscribe CTA */}
                <section className="py-20 px-8 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <div className="command-box p-12 text-center command-pulse">
                            <h3 className="text-4xl rajdhani font-black mb-4 text-crimson-red uppercase glitch" data-text="INBOX_INFILTRATION">INBOX_INFILTRATION</h3>
                            <p className="text-xl mb-6 text-white">Join_the_LA_resistance_movement</p>
                            <button className="crimson-red text-white px-8 py-4 rajdhani font-bold text-lg hover:blood-orange hover:text-white transition command-box">
                                SUBSCRIBE_CURATIONSLA &gt;&gt;&gt;
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CrimsonCommandPage;
