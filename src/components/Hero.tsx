import { motion } from "framer-motion";
import { File, Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 196, ${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 245, 196, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg px-4 py-24">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f5c4]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4361ee]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center w-full max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-[#1f1f35] bg-[#0f0f1a] px-3 py-2 mb-6 md:mb-8 max-w-full"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f5c4] animate-pulse flex-shrink-0" />
          <span className="font-mono text-[10px] md:text-xs text-[#6b6b8a] uppercase tracking-widest truncate">
            Eager to Contribute & Collaborate
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-display leading-none tracking-wide">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(42px,10vw,160px)] text-[#e8e8f0] block"
            >
              MOHAMMAD
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(42px,10vw,160px)] block"
              style={{
                WebkitTextStroke: "2px #00f5c4",
                color: "transparent",
              }}
            >
              RAIYYAN
            </motion.div>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-2 md:gap-4 mt-4 md:mt-6 mb-8 md:mb-10"
        >
          <div className="h-px w-8 md:w-16 bg-[#1f1f35] flex-shrink-0" />
          <p className="font-mono text-[10px] md:text-sm text-[#6b6b8a] uppercase tracking-widest text-center leading-relaxed">
            Frontend Engineer · React · TypeScript · AI Products
          </p>
          <div className="h-px w-8 md:w-16 bg-[#1f1f35] flex-shrink-0" />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center justify-center gap-6 md:gap-8 mb-10 md:mb-12"
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "30+", label: "Components Built" },
            { value: "2K+", label: "Users Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl text-[#00f5c4]">
                {stat.value}
              </div>
              <div className="font-mono text-[9px] md:text-[10px] text-[#6b6b8a] uppercase tracking-widest leading-tight mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto bg-[#00f5c4] text-[#080810] font-mono text-sm px-8 py-4 font-semibold hover:bg-white transition-colors duration-300 text-center"
          >
            View My Work
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="/Mohammad_Raiyyan_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none border border-[#1f1f35] text-[#e8e8f0] font-mono text-sm px-5 py-4 hover:border-[#00f5c4] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <File size={14} />
              <span className="hidden sm:inline">Resume</span>
              <span className="sm:hidden">CV</span>
            </a>
            <a
              href="https://linkedin.com/in/m-raiyyan"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none border border-[#1f1f35] text-[#e8e8f0] font-mono text-sm px-5 py-4 hover:border-[#00f5c4] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Linkedin size={14} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/MohammadRaiyyan"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none border border-[#1f1f35] text-[#e8e8f0] font-mono text-sm px-5 py-4 hover:border-[#00f5c4] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Github size={14} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
