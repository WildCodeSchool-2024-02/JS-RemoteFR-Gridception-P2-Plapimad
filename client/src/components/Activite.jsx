import Meteo from "./Meteo";

function Activite() {
  return (
    <div className="activite-container">
      <h1>Qu'allons nous faire aujourd'hui ?</h1>

      <Meteo />

      <h2>Les bons plans culinaires</h2>
      <p>
        Que vous soyez de passage sur Tours ou Tourengeaux bien établis, vous
        trouverez ci-dessous nos bons plans culinaires. N’hésitez pas à nous
        faire vos retours sur les endroits que nous avons sélectionnés pour vous
        !
      </p>
    </div>
  );
}

export default Activite;
