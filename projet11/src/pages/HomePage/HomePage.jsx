import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Banner from "../../components/Banner/Banner";
import "./HomePage.scss";

import { Link } from "react-router-dom";
import housing from "../../data/housing.json";

const HomePage = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default HomePage;
