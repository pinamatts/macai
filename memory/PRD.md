# MAC AI Business Solutions — Website PRD

## Original Problem Statement
Single-page marketing website for MAC AI Business Solutions (Cebu-based AI ERP + video intelligence for governments, LGUs, schools). Tagline: "Automate. Innovate. Grow." Dark command-center aesthetic (#0a0e1a base, #2b7fff blue accent; #7c3aed purple for Schools). Bold condensed all-caps headlines, clean sans body. Motifs: glowing dashboard cards, bounding-box annotations, glowing dividers, numbered steps. Sections: Home, AI & Automation (light), ERP Systems, Vision Intelligence (LGU/Schools toggle switching accent blue↔purple without reload), About, Contact/Demo (form → save to DB + email via Resend). No fabricated clients/figures; placeholders marked.

## User Decisions (2026-08-24)
- One long page with smooth-scroll sections (not multi-page routes)
- Contact form: save to MongoDB + email info@macaisolutions.com via Emergent-managed Resend
- Branding per written spec only (PDFs not used)
- Fonts: agent's choice → Barlow Condensed (display) + IBM Plex Sans (body) + IBM Plex Mono (data)

## Architecture
- Frontend: React 19 + Tailwind + framer-motion (reveals, masked hero lines, AnimatePresence panel swap) + lenis (momentum scroll). Accent color via CSS var `--mac-accent-rgb` scoped on Vision section.
- Backend: FastAPI `/api/contact` → Mongo `contacts` collection + Resend proxy email (with guardrail gate).
- Components: Nav, Hero, Marquee, Automation, Erp, Vision (+vision/LguPanel, SchoolsPanel, shared), About, Contact, Footer, Reveal helpers, Logo.

## Implemented (2026-08-24)
- Kinetic hero: masked line-by-line reveal, parallax bg, live ops-console card (animated counters 98.7% / 1.2s / 24/7, sparkline, detection boxes, scanline), capability pills, who-we-are strip
- Slow editorial marquee (Automate · Innovate · Grow …)
- AI & Automation: 3 numbered capability cards
- ERP: chat mockup (3 Q&A with marked placeholders), stat strip (1 / 24-7 / 0 / 100%), 4 leader-ask cards, 4-step Assess→Enhance→Deploy→Support
- Vision: LGU/Schools toggle switching content + accent color live. LGU: 4 camera tiles + stats sidebar, 6 use-case cards, trust strip, RA 10173 box, 90-day timeline. Schools: 4 campus tiles + priority alerts, 4 capability cards, First-60-Seconds timeline, 4 built-for-schools cards, Responsible-by-Design box + police-escalation disclaimer
- About: belief statement, 3 pillars, framed HQ image
- Contact: working form → DB + email notification; direct contact block; references placeholder note
- Footer with tagline, links, compliance line

## Verified
- GET /api/ 200; POST /api/contact 200 (record in Mongo, Resend 202 Accepted)
- Screenshots: hero, ERP, vision toggle both modes, form submit → success panel + toast
- No console errors

## Implemented (2026-08-24, update 1 — Real Product Shots)
- Xyver Vision Mockup AVP (.mov/HEVC, 50s) transcoded to H.264 MP4 (1080p, 24MB, faststart) → /public/media/xyver-vision-avp.mp4
- "Xyver Vision — Product Reel" video player embedded at top of Vision section (poster: frame-5, click-to-play, sound)
- 17 frames extracted to /public/media/frames/; both dashboard tile grids now use real product stills:
  LGU: frame-41 (LGU Vision junction wall), frame-26 (map network), frame-17 (ops wall), frame-11 (personnel detection)
  Schools: frame-35 (campus dashboard), frame-38 (unauthorized entry), frame-32 (restricted zone), frame-8 (personnel)
- CameraTile gained `bright` prop so product UI stills render clearly; "Stills from the Xyver Vision product reel" captions added
- Verified: mp4/poster/frames serve 200; video plays in-browser (currentTime advanced, readyState 4)

## Personas
- LGU leadership (mayor's office, administrators) evaluating gov ERP + traffic/public-space vision
- School administrators/security heads evaluating campus safety vision
- Institutional IT/procurement (RA 12009 readiness, RA 10173 compliance)

## Backlog
- P1: Scrollspy active-state in nav; mobile responsiveness polish pass on small viewports
- P2: Real client references/case studies section (when permitted); downloadable company profile PDF; blog/news
- P2: Replace placeholder dashboard imagery with real product screenshots / Xyver Vision AVP embed
- P3: i18n (EN/Cebuano), CMS for content edits
