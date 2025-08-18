import CurationCraftLogo from "@/components/icons/CurationCraftLogo";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
  { name: 'Instagram', href: '#', icon: <Instagram className="h-5 w-5" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container max-w-7xl py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/">
              <CurationCraftLogo />
            </Link>
          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <Button key={item.name} asChild variant="ghost" size="icon">
                <Link href={item.href}>
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CURATIONS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
