import { useState, useEffect } from "react";
import axios from "axios";
import Restaurants from "./Restaurants";
import Lieu from "./Lieu";
import Meteo from "./Meteo";

function Activite() {
  // Fonction pour convertir la vitesse du vent (passer de m/s à km/h)

  function convertWindData(dataMeterPerSecond) {
    let dataKilometerPerHour = (dataMeterPerSecond / 1000) * 3600;
    return Math.floor(dataKilometerPerHour);
  }

  // Fonction pour remplacer les données brutes (en km/h) du vents par des mots qui traduisent la force du vent
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
  }, []);

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

const activitesListe = [
  {
    Name: "Château de Chenonceau",
    Description: "Visite du Château ainsi que de ces jardins.",
    Lien: "https://www.chenonceau.com/",
    Image:
      "https://cdn.pixabay.com/photo/2020/06/27/07/15/chenonceau-5344916_1280.jpg",
    Météo: "Toujours",
  },
  {
    Name: "Place Plumereau Tours",
    Description: "Visite du vieux Tours et des quartiers historiques.",
    Lien: "https://www.touraineloirevalley.com/vieux-tours-place-plumereau-quartiers-historiques-bien-vivants/",
    Image:
      "https://reservation.tours-tourisme.fr/medias/images/prestations/visite-guidee-le-vieux-tours-place-plumereau-23813.jpg",
    Météo: "Toujours",
  },
  {
    Name: "Château Gaudrelle",
    Description: "Visite de domaines viticoles.",
    Lien: "https://www.touraineloirevalley.com/producteurs-locaux/chateau-gaudrelle-rochecorbon/",
    Image:
      "https://www.enpaysdelaloire.com/sites/default/files/styles/ogimage/public/mediatheque/images/sem_0015558_MD.jpg?itok=nR1dCcT2",
    Météo: "Soleil",
  },
  {
    Name: "Rue Nationale de Tours",
    Description: "Un moment shopping en ville.",
    Lien: "https://www.tripadvisor.fr/Attraction_Review-g187130-d246693-Reviews-Rue_Nationale-Tours_Indre_et_Loire_Centre_Val_de_Loire.html",
    Image:
      "https://tse4.mm.bing.net/th?id=OIP.LDNhF1tRNeRmehzDIKGoFwHaE8&pid=Api",
    Météo: "Soleil",
  },
  {
    Name: "Escape Game",
    Description: "Un moment ludique entre amis où en famille.",
    Lien: "https://escapetime-tours.fr/",
    Image:
      "https://www.paris-annuaire.com/design/uploads/2018/12/escape-game.jpg",
    Météo: "Pluie",
  },
  {
    Name: "Château de Villandry",
    Description: "Visite du château ainsi que ces jardins.",
    Lien: "https://www.chateauvillandry.fr/",
    Image:
      "https://i.pinimg.com/originals/35/a0/75/35a075cec6d5d438beffdf9c7fdbad2a.jpg",
    Météo: "Soleil",
  },
  {
    Name: "Quizz Room",
    Description: "Moment ludique entre amis ou en famille.",
    Lien: "https://www.quiz-room.com/villes/tours",
    Image:
      "https://tse1.mm.bing.net/th?id=OIP.PN5iaKNSnXTwtA-JpVluxAHaE8&pid=Api",
    Météo: "Pluie",
  },
  {
    Name: "Vol en montgolfière à Chenonceau",
    Description: "Moment magique et inoubliable.",
    Lien: "https://www.funbooker.com/fr/annonce/vol-en-montgolfiere-au-dessus-de-chenonceau/voir?ae=187&utm_source=affilae&utm_medium=terretv&aecid=661e8110fc13cfc2330edb76",
    Image:
      "https://www.art-montgolfieres.fr/img/cms/chenonceau/montgolfiere-chenonceau-6.jpg",
    Météo: "Soleil",
  },
  {
    Name: "Muséum d'Histoire naturelle",
    Description: "Venez découvrir les secrets de la nature",
    Lien: "https://www.museum.tours.fr/le-musee/",
    Image:
      "https://leprog.com/sites/leprog/files/styles/16x9_1920/public/Organisateurs/illustrations/MUS%C3%89UM%20D_HISTOIRE%20NATURELLE%20DE%20TOURS.png?h=b3e6f3e9&itok=zy4ZxfOr",
    Météo: "Pluie",
  },
  {
    Name: "Aquarium de Touraine",
    Description: "Une immersion dans le monde des poissons",
    Lien: "https://www.aquariumdetouraine.com/",
    Image:
      "https://reservation.tours-tourisme.fr/medias/images/prestations/aquarium-de-touraine-23647-23892-39991.jpg",
    Météo: "Pluie",
  },
];

export default Activite;
