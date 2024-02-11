import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div id="page-not-found">
      <Header />
      <h1 className="">404</h1>
      <h2 className="subTitle">Oups! La page que </h2>
      <h2 className="subTitle">vous demandez n'existe pas.</h2>
      <div className="return-to-home">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
