import Link from "next/link";
import CaseHeader from "@/components/content/CaseHeader";
import DecisionCard from "@/components/content/DecisionCard";

const sectionStyle: React.CSSProperties = {
  borderTop: "0.5px solid var(--border)",
  padding: "3.5rem 0",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontWeight: 500,
  color: "var(--amber)",
  marginBottom: "1.5rem",
};

const h2Style: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "1.5rem",
  fontWeight: 500,
  letterSpacing: "-0.02em",
  marginBottom: "1rem",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "15px",
  color: "var(--muted)",
  lineHeight: 1.85,
  maxWidth: "680px",
};

const decisions = [
  {
    number: "Decision 01",
    title: "One AI-generated prompt per day",
    description:
      "A blank page is paralyzing. One specific question — tailored to your recent patterns — is something you can actually answer. The prompt does the heavy lifting.",
  },
  {
    number: "Decision 02",
    title: "The flame metaphor",
    description:
      "A clinical 1–10 scale felt cold. A flame that's glowing steady vs burning out is something you feel immediately. Metaphor beats metrics for emotional tools.",
  },
  {
    number: "Decision 03",
    title: "Strictly private, no social layer",
    description:
      "The moment you add sharing, the honesty disappears. Ember is a private space — no streaks visible to others, no public feed, no comparison.",
  },
  {
    number: "Decision 04",
    title: "Dark, warm visual tone",
    description:
      "Deep charcoals and amber. Feels like a quiet room at the end of a long day — not a hospital, not a productivity app.",
  },
];

const features = [
  "Daily AI-generated prompt — tailored to your recent pattern, never the same twice",
  "Flame meter — a warm visual metaphor for your current state, not a clinical scale",
  "Weekly summary — gentle pattern recognition ('You've felt drained after late shifts 3 times this week')",
  "Fully private — no social layer, no sharing, no comparison",
];

export default function Ember() {
  return (
    <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 2rem" }}>
      <CaseHeader
        tag="Wellness · Mobile · Concept"
        title="Ember"
        subtitle="A private burnout journal for people who don't have time to journal — designed to feel like a quiet room, not a clinical form."
        accent="amber"
        imageSrc="/ember-card.png"
        imageAlt="Ember app concept"
      />

      {/* The Problem */}
      <section style={sectionStyle}>
        <p style={labelStyle}>The Problem</p>
        <h2 style={h2Style}>
          Students don&apos;t recognize burnout until they&apos;re already in it.
        </h2>
        <p style={bodyStyle}>
          Burnout doesn&apos;t arrive with a warning. It builds slowly — one
          late shift, one missed meal, one week where everything felt harder
          than it should. Traditional journaling apps feel like homework.
          Therapy apps feel heavy and expensive. There&apos;s nothing in between
          that helps you quietly check in with yourself without adding more to
          your plate.
        </p>
      </section>

      {/* Target User */}
      <section style={sectionStyle}>
        <p style={labelStyle}>Target User</p>
        <h2 style={h2Style}>
          Overwhelmed college students, especially those working jobs on top of
          school.
        </h2>
        <p style={bodyStyle}>
          People who would never call themselves journalers but still need
          somewhere to put things. Students managing school, work, and life with
          no margin for a full wellness routine.
        </p>
        <div
          style={{
            background: "var(--white)",
            border: "0.5px solid var(--border)",
            borderRadius: "10px",
            padding: "1.5rem 2rem",
            maxWidth: "520px",
            marginTop: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "14px",
              color: "var(--muted)",
            }}
          >
            Core frustration: No self-awareness tool fits into 2 minutes of
            real downtime.
          </p>
          <blockquote
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "var(--text)",
              paddingLeft: "1rem",
              borderLeft: "2px solid var(--border)",
              marginTop: "1rem",
            }}
          >
            I don&apos;t need another app that makes me feel guilty. I need one
            that just asks how I&apos;m doing.
          </blockquote>
        </div>
      </section>

      {/* Design Decisions */}
      <section style={sectionStyle}>
        <p style={labelStyle}>Why I made these decisions</p>
        <h2 style={h2Style}>Design approach.</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.25rem",
            marginTop: "1.5rem",
          }}
        >
          {decisions.map((d) => (
            <DecisionCard
              key={d.number}
              number={d.number}
              title={d.title}
              description={d.description}
            />
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section style={sectionStyle}>
        <p style={labelStyle}>Core Features</p>
        <h2 style={h2Style}>What Ember does.</h2>
        <div style={{ maxWidth: "680px" }}>
          {features.map((feature, i) => (
            <div
              key={feature}
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "15px",
                color: "var(--muted)",
                lineHeight: 1.85,
                padding: "0.75rem 0",
                borderBottom:
                  i < features.length - 1
                    ? "0.5px solid var(--border)"
                    : undefined,
              }}
            >
              — {feature}
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <section style={sectionStyle}>
        <p style={labelStyle}>Next Steps</p>
        <h2 style={h2Style}>What I&apos;d do next.</h2>
        <div
          style={{
            background: "var(--bg)",
            border: "0.5px solid var(--border)",
            borderRadius: "10px",
            padding: "1.5rem 2rem",
            maxWidth: "580px",
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "14px",
              color: "var(--muted)",
              lineHeight: 1.8,
            }}
          >
            Test the prompt quality with real students. Validate the flame
            metaphor — does it actually resonate or feel too abstract? Explore
            whether a weekly summary notification helps or adds pressure.
          </p>
        </div>
      </section>

      {/* Bottom Nav */}
      <div
        style={{
          borderTop: "0.5px solid var(--border)",
          padding: "3rem 0",
          display: "flex",
          gap: "2rem",
        }}
      >
        <Link
          href="/tiptrack"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: 500,
            color: "var(--muted)",
          }}
        >
          ← Previous: TipTrack
        </Link>
        <Link
          href="/#work"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: 500,
            color: "var(--amber)",
            borderBottom: "1.5px solid var(--amber)",
          }}
        >
          All work →
        </Link>
      </div>
    </div>
  );
}
