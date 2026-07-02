"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  meta,
}: {
  title: string;
  meta?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex items-baseline justify-between border-b border-ink/15 pb-[18px]"
    >
      <h2 className="text-[32px] font-semibold tracking-[-0.02em] text-ink">
        {title}
      </h2>
      {meta && (
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-label">
          {meta}
        </span>
      )}
    </motion.div>
  );
}
