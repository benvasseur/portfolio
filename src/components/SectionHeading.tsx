"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold text-neutral-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-neutral-400 text-lg">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-16 bg-accent" />
    </motion.div>
  );
}
