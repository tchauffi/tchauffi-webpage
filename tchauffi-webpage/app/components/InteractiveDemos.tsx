"use client";

import { useEffect, useState } from "react";

interface Demo {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string;
  url: string;
  repo: string;
  note?: string;
}

const demos: Demo[] = [
  {
    id: "sudokudit",
    index: "01",
    title: "SudokuDiT — Diffusion Sudoku Solver",
    description:
      "A 1.28M-parameter Diffusion Transformer that solves Sudoku as masked discrete diffusion, filling in the cells it's most confident about first, MaskGIT-style. Runs entirely in your browser via ONNX.",
    tags: "Discrete Diffusion · ONNX · In-Browser Inference",
    url: "https://tchauffi.github.io/nonet/",
    repo: "https://github.com/tchauffi/nonet",
  },
  {
    id: "diffusion-pytorch",
    index: "02",
    title: "Latent Diffusion Image Generator",
    description:
      "Generate AI images from a Latent Diffusion Model running entirely client-side via WebAssembly — no server, no API calls, just your browser doing the denoising.",
    tags: "Diffusion · WebAssembly · Rust",
    url: "https://tchauffi.github.io/diffusion-pytorch/",
    repo: "https://github.com/tchauffi/diffusion-pytorch",
  },
  {
    id: "chesssight",
    index: "03",
    title: "ChessSight — Board Reader",
    description:
      "Drop a photo of a chessboard and two vision models — trained entirely on synthetic Blender renders — read the position live in your tab. Nothing is uploaded to a server.",
    tags: "Computer Vision · Synthetic Data · In-Browser",
    url: "https://tchauffi.github.io/ChessSight/",
    repo: "https://github.com/tchauffi/ChessSight",
  },
  {
    id: "raytracer",
    index: "04",
    title: "GPU Raytracer",
    description:
      "A real-time raytracer written in Rust, compiled to run in-browser via WebGPU. Drag to orbit the camera and watch it render live.",
    tags: "Rust · WebGPU · Real-time Rendering",
    url: "https://tchauffi.github.io/rust-raytracer/",
    repo: "https://github.com/tchauffi/rust-raytracer",
    note: "Requires a WebGPU-enabled browser (Chrome/Edge recommended).",
  },
];

export default function InteractiveDemos() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = demos.find((d) => d.id === openId) ?? null;

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {demos.map((demo) => (
          <div
            key={demo.id}
            className="group project-item hover-lift p-6 -m-2 rounded-lg border border-border flex flex-col"
          >
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-white/40 text-sm">{demo.index}</span>
              <h3 className="text-lg text-white font-light">{demo.title}</h3>
            </div>
            <p className="text-white/60 ml-10 mb-3 text-sm leading-relaxed flex-1">
              {demo.description}
            </p>
            <div className="ml-10 flex flex-col gap-3">
              <span className="text-white/40 text-xs">{demo.tags}</span>
              {demo.note && (
                <span className="text-white/30 text-xs italic">{demo.note}</span>
              )}
              <div className="flex items-center gap-4 flex-wrap">
                <button
                  type="button"
                  onClick={() => setOpenId(demo.id)}
                  className="inline-flex items-center gap-2 text-sm text-white/80 border border-white/30 rounded-full px-4 py-1.5 hover:bg-white hover:text-navy transition-colors"
                >
                  Launch Demo →
                </button>
                <a
                  href={demo.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white text-xs transition-colors"
                >
                  Source →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div
            className="w-full max-w-5xl h-[85vh] bg-navy-dark border border-border rounded-lg flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-border">
              <h3 className="text-white/90 text-sm md:text-base font-light truncate">
                {active.title}
              </h3>
              <div className="flex items-center gap-4 shrink-0">
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs md:text-sm transition-colors"
                >
                  Open in new tab ↗
                </a>
                <button
                  type="button"
                  onClick={() => setOpenId(null)}
                  aria-label="Close demo"
                  className="text-white/50 hover:text-white text-xl leading-none transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
            <iframe
              src={active.url}
              title={active.title}
              className="flex-1 w-full h-full border-0 bg-white"
              allow="clipboard-write"
            />
          </div>
        </div>
      )}
    </>
  );
}
