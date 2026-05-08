# change-008 — Add Color Accents to About and Skills Pages

**Type:** Change note
**Risk:** Low
**Files affected:** app/about/page.tsx, app/skills/page.tsx

---

## What and Why

The about and skills pages feel visually flat — everything is the
same muted gray. Add tinted section backgrounds and colored left
borders to key text blocks to bring in the blue and amber accents
more deliberately.

---

## What to Change

### About page (app/about/page.tsx)

1. "What drives me" section:
   - Give the section a background of var(--blue-light)
   - Add padding: 3.5rem 2rem to the section
   - Add border-radius: 12px

2. Story paragraphs (the two-column grid):
   - Add a left border to each paragraph container:
     border-left: 3px solid var(--blue)
     padding-left: 1.25rem

3. "Currently learning" section:
   - Add amber left border to each skill item name:
     border-left: 3px solid var(--amber)
     padding-left: 0.75rem

### Skills page (app/skills/page.tsx)

1. "AI workflow" section:
   - Give the entire section a background of var(--blue-light)
   - Add padding: 3.5rem 2rem
   - Add border-radius: 12px

2. "Design tools" section:
   - Add a left border to each tool item:
     border-left: 3px solid var(--blue)
     padding-left: 0.75rem

3. "Design skills" section:
   - Add a left border to each skill item:
     border-left: 3px solid var(--amber)
     padding-left: 0.75rem

---

## Invariants

- Do not change any copy or content
- Do not change any fonts or font sizes
- Do not touch any other pages or components
- Do not touch globals.css or next.config.ts
- Do not install any new packages