import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { scrollToSection } from "@/lib/scroll";

const LINKS = [
  { id: "#home", label: "Home", testId: "nav-home" },
  { id: "#automation", label: "AI & Automation", testId: "nav-automation" },
  { id: "#erp", label: "ERP Systems", testId: "nav-erp" },
  { id: "#vision", label: "Vision Intelligence", testId: "nav-vision" },
  { id: "#about", label: "Who We Are", testId: "nav-about" },
  { id: "#contact", label: "Contact", testId: "nav-contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!window.__lenis) return;
    if (open) window.__lenis.stop();
    else window.__lenis.start();
  }, [open]);

  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
        scrolled ? "border-white/10 bg-mac-base/85 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <button onClick={() => go("#home")} aria-label="MAC AI home" data-testid="nav-logo-button">
          <Logo />
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.slice(1).map((l) => (
            <button
              key={l.id}
              data-testid={l.testId}
              onClick={() => go(l.id)}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 transition-colors duration-300 hover:text-mac-accent"
            >
              {l.label}
            </button>
          ))}
          <button data-testid="nav-demo-button" onClick={() => go("#contact")} className="btn-primary px-5 py-2.5 text-xs">
            Request a Demo
          </button>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          className="grid h-10 w-10 place-items-center border border-white/15 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="nav-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-mac-base/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`${l.testId}-mobile`}
                  onClick={() => go(l.id)}
                  className="border-b border-white/5 py-3 text-left font-display text-lg font-semibold uppercase tracking-widest text-slate-300 transition-colors duration-300 hover:text-mac-accent"
                >
                  {l.label}
                </button>
              ))}
              <button data-testid="nav-demo-button-mobile" onClick={() => go("#contact")} className="btn-primary mt-4">
                Request a Demo
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
