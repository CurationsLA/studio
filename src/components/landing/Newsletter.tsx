import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container max-w-7xl">
        <div className="relative isolate overflow-hidden bg-primary/90 px-6 py-24 text-center shadow-2xl rounded-2xl sm:px-16">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-t from-primary to-accent opacity-20 animate-[spin_20s_linear_infinite]" />
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">
            Get the Curation in Your Inbox
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
            Join our beehiiv newsletter for the latest in brand news, creative insights, and stories from the heart of culture. No spam, just value.
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/90 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <Button type="submit" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
