# change-004 — Strengthen Section Visual Structure

**Type:** Change note
**Risk:** Low
**Files affected:** app/globals.css

---

## What and Why

Sections need more visual definition. The current 0.5px borders
are too subtle. Increase border opacity so section dividers are
clearly visible and the page feels more structured.

---

## What to Change

In app/globals.css update the border token:

Current:  --border: rgba(0,0,0,0.10);
New:      --border: rgba(0,0,0,0.15);

---

## Invariants

- Do not change any other tokens
- Do not touch any other files