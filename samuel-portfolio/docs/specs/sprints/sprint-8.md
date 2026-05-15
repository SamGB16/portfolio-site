# Sprint 8 — Fade In on Scroll (All Pages Except Homepage)

**Goal:** Add a subtle fade-in on scroll effect to all pages
except the homepage. Each section fades up as it enters the
viewport. Cards stagger in with a slight delay between them.

**Reference:** docs/specs/spec-foundation.md section 4

---

## Files Expected to Change

- hooks/useFadeIn.ts (new file)
- app/about/page.tsx
- app/tiptrack/page.tsx
- app/ember/page.tsx
- app/skills/page.tsx

## Files That Must Not Change

- app/page.tsx
- app/layout.tsx
- components/ui/Nav.tsx
- components/ui/Footer.tsx
- app/globals.css
- next.config.ts
- Any component files

---

## Tasks

1. Create hooks/useFadeIn.ts

   A reusable React hook using Intersection Observer API.
   No external libraries — browser native only.

   The hook should:
   - Accept a threshold value (default 0.15)
   - Return a ref and a boolean isVisible
   - Set isVisible to true when the element enters the viewport
   - Never set isVisible back to false once triggered
     (elements stay visible once they appear)

   CSS for the animation lives in globals.css (Task 2).
   The hook only toggles a class on the element.

2. Add fade animation CSS to app/globals.css

   Add these classes at the bottom of the file:

   .fade-up {
     opacity: 0;
     transform: translateY(20px);
     transition: opacity 0.6s ease, transform 0.6s ease;
   }

   .fade-up.visible {
     opacity: 1;
     transform: translateY(0);
   }

   .fade-up.delay-1 { transition-delay: 0.1s; }
   .fade-up.delay-2 { transition-delay: 0.2s; }
   .fade-up.delay-3 { transition-delay: 0.3s; }

3. Apply fade-in to app/about/page.tsx

   Wrap these elements with fade-up class and useFadeIn hook:
   - About hero statement
   - Two-column story grid
   - "What drives me" section
   - Each principle card (stagger: delay-1, delay-2, delay-3)
   - "Currently learning" section
   - Each skill item (stagger: delay-1, delay-2, delay-3)

4. Apply fade-in to app/tiptrack/page.tsx

   Wrap these elements:
   - Case header (no delay)
   - Problem section
   - Target user section
   - Design decisions label and heading
   - Each decision card (stagger: delay-1, delay-2, delay-3)
   - Core features section
   - Next steps section
   - Bottom nav row

5. Apply fade-in to app/ember/page.tsx

   Same structure as TipTrack — wrap the same equivalent
   sections and cards with fade-up and stagger delays.

6. Apply fade-in to app/skills/page.tsx

   Wrap these elements:
   - Skills hero statement
   - Design tools section
   - Each tool item (stagger: delay-1, delay-2, delay-3)
   - Design skills section
   - Each skill item (stagger: delay-1, delay-2, delay-3)
   - AI workflow section

---

## Invariants

- Do not touch app/page.tsx — homepage has no fade effects
- Do not modify any component files
- Do not change any existing styles, colors, or layout
- Do not install any external animation libraries
- Do not modify next.config.ts

---

## Verification

```bash
npm run dev
```

Check in browser:
- [ ] Homepage has NO fade effects — loads instantly as before
- [ ] /about — sections fade up as you scroll
- [ ] /tiptrack — sections fade up, decision cards stagger
- [ ] /ember — sections fade up, decision cards stagger
- [ ] /skills — sections fade up, tool items stagger
- [ ] Once visible, elements stay visible (no re-hiding)
- [ ] No layout shift or jumping during animation

Then run:
```bash
npm run build
npm run lint
```