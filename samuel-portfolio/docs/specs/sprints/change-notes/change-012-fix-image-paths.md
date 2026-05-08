# change-012 — Fix Image Paths for GitHub Pages

**Type:** Change note
**Risk:** Low
**Files affected:** components/content/ProjectCard.tsx,
components/content/CaseHeader.tsx

---

## What and Why

Images not loading on GitHub Pages because src="/tiptrack-card.png"
resolves to the domain root, not /portfolio-site/tiptrack-card.png.

---

## What to Change

In both ProjectCard.tsx and CaseHeader.tsx find any image src
that starts with "/" and prefix it with "/portfolio-site".

Change:
  src="/tiptrack-card.png"
  src="/ember-card.png"

To:
  src="/portfolio-site/tiptrack-card.png"
  src="/portfolio-site/ember-card.png"

---

## Invariants

- Do not change anything else
- Do not touch any other files