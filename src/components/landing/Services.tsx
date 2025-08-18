import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, Bot, BarChart, PenTool, Tv, Briefcase, Handshake, Search, Mail, Mic, Link as LinkIcon } from 'lucide-react';

const services = {
  strategy: [
    { icon: <Briefcase />, title: "Business Coverage", description: "Grand openings, special events, and membership campaigns." },
    { icon: <Megaphone />, title: "Restaurant Curation", description: "Menu launches, events, and third-party app representation." },
    { icon: <Handshake />, title: "Partnership Orchestration", description: "Hyper-focused campaigns with influencers and brands." },
    { icon: <Briefcase />, title: "Executive & Corporate Branding", description: "Crafting powerful narratives for leaders and companies." },
    { icon: <Briefcase />, title: "Nonprofit & Charity", description: "Mission-driven branding with our Digital Steward Discount." },
    { icon: <Megaphone />, title: "Chaos Communications", description: "Expert navigation through complex PR landscapes." },
  ],
  creative: [
    { icon: <PenTool />, title: "Content Gap Fulfillment", description: "Creative copy, think tanks, and strategy to fill voids." },
    { icon: <Megaphone />, title: "UGC & Influencer Campaigns", description: "Authentic content with a bunker-in community feel." },
    { icon: <Mail />, title: "Newsletter Design", description: "Engaging newsletter creation from concept to delivery." },
    { icon: <LinkIcon />, title: "Social Media Listening", description: "Cross-platform insights to inform creative direction." },
    { icon: <PenTool />, title: "Clipping & Shorts", description: "Creating viral short-form video content." },
    { icon: <PenTool />, title: "Full-Service Content & Experiences", description: "From ideation to execution, we build brand worlds." },
  ],
  marketing: [
    { icon: <Search />, title: "Search Engine Optimization", description: "AI-powered discovery, citation sourcing, and rich snippets." },
    { icon: <BarChart />, title: "Media Buying", description: "Geofencing, programmatic ads on Amazon, LinkedIn, Reddit, Yelp." },
    { icon: <Tv />, title: "Linear TV & Streaming", description: "Placements on Netflix, KTLA, NBC, ABC, CBS, and more." },
    { icon: <Mic />, title: "Podcast Placement", description: "Connecting your brand with top-tier podcast audiences." },
    { icon: <BarChart />, title: "Paid Search & Social", description: "Expert management of Google Ads, Meta, TikTok campaigns." },
    { icon: <Mail />, title: "Email, CRM & CMS", description: "Building and managing your customer relationships." },
  ],
  aiTech: [
    { icon: <Bot />, title: "AI Prompt Engineering", description: "Harnessing generative AI for creative and business solutions." },
    { icon: <Bot />, title: "Full-Stack Tech Discovery", description: "Navigating the AI landscape to find the right tools for you." },
    { icon: <Handshake />, title: "Team Workshops & Consulting", description: "AI integration, 'Vibe Coding', and hand-holding for your team." },
    { icon: <LinkIcon />, title: "Law Firm Matching", description: "Connecting you with legal experts for complex situations." },
  ]
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="text-left bg-card/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="p-3 rounded-md bg-primary/10 text-primary">{icon}</div>
      <CardTitle className="font-headline text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
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
        <Tabs defaultValue="strategy" className="mt-16">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="strategy" className="py-2">Brand & Strategy</TabsTrigger>
            <TabsTrigger value="creative" className="py-2">Content & Creative</TabsTrigger>
            <TabsTrigger value="marketing" className="py-2">Digital Marketing</TabsTrigger>
            <TabsTrigger value="aiTech" className="py-2">AI & Tech</TabsTrigger>
          </TabsList>
          <TabsContent value="strategy" className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.strategy.map(s => <ServiceCard key={s.title} {...s} />)}
          </TabsContent>
          <TabsContent value="creative" className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.creative.map(s => <ServiceCard key={s.title} {...s} />)}
          </TabsContent>
          <TabsContent value="marketing" className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.marketing.map(s => <ServiceCard key={s.title} {...s} />)}
          </TabsContent>
          <TabsContent value="aiTech" className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.aiTech.map(s => <ServiceCard key={s.title} {...s} />)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
