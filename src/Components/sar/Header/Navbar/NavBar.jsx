import React, { useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faUser,
    faBars,
    faCartShopping,
    faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import carverLogo from "../../Images/carverLogo.png";
import SearchBar from "../../SearchBar/SearchBar";
import Accessories from "../../Dropdown/Accessories";
import Surfskates from "../../Dropdown/Surfskates";

import { Link } from "react-router-dom";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className="navbar">
                <label
                    htmlFor="menu-toggle"
                    className={`menu-icon ${showMenu ? "active" : ""}`}
                    onClick={handleMenuToggle}
                >
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <div className="navbar-logo">

                    <img src={carverLogo} alt="Carver Skateboards Logo" />
                    <div className="Carver"> <Link to='/' style={{ textDecoration: 'none', color: 'white' }} >Carver</Link> </div>
                </div>
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <ul className={`navbar-links ${showMenu ? "show" : ""}`}>
                    <li className="navbar-link dropdown">
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "white",
                                hover: { color: "aqua" },
                            }}
                            to="/products"
                        >
                            Surfskates
                        </Link>
                        {/* <FontAwesomeIcon icon={faAngleDown} style={{color: "#ffffff"}} /> */}
                        {/* <Surfskates/> */}
                    </li>
                    <li className="navbar-link dropdown">
                        Accessories
                        <FontAwesomeIcon icon={faAngleDown} style={{ color: "#ffffff" }} />
                        <Accessories />
                    </li>
                    <li className="navbar-link">Garage</li>
                    <li className="navbar-link">Videos</li>
                    <li className="navbar-link">Retailers</li>
                </ul>
                <ul className="icons">
                    <li className="icon-link"
                        onClick={(e) => {
                            if (e.target.parentElement.className !== "innerContainer") {
                                setShowSearchBar(!showSearchBar);
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                        {showSearchBar && showMenu === false && <SearchBar />}
                    </li>
                    <li className="icon-link">
                        <Link to={'/signin'}
                            style={{
                                textDecoration: "none",
                                color: "white",
                                hover: { color: "aqua" },
                            }}><FontAwesomeIcon icon={faUser} /></Link>
                    </li>
                    <li className="icon-link">
                        <Link to={'/cart'}
                            style={{
                                textDecoration: "none",
                                color: "white",
                                hover: { color: "aqua" },
                            }}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;