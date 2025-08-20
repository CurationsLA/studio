'use client'
import Link from 'next/link';

export default function GlitterVibesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-black text-yellow-500 mb-4">✨ Glitter Vibes</h1>
      <p className="text-lg text-gray-400 mb-8">Staging area for curated components ready for master.</p>
      <Link href="/v2-inspirations" className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition">
        Back to Inspirations
      </Link>
    </div>
  );
}
