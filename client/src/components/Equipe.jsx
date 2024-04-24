import { Link } from "react-router-dom";
import AbdelDjalil from "../assets/images/AbdelDjalil.jpg";
import Pedro from "../assets/images/pedro.jpg";
import Maeva from "../assets/images/Maeva.jpg";
import Lauryn from "../assets/images/Lauryn.jpg";
import "../scss/equipe.scss";

function Equipe() {
  return (
    <div className="backgroundEquipe">
      <button className="boutonRetour">
        <Link className="lienRetour" to="/">
          Retour
        </Link>
      </button>
      <h1 className="titreEquipe">L'équipe Plapimad</h1>
      <section className="photos_equipe">
        <div className="photo_individuelle">
          <img src={Pedro} alt="pedro_img" />
          <p>Pierre</p>
        </div>

        <div className="photo_individuelle">
          <img src={Maeva} alt="Maeva_img" />
          <p>Maéva</p>
        </div>

        <div className="photo_individuelle">
          <img src={AbdelDjalil} alt="AbdelDjalil_img" />
          <p>Abdel Djalil</p>
        </div>

        <div className="photo_individuelle">
          <img src={Lauryn} alt="lauryn_img" />
          <p>Lauryn</p>
        </div>
      </section>
    </div>
  );
}

export default Equipe;
