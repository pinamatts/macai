import { Crosshair, Users, Siren, DoorClosed, GraduationCap, ShieldCheck, ClipboardCheck, FileSearch, AlertTriangle } from "lucide-react";
import { Reveal } from "../Reveal";
import { CameraTile, DashStat } from "./shared";

const IMG = {
  gate: "https://images.pexels.com/photos/33591766/pexels-photo-33591766.jpeg",
  corridor: "https://images.pexels.com/photos/30576172/pexels-photo-30576172.jpeg",
  quad: "https://images.unsplash.com/photo-1501290301209-7a0323622985",
  gym: "https://images.unsplash.com/photo-1618482914248-29272d021005",
};

const ALERTS = [
  { level: "P1", text: "Possible weapon detected", loc: "Main Gate", ago: "0:04 ago", tone: "text-red-400 border-red-400/40 bg-red-400/10" },
  { level: "P2", text: "Forced entry attempt", loc: "Gym Entry", ago: "2:31 ago", tone: "text-amber-400 border-amber-400/40 bg-amber-400/10" },
  { level: "P3", text: "Crowd surge forming", loc: "Quadrangle", ago: "11:02 ago", tone: "text-slate-300 border-white/20 bg-white/5" },
];

const CAPABILITIES = [
  { icon: Crosshair, title: "Weapon Detection", desc: "Visible weapons flagged on camera in ~1.2 seconds — before a call is even made." },
  { icon: Users, title: "Behavior & Crowd Analytics", desc: "Aggression, fights, and dangerous crowd surges surfaced as they start." },
  { icon: Siren, title: "Instant Alert & Lockdown", desc: "Alerts reach security's screens and radios in seconds, with the camera feed attached." },
  { icon: DoorClosed, title: "Perimeter & Access", desc: "Forced entry, tailgating, and after-hours movement watched around the clock." },
];

const TIMELINE = [
  { t: "0s", label: "Threat in view" },
  { t: "2s", label: "AI flags it" },
  { t: "5s", label: "Team notified" },
  { t: "15s", label: "Lockdown called" },
  { t: "60s", label: "Responders see" },
];

const BUILT = [
  { icon: GraduationCap, title: "Protect Students", desc: "Every second shaved off response time is a student further from harm." },
  { icon: ShieldCheck, title: "Equip Security Teams", desc: "One guard can't watch 40 screens. The AI can — and taps them on the shoulder." },
  { icon: ClipboardCheck, title: "Strengthen Drills", desc: "Timestamped detection-to-response data makes every drill measurably better." },
  { icon: FileSearch, title: "Evidence & Accountability", desc: "Every alert is logged with footage — clear records for parents, boards, and investigators." },
];

