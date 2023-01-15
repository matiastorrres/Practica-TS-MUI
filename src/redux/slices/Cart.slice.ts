import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getItem } from "../../utilities/localStorage";

// Define a type for the slice state
interface cartAddState {
  id: string | number;
  name: string;
  image: string;
  info: string;
}
interface cartRemoveState {
  id: string | number;
}

// Define the initial state using that type
const initialState: cartAddState[] = getItem("cart") || [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartAddState>) => {
      const { id } = action.payload;
      if (
        state.length === 0 ||
        state.filter((el) => el.id === id).length === 0
      ) {
        state.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<cartRemoveState>) => {
      const { id } = action.payload;
      if (state.some((item) => item.id === id)) {
        return (state = state.filter((item) => item.id !== id));
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
