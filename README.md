# benjaminvasseur.dev

Personal portfolio of Benjamin Vasseur, full-stack software engineer in Seoul.

Next.js 16 (static export), React 19, Tailwind CSS v4 and Framer Motion,
deployed on Netlify.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
npm run lint
```

The page is composed in `src/app/page.tsx` from one component per section in
`src/components/`. The hero's EEG trace (`LiveTrace.tsx`) is a plain
`<canvas>` drawn every frame, not a video. Case-study media lives in `public/`.
