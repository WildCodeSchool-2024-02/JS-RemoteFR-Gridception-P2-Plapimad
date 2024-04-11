import ChateauC from "../assets/images/Chateau-chenonceau.jpg";
import Festival from "../assets/images/terres-du-son.avif";
import "../scss/Lieu.scss";

function Lieu() {
  return (
    <div>
      <p>"Création carousselle des activité"</p>
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

export default Lieu;
