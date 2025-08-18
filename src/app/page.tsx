import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Newsletter from "@/components/landing/Newsletter";
import ServicesAndNews from "@/components/landing/ServicesAndNews";
import Work from "@/components/landing/Work";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-[#f8f6f0]">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesAndNews />
        <Work />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
