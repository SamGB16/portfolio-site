# change-009 — Skills Page Two Column Layout

**Type:** Change note
**Risk:** Low
**Files affected:** app/skills/page.tsx

---

## What and Why

Design tools and design skills sections have too much empty space
between them and feel disconnected. Put them side by side in a
two-column grid so they read as one cohesive section.

---

## What to Change

Wrap the design tools section and design skills section together
in a single two-column grid container:
- grid-template-columns: 1fr 1fr
- gap: 3rem
- Both sections share the same border-top and padding

Remove the border-top from the design skills section since it
is now inside the same grid as design tools.

---

## Invariants

- Do not change any content or copy
- Do not change the AI workflow section
- Do not touch any other files