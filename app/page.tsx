"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";

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

// Minimum percentage of frames that must load before we show the hero.
// 60 % gives a full first-scroll cycle with smooth playback;
// on cached visits the browser hits this in milliseconds.
const READY_THRESHOLD = 60;

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);

  const handleProgress = useCallback((percent: number) => {
    setProgress(percent);
    if (percent >= READY_THRESHOLD && !heroVisible) {
      setHeroVisible(true);
      // Give the progress bar a brief moment to reach the threshold visually,
      // then start fading the loading screen out.
      setTimeout(() => setIsLoading(false), 200);
    }
  }, [heroVisible]);

  return (
    <>
      <LoadingScreen progress={progress} isVisible={isLoading} />

      <motion.main
        className="relative bg-background selection:bg-accent-cyan/20 selection:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroVisible ? 1 : 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      >
        <CustomCursor />
        <Navbar />

        {/* Hero Section */}
        <div className="relative">
          <ScrollyCanvas onProgress={handleProgress} />
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
      </motion.main>
    </>
  );
}
