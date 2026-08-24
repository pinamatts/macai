import { useRef } from "react";
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

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section id="home" ref={ref} data-testid="hero-section" className="noise relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <img src={HERO_BG} alt="" className="h-[120%] w-full object-cover opacity-30 saturate-[0.35]" />
        <div className="absolute inset-0 bg-mac-base/72" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-mac-base to-transparent" />
        <div className="absolute inset-0 bg-grid" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-40 lg:px-8 lg:pt-48">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 border border-mac-accent/40 bg-mac-accent/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-mac-accent">
                <Radar className="h-3.5 w-3.5" />
                MAC AI Business Solutions — Cebu, Philippines
              </p>
            </Reveal>

            <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
              <MaskLine delay={0.15}>Intelligent ERP +</MaskLine>
              <MaskLine delay={0.28}>
                <span className="text-mac-accent">Vision</span> Solutions
              </MaskLine>
              <MaskLine delay={0.41}>for Smarter</MaskLine>
              <MaskLine delay={0.54}>Governance.</MaskLine>
            </h1>

            <Reveal delay={0.7}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
                MAC AI enhances the systems institutions already run, then layers AI on top — so leaders
                get instant answers and real-time safety awareness.
              </p>
            </Reveal>

            <Reveal delay={0.82}>
              <div className="mt-8 flex flex-wrap gap-2.5" data-testid="hero-capability-pills">
                {PILLS.map((p) => (
                  <span key={p} className="chip">{p}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.94}>
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

          <motion.div style={{ y: cardY }} className="hidden lg:col-span-5 lg:block">
            <Reveal delay={0.5}>
              <div className="relative border border-white/10 bg-mac-surface/80 p-5 backdrop-blur-md" data-testid="hero-ops-console">
                <Corners />
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400">MAC AI / Ops Console</span>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-blink rounded-full bg-emerald-400" /> Live
                  </span>
                </div>

                <div className="relative mb-4 aspect-video overflow-hidden border border-white/10">
                  <img src={CAM_IMG} alt="CCTV feed" className="h-full w-full object-cover opacity-60 saturate-[0.4]" />
                  <div className="absolute inset-0 bg-mac-base/30" />
                  <span className="scanline absolute left-0 h-px w-full bg-mac-accent/40" />
                  <div className="absolute left-[18%] top-[30%] h-[42%] w-[24%] border border-mac-accent/90">
                    <span className="absolute -top-5 left-0 bg-mac-accent px-1.5 py-0.5 font-mono text-[9px] uppercase text-white">Person 0.98</span>
                  </div>
                  <div className="absolute right-[14%] top-[22%] h-[30%] w-[18%] border border-amber-400/90">
                    <span className="absolute -top-5 left-0 bg-amber-400 px-1.5 py-0.5 font-mono text-[9px] uppercase text-mac-base">Vehicle 0.94</span>
                  </div>
                  <span className="absolute left-2 top-2 flex items-center gap-1.5 bg-mac-base/70 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-white/80">
                    <span className="h-1.5 w-1.5 animate-blink rounded-full bg-red-500" /> CAM 04 — Plaza
                  </span>
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

        <Reveal delay={1.05}>
          <div className="mt-20 border-y border-white/10" data-testid="hero-who-we-are">
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

        <Reveal delay={1.15}>
          <p className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
            <ShieldCheck className="h-4 w-4 text-mac-accent" /> Automate. Innovate. Grow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
