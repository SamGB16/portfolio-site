# Sprint 5 — TipTrack Case Study

**Goal:** Build the full TipTrack case study page. This page must
tell the complete story of the project — problem, user, design
decisions, features, and next steps.

**Reference:** docs/specs/spec-foundation.md sections 3 and 4

---

## Files Expected to Change

- app/tiptrack/page.tsx
- components/content/CaseHeader.tsx
- components/content/DecisionCard.tsx

## Files That Must Not Change

- app/layout.tsx
- components/ui/Nav.tsx
- components/ui/Footer.tsx
- app/globals.css
- next.config.ts
- app/page.tsx
- app/about/page.tsx

---

## Tasks

1. Build CaseHeader component in components/content/CaseHeader.tsx

   Props:
   - tag: string
   - title: string
   - subtitle: string
   - accent: 'blue' | 'amber'

   Structure:
   Padding: 5rem 0 4rem

   Color bar:
   - Height: 4px, width: 48px, border-radius: 2px
   - Blue: background var(--blue)
   - Amber: background var(--amber)
   - Margin-bottom: 2rem

   Tag:
   - Font: IBM Plex Sans, 11px, uppercase, letter-spacing 0.10em,
     weight 500
   - Blue: color var(--blue)
   - Amber: color var(--amber)
   - Margin-bottom: 1.25rem

   Title:
   - Font: DM Sans, clamp(2rem, 5vw, 3.5rem), weight 500
   - Letter-spacing: -0.03em, line-height: 1.05
   - Color: var(--text)
   - Margin-bottom: 0.75rem

   Subtitle:
   - Font: IBM Plex Sans, 16px
   - Color: var(--muted)
   - Max-width: 520px

2. Build DecisionCard component in components/content/DecisionCard.tsx

   Props:
   - number: string
   - title: string
   - description: string

   Structure:
   - Background: var(--white)
   - Border: 0.5px solid var(--border)
   - Border-radius: 10px
   - Padding: 1.5rem

   Number label:
   - Font: IBM Plex Sans, 11px, uppercase, letter-spacing 0.10em,
     weight 500
   - Color: var(--muted)
   - Margin-bottom: 0.5rem

   Title:
   - Font: DM Sans, 15px, weight 500
   - Color: var(--text)
   - Margin-bottom: 0.5rem

   Description:
   - Font: IBM Plex Sans, 13px
   - Color: var(--muted)
   - Line-height: 1.7

3. Build the full TipTrack page in app/tiptrack/page.tsx

   Container: max-width var(--max-width), margin auto, padding 0 2rem

   Use CaseHeader with:
   - tag: "Finance · Mobile · Concept"
   - title: "TipTrack"
   - subtitle: "A budget app designed for tipped workers in college
     — built around the reality of unpredictable, cash-based income."
   - accent: blue

   Section style (reuse across all sections below):
   - Border-top: 0.5px solid var(--border)
   - Padding: 3.5rem 0

   Label style:
   - IBM Plex Sans, 11px, uppercase, letter-spacing 0.12em,
     weight 500, color var(--blue), margin-bottom 1.5rem

   H2 style:
   - DM Sans, 1.5rem, weight 500, letter-spacing -0.02em,
     margin-bottom 1rem

   Body style:
   - IBM Plex Sans, 15px, color var(--muted), line-height 1.85,
     max-width 680px

   The problem section:
   Label: "The Problem"
   H2: "Budgeting apps weren't built for us."
   Body: "Most personal finance tools assume you get paid the same
   amount every two weeks. If you work in a restaurant, that
   assumption breaks immediately. I've tried Mint, YNAB, and half
   a dozen others — none of them have a way to log a $180 cash tip
   after a Saturday shift, track how your weekly income fluctuates,
   or tell you whether you can actually afford something based on
   your recent average earnings. I'm the target user. The gap is real."

   Target user section:
   Label: "Target User"
   H2: "College students working tipped jobs."
   Body: "Servers, bartenders, baristas, delivery workers — people
   whose income varies dramatically shift to shift and who have no
   reliable way to budget against it with existing tools."

   User quote block:
   - Background: var(--white)
   - Border: 0.5px solid var(--border)
   - Border-radius: 10px
   - Padding: 1.5rem 2rem
   - Max-width: 520px
   - Margin-top: 1.5rem
   - Small text: "Core frustration: Irregular income makes standard
     budgeting tools useless or misleading."
     IBM Plex Sans, 14px, color var(--muted)
   - Blockquote: "Some nights I make rent. Some nights I make
     lunch money."
     DM Sans, 1.1rem, weight 500, color var(--text)
     padding-left 1rem, border-left 2px solid var(--border)
     margin-top 1rem

   Design decisions section:
   Label: "Why I made these decisions"
   H2: "Design approach."
   Grid: 2 columns, gap 1.25rem, margin-top 1.5rem

   Use DecisionCard for each:
   1. number: "Decision 01", title: "Quick tip log"
      description: "The log had to take under 30 seconds. If it
      takes longer, no one does it after a shift. One screen,
      one number, done."

   2. number: "Decision 02", title: "Weekly average, not monthly total"
      description: "Monthly totals are misleading when income is
      irregular. Weekly averages give a truer picture of what you
      actually have to work with."

   3. number: "Decision 03", title: "'Can I afford this?' check"
      description: "Instead of complex budgeting categories, one
      simple question: based on your last 4 weeks, can you afford
      this purchase?"

   4. number: "Decision 04", title: "Warm color and tone"
      description: "Amber and coral tones — money stress is already
      cold and clinical. The app should feel like a friend helping
      you figure it out, not a bank lecturing you."

   Core features section:
   Label: "Core Features"
   H2: "What TipTrack does."

   List items (each with a — prefix, border-bottom between items):
   - "Daily tip log — shift, amount, and notes in under 30 seconds"
   - "Weekly income visualization — bar chart showing highs and lows"
   - "Spending categories built for students — rent, food, going
     out, school, savings"
   - "Affordability check — based on your last 4 weeks of actual
     earnings"

   Next steps section:
   Label: "Next Steps"
   H2: "What I'd do next."

   Note block:
   - Background: var(--bg)
   - Border: 0.5px solid var(--border)
   - Border-radius: 10px
   - Padding: 1.5rem 2rem
   - Max-width: 580px
   - Text: "Test the log flow with 5 real restaurant workers.
     Validate whether weekly average is actually more useful than
     monthly. Explore whether the affordability check needs more
     nuance for large vs small purchases."
   - IBM Plex Sans, 14px, color var(--muted), line-height 1.8

   Bottom navigation row:
   - Border-top: 0.5px solid var(--border)
   - Padding: 3rem 0
   - Flex row, gap 2rem
   - Left link: "← All work" — href: /, color var(--muted)
   - Right link: "Next project: Ember →" — href: /ember,
     color var(--blue), border-bottom 1.5px solid var(--blue)
   - Both: IBM Plex Sans, 12px, uppercase, letter-spacing 0.08em,
     weight 500

---

## Invariants — Do Not Change

- Do not modify any other page
- Do not modify any shared components (Nav, Footer, layout)
- Do not modify globals.css or next.config.ts
- Do not install any new packages

---

## Verification

```bash
npm run dev
```

Check in browser at http://localhost:3000/tiptrack:
- [x] Nav shows Work as active link
- [x] Blue color bar appears at top of header
- [x] All 5 sections render with correct labels and headings
- [x] 4 decision cards render in a 2-column grid
- [x] User quote block renders correctly
- [x] Features list renders with dividers
- [x] Next steps note block renders
- [x] Bottom nav links to / and /ember

Then run:
```bash
npm run build
npm run lint
```