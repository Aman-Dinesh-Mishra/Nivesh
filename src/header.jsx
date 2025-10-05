import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("obo_auth") === "true";

  function handleLogout() {
    localStorage.removeItem("obo_auth");
    localStorage.removeItem("obo_user");
    window.alert("Logged out.");
    navigate("/login");
  }

  return (
    <header className="site-header">
      <div className="logo">Nivesh AI </div>

      <nav className="nav">
        {}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </NavLink>

        {}
        {isAuth && (
          <button onClick={handleLogout} className="nav-logout">
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
