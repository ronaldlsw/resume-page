# Fallout Vault-Tec Portfolio — Design Spec

## Overview
Refactor the existing resume website into a premium single-page portfolio with a subtle Fallout Vault-Tec green CRT aesthetic. Content-driven via `/data/*.json`, built with TailwindCSS v4, shadcn/ui, and Framer Motion.

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0a0a` | Page background |
| Surface | `#141414` | Card/section backgrounds |
| Primary (CRT green) | `#00ff41` | Headings, accents, borders, CTAs |
| Dim green | `#1a3a1a` | Hover fills, subtle borders |
| Muted green | `#00cc33` | Secondary text, dates, labels |
| Text | `#e0e0e0` | Body text |
| Dim text | `#888` | Captions, metadata |
| Amber accent | `#ffb000` | Rare highlights (sparingly) |

### Typography
- Headings: `"Share Tech Mono"` / `"JetBrains Mono"` — monospace, terminal-style
- Body: `"Inter"` — clean sans-serif for readability
- Code/monospace elements: inherit heading font

### Visual Motifs
- `1px solid #00ff41` borders on cards and sections
- `[======]` style section dividers (CSS pseudo-elements)
- Subtle CRT scanline overlay on hero image (repeating CSS gradient)
- Hover states: green glow via `box-shadow: 0 0 8px #00ff41`
- Framer Motion fade-up on section entrance (viewport-triggered)
- No box shadows — use bright green borders instead

## Architecture

### Folder Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx         # Terminal-style nav with logo
│   │   ├── Footer.jsx         # "POWERED BY REACT" line
│   │   └── Layout.jsx         # Wraps all sections
│   ├── ui/
│   │   ├── TerminalText.jsx   # Typewriter animation wrapper
│   │   ├── SectionDivider.jsx # [=====] green separator
│   │   ├── GlowButton.jsx     # Green glow CTA button
│   │   ├── Badge.jsx          # Tech stack pill
│   │   └── Card.jsx           # Green-bordered card
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Projects.jsx
│       ├── TechStack.jsx
│       ├── Certifications.jsx
│       ├── Testimonials.jsx
│       ├── Achievements.jsx
│       ├── Timeline.jsx
│       └── Contact.jsx
├── data/
│   ├── personal.json
│   ├── projects.json
│   ├── techstack.json
│   ├── certifications.json
│   ├── testimonials.json
│   ├── achievements.json
│   ├── timeline.json
│   └── contact.json
├── hooks/
│   └── useTypewriter.js
├── App.jsx
├── main.jsx
└── index.css
```

### Data Flow
All section components read from `/data/*.json` via static imports. No API calls. No state management library needed. App.jsx imports Layout, which composes all sections in order.

### Dependency Changes
**Remove:** bootstrap, aos, react-router-dom, gh-pages (optional)
**Add:** tailwindcss @tailwindcss/vite framer-motion lucide-react

## Sections Detail

### Hero
Full-viewport intro. Name in large green monospace with blinking cursor `█`. Subtitle "3 Years Experience | Software Engineer" in muted green. Terminal-style line: `> system.online // ready`. Subtle scanline BG overlay.

### About
Two-column: photo (with scanline overlay) + bio rendered via `useTypewriter` hook. Section divider below.

### Projects
Card grid. Each card: green border, title, desc, tech badges, "VIEW" glow button. Hover: green glow.

### Tech Stack
Categorized badge grid (Languages, Frontend, Backend, Tools). Green-outlined pill badges.

### Certifications
Simple card list: cert name, issuer, date.

### Testimonials
Quote cards with green left vertical bar (terminal prompt style).

### Achievements
Large green numbers with labels — stat readout style ("10+ Projects", "3 Years Exp").

### Timeline
Vertical timeline with green dots and connecting line. Each entry: date range (dim green), title, description.

### Contact
Large `[ CONTACT ME ]` glow button. Email and social links styled as terminal prompts: `> rlsw35@gmail.com`.

## Animations (Framer Motion)
- All sections: `fade-up` on scroll into view, 0.6s duration, ease-out
- Hero text: typewriter effect (staggered character reveal)
- Timeline: staggered item reveal
- No AOS. No excessive animation. Meaningful only.

## Acceptance Criteria
1. All content driven by `/data/*.json` — zero hardcoded text in components
2. Bootstrap/AOS/react-router completely removed, zero dead code
3. Green CRT color scheme applied consistently
4. Responsive on all breakpoints
5. Framer Motion animations smooth and purposeful
6. `npm run build` succeeds with no warnings
