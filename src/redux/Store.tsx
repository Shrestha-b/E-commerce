import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";  // Import the combined root reducer

const store = configureStore({
  reducer: RootReducer  // Use the combined reducer directly
});

export default store;
