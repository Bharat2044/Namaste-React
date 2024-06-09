import RestaurantList from "./RestaurantList";
import { CiSearch } from "react-icons/ci";

const Body = () => {
  return (
    <div className="body">
      <div className="search-box">
        <input placeholder="search" />
        <CiSearch className="search-icon" />
      </div>

      <RestaurantList />
    </div>
  );
};

export default Body;
