import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice/userSlice";
import cartReducer from "./slice/cartSlice";
import searchReducer from "./slice/cartSlice";
export default configureStore({
  reducer: {
  user: userReducer,
  cart: cartReducer,
  search: searchReducer,
},
})