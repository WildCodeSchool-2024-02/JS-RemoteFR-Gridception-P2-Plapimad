import ChateauC from "../assets/images/Chateau-chenonceau.jpg";
import Festival from "../assets/images/terres-du-son.avif";
import EscapeGame from "../assets/images/EscapeGame.jpeg";
import Shopping from "../assets/images/Shopping.jpeg";
import DomaineViticole from "../assets/images/Domaine-viticole.jpeg";
import PlacePlumereau from "../assets/images/Place-Plumereau.jpeg";
import "../scss/Lieu.scss";

function Lieu({ activitesListe }) {
  return (
    <div>
      <h2>Les activités bon plans </h2>
      <div className="lieu-container">
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
      </div>
    </div>
  );
}

const activitesListe = [
  {
    Name: "Château de Chenonceau",
    Description: "Visite du Château ainsi que de ces jardins.",
    Lien: "https://www.chenonceau.com/",
    Meteo: "Soleil / Pluie",
    Image: { ChateauC },
  },
  {
    Name: "Place Plumereau Tours",
    Description: "Visite du vieux Tours et des quartiers historiques.",
    Lien: "https://www.touraineloirevalley.com/vieux-tours-place-plumereau-quartiers-historiques-bien-vivants/",
    Meteo: "Soleil / Pluie",
    Image: { PlacePlumereau },
  },
  {
    Name: "Château Gaudrelle",
    Description: "Visite de domaines viticoles.",
    Lien: "https://www.touraineloirevalley.com/producteurs-locaux/chateau-gaudrelle-rochecorbon/",
    Meteo: "Soleil / Pluie",
    Image: { DomaineViticole },
  },
  {
    Name: "Rue Natioanale de Tours",
    Description: "Un moment shopping en ville.",
    Lien: "https://www.tripadvisor.fr/Attraction_Review-g187130-d246693-Reviews-Rue_Nationale-Tours_Indre_et_Loire_Centre_Val_de_Loire.html",
    Meteo: "Soleil /Pluie",
    Image: { Shopping },
  },
  {
    Name: "Escape Game",
    Description: "Un moment ludique entre amis où en famille.",
    Lien: "https://escapetime-tours.fr/",
    Meteo: "Pluie",
    Image: { EscapeGame },
  },
];

export default Lieu;
