import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Benjamin Vasseur · Senior Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori can't read CSS variables; these mirror the tokens in globals.css.
const paper = "#f6f4ef";
const ink = "#1a1916";
const label = "#6b675f";
const accent = "#c8553a";

const TRACE_LANES = 4;
const TRACE_HEIGHT = 180;
const TRACE_COLS = 300;

// Same waveform as LiveTrace, from a seeded RNG so every build renders the
// same image.
function tracePath(seed: number, midY: number, amp: number) {
  let s = seed;
  const rand = () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
  const phase = rand() * 1000;
  let d = "";
  for (let c = 0; c < TRACE_COLS; c++) {
    const x = c * 0.045 + phase;
    let v =
      Math.sin(x * 1.6) * 0.35 +
      Math.sin(x * 0.5 + phase) * 0.3 +
      (rand() - 0.5) * 0.45;
    if (rand() < 0.012) v += (rand() - 0.5) * 2.4;
    const px = (c / (TRACE_COLS - 1)) * size.width;
    const py = midY - v * amp;
    d += `${c === 0 ? "M" : "L"}${px.toFixed(1)} ${py.toFixed(1)}`;
  }
  return d;
}

export default async function OpengraphImage() {
  const fonts = join(process.cwd(), "src/assets/fonts");
  const [sans, mono] = await Promise.all([
    readFile(join(fonts, "Geist-SemiBold.ttf")),
    readFile(join(fonts, "GeistMono-Medium.ttf")),
  ]);

  const laneH = TRACE_HEIGHT / TRACE_LANES;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: paper,
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "64px 72px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "Geist Mono",
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: accent }}>Senior Full-Stack Engineer · Seoul, KR</span>
            <span style={{ color: label }}>benjaminvasseur.dev</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 36,
              fontSize: 132,
              fontWeight: 600,
              lineHeight: 0.93,
              letterSpacing: -4.6,
              color: ink,
            }}
          >
            <span>Benjamin</span>
            <span>Vasseur</span>
          </div>
        </div>

        <div style={{ display: "flex", borderTop: `1px solid ${ink}1a` }}>
          <svg
            width={size.width}
            height={TRACE_HEIGHT}
            viewBox={`0 0 ${size.width} ${TRACE_HEIGHT}`}
          >
            {Array.from({ length: TRACE_LANES }, (_, i) => (
              <path
                key={i}
                d={tracePath(i + 7, laneH * (i + 0.5), laneH * 0.34 * 0.9)}
                fill="none"
                stroke={accent}
                strokeOpacity={0.85}
                strokeWidth={2}
                strokeLinejoin="round"
              />
            ))}
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: sans, weight: 600, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 500, style: "normal" },
      ],
    }
  );
}
