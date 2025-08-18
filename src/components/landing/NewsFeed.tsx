'use client';

import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface FeedItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
}

function ArticleSkeleton() {
    return (
        <div className="py-5">
            <Skeleton className="h-4 w-1/3 mb-2" />
            <Skeleton className="h-6 w-full mb-3" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-4/5 mb-3" />
            <Skeleton className="h-4 w-1/4" />
        </div>
    )
}

export default function NewsFeed() {
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

        setFeed(items.slice(0, 4));
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
    });
  }

  return (
    <div className="bg-white text-[#474747] p-5">
      <div className="max-w-[750px] mx-auto">
        {loading && (
          <div>
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          feed.map((item, index) => (
            <div key={item.link} className="border-b border-[#e0e0e0] py-5">
              <div className="text-sm text-[#999] mb-1.5">{formatDate(item.pubDate)}</div>
              <h2 className="font-semibold text-lg uppercase mb-2.5 leading-tight text-[#474747]">{item.title.toUpperCase()}</h2>
              <p className="text-base mb-3 leading-normal text-[#333]">{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm text-[#6370E7] no-underline uppercase hover:underline">
                Read More
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
