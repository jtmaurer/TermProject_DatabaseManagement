"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

/**
 * Component for handling user registration. Includes validation and API submission.
 *
 * @returns {JSX.Element} The rendered component.
 */
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async () => {
    if (!username || !email || !password || !password2) {
      alert("All fields are required");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        alert("User registered successfully!");
        router.push("/login");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Registration failed");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signstuff">
      <div className="signLeft">
        <div className="signgo-to-log">
          <b>Welcome back</b>
          <button onClick={() => router.push("/login")}>Login</button>
        </div>
      </div>
      <div className="signRight">
        <div className="signHolder">
          <div className="signTitle">
            <b className="signbolded">Sign Up to Event Hive</b>
          </div>
          <label className="input-group">
            <p className="input-label">Your Name:</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="input-group">
            <p className="input-label">Email:</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="input-group">
            <p className="input-label">Password:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="input-group">
            <p className="input-label">Confirm Password:</p>
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </label>
          <div className="signup-button-holder">
            <button onClick={handleSignup} className="signup-button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
