/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      let index = 0;
      let productRepeat = false;
      state.cart.forEach((product, i) => {
        if (product.product.name === action.payload.product.name) {
          index = i;
          productRepeat = true;
        }
      });

      if (productRepeat) {
        const quantityProduct = state.cart[index].quantity + action.payload.quantity;
        if (quantityProduct < action.payload.product.amount) {
          state.cart[index].quantity += action.payload.quantity;
        } else {
          state.cart[index].quantity = action.payload.product.amount;
        }
      } else {
        state.cart.push(action.payload);
      }
    },
    remove: (state) => {
      state.cart = [];
      state.total = 0;
    },
    setTotal: (state) => {
      state.cart.forEach((product) => {
        state.total = 0;
        state.total += product.quantity * product.product.price;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, setTotal } = cartSlice.actions;

export default cartSlice.reducer;
