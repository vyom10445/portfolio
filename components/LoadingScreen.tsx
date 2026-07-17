"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  progress: number;   // 0–100
  isVisible: boolean;
}

export default function LoadingScreen({ progress, isVisible }: LoadingScreenProps) {
  const barRef = useRef<HTMLDivElement>(null);

  // Directly set the width via DOM to avoid React re-render overhead on every %
  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#090909]"
          aria-label="Loading portfolio"
          aria-live="polite"
        >
          {/* Subtle radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,92,0,0.06) 0%, transparent 70%)",
            }}
          />

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white"
          >
            Vyom Chaturvedi
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
            className="mt-3 font-mono text-sm tracking-[0.25em] uppercase text-white/40"
          >
            Preparing experience&hellip;
          </motion.p>

          {/* Progress bar track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="relative mt-10 w-48 md:w-64 h-[1px] bg-white/10 overflow-hidden rounded-full"
          >
            {/* Filled portion — width driven imperatively via ref */}
            <div
              ref={barRef}
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: "0%",
                background: "linear-gradient(90deg, #ff5c00, #ff8c00)",
                transition: "width 0.15s ease-out",
                boxShadow: "0 0 8px rgba(255,92,0,0.6)",
              }}
            />
          </motion.div>

          {/* Percentage */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-3 font-mono text-xs text-white/25 tabular-nums"
          >
            {Math.round(progress)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
