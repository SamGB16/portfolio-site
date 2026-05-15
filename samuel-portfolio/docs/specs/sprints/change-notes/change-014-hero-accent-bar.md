# change-014 — Add Blue Accent Bar to Hero Box

**Type:** Change note
**Risk:** Low
**Files affected:** app/page.tsx

---

## What and Why

Add a thin blue accent bar at the top of the hero box to tie it
to the site's primary color and give the box more visual weight.

---

## What to Change

On the hero box wrapper div, replace the existing border with:
- Remove: border: 1px solid var(--border)
- Add: border: 1px solid var(--border)
- Add: border-top: 3px solid var(--blue)

So the box keeps all four borders but the top one is blue and thicker.

---

## Invariants

- Do not change anything else in the hero section
- Do not touch any other files