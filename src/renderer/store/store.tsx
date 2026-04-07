import { configureStore } from "@reduxjs/toolkit";
import { endpointsApi } from "../api/api";

export const store = configureStore({
    reducer: {
        [endpointsApi.reducerPath]: endpointsApi.reducer,
        endpoints: () => null
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(endpointsApi.middleware)
    }
})