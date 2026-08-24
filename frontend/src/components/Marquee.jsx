const ITEMS = [
  "Automate", "Innovate", "Grow",
  "AI & Automation", "ERP Solutions", "Vision Intelligence",
  "Smart Governance", "Digital Transformation",
];

export default function Marquee() {
  const row = (ariaHidden) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {ITEMS.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className={`whitespace-nowrap font-display text-2xl font-bold uppercase tracking-widest sm:text-3xl lg:text-4xl ${i % 3 === 1 ? "text-mac-accent/70" : "text-white/15"}`}>
            {item}
          </span>
          <span className="mx-5 inline-block h-2 w-2 rotate-45 border border-mac-accent/50 lg:mx-8" />
        </span>
      ))}
    </div>
  );

  return (
    <div data-testid="marquee-section" className="relative overflow-hidden border-b border-white/10 bg-mac-surface/40 py-4 lg:py-6">
      <div className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
