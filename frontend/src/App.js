import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Automation from "@/components/Automation";
import Erp from "@/components/Erp";
import Vision from "@/components/Vision";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-mac-base font-body text-white antialiased" data-testid="app-root">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Automation />
        <Erp />
        <Vision />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" toastOptions={{ style: { background: "#0f1626", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 0 } }} />
    </div>
  );
}

export default App;
