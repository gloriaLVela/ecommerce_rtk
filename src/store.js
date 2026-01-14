// Import the configureStore function from @reduxjs/toolkit, used to create the Redux store.
import { configureStore } from '@reduxjs/toolkit';
// Import the reducer function, cartReducer, from the CartSlice file
import cartReducer from './Components/CartSlice';

// configureStore is invoked with an object containing the store configuration options.
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;