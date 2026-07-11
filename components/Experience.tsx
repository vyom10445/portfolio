"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Coordinator - Technical Projects and Web Development",
    company: "IEEE Student Branch, Manipal University Jaipur",
    duration: "May 2025 - March 2026",
    achievements: [
      "Led a 9-member technical team, driving structured execution and successful delivery of 5 cross-domain MVPs across ML, systems, and automation",
      "Mentored team members across the full project lifecycle, from ideation and development to review and final presentation, ensuring completion of all assigned projects",
      "Conducted 8+ structured mentoring sessions and reviewed 20+ code submissions, improving code quality, development practices, and project consistency",
      "Directed development of projects including ML-based backtesting, issue tracking systems, face recognition, game development, and automation agents",
      "Developed and validated rocket simulation models in MATLAB, translating physics equations (trajectory, thrust, drag) into computational systems",
      "Contributed to IEEE SB MUJ web platforms, implementing frontend design enhancements and improving presentation of technical content"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-background py-32 px-8 md:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display">Experience</h2>
          <div className="w-12 h-1 bg-accent-cyan mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="relative border-l border-border ml-4 md:mx-auto md:ml-auto space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-surface border-2 border-accent-cyan group-hover:bg-accent-cyan transition-colors duration-300" />
              <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-cyan opacity-0 group-hover:opacity-40 scale-150 transition-all duration-300 blur-sm" />

              <div className="bg-surface/30 border border-border p-8 rounded-2xl backdrop-blur-sm group-hover:bg-surface/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] transition-all duration-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-display mb-1">{exp.role}</h3>
                    <div className="text-white/60 font-medium">{exp.company}</div>
                  </div>
                  <div className="text-accent-cyan font-mono text-sm shrink-0 mt-1 md:mt-0">
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-white/70 text-base leading-relaxed flex items-start">
                      <span className="text-accent-cyan mr-3 mt-1.5 opacity-50 shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
