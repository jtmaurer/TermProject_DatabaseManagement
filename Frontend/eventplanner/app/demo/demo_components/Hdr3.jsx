import React, { useContext } from "react";
import "./Hdr.css";
import { useRouter } from "next/navigation";
import { UserContext } from "../../UserContext";

const Hdr3 = () => {
  const router = useRouter();
  const { logout } = useContext(UserContext); // Access logout function from context

  const handleLogout = () => {
    if (typeof logout === "function") {
      logout(); // Clear user session
      router.push("../demo/login"); // Redirect to login page
    } else {
      console.error("Logout function is not defined in UserContext.");
    }
  };

  return (
    <nav>
      <div className="navba">
        <div className="logoeh">
          <b>Event</b>
          <b className="hive">Hive</b>
        </div>

        <div className="middleBut">
          <div className="green2">
            <button type="button" onClick={() => router.push("../demo/home")}>
              Home
            </button>
          </div>
          <div className="green2">
            <button type="button" onClick={() => router.push("../demo/myevents")}>
              My Events
            </button>
          </div>
          <div className="green2">
            <button type="button" onClick={() => router.push("../demo/account")}>
              My Account
            </button>
          </div>
        </div>

        <div className="middleHdr">
          <div className="green">
            <button type="button" onClick={handleLogout}>
              LogOut
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Hdr3;
