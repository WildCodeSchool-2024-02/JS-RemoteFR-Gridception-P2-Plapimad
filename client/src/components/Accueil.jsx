import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import scrull from "../animation/scrull down.json";

import "../scss/accueil.scss";

import logoGitHub from "../assets/images/logoGitHub.png";
import logoTwitter from "../assets/images/logoTwitter.png";
import logoPlapimad from "../assets/images/logoPlapimad3.png";
import logoInstagram from "../assets/images/logoInstagram.png";
import logoPinterest from "../assets/images/logoPinterest.png";

function Accueil() {
  return (
    <div className="global-div">
      <div className="div_nav_bar">
        <div className="logos_bar">
          <img id="logo_Plapimad" src={logoPlapimad} alt="Logo Plapimad" />

          <div className="logos">
            <a
              target="blank"
              href="https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-Gridception-P2-Plapimad"
            >
              <img className="img_accueil" src={logoGitHub} alt="Logo GitHub" />
            </a>
            <a target="blank" href="https://twitter.com/?lang=fr">
              <img
                className="img_accueil"
                src={logoTwitter}
                alt="Logo Tweeter"
              />
            </a>
            <a target="blank" href="https://www.instagram.com/">
              <img
                className="img_accueil"
                src={logoInstagram}
                alt="Logo Instagram"
              />
            </a>
            <a target="blank" href="https://www.pinterest.fr/">
              <img
                className="img_accueil"
                src={logoPinterest}
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
            <Link to="/Equipe">Equipe</Link>
          </li>
          <li>
            <a href="#backgroundimage">Contact</a>
          </li>
        </ul>
      </div>

      <div className="principal_title">
        <h1 className="titre-accueil">AventuresAtmo</h1>
        <p className="p-accueil">
          "Chaque prévision est une opportunité à Tours
          <Lottie className="lottie-container" animationData={scrull} />
        </p>
      </div>
    </div>
  );
}
export default Accueil;
