export default function EmptyCart() {
  return (
    <div className="w-[60%]">
      <div className="flex flex-col items-center gap-[20px]">
        <p className="text-gray-600 text-[50px] font-bold">Cart Empty</p>
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="Empty Cart"
          className="w-[300px] object-cover bg-white"
        />
        <div className="flex justify-center items-center flex-col">
          <p className="text-gray-600 font-semibold text-xl">
            Your cart is empty.
          </p>
          <p className="text-gray-600 text-lg text-center">
            Add something from the menu.
          </p>
        </div>
      </div>
    </div>
  );
}
