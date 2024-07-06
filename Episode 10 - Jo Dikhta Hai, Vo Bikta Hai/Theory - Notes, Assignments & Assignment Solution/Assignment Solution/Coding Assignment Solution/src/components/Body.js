import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import UserOffline from "./UserOffline";
import { RestaurantShimmer } from "./Shimmer";
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
    <div className="w-[90%] flex flex-col items-center transition-all">
      <div className="w-[80%] flex justify-between items-center mb-[30px]">
        <div className="w-[70%] flex justify-center items-center">
          <input
            className="w-[90%] py-[6px] px-[10px] text-[1.2rem] text-[#3d3d3d] bg-transparent border-1 border-[#818181] border-r-0 border-[1px] rounded-l-[8px] outline-none focus:border-[#E46F20] transition-all"
            type="text"
            value={searchRestaurant}
            onChange={(e) => setSearchRestaurant(e.target.value)}
            placeholder="Search a restaurant you want..."
          />
          <button
            className="py-[7px] px-[10px] text-[1.2rem] text-[#fff] bg-[#E46F20] rounded-r-[8px] border-none hover:bg-[#016034]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {showTopRated ? (
          <button
            className="py-[7px] px-[10px] text-[1.2rem] text-[#fff] bg-[#E46F20] rounded-[8px] border-none hover:bg-[#016034]"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
        ) : (
          <button
            className="py-[7px] px-[10px] text-[1.2rem] text-[#fff] bg-[#E46F20] rounded-[8px] border-none hover:bg-[#016034]"
            onClick={showAllRestaurant}
          >
            Show All Restaurants
          </button>
        )}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-[20px] gap-y-[25px]">
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
