export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "navy",
        color: "white",
        fontSize: "48px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      Coming Soon

      {/* Jumping dino */}
      <div className="dino" style={{ fontSize: "96px" }}>🦕</div>

      {/* Hanging sloth in corner */}
      <div className="sloth" style={{ fontSize: "80px", position: "absolute", top: 20, right: 32 }}>
        🦥
      </div>

      {/* Plain CSS (not styled-jsx) */}
      <style>{`
        .dino {
          display: inline-block;
          animation: jump 1s infinite ease-in-out;
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
        }

        .sloth {
          display: inline-block;
          transform-origin: top center;
          animation: swing 2s infinite ease-in-out;
        }
        @keyframes swing {
          0% { transform: rotate(12deg); }
          50% { transform: rotate(-12deg); }
          100% { transform: rotate(12deg); }
        }
      `}</style>
    </main>
  );
}

