import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { projects } from "../data";

export default function Work() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="font-mono text-xs text-[#00f5c4] uppercase tracking-widest mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] leading-none text-[#e8e8f0]">
            PROJECTS
          </h2>
        </div>
        <div className="hidden md:block h-px flex-1 bg-[#1f1f35] mx-8 mb-6" />
        <div className="hidden md:block font-mono text-xs text-[#6b6b8a] mb-6">
          {projects.length} Projects
        </div>
      </div>

      {/* Featured projects — large cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {projects
          .filter((p) => p.featured)
          .map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHovered(project.title)}
              onMouseLeave={() => setHovered(null)}
              className="relative group bg-[#0f0f1a] border border-[#1f1f35] p-8 overflow-hidden hover:border-[#2a2a45] transition-all duration-500"
            >
              {/* Color accent top */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-500 group-hover:h-1"
                style={{ background: project.colorTheme }}
              />

              {/* Glow on hover */}
              <AnimatePresence>
                {hovered === project.title && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(400px circle at 50% 50%, ${project.colorTheme}08, transparent)`,
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10">
                {/* Featured badge */}
                <div className="inline-flex items-center gap-1.5 border border-[#1f1f35] px-2 py-1 mb-6">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: project.colorTheme }}
                  />
                  <span className="font-mono text-[10px] text-[#6b6b8a] uppercase tracking-widest">
                    Featured
                  </span>
                </div>

                <h3 className="font-display text-4xl text-[#e8e8f0] mb-4 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#6b6b8a] text-sm leading-relaxed mb-6 font-body">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-1 border border-[#1f1f35] text-[#6b6b8a] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-[#e8e8f0] hover:text-[#00f5c4] transition-colors"
                  >
                    <ExternalLink size={12} />
                    Live Demo
                  </a>
                  {project.githubLink !== "/" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-mono text-xs text-[#6b6b8a] hover:text-[#e8e8f0] transition-colors"
                    >
                      <Github size={12} />
                      Source
                    </a>
                  )}
                </div>
              </div>

              {/* Arrow icon top right */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={20} style={{ color: project.colorTheme }} />
              </div>
            </motion.div>
          ))}
      </div>

      {/* Other projects — list style */}
      <div className="border border-[#1f1f35]">
        {projects
          .filter((p) => !p.featured)
          .map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(project.title)}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-center justify-between px-8 py-6 border-b border-[#1f1f35] last:border-b-0 hover:bg-[#0f0f1a] transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: project.colorTheme }}
                />
                <div>
                  <h3 className="font-display text-2xl text-[#e8e8f0] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 mt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-[#6b6b8a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-[#00f5c4] flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={11} />
                  Demo
                </a>
                {project.githubLink !== "/" && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-[#6b6b8a] flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={11} />
                    Code
                  </a>
                )}
              </div>

              <ArrowUpRight
                size={16}
                className="text-[#1f1f35] group-hover:text-[#00f5c4] transition-colors duration-300 ml-4 flex-shrink-0"
              />
            </motion.div>
          ))}
      </div>
    </section>
  );
}
