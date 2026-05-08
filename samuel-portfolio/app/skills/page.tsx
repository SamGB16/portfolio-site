const labelStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "var(--font-label)",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontWeight: 500,
  color: "var(--muted)",
  marginBottom: "1.5rem",
};

const sectionStyle: React.CSSProperties = {
  borderTop: "0.5px solid var(--border)",
  padding: "3.5rem 0",
};

const designTools = [
  { name: "Figma", description: "UI design, component building, prototyping" },
  { name: "FigJam", description: "User flows and journey mapping" },
  { name: "Miro", description: "Research synthesis and ideation" },
];

const designSkills = [
  {
    name: "User research",
    description:
      "Identifying real problems through observation and lived experience",
  },
  {
    name: "Wireframing",
    description: "Translating ideas into structure before aesthetics",
  },
  {
    name: "UX writing",
    description: "Clear, human language inside interfaces",
  },
  {
    name: "Case study writing",
    description: "Documenting design decisions and reasoning",
  },
];

function SkillList({
  items,
  accentColor,
}: {
  items: { name: string; description: string }[];
  accentColor?: string;
}) {
  return (
    <div style={{ maxWidth: "560px" }}>
      {items.map((item) => (
        <div
          key={item.name}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0.75rem 0",
            borderBottom: "0.5px solid var(--border)",
            borderLeft: accentColor ? `3px solid ${accentColor}` : undefined,
            paddingLeft: accentColor ? "0.75rem" : undefined,
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--text)",
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "var(--font-small)",
              color: "var(--muted)",
              marginTop: "0.2rem",
            }}
          >
            {item.description}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 2rem" }}>

      {/* Hero */}
      <section style={{ padding: "6rem 0 4rem" }}>
        <p style={labelStyle}>Skills</p>
        <h1
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: "var(--text)",
            maxWidth: "700px",
          }}
        >
          I&apos;m learning deliberately — one tool, one concept, one decision
          at a time.
        </h1>
      </section>

      {/* Design Tools + Design Skills */}
      <section style={sectionStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
          }}
        >
          <div>
            <p style={labelStyle}>Design tools</p>
            <SkillList items={designTools} accentColor="var(--blue)" />
          </div>
          <div>
            <p style={labelStyle}>Design skills</p>
            <SkillList items={designSkills} accentColor="var(--amber)" />
          </div>
        </div>
      </section>

      {/* AI Workflow */}
      <section
        style={{
          ...sectionStyle,
          background: "var(--blue-light)",
          padding: "3.5rem 2rem",
          borderRadius: "12px",
        }}
      >
        <p
          style={{
            ...labelStyle,
            color: "var(--blue)",
          }}
        >
          AI workflow
        </p>
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Spec-driven development.
        </h2>
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "var(--font-body)",
            color: "var(--muted)",
            lineHeight: 1.85,
            maxWidth: "580px",
            marginBottom: "1.5rem",
          }}
        >
          A workflow where I write the detailed spec, AI builds from it, and I
          review, revise, and redirect. The decisions are mine. The reasoning is
          mine. AI handles execution so I can stay focused on judgment.
        </p>
        <div
          style={{
            background: "var(--blue-light)",
            borderRadius: "10px",
            padding: "1.5rem 2rem",
            maxWidth: "580px",
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "14px",
              color: "var(--blue-dark)",
              lineHeight: 1.8,
            }}
          >
            I use AI as a junior developer and writing partner, not a
            replacement for thinking. I plan first, spec second, prompt third —
            and I treat every output as a draft that needs my editorial eye
            before it&apos;s real.
          </p>
        </div>
      </section>

    </div>
  );
}
