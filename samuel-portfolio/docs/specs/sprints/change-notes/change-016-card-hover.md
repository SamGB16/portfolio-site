# change-016 — Enhanced Card Hover Effects

**Type:** Change note
**Risk:** Low
**Files affected:** components/content/ProjectCard.tsx

---

## What and Why

Project cards currently lift on hover with translateY(-3px).
Enhance the hover to also shift the color bar and link text
to make the interaction feel more intentional and polished.

---

## What to Change

On hover of the project card:
- Keep existing translateY(-3px), transition 0.25s
- Add: border-color shifts from var(--border) to the card's
  accent color
  TipTrack: border-color var(--blue)
  Ember: border-color var(--amber)
- Add: transition on border-color 0.25s

On hover of the "View case study →" link text:
- Add: letter-spacing increases slightly from 0.08em to 0.10em
- Add: transition 0.25s

---

## Invariants

- Do not change card layout, padding, or fonts
- Do not touch any other components or pages
- Do not install any new packages