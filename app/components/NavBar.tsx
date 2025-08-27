"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/radio", label: "Radio" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(10,22,51,0.85)", // dark navy translucent
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          color: "white",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "white", fontWeight: 700 }}>
          yalda.uk
        </Link>

        <div style={{ display: "flex", gap: 18 }}>
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: 14,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  padding: "6px 4px",
                  borderBottom: active ? "2px solid white" : "2px solid transparent",
                  opacity: active ? 1 : 0.8,
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
