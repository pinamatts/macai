import { Workflow, MessageSquareText, LineChart } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const ITEMS = [
  {
    n: "01",
    icon: Workflow,
    title: "Process Automation",
    desc: "Routine approvals, reports, and reconciliations run themselves — staff time goes back to work that matters.",
  },
  {
    n: "02",
    icon: MessageSquareText,
    title: "AI Assistants",
    desc: "Plain-language questions on top of your own data, with answers drawn from live systems — not stale exports.",
  },
  {
    n: "03",
    icon: LineChart,
    title: "Data Intelligence",
    desc: "Patterns, anomalies, and forecasts surfaced before you think to ask.",
  },
];

export default function Automation() {
  return (
    <section id="automation" data-testid="automation-section" className="relative py-20 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="AI & Automation"
          title={<>The layer that makes<br />systems <span className="text-mac-accent">think</span>.</>}
          sub="Every MAC AI deployment starts here. Automation is the umbrella capability — it is how ERP data becomes answers, and how camera feeds become awareness."
          testId="automation-heading"
        />

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.12} className="bg-mac-base">
              <div className="card-tech h-full border-0" data-testid={`automation-card-${item.n}`}>
                <div className="mb-8 flex items-start justify-between">
                  <item.icon className="h-7 w-7 text-mac-accent" strokeWidth={1.5} />
                  <span className="font-mono text-xs text-slate-600">{item.n}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wider text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
