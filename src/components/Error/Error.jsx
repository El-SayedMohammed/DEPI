import React from "react";

export default function Error({ message }) {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <p style={{ color: "#ff4d4d", fontSize: "22px", fontWeight: "bold" }}>
         {message || " Please try again later."}
      </p>
    </div>
  );
}
