import { motion } from "framer-motion";

const experience = [
  {
    role: "Frontend Engineer II",
    company: "Wobot AI",
    period: "Jul 2024 — Present",
    highlights: [
      "Architected real-time WebSocket dashboard handling 20+ AI agent streams",
      "Led CRA → Vite migration — 80% bundle reduction (60MB → 12MB)",
      "Built shared component library (30+ components) across 3 product teams",
      "Implemented RBAC, SSO/SAML for 2,000+ user multi-tenant SaaS",
    ],
  },
  {
    role: "Frontend Engineer I",
    company: "Wobot AI",
    period: "Jul 2022 — Jun 2024",
    highlights: [
      "Built data-intensive dashboards with Chart.js — 3x report adoption",
      "Developed list virtualization for large dataset rendering",
      "Enforced SOLID principles reducing regressions by 30%",
    ],
  },
  {
    role: "Frontend Intern",
    company: "Wobot AI",
    period: "Jan 2022 — Jun 2022",
    highlights: [
      "Optimized Core Web Vitals — LCP improved 35%, green CLS scores",
      "Resolved 50+ production bugs on Next.js marketing site",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left — About text */}
        <div>
          <p className="font-mono text-xs text-[#00f5c4] uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="font-display text-[clamp(48px,6vw,80px)] leading-none text-[#e8e8f0] mb-8">
            WHO I AM
          </h2>

          <div className="space-y-4 text-[#6b6b8a] text-sm leading-relaxed font-body">
            <p>
              Frontend Engineer with{" "}
              <span className="text-[#e8e8f0]">4+ years</span> at Wobot AI,
              building AI-powered video analytics products used by enterprise
              clients across industries.
            </p>
            <p>
              I specialize in{" "}
              <span className="text-[#e8e8f0]">React + TypeScript</span> with a
              strong eye for performance — from bundle optimization to real-time
              WebSocket architectures handling dozens of concurrent AI streams.
            </p>
            <p>
              Polyglot background spanning{" "}
              <span className="text-[#e8e8f0]">Java, Python, Go</span>, and
              JavaScript — I think in systems, not just components. Recently
              built <span className="text-[#00f5c4]">TrajectAI</span>, a
              full-stack AI career platform from scratch.
            </p>
            <p>
              Currently exploring roles at product-led companies where
              engineering quality and user experience are taken seriously.
            </p>
          </div>

          {/* Links */}
          {/* <div className="flex gap-4 mt-8">
            <a
              href="mailto:raiyyan.work@gmail.com"
              className="font-mono text-xs border border-[#00f5c4] text-[#00f5c4] px-6 py-3 hover:bg-[#00f5c4] hover:text-[#080810] transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs border border-[#1f1f35] text-[#6b6b8a] px-6 py-3 hover:border-[#e8e8f0] hover:text-[#e8e8f0] transition-all duration-300"
            >
              Resume PDF
            </a>
          </div> */}
        </div>

        {/* Right — Experience timeline */}
        <div>
          <p className="font-mono text-xs text-[#6b6b8a] uppercase tracking-widest mb-8">
            Experience
          </p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1f1f35]" />

            <div className="space-y-10 pl-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-[35.2px] top-1.5 w-2 h-2 rounded-full bg-[#00f5c4] border-2 border-[#080810]" />

                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-body font-semibold text-[#e8e8f0] text-sm">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-xs text-[#00f5c4]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-[#6b6b8a] whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mt-3">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[#6b6b8a] text-xs leading-relaxed"
                      >
                        <span className="text-[#00f5c4]  shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
