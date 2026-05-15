# change-018 — Add Lego Photo to Homepage Hero

**Type:** Change note
**Risk:** Low
**Files affected:** app/page.tsx, public/

---

## What and Why

Add a personal photo (lego-me.png) to the homepage hero box
to make the portfolio feel more personal and memorable.

---

## Image File

Samuel will place the image manually at:
public/lego-me.png

Do not generate or source the image — just wire up the tag.

---

## What to Change

Inside the hero box in app/page.tsx, split the content into
a two-column layout:

Left column:
- The existing hero content — identity line, statement,
  description, and CTAs
- flex: 1

Right column:
- The lego-me.png image
- Width: 200px, fixed
- Height: 200px
- Object-fit: contain
- Align to the right side of the hero box
- No border-radius — keep it clean and flat

Layout of the hero box:
- display: flex
- align-items: center
- gap: 3rem

On mobile (max-width 700px):
- Stack vertically, image goes above the text
- Image width: 140px, margin auto (centered)

---

## Invariants

- Do not change any hero text content
- Do not change the blue top border on the hero box
- Do not touch any other pages or components
- Do not touch globals.css or next.config.ts