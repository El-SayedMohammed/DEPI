import React from "react";
import notFoundImg from "../../assets/image.png";

export default function NotFound() {
  return (
    <div>
      <h1 style={{ color: "red" }}>404 Not Found</h1>
      <img
        src={notFoundImg}
        alt="not found"
      />
    </div>
  );
}