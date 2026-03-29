import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div className="noise">
      {/* Progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#00f5c4] origin-left z-[100]"
      />

      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}
