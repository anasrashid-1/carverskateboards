import React from "react";
import "../SearchBar/SearchBar.css";
import whiteCarverLogo from "../Images/carverLogoFooter.png";

function Email() {
  return (
    <div className="logocontainer" style={{ marginTop: "15px" }}>
      <img
        src={whiteCarverLogo}
        alt="Carver Skateboards Logo"
        className="img"
      />
      <div className="Emailcontainer">
        <div className="innerContainer" style={{display : 'flex', alignItems : 'center'}}>
          <input type="text" placeholder="Email" style={{ height: "50px" }} />
          <button
            style={{ height: "50px", backgroundColor: "black", color: "white" }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Email;
