import { Linkedin, Mail } from "lucide-react";

// const links = [
//   {
//     label: "Email",
//     value: "raiyyan.work@gmail.com",
//     href: "mailto:raiyyan.work@gmail.com",
//     icon: Mail,
//   },
//   {
//     label: "LinkedIn",
//     value: "linkedin.com/in/m-raiyyan",
//     href: "https://linkedin.com/in/m-raiyyan",
//     icon: Linkedin,
//   },
//   {
//     label: "GitHub",
//     value: "github.com/MohammadRaiyyan",
//     href: "https://github.com/MohammadRaiyyan",
//     icon: Github,
//   },
// ];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Big CTA */}
      <div className="border border-[#1f1f35] p-12 md:p-20 relative overflow-hidden">
        {/* BG decoration */}
        <div className="absolute top-0 right-0 font-display text-[200px] leading-none text-[#0f0f1a] pointer-events-none select-none">
          HI
        </div>

        <div className="relative z-10">
          <p className="font-mono text-xs text-[#00f5c4] uppercase tracking-widest mb-4">
            Contact
          </p>
          <h2 className="font-display text-[clamp(48px,8vw,100px)] leading-none text-[#e8e8f0] mb-6">
            LET'S BUILD
            <br />
            <span
              style={{ WebkitTextStroke: "2px #00f5c4", color: "transparent" }}
            >
              SOMETHING
            </span>
          </h2>

          <p className="font-body text-sm text-[#6b6b8a] max-w-md mb-12 leading-relaxed">
            I love building fast, scalable, and delightful web experiences.
            Always up for interesting problems, side projects, and meaningful
            collaborations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="mailto:raiyyan.work@gmail.com"
              className="inline-flex items-center gap-3 bg-[#00f5c4] text-[#080810] font-mono text-sm px-8 py-4 font-semibold hover:bg-white transition-colors duration-300"
            >
              <Mail size={14} />
              Send Me An Email
            </a>
            <a
              href="https://linkedin.com/in/m-raiyyan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-[#1f1f35] text-[#e8e8f0] font-mono text-sm px-8 py-4 hover:border-[#00f5c4] transition-colors duration-300"
            >
              <Linkedin size={14} />
              Connect on LinkedIn
            </a>
          </div>

          {/* Links */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-center justify-between border border-[#1f1f35] p-4 hover:border-[#2a2a45] hover:bg-[#0f0f1a] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <link.icon size={13} className="text-[#00f5c4]" />
                  <div>
                    <p className="font-mono text-[10px] text-[#6b6b8a] uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="font-mono text-xs text-[#e8e8f0]">
                      {link.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={13}
                  className="text-[#1f1f35] group-hover:text-[#00f5c4] transition-colors"
                />
              </motion.a>
            ))}
          </div> */}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-8 sm:flex-row flex-col gap-2">
        <p className="font-mono text-xs text-[#6b6b8a]">
          © 2026 Mohammad Raiyyan
        </p>
        <p className="font-mono text-xs text-[#6b6b8a]">
          Built with React · TypeScript · Framer Motion
        </p>
      </div>
    </section>
  );
}
