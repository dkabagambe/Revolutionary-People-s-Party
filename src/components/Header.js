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
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/leadership", label: "Leadership" },
            { path: "/news", label: "News" },
            { path: "/contact", label: "Contact" },
            { path: "/membership", label: "Register" },
            { path: "/", label: "Donate", isButton: true },
          ].map(({ path, label, isButton }, index) => (
            <Link
              key={index}
              to={path}
              className={isButton ? "donate-btn" : "nav-link"}
              onClick={closeMenu}
            >
              {label}
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
