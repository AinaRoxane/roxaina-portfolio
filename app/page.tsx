import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative z-[1] max-w-[1200px] mx-auto px-12 sm:px-10 pb-16">
        <HeroSection />
        <About />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
