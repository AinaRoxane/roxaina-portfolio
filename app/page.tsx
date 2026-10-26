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

        {/* Row 1: About + Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16 items-start">
          <About />
          <div className="md:col-span-6 flex items-center justify-center">
            <img
              src="/images/hero_suit_and_stars.jpg"
              alt="Roxane Aina"
              className="w-full max-w-md my-4 object-cover h-auto md:h-96"
            />
          </div>
        </div>

        {/* Row 2: Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16 items-start">
          <Stack className="md:col-span-12" />
        </div>

        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
