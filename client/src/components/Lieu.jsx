import "../scss/Lieu.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";


function Lieu ({ activites }) {
  // State pour stocker les activités filtrées
  const [activitesFiltrees, setActivitesFiltrees] = useState([]);

  // Effet pour filtrer les activités lorsque les données météo sont mises à jour
  useEffect(() => {
    // Filtrer les activités en fonction des icônes météorologiques
    const iconsMeteoAcceptees = ["01d.png", "02d.png", "03d.png", "04d.png"];
    const activitesFiltrees = activites.filter(
      (activite) =>
        iconsMeteoAcceptees.includes(activite.Météo) ||
        activite.Météo === "Toujours" || activite.Météo === "Soleil" 
    );
    setActivitesFiltrees(activitesFiltrees);
  }, [activites]);


  return (
    <>
      <h2 className="title-Lieu">Les bons plans d'activités </h2>
      <Carousel>
        {activitesFiltrees.map((slide) => (
          <div key={slide.Name}>
            <img src={slide.Image} alt={slide.Name} />
            <div className="overlay">
            <a href={slide.Lien} target="_blank"> <h2 className="overlay_title">{slide.Name}</h2></a>
               <p className="overlay_text">{slide.Description}</p>
             </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};



export default Lieu;
