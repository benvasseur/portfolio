"use client";

import { useEffect, useRef } from "react";

interface LiveTraceProps {
  liveTrace?: boolean;
  traceLines?: number;
  traceSpeed?: number;
}

const COLOR = "#c8553a";
const COLS = 320;

export default function LiveTrace({
  liveTrace = true,
  traceLines = 5,
  traceSpeed = 1,
}: LiveTraceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const N = Math.max(1, traceLines);
    const data = Array.from({ length: N }, () => new Array(COLS).fill(0));
    const phase = data.map(() => Math.random() * 1000);
    let t = 0;
    let rafId = 0;

    const resize = () => {
      cv.width = Math.round(cv.clientWidth * dpr);
      cv.height = Math.round(cv.clientHeight * dpr);
    };
    resize();

    const advance = () => {
      t++;
      for (let i = 0; i < N; i++) {
        const arr = data[i];
        arr.shift();
        const x = t * 0.045 * traceSpeed + phase[i];
        let v =
          Math.sin(x * 1.6) * 0.35 +
          Math.sin(x * 0.5 + phase[i]) * 0.3 +
          (Math.random() - 0.5) * 0.45;
        if (Math.random() < 0.012) v += (Math.random() - 0.5) * 2.4;
        arr.push(v);
      }
    };

    const render = () => {
      const w = cv.clientWidth;
      const h = cv.clientHeight;
      if (cv.width !== Math.round(w * dpr)) resize();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const laneH = h / N;
      ctx.lineWidth = 1.3;
      ctx.strokeStyle = COLOR;
      ctx.lineJoin = "round";
      ctx.globalAlpha = 0.85;
      for (let i = 0; i < N; i++) {
        const arr = data[i];
        const midY = laneH * (i + 0.5);
        const amp = laneH * 0.34 * 0.9;
        ctx.beginPath();
        for (let c = 0; c < arr.length; c++) {
          const px = (c / (arr.length - 1)) * w;
          const py = midY - arr[c] * amp;
          if (c === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!liveTrace || prefersReduced) {
      // Draw a single static frame with a pre-filled buffer.
      for (let i = 0; i < COLS; i++) advance();
      render();
      return;
    }

    const tick = () => {
      advance();
      render();
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [liveTrace, traceLines, traceSpeed]);

  return (
    <div className="relative mt-16 h-[180px] overflow-hidden border-y border-ink/10">
      <canvas ref={canvasRef} className="block h-full w-full" />
      <div className="pointer-events-none absolute inset-x-0 bottom-4">
        <div className="mx-auto max-w-[1080px] px-6 sm:px-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
            live · canvas · 60 fps · rendered in real time, not a gif
          </span>
        </div>
      </div>
    </div>
  );
}
