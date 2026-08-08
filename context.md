# Project — Phoebe's personal portfolio website

This file is the project's source of truth. Read it at the start of every session.
This is my first website ever, so explain what you're doing as you go, work in small
steps, set up git from the start, and check with me before any big decision.

## About me (site owner)

- Phoebe Wang — Computer Science student at UT Austin, graduating May 2028.
- Current: Product Manager Intern at IBM – Guardium Data Protection (June 2026 – present, Lowell MA).
- Former: Undergraduate Researcher & Summer Fellow in UT's RobIn (Robot Interactive Intelligence Lab) under Dr. Junhong Xu (Jan – May 2026).
- Former: AI Strategist, Dell Technologies' Excel With Dell program (Feb – Apr 2026).
- Marketing Junior Officer for Texas ACM (May 2026 – present).
- Pinterest Engage participant (selected mentee, paired with Pinterest AI Platform engineer).
- I also do short-form content creation and enjoy journaling.
- The résumé PDF (last updated Aug 2026) is the source of truth for my
  experience, projects, skills, and education. Do NOT invent anything — ask me if
  something is unclear or missing.

## What we're building

The entire site IS a single realistic kraft-paper file folder, lying landscape
("horizontal"). It must clearly read as a real file folder — not stacked banners.

Decision history (so we don't revisit it): I considered a 3D rendered room portfolio
and a scrapbook style, and rejected both. The 3D room was too heavy for a first site;
the scrapbook looked cluttered and not professional enough for recruiters. The
horizontal kraft file folder is the final, decided concept.

Visual cues that must make it read as a folder:
- Kraft / manila cardstock color with a subtle paper texture.
- A notched flap at the top-center, like a real folder's tab.
- Section tabs that physically poke out the RIGHT edge, stacked vertically — one
  tab per section.
- A visible thickness/edge so it looks like it holds pages.

Open / closed behavior:
- Closed: the kraft cover shows, with a small printed label (my name + "computer
  science portfolio").
- Open: a cream paper "page" inside the folder shows that section's content.
- Clicking a tab opens the folder to that section. Clicking the already-open tab,
  or the top notch, closes the folder back to the cover.
- A reference photo of the exact kraft folder look is in `./reference/`.

## Sections (one tab each)

About · Experience · Projects · Skills · Résumé (embedded preview + download) ·
Contact (email, LinkedIn, GitHub, Instagram) · Journal (stub it for now).
Pull all real content from the résumé and LinkedIn export in `./reference/`.

## Look & feel

- Minimalist, organized, editorial — cute but grown-up enough that an older
  recruiter takes it seriously.
- Warm kraft / manila / tan palette on a bone background; cream pages. NOT pink.
- Also build a dark-neutral theme (charcoal / espresso / taupe). Build the color
  system with CSS variables so the two themes swap easily. Early on, show me BOTH
  the light and dark versions so I can pick.
- Typography: a refined serif for headings, a clean sans-serif for body text.
  Lowercase or sentence case throughout — no ALL CAPS.
- Soft, subtle shadows for paper depth; smooth, satisfying motion.

## Interaction

- Clicking a right-edge tab opens the folder (cover lifts away) and that section's
  page fades / slides in; the active tab pulls out slightly. Use GSAP for animation.
- Clicking the open tab again, or the top notch, closes the folder.
- A subtle intro animation on load is welcome. Clear hover + keyboard-focus states.
- On mobile, keep the folder metaphor but adapt the layout so tabs and pages are
  comfortably tappable on a narrow screen.

## Tech stack

- Vite build, vanilla JavaScript, GSAP for animation. Minimal dependencies.
- No 3D / Three.js.
- Markdown-driven Journal: I add a post by dropping in a Markdown file. Stub one
  placeholder post and design the layout, but don't over-build it.

## Hosting & deployment

- Free hosting on GitHub Pages. Set up the repo, the Vite `base` path config for a
  project page, and a GitHub Actions deploy workflow. Walk me through deploying
  step by step.
- Netlify or Vercel are acceptable free backups if GitHub Pages gets fiddly.

## Hard constraints

- Must work well on mobile — a lot of my visitors come from Instagram.
- A recruiter must reach my résumé and experience fast: keep tab labels clean and
  literal, and make the résumé download obvious.
- Accessible: keyboard navigation, visible focus states, alt text, good contrast.
- Fast-loading. Clean, well-commented, beginner-readable code; a clear file
  structure; and a README explaining how to run, edit content, and deploy.

## How to work with me

- I've never built a website. Explain what you're doing and teach me as you go.
- Work incrementally: get a basic deployable version live first, then layer in the
  folder polish and animation.
- Before building, give me a short plan and the light-vs-dark palette mockups.
- After each milestone, summarize what you did and what's next.
- Set up git from the start and commit at sensible points.

## Reference files

In `./reference/`:
- Résumé (PDF) — source of truth for experience, projects, and skills.
- LinkedIn export (PDF) — additional background.
- Kraft folder photo — the look the folder should match.

Read these before building.
