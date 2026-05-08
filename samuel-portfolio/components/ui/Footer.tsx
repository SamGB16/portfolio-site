"use client";

import Link from "next/link";
import { useState } from "react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "mailto:samuel@example.com" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: "var(--font-label)",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: hovered ? "var(--text)" : "var(--muted)",
        transition: "color 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid var(--border)",
        padding: "2.5rem 0",
        marginTop: "4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          color: "var(--text)",
        }}
      >
        Samuel Blanco
      </span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {footerLinks.map((link) => (
          <FooterLink key={link.label} href={link.href} label={link.label} />
        ))}
      </div>
    </footer>
  );
}
