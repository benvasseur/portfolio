"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface SkillGroup {
  name: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    name: "Front-End",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Vite",
      "WebGL",
      "Canvas",
      "Tailwind",
    ],
  },
  {
    name: "Back-End",
    items: ["Node.js", "Express", "Python", "PHP", "REST APIs"],
  },
  {
    name: "AI",
    items: ["Claude", "Mistral AI"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB"],
  },
  {
    name: "DevOps",
    items: ["Docker", "AWS", "CI/CD", "Vercel", "Cypress", "Git", "Figma"],
  },
  {
    name: "Languages",
    items: ["French · native", "English · fluent", "Korean · TOPIK 2"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-[1080px] px-6 pt-24 sm:px-10 sm:pt-[96px]"
    >
      <SectionHeading title="Skills" />

      {skillGroups.map((group, i) => (
        <motion.div
          key={group.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="grid grid-cols-1 gap-x-8 gap-y-3 border-b border-ink/[0.08] py-5 sm:grid-cols-[185px_1fr]"
        >
          <div className="pt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
            {group.name}
          </div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-[2px] bg-chip px-3 py-1.5 font-mono text-[13px] text-chip-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
