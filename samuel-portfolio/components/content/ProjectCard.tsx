"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  tag: string;
  description: string;
  href: string;
  accent: "blue" | "amber" | "purple";
  target?: string;
  rel?: string;
}

const imageMap: Record<string, { src: string; alt: string }> = {
  "/tiptrack": { src: "/portfolio-site/tiptrack-card.png", alt: "TipTrack app concept" },
  "/ember":    { src: "/portfolio-site/ember-card.png",    alt: "Ember app concept" },
  "https://samgb16.github.io/Scrolly-Telling-/": { src: "/portfolio-site/museum-card.png", alt: "Music Consumption Museum" },
};

export default function ProjectCard({
  title,
  tag,
  description,
  href,
  accent,
  target,
  rel,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const accentColor = accent === "blue" ? "var(--blue)" : accent === "amber" ? "var(--amber)" : "#534AB7";
  const image = imageMap[href];

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        background: "var(--white)",
        border: `0.5px solid ${hovered ? accentColor : "var(--border)"}`,
        borderRadius: "12px",
        overflow: "hidden",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.25s, border-color 0.25s",
      }}
    >
      {image && (
        <div style={{ position: "relative", height: "200px", width: "100%" }}>
          <Image src={image.src} alt={image.alt} fill style={{ objectFit: "cover" }} />
        </div>
      )}
      <div
        style={{
          height: "5px",
          background: accentColor,
        }}
      />
      <div style={{ padding: "1.75rem" }}>
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "var(--font-label)",
            textTransform: "uppercase",
            letterSpacing: "0.10em",
            fontWeight: 500,
            color: accentColor,
            marginBottom: "0.75rem",
          }}
        >
          {tag}
        </p>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.6rem",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "0.75rem",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            color: "var(--muted)",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
          }}
        >
          {description}
        </p>
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "var(--font-label)",
            textTransform: "uppercase",
            letterSpacing: hovered ? "0.10em" : "0.08em",
            fontWeight: 500,
            color: accentColor,
            transition: "letter-spacing 0.25s",
          }}
        >
          View case study →
        </p>
      </div>
    </Link>
  );
}
