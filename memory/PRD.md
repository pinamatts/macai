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

## Implemented (2026-08-24, update 2 — AVP cut + full imagery swap)
- AVP re-cut per user: dropped 0–7s (both big title overlays: "YOUR CAMERAS ALREADY SEE", "XYVER VISION MAKES THEM UNDERSTAND"); MINIMAX/Hailuo AI watermark + sparkle removed via ffmpeg delogo boxes (whole video). New cut: 43s H.264, 19MB → /public/media/xyver-vision-avp.mp4
- Reel now autoplays muted + loops (click for sound); label "0:43 · Autoplays muted"
- ALL stock photos removed. Every image on site is now an AVP frame (shot-*.jpg, extracted from the delogo'd cut):
  Hero bg: shot-junction (LGU Vision wall); Hero console: shot-cctv-wall; About: shot-operator
  LGU tiles: junction wall / map network / lobby occupancy (t=37) / ops wall — factory frames dropped per user
  Schools tiles: quad threat detection (t=43) / campus dashboard / corridor wall / field tablet
- Old frame-*.jpg deleted. Verified: autoplay state (playing, muted), screenshots of hero/reel/LGU/schools/about, assets 200

## Implemented (2026-08-24, update 3 — Hero Video Backdrop)
- Hero static bg replaced with slowed (0.6x → 72s loop), muted, audio-stripped 720p cut of the AVP: /public/media/xyver-hero-loop.mp4 (7MB)
- Autoplays muted + loops + playsInline with parallax (existing useScroll/useTransform wrapper kept); poster = shot-junction.jpg; tuned to opacity-45 + bg-mac-base/60 overlay for visible motion with legible text
- Verified: video playing in-browser (currentTime advancing, readyState 4), two screenshots 5s apart show scene change, headline contrast intact

## Implemented (2026-08-24, update 4 — Camera-scan hero + mobile polish)
- Hero on-load "camera scanning" sequence: full-viewport boot sweep beam, viewfinder corner brackets with "SYS ONLINE · SCAN ACTIVE" + Cebu coordinates, scan beam sweeping down the headline synced with masked line reveals (re-sequenced 0.35–1.8s)
- Ops console: detection LockBoxes with converging corner brackets + confidence counters ticking 0→0.98/0.94, crosshair lines, live status line flipping "SCANNING SECTOR 04…" → "2 OBJECTS TRACKED" at 3.4s
- Ops console now visible on mobile (was desktop-only)
- Mobile pass: section padding py-20 (was py-28), hero pt-28, headline text-4xl on <640px (fixed orphaned "+"), marquee text-2xl, dashboard tile gaps tightened, Vision toggle stacks full-width on phones, mobile menu locks Lenis scroll while open
- Verified: desktop hero end-state (brackets, lockboxes, status), mobile 390x844 hero/menu/vision/schools screenshots all clean

## Personas
- LGU leadership (mayor's office, administrators) evaluating gov ERP + traffic/public-space vision
- School administrators/security heads evaluating campus safety vision
- Institutional IT/procurement (RA 12009 readiness, RA 10173 compliance)

## Backlog
- P1: Scrollspy active-state in nav; mobile responsiveness polish pass on small viewports
- P2: Real client references/case studies section (when permitted); downloadable company profile PDF; blog/news
- P2: Replace placeholder dashboard imagery with real product screenshots / Xyver Vision AVP embed
- P3: i18n (EN/Cebuano), CMS for content edits
