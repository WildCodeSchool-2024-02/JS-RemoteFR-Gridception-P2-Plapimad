import "../scss/Lieu.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";


function Lieu ({activites}) {
  // State pour stocker les activités filtrées
  const [activitesFiltrees, setActivitesFiltrees] = useState([]);

  // Effet pour filtrer les activités lorsque les données météo sont mises à jour
  // useEffect(() => {
  //   // Filtrer les activités en fonction des icônes météorologiques
  //   const iconsMeteoAcceptees = ["01d.png", "02d.png", "03d.png", "04d.png"];

  //   if (iconsMeteoAcceptees.includes(icon)){
  //     const activitesFiltrees = activites.filter(
  //       (activite) =>
  //         activite.Météo === "Toujours" || activite.Météo === "Soleil"
  //     );
  //     setActivitesFiltrees(activitesFiltrees);
  //   } [activites];
  // });
    
    

  return (
    <>
      <h2 className="title-Lieu">Les bons plans d'activités </h2>
      <div className="div_caroussel">
      <Carousel>
        {activites.map((slide) => (
          <div key={slide.Name}>
            <img src={slide.Image} alt={slide.Name} />
            <div className="overlay">
            <a href={slide.Lien} target="_blank"> <h2 className="overlay_title">{slide.Name}</h2></a>
               <p className="overlay_text">{slide.Description}</p>
             </div>
          </div>
          
        ))}
      </Carousel>
      </div>

      <div className="div_desktop">
      {activites.map((slide) => (
      
          <div className="lieu_all_components" key={slide.Name}>
             <a href={slide.Lien} target="_blank"><img className="lieu_image" src={slide.Image} alt={slide.Name} /></a>
            <div className="lieu_title_text">
            <h2 className="lieu_title">{slide.Name}</h2>
               <p className="lieu_text">{slide.Description}</p>
             </div>
          </div>
          
        ))}

      </div>
    </>
  );
};



export default Lieu;
