import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import cartReducer from "./reducers/cartSlice";
import lastLocation from "./reducers/lastLocationSlice";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        lastUrl: lastLocation,
    }
});

export default store;