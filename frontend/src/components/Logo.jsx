import { BrainCircuit } from "lucide-react";

export const Logo = ({ testId = "logo" }) => (
  <span className="flex items-center gap-2.5" data-testid={testId}>
    <span className="grid h-8 w-8 place-items-center border border-mac-accent/60 bg-mac-accent/10 shadow-[0_0_18px_rgb(var(--mac-accent-rgb)/0.25)]">
      <BrainCircuit className="h-4 w-4 text-mac-accent" strokeWidth={1.75} />
    </span>
    <span className="font-display text-2xl font-bold leading-none tracking-widest">
      <span className="bg-gradient-to-r from-white to-[#8db8ff] bg-clip-text text-transparent">MAC</span>
      <span className="text-mac-accent"> AI</span>
    </span>
  </span>
);
