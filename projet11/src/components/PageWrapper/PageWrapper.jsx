import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./PageWrapper.scss";

const PageWrapper = ({ children }) => {
  return (
    <div className="pageContent">
      <div className="pageInnerContent">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default PageWrapper;
