import Image from "next/image";

interface CaseHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
  accent: "blue" | "amber";
  imageSrc?: string;
  imageAlt?: string;
}

export default function CaseHeader({
  tag,
  title,
  subtitle,
  accent,
  imageSrc,
  imageAlt,
}: CaseHeaderProps) {
  const accentColor = accent === "blue" ? "var(--blue)" : "var(--amber)";

  return (
    <div style={{ padding: "5rem 0 4rem" }}>
      <div
        style={{
          height: "4px",
          width: "48px",
          borderRadius: "2px",
          background: accentColor,
          marginBottom: "2rem",
        }}
      />
      <p
        style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "var(--font-label)",
          textTransform: "uppercase",
          letterSpacing: "0.10em",
          fontWeight: 500,
          color: accentColor,
          marginBottom: "1.25rem",
        }}
      >
        {tag}
      </p>
      <h1
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 500,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "var(--text)",
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "var(--font-body)",
          color: "var(--muted)",
          maxWidth: "520px",
        }}
      >
        {subtitle}
      </p>
      {imageSrc && (
        <div
          style={{
            position: "relative",
            height: "360px",
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            marginTop: "2.5rem",
          }}
        >
          <Image
            src={`/portfolio-site${imageSrc}`}
            alt={imageAlt ?? ""}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
}
