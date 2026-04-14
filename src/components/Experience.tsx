"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

const jobs: Job[] = [
  {
    company: "LVIS Corp",
    role: "Front-End Developer",
    location: "Seoul",
    period: "Aug 2024 – Sep 2025",
    highlights: [
      "Built a platform for EEG analysis with AI, detecting seizures and neurological events",
      "Implemented canvas rendering for EEG amplitude heatmap, from 3-4 FPS to stable 60 FPS (20x faster)",
      "Led development of user/team management app with Stripe and KG Inicis payment integration",
    ],
  },
  {
    company: "Lunit",
    role: "Front-End Developer",
    location: "Seoul",
    period: "Dec 2021 – Dec 2023",
    highlights: [
      "Built cancer cell detection platform using AI on whole-slide images with React, TypeScript, and WebGL",
      "Optimized rendering by 50% for 5GB images containing millions of cells using Web Workers",
      "Architected monorepo with Nx and Turborepo for shared Design System libraries",
    ],
  },
  {
    company: "Global Coach Group",
    role: "Full-Stack Lead Developer",
    location: "Seoul",
    period: "Feb 2019 – Dec 2021",
    highlights: [
      "Led team of 3 developers, establishing code review standards and architectural best practices",
      "Built RESTful APIs with Node.js and Python for frontend-backend communication",
      "Managed localization pipeline for 12 languages via Lokalise",
    ],
  },
  {
    company: "3i Inc.",
    role: "Full-Stack Developer",
    location: "Seoul",
    period: "Jun 2015 – Feb 2019",
    highlights: [
      "Built SaaS platform for creating and editing 3D/VR content",
      "Implemented real-time collaboration with WebSockets",
      "Built authentication and role-based permissions systems",
    ],
  },
  {
    company: "Faire Savoir",
    role: "Full-Stack Developer",
    location: "Lille, France",
    period: "May 2014 – May 2015",
    highlights: [
      "Developed public-facing tourism websites with Drupal",
      "Built booking and reservation features for tourism services",
    ],
  },
  {
    company: "Élap",
    role: "Developer",
    location: "Lille, France",
    period: "Sep 2011 – May 2014",
    highlights: [
      "Developed financial software for public sector organizations",
      "Built expense management and stock management features",
      "Implemented automated receipt processing and invoice generation",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Experience" subtitle="Where I've worked" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800 md:left-1/2" />

          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative mb-8 pl-8 md:w-1/2 md:pl-0 ${
                i % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-2 h-3 w-3 rounded-full border-2 border-accent bg-neutral-950 ${
                  i % 2 === 0
                    ? "left-[-6px] md:left-auto md:right-[-6px]"
                    : "left-[-6px] md:left-[-6px]"
                }`}
              />

              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
                <p className="mb-1 font-mono text-xs text-neutral-500">
                  {job.period}
                </p>
                <h3 className="text-lg font-semibold text-neutral-100">
                  {job.company}
                </h3>
                <p className="mb-3 text-sm text-accent">
                  {job.role} · {job.location}
                </p>
                <ul
                  className={`space-y-1.5 ${
                    i % 2 === 0 ? "md:text-left" : ""
                  }`}
                >
                  {job.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm leading-relaxed text-neutral-400"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
