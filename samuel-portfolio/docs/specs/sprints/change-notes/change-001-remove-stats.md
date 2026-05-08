# change-001 — Remove Stats Row from Homepage

**Type:** Change note
**Risk:** Low
**File affected:** app/page.tsx only

---

## What and Why

Remove the stats row (2 · 1 · 0) from the homepage.
It feels forced. The hero statement is strong enough on its own
and the stats don't add credibility at this stage.

---

## What to Remove

Delete the entire stats row section from app/page.tsx.
Everything between and including the stats grid container.
Nothing else changes.

---

## Invariants

- Do not touch the hero section
- Do not touch any other files