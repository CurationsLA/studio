import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section id="contact" className="py-16 sm:py-20 text-center">
      <div className="container max-w-7xl">
          <form className="mx-auto mt-10 flex max-w-md gap-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-l-md rounded-r-none border-2 border-highlight border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Your email address"
            />
            <Button type="submit" className="rounded-l-none rounded-r-md bg-primary hover:bg-accent text-white font-bold">
              Subscribe
            </Button>
          </form>
      </div>
    </section>
  );
}
