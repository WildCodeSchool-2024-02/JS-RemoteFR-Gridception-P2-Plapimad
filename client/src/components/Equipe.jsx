import { Link } from "react-router-dom";
import AbdelDjalil from "../assets/images/AbdelDjalil.jpg";
import Pedro from "../assets/images/pedro.jpg";
import Maeva from "../assets/images/Maeva.jpg";
import Lauryn from "../assets/images/Lauryn.jpg";
import "../scss/equipe.scss";

function Equipe() {
  return (
    <div className="backgroundEquipe">
      <button className="boutonRetour" type="submit">
        <Link className="lienRetour" to="/">
          Retour
        </Link>
      </button>
      <h1 className="titreEquipe">L'équipe Plapimad</h1>

      <section className="photos_equipe">
        <div className="photo_individuelle">
          <img src={Pedro} alt="pedro_img" />
          <p className="nomEquipe">Pierre</p>
          <p className="roleEquipe">Code Reviewer</p>
        </div>

        <div className="photo_individuelle">
          <img src={Maeva} alt="Maeva_img" />
          <p className="nomEquipe">Maëva</p>
          <p className="roleEquipe">Scrum Master</p>
        </div>

        <div className="photo_individuelle">
          <img src={AbdelDjalil} alt="AbdelDjalil_img" />
          <p className="nomEquipe">Abdel Djalil</p>
          <p className="roleEquipe">Product Owner</p>
        </div>

        <div className="photo_individuelle" id="margin_Lauryn">
          <img src={Lauryn} alt="lauryn_img" />
          <p className="nomEquipe">Lauryn</p>
          <p className="roleEquipe">Code Reviewer</p>
        </div>
      </section>
    </div>
  );
}

export default Equipe;
