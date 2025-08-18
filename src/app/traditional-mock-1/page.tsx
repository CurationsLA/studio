import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Newsletter from "@/components/landing/Newsletter";
import ServicesAndNews from "@/components/landing/ServicesAndNews";

export default function TraditionalMock1() {
  return (
    <div className="flex flex-col min-h-dvh bg-[#f8f6f0]">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesAndNews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
