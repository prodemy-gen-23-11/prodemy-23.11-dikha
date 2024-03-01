import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import cartReducer from "./reducers/cartSlice";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    }
});

export default store;