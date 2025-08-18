import AITools from "@/components/landing/AITools";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Newsletter from "@/components/landing/Newsletter";
import Partnerships from "@/components/landing/Partnerships";
import Services from "@/components/landing/Services";
import Work from "@/components/landing/Work";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <AITools />
        <Partnerships />
        <Work />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
