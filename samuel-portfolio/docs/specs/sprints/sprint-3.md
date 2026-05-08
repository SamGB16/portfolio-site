# Sprint 3 — Homepage Projects + Looking For

**Goal:** Build the projects section and looking for section on the
homepage. This completes the homepage. Visitors should be able to
see both projects and understand what Samuel is looking for.

**Reference:** docs/specs/spec-foundation.md sections 3 and 4

---

## Files Expected to Change

- app/page.tsx
- components/content/ProjectCard.tsx

## Files That Must Not Change

- app/layout.tsx
- components/ui/Nav.tsx
- components/ui/Footer.tsx
- app/globals.css
- next.config.ts

---

## Tasks

1. Build ProjectCard component in components/content/ProjectCard.tsx

   Props:
   - title: string
   - tag: string
   - description: string
   - href: string
   - accent: 'blue' | 'amber'

   Structure:
   - Full card is a Next.js Link wrapping the entire card
   - background: var(--white)
   - border: 0.5px solid var(--border)
   - border-radius: 12px
   - overflow: hidden
   - Hover: translateY(-3px), transition 0.25s

   Color bar (top of card):
   - Height: 5px
   - Blue accent: background var(--blue)
   - Amber accent: background var(--amber)

   Card body (padding 1.75rem):

   Tag line:
   - Font: IBM Plex Sans, 11px, uppercase, letter-spacing 0.10em,
     weight 500
   - Blue accent: color var(--blue)
   - Amber accent: color var(--amber)
   - Margin-bottom: 0.75rem

   Title:
   - Font: DM Sans, 1.6rem, weight 500, letter-spacing -0.02em
   - Color: var(--text)
   - Margin-bottom: 0.75rem

   Description:
   - Font: IBM Plex Sans, 14px, weight 400
   - Color: var(--muted)
   - Line-height: 1.7
   - Margin-bottom: 1.5rem

   Link text: "View case study →"
   - Font: IBM Plex Sans, 11px, uppercase, letter-spacing 0.08em,
     weight 500
   - Blue accent: color var(--blue)
   - Amber accent: color var(--amber)

2. Add projects section to app/page.tsx below the hero

   Section id="work"
   Border-top: 0.5px solid var(--border)
   Padding: 5rem 0

   Label above grid:
   - Text: "Selected Work"
   - Font: IBM Plex Sans, 11px, uppercase, letter-spacing 0.12em,
     weight 500
   - Color: var(--blue)
   - Margin-bottom: 1.5rem

   Grid: 2 columns, gap 1.5rem

   Card 1 — TipTrack:
   - tag: "Finance · Mobile"
   - title: "TipTrack"
   - description: "A budget app designed for tipped workers in
     college — built around the reality of unpredictable,
     cash-based income."
   - href: /tiptrack
   - accent: blue

   Card 2 — Ember:
   - tag: "Wellness · Mobile"
   - title: "Ember"
   - description: "A private burnout journal for people who don't
     have time to journal — designed to feel like a quiet room,
     not a clinical form."
   - href: /ember
   - accent: amber

3. Add looking for section below the projects grid

   Border-top: 0.5px solid var(--border)
   Padding: 5rem 0
   Max-width: 640px

   Label:
   - Text: "What I'm looking for"
   - Font: IBM Plex Sans, 11px, uppercase, letter-spacing 0.12em,
     weight 500
   - Color: var(--muted)
   - Margin-bottom: 1.5rem

   Heading:
   - Text: "Teams building tools that take real people seriously."
   - Font: DM Sans, 1.75rem, weight 500, letter-spacing -0.02em
   - Margin-bottom: 1rem

   Body:
   - Text: "I'm especially interested in finance, wellness, and the
     messy overlap between the two — products for people who are
     already under pressure and don't need an interface that
     adds more."
   - Font: IBM Plex Sans, 16px, color var(--muted), line-height 1.8
   - Margin-bottom: 1.5rem

   Email link:
   - Text: "samuel@example.com"
   - href: mailto:samuel@example.com
   - Color: var(--blue)
   - Border-bottom: 1.5px solid var(--blue)
   - Font: IBM Plex Sans, 12px, uppercase, letter-spacing 0.08em,
     weight 500

---

## Invariants — Do Not Change

- Do not modify the hero section from Sprint 2
- Do not modify any shared components (Nav, Footer, layout)
- Do not modify globals.css or next.config.ts
- Do not install any new packages

---

## Verification

```bash
npm run dev
```

Check in browser at http://localhost:3000:
- [x] "Selected Work" label appears above the project cards
- [x] Two project cards render side by side
- [x] TipTrack card has blue color bar and blue accent text
- [x] Ember card has amber color bar and amber accent text
- [x] Both cards link to correct routes (/tiptrack, /ember)
- [x] Card hover lifts slightly
- [x] Looking for section appears below the cards
- [x] Email link has blue underline

Then run:
```bash
npm run build
npm run lint
```