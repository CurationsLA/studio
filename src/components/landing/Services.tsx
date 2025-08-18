import { Card, CardContent } from "@/components/ui/card";
import NewsFeed from "./NewsFeed";

const services = [
    { title: "Business Coverage", description: "Grand openings, special events, and membership campaigns." },
    { title: "Restaurant Curation", description: "Menu launches, events, and third-party app representation." },
    { title: "Partnership Orchestration", description: "Hyper-focused campaigns with influencers and brands." },
    { title: "Executive & Corporate Branding", description: "Crafting powerful narratives for leaders and companies." },
    { title: "Nonprofit & Charity", description: "Mission-driven branding with our Digital Steward Discount." },
    { title: "Chaos Communications", description: "Expert navigation through complex PR landscapes." },
    { title: "Content Gap Fulfillment", description: "Creative copy, think tanks, and strategy to fill voids." },
    { title: "UGC & Influencer Campaigns", description: "Authentic content with a bunker-in community feel." },
    { title: "Newsletter Design", description: "Engaging newsletter creation from concept to delivery." },
    { title: "Social Media Listening", description: "Cross-platform insights to inform creative direction." },
    { title: "Clipping & Shorts", description: "Creating viral short-form video content." },
    { title: "Full-Service Content & Experiences", description: "From ideation to execution, we build brand worlds." },
    { title: "Search Engine Optimization", description: "AI-powered discovery, citation sourcing, and rich snippets." },
    { title: "Media Buying", description: "Geofencing, programmatic ads on Amazon, LinkedIn, Reddit, Yelp." },
    { title: "Linear TV & Streaming", description: "Placements on Netflix, KTLA, NBC, ABC, CBS, and more." },
    { title: "Podcast Placement", description: "Connecting your brand with top-tier podcast audiences." },
    { title: "Paid Search & Social", description: "Expert management of Google Ads, Meta, TikTok campaigns." },
    { title: "Email, CRM & CMS", description: "Building and managing your customer relationships." },
    { title: "AI Prompt Engineering", description: "Harnessing generative AI for creative and business solutions." },
    { title: "Full-Stack Tech Discovery", description: "Navigating the AI landscape to find the right tools for you." },
    { title: "Team Workshops & Consulting", description: "AI integration, 'Vibe Coding', and hand-holding for your team." },
    { title: "Law Firm Matching", description: "Connecting you with legal experts for complex situations." },
];

const ServiceCard = ({ title, description }: { title: string, description: string }) => (
    <Card className="text-left bg-transparent border-0 border-l-4 border-highlight shadow-none rounded-none">
        <CardContent className="pt-0">
             <h3 className="font-headline text-lg font-bold">{title}</h3>
            <p className="text-muted-foreground mt-1">{description}</p>
        </CardContent>
    </Card>
);

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">The CURATIONS Craft</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">We offer a full-scope, rare breed of services. From AI-powered insights to full-service linear TV campaigns, we are the architects of modern branding.</p>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <div>
                <NewsFeed />
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
                {services.map(s => <ServiceCard key={s.title} {...s} />)}
            </div>
        </div>
      </div>
    </section>
  );
}
