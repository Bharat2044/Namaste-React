# _Episode 11 - Data is the New Oil_

## Coding Assignment:

- Practice React Context with code examples
- Try out Nested Contexts

<br/>

# [_Live Link of Tasty Trails Food App Project_ 🤩](https://tasty-trails-episode11.netlify.app/)

<br/>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <title>Namaste React</title> -->
    <title>Tasty Trails | Delicious Food for You</title>
    <link
      rel="shortcut icon"
      href="./public/images/tasty-trails-logo.png"
      type="image/x-icon"
    />
  </head>
  <body>
    <div id="root">
      <h1>Not Rendered</h1>
    </div>

    <!-- Injected External JavaScript File -->
    <script
      type="module"
      src="./Episode 11 - Data is the New Oil/Theory - Notes, Assignments & Assignment Solution/Assignment Solution/Coding Assignment Solution/App.js"
    ></script>
  </body>
</html>
```

```css
/* index.css */
/* Select all CSS */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS for scroll-bar */
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

body {
  background-color: #e4e3e3;
  font-family: ProximaNova, arial, "Helvetica Neue", sans-serif;
}
```

```js
// constants.js
// Swiggy API for to get Restaurant data
export const SWIGGY_API_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

//  Swiggy API for to get Restaurant Item
export const MENU_API_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9046136&lng=77.614948&restaurantId=`;

// Restaurant Item Image CDN URL for Restaurant card
export const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/`;

// Swiggy Restaurant Path
export const SWIGGY_REST_API_PATH = `data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants`;

// Social Media Links - URL
export const LINKEDIN_LINK = "https://www.linkedin.com/in/bharat2044/";
export const GiTHUB_LINK = "https://github.com/Bharat2044";
export const TWITTER_LINK = "https://x.com/bharat__2044/";
export const EMAIL_LINK = "mailto:bharatkumar204451@gmal.com";

// Github - username and repository name
export const GITHUB_USERNAME = "Bharat2044";
export const GITHUB_REPOSITORY_NAME = "Namaste-React";

// Github API for User
export const GITHUB_USER_API = "https://api.github.com/users/";

// Github API for Repository
export const GITHUB_REPO_API = "https://api.github.com/repos/";
```

```js
// App.js
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Login from "./src/components/Login";
import { RestaurantShimmer } from "./src/components/Shimmer";
import UserContext from "./src/context/UserContext";
import "./index.css";

/**
 * Chunking
 * Lazy Loading
 * Code Splitting
 * Dynamic Imports
 * Dynamic Bundding
 * Prefetching
 * Suspense
 * On-Demand Loading
 */

const About = lazy(() => import("./src/components/About"));
const Body = lazy(() => import("./src/components/Body"));

