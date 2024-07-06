import { useState, useEffect } from "react";
import {
  SWIGGY_API_URL,
  SWIGGY_REST_API_PATH,
} from "../../../../../../public/common/constants";

const useRestaurantData = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchRestaurantsData = async () => {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const json = await response.json();
      const restaurants = eval("json?." + SWIGGY_REST_API_PATH) || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  return [listOfRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurantData;
