import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../config/mockData";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredRestaurants = restaurantList.filter((restaurant) => (
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) || 
    restaurant.info.areaName.toLowerCase().includes(searchText.toLowerCase()) ||
    restaurant.info.cuisines.join(", ").toLowerCase().includes(searchText.toLowerCase())
  ));

  return (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="search a restaurant you want..."
        />
        <CiSearch className="search-icon" />
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
