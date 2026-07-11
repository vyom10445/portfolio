"use client";
import { motion, useTransform, MotionValue } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

  // Opacity transforms
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.55, 0.65], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [0, 1, 1, 0]);

  // Y transforms for parallax
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.65], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.7, 1], [50, -50]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-screen z-10 flex flex-col justify-center px-8 md:px-24">
      {/* Initial Hero */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl font-display">
          Vyom Chaturvedi
        </h1>
        <p className="text-xl md:text-2xl text-accent-cyan font-mono tracking-wide mt-2 drop-shadow-md">
          AI Engineer
        </p>
        
        {/* Subtle scroll indicator */}
        <motion.div 
          className="absolute bottom-12 flex flex-col items-center gap-2 text-white/40 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span>Scroll</span>
          <motion.div 
            className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll Sequence 1 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-24 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-medium text-white max-w-3xl leading-tight drop-shadow-xl font-display text-balance">
          Building intelligent software that solves real problems.
        </h2>
      </motion.div>

      {/* Scroll Sequence 2 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-24 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-medium text-white max-w-4xl leading-tight drop-shadow-xl font-display text-balance">
          Driven by curiosity beyond technology—exploring philosophy, art, science, and design.
        </h2>
      </motion.div>
    </div>
  );
}
