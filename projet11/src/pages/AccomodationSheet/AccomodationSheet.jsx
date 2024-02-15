import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import housing from "../../data/housing.json";
import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import Slide from "../../components/Slide/Slide";
import "./AccomodationSheet.scss";

const AccomodationSheet = () => {
  const { id } = useParams();
  const selectedHousing = housing.find((item) => item.id === id);

  if (!selectedHousing) {
    return <PageNotFound />;
  }
  return (
    <section>
      <Header />

      <div className="accomodationSheet">
        <Slide
          Photos={selectedHousing.pictures}
          totalNumberOfPhotos={selectedHousing.pictures}
        />

        <div className="accomodationSheet__content">
          <div className="group-element-left">
            <h1 className="title">{selectedHousing.title}</h1>
            <p className="location">{selectedHousing.location}</p>
            <div className="tags-list-wrapper">
              {selectedHousing.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="group-elements-right">
            <div className="name-photo-wrapper">
              <div className="host-name">{selectedHousing.host.name}</div>
              <img
                className="host-photo"
                src={selectedHousing.host.picture}
                alt={selectedHousing.host.name}
              />
            </div>
            <Rating rating={selectedHousing.rating} />
          </div>
        </div>
        <div className="accomodationSheet__collapse">
          <div className="list-item-accomodationSheet">
            <Collapse
              title="description"
              text={<p>{selectedHousing.description}</p>}
            />
          </div>
          <div className="list-item-accomodationSheet">
            <Collapse
              title="équipement"
              text={selectedHousing.equipments.map((key) => {
                return <p>{key}</p>;
              })}
            />
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};
export default AccomodationSheet;
