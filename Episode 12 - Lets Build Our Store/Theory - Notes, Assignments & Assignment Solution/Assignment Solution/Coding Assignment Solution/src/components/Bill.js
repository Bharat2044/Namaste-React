import { useState } from "react";

export default function Bill(props) {
  const { cartItems } = props;
  const [deliveryTip, setDeliveryTip] = useState(0);

  const itemTotal = cartItems.reduce((total, item) => {
    return (
      total +
      item.quantity * (item.item.price / 100 || item.item.defaultPrice / 100)
    );
  }, 0);

  const deliveryFee = 40,
    platformFee = 5,
    GST = (itemTotal * 5) / 100,
    otherCharges = itemTotal / 100;

  const subTotal =
    itemTotal + deliveryFee + platformFee + GST + otherCharges + deliveryTip;

  const handleTipChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setDeliveryTip(isNaN(value) ? 0 : value);
  };

  return (
    <div className="p-4 bg-white rounded-lg w-full  text-gray-500">
      <h2 className="text-md font-bold mb-4 text-gray-950">Bill Details</h2>
      <div className="flex justify-between mb-2">
        <span>Item Total</span>
        <span>₹ {itemTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Delivery Fee(fixed)</span>
        <span>₹ {deliveryFee.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2 border-t border-gray-300 pt-4">
        <span>Delivery Tip</span>
        <input
          type="number"
          placeholder="0"
          onChange={handleTipChange}
          className="w-16 p-1 rounded text-center border border-gray-300 appearance-none focus:outline-none"
          style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
        />
      </div>
      <div className="flex justify-between mb-2">
        <span>Platform fee</span>
        <span>₹ {platformFee.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>GST and Restaurant Charges</span>
        <span>₹ {(GST + otherCharges).toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-4 pt-4 text-lg text-gray-950 border-t border-gray-300">
        <span className="font-bold ">TO PAY</span>
        <span className="font-bold">₹ {subTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
