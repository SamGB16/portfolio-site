"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Work", href: "/#work", activePath: "/" },
  { label: "About", href: "/about", activePath: "/about" },
  { label: "Skills", href: "/skills", activePath: "/skills" },
  { label: "Contact", href: "mailto:samuel@example.com", activePath: "" },
];

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: "var(--font-label)",
        textTransform: "uppercase",
        letterSpacing: "0.10em",
        color: isActive || hovered ? "var(--text)" : "var(--muted)",
        transition: "color 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--bg)",
        height: "56px",
        padding: "0 2rem",
        borderBottom: "0.5px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "18px",
          fontWeight: 500,
          color: "var(--text)",
        }}
      >
        SB
      </Link>
      <div style={{ display: "flex", gap: "2rem" }}>
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            href={link.href}
            label={link.label}
            isActive={link.activePath !== "" && pathname === link.activePath}
          />
        ))}
      </div>
    </nav>
  );
}
