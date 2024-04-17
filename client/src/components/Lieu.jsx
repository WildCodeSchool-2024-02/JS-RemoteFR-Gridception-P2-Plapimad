import "../scss/Lieu.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";


function Lieu ({activites , icon}) {

  // State pour stocker les activités filtrées
  const [activitesFiltrees, setActivitesFiltrees] = useState([]);

 // Effet pour filtrer les activités lorsque les données météo sont mises à jour
    useEffect(() => {
 // Filtrer les activités en fonction des icônes météorologiques
     const iconsMeteoBeauTemps = ["01d", "02d", "03d", "04d"];
      const iconsMeteoMauvaisTemps = ["09d", "10d", "11d", "13d", "50d"];

      if (iconsMeteoBeauTemps.includes(icon)){
        const activitesBeauTemps = activites.filter(
          (activite) =>
          activite.Météo === "Toujours" || activite.Météo === "Soleil"
      );
      console.log(activitesBeauTemps);
      setActivitesFiltrees(activitesBeauTemps);

    } 
    else if(iconsMeteoMauvaisTemps.includes(icon)){
        const activitesMauvaisTemps = activites.filter(
          (activite) =>
          activite.Météo === "Toujours" || activite.Météo === "Pluie"
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
      {activitesFiltrees.map((slide) => (
      
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
}



export default Lieu;
