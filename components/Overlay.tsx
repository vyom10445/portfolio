"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Opacity transforms
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);

  // Y transforms for parallax
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-screen z-10 flex flex-col justify-center px-8 md:px-24">
      {/* Section 1 (0% scroll) */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg">
          My Name
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
          Creative Developer.
        </p>
      </motion.div>

      {/* Section 2 (30% scroll) */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight drop-shadow-lg">
          I build digital experiences.
        </h2>
      </motion.div>

      {/* Section 3 (60% scroll) */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 text-right"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight drop-shadow-lg">
          Bridging design <br /> and engineering.
        </h2>
      </motion.div>
    </div>
  );
}
