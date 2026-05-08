# Sprint 4 — About Page

**Goal:** Build the full About page. This page tells Samuel's
personal story, establishes what drives him, and lists what
he is currently learning.

**Reference:** docs/specs/spec-foundation.md sections 2 and 4

---

## Files Expected to Change

- app/about/page.tsx

## Files That Must Not Change

- app/layout.tsx
- components/ui/Nav.tsx
- components/ui/Footer.tsx
- app/globals.css
- next.config.ts
- app/page.tsx

---

## Tasks

1. Build the about hero section

   Container: max-width var(--max-width), margin auto, padding 0 2rem
   Section padding: 6rem 0 4rem

   Label:
   - Text: "About"
   - Font: IBM Plex Sans, 11px, uppercase, letter-spacing 0.12em,
     weight 500
   - Color: var(--muted)
   - Margin-bottom: 1.5rem

   Statement:
   - Text: "I'm a bartender who decided the tools didn't exist yet,
     so I'm learning to build them."
   - Font: DM Sans, clamp(1.6rem, 3.5vw, 2.5rem), weight 500
   - Letter-spacing: -0.02em, line-height: 1.15
   - Color: var(--text)
   - Max-width: 700px
   - Margin-bottom: 3rem

   Story body:
   - Layout: 2-column grid, gap 3rem
   - Both paragraphs: IBM Plex Sans, 15px, color var(--muted),
     line-height 1.9

   P1: "I work nights and weekends as a server and bartender in
   New Jersey — the kind of job where you make $180 one shift
   and $40 the next. I've tried every budgeting app out there
   and none of them are built for how tipped income actually
   works. That frustration is where TipTrack came from. It's
   not a hypothetical problem I researched. It's my Tuesday morning."

   P2: "At NJIT, I'm learning that design is less about making
   things look good and more about making the right decisions
   for the right people. I'm drawn to tools that serve people
   under pressure — students, workers, anyone navigating something
   complicated with limited time and energy. I want to become
   the kind of designer who starts with the person, not the feature."

2. Build the what drives me section

   Border-top: 0.5px solid var(--border)
   Padding: 5rem 0

   Label:
   - Text: "What drives me"
   - Same label style as above

   Layout: 3-column grid, gap 1.5rem

   Each card:
   - Background: var(--white)
   - Border: 0.5px solid var(--border)
   - Border-radius: 10px
   - Padding: 1.5rem

   H3: DM Sans, 15px, weight 500, color var(--text),
   margin-bottom 0.5rem

   P: IBM Plex Sans, 13px, color var(--muted), line-height 1.7

   Card 1 — "Real problems"
   "I only work on problems I or people around me have actually
   experienced. Research is useful. Lived experience is irreplaceable."

   Card 2 — "Calm design"
   "Stressful situations need calm interfaces, not more noise.
   Good design for people under pressure means reducing friction,
   not adding features."

   Card 3 — "Honest work"
   "I'm a student. I say what I'm learning, not what I've mastered.
   The portfolio shows direction and thinking, not a finished career."

3. Build the currently learning section

   Border-top: 0.5px solid var(--border)
   Padding: 5rem 0
   Max-width: 560px

   Label:
   - Text: "Currently learning"
   - Same label style as above

   Each item:
   - Layout: flex column
   - Padding: 0.75rem 0
   - Border-bottom: 0.5px solid var(--border)

   Skill name:
   - Font: IBM Plex Sans, 14px, weight 500
   - Color: var(--text)

   Skill description:
   - Font: IBM Plex Sans, 13px
   - Color: var(--muted)
   - Margin-top: 0.2rem

   Items:
   - Figma — "UI design, component building, prototyping"
   - FigJam — "User flows and journey mapping"
   - Miro — "Research synthesis and ideation"
   - Claude AI & ChatGPT — "Spec-driven development workflow,
     writing, research"
   - Design thinking — "Problem framing, user research, iteration"

---

## Invariants — Do Not Change

- Do not modify any other page
- Do not modify any shared components (Nav, Footer, layout)
- Do not modify globals.css or next.config.ts
- Do not install any new packages

---

## Verification

```bash
npm run dev
```

Check in browser at http://localhost:3000/about:
- [x] Nav shows About as active link
- [x] Large statement is first thing visible
- [x] Two-column story appears below statement
- [x] Three principle cards render in a row
- [x] Currently learning list renders with dividers
- [x] Fonts are correct throughout

Then run:
```bash
npm run build
npm run lint
```