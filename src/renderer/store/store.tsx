import { configureStore } from "@reduxjs/toolkit";
import endpointsReducer from "./slices/endpoints-slice"

export const store = configureStore({
    reducer: {
        endpoints: endpointsReducer
    }
})