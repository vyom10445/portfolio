import { ExternalLink, Code } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Neon E-Commerce",
      description: "A high-performance storefront with WebGL product viewers.",
      tags: ["Next.js", "Three.js", "Tailwind"],
    },
    {
      title: "Fintech Dashboard",
      description: "Real-time data visualization for institutional investors.",
      tags: ["React", "D3.js", "Framer Motion"],
    },
    {
      title: "Immersive Agency",
      description: "Award-winning portfolio site with custom shader effects.",
      tags: ["Vue", "GLSL", "GSAP"],
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] min-h-screen py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Selected Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white font-mono text-lg">{idx + 1}</span>
                  </div>
                  <div className="flex space-x-3 text-white/50">
                    <Code className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                    <ExternalLink className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
