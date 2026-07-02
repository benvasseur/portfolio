"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "20", unit: "×", label: "Rendering speed" },
  { value: "50", unit: "%", label: "Load time cut" },
  { value: "14", unit: "+", label: "Years experience" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1080px] px-6 pt-[88px] sm:px-10">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-mono text-xs uppercase tracking-[0.14em] text-accent"
      >
        Full-stack developer · Seoul, KR
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-[22px] text-[64px] font-semibold leading-[0.93] tracking-[-0.035em] text-ink sm:text-[88px] lg:text-[108px]"
      >
        Benjamin
        <br />
        Vasseur
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-[30px] max-w-[620px] text-[22px] leading-[1.5] text-muted"
      >
        I build production systems end to end: REST APIs and microservices in
        Node.js and Python, plus the data-heavy React and WebGL interfaces on
        top.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mt-12 flex flex-wrap gap-10 sm:gap-[60px]"
      >
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="text-[46px] font-semibold tracking-[-0.02em] text-ink">
              {m.value}
              <span className="text-accent">{m.unit}</span>
            </div>
            <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-label">
              {m.label}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 flex flex-wrap items-center gap-[14px]"
      >
        <a
          href="#work"
          className="rounded-[2px] bg-ink px-6 py-[14px] text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          View work →
        </a>
        <a
          href="#contact"
          className="rounded-[2px] border border-ink/25 px-6 py-[14px] text-sm font-medium text-ink transition-colors hover:border-ink/60"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
