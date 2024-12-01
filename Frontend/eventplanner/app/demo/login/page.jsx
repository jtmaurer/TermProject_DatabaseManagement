"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../../UserContext";

const LoginUp = () => {
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for handling loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Access context to set user
  const { setUser } = useContext(UserContext);

  const router = useRouter();

  // Handler for login button click
  const handleLogin = async () => {
    // Reset error state
    setError("");

    // Basic form validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Set loading state
    setLoading(true);

    try {
      // Construct the API URL with query parameters
      const apiUrl = `http://localhost:8080/login?username=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`;

      // Make the API call
      const response = await fetch(apiUrl);

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed.");
      }

      // Parse the JSON response
      const data = await response.json();

      // Extract user details from the response
      const { userId, username } = data;

      if (!userId || !username) {
        throw new Error("Invalid response from server.");
      }

      // Update the user object in context
      setUser({ id: userId, username });

      // Redirect to home page
      router.push("/demo/home");
    } catch (err) {
      // Handle errors (e.g., network issues, server errors)
      setError(err.message);
      console.error("Login error:", err);
    } finally {
      // Reset loading state
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

          {/* Display error message if any */}
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
            <div className="loginPass">
              <p className="input-label">Your Password:</p>
              <div>Forgot your password?</div>
            </div>
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
              disabled={loading} // Disable button while loading
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </div>
        </div>
      </div>

      <div className="loginLeft">
        <div className="go-to-log">
          <b>New here?</b>
          <button onClick={() => router.push("/demo/signup")}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginUp;
