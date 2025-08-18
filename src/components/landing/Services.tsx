import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Layers, Handshake, Mail, Megaphone, PenSquare, Rocket } from "lucide-react";

const publicRelationshipsServices = [
    {
        title: "Community Relationships",
        description: "For those brands that want a bunkered-in like feeling with their community.",
        icon: <Handshake />
    },
    {
        title: "Influencer Collaborations",
        description: "Brand and Creator matching, UGC Content.",
        icon: <Rocket />
    },
    {
        title: "Storytelling",
        description: "Turn your brand into a community narrative worth following. From voice to visuals, build stories with us that resonate, travel, and convert across platforms.",
        icon: <PenSquare />
    }
];

const brandingServices = [
    {
        title: "Digital Presence",
        description: "We shape your digital presence with intention. From podcast artwork to YouTube banners, we craft cohesive visuals that carry your brand identity across platforms, timelines, and every scroll in-between.",
        icon: <Layers />
    },
    {
        title: "Newsletters",
        description: "We design and deliver newsletters that people actually want to read. From content curation to layout and tone, we help brands stay consistent, human, and visually aligned, turning your emails into something worth opening.",
        icon: <Mail />
    }
];

const mediaServices = [
    {
        title: "Media Buying + Ads",
        description: "From livestreams, geofencing on both digital and traditional media, we cover all channels when it comes to our ad media partnerships.",
        icon: <Megaphone />
    },
    {
        title: "News + Editorial",
        description: "Not only do we have the capability to draft press releases, but we have the ability to index your stories within news aggregators across digital platforms, maximizing your brand's reach.",
        icon: <PenSquare />
    }
]

const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
    <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="text-accent">{icon}</div>
            <CardTitle className="text-base font-bold text-[#1A1A1A]">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
    </Card>
);

export default function Services() {
  return (
    <div className="bg-white p-6">
      <h2 className="text-sm font-bold font-headline mb-4 text-center tracking-widest text-muted-foreground uppercase">
        Public Relationships | Branding | Media
      </h2>
      <Tabs defaultValue="pr" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-transparent rounded-lg">
          <TabsTrigger value="pr" className="text-xs sm:text-sm uppercase data-[state=active]:bg-[#EBF998] data-[state=active]:text-[#1A1A1A] text-[#1A1A1A]">Public Relationships</TabsTrigger>
          <TabsTrigger value="branding" className="text-xs sm:text-sm uppercase data-[state=active]:bg-[#EBF998] data-[state=active]:text-[#1A1A1A] text-[#1A1A1A]">Branding</TabsTrigger>
          <TabsTrigger value="media" className="text-xs sm:text-sm uppercase data-[state=active]:bg-[#EBF998] data-[state=active]:text-[#1A1A1A] text-[#1A1A1A]">Media</TabsTrigger>
        </TabsList>
        <TabsContent value="pr" className="mt-4">
          <div className="grid gap-4">
            {publicRelationshipsServices.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </TabsContent>
        <TabsContent value="branding" className="mt-4">
            <div className="grid gap-4">
                {brandingServices.map(s => <ServiceCard key={s.title} {...s} />)}
            </div>
        </TabsContent>
        <TabsContent value="media" className="mt-4">
            <div className="grid gap-4">
                {mediaServices.map(s => <ServiceCard key={s.title} {...s} />)}
            </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 <div className="text-accent">✨</div>
                <CardTitle className="text-base font-bold text-[#1A1A1A]">Collaborations</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-600">Creative, digital, partnership-driven projects that move culture.</p>
                <Link href="/services#collaborations" className="text-accent text-sm font-bold hover:text-primary mt-2 inline-block">
                    LEARN MORE
                </Link>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
