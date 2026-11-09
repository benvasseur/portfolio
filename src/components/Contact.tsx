"use client";

import { motion } from "framer-motion";

export default function Contact({ year }: { year: number }) {
  return (
    <section id="contact" className="mt-24 bg-dark text-dark-ink sm:mt-[96px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[1080px] px-6 pt-[88px] pb-16 sm:px-10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-dark-accent">
          Open to new opportunities
        </p>

        <h2 className="mt-5 text-[44px] font-semibold leading-[0.98] tracking-[-0.03em] sm:text-[64px]">
          Let&apos;s talk.
        </h2>

        <p className="mt-6 max-w-[520px] text-[19px] leading-[1.5] text-dark-muted">
          Currently looking for new opportunities. A question or just a hello,
          either is welcome.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-[18px]">
          <a
            href="mailto:benvasseur59@gmail.com"
            className="rounded-[2px] bg-dark-ink px-6 py-[14px] text-[15px] font-medium text-dark transition-opacity hover:opacity-90"
          >
            benvasseur59@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/vasseurbenjamin"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[2px] border border-dark-ink/30 px-6 py-[14px] text-[15px] font-medium text-dark-ink transition-colors hover:border-dark-ink/60"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-between gap-3 border-t border-dark-ink/[0.12] pt-7 font-mono text-xs text-dark-faint">
          <span>Seoul, South Korea · F-2 visa, no sponsorship needed</span>
          <span>FR native · EN fluent · KO TOPIK 2</span>
          <span>© {year} Benjamin Vasseur</span>
        </div>
      </motion.div>
    </section>
  );
}
