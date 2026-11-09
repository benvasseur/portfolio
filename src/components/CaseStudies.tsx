"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import CaseModal from "./CaseModal";

export interface CaseLink {
  label: string;
  href: string;
}

export interface CaseStudy {
  num: string;
  client: string;
  period: string;
  role?: string;
  title: string;
  metric: string;
  unit: string;
  metricLabel: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  highlights: string[];
  links?: CaseLink[];
  video?: string;
  poster?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const cases: CaseStudy[] = [
  {
    num: "01",
    client: "LVIS Corp",
    period: "2024–2025",
    role: "Software Engineer",
    title: "Live EEG Amplitude Heatmap",
    metric: "60",
    unit: " FPS",
    metricLabel: "stable rendering,\nup from 3–4 FPS",
    tags: ["Vue.js", "Canvas API", "TypeScript"],
    overview:
      "A clinical EEG platform streaming continuous multi-channel brain activity. The amplitude heatmap is the primary read surface: clinicians scrub through hours of signal, so any stutter directly hurts diagnosis.",
    challenge:
      "The SVG implementation did full redraws on every update. Performance collapsed as live data streamed in, making real-time monitoring unusable.",
    solution:
      "Rewrote the engine on Canvas with incremental drawing (only changed regions re-render) and trimmed the data pipeline to a stable frame rate.",
    result:
      "From 3–4 FPS to a steady 60 FPS. Smooth scrolling and real-time updates with zero frame drops during continuous streaming.",
    highlights: [
      "Incremental region-based redraw instead of full-frame repaint",
      "Decoupled data ingestion from the render loop",
      "Held 60 FPS on hours-long continuous recordings",
    ],
    links: [],
    video: "/videos/lvis-amplitude.mp4",
    poster: "/images/cases/lvis-amplitude.webp",
  },
  {
    num: "02",
    client: "Lunit",
    period: "2021–2023",
    role: "Front-End Developer",
    title: "Cancer Cell Detection Viewer (uIHC v3)",
    metric: "50",
    unit: "%",
    metricLabel: "render time cut\non 5GB whole-slide images",
    tags: ["React", "WebGL", "Web Workers", "TypeScript", "Nx"],
    overview:
      "A pathology viewer for AI-analyzed whole-slide images. Pathologists pan and zoom across gigapixel scans while millions of detected cells are drawn as an interactive overlay.",
    challenge:
      "Slides hold millions of cells with many properties. Zoom, pan, hover and threshold changes had to stay smooth on images up to 5GB.",
    solution:
      "Capped minimum zoom to control density, moved heavy preprocessing to Web Workers, and used WebGL with tile-based loading for GPU-accelerated cells.",
    result:
      "Halved rendering time on million-cell slides while keeping all interactions smooth in real time.",
    highlights: [
      "GPU-instanced rendering of millions of cell markers",
      "Tile-based loading tied to the viewport",
      "Preprocessing offloaded to Web Workers to keep the main thread free",
    ],
    links: [],
    video: "/videos/lunit-uihc.mp4",
    poster: "/images/cases/lunit-uihc.webp",
  },
  {
    num: "03",
    client: "Side project",
    period: "2026",
    role: "Solo build",
    // Non-breaking space keeps the Korean name on one line.
    title: "Daily Korean Reader (오늘의 이야기)",
    metric: "2",
    unit: "+1",
    metricLabel: "independent AI reviews,\nthen human approval",
    tags: [
      "Next.js",
      "Payload CMS",
      "PostgreSQL",
      "Claude",
      "OpenAI",
      "whisper.cpp",
      "Playwright",
    ],
    overview:
      "A daily reading habit for intermediate Korean learners (TOPIK 3–4): one short story a day with tap-to-gloss on every word, a grammar point, read-along audio and a TOPIK-style quiz. Reader accounts with Google and Kakao sign-in keep streaks and scores in sync.",
    challenge:
      "Publish a new, correct story every day as a solo developer. AI writes Korean at scale, but one unnatural sentence or wrong gloss loses learners, and native-level review doesn't scale.",
    solution:
      "A model-agnostic pipeline: any AI can write a story as a pull request (Claude, Codex, Gemini and Mistral so far). Separate Claude and Codex sessions then review it independently and solve the quiz blind. CI merges only the exact verified content; a person approves and schedules every story in the Payload admin.",
    result:
      "Live since October 15 with a new story every day, AI-drawn covers and read-along audio where the spoken word lights up. 340+ automated tests across Vitest and Playwright.",
    highlights: [
      "Two independent AI reviews plus a blind quiz solve, tied to a content hash before CI can merge; Mistral was tested as a third reviewer and dropped for weak Korean",
      "Read-along audio: Google TTS voices word-timed by a local whisper.cpp, calibrated so 67 of 68 words land within 150 ms",
      "Payload 3 and Next.js in one app on Vercel and Supabase (Seoul); Google and Kakao OAuth in plain fetch, no auth library",
    ],
    links: [
      {
        label: "Visit oiyagi.com ↗",
        href: "https://oiyagi.com",
      },
    ],
    video: "/videos/oiyagi.mp4",
    poster: "/images/cases/oiyagi.webp",
  },
  {
    num: "04",
    client: "Side project",
    period: "2026",
    role: "Solo build",
    title: "Korean Anki Miner",
    metric: "~2",
    unit: "s",
    metricLabel: "click → finished\nAnki card, end to end",
    tags: ["Vue 3", "TypeScript", "WXT", "Chrome MV3", "Claude", "Mistral"],
    overview:
      "A browser extension that turns any Korean word on a YouTube subtitle into a complete Anki flashcard: screenshot, translation and an AI-written explanation, in a couple of seconds.",
    challenge:
      "Read YouTube captions reliably across SPA navigation, isolate the overlay from YouTube's CSS, and keep API keys away from hostile page scripts.",
    solution:
      "A strict trust boundary keeps secrets in the service worker; the UI mounts in a Shadow DOM. Papago handles fast lookups, Claude handles structured card enrichment.",
    result:
      "A releasable MV3 extension: click a word, get a finished card with screenshot and AI explanation in seconds. CI builds and publishes on every tagged release.",
    highlights: [
      "Secrets isolated in the MV3 service worker, never exposed to the page",
      "Shadow-DOM overlay immune to YouTube style bleed",
      "Papago for fast lookups, Claude for structured card enrichment",
    ],
    links: [
      {
        label: "View on GitHub ↗",
        href: "https://github.com/benvasseur/korean-anki-miner",
      },
    ],
    video: "/videos/korean-anki-miner.mp4",
    poster: "/images/cases/korean-anki-miner.webp",
  },
];

function CaseMedia({
  study,
  onOpen,
}: {
  study: CaseStudy;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Previews only download and play while near the viewport; with reduced
  // motion they stay on the poster until opened in the modal.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      aria-label={`Expand ${study.title}`}
      className="group relative mt-[26px] aspect-[16/9] cursor-pointer overflow-hidden rounded-[2px] border border-ink/15 bg-chip transition-colors hover:border-accent"
    >
      {study.video ? (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          poster={study.poster}
          className="h-full w-full object-cover object-bottom"
        >
          <source src={study.video} type="video/mp4" />
        </video>
      ) : study.image ? (
        <Image
          src={study.image}
          alt={study.title}
          width={study.imageWidth ?? 1600}
          height={study.imageHeight ?? 900}
          className="h-full w-full object-contain"
        />
      ) : null}

      <span className="pointer-events-none absolute right-3 bottom-3 flex items-center gap-1.5 rounded-[2px] bg-accent px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-paper shadow-sm">
        ⤢ Expand
      </span>
    </div>
  );
}

function CaseBlock({
  study,
  index,
  onOpen,
}: {
  study: CaseStudy;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-ink/[0.08] py-14"
    >
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 font-mono text-xs uppercase tracking-[0.06em] text-label">
        <span className="text-accent">
          {study.num} / {study.client}
        </span>
        <span>
          {study.role && `${study.role} · `}
          {study.period}
        </span>
      </div>

      <div className="mt-7 grid grid-cols-1 items-start gap-8 md:grid-cols-[1.1fr_1fr] md:gap-[52px]">
        <div>
          <h3 className="break-keep text-[28px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[38px]">
            {study.title}
          </h3>

          <div className="mt-[26px] flex items-baseline-last gap-[18px]">
            <div className="text-[52px] font-semibold leading-[0.85] tracking-[-0.03em] text-ink sm:text-[76px]">
              {study.metric}
              <span className="text-accent">{study.unit}</span>
            </div>
            <div className="whitespace-pre-line font-mono text-xs leading-[1.5] text-label">
              {study.metricLabel}
            </div>
          </div>

          <CaseMedia study={study} onOpen={onOpen} />

          <div className="mt-5 flex flex-wrap gap-2">
            {study.tags.map((t) => (
              <span
                key={t}
                className="rounded-[2px] bg-chip px-[11px] py-[5px] font-mono text-xs text-chip-ink"
              >
                {t}
              </span>
            ))}
          </div>

          {study.links && study.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {study.links.map((ln) => (
                <a
                  key={ln.href}
                  href={ln.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] text-accent hover:underline"
                >
                  {ln.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-[22px] pt-1.5">
          {(
            [
              ["Challenge", study.challenge],
              ["Solution", study.solution],
              ["Result", study.result],
            ] as const
          ).map(([label, body]) => (
            <div key={label}>
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                {label}
              </div>
              <div className="mt-2 text-[15px] leading-[1.6] text-muted">
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const [openCase, setOpenCase] = useState<CaseStudy | null>(null);

  return (
    <section
      id="work"
      className="mx-auto max-w-[1080px] px-6 pt-24 sm:px-10 sm:pt-[96px]"
    >
      <SectionHeading title="Selected work" meta="Deep dives" />
      {cases.map((study, i) => (
        <CaseBlock
          key={study.num}
          study={study}
          index={i}
          onOpen={() => setOpenCase(study)}
        />
      ))}

      {openCase && (
        <CaseModal caseStudy={openCase} onClose={() => setOpenCase(null)} />
      )}
    </section>
  );
}
