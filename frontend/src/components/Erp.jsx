import { motion } from "framer-motion";
import { Wallet, Users, PackageSearch, TrendingUp, BrainCircuit, User } from "lucide-react";
import { Reveal, SectionHeading, Corners } from "./Reveal";

const STATS = [
  { value: "1", label: "Unified Data Source" },
  { value: "24/7", label: "Instant Answers" },
  { value: "0", label: "Rip & Replace" },
  { value: "100%", label: "Local Cebu Support" },
];

const CHAT = [
  {
    q: "How much did we spend on the road project in Barangay Luz this quarter?",
    a: "Barangay Luz road project, this quarter: ₱ [live figure from your ERP] across 14 posted disbursements. 3 items are pending liquidation.",
  },
  {
    q: "Which offices are over their travel budget?",
    a: "2 offices are above 90% of their travel allocation. [Office names and balances pulled live from your ERP.]",
  },
  {
    q: "Show pending procurement over ₱1M.",
    a: "[N] items pending approval — the oldest has been waiting [x] days. Full list attached from the procurement ledger.",
  },
];

const ASKS = [
  { icon: Wallet, title: "Spending & Budgets", desc: "\"Where did the infrastructure budget go this month?\" — answered with figures, in seconds." },
  { icon: Users, title: "Personnel & Hours", desc: "Payroll, overtime, and leave balances across every office, from one question." },
  { icon: PackageSearch, title: "Procurement Status", desc: "What's pending, what's stalled, and where it's stuck — without chasing paper trails." },
  { icon: TrendingUp, title: "Performance Insights", desc: "Trends across departments and programs, surfaced as plain-language briefings." },
];

const PROCESS = [
  { n: "01", title: "Assess", desc: "We map your current accounting, HR, payroll, and procurement systems — and what leadership actually needs to know." },
  { n: "02", title: "Enhance", desc: "We strengthen what works into one source of truth. No rip-and-replace, no lost records." },
  { n: "03", title: "Deploy", desc: "The AI Governance Assistant goes live on your data — secure, on your terms." },
  { n: "04", title: "Support", desc: "We train your team and stay. Local Cebu support, 24/7." },
];

export default function Erp() {
  return (
    <section id="erp" data-testid="erp-section" className="relative border-t border-white/5 bg-mac-surface/30 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="ERP Systems"
          title={<>Modernize without<br />ripping out <span className="text-mac-accent">what works</span>.</>}
          sub="MAC AI strengthens your existing accounting, HR, payroll, and procurement systems into one source of truth — then adds a secure AI Governance Assistant leadership can simply ask, in plain language."
          testId="erp-heading"
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="relative border border-white/10 bg-mac-base/80" data-testid="erp-chat-panel">
              <Corners />
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  <BrainCircuit className="h-4 w-4 text-mac-accent" /> AI Governance Assistant
                </span>
                <span className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-mac-accent/70" />
                </span>
              </div>
              <div className="space-y-5 p-5 lg:p-7">
                {CHAT.map((m, i) => (
                  <div key={i} className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.35 }}
                      className="ml-auto flex max-w-[85%] items-start gap-3"
                    >
                      <p className="border border-mac-accent/40 bg-mac-accent/10 px-4 py-3 text-sm leading-relaxed text-slate-200">{m.q}</p>
                      <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center border border-white/15 bg-mac-surface">
                        <User className="h-3.5 w-3.5 text-slate-400" />
                      </span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.35 + 0.2 }}
                      className="flex max-w-[85%] items-start gap-3"
                    >
                      <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center border border-mac-accent/50 bg-mac-accent/10">
                        <BrainCircuit className="h-3.5 w-3.5 text-mac-accent" />
                      </span>
                      <p className="border border-white/10 bg-mac-surface/80 px-4 py-3 text-sm leading-relaxed text-slate-300">{m.a}</p>
                    </motion.div>
                  </div>
                ))}
                <div className="flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-[11px] uppercase tracking-widest text-slate-500">
                  Ask anything about your operations
                  <span className="animate-caret inline-block h-3.5 w-[7px] bg-mac-accent" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <div className="grid h-full grid-cols-2 gap-px border border-white/10 bg-white/10" data-testid="erp-stat-strip">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1} className="bg-mac-base">
                  <div className="flex h-full flex-col justify-between p-6 lg:p-8">
                    <p className="font-display text-4xl font-bold text-mac-accent lg:text-5xl">{s.value}</p>
                    <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <h3 className="mb-10 font-display text-2xl font-semibold uppercase tracking-widest text-white">
              What leaders can <span className="text-mac-accent">ask</span>
            </h3>
          </Reveal>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {ASKS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1} className="bg-mac-base">
                <div className="card-tech h-full border-0" data-testid={`erp-ask-card-${i}`}>
                  <c.icon className="mb-6 h-6 w-6 text-mac-accent" strokeWidth={1.5} />
                  <h4 className="font-display text-xl font-semibold uppercase tracking-wider text-white">{c.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <h3 className="mb-10 font-display text-2xl font-semibold uppercase tracking-widest text-white">
              How we <span className="text-mac-accent">deliver</span>
            </h3>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-4" data-testid="erp-process">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.12}>
                <div className="relative">
                  {i < PROCESS.length - 1 && <span className="glow-line absolute left-14 top-6 hidden w-[calc(100%-3rem)] md:block" />}
                  <span className="relative grid h-12 w-12 place-items-center rounded-full border border-mac-accent/60 bg-mac-accent/10 font-mono text-sm text-mac-accent shadow-[0_0_20px_rgb(var(--mac-accent-rgb)/0.2)]">
                    {p.n}
                  </span>
                  <h4 className="mt-5 font-display text-xl font-semibold uppercase tracking-wider text-white">{p.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
