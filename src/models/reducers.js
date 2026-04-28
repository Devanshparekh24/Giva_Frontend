import { combineReducers } from 'redux';
import navbarReducer from './navbarReducer';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';

// Combine all reducers (including legacy and new slices)
const rootReducer = combineReducers({
  navbar: navbarReducer,
  user: userReducer,
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
