import "../scss/accueil.scss";
import logo_GitHub from "../assets/images/logo_GitHub.png";

import logo_twitter from "../assets/images/logo_twitter.png";
import Logo_Plapimad from "../assets/images/Logo_PLapimad3.png";
import logo_instagram from "../assets/images/logo_instagram.png";
import logo_pinterest from "../assets/images/logo_pinterest.png";

function Accueil() {
  return (
    <div className="global-div">
      <div className="global-bar">
        <div className="logos_bar">
          <img id="logo_Plapimad" src={Logo_Plapimad} alt="Logo Plapimad" />

          <div className="logos">
            <a
              target="blank"
              href="https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-Gridception-P2-Plapimad"
            >
              <img
                className="img_accueil"
                src={logo_GitHub}
                alt="Logo GitHub"
              />
            </a>
            <a target="blank" href="https://twitter.com/?lang=fr">
              <img
                className="img_accueil"
                src={logo_twitter}
                alt="Logo Tweeter"
              />
            </a>
            <a target="blank" href="https://www.instagram.com/">
              <img
                className="img_accueil"
                src={logo_instagram}
                alt="Logo Instagram"
              />
            </a>
            <a target="blank" href="https://www.pinterest.fr/">
              <img
                className="img_accueil"
                src={logo_pinterest}
                alt="Logo pinterest"
              />
            </a>
          </div>
        </div>

        <ul className="ul_nav_bar">
          <li>
            <a href="#activite-container">Activités</a>
          </li>
          <li>
            <a href="#backgroundimage">Contact</a>
          </li>
        </ul>
      </div>
      <div className="principal_title">
        <h1>AventuresAtmo</h1>
        <p>"Chaque prévision est une opportunité à Tours"</p>
      </div>
    </div>
  );
}
export default Accueil;
