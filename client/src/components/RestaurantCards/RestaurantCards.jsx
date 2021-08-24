import React from "react";
import "./RestaurantCards.css";

export default function RestaurantCards(props) {
  const { restaurants } = props;
  console.log("cards log", restaurants);
  return (
    <div className="cards-container">
      {restaurants.map((restaurant) => (
        <div className="cards">
          <div className="googlemap-container">
            <img src="" alt="geolocation placeholder" />
          </div>
          <div key={restaurant.id} className="cards-info-container">
            <a href={restaurant.restaurant_website} target="_blank">
              <h1>{restaurant.restaurant_name}</h1>
              <h3>{restaurant.address.formatted}</h3>
              <h3>{restaurant.restaurant_phone}</h3>
              <h3>{restaurant.cuisines[0]}</h3>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
