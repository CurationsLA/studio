
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">CurationCraft Prototypes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        <Link href="/v2-inspirations" className="text-lg text-primary hover:underline font-black text-2xl">
          V2 INSPIRATIONS
        </Link>
        <Link href="/editorial-stack" className="text-lg text-primary hover:underline font-bold">
          Editorial Stack (Claude)
        </Link>
        <Link href="/traditional-mock-1" className="text-lg text-primary hover:underline">
          Traditional Mock 1 - Current Vibes
        </Link>
        <Link href="/neon-editorial" className="text-lg text-accent hover:underline">
          NEON EDITORIAL
        </Link>
        <Link href="/zine-mock" className="text-lg text-accent hover:underline">
          Zine Mock
        </Link>
        <Link href="/zine-remix" className="text-lg text-accent hover:underline">
          Zine Remix
        </Link>
        <Link href="/split-screen-magazine" className="text-lg text-accent hover:underline">
          Split Screen Magazine
        </Link>
        <Link href="/asymmetric-grid" className="text-lg text-accent hover:underline">
          Asymmetric Grid
        </Link>
        <Link href="/college-chaos" className="text-lg text-accent hover:underline">
          College Chaos
        </Link>
        <Link href="/layered-depth" className="text-lg text-accent hover:underline">
          Layered Depth
        </Link>
        <Link href="/clean-zine-layers" className="text-lg text-accent hover:underline">
          Clean Zine Layers
        </Link>
        <Link href="/gradient-flow-zine" className="text-lg text-accent hover:underline">
          Gradient Flow Zine
        </Link>
        <Link href="/curated-mix" className="text-lg text-green-500 hover:underline">
          Curated Mix
        </Link>
        <Link href="/elevated-editorial" className="text-lg text-accent hover:underline">
          ELEVATED EDITORIAL
        </Link>
        <Link href="/heartbeat-pulse" className="text-lg text-accent hover:underline">
          Heartbeat Pulse
        </Link>
        <Link href="/magazine-stack" className="text-lg text-accent hover:underline">
          Magazine Stack
        </Link>
        <Link href="/neon-typography" className="text-lg text-accent hover:underline">
          Neon Typography
        </Link>
        <Link href="/minimal-brutalist" className="text-lg text-accent hover:underline">
          Minimal Brutalist
        </Link>
        <Link href="/brutalist-man" className="text-lg text-accent hover:underline">
          Brutalist Man v2
        </Link>
        <Link href="/arctic-terminal" className="text-lg text-accent hover:underline">
          Arctic Terminal
        </Link>
        <Link href="/crimson-command" className="text-lg text-accent hover:underline">
          Crimson Command
        </Link>
        <Link href="/74-good-vibes" className="text-lg text-accent hover:underline">
          74 Good Vibes
        </Link>
        <Link href="/minimal-74-brutalist" className="text-lg text-accent hover:underline font-bold">
          Minimal 74 Brutalist
        </Link>
        <Link href="/perplexity-elements-3" className="text-lg text-accent hover:underline font-bold">
          Perplexity Elements 3
        </Link>
        <Link href="/ultra-brutalist-newspaper-grid" className="text-lg text-accent hover:underline font-bold">
          Ultra Brutalist Newspaper Grid
        </Link>
        <Link href="/techno-neon-pulse" className="text-lg text-accent hover:underline font-bold">
          Techno Neon Pulse
        </Link>
        <Link href="/minimal-luxe-editorial" className="text-lg text-accent hover:underline font-bold">
          Minimal Luxe Editorial
        </Link>
        <Link href="/zine-collage-energy" className="text-lg text-accent hover:underline font-bold">
          Zine Collage Energy
        </Link>
        <Link href="/system-grid-modular" className="text-lg text-accent hover:underline font-bold">
          System Grid Modular
        </Link>
      </div>
    </div>
  );
}
