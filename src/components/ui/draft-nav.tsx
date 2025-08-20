'use client';
import Link from "next/link";

const DraftNav = () => {
    const navLinks = [
        { href: '/v2-inspirations', label: 'Inspirations' },
        { href: '/homepage-draft', label: 'Draft Home' },
        { href: '/restaurant-biz', label: 'Restaurant/Biz' },
        { href: '/public-relations', label: 'Public Relations' },
        { href: '/creative-campaigns', label: 'Creative' },
        { href: '/influencer-ugc', label: 'Influencer/UGC' },
        { href: '/ai-discovery', label: 'AI Discovery' },
        { href: '/newsletter-services', label: 'Newsletter' },
    ];

    return (
        <nav style={{ background: 'black', color: 'white', padding: '1rem', borderBottom: '2px solid #FF5BF1' }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                {navLinks.map(link => (
                    <Link key={link.href} href={link.href} style={{ color: '#EBF998', textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem' }}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default DraftNav;