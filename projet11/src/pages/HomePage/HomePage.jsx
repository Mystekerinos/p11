import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import "./HomePage.scss";

import { Link } from "react-router-dom";
import housing from "../../data/housing.json";

const HomePage = () => {
  return (
    <>
      <div id="homePage">
        <Header />
        <Banner homePage={true} />
        <div className="housing-list">
          {housing.map((logement, index) => (
            <Link
              to={`/accomodation-sheet/${logement.id}`}
              key={logement.id}
              className="housing-box"
            >
              <img src={logement.cover} alt={logement.title} className="logo" />

              <p className="title">{logement.title}</p>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
