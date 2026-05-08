# change-010 — Fix About Page Principles Card Spacing

**Type:** Change note
**Risk:** Low
**Files affected:** app/about/page.tsx

---

## What and Why

The three principles cards feel cramped inside the blue tinted
section. Add more breathing room inside the blue container.

---

## What to Change

Increase the padding on the blue "What drives me" container:
- Current: padding 3.5rem 2rem
- New: padding 3.5rem 2.5rem

Increase the gap between the three cards:
- Current: gap 1.5rem
- New: gap 2rem

---

## Invariants

- Do not change any content or copy
- Do not touch any other files