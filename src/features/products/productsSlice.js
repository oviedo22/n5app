/* eslint-disable no-param-reassign */
/* eslint-disable quote-props */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pk: 10,
  products: {
    'products': [
      {
        'name': 'Leche',
        'price': 75000,
        'amount': 2,
        'id': 1,
      },
      {
        'name': 'Cereal',
        'price': 85300,
        'amount': 3,
        'id': 2,
      },
      {
        'name': 'Huevos',
        'price': 75000,
        'amount': 12,
        'id': 3,
      },
      {
        'name': 'Carne',
        'price': 85300,
        'amount': 21,
        'id': 4,
      },
      {
        'name': 'Queso',
        'price': 75000,
        'amount': 8,
        'id': 5,
      },
      {
        'name': 'Arroz',
        'price': 85300,
        'amount': 9,
        'id': 6,
      },
      {
        'name': 'Frijoles',
        'price': 85300,
        'amount': 32,
        'id': 7,
      },
      {
        'name': 'Lentejas',
        'price': 175000,
        'amount': 42,
        'id': 8,
      },
      {
        'name': 'Avena',
        'price': 85300,
        'amount': 56,
        'id': 9,
      },
      {
        'name': 'Pollo',
        'price': 375000,
        'amount': 23,
        'id': 10,
      },
    ],
  }
  ,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
      return state;
    },
    addStock: (state, action) => {
      state.products.products.forEach((product) => {
        if (product.id === action.payload.product.id) {
          product.amount += action.payload.quantity;
        }
      });
    },
    addProduct: (state, action) => {
      state.pk += 1;
      const product = {
        ...action.payload,
        id: state.pk,
      };
      state.products.products.push(product);
    },
    decrementAmount: (state, action) => {
      if (action.payload.length !== 0) {
        state.products.products.forEach((product) => {
          let newAmount = 0;
          action.payload.forEach((cartProduct) => {
            if (product.id === cartProduct.product.id) {
              newAmount = product.amount - cartProduct.quantity;
            }
          });
          product.amount = newAmount;
        });
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  addStock, addProduct, decrementAmount, reset,
} = productsSlice.actions;

export default productsSlice.reducer;
