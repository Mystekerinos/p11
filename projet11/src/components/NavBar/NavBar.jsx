import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <div className="nav-bar-words">
            <li>
              <Link to={`/accueil`}>Accueil</Link>
            </li>
            <li>
              <Link to={`/about`}>A Propos</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
