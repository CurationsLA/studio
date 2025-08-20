
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Rss } from 'lucide-react';

interface FeedItem {
    title: string;
    pubDate: string;
    link: string;
    description: string;
}

const LiveDispatches = () => {
    const [feed, setFeed] = useState<FeedItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFeed() {
            try {
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://rss.beehiiv.com/feeds/tXcBFCgC6G.xml');
                const data = await response.json();
                if (data.items) {
                    setFeed(data.items.slice(0, 3));
                }
            } catch (error) {
                console.error("Failed to load RSS feed:", error);
            } finally {
                setLoading(false);
            }
        }
        loadFeed();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date).toUpperCase();
    };

    return (
        <div className="brutal-box mb-4 bg-black text-white p-6">
            <h3 className="font-headline font-bold text-xl mb-3 uppercase flex items-center gap-2">
                <Rss className="w-5 h-5 text-highlight" />
                FIELD REPORTS
            </h3>
            {loading ? (
                 <div className="space-y-3">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                 </div>
            ) : (
                <ul className="space-y-3">
                    {feed.map((item, index) => (
                        <li key={index} className="border-b border-gray-700 pb-3 last:border-b-0">
                             <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-bold text-sm hover:text-primary transition-colors">
                                {item.title}
                            </a>
                            <p className="text-xs text-gray-400 mt-1">
                                {formatDate(item.pubDate)} &bull; CURATIONSLA
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LiveDispatches;
