import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/NavBar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar-area">
      <div className="container">
        <nav className="site-navbar">
          {/* site logo */}
          <a href="#inicio" className="site-logo">
            Pedro
          </a>

          {/* site menu/nav */}
          <ul className={menuOpen ? "open" : ""} onClick={closeMenu}>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre Mi</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#portfolio">Portafolio</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>

          {/* nav-toggler for mobile version only */}
          <button
            className={`nav-toggler ${menuOpen ? "toggler-open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
