# spec-foundation.md — Samuel Blanco Portfolio
Version 1.0 | May 2026

---

## 1. Problem Being Solved

Build an aspirational professional portfolio for Samuel Blanco,
a freshman design student at NJIT, that:

- Establishes a clear product design identity before a career exists
- Presents two original project concepts grounded in lived experience
- Demonstrates intentional use of AI as part of a professional workflow
- Serves as the deliverable for IS117 Final Project (due May 8, 2026)

The portfolio must feel plausible, serious, and future-facing —
not generic, not pretentious.

---

## 2. Professional Identity

**Name:** Samuel Blanco
**Title:** Aspiring Product Designer
**Location:** West New York, NJ · NJIT
**Goal:** Seeking product design internships
**Contact:** samuelgiovab@gmail.com
**GitHub:** https://github.com/SamGB16

**Core statement:**
I design tools for people who are juggling too much — making the
stressful parts of life a little clearer and a little easier.

**Tone:** Warm, honest, grounded. Serious without being pretentious.
Never vague. Never generic.

---

## 3. Projects

### TipTrack
- **Type:** Finance · Mobile · Concept
- **Accent color:** Blue
- **Problem:** Budgeting apps assume a steady paycheck. Tipped workers
  have no way to track irregular cash income or plan around it.
- **Who it's for:** College students working tipped jobs — servers,
  bartenders, baristas, delivery workers
- **Core idea:** A fast tip log, weekly income view, and a simple
  "can I afford this?" check — all built around how tipped income
  actually works, not how apps assume it works

### Ember
- **Type:** Wellness · Mobile · Concept
- **Accent color:** Amber
- **Problem:** Students don't recognize burnout until they're already
  in it. Journaling apps feel like homework. Nothing fits into
  2 minutes of real downtime.
- **Who it's for:** Overwhelmed college students, especially those
  working jobs on top of school
- **Core idea:** One private AI-generated prompt per day, a warm
  visual metaphor for your current state (the flame), and a gentle
  weekly pattern summary — no social layer, no pressure

---

## 4. Design Direction

**Aesthetic:** Swiss International Typographic Style
- Grid-based, structured, clean
- Typography does the visual heavy lifting
- Color used sparingly and purposefully
- No gradients, no shadows, no decoration

**Fonts:**
- Display: DM Sans — headings, hero, name, card titles
- Body: IBM Plex Sans — nav, body text, labels, CTAs

**Colors:**
- Primary accent: Blue — used for TipTrack and main CTAs
- Secondary accent: Amber — used for Ember
- Background: warm off-white, not pure white
- All borders: thin (0.5px), subtle

**Spacing:** Generous. Sections breathe. Max content width 1080px.

---

## 5. Architecture

**Stack:** Next.js 15, TypeScript, Tailwind v4, CSS Modules
**Rendering:** Static export (for GitHub Pages)
**Styling split:**
- Tailwind for layout, grid, spacing, responsive breakpoints
- CSS Modules for typography precision and component styles
- globals.css for design tokens (CSS custom properties)

**Routes (flat):**
- / — Homepage
- /about — About
- /tiptrack — TipTrack case study
- /ember — Ember case study
- /skills — Skills

---

## 6. Sprint Plan

| Sprint | Goal |
|--------|------|
| 1 | Scaffolding — design system, config, shell pages, nav, footer |
| 2 | Homepage hero + stats |
| 3 | Homepage projects + looking for section |
| 4 | About page |
| 5 | TipTrack case study |
| 6 | Ember case study |
| 7 | Skills page |
| 8 | Polish, mobile, final review | - done by change notes instead to keep correct structure.

---

## 7. Acceptance Criteria

- [x] All 5 routes render correctly
- [x] Nav highlights the active page on every route
- [x] Both fonts load correctly sitewide
- [x] Both case studies cover: problem, user, 4 design decisions,
    features, next steps
- [x] About page covers: story, 3 principles, tools
- [x] Skills page explains the spec-driven AI workflow
- [x] npm run build passes
- [x] npm run lint passes
- [x] No gradients, shadows, or decorative elements anywhere
- [x] Readable on mobile (375px)
- [x] All internal links work