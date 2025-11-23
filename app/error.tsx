"use client";
import React from "react";

export default function RootError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 20, marginBottom: 12 }}>Something went wrong</h1>
      <pre style={{ whiteSpace: "pre-wrap", color: "#c53030" }}>
        {error?.message}
      </pre>
      <button
        onClick={() => reset?.()}
        style={{ marginTop: 12, padding: "8px 12px", borderRadius: 6 }}
      >
        Try again
      </button>
    </div>
  );
}
