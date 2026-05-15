# change-019 — Replace Hero Image with Circle Avatar

**Type:** Change note
**Risk:** Low
**Files affected:** app/page.tsx

---

## What and Why

The full-size lego image feels disconnected in the hero box.
Replace it with a small circular avatar next to the identity
line at the top of the hero box — subtle, personal, and clean.

---

## What to Change

In app/page.tsx inside the hero box:

Remove the current two-column flex layout that puts the image
on the right side. Go back to a single column layout.

At the very top of the hero box content, before the identity
line, add a flex row with align-items center and gap 12px:

Left: circular avatar image
- src: "/portfolio-site/lego-me.png"
- alt: "Samuel Blanco"
- width: 44px
- height: 44px
- border-radius: 50%
- object-fit: cover
- flex-shrink: 0

Right: identity line text (move existing identity line here)
- "West New York, NJ · NJIT · Seeking product design internships"
- Same style as before — IBM Plex Sans, 12px, uppercase,
  letter-spacing 0.10em, color var(--muted)

Then below that row: hero statement, description, CTAs
as they were before — no other changes.

---

## Invariants

- Do not change any hero text content
- Do not change the blue top border on the hero box
- Do not change any other sections on the page
- Do not touch any other files