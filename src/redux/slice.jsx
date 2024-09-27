import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const productSlice = createSlice({
  name: "carProduct",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItem = action.payload;
    },

    deleteBook: (state, action) => {
      state.cartItem = state.cartItem.filter((item) =>
        item._id !== action.payload)
    },

    editBook: (state, action) => {
      const index = state.cartItem.flat().findIndex((item) => item._id === action.payload._id)
      if (index !== -1) {
        state.cartItem[index] = action.payload
      }
      else {
        state.cartItem.push(action.payload)
      }
    },
  }
});

export const { addToBook, deleteBook, editBook, setCartItems } = productSlice.actions;

export default productSlice.reducer;
