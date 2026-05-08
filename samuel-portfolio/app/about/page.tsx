const labelStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontWeight: 500,
  color: "var(--muted)",
  marginBottom: "1.5rem",
};

const principles = [
  {
    title: "Real problems",
    body: "I only work on problems I or people around me have actually experienced. Research is useful. Lived experience is irreplaceable.",
  },
  {
    title: "Calm design",
    body: "Stressful situations need calm interfaces, not more noise. Good design for people under pressure means reducing friction, not adding features.",
  },
  {
    title: "Honest work",
    body: "I'm a student. I say what I'm learning, not what I've mastered. The portfolio shows direction and thinking, not a finished career.",
  },
];

const skills = [
  { name: "Figma", description: "UI design, component building, prototyping" },
  { name: "FigJam", description: "User flows and journey mapping" },
  { name: "Miro", description: "Research synthesis and ideation" },
  {
    name: "Claude AI & ChatGPT",
    description: "Spec-driven development workflow, writing, research",
  },
  {
    name: "Design thinking",
    description: "Problem framing, user research, iteration",
  },
];

export default function About() {
  return (
    <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 2rem" }}>

      {/* Hero */}
      <section style={{ padding: "6rem 0 4rem" }}>
        <p style={labelStyle}>About</p>
        <h1
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: "var(--text)",
            maxWidth: "700px",
            marginBottom: "3rem",
          }}
        >
          I&apos;m a bartender who decided the tools didn&apos;t exist yet, so
          I&apos;m learning to build them.
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: 1.9,
            }}
          >
            I work nights and weekends as a server and bartender in New Jersey —
            the kind of job where you make $180 one shift and $40 the next.
            I&apos;ve tried every budgeting app out there and none of them are
            built for how tipped income actually works. That frustration is where
            TipTrack came from. It&apos;s not a hypothetical problem I
            researched. It&apos;s my Tuesday morning.
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: 1.9,
            }}
          >
            At NJIT, I&apos;m learning that design is less about making things
            look good and more about making the right decisions for the right
            people. I&apos;m drawn to tools that serve people under pressure —
            students, workers, anyone navigating something complicated with
            limited time and energy. I want to become the kind of designer who
            starts with the person, not the feature.
          </p>
        </div>
      </section>

      {/* What drives me */}
      <section
        style={{
          borderTop: "0.5px solid var(--border)",
          padding: "5rem 0",
        }}
      >
        <p style={labelStyle}>What drives me</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {principles.map((card) => (
            <div
              key={card.title}
              style={{
                background: "var(--white)",
                border: "0.5px solid var(--border)",
                borderRadius: "10px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "var(--text)",
                  marginBottom: "0.5rem",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "13px",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Currently learning */}
      <section
        style={{
          borderTop: "0.5px solid var(--border)",
          padding: "5rem 0",
          maxWidth: "560px",
        }}
      >
        <p style={labelStyle}>Currently learning</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0.75rem 0",
                borderBottom: "0.5px solid var(--border)",
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
                {skill.name}
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "13px",
                  color: "var(--muted)",
                  marginTop: "0.2rem",
                }}
              >
                {skill.description}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
