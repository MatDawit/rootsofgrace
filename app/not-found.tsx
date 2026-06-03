import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background: "#f4efeb",
        color: "#1c1b1b",
      }}
    >
      <div style={{ maxWidth: "40rem", textAlign: "center" }}>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-label), sans-serif",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontSize: "0.75rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            margin: "0.6rem 0 0",
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Page not found
        </h1>
        <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
          The page you requested does not exist.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: "1.5rem",
            minHeight: "2.8rem",
            lineHeight: "2.8rem",
            padding: "0 1.2rem",
            borderRadius: "0.2rem",
            border: "1px solid #1c1b1b",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
