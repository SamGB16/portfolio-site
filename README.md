# Samuel Blanco — Product Designer Portfolio

**Live site:** https://samgb16.github.io/portfolio-site/

A professional portfolio built as the final project for IS117 at NJIT.
This site presents an aspirational product design identity grounded in
real lived experience — not a pretend career, but a thoughtful direction.

---

## About the Project

I'm a bartender and server working nights and weekends in New Jersey
while studying at NJIT. None of the tools I've tried were built for
people like me — irregular income, burnout that sneaks up on you,
apps that assume a life I don't have.

This portfolio presents two original project concepts born from that
experience, built with a deliberate design system and a structured
AI workflow.

---

## Projects

### TipTrack — Finance · Mobile · Concept
A budget app designed for tipped workers in college. Most budgeting
apps assume a steady paycheck. TipTrack is built around the reality
of unpredictable, cash-based income — a quick tip log, weekly income
visualization, and a simple "can I afford this?" check.

### Ember — Wellness · Mobile · Concept
A private burnout journal for people who don't have time to journal.
One AI-generated prompt per day, a warm flame metaphor for your
current state, and a gentle weekly pattern summary. No social layer.
No pressure. Just a quiet room.

---

## Design Direction

**Aesthetic:** Swiss International Typographic Style
- Grid-based, structured, clean
- Typography does the visual heavy lifting
- No gradients, no shadows, no decoration
- Thin borders, generous whitespace

**Fonts:**
- Display: DM Sans — headings, hero, card titles
- Body: IBM Plex Sans — nav, body text, labels, CTAs

**Color palette:**
- Blue `#185FA5` — primary accent, TipTrack, main CTAs
- Amber `#BA7517` — secondary accent, Ember
- Background `#f9f8f5` — warm off-white, not pure white
- Text `#1a1a18` — near black
- Muted `#6b6b67` — body text, descriptions

**Tone:** Warm, honest, grounded. Serious without being pretentious.
Every word is written for a real audience, not to sound impressive.

---

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4 + CSS Modules
- Static export for GitHub Pages
- GitHub Actions for CI/CD

---

## AI Workflow — Spec-Driven Development

This project was built using a structured spec-driven development
workflow. AI was used as a tool for execution, not a replacement
for thinking.

### The process
Spec → Sprint Doc → Implement → QA → Commit
### How it worked
1. I wrote a master spec defining the problem, identity, design
   direction, and architecture before touching any code
2. I wrote a sprint doc before implementing each feature
3. I gave Claude Code the spec and sprint doc and directed it
   to implement exactly what was described
4. I reviewed every output, ran build and lint checks, and
   made all decisions about what to keep, change, or reject
5. Small low-risk changes used change notes instead of full sprints

The decisions were mine. The reasoning was mine.
AI handled execution so I could stay focused on judgment.

---

## Sprint History

| Sprint | Goal |
|--------|------|
| Sprint 1 | Scaffolding — design system, config, shell pages, nav, footer |
| Sprint 2 | Homepage hero section |
| Sprint 3 | Homepage projects + looking for section |
| Sprint 4 | About page |
| Sprint 5 | TipTrack case study |
| Sprint 6 | Ember case study |
| Sprint 7 | Skills page |

---

## Change Notes

| Change | Description |
|--------|-------------|
| change-001 | Remove stats row from homepage |
| change-002 | Update contact email to real address |
| change-003 | Increase typography sizing sitewide |
| change-004 | Strengthen section border visibility |
| change-005 | Add images to project cards and case study headers |
| change-006 | Apply updated font sizes to components |
| change-007 | Reduce section padding from 5rem to 3.5rem |
| change-008 | Add color accents to About and Skills pages |
| change-009 | Skills page two-column layout |
| change-010 | Fix About page principles card spacing |
| change-011 | Fix GitHub Actions deployment configuration |
| change-012 | Fix image paths for GitHub Pages basePath |

---

## Docs Structure
## Docs Structure

```
docs/
├── specs/
│   ├── spec-foundation.md    # Master spec
│   ├── sprints/
│   │   ├── sprint-1.md       # Scaffolding & design system
│   │   ├── sprint-2.md       # Homepage hero
│   │   ├── sprint-3.md       # Homepage projects
│   │   ├── sprint-4.md       # About page
│   │   ├── sprint-5.md       # TipTrack case study
│   │   ├── sprint-6.md       # Ember case study
│   │   └── sprint-7.md       # Skills page
│   └── change-notes/
│       ├── change-001        # Remove stats row
│       ├── change-002        # Update email
│       ├── change-003        # Typography sizing
│       ├── change-004        # Section borders
│       ├── change-005        # Add images
│       ├── change-006        # Apply font sizes
│       ├── change-007        # Reduce spacing
│       ├── change-008        # Add color accents
│       ├── change-009        # Skills layout
│       ├── change-010        # Card spacing
│       ├── change-011        # Fix deployment
│       └── change-012        # Fix image paths
```
---

## Author

**Samuel Blanco**
NJIT — IS117 — Spring 2026
samuelgiovab@gmail.com
https://github.com/SamGB16