import Link from "next/link";

const services = [
    { title: "Public Relationships", description: "Media outreach, next-gen PR, influencer collaborations, and strategy.", href:"/services#pr" },
    { title: "Collaborations", description: "Creative, digital, partnership-driven projects that move culture.", href:"/services#collaborations" },
    { title: "Branding & Digital", description: "Concept, design, storytelling, and newsletters for modern brands.", href:"/services#branding" },
    { title: "Media Buying & Ads", description: "Bespoke campaigns, digital and IRL presence, all channels covered.", href:"/services#media" },
    { title: "News & Editorial", description: "CurationsLA stories, happenings, and cultural features, always current.", href:"/blog" },
    { title: "AI & Tech Strategy", description: "Prompt engineering, creative AI, digital innovation, hands-on discovery.", href:"/services#ai" },
];

const ServiceCard = ({ title, description, href }: { title: string, description: string, href: string }) => (
    <div className="bg-white p-6 sm:p-8 flex-1 min-w-[248px] max-w-[320px] rounded-tl-3xl rounded-tr-lg rounded-br-2xl rounded-bl-xl shadow-[0_4px_26px_#ff5bf188,0_1px_12px_#6370E744] hover:shadow-[0_8px_42px_#6370E7aa,0_8px_24px_#FF5BF1dd] transition-all duration-200 hover:-translate-y-1.5">
        <h3 className="text-base uppercase font-bold tracking-wider text-[#303030] border-l-4 border-highlight pl-3 mb-3">{title}</h3>
        <p className="text-[#5f5f5f] mb-3">{description}</p>
        <Link href={href} className="text-accent font-bold underline hover:text-primary">
          LEARN MORE
        </Link>
    </div>
);

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container max-w-7xl">
        <div className="flex flex-wrap gap-8 justify-center">
            {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}
