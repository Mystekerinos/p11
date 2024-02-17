import React from "react";
import LogoFooter from "../../assets/image/LogoFooter.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <img className="footerImage" src={LogoFooter} alt="Logo" />
      <p>© 2020 kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
