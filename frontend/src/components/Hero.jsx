import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Radar, Activity, ShieldCheck } from "lucide-react";
import { MaskLine, Reveal, Counter, Sparkline, Corners } from "./Reveal";
import { scrollToSection } from "@/lib/scroll";

const HERO_BG = "/media/frames/shot-junction.jpg";
const CAM_IMG = "/media/frames/shot-cctv-wall.jpg";

const PILLS = ["AI & Automation", "ERP Solutions", "Vision Intelligence", "Smart Governance", "Digital Transformation"];

const WHO = [
  { title: "AI-first solutions", desc: "Intelligence built into the core, not bolted on." },
  { title: "Systems that scale", desc: "From one office to an entire province." },
  { title: "Partners, not vendors", desc: "We set up, train, and stay." },
];

const BootSweep = () => (
  <motion.div
    aria-hidden
    initial={{ top: "-3%", opacity: 0 }}
    animate={{ top: "103%", opacity: [0, 1, 1, 0] }}
    transition={{ duration: 1.5, delay: 0.15, ease: "easeInOut", times: [0, 0.08, 0.92, 1] }}
    className="pointer-events-none absolute left-0 z-30 h-[3px] w-full"
    style={{
      background: "linear-gradient(90deg, transparent 0%, rgb(var(--mac-accent-rgb) / 0.9) 50%, transparent 100%)",
      boxShadow: "0 0 48px 8px rgb(var(--mac-accent-rgb) / 0.35)",
    }}
  />
);

const Viewfinder = () => {
  const corners = [
    "left-4 top-[88px] border-l-2 border-t-2",
    "right-4 top-[88px] border-r-2 border-t-2",
    "bottom-6 left-4 border-b-2 border-l-2",
    "bottom-6 right-4 border-b-2 border-r-2",
  ];
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.9 }}
      className="pointer-events-none absolute inset-0 z-20 hidden sm:block"
    >
      {corners.map((c) => (
        <span key={c} className={`absolute h-10 w-10 border-mac-accent/50 ${c}`} />
      ))}
      <span className="absolute right-8 top-[104px] font-mono text-[10px] uppercase tracking-[0.3em] text-mac-accent/70">
        Sys online · Scan active
      </span>
      <span className="absolute bottom-10 left-8 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
        10.3157°N 123.8854°E — Cebu
      </span>
    </motion.div>
  );
};

const LockBox = ({ className, label, confidence, warn = false, delay = 2, testId }) => {
  const corners = [
    { pos: "left-0 top-0 border-l-2 border-t-2", dx: -16, dy: -16 },
    { pos: "right-0 top-0 border-r-2 border-t-2", dx: 16, dy: -16 },
    { pos: "bottom-0 left-0 border-b-2 border-l-2", dx: -16, dy: 16 },
    { pos: "bottom-0 right-0 border-b-2 border-r-2", dx: 16, dy: 16 },
  ];
  return (
    <div className={`absolute ${className}`} data-testid={testId}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.4 }}
        className={`absolute inset-0 border ${warn ? "border-amber-400/40" : "border-mac-accent/40"}`}
      />
      {corners.map((c) => (
        <motion.span
          key={c.pos}
          initial={{ x: c.dx, y: c.dy, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay, duration: 0.45, ease: "easeOut" }}
          className={`absolute h-3.5 w-3.5 ${c.pos} ${warn ? "border-amber-400" : "border-mac-accent"}`}
        />
      ))}
      <motion.span
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.4, duration: 0.3 }}
        className={`absolute -top-5 left-0 flex items-center gap-1 whitespace-nowrap px-1.5 py-0.5 font-mono text-[9px] uppercase ${warn ? "bg-amber-400 text-mac-base" : "bg-mac-accent text-white"}`}
      >
        {label} <Counter to={confidence} decimals={2} duration={1.2} />
      </motion.span>
    </div>
  );
};

