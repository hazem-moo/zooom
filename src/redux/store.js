import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice";
import basket from "./basketSlice";

export default configureStore({
    reducer: {
        counter,
        basket
    }
})