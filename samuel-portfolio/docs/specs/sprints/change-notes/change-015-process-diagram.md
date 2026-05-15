# change-015 — Add Process Diagram to Homepage

**Type:** Change note
**Risk:** Low
**Files affected:** app/page.tsx

---

## What and Why

Add a short visual process diagram between the hero box and the
projects section to show the spec-driven development workflow.
This makes the AI workflow visible on the homepage and adds
credibility.

---

## What to Add

Add a new section between the hero and the projects section.
No label needed. Centered layout. Max-width 680px, margin auto.

Heading:
- Text: "How I build"
- Font: DM Sans, 1.1rem, weight 500, color var(--text)
- Text-align: center
- Margin-bottom: 2rem

Diagram row:
- Layout: flex, align-items center, justify-content center
- Gap between items: 1rem
- Wrap on mobile

Four steps, each step:
- Background: var(--white)
- Border: 1px solid var(--border)
- Border-radius: 10px
- Padding: 1rem 1.25rem
- Text-align: center

  Step number:
  - Font: IBM Plex Sans, 11px, uppercase, letter-spacing 0.10em
  - Color: var(--blue)
  - Margin-bottom: 0.25rem

  Step label:
  - Font: DM Sans, 14px, weight 500
  - Color: var(--text)

Steps:
  01 — Spec
  02 — Sprint
  03 — Build
  04 — Review

Between each step, add an arrow "→":
- Font: IBM Plex Sans, 16px
- Color: var(--muted)
- flex-shrink: 0

Section padding: 3.5rem 0
Border-top: 0.5px solid var(--border)

---

## Invariants

- Do not change the hero section
- Do not change the projects section
- Do not touch any other files