const App = () => {
  const [userName, setUserName] = useState();

  // Authentication Logic
  useEffect(() => {
    // Make an API Call and send username and password
    const data = {
      name: "Guest User",
    };

    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="w-full flex flex-col justify-between items-center mt-[120px] min-h-[calc(100vh-120px)]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

// Children Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<RestaurantShimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={<h1 className="text-3xl font-bold">Loading...</h1>}
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/hello",
    element: <h1 className="text-3xl font-bold">Hello, World!!</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```

```js
// useRestaurantData.js
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
```

```js
// useRestaurantMenuData.js
import { useEffect, useState } from "react";
import { MENU_API_URL } from "../../../../../../public/common/constants";

const useRestaurantMenuData = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const fetchResMenusData = async () => {
    try {
      const response = await fetch(MENU_API_URL + resId);
      const json = await response.json();

      setRestaurantInfo(json?.data);
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchResMenusData();
  }, []);

  return restaurantInfo;
};

export default useRestaurantMenuData;
```

```js
// useOfflineStatus.js
import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  // Check if Online or Offline
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    // Event Listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup - Taught in Live Clsses
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // return true if online, otherewise return false
  return isOnline;
};

export default useOnlineStatus;
```

```js
// UserContext.js
import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
```

```js
// Header.js
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import tastyTrailsLogo from "../../../../../../public/images/tasty-trails-logo.png";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { FaCartArrowDown } from "react-icons/fa";
import UserContext from "../context/UserContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="w-screen h-20 flex justify-between items-center text-[#545454] px-6 py-0 bg-[#ffffff] shadow-[-2px_7px_5px_-6px_#0000009c] font-bold fixed top-0 left-0 z-[999]">
      <div>
        <Link to="/">
          <img
            className="w-14 h-14 rounded-full cursor-pointer"
            src={tastyTrailsLogo}
            alt="Tasty Trails Logo"
          />
        </Link>
      </div>

      <div>{isOnline ? "✅ Online" : "❌ Disconnected"}</div>

      <div>{loggedInUser ? loggedInUser.slice(0, 20) : ""}</div>

      <div>
        <ul className="list-none flex items-center">
          <li>
            <Link
              className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]">
            <FaCartArrowDown />
          </li>
          <li>
            {isLoggedIn ? (
              <button
                className="px-2 py-[6px] cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="px-2 py-[6px] cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
```

```js
// Body.js
import React, { useState, useContext } from "react";
import RestaurantCard, { withDiscountOffer } from "./RestaurantCard";
import UserOffline from "./UserOffline";
import { RestaurantShimmer } from "./Shimmer";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useRestaurantData from "../hooks/useRestaurantData";
import UserContext from "../context/UserContext";

const Body = () => {
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [showTopRated, setShowTopRated] = useState(true);
  const [tempUserName, setTempUserName] = useState("");

  // HOC for RestaurantCard with discount offer
  const RestaurantCardWithDiscount = withDiscountOffer(RestaurantCard);

  const isOnline = useOnlineStatus();
  const [listOfRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestaurantData();

  const { loggedInUser, setUserName } = useContext(UserContext);

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

  const handleUserNameSubmit = () => {
    if (tempUserName.trim().length) {
      setUserName(tempUserName);
    }
    setTempUserName(""); // Clear the input box after submission
  };

  if (!isOnline) {
    return <UserOffline />;
  }

  return listOfRestaurants.length === 0 ? (
    <RestaurantShimmer />
  ) : (
    <div className="w-[90%] flex flex-col items-center transition-all">
      <div className="w-[80%] flex flex-col justify-between items-center gap-6 mb-[30px]">
        <div className="w-[100%] flex items-center justify-center gap-[5px]">
          <label htmlFor="username" className="text-xl font-bold text-gray-600">
            UserName:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Bharat..."
            className="w-[40%] py-[2px] px-[10px] text-[1.2rem] text-[#3d3d3d] bg-transparent border-1 border-[#818181] border-[1px] rounded-lg outline-none focus:border-[#E46F20] transition-all mr-[10px]"
            value={tempUserName}
            onChange={(e) => setTempUserName(e.target.value)}
          />
          <button
            className="py-[3px] px-[10px] text-[1.2rem] text-[#fff] bg-[#E46F20] rounded-[8px] border-none hover:bg-[#016034]"
            onClick={handleUserNameSubmit}
          >
            Submit
          </button>
        </div>

        <div className="w-[100%] flex items-center justify-between">
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
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-[20px] gap-y-[25px]">
        {filteredRestaurants.length !== 0 ? (
          filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant?.info?.id}
              className="flex justify-center items-center"
            >
              {
                // If restaurant has discount offer then show discount offer
                restaurant.info.aggregatedDiscountInfoV3 ? (
                  <RestaurantCardWithDiscount {...restaurant?.info} />
                ) : (
                  <RestaurantCard {...restaurant?.info} />
                )
              }
            </div>
          ))
        ) : (
          <h2>Sorry, we couldn't find any restaurant for "{restaurantName}"</h2>
        )}
      </div>
    </div>
  );
};

export default Body;
```

```js
// RestaurantCard.js
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../../../../../public/common/constants";
import { MdStarRate } from "react-icons/md";

const RestaurantCard = ({
  id,
  cloudinaryImageId,
  name,
  areaName,
  sla,
  cuisines,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <Link
      to={"/restaurants/" + id}
      className="w-[250px] h-[300px] bg-white rounded-[8px] shadow-md cursor-pointer overflow-hidden hover:scale-[0.98]"
    >
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-[64%] shadow-sm"
      />
      <div className="h-[fit-content] px-[10px] overflow-hidden text-[15px] m-0">
        <h3 className="text-[18px] font-bold mt-[5px]">
          {name.length > 23 ? name.slice(0, 20) + "..." : name.slice(0, 24)}
        </h3>
        <div className="font-semibold flex items-center justify-between mr-[10px] text-[#545454]">
          <h4 className="flex items-center">
            <MdStarRate
              className="text-white w-[18px] h-[18px] rounded-[50%] p-[2px] mr-[3px]"
              style={
                avgRatingString > 4.0
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "red" }
              }
            />
            <span>{avgRatingString}</span>
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.deliveryTime} mins</h4>
        </div>
        <p className="text-[#828080] font-[500px] font-[Gilroy, sans-serif] text-[15px]">
          {cuisines.join(", ").length > 32
            ? cuisines.join(", ").slice(0, 28) + "..."
            : cuisines.join(", ").slice(0, 32)}
        </p>
        <p className="text-[#828080] font-[500px] font-[Gilroy, sans-serif] text-[15px]">
          {areaName}
        </p>
      </div>
    </Link>
  );
};

