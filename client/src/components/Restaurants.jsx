import resto1 from "../assets/images/LOpidom.jpg";
import resto2 from "../assets/images/levidence.webp";
import resto3 from "../assets/images/Arboreetsens.jpg";
import resto4 from "../assets/images/chateaupray.jpg";
import "../scss/Restaurant.scss";

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
    nom: "Château de Pray",
    adresse: "rue du Cèdre, à Chargé, Amboise, 37530, France",
    image: <img src={resto4} alt="chateau de pray" />,
  },
  {
    nom: "Château de Pray",
    adresse: "rue du Cèdre, à Chargé, Amboise, 37530, France",
    image: <img src={resto4} alt="chateau de pray" />,
  },
  {
    nom: "Château de Pray",
    adresse: "rue du Cèdre, à Chargé, Amboise, 37530, France",
    image: <img src={resto4} alt="chateau de pray" />,
  },
  {
    nom: "Château de Pray",
    adresse: "rue du Cèdre, à Chargé, Amboise, 37530, France",
    image: <img src={resto4} alt="chateau de pray" />,
  },
];

function Restaurants() {
  /*const restoRandom = restoListe.map((resto, Math.ramdom) => {
    Math.ramdom()
    return restoRandom;
  });
  console.info(restoRandom);*/

  return (
    <div className="culinaire-container">
      <h2>Les bons plans culinaires</h2>
      <p>
        Que vous soyez de passage sur Tours ou Tourangeaux bien établis, vous
        trouverez ci-dessous nos bons plans culinaires. N’hésitez pas à nous
        faire vos retours sur les endroits que nous avons sélectionnés pour vous
        !
      </p>
      <div>
        <div>
          {restoListe.map((resto, index) => (
            <>
              <div key={resto.nom}>{resto.nom}</div>
              <div key={resto.nom}>{resto.image}</div>
              <div key={resto.nom}>{resto.adresse}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Restaurants;
