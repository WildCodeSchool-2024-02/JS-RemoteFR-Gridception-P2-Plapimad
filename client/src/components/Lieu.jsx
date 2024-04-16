import "../scss/Lieu.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Lieu() {
  const tabFonctionTemps = 0;
  return (
    <>
      <h2>Les activités bon plans </h2>
      <Carousel>
        {activitesListe.map((slide) => (
          <div key={slide.Name}>
            <img src={slide.Image} alt={slide.Name} />
            <div className="overlay">
              <h2 className="overlay_title">{slide.Name}</h2>
              <p className="overlay_text">{slide.Description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}



// Créer une fonction 


// Si l'îcone de l'API est 01d.png - 02d.png - 03d.png - 04d.png - alors afficher les activités météo "Toujours" et "Soleil"


//Si l'îcone de l'API est 09d.png - 10d.png - 11d.png - 13d.png - 50d.png - alors afficher les activités météo "Toujours" et "Pluie"






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
    Name: "Rue Natioanale de Tours",
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
      "https://tse2.mm.bing.net/th?id=OIP.kYB6JXFLhKqdUwpOBdd-mAHaD4&pid=Api",
      Météo : "Soleil",
  },
  {
    Name: "Quizz Room",
    Description: "Moment ludique entre amis ou en famille.",
    Lien: "https://www.quiz-room.com/villes/tours",
    Image:
      "https://tse1.mm.bing.net/th?id=OIP.PN5iaKNSnXTwtA-JpVluxAHaE8&pid=Api",
      Météo : "Pluie",
  },
  {
    Name: "Vol en Montgolfière au-dessus de Chenonceau",
    Description: "Moment magique et inoubliable.",
    Lien: "https://www.funbooker.com/fr/annonce/vol-en-montgolfiere-au-dessus-de-chenonceau/voir?ae=187&utm_source=affilae&utm_medium=terretv&aecid=661e8110fc13cfc2330edb76",
    Image:
      "https://www.touraine-montgolfiere.fr/wp-content/uploads/2019/05/vol-montgolfiere-chateau-de-chenonceaux.jpg",
      Météo : "Soleil",
  },
  {
    Name: "",
    Description: "",
    Lien: "",
    Image:
      "",
      Météo : "Pluie",
  },
  {
    Name: "",
    Description: "",
    Lien: "",
    Image:
      "",
      Météo : "Pluie",
  },
];

export default Lieu;
