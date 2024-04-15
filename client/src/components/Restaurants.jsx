import resto1 from "../assets/images/LOpidom.jpg";
import resto2 from "../assets/images/levidence.webp";
import resto3 from "../assets/images/Arboreetsens.jpg";
import resto4 from "../assets/images/chateaupray.jpg";
import "../scss/Lieu.scss";

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
];

function Restaurants() {
  return (
    <div className="culinaire-container">
      <h2>Les bons plans culinaires</h2>
      <p>
        Que vous soyez de passage sur Tours ou Tourangeaux bien établis, vous
        trouverez ci-dessous nos bons plans culinaires. N’hésitez pas à nous
        faire vos retours sur les endroits que nous avons sélectionnés pour vous
        !
      </p>
      <h4>{restoListe[0].nom}</h4>
      <p> {restoListe[0].adresse}, </p>
      <a
        href="https://www.lopidom.fr/fr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img src={resto1} alt="lopidom" />
      </a>

      <h4>{restoListe[1].nom}</h4>
      <p>
        {restoListe[1].adresse}, {restoListe[1].image}
      </p>
    </div>
  );
}
export default Restaurants;
