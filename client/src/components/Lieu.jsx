import "../scss/Lieu.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Lieu({ activites, icon }) {
  const [activitesFiltrees, setActivitesFiltrees] = useState([]);
  useEffect(() => {
    const iconsMeteoBeauTemps = ["01d", "02d", "03d", "04d"];
    const iconsMeteoMauvaisTemps = ["09d", "10d", "11d", "13d", "50d"];

    if (iconsMeteoBeauTemps.includes(icon)) {
      const activitesBeauTemps = activites.filter(
        (activite) =>
          activite.meteo === "Toujours" || activite.meteo === "Soleil"
      );

      setActivitesFiltrees(activitesBeauTemps);
    } else if (iconsMeteoMauvaisTemps.includes(icon)) {
      const activitesMauvaisTemps = activites.filter(
        (activite) =>
          activite.meteo === "Toujours" || activite.meteo === "Pluie"
      );
      setActivitesFiltrees(activitesMauvaisTemps);
    }
  }, [activites, icon]);

  return (
    <>
      <h2 className="title-Lieu">Les bons plans d'activités </h2>
      <div className="div_caroussel">
        <Carousel>
          {activitesFiltrees.map((slide) => (
            <div key={slide.name}>
              <img src={slide.image} alt={slide.name} />
              <div className="overlay">
                <a href={slide.lien} target="_blank" rel="noreferrer">
                  {" "}
                  <h2 className="overlay_title">{slide.name}</h2>
                </a>
                <p className="overlay_text">{slide.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="div_desktop">
        {activitesFiltrees.map((slide) => (
          <div className="lieu_all_components" key={slide.name}>
            <a href={slide.lien} target="_blank" rel="noreferrer">
              <img className="lieu_image" src={slide.image} alt={slide.name} />
            </a>
            <div className="lieu_title_text">
              <h2 className="lieu_title">{slide.name}</h2>
              <p className="lieu_text">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Lieu.propTypes = {
  activites: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      lien: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      meteo: PropTypes.string.isRequired,
    })
  ).isRequired,

  icon: PropTypes.string,
};
export default Lieu;
