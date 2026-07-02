"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface ExpRow {
  dates: string;
  company: string;
  role: string;
  summary: string;
}

const expRows: ExpRow[] = [
  {
    dates: "Aug 2024 – Sep 2025",
    company: "LVIS Corp",
    role: "Front-End Developer · Seoul",
    summary:
      "EEG analysis platform with AI. Canvas amplitude heatmap, 3–4 → 60 FPS (20× faster). Led user/team app with Stripe & KG Inicis.",
  },
  {
    dates: "Dec 2021 – Dec 2023",
    company: "Lunit",
    role: "Front-End Developer · Seoul",
    summary:
      "AI cancer-cell viewer on whole-slide images. React + WebGL + Web Workers; 50% faster on 5GB slides. Nx/Turborepo design system.",
  },
  {
    dates: "Feb 2019 – Dec 2021",
    company: "Global Coach Group",
    role: "Full-Stack Lead · Seoul",
    summary:
      "Led a team of 3, set review & architecture standards. Node/Python REST APIs. 12-language localization via Lokalise.",
  },
  {
    dates: "Jun 2015 – Feb 2019",
    company: "3i Inc.",
    role: "Full-Stack Developer · Seoul",
    summary:
      "SaaS for 3D/VR content authoring. Real-time collaboration over WebSockets; auth & role-based permissions.",
  },
  {
    dates: "May 2014 – May 2015",
    company: "Faire Savoir",
    role: "Full-Stack Developer · Lille",
    summary:
      "Public-facing tourism sites on Drupal with booking & reservation features.",
  },
  {
    dates: "Sep 2011 – May 2014",
    company: "Élap",
    role: "Developer · Lille",
    summary:
      "Financial software for the public sector. Expense/stock management, automated receipts & invoicing.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1080px] px-6 pt-24 sm:px-10 sm:pt-[96px]"
    >
      <SectionHeading title="Experience" meta="2011–2025" />

      {expRows.map((row, i) => (
        <motion.div
          key={row.company}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="grid grid-cols-1 items-baseline gap-x-8 gap-y-2 border-b border-ink/[0.08] py-[22px] sm:grid-cols-[185px_1fr] md:grid-cols-[185px_1fr_1.1fr]"
        >
          <div className="font-mono text-xs tracking-[0.04em] text-label">
            {row.dates}
          </div>
          <div>
            <div className="text-[18px] font-semibold text-ink">
              {row.company}
            </div>
            <div className="mt-[3px] text-[13px] text-label">{row.role}</div>
          </div>
          <div className="text-[14px] leading-[1.55] text-muted">
            {row.summary}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
