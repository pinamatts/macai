import { Corners, Counter } from "../Reveal";

export const CameraTile = ({ label, img, boxes = [], status = "LIVE", bright = false, testId }) => (
  <div data-testid={testId} className="group relative aspect-video overflow-hidden border border-white/10 bg-mac-surface">
    <img src={img} alt={label} loading="lazy" className={`h-full w-full object-cover transition-opacity duration-500 ${bright ? "opacity-90 saturate-[0.85] group-hover:opacity-100" : "opacity-55 saturate-[0.35] group-hover:opacity-70"}`} />
    <div className={`absolute inset-0 ${bright ? "bg-mac-base/10" : "bg-mac-base/35"}`} />
    <span className="scanline absolute left-0 h-px w-full bg-mac-accent/40" />
    <div className="absolute left-2 top-2 flex items-center gap-1.5 border border-white/10 bg-mac-base/70 px-2 py-1 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-red-500" />
      <span className="font-mono text-[9px] uppercase tracking-widest text-white/80">{label}</span>
    </div>
    <span className="absolute right-2 top-2 font-mono text-[9px] uppercase tracking-widest text-mac-accent">{status}</span>
    {boxes.map((b, i) => (
      <div key={i} className={`absolute border ${b.warn ? "border-amber-400/90" : "border-mac-accent/90"}`} style={{ left: b.x, top: b.y, width: b.w, height: b.h }}>
        <span className={`absolute -top-[18px] left-0 whitespace-nowrap px-1 py-px font-mono text-[8px] uppercase ${b.warn ? "bg-amber-400 text-mac-base" : "bg-mac-accent text-white"}`}>
          {b.label}
        </span>
      </div>
    ))}
    <Corners />
  </div>
);

export const DashStat = ({ label, value, suffix = "", decimals = 0, tone = "default", testId }) => (
  <div className="border border-white/10 bg-mac-base/60 p-4" data-testid={testId}>
    <p className={`font-display text-3xl font-bold ${tone === "warn" ? "text-amber-400" : tone === "accent" ? "text-mac-accent" : "text-white"}`}>
      {typeof value === "number" ? <Counter to={value} suffix={suffix} decimals={decimals} /> : `${value}${suffix}`}
    </p>
    <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{label}</p>
  </div>
);

export const ProcessSteps = ({ steps, testId }) => (
  <div className="grid gap-10 md:grid-cols-4" data-testid={testId}>
    {steps.map((p, i) => (
      <div key={p.n} className="relative">
        {i < steps.length - 1 && <span className="glow-line absolute left-14 top-6 hidden w-[calc(100%-3rem)] md:block" />}
        <span className="relative grid h-12 w-12 place-items-center rounded-full border border-mac-accent/60 bg-mac-accent/10 font-mono text-sm text-mac-accent shadow-[0_0_20px_rgb(var(--mac-accent-rgb)/0.2)]">
          {p.n}
        </span>
        {p.range && <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-mac-accent">{p.range}</p>}
        <h4 className="mt-1.5 font-display text-xl font-semibold uppercase tracking-wider text-white">{p.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
      </div>
    ))}
  </div>
);
