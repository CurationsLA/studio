import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white py-14 sm:py-20 text-center shadow-[0_7px_38px_#EBF99813]">
      <div className="container max-w-5xl">
        <h1 className="font-headline text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          We curate the <span className="text-primary">HEART</span> of <span className="text-accent">brands</span>
          <br />
          And the <span className="text-accent">NEWS</span> they <span className="text-primary">CREATE</span>
        </h1>
        <p className="mt-5 text-muted-foreground font-semibold tracking-wide">
          Dual-platform media powerhouse. Creativity in every pixel. Community in every beat.
        </p>
      </div>
    </section>
  );
}
