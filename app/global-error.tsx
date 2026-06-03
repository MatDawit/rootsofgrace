"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background: "#f4efeb",
          color: "#1c1b1b",
          fontFamily: "var(--font-body), sans-serif",
        }}
      >
        <main style={{ maxWidth: "42rem", textAlign: "center" }}>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            Something went wrong
          </h1>
          <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
            We could not load this page right now. Please try again.
          </p>
          <button
            onClick={reset}
            type="button"
            style={{
              marginTop: "1.5rem",
              minHeight: "2.8rem",
              padding: "0.75rem 1.25rem",
              borderRadius: "0.2rem",
              border: "1px solid #1c1b1b",
              background: "transparent",
              cursor: "pointer",
              font: "inherit",
            }}
          >
            Retry
          </button>
        </main>
      </body>
    </html>
  );
}
