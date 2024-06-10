import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  // State Variable - useState Hook is used to create a state variable to store data and a function to update it.
  let [restaurantList, setRestaurantList] = useState(resList);
  let [showButton, setShowButton] = useState(true);

  // Function to update the restaurant list based on the rating.
  const filterRestaurantList = () => {  
    const filteredRestaurant = restaurantList.filter(
      (res) => res.info.avgRating > 4.3
    );

    setRestaurantList(filteredRestaurant);
    setShowButton(false);
  };

  return (
    <div className="body">
      <div className="search-box">
        <input placeholder="search a restaurant you want..." />
        <CiSearch className="search-icon" />
      </div>
      <div className="filter">
        {
          // Conditional Rendering - If the showButton is true, then the button will be displayed.
          showButton && (
            <button
              className="filter-btn"
              onClick={filterRestaurantList}
            >
              Top Rated Restaurants
            </button>
          )
        }
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
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
