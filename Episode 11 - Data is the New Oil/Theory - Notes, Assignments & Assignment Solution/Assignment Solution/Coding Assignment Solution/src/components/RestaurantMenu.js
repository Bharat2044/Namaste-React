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
