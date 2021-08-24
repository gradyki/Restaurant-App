import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { key } from "../../services/index";
import RestaurantCards from "../../components/RestaurantCards/RestaurantCards";

export default function ZipCodeRests() {
  const [restaurants, setRestaurants] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const searched = useParams();

  console.log("zipcode parsed", searched.id);

  useEffect(() => {
    let zip = parseInt(searched.id);
    const getRestaurants = async () => {
      let response = await axios.get(
        `https://api.documenu.com/v2/restaurants/zip_code/${zip}?size=100&page=1&key=${key}`
      );
      let restData = await response.data;
      if (restData.total_pages === 1) {
        setRestaurants(restData.data);
        setIsLoaded(true);
      } else {
        for (let i = 2; i <= restData.total_pages; i++) {
          let multipleResponses = restData.data;
          let multipleCalls = await axios.get(
            `https://api.documenu.com/v2/restaurants/zip_code/${zip}?size=100&page=${i}&key=${key}`
          );
          let toConcat = await multipleCalls.data.data;
          multipleResponses.push(toConcat);
          console.log("multiple responses array", multipleResponses);
          multipleResponses = multipleResponses.reduce(
            (a, b) => a.concat(b),
            []
          );
          setRestaurants(multipleResponses);
          setIsLoaded(true);
        }
      }
    };
    getRestaurants();
  }, [searched]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log("restaurants", restaurants);
    return (
      <div>
        <div>Zip Code Searched Page</div>
        <div>
          <RestaurantCards restaurants={restaurants} />
        </div>
      </div>
    );
  }
}
