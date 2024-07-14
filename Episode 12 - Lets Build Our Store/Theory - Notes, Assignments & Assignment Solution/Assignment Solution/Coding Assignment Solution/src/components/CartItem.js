import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../../../../../public/common/constants";
import { addItemsToCart, removeItemsFromCart } from "../slices/cartSlice";
import Swal from "sweetalert2";

export default function CartItem(props) {
  const { name, price, defaultPrice, imageId } = props?.details?.item;
  const { quantity } = props?.details;

  // dispatching an action which will call the reducer
  const dispatch = useDispatch();

  const handleAddItemToCart = (item) => {
    Swal.fire({
      title: "Do you want to Add Item to the Cart?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(addItemsToCart(item));
      }
    });
  };

  const handleRemoveItemFromCart = (item) => {
    Swal.fire({
      title: "Do you want to Remove Item from the Cart?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeItemsFromCart(item));
      }
    });
  };

  return (
    <div className="flex flex-row items-start md:items-center p-4 border-b border-gray-300 last:border-b-0">
      <div className="mb-2 md:mb-0">
        <img
          src={`${IMG_CDN_URL}${imageId}`}
          alt={name}
          className="w-14 md:w-16 h-14 md:h-16 object-cover rounded"
        />
      </div>
      <div className="ml-2 md:ml-8 w-full flex  md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0 md:space-x-4">
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600">
            ₹ {(price / 100) * quantity || (defaultPrice / 100) * quantity}
          </p>
        </div>
        <div className="flex items-center border border-gray-300 font-bold">
          <button
            onClick={() => handleRemoveItemFromCart(props?.details?.item)}
            className="px-2 py-1 text-gray-700 rounded hover:scale-125"
          >
            -
          </button>
          <span className="mx-2 text-[green]">{quantity}</span>
          <button
            onClick={() => handleAddItemToCart(props?.details?.item)}
            className="px-2 py-1 text-gray-700 rounded hover:scale-125"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
