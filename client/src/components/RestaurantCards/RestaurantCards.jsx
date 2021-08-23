import React from "react";

export default function RestaurantCards(props) {
  const { restaurants } = props;
  console.log("cards log", restaurants);
  return (
    <div>
      <h1>{restaurants[1].restaurant_name}</h1>
    </div>
  );
}
