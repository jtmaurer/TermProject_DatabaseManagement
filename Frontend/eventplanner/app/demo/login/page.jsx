"use client";
import "./page.css";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../demo_contexts/UserContext";

const loginup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // State for handling loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Access context to set user_id
  const { setUserId } = useContext(UserContext);

  const router = useRouter();

  // Handler for signup button click
  const handleLogin = async () => {
    // Reset error state
    setError("");

    // Basic form validation
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    // Set loading state
    setLoading(true);

    try {
      // Construct the API URL with query parameters
      const apiUrl = `http://localhost:8080/login?username=${encodeURIComponent(
        username
      )}&password=${encodeURIComponent(password)}`;

      // Make the API call
      const response = await fetch(apiUrl);

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        // Extract error message from response
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed.");
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

      console.log(
        typeof userId,
        "**********************************************************************"
      );

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
    <div className="loginstuff">
      <div className="loginRight">
        <div className="loginHolder">
          <div className="loginTitle">
            <b className="loginbolded"> Sign In to Event Hive</b>
          </div>

          <label className="input-group">
            <p className="input-label">Your Username:</p>
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="input-group">
            <div className="loginPass">
              <p className="input-label"> Your Password:</p>
              <div> Forgot your password? </div>
            </div>

            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="login-button-holder">
            <button
              onClick={handleLogin} // Changed to call handleSignup
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
          <b>Welcome back</b>
          <button onClick={() => router.push("/demo/signup")}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default loginup;
