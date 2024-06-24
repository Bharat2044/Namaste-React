import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantShimmer } from "./Shimmer";
import {
  SWIGGY_API_URL,
  SWIGGY_REST_API_PATH,
} from "../../../../public/common/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [restaurantName, setRestaurantName] = useState("");

  const fetchRestaurantsData = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
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

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
    );

    setFilteredRestaurants(filtered);
    setSearchRestaurant(""); // Clear the search input box after search
    setRestaurantName(searchRestaurant);
  };

  // Conditional rendering using ternary operator
  return listOfRestaurants.length === 0 ? (
    <RestaurantShimmer />
  ) : (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
          placeholder="search a restaurant you want..."
        />
        <button className="search" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.length !== 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          ))
        ) : (
          <h2>Sorry, we couldn't find any restaurant for "{restaurantName}"</h2>
        )}
      </div>
    </div>
  );
};

export default Body;
