'use client';
import { inspirations } from "@/app/inspirations";
import type { Inspiration } from "@/app/inspirations/inspiration1";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

const InspirationCard = ({ inspiration }: { inspiration: Inspiration }) => {
    const cardStyle = {
        borderColor: inspiration.themeColor,
        boxShadow: `0 0 20px ${inspiration.themeColor}33`,
    };

    const headlineStyle = {
        color: inspiration.themeColor
    }

    const ctaStyle = {
        backgroundColor: inspiration.themeColor,
        color: inspiration.themeColor === '#FFFFFF' || inspiration.themeColor === '#EBF998' || inspiration.themeColor === '#00FF99' ? '#000' : '#fff'
    }

    return (
        <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6 flex flex-col h-full hover:border-primary transition-all duration-300" style={cardStyle}>
            <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono bg-gray-800 text-gray-400 px-2 py-1 rounded">{inspiration.layout}</span>
                    <span className="text-xs font-mono text-gray-500">{inspiration.id}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 text-white">{inspiration.title}</h2>
                <h3 className="text-3xl font-black mb-3" style={headlineStyle}>{inspiration.headline}</h3>
                <p className="text-gray-400 text-sm mb-4">{inspiration.description}</p>
                
                {inspiration.stats && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {inspiration.stats.map(stat => (
                            <div key={stat.label} className="bg-gray-800 p-2 rounded">
                                <p className="text-lg font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                )}
                {inspiration.posts && (
                     <div className="space-y-2 mb-4">
                        {inspiration.posts.map(post => (
                            <div key={post.title} className="text-sm bg-gray-800 p-2 rounded">
                               <p className="font-bold text-white">{post.title}</p>
                               {post.date && <p className="text-xs text-gray-500">{post.date}</p>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <div className="flex-none">
                <div className="flex flex-wrap gap-2 mb-4">
                    {inspiration.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300">{tag}</Badge>
                    ))}
                </div>
                {inspiration.cta && (
                    <Button asChild className="w-full font-bold" style={ctaStyle}>
                        <Link href={inspiration.cta.url}>
                            {inspiration.cta.label}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    )
}

export default function V2InspirationsPage() {
    return (
        <div className="bg-black min-h-screen text-white">
             <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-black tracking-tighter mb-2">V2 INSPIRATION BOARD</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">A collection of ten design frameworks and creative concepts provided by Perplexity to guide the V2 MASTER FINAL VIBE CODE.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {inspirations.map(inspiration => (
                        <InspirationCard key={inspiration.id} inspiration={inspiration} />
                    ))}
                </div>
            </div>
        </div>
    );
}
