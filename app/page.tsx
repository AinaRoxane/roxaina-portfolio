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

      <main className="max-w-6xl mx-auto px-6">
        <HeroSection />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
