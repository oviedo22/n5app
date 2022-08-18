import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from '../products/productsSlice';
import cartReducer from '../cart/cartSlice';

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
