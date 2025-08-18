import { Award, Heart } from 'lucide-react';

export default function Partnerships() {
  return (
    <section className="bg-transparent py-24 sm:py-32">
      <div className="container max-w-7xl">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground font-headline">
                Community-First, Always.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We believe in lifting our community. Our partnerships and initiatives are designed to empower brands that are making a difference.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">Proud Grow with Google Partner</h3>
                  <p className="mt-1 text-muted-foreground">
                    This boutique relationship allows us to serve our Los Angeles community with workshops and personalized support, helping local businesses thrive online.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Heart className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">CURATIONS Digital Steward Discount</h3>
                  <p className="mt-1 text-muted-foreground">
                    We proudly offer complimentary services to one nonprofit or underserved brand annually. We help those who can&apos;t help themselves yet, because we believe in their mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
