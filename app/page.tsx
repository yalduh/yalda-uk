import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background:
        "radial-gradient(1200px 600px at 10% -10%, rgba(99,102,241,.12), transparent 60%)," +
        "radial-gradient(900px 500px at 110% 10%, rgba(236,72,153,.10), transparent 60%)," +
        "radial-gradient(700px 400px at 50% 120%, rgba(34,197,94,.08), transparent 60%)",
      backgroundColor: "#0a0a0a",
      color: "#e5e5e5",
      textAlign: "center",
      padding: "24px"
    }}>
      <div>
        <h1 style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.02em" }}>
          yalda<span style={{ color: "#f0abfc" }}>.</span>uk
        </h1>
        <p style={{ marginTop: 12, color: "#a3a3a3" }}>
          a professional, personal universe — law · writing · music
        </p>

        <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.6 }}>
          I’m rebuilding my corner of the internet — part portfolio, part journal, part radio.
          No algorithms. Just me.
        </p>

        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
          <Link href="/radio" style={{
            padding: "12px 18px", borderRadius: 16, border: "1px solid #ffffff26",
            background: "#ffffff1a", textDecoration: "none", color: "inherit"
          }}>
            🎵 Radio
          </Link>
          <a href="mailto:hello@yalda.uk" style={{
            padding: "12px 18px", borderRadius: 16, border: "1px solid #ffffff26",
            textDecoration: "none", color: "inherit"
          }}>
            ✉️ Contact
          </a>
        </div>

        <p style={{ marginTop: 24, fontSize: 12, color: "#888" }}>
          Full site arriving soon. Meanwhile, tune in.
        </p>

        <p style={{ marginTop: 32, fontSize: 11, color: "#737373" }}>
          © {new Date().getFullYear()} Yalda
        </p>
      </div>
    </main>
  );
}
