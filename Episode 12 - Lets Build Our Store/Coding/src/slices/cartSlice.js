import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Add to the Cart: Vanialla(Older) Redux - Don't Mutate State, return is mandatory -  We have to return a new state
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Add to the Cart: Redux Toolkit(Latest - Redux Toolkit Immer Behind The Scence) - Mutating the state here, return is not mandatory - We can mutate the state directly
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // Remove item from cart - Mutating the state here
      state.items.pop();
      // state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      // won't work
      // state = []
      // console.log(current(state));

      // RTK(Redux Toolkit) - Either Mutate existing state or return a new state
      // Clear cart - Mutating the state here
      // state.items.length = 0;  // []
      state.items = [];
      // return { items: [] };
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
