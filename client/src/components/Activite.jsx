import { useState, useEffect } from "react";
import axios from "axios";
import Restaurants from "./Restaurants";
import Lieu from "./Lieu";
import Meteo from "./Meteo";
import activitesListe from "../js/activite";

function Activite() {
  // Fonction pour convertir la vitesse du vent (passer de m/s à km/h)

  function convertWindData(dataMeterPerSecond) {
    const dataKilometerPerHour = (dataMeterPerSecond / 1000) * 3600;
    return Math.floor(dataKilometerPerHour);
  }

  // Fonction pour remplacer les données brutes (en km/h) du vent par des mots qui traduisent la force du vent
  function windStrength(dataWind) {
    if (dataWind <= 9) {
      return "Vent léger";
    }
    if (dataWind <= 40) {
      return "Vent modéré";
    }
    if (dataWind <= 60) {
      return "Vent fort";
    }
    if (dataWind <= 90) {
      return "Vent violent";
    }
    if (dataWind > 90) {
      return "Tempête";
    }
    return "Erreur";
  }

  const [datas, setDatas] = useState({});

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Tours&appid=${API_KEY}&units=metric&lang=fr`
      )
      .then((results) => {
        setDatas(results.data);
        console.info(results);
      })
      .catch((err) => console.info(err));
  }, [API_KEY]);

  return (
    <div className="activite-container" id="activite-container">
      <h1>Qu'allons nous faire aujourd'hui ?</h1>

      <Meteo
        icon={datas?.weather?.[0]?.icon}
        name={datas?.name}
        temperature={Math.floor(datas?.main?.temp)}
        ressenti={Math.floor(datas?.main?.feels_like)}
        description={datas?.weather?.[0]?.description}
        vent={windStrength(convertWindData(datas?.wind?.speed))}
      />

      <Lieu activites={activitesListe} icon={datas?.weather?.[0]?.icon} />

      <Restaurants />
    </div>
  );
}

export default Activite;
