import React from "react";
import "./Hdr.css";
import { useRouter } from "next/navigation";

const Hdr3 = () => {
  const router = useRouter();
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
              {" "}
              Home{" "}
            </button>
          </div>
          <div className="green2">
            <button type="button" onClick={() => router.push("../demo/myevents")}>
              {" "}
              My Events{" "}
            </button>
          </div>
          <div className="green2">
            <button type="button" onClick={() => router.push("../demo/account")}>
              {" "}
              My Account{" "}
            </button>
          </div>
        </div>

        <div className="middleHdr">
          <div className="green">
            <button type="button" onClick={() => router.push("../demo/login")}>
              {" "}
              LogOut{" "}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Hdr3;
