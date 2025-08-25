export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0a1a2f", // deep navy blue
      color: "#f2f2f2",
      fontFamily: "'Courier New', monospace", // gives a retro/psychedelic 60s feel
      textTransform: "uppercase",
      letterSpacing: "0.2em"
    }}>
      <h1 style={{
        fontSize: "64px",
        fontWeight: "bold",
        textShadow: "0 0 15px rgba(255,255,255,0.2)"
      }}>
        Coming Soon
      </h1>
    </main>
  );
}
