import React from "react";
import "./Header.scss";
import LogoHeader from "../../assets/image/LogoHeader.svg";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <img src={LogoHeader} alt="Logo" className="logo" />
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
