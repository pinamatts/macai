import { Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { scrollToSection } from "@/lib/scroll";

const LINKS = [
  { id: "#automation", label: "AI & Automation" },
  { id: "#erp", label: "ERP Systems" },
  { id: "#vision", label: "Vision Intelligence" },
  { id: "#about", label: "Who We Are" },
  { id: "#contact", label: "Request a Demo" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="border-t border-white/10 bg-mac-surface/40">
      <div className="glow-line" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo testId="footer-logo" />
            <p className="mt-5 max-w-xs font-display text-xl font-semibold uppercase tracking-widest text-slate-300">
              Automate. Innovate. Grow.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              AI-powered ERP and vision intelligence for governments, LGUs, and institutions.
            </p>
          </div>
          <div>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Site</p>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    data-testid={`footer-link-${l.id.slice(1)}`}
                    onClick={() => scrollToSection(l.id)}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-mac-accent"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Contact</p>
            <a href="mailto:info@macaisolutions.com" data-testid="footer-email-link" className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors duration-300 hover:text-mac-accent">
              <Mail className="h-4 w-4 text-mac-accent" /> info@macaisolutions.com
            </a>
            <p className="mt-4 flex items-center gap-2.5 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-mac-accent" /> Cebu City, Philippines
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-widest text-slate-600">
            © 2026 MAC AI Business Solutions
          </p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-slate-600">
            RA 10173 compliant — detection, not identification
          </p>
        </div>
      </div>
    </footer>
  );
}
