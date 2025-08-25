import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({ weight: "700", subsets: ["latin"] });

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
        backgroundColor: "#0a1633", // dark navy blue
        color: "white",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Coming Soon headline */}
      <h1
        className={cinzel.className}
        style={{
          fontSize: "100px",
          textShadow: "0 0 10px rgba(255,255,255,0.5), 2px 2px 6px rgba(0,0,0,0.6)",
        }}
      >
        Coming Soon
      </h1>

      {/* Jumping Dino */}
      <div className="dino" style={{ fontSize: "120px" }}>🦕</div>

      {/* Hanging Sloth */}
      <div className="sloth" style={{ fontSize: "90px", position: "absolute", top: 20, right: 32 }}>
        🦥
      </div>

      <style>{`
        .dino {
          display: inline-block;
          animation: jump 1s infinite ease-in-out;
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-28px); }
        }

        .sloth {
          display: inline-block;
          transform-origin: top center;
          animation: swing 2.5s infinite ease-in-out;
        }
        @keyframes swing {
          0% { transform: rotate(14deg); }
          50% { transform: rotate(-14deg); }
          100% { transform: rotate(14deg); }
        }
      `}</style>
    </main>
  );
}
