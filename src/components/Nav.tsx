"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#"
          className="font-mono text-[15px] font-medium tracking-[0.04em] text-ink"
        >
          BV<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-[30px] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.06em] text-label transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Benjamin_Vasseur_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[2px] border border-ink/25 px-[14px] py-2 font-mono text-xs uppercase tracking-[0.06em] text-ink transition-colors hover:border-ink/60"
          >
            Résumé ↗
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-ink/10 bg-paper/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.06em] text-label transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Benjamin_Vasseur_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs uppercase tracking-[0.06em] text-ink"
            >
              Résumé ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
