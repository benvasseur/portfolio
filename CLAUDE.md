# CLAUDE.md

Personal portfolio site for Benjamin Vasseur. Single-page, dark, minimal.

## Commands
- `npm run dev` - local dev server at http://localhost:3000
- `npm run build` - static export to `out/` (this is what Netlify deploys)
- `npm run start` - serve the production build
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
- `src/app/layout.tsx` - root layout, fonts, metadata, Umami analytics script.
- `src/app/globals.css` - Tailwind import + design tokens via `@theme inline`.
- `src/components/*` - one file per page section (Hero, About, CaseStudies,
  Experience, Skills, Contact, Footer, Nav) plus shared `SectionHeading`.
- `public/` - resume PDF, favicon, and case-study images/videos.
- Import with the `@/` alias (maps to `src/`).

## Conventions
- **Design: dark and minimal.** Use the theme tokens from `globals.css`
  (`neutral-100..950`, `accent`, `accent-dim`) rather than arbitrary hex values.
- **Section components are client components** (`"use client"`) and animate in
  with Framer Motion. Match the existing pattern: `initial`/`animate` for
  above-the-fold (Hero), `whileInView` with `viewport={{ once: true }}` for
  sections further down. See `Hero.tsx` and `SectionHeading.tsx`.
- Styling is Tailwind utility classes inline; no CSS modules.
- **No em dashes in copy** - they read as AI-generated.

## Deploy
Netlify builds `npm run build` and publishes `out/`.
