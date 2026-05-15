# change-017 — Add Music Museum to Selected Work

**Type:** Change note
**Risk:** Low
**Files affected:** app/page.tsx, components/content/ProjectCard.tsx

---

## What and Why

Add the Music Consumption Museum scrollytelling project as a third
card in the Selected Work section. This shows real completed work
alongside the two concept projects and demonstrates range.

---

## What to Change

### app/page.tsx

Change the projects grid from 2 columns to 3 columns:
- Current: grid-template-columns: 1fr 1fr
- New: grid-template-columns: 1fr 1fr 1fr

Add a third ProjectCard after Ember:
- tag: "Scrollytelling · Web"
- title: "Music Consumption Museum"
- description: "Five eras of music technology — from vinyl to
  streaming — told through a scrollytelling experience built
  with Next.js."
- href: "https://samgb16.github.io/Scrolly-Telling-/"
- accent: a new value "purple"
- imageSrc: "/museum-card.png"
- imageAlt: "Music Consumption Museum"

The third card links to an external URL so it should open
in a new tab. Use target="_blank" and rel="noopener noreferrer"
on the link.

### components/content/ProjectCard.tsx

Add "purple" as a valid accent option:
- Color bar: #534AB7
- Tag color: #534AB7
- Link color: #534AB7

---

## Invariants

- Do not change TipTrack or Ember cards
- Do not change any other pages
- Do not touch globals.css or next.config.ts