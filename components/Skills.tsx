"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "AI & Machine Learning",
    items: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "LangChain", "OpenAI API", "ChromaDB", "RAG", "Prompt Engineering"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Supabase", "ChromaDB"]
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook"]
  },
  {
    category: "Currently Exploring",
    items: ["AI Agents", "MCP (Model Context Protocol)", "Multi-Agent Systems", "Advanced RAG", "LLM Evaluation"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-background py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display">Tech Stack</h2>
          <div className="w-12 h-1 bg-accent-orange mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className="group bg-surface/40 border border-border rounded-2xl p-8 backdrop-blur-md hover:bg-surface/60 hover:shadow-[0_0_30px_rgba(255,92,0,0.05)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent-orange/50 group-hover:bg-accent-orange transition-colors" />
                <h3 className="text-xl font-bold text-white font-display">{group.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 rounded-md text-sm font-medium bg-white/[0.03] text-white/70 border border-white/[0.02] group-hover:border-white/[0.05] transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
