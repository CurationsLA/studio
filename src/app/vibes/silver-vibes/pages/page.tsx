import Link from 'next/link';

export default function SilverPagesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#fafbfc]">
      <h1 className="text-4xl font-bold mb-8 text-black">Silver Pages</h1>
      <p className="text-lg text-gray-600 mb-12">Explore curated pages and homepages.</p>
      
      <div className="flex space-x-4 mb-8">
        <Link href="/vibes/silver-vibes/pages/viral-1-1" passHref>
          <button className="px-6 py-3 bg-[#FF5BF1] text-white rounded-lg shadow-md hover:bg-[#D946EF] transition-colors brutal-box-shadow border-4 border-black font-bold">
            Viral 1.1
          </button>
        </Link>
        {/* Future microcards for other pages will go here */}
      </div>

      <Link href="/vibes/silver-vibes" passHref>
        <button className="mt-8 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors brutal-box-shadow border-4 border-black font-bold">
          Back to Silver Vibes
        </button>
      </Link>
    </div>
  );
}