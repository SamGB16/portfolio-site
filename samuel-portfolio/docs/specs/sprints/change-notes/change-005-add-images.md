# change-005 — Add Images to Project Cards and Case Study Headers

**Type:** Change note
**Risk:** Medium
**Files affected:**
- components/content/ProjectCard.tsx
- components/content/CaseHeader.tsx
- public/ (image files)

---

## What and Why

Add AI-generated images to project cards on the homepage and to
case study headers on TipTrack and Ember pages. Images add visual
context and make the portfolio feel more complete and credible.

---

## Image Files

Images will be placed in the public/ folder.
Filenames to use:
- public/tiptrack-card.png   — used in ProjectCard and CaseHeader
- public/ember-card.png      — used in ProjectCard and CaseHeader

Samuel will generate and place these images manually.
Claude Code should reference them by filename only.
Do not generate or source images — just wire up the img tags.

---

## ProjectCard Changes

Add an image above the color bar inside each card.
- Image sits at the very top of the card, full card width
- Height: 200px
- Object-fit: cover
- No border-radius on image (card already has overflow hidden)

TipTrack card: src="/tiptrack-card.png", alt="TipTrack app concept"
Ember card: src="/ember-card.png", alt="Ember app concept"

---

## CaseHeader Changes

Add an image below the subtitle in the CaseHeader component.
- Full container width
- Height: 360px
- Object-fit: cover
- Border-radius: 12px
- Margin-top: 2.5rem

TipTrack page passes: src="/tiptrack-card.png"
Ember page passes: src="/ember-card.png"

Add a new optional prop to CaseHeader:
- imageSrc?: string
- imageAlt?: string

Only render the image if imageSrc is provided.

---

## Invariants

- Do not change any page content or copy
- Do not change any colors, fonts, or spacing outside image areas
- Do not modify any other components or pages
- Do not install any new packages — use Next.js Image component