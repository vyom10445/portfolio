"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Socials() {
  const socials = [
    { name: "GitHub", icon: GithubIcon, href: "https://github.com/vyom10445" },
    { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/vyomchaturvedi/" },
    { name: "Email", icon: Mail, href: "mailto:vyomchaturvediwork@gmail.com" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 bg-[#090909] p-3 rounded-2xl border border-white/[0.06] shadow-2xl backdrop-blur-md">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-white/40 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/5 group"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <social.icon className="w-5 h-5 relative z-10" />
          {/* Subtle accent glow on hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-opacity duration-300" />
        </motion.a>
      ))}
    </div>
  );
}
