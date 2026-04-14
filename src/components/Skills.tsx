"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    category: "Front-End",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Vite",
      "WebGL",
      "Canvas",
      "Tailwind CSS",
    ],
  },
  {
    category: "Back-End",
    skills: ["Node.js", "Express", "Python", "PHP", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "AWS", "CI/CD", "Vercel", "Cypress", "Git", "Figma"],
  },
  {
    category: "Languages",
    skills: ["French (Native)", "English (Fluent)", "Korean (TOPIK 2)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Skills" />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-sm text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
