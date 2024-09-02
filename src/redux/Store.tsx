import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import { reducer } from "./Reducer";

const store = configureStore({
  reducer: {
    reducer:RootReducer
  },
});

export default store;