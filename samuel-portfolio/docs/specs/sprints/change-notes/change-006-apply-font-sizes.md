# change-006 — Apply Updated Font Sizes to Components

**Type:** Change note
**Risk:** Low
**Files affected:** All component and page files that have
hardcoded font sizes as inline styles

---

## What and Why

change-003 added CSS custom properties for the new font scale
but inline styles in components override globals.css. This change
replaces hardcoded font size values with the new CSS variables
so the updated scale actually renders.

---

## What to Change

Search every file in app/ and components/ for these hardcoded
font-size values and replace with the corresponding variable:

  font-size: '15px' or fontSize: '15px' → var(--font-body)
  font-size: '16px' or fontSize: '16px' → var(--font-body)
  font-size: '13px' or fontSize: '13px' → var(--font-small)
  font-size: '11px' or fontSize: '11px' → var(--font-label)
  font-size: '12px' or fontSize: '12px' → var(--font-nav)

---

## Invariants

- Do not change any heading font sizes (1.5rem, clamp(), 2.5rem etc.)
- Do not change any colors, spacing, or layout
- Do not touch globals.css or next.config.ts
- Do not install any new packages