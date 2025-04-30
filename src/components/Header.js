// --- components/Header.js ---
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="RPP)" />
          </Link>
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/news" className="nav-link">
            Newsroom
          </Link>
          <Link to="/issues" className="nav-link">
            Issues
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/membership" className="nav-link">
            Register
          </Link>
        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
