import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function Shop() {
  return (
    <div>
      <h1>Shop Page</h1>
      <div style={{ display: "flex", gap: "50px" }}>
        <aside>
          <NavLink
            className={({ isActive }) =>
              isActive ? "categoryNavLinkActive" : "categoryNavLinkInactive"
            }
            to="laptop"
          >
            Laptop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "categoryNavLinkActive" : "categoryNavLinkInactive"
            }
            to="phone"
          >
            phone
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "categoryNavLinkActive" : "categoryNavLinkInactive"
            }
            to="screen"
          >
            screen
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "categoryNavLinkActive" : "categoryNavLinkInactive"
            }
            to="tv"
          >
            tv
          </NavLink>
        </aside>
        <div className="outlet-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}