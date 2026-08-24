import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading, Corners } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const EMPTY = { name: "", organization: "", role: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
      toast.success("Request received — we'll be in touch shortly.");
    } catch (err) {
      setStatus("idle");
      toast.error("Something went wrong. Please email us directly at info@macaisolutions.com.");
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative border-t border-white/5 py-20 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Contact / Request a Demo"
          title={<>Let's modernize your<br /><span className="text-mac-accent">LGU, campus, or organization</span>.</>}
          sub="Tell us what you're running today. We'll show you what it could do tomorrow — on your own systems, with your own data."
          testId="contact-heading"
        />

        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            {status === "success" ? (
              <div className="relative flex h-full min-h-[380px] flex-col items-start justify-center border border-mac-accent/40 bg-mac-accent/5 p-10" data-testid="contact-success-message">
                <Corners />
                <CheckCircle2 className="mb-6 h-10 w-10 text-mac-accent" strokeWidth={1.5} />
                <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white">Request received.</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
                  Thanks, {form.name.split(" ")[0] || "there"}. Your demo request for {form.organization} is in
                  our inbox — a member of our Cebu team will reach out shortly.
                </p>
                <button
                  data-testid="contact-send-another-button"
                  onClick={() => { setForm(EMPTY); setStatus("idle"); }}
                  className="btn-ghost mt-8"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="relative border border-white/10 bg-mac-surface/50 p-7 lg:p-10" data-testid="contact-form">
                <Corners />
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="field-label">Name *</label>
                    <input id="contact-name" data-testid="contact-name-input" required className="field" placeholder="Juan Dela Cruz" value={form.name} onChange={set("name")} />
                  </div>
                  <div>
                    <label htmlFor="contact-organization" className="field-label">Organization *</label>
                    <input id="contact-organization" data-testid="contact-organization-input" required className="field" placeholder="City of ___ / ___ University" value={form.organization} onChange={set("organization")} />
                  </div>
                  <div>
                    <label htmlFor="contact-role" className="field-label">Role</label>
                    <input id="contact-role" data-testid="contact-role-input" className="field" placeholder="Mayor's Office / IT Director / Admin" value={form.role} onChange={set("role")} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="field-label">Email *</label>
                    <input id="contact-email" data-testid="contact-email-input" required type="email" className="field" placeholder="you@organization.gov.ph" value={form.email} onChange={set("email")} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-phone" className="field-label">Phone</label>
                    <input id="contact-phone" data-testid="contact-phone-input" className="field" placeholder="+63 ___ ___ ____" value={form.phone} onChange={set("phone")} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className="field-label">Message *</label>
                    <textarea id="contact-message" data-testid="contact-message-input" required rows={5} className="field resize-none" placeholder="What systems are you running today, and what would you like them to do?" value={form.message} onChange={set("message")} />
                  </div>
                </div>
                <button type="submit" data-testid="contact-submit-button" disabled={status === "sending"} className="btn-primary mt-8 w-full disabled:opacity-60 sm:w-auto">
                  {status === "sending" ? "Sending…" : "Request a Demo"} <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-mac-surface/50 p-7 lg:p-8">
                <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Direct contact</p>
                <a href="mailto:info@macaisolutions.com" data-testid="contact-email-link" className="group flex items-center gap-4 border-b border-white/10 pb-5">
                  <span className="grid h-11 w-11 place-items-center border border-mac-accent/50 bg-mac-accent/10 transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgb(var(--mac-accent-rgb)/0.3)]">
                    <Mail className="h-5 w-5 text-mac-accent" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500">Email</span>
                    <span className="text-base text-white transition-colors duration-300 group-hover:text-mac-accent">info@macaisolutions.com</span>
                  </span>
                </a>
                <div className="flex items-center gap-4 pt-5" data-testid="contact-location">
                  <span className="grid h-11 w-11 place-items-center border border-white/15 bg-mac-base/60">
                    <MapPin className="h-5 w-5 text-mac-accent" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500">Based in</span>
                    <span className="text-base text-white">Cebu City, Philippines</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 border border-white/10 bg-mac-base/60 p-7" data-testid="contact-references-note">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">References</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Client references and case studies are shared on request — we don't publish names or
                  logos without written permission.
                </p>
                <a href="mailto:info@macaisolutions.com" data-testid="contact-references-link" className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-mac-accent transition-colors duration-300 hover:text-white">
                  Ask us directly <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
