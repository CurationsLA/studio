'use client'
import Link from 'next/link';

export default function SilverVibesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-black text-gray-300 mb-4">🥈 Silver Vibes</h1>
      <p className="text-lg text-gray-400 mb-8">Primary workspace for final draft elements and pages.</p>
      <Link href="/v2-inspirations" className="px-6 py-3 bg-gray-300 text-black font-bold rounded-lg hover:bg-gray-400 transition">
        Back to Inspirations
      </Link>
    </div>
  );
}
