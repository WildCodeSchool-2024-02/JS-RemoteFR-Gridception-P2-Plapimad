import "../scss/accueil.scss";
function Accueil() {
  return (
    <div className="global-div">
      <div className="logos_bar">
        <img src="./assets/images/Logo_Plapimad.png" alt="Logo Plapimad" />

        <div className="logos">
          <img src="./assets/images/logo_GitHub.jpg" alt="Logo GitHub" />
          <img src="" alt="Logo Tweeter" />
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
        <p>Chaque prévisions est une opportunité à Tours</p>
      </div>
    </div>
  );
}
export default Accueil;
