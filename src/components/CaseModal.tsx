"use client";

import { useEffect, useRef } from "react";
import type { CaseStudy } from "./CaseStudies";

export default function CaseModal({
  caseStudy,
  onClose,
}: {
  caseStudy: CaseStudy;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    panel?.focus({ preventScroll: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button, video, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === panel)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#16140f]/72 px-6 py-14 backdrop-blur-[6px]"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={caseStudy.title}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[1000px] overflow-hidden rounded-[3px] bg-paper shadow-[0_24px_80px_rgba(0,0,0,0.4)] outline-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/[0.12] px-7 py-5">
          <div className="font-mono text-xs uppercase tracking-[0.06em] text-accent">
            {caseStudy.num} / {caseStudy.client} · {caseStudy.period}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-[2px] border border-ink/20 text-lg leading-none text-ink transition-colors hover:border-accent hover:text-accent"
          >
            ×
          </button>
        </div>

        {/* Video */}
        <div className="aspect-[16/9] w-full bg-dark">
          {caseStudy.video && (
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              poster={caseStudy.poster}
              className="h-full w-full object-contain"
            >
              <source src={caseStudy.video} type="video/mp4" />
            </video>
          )}
        </div>

        {/* Body */}
        <div className="px-10 pt-9 pb-11">
          <h3 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            {caseStudy.title}
          </h3>

          <div className="mt-[18px] flex items-baseline gap-4">
            <div className="text-[56px] font-semibold leading-[0.85] tracking-[-0.03em] text-ink">
              {caseStudy.metric}
              <span className="text-accent">{caseStudy.unit}</span>
            </div>
            <div className="whitespace-pre-line font-mono text-xs leading-[1.5] text-label">
              {caseStudy.metricLabel}
            </div>
          </div>

          <p className="mt-[26px] max-w-[760px] text-[17px] leading-[1.6] text-ink-strong">
            {caseStudy.overview}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-7 border-t border-ink/[0.12] pt-7 sm:grid-cols-3">
            {(
              [
                ["Challenge", caseStudy.challenge],
                ["Solution", caseStudy.solution],
                ["Result", caseStudy.result],
              ] as const
            ).map(([label, body]) => (
              <div key={label}>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                  {label}
                </div>
                <div className="mt-2 text-[14px] leading-[1.6] text-muted">
                  {body}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
              Key details
            </div>
            <div className="mt-3.5 flex flex-col gap-2.5">
              {caseStudy.highlights.map((h) => (
                <div key={h} className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">–</span>
                  <span className="text-[15px] leading-[1.5] text-ink-strong">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {(caseStudy.tags.length > 0 ||
            (caseStudy.links && caseStudy.links.length > 0)) && (
            <div className="mt-9 flex flex-wrap items-end justify-between gap-6 border-t border-ink/[0.12] pt-6">
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-[2px] bg-chip px-[11px] py-[5px] font-mono text-xs text-chip-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {caseStudy.links && caseStudy.links.length > 0 && (
                <div className="flex gap-3">
                  {caseStudy.links.map((ln) => (
                    <a
                      key={ln.href}
                      href={ln.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-accent pb-0.5 font-mono text-[13px] text-ink"
                    >
                      {ln.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
