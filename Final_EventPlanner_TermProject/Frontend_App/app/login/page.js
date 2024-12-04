"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../UserContext";
import "./page.css";

/**
 * Component for handling user login. Includes validation and authentication logic.
 *
 * @returns {JSX.Element} The rendered component.
 */
const LoginUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();

      // Set the user in context, including the email
      setUser({
        id: data.userId,
        username: data.username,
        email: data.email, // Include email
      });

      // Redirect based on username
      if (data.username === "admin") {
        router.push("/admin");
      } else {
        router.push("/homepage");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginstuff">
      <div className="loginRight">
        <div className="loginHolder">
          <div className="loginTitle">
            <b className="loginbolded">Sign In to Event Hive</b>
          </div>
          {error && <p className="error-message">{error}</p>}
          <label className="input-group">
            <p className="input-label">Your Email:</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="input-group">
            <p className="input-label">Your Password:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div className="loginup-button-holder">
            <button
              onClick={handleLogin}
              className="loginup-button"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </div>
        </div>
      </div>
      <div className="loginLeft">
        <div className="go-to-log">
          <b>New here?</b>
          <button onClick={() => router.push("/signup")}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginUp;
