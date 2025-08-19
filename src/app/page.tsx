import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-8">CurationCraft Prototypes</h1>
      <div className="flex flex-col gap-4">
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
          Brutalist Man
        </Link>
      </div>
    </div>
  );
}
