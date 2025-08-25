export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0a1a2f",
      color: "#f2f2f2",
      textAlign: "center",
      fontFamily: "'Courier New', monospace",
    }}>
      <h1 style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "40px" }}>
        Coming Soon
      </h1>

      {/* Jumping Dino */}
      <span className="dino">🦕</span>

      {/* Hanging Sloth in the corner */}
      <span className="sloth">🦥</span>

      <style jsx>{`
        .dino {
          display: inline-block;
          font-size: 80px;
          margin-top: 40px;
          animation: jump 1s infinite;
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .sloth {
          position: absolute;
          top: 20px;
          right: 40px;
          font-size: 60px;
          display: inline-block;
          transform-origin: top center;
          animation: swing 2s infinite ease-in-out;
        }
        @keyframes swing {
          0% { transform: rotate(10deg); }
          50% { transform: rotate(-10deg); }
          100% { transform: rotate(10deg); }
        }
      `}</style>
    </main>
  );
}
