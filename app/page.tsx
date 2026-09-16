import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative z-[1] max-w-[1200px] mx-auto px-12 sm:px-10 pb-16">
        <HeroSection />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16 items-start">
          <About />
          <div className="col-span-1"></div>
          <Stack />
        </div>
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
