# change-013 — Homepage Background and Hero Border Box

**Type:** Change note
**Risk:** Low
**Files affected:** app/globals.css, app/page.tsx

---

## What and Why

The homepage feels too plain and light. Darken the background
slightly and add a border box around the hero text to give it
more presence and structure.

---

## What to Change

### globals.css

Update the background token:
  Current: --bg: #f9f8f5;
  New:     --bg: #edeae4;

Add a new token for the hero box background:
  --hero-bg: #e4e0d8;

### app/page.tsx

Wrap the hero content (identity line, statement, description,
and CTAs) in a bordered box:
- Background: var(--hero-bg)
- Border: 1px solid var(--border)
- Border-radius: 12px
- Padding: 3rem 3.5rem
- The box sits inside the existing container
- Keep the same max-width on the statement and description

---

## Invariants

- Do not change any fonts, font sizes, or colors other than --bg
- Do not change the projects section or looking for section
- Do not touch any other pages
- Do not touch next.config.ts