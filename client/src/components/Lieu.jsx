import "../scss/Lieu.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Lieu() {
  return (
    <>
      <h2>Les activités bon plans </h2>
      <Carousel>
        {activitesListe.map((slide) => (
          <div key={slide.Name}>
            <img src={slide.Image} alt={slide.Name} />
            <div className="overlay">
              <h2 className="overlay_title">{slide.Name}</h2>
              <p className="overlay_text">{slide.Description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

/* <div className="lieu-container">
        <a
          className="box-activite1"
          href="https://www.chenonceau.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ChateauC} alt="chateau chenonceau" />
        </a>

        <a href="https://www.terresduson.com" target="_blank" rel="noreferrer">
          <img src={Festival} alt="Imga festival" />
        </a>
      </div> */

const activitesListe = [
  {
    Name: "Château de Chenonceau",
    Description: "Visite du Château ainsi que de ces jardins.",
    Lien: "https://www.chenonceau.com/",
    Image:
      "https://cdn.pixabay.com/photo/2020/06/27/07/15/chenonceau-5344916_1280.jpg",
  },
  {
    Name: "Place Plumereau Tours",
    Description: "Visite du vieux Tours et des quartiers historiques.",
    Lien: "https://www.touraineloirevalley.com/vieux-tours-place-plumereau-quartiers-historiques-bien-vivants/",
    Image:
      "https://reservation.tours-tourisme.fr/medias/images/prestations/visite-guidee-le-vieux-tours-place-plumereau-23813.jpg",
  },
  {
    Name: "Château Gaudrelle",
    Description: "Visite de domaines viticoles.",
    Lien: "https://www.touraineloirevalley.com/producteurs-locaux/chateau-gaudrelle-rochecorbon/",
    Image:
      "https://www.enpaysdelaloire.com/sites/default/files/styles/ogimage/public/mediatheque/images/sem_0015558_MD.jpg?itok=nR1dCcT2",
  },
  {
    Name: "Rue Natioanale de Tours",
    Description: "Un moment shopping en ville.",
    Lien: "https://www.tripadvisor.fr/Attraction_Review-g187130-d246693-Reviews-Rue_Nationale-Tours_Indre_et_Loire_Centre_Val_de_Loire.html",
    Image:
      "https://tse4.mm.bing.net/th?id=OIP.LDNhF1tRNeRmehzDIKGoFwHaE8&pid=Api",
  },
  {
    Name: "Escape Game",
    Description: "Un moment ludique entre amis où en famille.",
    Lien: "https://escapetime-tours.fr/",
    Image:
      "https://www.paris-annuaire.com/design/uploads/2018/12/escape-game.jpg",
  },
];

export default Lieu;
