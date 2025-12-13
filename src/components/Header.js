import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="res-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              // btnName = "Logout";
              let tempbtn = btnName === "Login" ? "Logout" : "Login";
              setbtnName(tempbtn);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
