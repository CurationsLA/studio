import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Reimagining a Downtown LA Eatery",
    category: "Case Study",
    description: "How we took a ghost kitchen concept and turned it into a local hotspot with a 300% increase in delivery orders.",
    image: "https://placehold.co/600x400.png",
    aiHint: "modern restaurant",
    href: "#",
  },
  {
    title: "AI Startup Enters the Market",
    category: "Product Launch",
    description: "Launching a new AI discovery tool with a multi-channel media buying strategy, securing placements on major tech podcasts.",
    image: "https://placehold.co/600x400.png",
    aiHint: "technology startup",
    href: "#",
  },
  {
    title: "The CURATIONS x KTLA Morning Show",
    category: "News Feature",
    description: "A deep-dive into our partnership with KTLA to highlight emerging nonprofit organizations in Southern California.",
    image: "https://placehold.co/600x400.png",
    aiHint: "news studio",
    href: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-white">
      <div className="container max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Work</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Stories We&apos;ve Shaped</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Here are a few examples of how we bring brand hearts to the forefront. Each project is a unique curation, a story told with purpose and passion.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden group rounded-xl">
              <CardHeader className="p-0">
                <div className="overflow-hidden rounded-t-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={post.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <Badge variant="secondary" className="bg-highlight text-black">{post.category}</Badge>
                <CardTitle className="mt-4 font-headline text-xl">{post.title}</CardTitle>
                <CardDescription className="mt-2">{post.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={post.href} className="flex items-center text-primary font-semibold">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
