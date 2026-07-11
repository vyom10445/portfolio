import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background selection:bg-accent-cyan/20 selection:text-white">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <ScrollyCanvas />
      </div>

      {/* Main Content Sections */}
      <div className="relative z-20 bg-background">
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
