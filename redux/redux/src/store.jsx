import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./control/cartslice"
export const store = configureStore({
    reducer:{
        cart: cartReducer,

    },
});