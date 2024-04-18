import resto1 from "../assets/images/LOpidom.jpg";
import resto2 from "../assets/images/levidence.webp";
import resto3 from "../assets/images/Arboreetsens.jpg";
import resto4 from "../assets/images/chateaupray.jpg";
import resto5 from "../assets/images/PomPoire.jpg";
import resto6 from "../assets/images/vincent.jpeg";
import resto7 from "../assets/images/laboureur.jpg";
import resto8 from "../assets/images/hautesroches.jpeg";

import "../scss/Restaurants.scss";

const restoListe = [
  {
    nom: "L'Opidom",
    adresse: "4 quai de la Guignière, Fondettes, 37230, France",
    image: <img src={resto1} alt="Lopidom" />,
  },
  {
    nom: "L'Évidence",
    adresse: "1 place des Marronniers, Montbazon, 37250, France",
    image: <img src={resto2} alt="Levidence" />,
  },
  {
    nom: "Arbore-et-sens",
    adresse: "22 Rue Balzac, 37600 Loches",
    image: <img src={resto3} alt="arbore" />,
  },
  {
    nom: "Château de Pray",
    adresse: "rue du Cèdre, à Chargé, Amboise, 37530, France",
    image: <img src={resto4} alt="chateau de pray" />,
  },
  {
    nom: "l’Auberge Pom’Poire",
    adresse: "21 Rte de Valleres, 37190 Azay-le-Rideau",
    image: <img src={resto5} alt="l’Auberge Pom’Poire" />,
  },
  {
    nom: "Vincent cuisinier de campagne",
    adresse: "19 Rue de la Galottière, 37140 Coteaux-sur-Loire",
    image: <img src={resto6} alt="Vincent cuisinier de campagne" />,
  },
  {
    nom: "Auberge du Bon Laboureur",
    adresse: "6 Rue Bretonneau, 37150 Chenonceaux",
    image: <img src={resto7} alt="Auberge du Bon Laboureur" />,
  },
  {
    nom: "Les Hautes Roches",
    adresse: "86 quai de la Loire 37210 ROCHECORBON",
    image: <img src={resto8} alt="chateau de pray" />,
  },
];

function restaurantRandom(restaurants) {
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  return restaurants[randomIndex];
}

function Restaurants() {
  const randomRestaurant = restaurantRandom(restoListe);

  return (
    <div>
      <h2>Les bons plans culinaires</h2>
      <p className="p-culinaire">
        Si vous êtes de passage sur Tours ou Tourangeaux, vous trouverez
        ci-dessous nos bons plans culinaires. N’hésitez pas à nous faire vos
        retours sur les endroits que nous avons sélectionnés pour vous !
      </p>
      <div className="culinaire-container">
        <div>
          <div>
            <h3>{randomRestaurant.nom}</h3>
            <div>{randomRestaurant.image}</div>
            <p>{randomRestaurant.adresse}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Restaurants;
