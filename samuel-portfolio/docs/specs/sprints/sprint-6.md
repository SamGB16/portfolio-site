# Sprint 6 — Ember Case Study

**Goal:** Build the full Ember case study page. Same structure as
TipTrack but with amber accent and Ember-specific content.

**Reference:** docs/specs/spec-foundation.md sections 3 and 4

---

## Files Expected to Change

- app/ember/page.tsx

## Files That Must Not Change

- app/layout.tsx
- components/ui/Nav.tsx
- components/ui/Footer.tsx
- app/globals.css
- next.config.ts
- app/page.tsx
- app/about/page.tsx
- app/tiptrack/page.tsx
- components/content/CaseHeader.tsx
- components/content/DecisionCard.tsx

---

## Tasks

1. Build the full Ember page in app/ember/page.tsx

   Reuse CaseHeader and DecisionCard components from Sprint 5.

   Container: max-width var(--max-width), margin auto, padding 0 2rem

   Use CaseHeader with:
   - tag: "Wellness · Mobile · Concept"
   - title: "Ember"
   - subtitle: "A private burnout journal for people who don't have
     time to journal — designed to feel like a quiet room, not a
     clinical form."
   - accent: amber

   Section style (same as TipTrack):
   - Border-top: 0.5px solid var(--border)
   - Padding: 3.5rem 0

   Label style:
   - IBM Plex Sans, 11px, uppercase, letter-spacing 0.12em,
     weight 500, color var(--amber), margin-bottom 1.5rem

   H2 style:
   - DM Sans, 1.5rem, weight 500, letter-spacing -0.02em,
     margin-bottom 1rem

   Body style:
   - IBM Plex Sans, 15px, color var(--muted), line-height 1.85,
     max-width 680px

   The problem section:
   Label: "The Problem"
   H2: "Students don't recognize burnout until they're already in it."
   Body: "Burnout doesn't arrive with a warning. It builds slowly
   — one late shift, one missed meal, one week where everything
   felt harder than it should. Traditional journaling apps feel
   like homework. Therapy apps feel heavy and expensive. There's
   nothing in between that helps you quietly check in with yourself
   without adding more to your plate."

   Target user section:
   Label: "Target User"
   H2: "Overwhelmed college students, especially those working
   jobs on top of school."
   Body: "People who would never call themselves journalers but
   still need somewhere to put things. Students managing school,
   work, and life with no margin for a full wellness routine."

   User quote block (same structure as TipTrack):
   - Small text: "Core frustration: No self-awareness tool fits
     into 2 minutes of real downtime."
   - Blockquote: "I don't need another app that makes me feel
     guilty. I need one that just asks how I'm doing."

   Design decisions section:
   Label: "Why I made these decisions"
   H2: "Design approach."
   Grid: 2 columns, gap 1.25rem, margin-top 1.5rem

   Use DecisionCard for each:
   1. number: "Decision 01", title: "One AI-generated prompt per day"
      description: "A blank page is paralyzing. One specific question
      — tailored to your recent patterns — is something you can
      actually answer. The prompt does the heavy lifting."

   2. number: "Decision 02", title: "The flame metaphor"
      description: "A clinical 1–10 scale felt cold. A flame that's
      glowing steady vs burning out is something you feel immediately.
      Metaphor beats metrics for emotional tools."

   3. number: "Decision 03", title: "Strictly private, no social layer"
      description: "The moment you add sharing, the honesty
      disappears. Ember is a private space — no streaks visible
      to others, no public feed, no comparison."

   4. number: "Decision 04", title: "Dark, warm visual tone"
      description: "Deep charcoals and amber. Feels like a quiet
      room at the end of a long day — not a hospital, not a
      productivity app."

   Core features section:
   Label: "Core Features"
   H2: "What Ember does."

   List items (each with a — prefix, border-bottom between items):
   - "Daily AI-generated prompt — tailored to your recent pattern,
     never the same twice"
   - "Flame meter — a warm visual metaphor for your current state,
     not a clinical scale"
   - "Weekly summary — gentle pattern recognition ('You've felt
     drained after late shifts 3 times this week')"
   - "Fully private — no social layer, no sharing, no comparison"

   Next steps section:
   Label: "Next Steps"
   H2: "What I'd do next."

   Note block (same structure as TipTrack):
   - Text: "Test the prompt quality with real students. Validate
     the flame metaphor — does it actually resonate or feel too
     abstract? Explore whether a weekly summary notification
     helps or adds pressure."

   Bottom navigation row:
   - Border-top: 0.5px solid var(--border)
   - Padding: 3rem 0
   - Flex row, gap 2rem
   - Left link: "← Previous: TipTrack" — href: /tiptrack,
     color var(--muted)
   - Right link: "All work →" — href: /#work,
     color var(--amber), border-bottom 1.5px solid var(--amber)
   - Both: IBM Plex Sans, 12px, uppercase, letter-spacing 0.08em,
     weight 500

---

## Invariants — Do Not Change

- Do not modify any other page
- Do not modify CaseHeader or DecisionCard components
- Do not modify any shared components (Nav, Footer, layout)
- Do not modify globals.css or next.config.ts
- Do not install any new packages

---

## Verification

```bash
npm run dev
```

Check in browser at http://localhost:3000/ember:
- [ ] Nav shows Work as active link
- [ ] Amber color bar appears at top of header
- [ ] All 5 sections render with correct labels and headings
- [ ] Labels are amber not blue
- [ ] 4 decision cards render in a 2-column grid
- [ ] User quote block renders correctly
- [ ] Features list renders with dividers
- [ ] Next steps note block renders
- [ ] Bottom nav links to /tiptrack and /#work

Then run:
```bash
npm run build
npm run lint
```