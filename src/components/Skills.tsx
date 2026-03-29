import { motion } from "framer-motion";
import { skills } from "../data";

const categories = [
  "Frontend",
  "Language",
  "Backend",
  "Styling",
  "State",
  "Tools",
  "Testing",
];

export default function Skills() {
  const row1 = skills.slice(0, Math.ceil(skills.length / 2));
  const row2 = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section id="skills" className="py-32 overflow-hidden">
      {/* Section header */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="flex items-end gap-8">
          <div>
            <p className="font-mono text-xs text-[#00f5c4] uppercase tracking-widest mb-3">
              Technical Stack
            </p>
            <h2 className="font-display text-[clamp(48px,8vw,96px)] leading-none text-[#e8e8f0]">
              SKILLS
            </h2>
          </div>
          <p className="hidden md:block font-body text-sm text-[#6b6b8a] max-w-md mb-4 leading-relaxed">
            Focused stack — not everything, just what I actually ship with.
          </p>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-3 overflow-hidden">
        <div className="marquee-track">
          {[...row1, ...row1].map((skill, i) => (
            <SkillPill key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 — reverse */}
      <div className="relative overflow-hidden">
        <div
          className="marquee-track"
          style={{ animationDirection: "reverse" }}
        >
          {[...row2, ...row2].map((skill, i) => (
            <SkillPill key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>

      {/* Category grid */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (catSkills.length === 0) return null;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-[#0f0f1a] border border-[#1f1f35] p-5 hover:border-[#2a2a45] transition-colors"
              >
                <p className="font-mono text-[10px] text-[#00f5c4] uppercase tracking-widest mb-3">
                  {cat}
                </p>
                <ul className="space-y-1.5">
                  {catSkills.map((s) => (
                    <li key={s.name} className="flex items-center gap-2">
                      <img
                        src={s.icon}
                        alt={s.name}
                        className="w-3.5 h-3.5 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <span className="font-body text-sm text-[#6b6b8a]">
                        {s.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillPill({
  skill,
}: {
  skill: { name: string; icon: string; category: string };
}) {
  return (
    <div className="flex items-center gap-3 border border-[#1f1f35] bg-[#0f0f1a] px-5 py-3 mx-2 whitespace-nowrap hover:border-[#2a2a45] transition-colors flex-shrink-0">
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-4 h-4 object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="font-mono text-sm text-[#6b6b8a]">{skill.name}</span>
    </div>
  );
}
