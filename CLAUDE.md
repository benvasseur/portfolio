# CLAUDE.md

Personal portfolio site for Benjamin Vasseur. Single-page, light editorial
("warm paper") layout with a single terracotta accent.

## Commands
- `npm run dev` - local dev server at http://localhost:3000
- `npm run build` - static export to `out/` (this is what Netlify deploys)
- `npx serve out` - preview the production build (`npm run start` / `next start`
  does not work with `output: "export"`)
- `npm run lint` - ESLint (eslint-config-next)

## Stack
- Next.js 16 (App Router) with `output: "export"` - **static site, no server runtime**
- React 19, TypeScript 5
- Tailwind CSS v4 (config-less, theme lives in CSS)
- Framer Motion 12 for animation

Because the site is statically exported (`next.config.ts`), do not add server
actions, route handlers, or any feature that needs a Node runtime. Images use
`unoptimized: true`, so reference assets directly from `public/`.

## Architecture
- `src/app/page.tsx` - the whole page; composes the section components in order.
- `src/app/layout.tsx` - root layout, Geist / Geist Mono fonts, metadata, Umami
  analytics script. Wraps the app in `MotionProvider` (Framer Motion
  `reducedMotion="user"`).
- `src/app/opengraph-image.tsx` - social preview image, rendered at build time
  with `next/og` from the TTFs in `src/assets/fonts/` (Satori can't use woff2).
  Its colors mirror the theme tokens; keep it in sync with the hero. The export
  has no file extension, so `netlify.toml` sets its `Content-Type`.
- `src/app/robots.ts`, `src/app/sitemap.ts` - static `robots.txt` / `sitemap.xml`.
- `src/app/globals.css` - Tailwind import + design tokens via `@theme inline`.
- `src/components/*` - one file per page section (Hero, LiveTrace, About,
  CaseStudies, Experience, Skills, Contact, Nav) plus shared `SectionHeading`.
  The contact section is the dark footer (there is no separate `Footer`).
- `CaseModal.tsx` is the case-study lightbox: clicking a case's media opens a
  modal that plays the video full-width, with an extended write-up. It locks
  body scroll, traps focus, and closes on backdrop click / × / Escape.
- `LiveTrace.tsx` is the signature hero element: a `<canvas>` EEG waveform
  drawn via `requestAnimationFrame`, advancing in fixed 60 Hz steps so speed
  doesn't depend on display refresh rate. It pauses while off-screen and falls
  back to a static frame under `prefers-reduced-motion`.
- `public/` - resume PDF, favicon, and case-study images/videos. Case-card
  videos use `preload="none"` and only play while near the viewport. Encode new
  videos at ≤1080p, H.264, CRF ~25–27, no audio, `-movflags +faststart`; posters
  as WebP.
- Import with the `@/` alias (maps to `src/`).

## Conventions
- **Design: light, editorial, minimal.** Use the theme tokens from `globals.css`
  (`paper`, `ink`, `ink-strong`, `muted`, `label`, `faint`, `chip`, `chip-ink`,
  `accent`, plus the `dark-*` set for the contact section) rather than arbitrary
  hex values. Hairline borders use opacity modifiers, e.g. `border-ink/10`.
  Content is centered at `max-w-[1080px]` with `px-6 sm:px-10`; radius is a
  sharp `rounded-[2px]`.
- **Fonts:** Geist (sans) and Geist Mono, exposed as `--font-geist-sans` /
  `--font-geist-mono`. Mono is used for eyebrows, labels, metadata, and chips.
- **Section components are client components** (`"use client"`) and animate in
  with Framer Motion. Match the existing pattern: `initial`/`animate` for
  above-the-fold (Hero), `whileInView` with `viewport={{ once: true }}` for
  sections further down. See `Hero.tsx` and `SectionHeading.tsx`.
- Styling is Tailwind utility classes inline; no CSS modules.
- **No em dashes in copy** - they read as AI-generated. Use en dashes for
  numeric ranges and middots (`·`) or a rewrite for prose separators.

## Deploy
Netlify builds `npm run build` and publishes `out/` (build settings live in the
Netlify UI). `netlify.toml` only pins Node 24 and sets headers: immutable
caching for `/_next/static/*` and the OG image content type.

Site copy should match `public/Benjamin_Vasseur_Resume.pdf`; cross-check
numbers and titles against it when editing content.
