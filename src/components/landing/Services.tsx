import Link from "next/link";

const services = [
    { title: "Public Relationships 🤝", description: "Media outreach, next-gen PR, influencer collaborations, and strategy.", href:"/services#pr" },
    { title: "Collaborations ✨", description: "Creative, digital, partnership-driven projects that move culture.", href:"/services#collaborations" },
    { title: "Branding & Digital 🎨", description: "Concept, design, storytelling, and newsletters for modern brands.", href:"/services#branding" },
    { title: "Media Buying & Ads 📈", description: "Bespoke campaigns, digital and IRL presence, all channels covered.", href:"/services#media" },
    { title: "News & Editorial ✍️", description: "CurationsLA stories, happenings, and cultural features, always current.", href:"/blog" },
    { title: "AI & Tech Strategy 🤖", description: "Prompt engineering, creative AI, digital innovation, hands-on discovery.", href:"/services#ai" },
];

const ServiceItem = ({ title, description, href }: { title: string, description: string, href: string }) => (
    <div className="py-4">
        <h3 className="text-base uppercase font-bold tracking-wider text-[#303030] border-l-4 border-highlight pl-3 mb-2">{title}</h3>
        <p className="text-[#5f5f5f] text-sm mb-2">{description}</p>
        <Link href={href} className="text-accent text-sm font-bold hover:text-primary">
          LEARN MORE
        </Link>
    </div>
);

export default function Services() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold font-headline mb-4 text-center">Services</h2>
        <div className="flex flex-col divide-y divide-gray-200">
            {services.map(s => <ServiceItem key={s.title} {...s} />)}
        </div>
    </div>
  );
}
