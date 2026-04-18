import React from "react";

export default function Loading() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <div className="spinner"></div>
      <p style={{ color: "teal", marginTop: "15px", fontSize: "18px" }}>Loading...</p>
    </div>
  );
}
