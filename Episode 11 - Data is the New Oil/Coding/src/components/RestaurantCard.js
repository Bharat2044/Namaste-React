import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../../../public/common/constants";
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
