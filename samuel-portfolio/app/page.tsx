"use client";

import Link from "next/link";
import { useState } from "react";
import ProjectCard from "@/components/content/ProjectCard";

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
        fontSize: "var(--font-nav)",
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

export default function Home() {
  return (
    <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 2rem" }}>
      <section style={{ padding: "6rem 0 5rem" }}>
        <div
          style={{
            background: "var(--hero-bg)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "3rem 3.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "var(--font-nav)",
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
              fontSize: "var(--font-body)",
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
                fontSize: "var(--font-nav)",
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
        </div>
      </section>

      <section
        id="work"
        style={{
          borderTop: "0.5px solid var(--border)",
          padding: "3.5rem 0",
        }}
      >
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "var(--font-label)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontWeight: 500,
            color: "var(--blue)",
            marginBottom: "1.5rem",
          }}
        >
          Selected Work
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          <ProjectCard
            tag="Finance · Mobile"
            title="TipTrack"
            description="A budget app designed for tipped workers in college — built around the reality of unpredictable, cash-based income."
            href="/tiptrack"
            accent="blue"
          />
          <ProjectCard
            tag="Wellness · Mobile"
            title="Ember"
            description="A private burnout journal for people who don't have time to journal — designed to feel like a quiet room, not a clinical form."
            href="/ember"
            accent="amber"
          />
        </div>
      </section>

      <section
        style={{
          borderTop: "0.5px solid var(--border)",
          padding: "3.5rem 0",
          maxWidth: "640px",
        }}
      >
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "var(--font-label)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontWeight: 500,
            color: "var(--muted)",
            marginBottom: "1.5rem",
          }}
        >
          What I&apos;m looking for
        </p>
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.75rem",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Teams building tools that take real people seriously.
        </h2>
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "var(--font-body)",
            color: "var(--muted)",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          I&apos;m especially interested in finance, wellness, and the messy
          overlap between the two — products for people who are already under
          pressure and don&apos;t need an interface that adds more.
        </p>
        <Link
          href="mailto:samuelgiovab@gmail.com"
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
          samuelgiovab@gmail.com
        </Link>
      </section>

    </div>
  );
}
