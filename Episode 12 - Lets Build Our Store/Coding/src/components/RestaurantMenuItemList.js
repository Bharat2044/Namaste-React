import { IMG_CDN_URL } from "../../../../public/common/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../slices/cartSlice";
import { MdStarRate } from "react-icons/md";
import Swal from "sweetalert2";

const RestaurantMenuItemList = ({ items }) => {
  // Dispatch - It is a function that sends actions to the Redux store. - Hooks
  const dispatch = useDispatch();
  const cardItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (item) => {
    // Alert if yes then add to
    Swal.fire({
      title: "Do you want to Add Item to the Cart?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire("Saved!", "", "success");

        // Add item to cart - Dispatching an action
        dispatch(addItem(item));
        // {payload: "Pizzaa", type: "cart/addItem"}
      }
    });
  };

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
              <button
                className="w-[100px] text-green-600 bg-white font-semibold rounded-md text-[1.2rem] px-[30px] py-[5px] cursor-pointer border-none relative bottom-[15px] hover:bg-gray-300 hover:text-green-800 transition-all 0.3s"
                onClick={() => handleAddToCart(item)}
              >
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
