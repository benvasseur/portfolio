"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface CaseStudy {
  id: string;
  company: string;
  title: string;
  period: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
  tech: string[];
  image?: string;
  video?: string;
}

const cases: CaseStudy[] = [
  {
    id: "lvis",
    company: "LVIS Corp",
    title: "Live EEG Amplitude Heatmap",
    period: "2024 – 2025",
    context:
      "A platform for live EEG visualization, including multiple widgets for real-time brain activity monitoring. The amplitude map provides a real-time overview of brain activity, originally built ~10 years ago as a non-real-time visualization.",
    challenge:
      "Requirements evolved to live updates, but the existing SVG-based implementation performed full redraws on every data update. Performance degraded rapidly as data streamed in, making the visualization unusable for real-time monitoring.",
    solution:
      "Rewrote the rendering engine using Canvas with incremental drawing instead of full redraws. Optimized the data pipeline to only process and render changed regions, maintaining a stable frame rate with continuous data updates.",
    result:
      "Achieved a 20x rendering speed improvement, from 3-4 FPS to a stable 60 FPS. Smooth scrolling and real-time updates with no frame drops during continuous data streaming.",
    tech: ["Vue.js", "Canvas API", "TypeScript"],
    image: "/images/cases/lvis-amplitude.png",
    video: "/videos/lvis-amplitude.mp4",
  },
  {
    id: "lunit",
    company: "Lunit",
    title: "Cancer Cell Detection Viewer (uIHC v3)",
    period: "2021 – 2023",
    context:
      "A platform for pathologists to explore very large whole-slide images and inspect AI-detected cells and biomarkers. Users interact at cell-level with hover, threshold adjustments, and dynamic redraws.",
    challenge:
      "Each slide contains millions of cells with multiple associated properties. Data size and redraw cost increase rapidly with interaction. All interactions (zoom, pan, hover, threshold changes) must remain smooth on images up to 5GB.",
    solution:
      "Limited minimum zoom level to control data density. Moved heavy computation and preprocessing to Web Workers to keep the main thread responsive. Used WebGL for GPU-accelerated cell rendering with efficient tile-based loading.",
    result:
      "Optimized rendering time by 50% when displaying whole-slide images containing millions of cells. Achieved smooth real-time interactions across zoom, pan, hover, and threshold changes.",
    tech: ["React", "TypeScript", "WebGL", "Web Workers", "Nx"],
    image: "/images/cases/lunit-uihc.png",
    video: "/videos/lunit-uihc.mp4",
  },
];

function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50"
    >
      {/* Media section */}
      <div className="relative w-full overflow-hidden bg-neutral-800">
        {study.video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={study.image}
            className="w-full"
          >
            <source src={study.video} type="video/mp4" />
          </video>
        ) : study.image ? (
          <Image
            src={study.image}
            alt={study.title}
            width={1410}
            height={809}
            className="w-full h-auto"
          />
        ) : (
          <div className="flex h-48 items-center justify-center text-neutral-600">
            <p className="text-sm">Screenshot / Video placeholder</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {study.company}
          </span>
          <span className="text-xs text-neutral-500">{study.period}</span>
        </div>

        <h3 className="mb-4 text-xl font-bold text-neutral-100 sm:text-2xl">
          {study.title}
        </h3>

        <div className="space-y-4">
          <div>
            <h4 className="mb-1 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Context
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              {study.context}
            </p>
          </div>

          <div>
            <h4 className="mb-1 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Challenge
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              {study.challenge}
            </p>
          </div>

          <div>
            <h4 className="mb-1 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Solution
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              {study.solution}
            </p>
          </div>

          <div className="rounded-lg bg-accent/5 border border-accent/10 p-4">
            <h4 className="mb-1 text-xs font-semibold tracking-widest text-accent uppercase">
              Result
            </h4>
            <p className="text-sm leading-relaxed text-neutral-300">
              {study.result}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  return (
    <section id="cases" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Case Studies"
          subtitle="Deep dives into performance challenges I solved"
        />
        <div className="space-y-12">
          {cases.map((study, i) => (
            <CaseCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
