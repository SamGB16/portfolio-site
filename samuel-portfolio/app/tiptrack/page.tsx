import Link from "next/link";
import CaseHeader from "@/components/content/CaseHeader";
import DecisionCard from "@/components/content/DecisionCard";

const sectionStyle: React.CSSProperties = {
  borderTop: "0.5px solid var(--border)",
  padding: "3.5rem 0",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "var(--font-label)",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontWeight: 500,
  color: "var(--blue)",
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
  fontSize: "var(--font-body)",
  color: "var(--muted)",
  lineHeight: 1.85,
  maxWidth: "680px",
};

const decisions = [
  {
    number: "Decision 01",
    title: "Quick tip log",
    description:
      "The log had to take under 30 seconds. If it takes longer, no one does it after a shift. One screen, one number, done.",
  },
  {
    number: "Decision 02",
    title: "Weekly average, not monthly total",
    description:
      "Monthly totals are misleading when income is irregular. Weekly averages give a truer picture of what you actually have to work with.",
  },
  {
    number: "Decision 03",
    title: "'Can I afford this?' check",
    description:
      "Instead of complex budgeting categories, one simple question: based on your last 4 weeks, can you afford this purchase?",
  },
  {
    number: "Decision 04",
    title: "Warm color and tone",
    description:
      "Amber and coral tones — money stress is already cold and clinical. The app should feel like a friend helping you figure it out, not a bank lecturing you.",
  },
];

const features = [
  "Daily tip log — shift, amount, and notes in under 30 seconds",
  "Weekly income visualization — bar chart showing highs and lows",
  "Spending categories built for students — rent, food, going out, school, savings",
  "Affordability check — based on your last 4 weeks of actual earnings",
];

export default function TipTrack() {
  return (
    <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 2rem" }}>
      <CaseHeader
        tag="Finance · Mobile · Concept"
        title="TipTrack"
        subtitle="A budget app designed for tipped workers in college — built around the reality of unpredictable, cash-based income."
        accent="blue"
        imageSrc="/tiptrack-card.png"
        imageAlt="TipTrack app concept"
      />

      {/* The Problem */}
      <section style={sectionStyle}>
        <p style={labelStyle}>The Problem</p>
        <h2 style={h2Style}>Budgeting apps weren&apos;t built for us.</h2>
        <p style={bodyStyle}>
          Most personal finance tools assume you get paid the same amount every
          two weeks. If you work in a restaurant, that assumption breaks
          immediately. I&apos;ve tried Mint, YNAB, and half a dozen others —
          none of them have a way to log a $180 cash tip after a Saturday shift,
          track how your weekly income fluctuates, or tell you whether you can
          actually afford something based on your recent average earnings.
          I&apos;m the target user. The gap is real.
        </p>
      </section>

      {/* Target User */}
      <section style={sectionStyle}>
        <p style={labelStyle}>Target User</p>
        <h2 style={h2Style}>College students working tipped jobs.</h2>
        <p style={bodyStyle}>
          Servers, bartenders, baristas, delivery workers — people whose income
          varies dramatically shift to shift and who have no reliable way to
          budget against it with existing tools.
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
            Core frustration: Irregular income makes standard budgeting tools
            useless or misleading.
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
            Some nights I make rent. Some nights I make lunch money.
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
        <h2 style={h2Style}>What TipTrack does.</h2>
        <div style={{ maxWidth: "680px" }}>
          {features.map((feature, i) => (
            <div
              key={feature}
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "var(--font-body)",
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
            Test the log flow with 5 real restaurant workers. Validate whether
            weekly average is actually more useful than monthly. Explore whether
            the affordability check needs more nuance for large vs small
            purchases.
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
          href="/"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "var(--font-nav)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: 500,
            color: "var(--muted)",
          }}
        >
          ← All work
        </Link>
        <Link
          href="/ember"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "var(--font-nav)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: 500,
            color: "var(--blue)",
            borderBottom: "1.5px solid var(--blue)",
          }}
        >
          Next project: Ember →
        </Link>
      </div>
    </div>
  );
}
