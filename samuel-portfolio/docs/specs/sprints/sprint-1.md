# Sprint 1 — Scaffolding, Design System, Shell Pages

**Goal:** Set up the project foundation. Build the shared layout,
Nav, Footer, and empty shell pages for all routes. No page content
yet — just the skeleton that every sprint builds on top of.

**Reference:** docs/specs/spec-foundation.md sections 4 and 5

---

## Files Expected to Change

- app/layout.tsx
- app/page.tsx
- app/about/page.tsx
- app/tiptrack/page.tsx
- app/ember/page.tsx
- app/skills/page.tsx
- components/ui/Nav.tsx
- components/ui/Footer.tsx

## Files That Must Already Exist (do not touch)

- app/globals.css — design tokens and base reset already in place
- next.config.ts — static export already configured

---

## Tasks

1. Configure `app/layout.tsx`
   - Import globals.css
   - Set html lang="en"
   - Set body background to var(--bg)
   - Render Nav above children
   - Render Footer below children
   - Add metadata: title "Samuel Blanco — Product Designer",
     description "Aspiring product designer at NJIT"

2. Build `components/ui/Nav.tsx`
   - Sticky, top 0, z-index 100
   - Background var(--bg)
   - Height 56px, padding 0 2rem
   - Border-bottom 0.5px solid var(--border)
   - Left: "SB" monogram — DM Sans, 18px, weight 500, links to /
   - Right: four links with gap 2rem
       Work     → /#work
       About    → /about
       Skills   → /skills
       Contact  → mailto:samuel@example.com
   - Link style: IBM Plex Sans, 11px, uppercase, letter-spacing
     0.10em, color var(--muted)
   - Active page link: color var(--text)
   - Hover: color var(--text), transition 0.2s
   - Use Next.js usePathname() to determine active link

3. Build `components/ui/Footer.tsx`
   - Border-top 0.5px solid var(--border)
   - Padding 2.5rem 0, margin-top 4rem
   - Layout: flex, space-between, align-items center
   - Left: "Samuel Blanco" — DM Sans, 14px, weight 500
   - Right: three links with gap 1.5rem
       About · Skills · Contact
   - Link style: IBM Plex Sans, 11px, uppercase,
     letter-spacing 0.08em, color var(--muted)
   - Hover: color var(--text), transition 0.2s

4. Build shell pages — each page returns a single div with a
   centered placeholder text so we can confirm routing works.
   No real content yet.
   - app/page.tsx → "Homepage — coming in Sprint 2"
   - app/about/page.tsx → "About — coming in Sprint 4"
   - app/tiptrack/page.tsx → "TipTrack — coming in Sprint 5"
   - app/ember/page.tsx → "Ember — coming in Sprint 6"
   - app/skills/page.tsx → "Skills — coming in Sprint 7"

---

## Invariants — Do Not Change

- Do not add any page content beyond placeholder text
- Do not modify globals.css
- Do not modify next.config.ts
- Do not install any new packages
- Do not create any new files outside the list above

---

## Verification

After Claude Code implements this sprint, verify:

```bash
npm run dev
```

Then manually check in browser:
- http://localhost:3000 — shows placeholder, Nav, Footer
- http://localhost:3000/about — shows placeholder, Nav, Footer
- http://localhost:3000/tiptrack — shows placeholder, Nav, Footer
- http://localhost:3000/ember — shows placeholder, Nav, Footer
- http://localhost:3000/skills — shows placeholder, Nav, Footer

Then run:
```bash
npm run build
npm run lint
```

Both must pass with no errors.

---

## Completion Checklist

- [ ] Nav renders on all 5 routes
- [ ] Footer renders on all 5 routes
- [ ] "SB" monogram links to /
- [ ] Active nav link is highlighted correctly on each route
- [ ] All 5 routes load without errors
- [ ] npm run build passes
- [ ] npm run lint passes

---