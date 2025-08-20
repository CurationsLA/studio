
'use client';

import Link from 'next/link';
import { ArrowRight, BarChartHorizontal } from 'lucide-react';

interface Inspiration {
  id: string;
  title: string;
  description: string;
  styleFeatures: string[];
  power: number; // My "thought metric" from 0 to 100
  href: string;
}

// Data for the Silver Vibes inspirations we've created so far.
const silverInspirations: Inspiration[] = [
  {
    id: 'classic-homepage',
    title: 'Classic Homepage',
    description: 'A clean, foundational brutalist design with a focus on clear structure and classic color blocking.',
    styleFeatures: ['High-contrast', 'Classic Brutalism', 'Structured Grid'],
    power: 85,
    href: '/silver-vibes/classic-homepage',
  },
  {
    id: 'mint-and-magenta',
    title: 'Mint and Magenta',
    description: 'A softer, more vibrant take on brutalism, introducing a fresh and energetic color palette.',
    styleFeatures: ['Softer Palette', 'Vibrant', 'Energetic Feel'],
    power: 88,
    href: '/silver-vibes/mint-and-magenta',
  },
  {
    id: 'monochrome-power',
    title: 'Monochrome Power',
    description: 'A high-impact, black-and-white design that emphasizes raw structure and bold typography.',
    styleFeatures: ['Monochrome', 'High-Contrast', 'Bold Typography'],
    power: 92,
    href: '/silver-vibes/monochrome-power',
  },
  {
    id: 'electric-sunset',
    title: 'Electric Sunset',
    description: 'A warm, energetic palette that evokes the feeling of a vibrant sunset, blended with our core brutalist structure.',
    styleFeatures: ['Warm Palette', 'Energetic', 'Sunset Vibe'],
    power: 89,
    href: '/silver-vibes/electric-sunset',
  },
  {
    id: 'cyberpunk-neon',
    title: 'Cyberpunk Neon',
    description: 'A futuristic, high-tech design with a dark mode, neon accents, and a cyberpunk aesthetic.',
    styleFeatures: ['Cyberpunk', 'Neon Accents', 'Dark Mode'],
    power: 95,
    href: '/silver-vibes/cyberpunk-neon',
  },
  {
    id: 'creative-time',
    title: 'Creative Time',
    description: 'An interactive and dynamic design featuring an animated "Creativity Power" meter.',
    styleFeatures: ['Interactive', 'Animated Elements', 'Dynamic'],
    power: 90,
    href: '/silver-vibes/creative-time',
  },
  {
    id: 'stepped-brutalist',
    title: 'Stepped Brutalist',
    description: 'Adds a unique 3D depth to the brutalist style using layered, "stepped" box shadows.',
    styleFeatures: ['3D Effect', 'Layered Shadows', 'Depth'],
    power: 93,
    href: '/silver-vibes/stepped-brutalist',
  },
];

const PowerIcon = ({ power }: { power: number }) => {
  const height = 24; // height of the icon
  const greenHeight = (power / 100) * height;
  const redHeight = height - greenHeight;

  return (
    <div className="w-2 h-6 flex flex-col rounded-full overflow-hidden border border-white/50">
      <div style={{ height: `${redHeight}px`, backgroundColor: '#ef4444' }}></div>
      <div style={{ height: `${greenHeight}px`, backgroundColor: '#22c55e' }}></div>
    </div>
  );
};


const InspirationCard = ({ inspiration }: { inspiration: Inspiration }) => {
    return (
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col h-full hover:border-pink-500/80 transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-pink-500/10">
            <div className="absolute top-4 right-4">
                <PowerIcon power={inspiration.power} />
            </div>
            <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2 text-white">{inspiration.title}</h2>
                <p className="text-gray-400 text-sm mb-4 h-16">{inspiration.description}</p>
                
                <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Style Features</p>
                    <div className="flex flex-wrap gap-2">
                        {inspiration.styleFeatures.map(tag => (
                            <span key={tag} className="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="flex-none">
                <Link href={inspiration.href} className="group inline-flex items-center text-pink-400 font-bold hover:text-pink-300 transition-colors">
                    View Inspiration
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    )
}

export default function SilverVibesArchivePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white p-8">
       <header className="mb-12 text-center">
            <h1 className="text-5xl font-black text-gray-300 mb-2">Silver Vibes Archive</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">An organized collection of final draft inspirations. Review, compare, and select the best elements for the master V2 build.</p>
            <Link href="/v2-inspirations" className="mt-4 inline-flex items-center text-sm font-bold text-pink-400 hover:text-pink-300 transition-colors">
                <ArrowRight className="mr-2 h-4 w-4 transform rotate-180" />
                Back to Main Inspiration Board
            </Link>
       </header>
       <main>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {silverInspirations.map(inspiration => (
                    <InspirationCard key={inspiration.id} inspiration={inspiration} />
                ))}
            </div>
       </main>
    </div>
  );
}

