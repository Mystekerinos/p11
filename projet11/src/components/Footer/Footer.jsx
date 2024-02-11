import React from "react";
import LogoFooter from "../../assets/image/LogoFooter.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <img src={LogoFooter} alt="Logo" />
        <p>© 2020 kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
