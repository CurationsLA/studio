import Link from 'next/link';

export default function SilverGoodiesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Silver Goodies</h1>
      <p className="text-lg text-gray-600 mb-12">Explore curated elements and components.</p>
      
      <div className="flex space-x-4 mb-8">
        <Link href="/vibes/silver-vibes/goodies/silver-palette-1-1" passHref>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
            Silver Palette 1.1
          </button>
        </Link>
        {/* Future microcards for other goodies will go here */}
      </div>

      <Link href="/vibes/silver-vibes" passHref>
        <button className="mt-8 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
          Back to Silver Vibes
        </button>
      </Link>
    </div>
  );
}
