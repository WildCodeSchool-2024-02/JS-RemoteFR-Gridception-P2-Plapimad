import Culinaire from "./Culinaire";
import Lieu from "./Lieu";
import Meteo from "./Meteo";

function Activite() {
  return (
    <div className="activite-container">
      <h1>Qu'allons nous faire aujourd'hui ?</h1>

      <Meteo />

      <Lieu />

      <Culinaire />
    </div>
  );
}

export default Activite;
