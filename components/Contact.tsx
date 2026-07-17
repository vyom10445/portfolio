"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-background py-32 px-8 md:px-24 border-t border-border mt-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display tracking-tight">Start a conversation.</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:vyomchaturvediwork@gmail.com"
              className="group relative flex items-center justify-center gap-3 bg-white text-background px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              <span>Say Hello</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              {/* Button Glow */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-opacity duration-300 pointer-events-none" />
            </a>

            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/vyom10445" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-surface border border-border text-white/70 hover:text-white hover:border-white/20 hover:bg-surface/80 transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vyomchaturvedi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-surface border border-border text-white/70 hover:text-white hover:border-white/20 hover:bg-surface/80 transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-surface border border-border text-white/70 hover:text-white hover:border-white/20 hover:bg-surface/80 transition-all hover:-translate-y-1"
                aria-label="Resume"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
