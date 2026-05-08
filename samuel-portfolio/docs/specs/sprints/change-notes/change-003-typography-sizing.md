# change-003 — Increase Typography Sizing

**Type:** Change note
**Risk:** Low
**Files affected:** app/globals.css

---

## What and Why

Body text and labels feel too small compared to the reference site.
Increase base sizes across the board for better readability.

---

## What to Change

In app/globals.css update these values:

Body text: increase from 15px to 17px
Small/caption text: increase from 13px to 14px
Label eyebrow text: increase from 11px to 12px
Nav links: increase from 11px to 12px
Line-height on body: increase from 1.7 to 1.85

---

## Invariants

- Do not change any font families
- Do not change any color tokens
- Do not change heading sizes — those are already set with clamp()
- Do not touch any other files