export default function Hero() {
  const ref = useRef(null);
  const [locked, setLocked] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  useEffect(() => {
    const t = setTimeout(() => setLocked(true), 3400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" ref={ref} data-testid="hero-section" className="noise relative overflow-hidden">
      <BootSweep />
      <Viewfinder />
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <video
          data-testid="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_BG}
          className="h-[120%] w-full object-cover opacity-45 saturate-[0.4]"
        >
          <source src="/media/xyver-hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-mac-base/60" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-mac-base to-transparent" />
        <div className="absolute inset-0 bg-grid" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:pt-36 lg:px-8 lg:pt-48">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={0.35}>
              <p className="mb-6 inline-flex items-center gap-2 border border-mac-accent/40 bg-mac-accent/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-mac-accent">
                <Radar className="h-3.5 w-3.5" />
                MAC AI Business Solutions — Cebu, Philippines
              </p>
            </Reveal>

            <div className="relative">
              <motion.span
                aria-hidden
                initial={{ top: "0%", opacity: 0 }}
                animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.5, delay: 0.85, ease: "easeInOut", times: [0, 0.12, 0.88, 1] }}
                className="pointer-events-none absolute left-0 z-10 h-[3px] w-full bg-mac-accent/70 blur-[1px]"
                style={{ boxShadow: "0 0 32px 5px rgb(var(--mac-accent-rgb) / 0.45)" }}
              />
              <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
                <MaskLine delay={0.75}>Intelligent ERP +</MaskLine>
                <MaskLine delay={0.87}>
                  <span className="text-mac-accent">Vision</span> Solutions
                </MaskLine>
                <MaskLine delay={0.99}>for Smarter</MaskLine>
                <MaskLine delay={1.11}>Governance.</MaskLine>
              </h1>
            </div>

            <Reveal delay={1.3}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
                MAC AI enhances the systems institutions already run, then layers AI on top — so leaders
                get instant answers and real-time safety awareness.
              </p>
            </Reveal>

            <Reveal delay={1.42}>
              <div className="mt-8 flex flex-wrap gap-2.5" data-testid="hero-capability-pills">
                {PILLS.map((p) => (
                  <span key={p} className="chip">{p}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={1.55}>
              <div className="mt-10 flex flex-wrap gap-4">
                <button data-testid="hero-cta-demo" onClick={() => scrollToSection("#contact")} className="btn-primary">
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </button>
                <button data-testid="hero-cta-explore" onClick={() => scrollToSection("#automation")} className="btn-ghost">
                  Explore Capabilities
                </button>
              </div>
            </Reveal>
          </div>

          <motion.div style={{ y: cardY }} className="lg:col-span-5">
            <Reveal delay={1.25}>
              <div className="relative border border-white/10 bg-mac-surface/80 p-4 backdrop-blur-md sm:p-5" data-testid="hero-ops-console">
                <Corners />
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400">MAC AI / Ops Console</span>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-blink rounded-full bg-emerald-400" /> Live
                  </span>
                </div>

                <div className="relative mb-3 aspect-video overflow-hidden border border-white/10">
                  <img src={CAM_IMG} alt="CCTV feed" className="h-full w-full object-cover opacity-60 saturate-[0.4]" />
                  <div className="absolute inset-0 bg-mac-base/30" />
                  <span className="absolute left-1/2 top-0 h-full w-px bg-mac-accent/15" />
                  <span className="absolute left-0 top-1/2 h-px w-full bg-mac-accent/15" />
                  <span className="scanline absolute left-0 h-px w-full bg-mac-accent/40" />
                  <LockBox className="left-[18%] top-[30%] h-[42%] w-[24%]" label="Person" confidence={0.98} delay={2.1} testId="hero-lockbox-person" />
                  <LockBox className="right-[14%] top-[22%] h-[30%] w-[18%]" label="Vehicle" confidence={0.94} warn delay={2.5} testId="hero-lockbox-vehicle" />
                  <span className="absolute left-2 top-2 flex items-center gap-1.5 bg-mac-base/70 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-white/80">
                    <span className="h-1.5 w-1.5 animate-blink rounded-full bg-red-500" /> CAM 04 — Plaza
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500" data-testid="hero-scan-status">
                  <motion.span
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                    className="h-1.5 w-1.5 rounded-full bg-mac-accent"
                  />
                  {locked ? "2 objects tracked" : "Scanning sector 04…"}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="border border-white/10 bg-mac-base/60 p-3" data-testid="hero-stat-accuracy">
                    <p className="font-display text-2xl font-bold text-mac-accent">
                      <Counter to={98.7} decimals={1} suffix="%" />
                    </p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-slate-500">Detection accuracy</p>
                  </div>
                  <div className="border border-white/10 bg-mac-base/60 p-3" data-testid="hero-stat-alert">
                    <p className="font-display text-2xl font-bold text-white">
                      <Counter to={1.2} decimals={1} suffix="s" />
                    </p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-slate-500">Alert time</p>
                  </div>
                  <div className="border border-white/10 bg-mac-base/60 p-3" data-testid="hero-stat-support">
                    <p className="font-display text-2xl font-bold text-white">24/7</p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-slate-500">Support</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border border-white/10 bg-mac-base/60 px-3 py-2.5">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    <Activity className="h-3.5 w-3.5 text-mac-accent" /> Events / hour
                  </span>
                  <Sparkline className="h-5 w-24 text-mac-accent" />
                </div>
              </div>
            </Reveal>
          </motion.div>
        </div>

        <Reveal delay={1.7}>
          <div className="mt-14 border-y border-white/10 lg:mt-20" data-testid="hero-who-we-are">
            <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {WHO.map((w, i) => (
                <div key={w.title} className="flex gap-4 px-2 py-6 sm:px-6">
                  <span className="font-mono text-xs text-mac-accent">0{i + 1}</span>
                  <div>
                    <p className="font-display text-lg font-semibold uppercase tracking-wider text-white">{w.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={1.8}>
          <p className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
            <ShieldCheck className="h-4 w-4 text-mac-accent" /> Automate. Innovate. Grow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
