# Sprint 2 — Homepage Hero + Stats

**Goal:** Build the hero section and stats row on the homepage.
This is the first thing visitors see — it must establish Samuel's
identity, statement, and credibility immediately.

**Reference:** docs/specs/spec-foundation.md sections 2 and 4

---

## Files Expected to Change

- app/page.tsx

## Files That Must Not Change

- app/layout.tsx
- components/ui/Nav.tsx
- components/ui/Footer.tsx
- app/globals.css
- next.config.ts

---

## Tasks

1. Build the hero section inside app/page.tsx
   - Remove the Sprint 1 placeholder text
   - Wrap all content in a container div:
     max-width var(--max-width), margin auto, padding 0 2rem
   - Hero section padding: 6rem 0 5rem

   Identity line:
   - Text: "West New York, NJ · NJIT · Seeking product design internships"
   - Font: IBM Plex Sans, 12px, uppercase, letter-spacing 0.10em
   - Color: var(--muted)
   - Margin-bottom: 2rem

   Hero statement:
   - Text: "I design tools for people who are juggling too much —
     making the stressful parts of life a little clearer
     and a little easier."
   - Font: DM Sans, clamp(2rem, 4vw, 3.25rem), weight 500
   - Line-height: 1.1, letter-spacing: -0.02em
   - Color: var(--text)
   - Max-width: 820px
   - Margin-bottom: 2rem

   Description paragraph:
   - Text: "I'm a design student at NJIT who is drawn to the space
     where real life gets complicated — irregular paychecks, burnout
     you don't notice until it's too late, and apps that weren't
     built for people like us. My best work starts with a problem
     I've actually lived, then works toward something calm,
     usable, and honest."
   - Font: IBM Plex Sans, 16px, weight 400
   - Color: var(--muted)
   - Max-width: 560px
   - Line-height: 1.8
   - Margin-bottom: 2.5rem

   CTA row (flex, gap 1.5rem):
   - Primary: "View projects ↓"
       href: /#work
       Color: var(--blue)
       Border-bottom: 1.5px solid var(--blue)
       Font: IBM Plex Sans, 12px, uppercase, letter-spacing 0.08em,
       weight 500
   - Secondary: "About me →"
       href: /about
       Color: var(--muted)
       Font: same as primary
       Hover: color var(--text), transition 0.2s

2. Build the stats row below the hero
   - Border-top and border-bottom: 0.5px solid var(--border)
   - Margin: 4rem 0
   - Layout: 3-column grid
   - Each column separated by border-right 0.5px solid var(--border)
   - Last column has no border-right
   - Each stat has padding 2rem, left padding on 2nd and 3rd columns

   Stat 1:
     Number: "2"
     Label: "Product concepts in active development"

   Stat 2:
     Number: "1"
     Label: "Core user problem per project, no exceptions"

   Stat 3:
     Number: "0"
     Label: "Existing tools that solved these problems well enough"

   Number style:
     Font: DM Sans, 2.5rem, weight 500, letter-spacing -0.03em
     Color: var(--text)

   Label style:
     Font: IBM Plex Sans, 13px
     Color: var(--muted)
     Margin-top: 0.5rem
     Line-height: 1.4
     Max-width: 180px

---

## Invariants — Do Not Change

- Do not add the projects section yet — that is Sprint 3
- Do not modify any shared components (Nav, Footer, layout)
- Do not modify globals.css or next.config.ts
- Do not install any new packages

---

## Verification

```bash
npm run dev
```

Check in browser at http://localhost:3000:
- [x] Identity line appears above hero statement
- [x] Hero statement is large and the first thing you read
- [x] Description paragraph appears below hero statement
- [x] Two CTA links appear side by side
- [x] Stats row shows 3 columns with correct numbers and labels
- [x] Column dividers are visible between stats
- [x] Fonts are correct — DM Sans for statement, IBM Plex Sans for body

Then run:
```bash
npm run build
npm run lint
```

---

## Completion Checklist

- [x] Hero section renders correctly
- [x] Stats row renders correctly
- [x] No content below the stats row
- [x] npm run build passes
- [x] npm run lint passes

---
