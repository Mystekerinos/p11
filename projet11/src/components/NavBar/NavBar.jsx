import React from "react";
import "./NavBar.scss";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="Navbar">
      <div className="Nav-Buttons-Wrapper">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "home-page active" : "home-page"
          }
          page="home"
        >
          Accueil
        </Link>
        <Link
          to="/About"
          className={location.pathname === "/About" ? "about active" : "about"}
        >
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
