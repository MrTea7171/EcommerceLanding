import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./ProductSlice";

const store = configureStore({
  reducer: {
    ProductData: productReducers,
  },
});

export default store;
