import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("obo_auth", "true");
    localStorage.setItem("obo_user", JSON.stringify({ name: form.name }));
    alert("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Nivesh AI</h1>
        <p className="hero-subtitle">
          Your AI-powered, transparent financial advisor. Personalize your
          wealth journey with intelligent insights tailored just for you.
        </p>
        <div className="hero-tags">
          <span className="hero-tag">Trusted AI</span>
          <span className="hero-tag">Secure Platform</span>
          <span className="hero-tag">Personalized Advice</span>
        </div>

        {/* Show Get Started button only if login form is hidden */}
        {!showLogin && (
          <button className="btn-primary" onClick={() => setShowLogin(true)}>
            Get Started
          </button>
        )}
      </div>

      {/* Conditionally render Login Form Section */}
      {showLogin && (
        <div className="login-wrap">
          <div className="login-card">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button className="btn-primary" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
