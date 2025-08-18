import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-8">CurationCraft Prototypes</h1>
      <div className="flex gap-8">
        <Link href="/traditional-mock-1" className="text-lg text-primary hover:underline">
          Traditional Mock 1 - Current Vibes
        </Link>
        <Link href="/neon-editorial" className="text-lg text-accent hover:underline">
          NEON EDITORIAL
        </Link>
      </div>
    </div>
  );
}
