import { BrainCircuit, Layers, Handshake, MapPin } from "lucide-react";
import { Reveal, SectionHeading, Corners } from "./Reveal";

const PILLARS = [
  {
    icon: BrainCircuit,
    n: "01",
    title: "AI-First Solutions",
    desc: "Intelligence is the starting point, not an add-on. Every system we ship is designed around what AI makes possible.",
  },
  {
    icon: Layers,
    n: "02",
    title: "Systems That Scale",
    desc: "From a single office to an entire province — architecture that grows with the institution, never against it.",
  },
  {
    icon: Handshake,
    n: "03",
    title: "Partners, Not Vendors",
    desc: "We set up, train, and stay. Success is your team running the system confidently, long after launch day.",
  },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative border-t border-white/5 bg-mac-surface/30 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Who We Are"
          title={<>Technology in service<br />of <span className="text-mac-accent">institutions</span>.</>}
          sub="MAC AI is a Cebu-based technology company building AI-powered business and government solutions."
          testId="about-heading"
        />

        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <blockquote className="border-l-2 border-mac-accent pl-8" data-testid="about-belief">
                <p className="font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-white sm:text-4xl">
                  "Institutions serve people best when technology removes the friction between them."
                </p>
                <footer className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-mac-accent" /> Cebu City, Philippines
                </footer>
              </blockquote>
            </Reveal>

            <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
              {PILLARS.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.12} className="bg-mac-base">
                  <div className="card-tech h-full border-0" data-testid={`about-pillar-${p.n}`}>
                    <div className="mb-8 flex items-start justify-between">
                      <p.icon className="h-6 w-6 text-mac-accent" strokeWidth={1.5} />
                      <span className="font-mono text-xs text-slate-600">{p.n}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold uppercase tracking-wider text-white">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative" data-testid="about-image-frame">
              <Corners />
              <div className="relative overflow-hidden border border-white/10">
                <img
                  src="https://images.pexels.com/photos/30576172/pexels-photo-30576172.jpeg"
                  alt="Security operations control room"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover opacity-70 saturate-[0.4]"
                />
                <div className="absolute inset-0 bg-mac-base/30" />
                <span className="scanline absolute left-0 h-px w-full bg-mac-accent/30" />
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-mac-base/80 px-5 py-4 backdrop-blur-sm">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mac-accent">HQ — Cebu City</p>
                  <p className="mt-1 text-sm text-slate-300">Built in Cebu. Deployed where institutions need it.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
