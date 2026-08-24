import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Building2, GraduationCap } from "lucide-react";
import { SectionHeading, Reveal, Corners } from "./Reveal";
import LguPanel from "./vision/LguPanel";
import SchoolsPanel from "./vision/SchoolsPanel";

export default function Vision() {
  const [mode, setMode] = useState("lgu");
  const isLgu = mode === "lgu";

  return (
    <section
      id="vision"
      data-testid="vision-section"
      className="relative border-t border-white/5 py-28 lg:py-36"
      style={{ "--mac-accent-rgb": isLgu ? "43 127 255" : "124 58 237" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Vision Intelligence"
          title={<>Your cameras,<br /><span className="text-mac-accent">finally watched</span>.</>}
          sub="One AI layer over the cameras you already own. Two missions: safer cities, and safer campuses."
          testId="vision-heading"
        />

        <Reveal delay={0.05}>
          <div className="relative mb-16 border border-white/10 bg-mac-surface/60" data-testid="vision-product-reel">
            <Corners />
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                <Play className="h-3.5 w-3.5 text-mac-accent" /> Xyver Vision — Product Reel
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">0:50 · Sound on</span>
            </div>
            <video
              data-testid="vision-reel-video"
              controls
              preload="metadata"
              playsInline
              poster="/media/frames/frame-5.jpg"
              className="aspect-video w-full bg-black"
            >
              <source src="/media/xyver-vision-avp.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-16 inline-flex border border-white/15 bg-mac-surface/60 p-1" data-testid="vision-mode-toggle">
            <button
              data-testid="vision-toggle-lgu"
              onClick={() => setMode("lgu")}
              className={`flex items-center gap-2.5 px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.18em] transition-[background-color,color,box-shadow] duration-300 ${
                isLgu ? "bg-mac-accent text-white shadow-[0_0_24px_rgb(var(--mac-accent-rgb)/0.4)]" : "text-slate-400 hover:text-white"
              }`}
            >
              <Building2 className="h-4 w-4" /> Government & LGU
            </button>
            <button
              data-testid="vision-toggle-schools"
              onClick={() => setMode("schools")}
              className={`flex items-center gap-2.5 px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.18em] transition-[background-color,color,box-shadow] duration-300 ${
                !isLgu ? "bg-mac-accent text-white shadow-[0_0_24px_rgb(var(--mac-accent-rgb)/0.4)]" : "text-slate-400 hover:text-white"
              }`}
            >
              <GraduationCap className="h-4 w-4" /> Schools & Campuses
            </button>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            data-testid={`vision-panel-${mode}`}
          >
            {isLgu ? <LguPanel /> : <SchoolsPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
