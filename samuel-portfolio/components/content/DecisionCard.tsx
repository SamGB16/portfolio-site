interface DecisionCardProps {
  number: string;
  title: string;
  description: string;
}

export default function DecisionCard({
  number,
  title,
  description,
}: DecisionCardProps) {
  return (
    <div
      style={{
        background: "var(--white)",
        border: "0.5px solid var(--border)",
        borderRadius: "10px",
        padding: "1.5rem",
      }}
    >
      <p
        style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.10em",
          fontWeight: 500,
          color: "var(--muted)",
          marginBottom: "0.5rem",
        }}
      >
        {number}
      </p>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "15px",
          fontWeight: 500,
          color: "var(--text)",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "13px",
          color: "var(--muted)",
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
    </div>
  );
}
