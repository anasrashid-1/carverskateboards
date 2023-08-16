import React from "react";
import '../Header/Navbar/NavBar.css'
const Accessories = () => {
  return (
    <div className="dropdown-menu">
    
      <ul className="dropdown-options" style={{ listStyleType: 'none' ,color: "#fff",}}>
        <li className="dropdown-option">Parts</li>
        <li className="dropdown-option">All Accessories</li>
     
      </ul>
    </div>
  );
};

export default Accessories;
