import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./header";
import Login from "./login";
import Dashboard from "./Dashboard";
import Portfolio from "./Portfolio";

/**
 * Simple route guard. If not logged in -> alert & redirect to /login.
 * Alerts are plain window.alert as requested (fake JS alert).
 */
function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("obo_auth") === "true";
  const loc = useLocation();
  if (!isAuth) {
    // Fake alert and redirect
    window.alert("You must log in to view this page.");
    return <Navigate to="/login" state={{ from: loc }} replace />;
  }
  return children;
}

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PrivateRoute>
                <Portfolio />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
    </div>
  );
}
