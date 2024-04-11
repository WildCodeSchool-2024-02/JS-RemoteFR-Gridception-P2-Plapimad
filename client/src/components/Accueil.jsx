import "../scss/accueil.scss";
import logo_GitHub from "../assets/images/logo_GitHub.png";
import carte_France from "../assets/images/carte_France.png";
import logo_twitter from "../assets/images/logo_twitter.png";
import Logo_Plapimad from "../assets/images/Logo_Plapimad.png";

function Accueil() {
  return (
    <div className="global-div">
      <div className="logos_bar">
        <img id="logo_Plapimad" src={Logo_Plapimad} alt="Logo Plapimad" />

        <div className="logos">
          <img src={logo_GitHub} alt="Logo GitHub" />
          <img src={logo_twitter} alt="Logo Tweeter" />
        </div>
      </div>

      <ul className="ul_nav_bar">
        <li>
          <a href="">Activités</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <div className="principal_title">
        <h1>AventuresAtmo</h1>
        <p>Chaque prévision est une opportunité à Tours</p>
      </div>

      <div className="France_map">
        <img id="France" src={carte_France} alt="carte de la France" />
      </div>
    </div>
  );
}
export default Accueil;
