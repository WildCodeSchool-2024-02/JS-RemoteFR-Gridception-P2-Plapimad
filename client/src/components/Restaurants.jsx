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
      <h2>Les bons plans culinaires</h2>
      <p className="p-culinaire">
        Si vous êtes de passage sur Tours ou Tourangeaux, vous trouverez
        ci-dessous nos bons plans culinaires. N’hésitez pas à nous faire vos
        retours sur les endroits que nous avons sélectionnés pour vous !
      </p>
      <div className="culinaire-container">
        <div>
          <div>
            <h2>{randomRestaurant.nom}</h2>
            <img src={randomRestaurant.image} alt="restaurant" />
            <a href={randomRestaurant.lien}></a>
            <p>{randomRestaurant.adresse}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