// Higher Order Component (HOC) for RestaurantCard with discount
// Input - RestaurantCard
// Output - RestaurantCard with discount offer if available else normal RestaurantCard
export const withDiscountOffer = (RestaurantCard) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props;

    return (
      <div className="w-[250px] h-[300px] bg-white rounded-[8px] shadow-md cursor-pointer overflow-hidden hover:scale-[0.98] relative">
        {aggregatedDiscountInfoV3 && (
          <div className="text-gray-50 text-xl font-extrabold absolute top-[55%] left-[2px]">{`${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`}</div>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
```

```js
// RestaurantMenu.js
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenuData from "../hooks/useRestaurantMenuData";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { RestaurantMenuShimmer } from "./Shimmer";
import { IMG_CDN_URL } from "../../../../../../public/common/constants";
import { MdStarRate } from "react-icons/md";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenuData(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (restaurantInfo === null) {
    return <RestaurantMenuShimmer />;
  }

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  const cards =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = cards.filter(
    (c) =>
      c?.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="w-[60%]">
      <div className="w-full flex items-center bg-black text-white shadow-md p-[20px] rounded-[8px] mb-[30px] overflow-hidden">
        <img
          className="w-[250px] h-[150px] object-cover rounded-[8px] mr-[40px] hover:scale-[1.1] transition-transform duration-300 ease-in-out"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />

        <div className="flex flex-col justify-center gap-[5px">
          <h1 className="text-[20px] font-bold">{name}</h1>
          <h3 className="text-[#bcbcbc] font-semibold text-[17px]">
            {locality}
          </h3>
          <p className="text-[15px] text-[#c1b9b9]">{cuisines?.join(", ")}</p>

          <h4 className="text-[#eceaea] flex gap-[20px] font-semibold">
            <div className="flex items-center">
              <MdStarRate
                className="w-[18px] h-[18px] rounded-[50%] p-[2px] mr-[5px]"
                style={
                  avgRatingString > 4.0
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              />
              <span>
                {avgRatingString || 3.8} ({totalRatingsString || "1K+ ratings"})
              </span>
            </div>
            <span>|</span>
            <span className="time">{sla?.slaString}</span>
          </h4>
        </div>
      </div>

      {/* Category Accordians */}
      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantMenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showMenuItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
```

```js
// RestaurantMenuCategory.js
import { useState } from "react";
import RestaurantMenuItemList from "./RestaurantMenuItemList";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

const RestaurantMenuCategory = ({ data, showMenuItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-full shadow-md px-[20px] bg-gray-50 rounded-md py-[10px] my-[30px]">
        {/* Category Header */}
        <div
          className="flex justify-between items-center text-xl font-extrabold cursor-pointer"
          onClick={handleClick}
        >
          <span>{`${data?.title.slice(0, 40)} (${
            data?.itemCards?.length
          })`}</span>
          <div className="text-[40px]">
            {showMenuItems ? <MdKeyboardArrowUp /> : <RiArrowDownSLine />}
          </div>
        </div>

        {/* Category Body */}
        {showMenuItems && <RestaurantMenuItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
```

```js
// RestaurantMenuItemList.js
import { IMG_CDN_URL } from "../../../../../../public/common/constants";
import { MdStarRate } from "react-icons/md";

const RestaurantMenuItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, ratings, imageId, description } =
          item.card.info;
        const avgRatingString = ratings?.aggregatedRating?.rating || 3.8;

        return (
          <div
            key={id}
            className="flex justify-between items-center gap-[50px] py-[20px] border-b border-[#5b5b5b]"
          >
            <div className="flex flex-col gap-[5px] w-[75%]">
              <h2 className="text-[20px] font-bold text-gray-700">{name}</h2>
              <h4 className="font-semibold text-gray-700">
                ₹{price / 100 || defaultPrice / 100}
              </h4>
              <p className="text-gray-600">
                {(description && description.slice(0, 140)) || "Dummy Data"}
              </p>
              <h4 className="flex font-semibold">
                <MdStarRate
                  className="text-white w-[18px] h-[18px] rounded-[50%] p-[2px] mr-[5px]"
                  style={
                    avgRatingString > 4.0
                      ? { backgroundColor: "green" }
                      : { backgroundColor: "red" }
                  }
                />
                <span className="text-[#484747]">
                  {avgRatingString} (
                  {ratings?.aggregatedRating?.ratingCountV2 || 6})
                </span>
              </h4>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                className="w-[150px] h-[100px] object-cover rounded-[8px]"
                src={IMG_CDN_URL + imageId}
                alt={name}
              />
              <button className="text-green-600 bg-white font-semibold rounded-md text-[1.2rem] px-[30px] py-[5px] cursor-pointer border-none relative bottom-[15px] hover:bg-gray-300 hover:text-green-800 transition-all 0.3s">
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuItemList;
```

```js
// UserOffline.js
const UserOffline = () => {
  return (
    <div className="w-[90%] h-[calc(100vh-250px)] flex flex-col items-center justify-center gap-[20px]">
      <h1 className="text-[#333] text-[3.5rem] font-bold text-center">
        🔴 Offline!
      </h1>
      <p className="text-[2.5rem] text-[#444444] font-semibold text-center">
        Sorry, it seems that you are currently offline. Please check your
        internet connection.
      </p>
    </div>
  );
};

export default UserOffline;
```

```js
// Shimmer.js
export const RestaurantShimmer = () => {
  return (
    <div className="w-[90%] flex flex-col items-center transition-all">
      <div className="w-[50%] h-[50px] bg-[#cecccc] rounded-lg mb-[30px]"></div>
      <div className="flex flex-wrap justify-center items-center gap-x-[1.5%] gap-y-[25px]">
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
        <div className="w-[250px] h-[300px] bg-[#cecccc] rounded-[8px]"></div>
      </div>
    </div>
  );
};

export const RestaurantMenuShimmer = () => {
  return (
    <div className="w-[60%] flex flex-wrap items-center justify-center gap-[30px]">
      <div className="w-[100%] h-[200px] bg-[#cecccc] rounded-[8px]"></div>
      <div className="w-[100%] h-[200px] bg-[#cecccc] rounded-[8px]"></div>
      <div className="w-[100%] h-[200px] bg-[#cecccc] rounded-[8px]"></div>
      <div className="w-[100%] h-[200px] bg-[#cecccc] rounded-[8px]"></div>
      <div className="w-[100%] h-[200px] bg-[#cecccc] rounded-[8px]"></div>
      <div className="w-[100%] h-[200px] bg-[#cecccc] rounded-[8px]"></div>
      <div className="w-[100%] h-[200px] bg-[#cecccc] rounded-[8px]"></div>
      <div className="w-[100%] h-[200px] bg-[#cecccc] rounded-[8px]"></div>
      <div className="w-[100%] h-[200px] bg-[#cecccc] rounded-[8px]"></div>
      <div className="w-[100%] h-[200px] bg-[#cecccc] rounded-[8px]"></div>
    </div>
  );
};
```

```js
// Contact.js
import { useState } from "react";
import contactUs from "../../../../../../public/images/contact-us.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting with TastyTrails, We will reply ASAP.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="w-[90%] flex flex-wrap justify-evenly items-center overflow-y-hidden">
      <div className="contact-left">
        <img className="w-[90%] object-cover" src={contactUs} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[3rem] font-semibold">Contact us</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center p-[10px]"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-[300px] bg-transparent text-[15px] px-[10px] py-[8px] m-[10px] rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]"
            type="text"
            placeholder="Name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[300px] bg-transparent text-[15px] px-[10px] py-[8px] m-[10px] rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-[300px] bg-transparent text-[15px] px-[10px] py-[8px] m-[10px] rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]"
            placeholder="Type your Message here..."
            required
          ></textarea>
          <button
            className="text-white bg-[#d97919] text-[1.2rem] font-semibold py-2.5 px-5 border-none rounded-[5px] cursor-pointer hover:bg-[darkgreen] transition-all 0.3s ease-in-out"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
```

```js
// About.js
import { Component } from "react";
import burgerImage from "../../../../../../public/images/burger-image.png";
import ProfileClass from "./ProfileClass";
import UserContext from "../context/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfile: false,
    };
  }

  render() {
    const { showProfile } = this.state;

    return (
      <div className="w-[90%] flex flex-col justify-center items-center flex-wrap gap-[40px]">
        <div className="flex flex-col justify-center items-center flex-wrap gap-[40px] transition-all ease-in-out delalay-[0.3s]">
          {
            <button
              className="text-white bg-[#d97919] text-[1.2rem] font-semibold py-2.5 px-5 border-none outline-none rounded-[5px] cursor-pointer hover:bg-[darkgreen] transition-all 0.3s ease-in-out"
              onClick={() => {
                this.setState({ showProfile: !showProfile });
              }}
            >
              {showProfile ? "Hide My Profile" : "Show My Profile"}
            </button>
          }
          {showProfile && (
            <ProfileClass name={"Bharat Kumar"} location={"Bihar"} />
          )}
        </div>

        <div className="flex items-center justify-between flex-wrap gap-[40px] w-full">
          <div className="about-left">
            <h1 className="text-[60px] text-[#494949] font-bold leading-[70px]">
              <UserContext.Consumer>
                {({ loggedInUser }) => {
                  return (
                    <div>
                      Hi, {loggedInUser ? loggedInUser.slice(0, 20) : ""}
                    </div>
                  );
                }}
              </UserContext.Consumer>
              Welcome to <br /> The world of <br />
              <span className="text-white bg-[#d97919] rounded-[15px] px-[15px] py-[5px]">
                Tasty & Fresh Food
              </span>
            </h1>
            <h4 className="text-[22px] mt-[10px] italic font-semibold">
              "Better you will feel if you eat a Tasty
              <span className="text-[#d97919]">Trails</span> healthy meal"
            </h4>
          </div>
          <div>
            <img src={burgerImage} alt="Food Image" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
```

```js
// ProfileClass.js
import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import {
  GITHUB_USER_API,
  GITHUB_USERNAME,
} from "../../../../../../public/common/constants";

class profileClass extends Component {
  constructor(props) {
    super(props); // Call the super constructor with props

    // Initialize the state of the component
    this.state = {
      userInfo: {
        name: "Bharat Kumar", // default values
        bio: "Java | React.js", // default values
        followers: 5, // default values
        avatar_url:
          "https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg",
      },
    };
  }

  async getUserInfo() {
    try {
      const response = await fetch(GITHUB_USER_API + GITHUB_USERNAME);
      const json = await response.json();

      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("Error while fetching user data: ", error);
    }
  }

  componentDidMount() {
    // API Calls (Fetch Data)
    this.getUserInfo();
  }

  render() {
    const { userInfo } = this.state; // object destructuring for json data

    return (
      <div className="flex justify-center items-center gap-[40px]">
        <div className="w-full overflow-hidden bg-white flex flex-col items-center justify-center gap-[20px] rounded-md p-[15px] shadow-2xl">
          <h1 className="text-[28px] font-bold text-center text-[#1e1e1e] overflow-y-hidden">
            About Me
          </h1>

          {/* Passing props data (full json data) from parent to child */}
          <ProfileUserClass data={userInfo} />
        </div>

        <div className="w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-md p-[15px] shadow-2xl">
          <h1 className="text-[28px] font-bold text-center text-[#1e1e1e] overflow-y-hidden">
            Tasty<span className="text-[darkorange]">Trails</span> App
            Repository
          </h1>

          {/* Passing props followers from parent to child */}
          <ProfileRepoClass followers={userInfo.followers} />
        </div>
      </div>
    );
  }
}

export default profileClass;
```

```js
// ProfileUserClass.js
import { Component } from "react";
import SocialProfileClass from "./SocialProfileClass";
import { GiTHUB_LINK } from "../../../../../../public/common/constants";

class ProfileUserClass extends Component {
  constructor(props) {
    super(props); // Call the super constructor with props
  }

  render() {
    const { name, avatar_url, bio } = this.props.data; // accessing full json data as props from parent class `ProfileClass`

    return (
      <div className="flex flex-col items-center justify-center gap-[20px] pt-0 px-[15px] pb-[10px]">
        <a
          href={GiTHUB_LINK}
          target="_blank"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="w-[180px] h-[180px] rounded-[50%] border-none cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            src={avatar_url}
            alt={name}
            title={name}
          />
          <h2 className="text-xl font-bold text-[#551A8B]">{name}</h2>
        </a>
        <p className="text-[16px] text-[#575757] font-medium">{bio}</p>
        <SocialProfileClass />
      </div>
    );
  }
}

export default ProfileUserClass;
```

```js
// SocialProfileClass.js
import { Component } from "react";
import {
  LINKEDIN_LINK,
  GiTHUB_LINK,
  TWITTER_LINK,
  EMAIL_LINK,
} from "../../../../../../public/common/constants";
import { SiGmail, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";

class SocialProfileClass extends Component {
  constructor(props) {
    super(props); // Call the super constructor with props
  }

  render() {
    return (
      <div className="text-[2rem] w-full flex justify-center items-center gap-[7%]">
        <a href={LINKEDIN_LINK} target="_blank">
          <i className="text-white bg-[#0a66c2] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out">
            <SiLinkedin />
          </i>
        </a>
        <a
          href={TWITTER_LINK}
          className="text-white bg-[#00acee] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out"
          target="_blank"
        >
          <i>
            <SiTwitter />
          </i>
        </a>
        <a
          href={GiTHUB_LINK}
          className="text-white bg-[#333] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out"
          target="_blank"
        >
          <i>
            <SiGithub />
          </i>
        </a>
        <a
          href={"mailto:" + EMAIL_LINK}
          className="text-white bg-[#ea4335] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out"
        >
          <i>
            <SiGmail />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
```

```js
// ProfileRepoClass.js
import { Component } from "react";
import {
  GITHUB_REPO_API,
  GITHUB_USERNAME,
  GITHUB_REPOSITORY_NAME,
} from "../../../../../../public/common/constants";
import { FaRegStar } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

class ProfileRepoClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repoInfo: {
        name: "Namaste-React",
        description: "Namaste React",
        forks_count: 0,
        stargazers_count: 0,
        html_url: "",
      },
    };
  }

  async componentDidMount() {
    try {
      // const response = await fetch(GITHUB_REPO_API + GITHUB_USERNAME + "/" + GITHUB_REPOSITORY_NAME);
      const response = await fetch(
        `${GITHUB_REPO_API}${GITHUB_USERNAME}/${GITHUB_REPOSITORY_NAME}`
      );

      const json = await response.json();
      this.setState({
        repoInfo: json,
      });
    } catch (error) {
      console.error("Error fetching repository data:", error);
    }
  }
  
  render() {
    const { followers } = this.props;
    const { name, description, forks_count, stargazers_count, html_url } =
      this.state.repoInfo;
    return (
      <div className="flex flex-col items-center justify-center gap-[20px] overflow-hidden bg-[#fff] p-[25px] m-[20px] shadow-[6px_6px_10px_-1px_#727171] rounded-md">
        <a
          className="text-[2rem] font-semibold px-[20px] py-[10px] text-[#ff8c00] hover:text-[#ff4500] rounded-md shadow-[6px_6px_10px_0px_#000000b5] hover:scale-[1.02] transition-all duration-300 ease-in-out"
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <h3 className="text-[18px] font-semibold text-[#5E5D5D] m-0">
          {description}
        </h3>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center gap-[20px] text-[#FF4500]">
            <h3 className="flex items-center justify-center text-[1.2rem] font-semibold gap-[5px]">
              <FiUsers />
              <span>{followers} Followers</span>
            </h3>
            <h3 className="flex items-center justify-center text-[1.2rem] font-semibold gap-[5px]">
              <BiGitRepoForked />
              <span>{forks_count} Forks</span>
            </h3>
            <h3 className="flex items-center justify-center text-[1.2rem] font-semibold gap-[5px]">
              <FaRegStar />
              <span>{stargazers_count} Stars</span>
            </h3>
          </div>
        </a>
      </div>
    );
  }
}

export default ProfileRepoClass;
```

```js
// Login.js
import { Formik } from "formik"; // import Formik from formik
import * as Yup from "yup"; // import Yup from yup
import { useNavigate } from "react-router-dom";

// create a schema for validation
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  function handleNavigate(values) {
    // Alert the input values of the form that we filled
    alert(values);
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate("/");
    }, 0);
  }

  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // call handleNavigate and pass input filed data
          handleNavigate(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="flex justify-center items-center h-[100vh] w-full">
            <div className="relative z-10 bg-[#FFAF60] rounded-[10px] max-w-[380px] px-[40px] py-[25px] w-[50%]">
              {/* Passing handleSubmit parameter to html form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span className="text-[40px] text-[#4b6cb7] mb-[25px] block text-center font-[500px]">
                  Login
                </span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="outline-none bg-[#F2F2F2] w-full border-0 rounded-[5px] m-0 mb-[15px] p-[15px] text-[14px] focus:border-[blue]"
                />
                {/* If validation is not passed show errors */}
                <p className="mt-0 mr-0 mb-[10px] ml-[10px] text-left text-[13px] text-[red]">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* input with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="outline-none bg-[#F2F2F2] w-full border-0 rounded-[5px] m-0 mb-[15px] p-[15px] text-[14px] focus:border-[blue-500]"
                />
                {/* If validation is not passed show errors */}
                <p className="mt-0 mr-0 mb-[10px] ml-[10px] text-left text-[13px] text-[red]">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button
                  className="uppercase outline-none bg-[#4b6cb7] text-[#FFF] text-[16px] cursor-pointer w-full border-0 rounded-md py-[15px] px-[40px] active:bg-[#395591] hover:bg-[blue] transition-all 0.3s ease-in-out"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
```

```js
// Footer.js
import { LINKEDIN_LINK } from "../../../../../../public/common/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full flex items-center justify-center gap-[2px] p-[18px] mt-[30px] bg-[#ffffff] shadow-[-2px_7px_5px_-6px_#0000009c]">
      Created By
      <span className="text-xl">❤️</span>
      <a
        className="text-purple-900 font-bold"
        href={LINKEDIN_LINK}
        target="_blank"
      >
        Bharat Kumar
      </a>
      <div>
        <span className="mx-[5px] text-[20px]">&copy;</span>
        {year}
      </div>
      <strong className="pl-[5px]">
        Tasty <span className="text-[#E46F20]">Trails</span>
      </strong>
    </div>
  );
};

export default Footer;
```

```js
// Error.js
import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../../../../../public/images/error-image.jpg";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col  justify-center items-center h-[calc(100vh-40px)] gap-y-[10px] my-[20px]">
      <div className="flex items-center justify-center">
        <img
          className="w-[90%] rounded-lg"
          src={errorImage}
          alt="Error Image"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-[10px]">
        <h1>Oops! Something Went Wrong!!</h1>
        <h3 className="error-data">{err.data}</h3>
        <h3 className="flex justify-center items-center gap-y-[10px]">
          <Link
            className="text-white bg-[#e46f20] p-[10px] font-semibold rounded-[8px] cursor-pointer hover:bg-[#016034] transition-all 0.3s ease-in-out"
            to="/"
          >
            Back Home
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Error;
```

<br/>
<br/>

# [_Live Link of Tasty Trails Food App Project_ 🤩](https://tasty-trails-episode11.netlify.app/)

<br/>

# Tasty TrailsLive Link Images

<br/>

![Tasty Trails App](./Tasty%20Trails%20Live%20Link%20Images/1.png) <br/>
![Tasty Trails App](./Tasty%20Trails%20Live%20Link%20Images/2.png) <br/>
![Tasty Trails App](./Tasty%20Trails%20Live%20Link%20Images/3.png) <br/>
![Tasty Trails App](./Tasty%20Trails%20Live%20Link%20Images/4.png) <br/>
![Tasty Trails App](./Tasty%20Trails%20Live%20Link%20Images/5.png) <br/>
![Tasty Trails App](./Tasty%20Trails%20Live%20Link%20Images/6.png) <br/>
![Tasty Trails App](./Tasty%20Trails%20Live%20Link%20Images/7.png) <br/>
![Tasty Trails App](./Tasty%20Trails%20Live%20Link%20Images/8.png) <br/>
![Tasty Trails App](./Tasty%20Trails%20Live%20Link%20Images/9.png) <br/>
![Tasty Trails App](./Tasty%20Trails%20Live%20Link%20Images/10.png) <br/>
