import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet ></Outlet >
      </main>
      <footer>This is footer</footer>
    </>
  );
}
 