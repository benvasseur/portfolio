"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="About" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 sm:p-10"
        >
          <div className="max-w-2xl space-y-4 text-neutral-400 leading-relaxed">
            <p>
              I started my career in web development with a strong backend
              foundation (PHP, then Node.js and Python), which helps me
              understand full product systems end to end.
            </p>
            <p>
              Over the years I specialized in front-end development, working
              with all major frameworks (Angular, Vue.js, React) and focusing on
              building maintainable, scalable UIs for complex applications.
            </p>
            <p>
              For the last 3+ years, my focus has been on{" "}
              <span className="text-neutral-200">
                high-performance rendering and interactive interfaces
              </span>
              , working extensively with Canvas and WebGL for real-time,
              data-heavy applications in medical and scientific domains.
            </p>
            <p>
              Based in Seoul, South Korea, I&apos;m experienced in collaborating
              with international teams across different time zones.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
