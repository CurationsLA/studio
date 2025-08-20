'use client'
import Link from 'next/link';

export default function GoldenVibesDeck() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-black text-yellow-300 mb-4">Golden Vibes Deck</h1>
      <p className="text-lg text-gray-400 mb-8">This is the holding area for elements demoted from the Golden Vibes (Master) bucket.</p>
      <Link href="/v2-inspirations" className="px-6 py-3 bg-yellow-300 text-black font-bold rounded-lg hover:bg-yellow-400 transition">
        Back to Inspirations
      </Link>
    </div>
  );
}
