import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Add item to cart - Mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // Remove item from cart - Mutating the state here
      state.items.pop();
      // state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      // Clear cart - Mutating the state here
      // state.items.length = 0;  // []
      state.items = [];
    },
  },
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


// {
//   actions: {
//     addItem,
//     removeItem,
//     clearCart
//   },
//   reducers
// }