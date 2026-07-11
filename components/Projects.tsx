"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "./Icons";

const projects = [
  {
    title: "ScholarMind - AI Study Assistant",
    description: "A full-stack Retrieval-Augmented Generation (RAG) application that lets users upload study materials (PDFs) and ask questions answered strictly from that content. Features a custom streaming chat UI where answers appear live with clickable source citations. Designed for safe multi-user deployment with private, isolated document libraries.",
    tags: ["Python", "LangChain", "RAG", "ChromaDB", "OpenAI API", "FastAPI", "JavaScript", "REST APIs"],
    github: "https://github.com/vyom10445/scholar-mind",
    image: "/projects/scholarmind.png",
    number: "01",
  },
  {
    title: "Answer Sheet Digitizer",
    description: "A computer vision and text recognition system developed to convert handwritten academic answer sheets into digital, editable text formats. Implements multiple image preprocessing pipelines (Gaussian Blur, Otsu, Adaptive Thresholding) with an adaptive selection mechanism for the highest OCR confidence score.",
    tags: ["Python", "OpenCV", "NumPy", "Tesseract OCR", "Streamlit", "Pillow"],
    github: "https://github.com/vyom10445/automatic-answer-sheet-digitizer",
    image: "/projects/digitizer.png",
    number: "02",
  },
  {
    title: "ToxiScan - Toxicity Detection",
    description: "An end-to-end NLP system designed to identify multiple categories of toxicity in online comments (toxic, obscene, threat, insult, identity-based hate). Utilizes a Bi-directional LSTM neural network trained on the Jigsaw Toxic Comment Classification Challenge dataset with an interactive Gradio web application.",
    tags: ["Python", "TensorFlow", "Keras", "NLP", "BiLSTM", "Gradio"],
    github: "https://github.com/vyom10445/toxicity-classifier",
    image: "/projects/toxiscan.png",
    number: "03",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative bg-background py-32 md:py-48 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-40"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display">Selected Work</h2>
          <div className="w-12 h-1 bg-accent-cyan mt-6 rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative">
                
                {/* Background Oversized Number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] md:text-[15vw] font-bold text-white/[0.02] font-display pointer-events-none select-none z-0">
                  {project.number}
                </div>

                <div className={`relative z-10 w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Project Image Preview */}
                  <div className="w-full md:w-3/5 group">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="relative rounded-2xl overflow-hidden border border-border bg-surface/50 shadow-2xl group-hover:shadow-[0_0_40px_rgba(0,240,255,0.1)] transition-all duration-700"
                    >
                      <div className="h-8 w-full bg-surface border-b border-border flex items-center px-4 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 60vw"
                          priority={idx === 0}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-2/5 flex flex-col justify-center"
                  >
                    <div className="text-accent-cyan font-mono text-sm mb-4">Project {project.number}</div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">{project.title}</h3>
                    <p className="text-white/60 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-border text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-background font-medium hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>View Source</span>
                      </a>
                    </div>
                  </motion.div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
