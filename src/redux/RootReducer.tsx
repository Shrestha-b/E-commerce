import { combineReducers } from "redux";
import cartReducer from "./Reducer";  // Assuming this is where you handle cartItems

// Combine reducers and use a key for each reducer
const RootReducer = combineReducers({
    cart: cartReducer  // Use 'cart' as the key for the cartReducer
});

export default RootReducer;
