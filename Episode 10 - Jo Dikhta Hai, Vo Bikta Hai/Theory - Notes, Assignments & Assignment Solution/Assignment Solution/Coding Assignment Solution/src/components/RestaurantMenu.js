import { RestaurantMenuShimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../hooks/useRestaurantMenuData";
import { IMG_CDN_URL } from "../../../../../../public/common/constants";
import { MdStarRate } from "react-icons/md";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenuData(resId);

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

  let itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

  return (
    <div className="w-[60%]">
      <div className="w-full flex items-center bg-black text-white p-[20px] rounded-[8px] mb-[30px] overflow-hidden">
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

      {itemCards.length ? (
        itemCards.map((item) => {
          const {
            id,
            name,
            price,
            defaultPrice,
            ratings,
            imageId,
            description,
          } = item.card.info;
          return (
            <div
              key={id}
              className="flex justify-between items-center gap-[50px] py-[40px] border-b border-[#5b5b5b]"
            >
              <div className="flex flex-col gap-[5px]">
                <h2 className="text-[20px] font-bold">{name}</h2>
                <h4 className="font-semibold">
                  ₹{price / 100 || defaultPrice / 100}
                </h4>
                <p>
                  {(description && description.slice(0, 60)) || "Dummy Data"}
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
                    {ratings?.aggregatedRating?.rating || 3.8} (
                    {ratings?.aggregatedRating?.ratingCountV2 || 6})
                  </span>
                </h4>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-[150px] h-[120px] object-cover rounded-[8px]"
                  src={IMG_CDN_URL + imageId}
                  alt={name}
                />
                <button className="text-green-600 bg-white font-semibold rounded-[5px] text-[1.2rem] px-[30px] py-[10px] cursor-pointer border-none relative bottom-[10px] hover:text-white hover:bg-[#E46F20] transition-all 0.3s">
                  ADD
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h2>No items available</h2>
      )}
    </div>
  );
};

export default RestaurantMenu;
