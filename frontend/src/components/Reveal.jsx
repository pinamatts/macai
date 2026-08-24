import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.75, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "112%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export const SectionHeading = ({ index, eyebrow, title, sub, testId }) => (
  <div className="mb-10 max-w-3xl lg:mb-20">
    <Reveal>
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-mac-accent">
        <span className="inline-block h-px w-8 bg-mac-accent" />
        {index} / {eyebrow}
      </p>
    </Reveal>
    <Reveal delay={0.08}>
      <h2
        data-testid={testId}
        className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-wide text-white sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.16}>
        <p className="mt-6 text-base leading-relaxed text-slate-400 md:text-lg">{sub}</p>
      </Reveal>
    )}
  </div>
);

export const Counter = ({ to, decimals = 0, suffix = "", prefix = "", duration = 1.8, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};

export const Sparkline = ({ points = "0,18 12,14 24,16 36,9 48,12 60,6 72,10 84,4", className = "" }) => (
  <svg viewBox="0 0 84 22" className={className} fill="none" preserveAspectRatio="none">
    <polyline
      points={points}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

export const Corners = () => (
  <>
    <span className="corner left-0 top-0 border-l border-t" />
    <span className="corner right-0 top-0 border-r border-t" />
    <span className="corner bottom-0 left-0 border-b border-l" />
    <span className="corner bottom-0 right-0 border-b border-r" />
  </>
);
