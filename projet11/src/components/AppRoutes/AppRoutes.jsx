import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import About from "../../pages/About/About";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import AccomodationSheet from "../../pages/AccomodationSheet/AccomodationSheet";

const AppRoutes = () => {
  return (
    <div className="app-routes">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accueil" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/accomodation-sheet/:id"
            element={<AccomodationSheet />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
