import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import UserOffline from "./UserOffline";
import { RestaurantShimmer } from "./Shimmer";
import "../styles/Body.css";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useRestaurantData from "../hooks/useRestaurantData";

const Body = () => {
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [showTopRated, setShowTopRated] = useState(true);

  const isOnline = useOnlineStatus();
  const [listOfRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestaurantData();

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
    );

    setFilteredRestaurants(filtered);
    setSearchRestaurant(""); // Clear the search input box after search
    setRestaurantName(searchRestaurant);

    if (filtered.length === 0) {
      setShowTopRated(false);
    } else {
      setShowTopRated(true);
    }
  };

  const handleTopRated = () => {
    const topRated = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.4
    );
    setFilteredRestaurants(topRated);
    setRestaurantName("Top Rated");
  };

  const showAllRestaurant = () => {
    setFilteredRestaurants(listOfRestaurants);
    setRestaurantName("");
    setShowTopRated(true);
  };

  if (!isOnline) {
    return <UserOffline />;
  }

  return listOfRestaurants.length === 0 ? (
    <RestaurantShimmer />
  ) : (
    <div className="body">
      <div className="top-search">
        <div className="search-box">
          <input
            type="text"
            value={searchRestaurant}
            onChange={(e) => setSearchRestaurant(e.target.value)}
            placeholder="Search a restaurant you want..."
          />
          <button className="search" onClick={handleSearch}>
            Search
          </button>
        </div>
        {showTopRated ? (
          <button className="top-rated" onClick={handleTopRated}>
            Top Rated Restaurants
          </button>
        ) : (
          <button className="top-rated" onClick={showAllRestaurant}>
            Show All Restaurants
          </button>
        )}
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
