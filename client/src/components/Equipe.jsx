import { Link } from "react-router-dom";
import "../scss/equipe.scss";
import dataEquipe from "../js/equipe";

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
        {dataEquipe.map((individu) => (
          <div className="photo_individuelle" key={individu.name}>
            <img src={individu.image} alt="portrait individuelle" />
            <p className="nomEquipe">{individu.name}</p>
            <p className="roleEquipe">{individu.role}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Equipe;
