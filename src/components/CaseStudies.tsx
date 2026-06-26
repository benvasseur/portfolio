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
  imageWidth?: number;
  imageHeight?: number;
  video?: string;
  link?: string;
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
    image: "/images/cases/lunit-uihc.webp",
    video: "/videos/lunit-uihc.mp4",
  },
  {
    id: "korean-anki-miner",
    company: "Side Project",
    title: "Korean Anki Miner",
    period: "2026",
    context:
      "A Chrome extension (Manifest V3) that turns Korean YouTube subtitles into Anki flashcards. Existing immersion tools lock the core mining loop, see a word, get its meaning, save it to Anki, behind subscriptions and feature bloat. This does only that loop, and does it fast.",
    challenge:
      "Building inside a live YouTube page means reading captions reliably across the SPA's in-place navigation, isolating the UI so its CSS and YouTube's never collide, and keeping API keys off a page hostile scripts can read. Two jobs also pull in opposite directions: per-word translation must be near-instant and cheap, while card enrichment can be slower but needs structured output.",
    solution:
      "Built on WXT with Vue 3 and TypeScript. A strict trust boundary keeps all secrets and network calls in the service worker; the content script owns the DOM but holds nothing sensitive. The overlay mounts inside a Shadow DOM, and captions are read from the rendered DOM rather than YouTube's now token-gated endpoint. A two-provider split behind adapter interfaces routes the click path to Papago (fast, cached by surface form) and on-demand enrichment to Claude (structured output, model-selectable).",
    result:
      "A working, releasable extension: click a word and a finished Anki card, screenshot and AI explanation included, lands in a couple of seconds. CI type-checks and builds on every push, and tagged releases publish a packaged zip automatically. The adapter layer leaves translation and AI providers swappable without touching callers.",
    tech: ["Vue 3", "TypeScript", "WXT", "Chrome MV3", "Anthropic SDK", "AnkiConnect"],
    image: "/images/cases/korean-anki-miner.webp",
    imageWidth: 2560,
    imageHeight: 1027,
    link: "https://github.com/benvasseur/korean-anki-miner",
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
            width={study.imageWidth ?? 1410}
            height={study.imageHeight ?? 809}
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

        {study.link && (
          <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-accent"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
            </svg>
            View on GitHub
          </a>
        )}
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
          subtitle="Deep dives into the hardest engineering problems I've solved"
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
