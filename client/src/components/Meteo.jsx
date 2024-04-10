import { useEffect, useState } from "react";
import axios from "axios";

function Meteo() {
  const [datas, setDatas] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Tours&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=fr`
      )
      .then((results) => {
        setDatas(results.data);
        console.info(results);
      })
      .catch((err) => console.info(err));
  }, []);

  return (
    <>
      <h1>Méteo</h1>
      <h2>{datas?.name}</h2>
      <p>Température: {datas?.main?.temp}°</p>
      <p>Vent: {datas?.wind?.speed}</p>
      <p>Ressentie: {datas?.main?.feels_like}</p>
      <p>{datas?.weather?.[0]?.description}</p>
      {datas?.weather?.[0]?.icon && (
        <img
          src={`https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`}
          alt="petite incon"
        />
      )}
    </>
  );
}
export default Meteo;