export default function SchoolsPanel() {
  return (
    <div>
      <Reveal>
        <h3 className="max-w-3xl font-display text-3xl font-bold uppercase leading-[0.95] tracking-wide text-white sm:text-4xl lg:text-5xl" data-testid="schools-heading">
          See it sooner.<br /><span className="text-mac-accent">Stop it faster.</span>
        </h3>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          In a campus emergency, the first minute decides the outcome. MAC AI Vision watches your existing
          CCTV for visible weapons, aggression, and forced entry — and puts the alert in security's hands
          in seconds.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-14 grid gap-6 lg:grid-cols-3" data-testid="schools-dashboard">
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            <CameraTile testId="schools-cam-gate" label="CAM 01 — Main Gate" img={IMG.gate}
              boxes={[{ x: "52%", y: "28%", w: "16%", h: "46%", label: "Person 0.96" }, { x: "68%", y: "52%", w: "12%", h: "18%", label: "Object 0.91", warn: true }]} />
            <CameraTile testId="schools-cam-corridor" label="CAM 02 — Corridor B" img={IMG.corridor}
              boxes={[{ x: "30%", y: "35%", w: "30%", h: "32%", label: "Crowd forming", warn: true }]} />
            <CameraTile testId="schools-cam-quad" label="CAM 03 — Quadrangle" img={IMG.quad}
              boxes={[{ x: "44%", y: "40%", w: "14%", h: "38%", label: "Person 0.94" }]} />
            <CameraTile testId="schools-cam-gym" label="CAM 04 — Gym Entry" img={IMG.gym}
              boxes={[{ x: "58%", y: "30%", w: "20%", h: "40%", label: "Forced entry?", warn: true }]} />
          </div>

          <div className="flex flex-col gap-4 border border-white/10 bg-mac-surface/60 p-5">
            <p className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Priority Alerts
              <span className="flex items-center gap-1.5 text-red-400"><span className="h-1.5 w-1.5 animate-blink rounded-full bg-red-400" />1 Active</span>
            </p>
            <div className="space-y-3" data-testid="schools-alerts-panel">
              {ALERTS.map((a, i) => (
                <div key={i} className={`border px-4 py-3 ${a.tone}`}>
                  <p className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><AlertTriangle className="h-3 w-3" />{a.level}</span>
                    <span className="opacity-70">{a.ago}</span>
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-white">{a.text}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest opacity-70">{a.loc}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-2 gap-4">
              <DashStat testId="schools-stat-alert-time" label="Alert time" value={1.2} suffix="s" decimals={1} tone="accent" />
              <DashStat testId="schools-stat-accuracy" label="Detection accuracy" value={98.7} suffix="%" decimals={1} />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-24 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08} className="bg-mac-base">
            <div className="card-tech h-full border-0" data-testid={`schools-capability-${i}`}>
              <c.icon className="mb-6 h-6 w-6 text-mac-accent" strokeWidth={1.5} />
              <h5 className="font-display text-lg font-semibold uppercase tracking-wider text-white">{c.title}</h5>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24">
        <Reveal>
          <h4 className="mb-12 font-display text-2xl font-semibold uppercase tracking-widest text-white">
            The first <span className="text-mac-accent">60 seconds</span>
          </h4>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative border border-white/10 bg-mac-surface/50 px-6 py-10 lg:px-10" data-testid="schools-timeline">
            <span className="glow-line absolute left-10 right-10 top-1/2 hidden md:block" />
            <div className="relative grid gap-8 md:grid-cols-5">
              {TIMELINE.map((s, i) => (
                <div key={s.t} className="flex items-center gap-4 md:flex-col md:text-center">
                  <span className={`z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border font-mono text-sm ${i === TIMELINE.length - 1 ? "border-mac-accent bg-mac-accent text-white shadow-[0_0_28px_rgb(var(--mac-accent-rgb)/0.5)]" : "border-mac-accent/50 bg-mac-base text-mac-accent"}`}>
                    {s.t}
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-24">
        <Reveal>
          <h4 className="mb-10 font-display text-2xl font-semibold uppercase tracking-widest text-white">
            Built for <span className="text-mac-accent">schools</span>
          </h4>
        </Reveal>
        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {BUILT.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} className="bg-mac-base">
              <div className="card-tech h-full border-0" data-testid={`schools-built-${i}`}>
                <b.icon className="mb-6 h-6 w-6 text-mac-accent" strokeWidth={1.5} />
                <h5 className="font-display text-lg font-semibold uppercase tracking-wider text-white">{b.title}</h5>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mt-16 border border-mac-accent/40 bg-mac-accent/5 p-6 lg:p-8" data-testid="schools-responsible-box">
          <p className="flex items-center gap-3 font-display text-lg font-semibold uppercase tracking-wider text-white">
            <ShieldCheck className="h-5 w-5 text-mac-accent" /> Responsible by design
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
            The system watches objects and behavior — not identities. No student profiling, no facial
            recognition. Every alert is advisory and reviewed by trained staff before action.
          </p>
          <p className="mt-4 border-t border-white/10 pt-4 font-mono text-[11px] leading-relaxed tracking-wide text-slate-500">
            Note: automated escalation to police/authorities is not active by default and requires prior
            agreement with local authorities. The system detects and alerts on-site — dispatch stays a
            human decision.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
