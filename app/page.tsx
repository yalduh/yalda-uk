export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a1a2f", // deep navy
        color: "#f2f2f2",
        textAlign: "center",
        fontFamily: "'Monoton', cursive",
      }}
    >
      {/* Load Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
        rel="stylesheet"
      />

      <h1 style={{ fontSize: "80px", marginBottom: "40px" }}>
        Coming Soon
      </h1>

      {/* Jumping Dino */}
      <span className="dino">🦕</span>

      {/* Hanging Sloth */}
      <span className="sloth">🦥</span>

      <style jsx>{`
        .dino {
          display: inline-block;
          font-size: 100px;
          margin-top: 40px;
          animation: jump 1s infinite;
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        .sloth {
          position: absolute;
          top: 20px;
          right: 40px;
          font-size: 80px;
          transform-origin: top center;
          animation: swing 2s infinite ease-in-out;
        }
        @keyframes swing {
          0% { transform: rotate(15deg); }
          50% { transform: rotate(-15deg); }
          100% { transform: rotate(15deg); }
        }
      `}</style>
    </main>
  );
}
