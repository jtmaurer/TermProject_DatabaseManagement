"use client";
import "./page.css";
import React, { useEffect, useContext } from "react";
import Hdr from "../component/Hdr2";
import Footer from "../component/components/Footer";
import { UserContext } from "../UserContext";
import { useRouter } from "next/navigation";

/**
 * Component for displaying and managing the user's account details.
 * Includes profile information and logout functionality.
 *
 * @returns {JSX.Element} The rendered component.
 */
const AccountPage = () => {
  const { user, logout } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    console.log("User in AccountPage:", user);
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  /**
   * Logs out the user and redirects to the login page.
   */
  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="dashstuff">
      <Hdr />
      <div className="dashpager">
        <div className="dashmiddlez">
          <div className="dashmiddle11">
            <div className="dashbordss">
              <h1 className="dashbords11">My Account</h1>
            </div>
          </div>

          <div className="dashmiddle33">
            <div className="dashprofile-section">
              <div className="dashprofile-image">
                <img
                  src={
                    "https://i.gyazo.com/4446d7ff66010b8a004b3a94b592e7a3.png"
                  }
                  alt="Profile"
                />
              </div>
              <div className="dashprofile-info">
                <h2>Username: {user?.username || "Not Available"}</h2>
                <p>Email: {user?.email || "Email not available"}</p>
              </div>
            </div>

            <div className="dashactions">
              <button className="dashaction-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dashfoot">
        <Footer />
      </div>
    </div>
  );
};

export default AccountPage;
