# change-007 — Reduce Section Padding

**Type:** Change note
**Risk:** Low
**Files affected:** app/globals.css

---

## What and Why

Sections feel too far apart. Reduce padding to tighten the page
and make it feel more cohesive.

---

## What to Change

Find every instance of section padding set to 5rem 0 across all
page files and components and reduce to 3.5rem 0.

Also add a CSS variable for reuse:
--section-padding: 3.5rem 0;

---

## Invariants

- Do not change hero section padding (6rem 0 5rem) — that one stays
- Do not change any fonts, colors, or layout
- Do not touch next.config.ts