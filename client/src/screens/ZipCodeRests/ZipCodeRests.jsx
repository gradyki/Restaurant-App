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

  let restData = [];

  console.log("zipcode parsed", searched.id);

  useEffect(() => {
    let zip = parseInt(searched.id);
    const getRestaurants = async () => {
      let response = await axios.get(
        `https://api.documenu.com/v2/restaurants/zip_code/${zip}?size=100&page=1&key=${key}`
      );
      setRestaurants(response.data);
      setIsLoaded(true);
    };
    getRestaurants();
  }, [searched]);

  // useEffect(() => {
  //   const getRestaurants = async () => {
  //     let response = await axios.get(
  //       `https://api.documenu.com/v2/restaurants/zip_code/${parseInt(
  //         searched.id
  //       )}?size=100&page=1&key=cc6decb23a852d654db440c3f36a5e2d`
  //     );
  //     restData.push(response.data);
  //     if (response.more_pages === true) {
  //       for (let i = 2; i <= response.total_pages; i++) {
  //         response = await axios.get(
  //           `https://api.documenu.com/v2/restaurants/zip_code/${parseInt(
  //             searched.id
  //           )}?size=100&page=${i}&key=cc6decb23a852d654db440c3f36a5e2d`
  //         );
  //         restData.push(response.data);
  //       }
  //       restData = restData.reduce((a, b) => a.concat(b), []);
  //       setRestaurants(restData);
  //     }
  //     setIsLoaded(true);
  //   };
  //   getRestaurants();
  // }, [searched]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log("restaurants", restaurants);
    return (
      <div>
        <div>Zip Code Searched Page</div>
        <div>{restaurants.data[0].restaurant_name}</div>
        <div>
          <RestaurantCards restaurants={restaurants.data} />
        </div>
      </div>
    );
  }
}

// let restData = []
// const getRestaurants = async () => {
//   let response = await fetch(`https://api.documenu.com/v2/restaurants/zip_code/10001?size=100&page=1&key=cc6decb23a852d654db440c3f36a5e2d`)
//   let dat = await response.json()
//   restData.push(dat.data)
//   if (dat.more_pages === true) {
//     for (let i = 2; i <= dat.total_pages; i++){
//       response = await fetch(`https://api.documenu.com/v2/restaurants/zip_code/10001?size=100&page=${i}&key=cc6decb23a852d654db440c3f36a5e2d`)
//       dat = await response.json()
//       restData.push(dat.data)
//     }
//     restData = restData.reduce((a, b) => a.concat(b), []);
//     console.log('rest data after loop', restData)
//   }
// }

// console.log('outside', restData)

// getRestaurants()
