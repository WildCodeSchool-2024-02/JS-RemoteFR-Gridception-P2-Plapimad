import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [datas, setDatas] = useState({});

  useEffect(() => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=93c0be983c0e10b67517763b78c4eeef")
      .then((results) => {
        setDatas(results.data);
        console.log(results)
      })
      .catch((err) => console.log(err));
  }, []);



  return (

    <div>
      <p>{datas?.main?.temp}</p>
      {/* <img src={"https://openweathermap.org/img/wn/"[icon]} alt="petit nuage" /> */}
      <p>{datas?.name}</p>

    </div>
  );
}

export default App;
