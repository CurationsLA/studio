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
      </div>
    </div>
  );
}
