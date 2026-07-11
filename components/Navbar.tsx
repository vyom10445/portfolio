"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Beyond Code", href: "#about" },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 rounded-full bg-[#141414]/60 backdrop-blur-md border border-white/[0.06] shadow-2xl"
    >
      {navItems.map((item, index) => (
        <a
          key={item.name}
          href={item.href}
          className="relative px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full z-10"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index && (
            <motion.div
              layoutId="nav-hover"
              className="absolute inset-0 bg-white/10 rounded-full -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          {item.name}
        </a>
      ))}
    </motion.nav>
  );
}
