import restoListe from "../js/Restaurants";

import "../scss/Restaurants.scss";

function restaurantRandom(restaurants) {
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  return restaurants[randomIndex];
}

function Restaurants() {
  const randomRestaurant = restaurantRandom(restoListe);

  return (
    <div className="culinaire-global">
      <h2 className="container-title">Les bons plans culinaires</h2>
      <p className="p-culinaire">
        Si vous êtes de passage sur Tours ou Tourangeaux, vous trouverez
        ci-dessous nos bons plans culinaires. N’hésitez pas à nous faire vos
        retours sur les endroits que nous avons sélectionnés pour vous !
      </p>
      <div className="resto-container">
        <div className="culinaire-container">
          <div>
            <div className="container-card">
              <a href={randomRestaurant.lien} target="_blank" rel="noreferrer">
                <h2>{randomRestaurant.nom}</h2>
              </a>
              <img
                className="img-card"
                src={randomRestaurant.image}
                alt="restaurant"
              />

              <p>{randomRestaurant.adresse}</p>
            </div>
          </div>
        </div>
        <blockquote>
          <p className="desc-container">{randomRestaurant.description}</p>
        </blockquote>
      </div>
    </div>
  );
}

export default Restaurants;
