"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1080px] px-6 pt-24 sm:px-10 sm:pt-[96px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]"
      >
        <div className="pt-2 font-mono text-xs uppercase tracking-[0.1em] text-accent">
          About
        </div>
        <div className="max-w-[680px]">
          <p className="text-[21px] leading-[1.6] text-ink-strong">
            I started in backend (PHP, then Node.js and Python), which still
            shapes how I see full product systems end to end. Over the years I
            moved to the front end across Angular, Vue, and React, focused on
            maintainable UIs for complex applications.
          </p>
          <p className="mt-6 text-[21px] leading-[1.6] text-ink-strong">
            For 3+ years my work has centered on{" "}
            <b className="font-semibold">high-performance rendering</b>: Canvas
            and WebGL for real-time, data-heavy interfaces in medical and
            scientific domains. Based in Seoul, I work comfortably across
            international teams and time zones.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
