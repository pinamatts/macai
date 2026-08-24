import { Route, TrafficCone, Footprints, SquareParking, Landmark, Waves, ShieldCheck, Cctv, EyeOff, Server, FileCheck2 } from "lucide-react";
import { Reveal, Sparkline } from "../Reveal";
import { CameraTile, DashStat, ProcessSteps } from "./shared";

const REEL = {
  junction: "/media/frames/frame-41.jpg",
  map: "/media/frames/frame-26.jpg",
  opswall: "/media/frames/frame-17.jpg",
  detection: "/media/frames/frame-11.jpg",
};

const USE_CASES = [
  { icon: Route, title: "National Roads & Highways", gets: "Speed, volume, and incident alerts across every kilometer you own." },
  { icon: TrafficCone, title: "Signalized Intersections", gets: "Queue lengths, signal timing insights, and violation hotspots." },
  { icon: Footprints, title: "Pedestrian Lanes & School Zones", gets: "Crossing counts and near-miss detection where people are most exposed." },
  { icon: SquareParking, title: "Sidewalks, Parking & Obstruction", gets: "Illegal parking and blocked walkways flagged as they happen." },
  { icon: Landmark, title: "Public Spaces & Facilities", gets: "Crowd levels and unusual activity across plazas, terminals, and halls." },
  { icon: Waves, title: "Waterways, Drainage & Sanitation", gets: "Rising water and blocked drainage caught before they flood." },
];

const TRUST = [
  { icon: Cctv, label: "Uses Existing CCTV" },
  { icon: EyeOff, label: "Detection, Not Identification" },
  { icon: Server, label: "On-Premise Option" },
  { icon: FileCheck2, label: "Procurement-Ready (RA 12009)" },
];

const TIMELINE = [
  { n: "01", range: "Days 1–15", title: "Survey & Audit", desc: "Camera inventory, coverage mapping, and network assessment — no new camera budget required." },
  { n: "02", range: "Days 16–45", title: "Pilot Live", desc: "A priority corridor goes live with real alerts in front of your team." },
  { n: "03", range: "Days 46–75", title: "Rollout", desc: "Coverage expands across zones, tuned to each location's risks." },
  { n: "04", range: "Days 76–90", title: "Train & Turnover", desc: "Your operators are trained, documentation handed over. We stay on call." },
];

export default function LguPanel() {
  return (
    <div>
      <Reveal>
        <h3 className="max-w-3xl font-display text-3xl font-bold uppercase leading-[0.95] tracking-wide text-white sm:text-4xl lg:text-5xl" data-testid="lgu-heading">
          Roads, crossings, public spaces — <span className="text-mac-accent">seen clearly</span>.
        </h3>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          Your city already has cameras. MAC AI Vision adds the layer that watches all of them at once —
          and raises a hand the moment something goes wrong. No rip-and-replace, no new camera budget.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-14 grid gap-6 lg:grid-cols-3" data-testid="lgu-dashboard">
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            <CameraTile bright testId="lgu-cam-highway" label="LGU Vision — City Junction Wall" img={REEL.junction} />
            <CameraTile bright testId="lgu-cam-crossing" label="Map — City Camera Network" img={REEL.map} />
            <CameraTile bright testId="lgu-cam-junction" label="Ops Wall — Live Feeds" img={REEL.opswall} />
            <CameraTile bright testId="lgu-cam-market" label="Detection — Personnel Tracking" img={REEL.detection} />
          </div>

          <div className="flex flex-col gap-4 border border-white/10 bg-mac-surface/60 p-5">
            <p className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
              City Feed — Today
              <span className="flex items-center gap-1.5 text-emerald-400"><span className="h-1.5 w-1.5 animate-blink rounded-full bg-emerald-400" />Live</span>
            </p>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <DashStat testId="lgu-stat-vehicles" label="Vehicles counted" value={48214} tone="accent" />
              <DashStat testId="lgu-stat-pedestrians" label="Pedestrian crossings" value={12847} />
              <DashStat testId="lgu-stat-nearmiss" label="Near-miss events" value={37} tone="warn" />
              <DashStat testId="lgu-stat-cameras" label="Cameras online" value="96/96" />
            </div>
            <div className="mt-auto border border-white/10 bg-mac-base/60 px-3 py-2.5">
              <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-500">Detection accuracy — 98.7%</p>
              <Sparkline className="h-5 w-full text-mac-accent" points="0,16 14,12 28,14 42,8 56,11 70,5 84,7" />
            </div>
          </div>
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">Stills from the Xyver Vision product reel</p>
      </Reveal>

      <div className="mt-24">
        <Reveal>
          <h4 className="mb-10 font-display text-2xl font-semibold uppercase tracking-widest text-white">
            Six zones. <span className="text-mac-accent">One pair of eyes.</span>
          </h4>
        </Reveal>
        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.08} className="bg-mac-base">
              <div className="card-tech h-full border-0" data-testid={`lgu-usecase-${i}`}>
                <u.icon className="mb-6 h-6 w-6 text-mac-accent" strokeWidth={1.5} />
                <h5 className="font-display text-lg font-semibold uppercase tracking-wider text-white">{u.title}</h5>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-mac-accent">What the LGU gets — </span>
                  {u.gets}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4" data-testid="lgu-trust-strip">
          {TRUST.map((t) => (
            <div key={t.label} className="flex items-center gap-3 bg-mac-base px-6 py-5">
              <t.icon className="h-5 w-5 shrink-0 text-mac-accent" strokeWidth={1.5} />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-300">{t.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-8 flex gap-4 border border-mac-accent/40 bg-mac-accent/5 p-6" data-testid="lgu-compliance-box">
          <ShieldCheck className="h-6 w-6 shrink-0 text-mac-accent" strokeWidth={1.5} />
          <div>
            <p className="font-display text-lg font-semibold uppercase tracking-wider text-white">Data Privacy Act (RA 10173) compliant</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              No facial recognition. No identity databases. The system reads objects and behavior only —
              detection, not identification.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-24">
        <Reveal>
          <h4 className="mb-10 font-display text-2xl font-semibold uppercase tracking-widest text-white">
            Live in <span className="text-mac-accent">90 days</span>
          </h4>
        </Reveal>
        <Reveal delay={0.1}>
          <ProcessSteps steps={TIMELINE} testId="lgu-timeline" />
        </Reveal>
      </div>
    </div>
  );
}
