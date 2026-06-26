"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 font-mono text-sm tracking-widest text-accent uppercase"
        >
          Full-Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-5xl font-bold leading-tight text-neutral-100 sm:text-7xl"
        >
          Benjamin Vasseur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl"
        >
          10+ years building high-performance web applications.
          <br className="hidden sm:block" />
          Specialized in real-time rendering and data-intensive interfaces.
        </motion.p>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          <div>
            <p className="text-3xl font-bold text-neutral-100 sm:text-4xl">
              20<span className="text-accent">x</span>
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Rendering speed improvement
            </p>
          </div>
          <div className="h-10 w-px bg-neutral-800" />
          <div>
            <p className="text-3xl font-bold text-neutral-100 sm:text-4xl">
              50<span className="text-accent">%</span>
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Load time reduction
            </p>
          </div>
          <div className="h-10 w-px bg-neutral-800" />
          <div>
            <p className="text-3xl font-bold text-neutral-100 sm:text-4xl">
              10<span className="text-accent">+</span>
            </p>
            <p className="mt-1 text-sm text-neutral-500">Years of experience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#cases"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dim"
          >
            View Case Studies
          </a>
          <a
            href="#contact"
            className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-neutral-100"
          >
            Get in Touch
          </a>
          <a
            href="/Benjamin_Vasseur_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-neutral-100"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-10 w-6 rounded-full border-2 border-neutral-700 p-1"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-neutral-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
