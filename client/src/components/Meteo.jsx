import { useEffect, useState } from "react";
import axios from "axios";
import "../scss/Meteo.scss";

function Meteo() {
  const [datas, setDatas] = useState({});

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Tours&appid=${API_KEY}&units=metric&lang=fr`
      )
      .then((results) => {
        setDatas(results.data);
        
      })
      .catch((err) => console.info(err));
  }, []);

  return (
    <div className="meteo-container">
      <div className="box-info">
        <h1>Méteo</h1>
        <h2>{datas?.name}</h2>
      </div>
      <div className="box-globale">
        <div className="box-temp">
          <p>Température: {datas?.main?.temp}°</p>
          <p>Ressenti: {datas?.main?.feels_like}°</p>
        </div>
        {datas?.weather?.[0]?.icon && (
          <img
            src={`https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`}
            alt="petite incon"
          />
        )}
        <div className="icon-description">
          <p>{datas?.weather?.[0]?.description}</p>
          <p>💨 {datas?.wind?.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
export default Meteo;
