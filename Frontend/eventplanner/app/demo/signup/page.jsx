// src/app/signup/page.jsx

"use client";

import "./page.css";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../demo_contexts/UserContext";

const Signup = () => {
  // Form state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // State for handling loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Access context to set user_id
  const { setUserId } = useContext(UserContext);

  const router = useRouter();

  // Handler for signup button click
  const handleSignup = async () => {
    // Reset error state
    setError("");

    // Basic form validation
    if (!username || !email || !password || !password2) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== password2) {
      setError("Passwords do not match.");
      return;
    }

    // Optional: Add more validation (e.g., email format, password strength)

    // Set loading state
    setLoading(true);

    try {
      // Construct the API URL with query parameters
      const apiUrl = `http://localhost:8080/register?username=${encodeURIComponent(
        username
      )}&password=${encodeURIComponent(password)}&email=${encodeURIComponent(
        email
      )}`;

      // Make the API call
      const response = await fetch(apiUrl);

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        // Extract error message from response
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed.");
      }

      // Parse the JSON response
      const data = await response.json();

      // Extract userId from the response
      const { userId } = data;

      if (typeof userId === "string") {
        userId = Number(userId);
        if (isNaN(userId)) {
          throw new Error("Received userId is not a valid number.");
        }
      }

      console.log(typeof(userId), "**********************************************************************")

      if (!userId) {
        throw new Error("Invalid response from server.");
      }

      // Update the user_id in context
      setUserId(userId);

      // Optionally, store userId in localStorage for persistence
      // localStorage.setItem("user_id", userId);

      // Redirect to home page
      router.push("/demo/home");
    } catch (err) {
      // Handle errors (e.g., network issues, server errors)
      setError(err.message);
      console.error("Signup error:", err);
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  return (
    <div className="signstuff">
      <div className="signLeft">
        <div className="go-to-log">
          <b>Welcome back</b>
          <button onClick={() => router.push("/demo/login")}>Login</button>
        </div>
      </div>

      <div className="signRight">
        <div className="signHolder">
          <div className="signTitle">
            <b className="signbolded"> Sign Up to Event Hive</b>
          </div>

          {/* Display error message if any */}
          {error && <p className="error-message">{error}</p>}

          <label className="input-group">
            <p className="input-label">Username:</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="input-group">
            <p className="input-label">Email:</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="input-group">
            <p className="input-label">Password:</p>
            <input
              type="password" // Changed to password for security
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label className="input-group">
            <p className="input-label">Confirm Password:</p>
            <input
              type="password" // Changed to password for security
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </label>
          <div className="signup-button-holder">
            <button
              onClick={handleSignup} // Changed to call handleSignup
              className="signup-button"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
