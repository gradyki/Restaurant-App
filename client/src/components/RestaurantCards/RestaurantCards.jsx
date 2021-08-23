import React from "react";

export default function RestaurantCards(props) {
  const { restaurants } = props;
  console.log("cards log", restaurants);
  return (
    <div className="cards-container">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h1>{restaurant.restaurant_name}</h1>
        </div>
      ))}
    </div>
  );
}
