import React from "react";
import "./Banner.scss";
import BackgroundHome from "../../assets/image/BackgroundHome.svg";
import BackgroundAbout from "../../assets/image/BackgroundAbout.svg";

const Banner = ({ homePage }) => {
  const bannerImage = homePage ? (
    <>
      <img src={BackgroundHome} alt="background" />
      <div className="banner__overlay">
        <h1 className="head-line">Chez vous, partout et ailleurs</h1>
      </div>
    </>
  ) : (
    <img src={BackgroundAbout} alt="background" />
  );

  return <div className="banner">{bannerImage}</div>;
};

export default Banner;
