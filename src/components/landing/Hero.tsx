import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-primary/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="container max-w-5xl py-24 sm:py-32 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          We curate the <span className="text-primary">HEART</span> of BRANDS.
          <br />
          And the <span className="text-accent">NEWS</span> they BREAK.
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-muted-foreground">
          Welcome to CURATIONS V2. We are a dual-platform media powerhouse, part creative agency, part newsroom. We don&apos;t just think outside the box; we throw the box away.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#services">Explore Our Craft</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Start a Project &rarr;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
