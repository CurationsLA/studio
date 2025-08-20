'use client'
import Link from 'next/link';

export default function SilverVibesArchivePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-black text-gray-400 mb-4">Silver Vibes Archive</h1>
      <p className="text-lg text-gray-500 mb-8">This is the archive for older or alternative Silver Vibe drafts.</p>
       <Link href="/v2-inspirations" className="px-6 py-3 bg-gray-400 text-black font-bold rounded-lg hover:bg-gray-500 transition">
        Back to Inspirations
      </Link>
    </div>
  );
}
