"use client";
import { useState, useCallback } from "react";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";


export default function Home() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Dismiss the loading screen only after the canvas has confirmed it painted
  // the first frame. This prevents any black-canvas flash between the loader
  // and the hero image sequence.
  const handleFirstFrameReady = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleProgress = useCallback((percent: number) => {
    setProgress(percent);
  }, []);

  return (
    <>
      <LoadingScreen progress={progress} isVisible={isLoading} />

      <main className="relative bg-background selection:bg-accent-cyan/20 selection:text-white">
        <CustomCursor />
        <Navbar />

        {/* Hero Section */}
        <div className="relative">
          <ScrollyCanvas onProgress={handleProgress} onFirstFrameReady={handleFirstFrameReady} />
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
    </>
  );
}
