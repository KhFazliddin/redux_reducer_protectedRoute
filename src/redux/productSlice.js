import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    addToPrice: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    removeBasket: (state) => {
      state.basket = [];
    },
  },
});

export const { addToBasket, addToPrice, removeBasket } = productSlice.actions;

export default productSlice.reducer;
