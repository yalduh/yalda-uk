import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "yalda.uk",
  description: "Yalda — law, music, notes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#0a1633", // dark navy
          color: "white",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
