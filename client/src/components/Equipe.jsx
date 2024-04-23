import { Link } from "react-router-dom";
import AbdelDjalil from "../assets/images/AbdelDjalil.jpg";
import Pedro from "../assets/images/pedro.jpg";
import Maeva from "../assets/images/Maeva.jpg";
import Lauryn from "../assets/images/Lauryn.jpg";
import "../scss/equipe.scss";

function Equipe() {
  return (
    <>
      <nav className="EquipeNav">
        <Link to="/">Accueil</Link>
      </nav>
      <h1>L'équipe Plapimad</h1>
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
    </>
  );
}

export default Equipe;
