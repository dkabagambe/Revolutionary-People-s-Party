import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="RPP" />
          </Link>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {[
            "/",
            "/about",
            "/leadership",
            "/news",
            "/contact",
            "/membership",
          ].map((path, index) => (
            <Link
              key={index}
              to={path}
              className="nav-link"
              onClick={closeMenu}
            >
              {path === "/"
                ? "Home"
                : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
          <button className="close-btn" onClick={closeMenu}>
            ×
          </button>
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
