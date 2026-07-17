"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Current Focus",
    items: ["AI Engineering", "LLM Applications", "Full Stack Development"]
  },
  {
    title: "Currently Reading",
    items: ["The Republic by Plato", "The Story of Art by E.H. Gombrich"]
  },
  {
    title: "Exploring",
    items: ["Philosophy", "Art History", "Cognitive Science", "Human Creativity"]
  },
  {
    title: "Interests",
    items: ["Artificial Intelligence", "Philosophy", "Art", "Physics", "Design"]
  },
  {
    title: "Principles",
    items: [
      "Build with intention.",
      "Stay endlessly curious.",
      "Learn beyond your field.",
      "Design for people, not just screens."
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="relative bg-background py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 font-display">Beyond Code</h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-sans text-balance">
            "I build AI-powered software, but my curiosity extends far beyond technology. I'm drawn to philosophy, art, science, and design because I believe great engineering begins with understanding the world - not just writing code."
          </p>
        </motion.div>

        {/* Right Side: Cards Grid */}
        <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl bg-surface/30 border border-border backdrop-blur-sm hover:bg-surface/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] transition-all duration-500 hover:-translate-y-1 ${card.title === "Principles" ? "md:col-span-2" : ""}`}
            >
              <h3 className="text-accent-cyan font-mono text-sm uppercase tracking-wider mb-4 opacity-80">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item, i) => (
                  <li key={i} className="text-white/80 text-base flex items-start">
                    {card.title === "Principles" && <span className="text-accent-cyan mr-2 opacity-50 mt-1">✦</span>}
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
