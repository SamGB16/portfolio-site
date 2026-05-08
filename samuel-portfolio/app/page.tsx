"use client";

import Link from "next/link";
import { useState } from "react";

function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        fontWeight: 500,
        color: hovered ? "var(--text)" : "var(--muted)",
        transition: "color 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

const stats = [
  {
    number: "2",
    label: "Product concepts in active development",
  },
  {
    number: "1",
    label: "Core user problem per project, no exceptions",
  },
  {
    number: "0",
    label: "Existing tools that solved these problems well enough",
  },
];

export default function Home() {
  return (
    <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 2rem" }}>
      <section style={{ padding: "6rem 0 5rem" }}>
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.10em",
            color: "var(--muted)",
            marginBottom: "2rem",
          }}
        >
          West New York, NJ · NJIT · Seeking product design internships
        </p>

        <h1
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            maxWidth: "820px",
            marginBottom: "2rem",
          }}
        >
          I design tools for people who are juggling too much — making the
          stressful parts of life a little clearer and a little easier.
        </h1>

        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            color: "var(--muted)",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          I&apos;m a design student at NJIT who is drawn to the space where real
          life gets complicated — irregular paychecks, burnout you don&apos;t
          notice until it&apos;s too late, and apps that weren&apos;t built for
          people like us. My best work starts with a problem I&apos;ve actually
          lived, then works toward something calm, usable, and honest.
        </p>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link
            href="/#work"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 500,
              color: "var(--blue)",
              borderBottom: "1.5px solid var(--blue)",
            }}
          >
            View projects ↓
          </Link>
          <SecondaryLink href="/about">About me →</SecondaryLink>
        </div>
      </section>

      <div
        style={{
          borderTop: "0.5px solid var(--border)",
          borderBottom: "0.5px solid var(--border)",
          margin: "4rem 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.number + stat.label}
            style={{
              padding: "2rem",
              borderRight: i < 2 ? "0.5px solid var(--border)" : undefined,
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "2.5rem",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}
            >
              {stat.number}
            </p>
            <p
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "13px",
                color: "var(--muted)",
                marginTop: "0.5rem",
                lineHeight: 1.4,
                maxWidth: "180px",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
