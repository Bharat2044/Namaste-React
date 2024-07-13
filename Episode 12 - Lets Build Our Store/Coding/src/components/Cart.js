import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuItemList from "./RestaurantMenuItemList";
import { clearCart } from "../slices/cartSlice";
import Swal from "sweetalert2";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // Never do this
  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    // Alert to clear cart
    Swal.fire({
      title: "Do you want to Clear the Cart?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Clear the cart - Dispatching an action
        dispatch(clearCart());
      }
    });
  };

  return (
    <div className="w-[60%] flex flex-col items-center justify-center">
      <h1 className="w-full text-center text-2xl font-bold border-b-2 border-blue-600 mb-[30px]">
        Cart
      </h1>

      <button
        className="py-[3px] px-[10px] text-[1.2rem] text-[#fff] bg-[#E46F20] rounded-[8px] border-none hover:bg-[#016034]"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>

      <div className="w-full shadow-md px-[20px] bg-gray-50 rounded-md py-[10px] my-[30px]">
        {
          // If cart is empty
          cartItems.length === 0 && (
            <div className="text-center text-2xl font-bold">
              Your cart is empty! Add items to your cart.
            </div>
          )
        }
        <RestaurantMenuItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
